#!/usr/bin/env node
/* gen_woorden_audio.js — natuurlijke uitspraak (MP3) voor alle woorden + voorbeeldzinnen in de A2-woordensets.
 *
 *   node tools/gen_woorden_audio.js            # alleen ontbrekende bestanden
 *   node tools/gen_woorden_audio.js --force    # alles opnieuw
 *
 * Leest de `items[].woord` van data/woorden/a2_*.js, spreekt de tekst zonder
 * "(…)"-toelichting uit met een neurale stem (edge-tts, via `uv run`) en schrijft
 * audio/woorden/<slug>.mp3. De `voorbeeld`-zinnen gaan (andere stem) naar
 * audio/zinnen/<hash>.mp3. woordSlug() en zinHash() moeten gelijk blijven aan
 * js/woorden.js. Vereist: uv, internet.
 */
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "audio", "woorden");
const OUT_ZIN = path.join(ROOT, "audio", "zinnen");
const STEM = "nl-NL-ColetteNeural";
const STEM_ZIN = "nl-NL-MaartenNeural";
const force = process.argv.includes("--force");

// Keep in sync with js/woorden.js
function spreekTekst(woord) { return String(woord || "").replace(/\(.*?\)/g, "").trim(); }
function woordSlug(woord) {
  return spreekTekst(woord).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
// FNV-1a (32-bit) over the trimmed sentence: short, stable file names for long sentences.
function zinHash(zin) {
  var t = String(zin || "").trim(), h = 0x811c9dc5;
  for (var i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return ("0000000" + h.toString(16)).slice(-8);
}

const dir = path.join(ROOT, "data", "woorden");
const todo = new Map(); // out-pad -> { tekst, stem }
function voegToe(out, tekst, stem) {
  if (todo.has(out) || (!force && fs.existsSync(out))) { return; }
  todo.set(out, { tekst, stem });
}
for (const f of fs.readdirSync(dir).filter((f) => /^a2_.*\.js$/.test(f))) {
  const sandbox = {};
  sandbox.window = sandbox;
  sandbox.INB = { registerWoorden: (w) => {
    for (const it of w.items || []) {
      const slug = woordSlug(it.woord);
      if (slug) { voegToe(path.join(OUT, slug + ".mp3"), spreekTekst(it.woord), STEM); }
      if (it.voorbeeld && it.voorbeeld.trim()) {
        voegToe(path.join(OUT_ZIN, zinHash(it.voorbeeld) + ".mp3"), it.voorbeeld.trim(), STEM_ZIN);
      }
    }
  } };
  vm.runInNewContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
}
if (!todo.size) { console.log("Alle woorden en zinnen hebben al audio."); process.exit(0); }
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(OUT_ZIN, { recursive: true });

// One Python process with limited concurrency: far faster than one uvx call per word.
const jobs = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "woorden-")), "jobs.json");
fs.writeFileSync(jobs, JSON.stringify([...todo].map(([out, j]) => ({ tekst: j.tekst, stem: j.stem, out }))));
const py = `
import asyncio, json, sys, edge_tts
jobs = json.load(open(sys.argv[1]))
sem = asyncio.Semaphore(8)
async def one(j):
    async with sem:
        for poging in range(3):
            try:
                await edge_tts.Communicate(j["tekst"], j["stem"], rate="-5%").save(j["out"])
                return
            except Exception as e:
                err = e
                await asyncio.sleep(2)
        print("MISLUKT:", j["tekst"], err, file=sys.stderr)
async def main():
    await asyncio.gather(*(one(j) for j in jobs))
asyncio.run(main())
print(len(jobs), "bestanden verwerkt")
`;
execFileSync("uv", ["run", "--quiet", "--with", "edge-tts", "python", "-c", py, jobs], { stdio: "inherit" });
fs.rmSync(path.dirname(jobs), { recursive: true, force: true });
