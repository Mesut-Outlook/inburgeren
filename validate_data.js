#!/usr/bin/env node
/* validate_data.js — schema validator for Inburgeren A2 data files.
 *
 * Loads each data/<vak>/*.js in an isolated sandbox (no browser needed),
 * captures its INB.registerExamen / INB.registerWoorden call, and checks it
 * against the schemas in CLAUDE.md. Also cross-checks js/data-files.js so you
 * see which files are wired, unwired, or missing.
 *
 * Usage:
 *   node validate_data.js                 # scan all data/<vak>/*.js
 *   node validate_data.js data/lezen/a2_lezen_1.js [...]   # only these
 *
 * Exit code 1 if any ERROR is found (WARNings do not fail). Owned by Opus.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = __dirname;
const VAKKEN = ["lezen", "luisteren", "spreken", "schrijven", "knm"];
const SCORED = ["lezen", "luisteren", "knm"];      // teksten/vragen schema
const PRODUCTIEF = ["schrijven", "spreken"];        // taken schema
// Rough per-exam question counts (warning only).
const VERWACHTE_VRAGEN = { lezen: 25, knm: 40 };
// B1/NT2 content set aside per CLAUDE.md — not errors if unwired.
const OPZIJGEZET = /(examen_20(23|24|25)|examen_oefen_1|w_20(23|24|25)|w_oefen_1)\.js$/;

let totalErrors = 0;
let totalWarnings = 0;
const seenExamenIds = {};
const seenWoordenIds = {};

// ---- helpers ----------------------------------------------------------------

function listDataFiles(args) {
  if (args.length) { return args.map((a) => path.resolve(ROOT, a)); }
  const out = [];
  for (const vak of VAKKEN.concat(["woorden"])) {
    const dir = path.join(ROOT, "data", vak);
    if (!fs.existsSync(dir)) { continue; }
    for (const f of fs.readdirSync(dir)) {
      // Skip set-aside B1/NT2 content in the default scan (still checkable by arg).
      if (f.endsWith(".js") && !OPZIJGEZET.test(f)) { out.push(path.join(dir, f)); }
    }
  }
  return out.sort();
}

// Read INB.dataFiles from js/data-files.js (+ local override if present).
function readManifest() {
  const wired = new Set();
  for (const mf of ["js/data-files.js", "js/data-files.local.js"]) {
    const p = path.join(ROOT, mf);
    if (!fs.existsSync(p)) { continue; }
    const sandbox = {};
    sandbox.window = sandbox;
    sandbox.console = { log() {}, error() {}, warn() {} };
    try {
      vm.runInNewContext(fs.readFileSync(p, "utf8"), sandbox, { filename: mf });
      for (const entry of (sandbox.INB && sandbox.INB.dataFiles) || []) {
        wired.add(entry.split("?")[0]); // strip ?v=
      }
    } catch (e) { /* ignore manifest parse errors here */ }
  }
  return wired;
}

// Load one data file, returning {examens:[], woorden:[]} captured, or throwing.
function loadCaptured(file) {
  const examens = [];
  const woorden = [];
  const sandbox = {};
  sandbox.window = sandbox;
  sandbox.console = { log() {}, error() {}, warn() {} };
  sandbox.INB = {
    registerExamen: (e) => examens.push(e),
    registerWoorden: (w) => woorden.push(w),
    tr: (o) => (o && (o.nl || o.en || o.tr)) || "",
    t: (k) => k
  };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
  return { examens, woorden };
}

// ---- validation -------------------------------------------------------------

function validateExamen(e, rel, errs, warns) {
  if (!e.id) { errs.push("examen mist 'id'"); return; }
  if (seenExamenIds[e.id]) {
    errs.push(`dubbele examen-id '${e.id}' (ook in ${seenExamenIds[e.id]})`);
  } else { seenExamenIds[e.id] = rel; }

  if (!VAKKEN.includes(e.vak)) { errs.push(`onbekend vak '${e.vak}'`); }
  if (e.niveau !== "A2") { warns.push(`niveau is '${e.niveau}' (verwacht 'A2')`); }

  if (PRODUCTIEF.includes(e.vak)) {
    const taken = e.taken || [];
    if (!taken.length) { errs.push("productief examen zonder 'taken[]'"); }
    taken.forEach((t, i) => {
      const prompt = e.vak === "spreken" ? t.vraag : t.situatie;
      if (!prompt) { errs.push(`taak ${i + 1}: mist ${e.vak === "spreken" ? "'vraag'" : "'situatie'"}`); }
      const model = t.modelAntwoorden || (t.modelAntwoord ? [t.modelAntwoord] : []);
      if (!model.length) { errs.push(`taak ${i + 1}: geen modelAntwoord(en)`); }
      if (e.vak === "schrijven" && !(t.eisen && t.eisen.length)) {
        warns.push(`taak ${i + 1}: geen 'eisen[]' checklist`);
      }
      if (t.tips && !(t.tips.nl && t.tips.en && t.tips.tr)) {
        warns.push(`taak ${i + 1}: 'tips' niet drietalig (nl/en/tr)`);
      }
    });
    return;
  }

  // scored exam (lezen / knm / luisteren)
  const teksten = e.teksten || [];
  if (!teksten.length) { errs.push("geen 'teksten[]'"); }
  let totaalVragen = 0;
  teksten.forEach((tk, ti) => {
    if (e.vak !== "knm" && !tk.html) { warns.push(`tekst ${ti + 1}: lege 'html' (leestekst ontbreekt)`); }
    const vragen = tk.vragen || [];
    if (!vragen.length) { warns.push(`tekst ${ti + 1}: geen 'vragen[]'`); }
    vragen.forEach((v) => {
      totaalVragen++;
      const n = totaalVragen;
      if (!v.vraag) { errs.push(`vraag ${n}: mist 'vraag'`); }
      const opties = v.opties || [];
      if (opties.length < 2) { errs.push(`vraag ${n}: < 2 opties`); }
      if (typeof v.antwoord !== "number" || v.antwoord < 0 || v.antwoord >= opties.length) {
        errs.push(`vraag ${n}: 'antwoord' (${v.antwoord}) buiten bereik 0..${opties.length - 1}`);
      }
      if (!v.uitleg) { warns.push(`vraag ${n}: geen 'uitleg'`); }
      else if (!(v.uitleg.nl && v.uitleg.en && v.uitleg.tr)) {
        warns.push(`vraag ${n}: 'uitleg' niet drietalig (nl/en/tr)`);
      }
    });
  });

  if (typeof e.geslaagdVanaf !== "number") { warns.push("geen 'geslaagdVanaf'"); }
  else if (e.geslaagdVanaf > totaalVragen) {
    errs.push(`'geslaagdVanaf' (${e.geslaagdVanaf}) > aantal vragen (${totaalVragen})`);
  }
  const verwacht = VERWACHTE_VRAGEN[e.vak];
  if (verwacht && totaalVragen !== verwacht) {
    warns.push(`${totaalVragen} vragen (verwacht ~${verwacht} voor ${e.vak})`);
  }
}

function validateWoorden(w, rel, errs, warns) {
  if (!w.id) { errs.push("woordenset mist 'id'"); return; }
  if (seenWoordenIds[w.id]) {
    errs.push(`dubbele woorden-id '${w.id}' (ook in ${seenWoordenIds[w.id]})`);
  } else { seenWoordenIds[w.id] = rel; }

  const items = w.items || [];
  if (!items.length) { errs.push("geen 'items[]'"); }
  items.forEach((it, i) => {
    if (!it.woord) { errs.push(`item ${i + 1}: mist 'woord'`); }
    if (!it.nl) { warns.push(`item ${i + 1}: mist 'nl' uitleg`); }
    if (!it.tr) { warns.push(`item ${i + 1}: mist 'tr' vertaling`); }
  });
  (w.vragen || []).forEach((v, i) => {
    const n = i + 1;
    if (!["mc", "invoer", "gat"].includes(v.type)) { errs.push(`vraag ${n}: onbekend type '${v.type}'`); }
    if (v.type === "mc") {
      if (!(v.opties && v.opties.length >= 2)) { errs.push(`vraag ${n} (mc): < 2 opties`); }
      if (typeof v.antwoord !== "number" || v.antwoord < 0 || v.antwoord >= (v.opties || []).length) {
        errs.push(`vraag ${n} (mc): 'antwoord' buiten bereik`);
      }
    }
    if (v.type === "invoer" && !v.antwoord) { errs.push(`vraag ${n} (invoer): mist 'antwoord'`); }
    if (v.type === "gat") {
      if (!v.zin || v.zin.indexOf("___") === -1) { errs.push(`vraag ${n} (gat): 'zin' zonder '___'`); }
      if (!v.antwoord) { errs.push(`vraag ${n} (gat): mist 'antwoord'`); }
    }
  });
}

// ---- run --------------------------------------------------------------------

const files = listDataFiles(process.argv.slice(2));
const wired = readManifest();
const C = { red: "\x1b[31m", yellow: "\x1b[33m", green: "\x1b[32m", dim: "\x1b[2m", reset: "\x1b[0m" };

console.log(`\nValidating ${files.length} data file(s)...\n`);

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const errs = [];
  const warns = [];

  // 1. syntax
  try {
    execSync(`node --check "${file}"`, { stdio: "pipe" });
  } catch (e) {
    console.log(`${C.red}✗ SYNTAX${C.reset} ${rel}\n   ${String(e.stderr || e).trim().split("\n").slice(0, 3).join("\n   ")}`);
    totalErrors++;
    continue;
  }

  // 2. load + schema
  let captured;
  try {
    captured = loadCaptured(file);
  } catch (e) {
    console.log(`${C.red}✗ LOAD${C.reset} ${rel}\n   ${String(e.message).trim()}`);
    totalErrors++;
    continue;
  }

  const n = captured.examens.length + captured.woorden.length;
  if (n === 0) { warns.push("geen register-call gevonden (registerExamen/registerWoorden)"); }
  if (n > 1) { warns.push(`${n} register-calls in één bestand (conventie: 1 per bestand)`); }
  captured.examens.forEach((e) => validateExamen(e, rel, errs, warns));
  captured.woorden.forEach((w) => validateWoorden(w, rel, errs, warns));

  // 3. manifest wiring (skip for set-aside B1 content)
  if (!wired.has(rel) && !OPZIJGEZET.test(rel)) {
    warns.push("niet in js/data-files.js (nog niet 'gewired')");
  }

  totalErrors += errs.length;
  totalWarnings += warns.length;

  const tag = errs.length ? `${C.red}✗ ERROR${C.reset}`
    : warns.length ? `${C.yellow}⚠ WARN ${C.reset}`
    : `${C.green}✓ OK   ${C.reset}`;
  const ids = captured.examens.map((e) => e.id).concat(captured.woorden.map((w) => w.id)).join(", ");
  console.log(`${tag} ${rel}${ids ? C.dim + "  [" + ids + "]" + C.reset : ""}`);
  errs.forEach((m) => console.log(`   ${C.red}• ${m}${C.reset}`));
  warns.forEach((m) => console.log(`   ${C.yellow}• ${m}${C.reset}`));
}

// wired-but-missing-on-disk
for (const w of wired) {
  if (!fs.existsSync(path.join(ROOT, w))) {
    console.log(`${C.red}✗ MISSING${C.reset} ${w} is in manifest maar bestaat niet op schijf`);
    totalErrors++;
  }
}

console.log(`\n${totalErrors ? C.red : C.green}${totalErrors} error(s)${C.reset}, ${C.yellow}${totalWarnings} warning(s)${C.reset}\n`);
process.exit(totalErrors ? 1 : 0);
