#!/usr/bin/env node
/* gen_luisteren_audio.js — genereert natuurlijke MP3's voor luisteren-examens.
 *
 *   node tools/gen_luisteren_audio.js data/luisteren/a2_luisteren_1.js [--force]
 *
 * Per tekst (fragment) wordt elke `audio`-regel voorgelezen door een neurale
 * Microsoft-stem (edge-tts via `uvx`, geen installatie nodig) en met ffmpeg
 * aan elkaar geplakt (korte pauze tussen sprekers). Uitvoer volgt de conventie
 * die js/lezen.js verwacht:  audio/luisteren/<examen.id>/fNN.mp3
 * Bestaande bestanden worden overgeslagen, tenzij --force.
 * Vereist: uv (uvx), ffmpeg, internet.
 */
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const STEM = { v: "nl-NL-ColetteNeural", m: "nl-NL-MaartenNeural", n: "nl-NL-FennaNeural" };
const RATE = "-5%";     // iets rustiger dan normaal, voor A2
const PAUZE = 0.6;      // seconden stilte tussen regels

const file = process.argv[2];
const force = process.argv.includes("--force");
if (!file) { console.error("Gebruik: node tools/gen_luisteren_audio.js <data/luisteren/…js> [--force]"); process.exit(1); }

const examens = [];
const sandbox = { console };
sandbox.window = sandbox;
sandbox.INB = { registerExamen: (e) => examens.push(e) };
vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "luister-"));
const stilte = path.join(tmp, "stilte.mp3");
execFileSync("ffmpeg", ["-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
  "-t", String(PAUZE), "-q:a", "9", stilte]);

for (const ex of examens) {
  if (ex.vak !== "luisteren") { continue; }
  const outDir = path.join(ROOT, "audio", "luisteren", ex.id);
  fs.mkdirSync(outDir, { recursive: true });
  (ex.teksten || []).forEach((tk, ti) => {
    const out = path.join(outDir, "f" + String(ti + 1).padStart(2, "0") + ".mp3");
    if (fs.existsSync(out) && !force) { console.log("= " + path.relative(ROOT, out)); return; }

    const delen = [];
    (tk.audio || []).forEach((r, ri) => {
      const mp3 = path.join(tmp, `t${ti}_r${ri}.mp3`);
      execFileSync("uvx", ["edge-tts", "--voice", STEM[r.spreker] || STEM.n, "--rate=" + RATE,
        "--text", r.tekst, "--write-media", mp3], { stdio: ["ignore", "ignore", "inherit"] });
      if (delen.length) { delen.push(stilte); }
      delen.push(mp3);
    });

    // concat-filter: decodeert alle delen en schrijft één mono-MP3 (klein genoeg voor Pages).
    const args = ["-loglevel", "error", "-y"];
    delen.forEach((d) => args.push("-i", d));
    args.push("-filter_complex", delen.map((_, i) => `[${i}:a]`).join("") + `concat=n=${delen.length}:v=0:a=1[a]`,
      "-map", "[a]", "-ac", "1", "-b:a", "48k", out);
    execFileSync("ffmpeg", args);
    console.log("+ " + path.relative(ROOT, out) + "  (" + (tk.titel || "") + ")");
  });
}
fs.rmSync(tmp, { recursive: true, force: true });
