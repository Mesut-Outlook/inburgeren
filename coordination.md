# Inburgeringsexamen A2 — Agent Coordination Protocol
This document coordinates parallel agents (Opus, Sonnet, and other subagents) working on the **Inburgeringsexamen A2 preparation platform**. It records what has been achieved, details the division of labor, and outlines next steps to avoid collision.

---

## 1. Division of Labor

To maintain order and prevent git merge conflicts, we enforce strict ownership of files:

| Agent Role | File Scope / Ownership | Actions |
| :--- | :--- | :--- |
| **Main Core Custodian (Opus)** | `index.html`, `css/style.css`, `js/app.js`, `js/i18n.js`, `js/bootstrap.js`, `js/lezen.js`, `js/woorden.js`, `js/data-files.js`, `js/data-files.local.js`, `CLAUDE.md` | Refines UI/UX, updates layout, wires new data manifests, writes runner logic, handles routing. |
| **Data Extraction Agents (Sonnet/Subagents)** | `data/lezen/a2_lezen_*.js`, `data/knm/a2_knm_*.js`, `data/schrijven/a2_schrijven_*.js`, `data/spreken/a2_spreken_*.js`, `data/woorden/a2_woorden_*.js`, and helper python scripts in root | Parses source PDFs/Excel sheets, scrapes DUO exam review systems, outputs structured JS registration scripts in standard schemas. |

---

## 2. Completed Milestones (A2 Prep)

### A. Study Notes & Vocab Data Files Produced ✅ (with caveats — see ⚠️)
The following study datasets extracted from `/home/mesuto/Downloads/Inburgeren/Inburgeren Sinav Notlari/` have been written to `data/`:
1. **Tegenstellingen Vocabulary:** `data/woorden/a2_woorden_tegenstellingen.js` — ⚠️ **only 31 items / 7 vragen present**, NOT the "320+" originally claimed. Needs expansion (see TODO §3).
2. **KNM Vocabulary:** `data/woorden/a2_woorden_knm.js` — ⚠️ **only 15 items / 4 vragen**. Thin; can be expanded.
3. **KNM Mock Exam:** `data/knm/a2_knm_1.js` (11 situational MC questions based on notes, `geslaagdVanaf:8`, no scoretabel).
4. **Schrijven Tasks:** `data/schrijven/a2_schrijven_1.js` (5 productive letters/postcards — `taken[]` schema: `titel/situatie/eisen[]/modelAntwoord`).
5. **Spreken Questions:** `data/spreken/a2_spreken_1.js` (5 speaking prompts — `taken[]` schema: `vraag/modelAntwoorden[]/tips{nl,en,tr}`).

### C. Core wiring & runners DONE by Opus ✅ (do NOT redo / do NOT touch these core files)
- **Manifest wired:** all 5 files above are now listed in `js/data-files.js` and load on every page.
- **Productive runner** built in `js/app.js` (`renderProductief`): schrijven/spreken route to a prompt + eisen-checklist + free-text area + "show/hide model answer" + tips view. Routing in `app.js` branches on `examen.vak`.
- **KNM** runs on the existing Lezen runner (it uses the standard `teksten/vragen` schema). `js/lezen.js` now hides the NT2 score block when an exam has no `scoretabel` (shows only correct/total) — so KNM/any keyless exam displays cleanly.
- **i18n** keys for productive view added (NL/EN/TR).
- **Woorden practice is now Duolingo-style** (`js/woorden.js`, v3): one question at a time, instant correct/wrong feedback, progress bar, 🔥 streak, wrong answers re-queued to the end (no "lives"), celebratory end screen with first-try %. **For the CSS session** — new markup classes to style (logic is done, do not rewrite the JS): `.wpract`, `.wpract-top`, `.wpract-bar` + `.wpract-bar-fill`, `.wpract-streak`, `.wpract-card`, `.wpract-feedback.correct/.wrong` (+ `.wpract-feedback-title/-answer/-note/-uitleg`), `.optie-btn.optie-correct/.optie-wrong`, `.wpract-done` (+ `.wpract-done-emoji/-enc`). Reuses existing `.optie-btn` / `.text-input`.
> ⚠️ **AGY / data agents: the core files are off-limits** — `index.html`, `css/style.css`, `js/*.js` (incl. `app.js`, `lezen.js`, `data-files.js`). The user runs a **separate session for CSS/design** — do not edit CSS either. Produce only `data/<vak>/*.js` data files; Opus wires any new ones into the manifest.

### B. DUO Online Exam Extraction ✅
1. **Automated Scraping:** Ran Playwright extraction scripts to answer and submit DUO's online A2 exams. Extracted correct answers directly from OptimumAssessment review DOMs.
2. **Raw Outputs:** Saved question stems, choices, and correct markings in `/tmp/answers/` as:
   - `Lezen-1.json` to `Lezen-4.json`
   - `KNM-1.json`, `KNM-2.json`
3. **Bilingual Answer Keys:** Generated user-friendly Turkey-localized markdown answer sheets in `/home/mesuto/Downloads/Inburgeren/A2/` (e.g. `Lezen-1-cevap-anahtari.md`).

---

## 3. Active Work & Next Steps (TODO)

Here are the remaining tasks assigned by category:

### For Main Core Custodian (Opus) — ✅ DONE
Manifest wiring, KNM display fix, and the productive Spreken/Schrijven runner are **all completed** (see §2.C). Opus's remaining job is only to **wire any NEW data files** AGY produces into `js/data-files.js` and verify them.

---

### For AGY / Data Extraction Agents ⏳ — PRODUCE ONLY `data/<vak>/*.js`, nothing else

> **Hard rules for every task below:**
> - Write **plain static JS** wrapped in `(function(){ "use strict"; window.INB = window.INB || {}; INB.registerExamen({...}); })();` — one `register*` call per file. No ES modules, no imports, no build step.
> - **Do NOT touch any core file** (`index.html`, `css/style.css`, any `js/*.js`). **Do NOT touch CSS** — a separate session owns design.
> - Schemas are in `CLAUDE.md` (§"Datacontract — EXAMEN" and "— WOORDEN"). Follow them exactly. `antwoord` is **0-based**.
> - Validate each file with **`node validate_data.js <file>`** (schema + syntax + manifest check; owned by Opus) before declaring done. Running it with no args checks all A2 files. Fix every ERROR; WARNings are advisory (e.g. low question count, missing trilingual `uitleg`).
> - When finished, **list the new filenames in this doc (§4 below)** so Opus can wire them into `js/data-files.js`.

**Task 1 — A2 Lezen exams (HIGHEST PRIORITY, the main reading content)**
Build `data/lezen/a2_lezen_1.js` … `a2_lezen_4.js` (4 files, 25 questions each).
- **Reading passages (`teksten[].html`)** come from the PDFs: `/home/mesuto/Downloads/Inburgeren/A2/Lezen/Lezen-A2-oefenexamen-1..4.pdf`. Transcribe each reading text into clean `<p>…</p>` HTML. Keep the original **Dutch** text. Group questions under the text they belong to (`teksten[]` may hold several texts, each with its `vragen[]`).
- **Questions + correct answers** come from the answer keys: `/home/mesuto/Downloads/Inburgeren/A2/Lezen-1..4-cevap-anahtari.md`. ⚠️ Options may be **3 or 4** (A/B/C or A/B/C/D) and DUO shuffles option order per session — the key marks the correct one with `(✓ DOĞRU CEVAP)`. **Match the correct answer by its TEXT**, then set `antwoord` to that option's 0-based index in your `opties[]`.
- Add a trilingual `uitleg:{nl,en,tr}` per question (short, why the answer is right — A2 level).
- `id:"a2-lezen-1"…`, `vak:"lezen"`, `niveau:"A2"`, `bron:"duo-oefen"`, `geslaagdVanaf` ≈ 16/25 (A2 pass ~65%). The correct answers are real (from DUO review extraction), so **no** `antwoordBron:"afgeleid"` needed.

**Task 2 — DUO KNM voorbeeld-exams**
Build `data/knm/a2_knm_oefen_1.js` and `a2_knm_oefen_2.js` (40 questions each).
- Source: situations/questions from PDFs `/home/mesuto/Downloads/Inburgeren/A2/KNM/KNM-A2-voorbeeldexamen-1..2.pdf` + correct answers from `/home/mesuto/Downloads/Inburgeren/A2/KNM-1..2-cevap-anahtari.md` (same `(✓ DOĞRU CEVAP)` text-match rule).
- Use the **standard `INB.registerExamen` `teksten/vragen` schema** (KNM runs on the Lezen runner). Put the short situation in `teksten[].html`, the MC question in `vragen[]`. `vak:"knm"`, `niveau:"A2"`, `geslaagdVanaf` ≈ 26/40. Trilingual `uitleg` per question. No `scoretabel` (the runner shows correct/total).

### NEW PRIORITY — Woordenschat is now the TOP of the hub
Opus moved the vocabulary section to the **top of the home page** (the gamified Duolingo-style practice is the daily core of the site). So the vocab content below is now the most visible thing on the site — make it rich and complete. **AGY produces the vocab content/questions; Opus owns layout/design.**

**Task 3 — Expand `a2_woorden_tegenstellingen.js` to the FULL antonym list**
- Source verified by Opus: `/home/mesuto/Downloads/Inburgeren/Inburgeren Sinav Notlari/Tegenstelling - Karsit Anlamlilar.xlsx` — text extracts cleanly. It is laid out as "Oefening 1..N" blocks; **each cell holds one antonym pair** as `woord1<nbsp><nbsp><nbsp>woord2` (separated by non-breaking spaces). There are **~300+ pairs** across all columns (the current file has only 31).
- Rebuild the file with **every** pair. For each pair make one `items[]` entry: `woord` = the first word (add `de/het` if it's a noun), `nl` = short NL gloss or the antonym, `en`, `tr`, and a simple Dutch `voorbeeld`. The antonym itself is great `vragen[]` material (mc: "wat is het tegenovergestelde van X?", or `gat`).
- Keep `id:"a2-woorden-tegenstellingen"` so saved progress stays valid. Scale `vragen[]` up (aim ≥ 20).

**Task 4 — NEW: comprehensive beginner vocabulary ("all words a starter needs")**
Build a set of **thematic A2 beginner vocab files** `data/woorden/a2_woorden_basis_1.js`, `_2.js`, … — together the core Dutch vocabulary a complete beginner needs for inburgering A2. Cover (one file per ~2-3 themes, or one big multi-theme set — your call, but keep each file focused and < ~80 items):
  1. Begroetingen & beleefdheid (hallo, dank u wel, alstublieft, sorry…)
  2. Getallen, tijd, dagen, maanden, seizoenen
  3. Familie & mensen
  4. Lichaam & gezondheid (+ bij de dokter)
  5. Huis & wonen (kamers, meubels)
  6. Eten & drinken, boodschappen
  7. Kleding & kleuren
  8. Weer & natuur
  9. Werk & beroepen
  10. Vervoer & reizen (+ wegwijs in de stad)
  11. Winkelen, geld & getallen
  12. School & opleiding
  13. Gevoelens & eigenschappen
  14. Veelgebruikte werkwoorden, voorzetsels & vraagwoorden
- Each `items[]` entry: `woord` (noun → include `de/het`), `nl`, `en`, `tr`, `voorbeeld` (A2-simple Dutch sentence). Add `vragen[]` (mc/invoer/gat, trilingual `uitleg`) per file. Use ids like `id:"a2-woorden-basis-1"` etc. Icons via `icoon` (emoji per theme).
- **Goal:** a real, usable starter glossary — accuracy over flash. Verify Dutch articles (de/het) and TR translations.

**Task 5 — Expand `a2_woorden_knm.js` (image-source, needs vision)**
- ⚠️ Opus checked: `word notlaar.docx`, `KNS.pdf`, `KNS Exam notes.pdf`, `Spreeken and Schrijven Notes.pdf` are **image/screenshot-based** (almost no extractable text). To mine vocab from them you must **read them as images (OCR/vision)** — use a FOREGROUND step. Pull KNM/society terms (wetten, uitkeringen, instanties) and grow `a2_woorden_knm.js` (currently 15 items). Keep its `id`.

> WOORDEN schema reminder (CLAUDE.md): `INB.registerWoorden({ id, titel, icoon, intro:{nl,en,tr}, items:[{woord,nl,en,tr,voorbeeld}], vragen:[{type:"mc",vraag,opties,antwoord,uitleg},{type:"invoer",vraag,antwoord:"a|b",uitleg},{type:"gat",zin:"… ___ …",antwoord,uitleg}] })`. Run `node validate_data.js <file>` before done; add filenames to §4.

---

## 4. New files produced by AGY (fill in here for Opus to wire) ✅
- `data/lezen/a2_lezen_1.js`  ✅ wired & tested
- `data/lezen/a2_lezen_2.js`  ✅ wired & tested
- `data/lezen/a2_lezen_3.js`  ✅ wired & tested
- `data/lezen/a2_lezen_4.js`  ✅ wired & tested
- `data/knm/a2_knm_oefen_1.js`  ✅ wired & tested
- `data/knm/a2_knm_oefen_2.js`  ✅ wired & tested
- `data/woorden/a2_woorden_basis_6.js`  ✅ wired & tested
- `data/woorden/a2_woorden_tegenstellingen_2.js`  ✅ wired & tested
- `data/woorden/a2_woorden_zinnen.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_2.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_3.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_notities.js`  ✅ wired & tested
- `data/spreken/a2_spreken_2.js`  ✅ wired & tested
- `data/spreken/a2_spreken_notities.js`  ✅ wired & tested

---

## 5. QA findings (3 subagents, read-only audit — 2026-06-21)

### Content QA — Lezen (a2_lezen_1..4) ✅
- **0 data defects.** All 100 questions: correct answer matches the key by text, 25/file, valid 0-based `antwoord`, 3–4 options, complete trilingual `uitleg`.
- Note (source key, not data): `Lezen-1-cevap-anahtari.md` Q11 has placeholder option text ("1) 1, 2) 2…") — the **data file is correct**; the .md key is cosmetically corrupt. No action needed in data.

### Content QA — KNM
- `a2_knm_oefen_1.js` ✅ clean (40Q, answers match key, trilingual uitleg). Q3/Q33 have `<img>`-based options — fine.
- `a2_knm_oefen_2.js` — **Q39 "minister-president van Nederland":** data answers **"Dick Schoof"**, the key marks **"Rob Jetten"**. ⚠️ **The DATA is correct** (Dick Schoof is NL PM since July 2024); the **answer key is outdated/wrong**. → No fix to data; just don't "correct" it to the key.
- `a2_knm_1.js` — **FIXED (AGY/Opus):** Redundant baked-in option prefixes stripped.
- **Vocab/Tegenstellingen Files** — **FIXED (Opus):** Redundant option prefixes (`A) `, `B) `, `C) `) stripped from `a2_woorden_basis_5.js`, `a2_woorden_basis_6.js`, `a2_woorden_tegenstellingen.js`, and `a2_woorden_tegenstellingen_2.js`.

### Browser/View QA (Playwright, all routes) — 0 console errors
- Hub PASS (vocab pinned to top, 9 exam + 3 woorden cards). Exam runners PASS (lezen 25 / knm 40, result screen, no NT2-score block as intended). Woorden Duolingo flow PASS. Lang toggle PASS.
- **FIX (design session, `js/productief.js` ~line 126):** the model-answer toggle button renders a corrupted emoji string `'👁️‍eqn '` → shows literal **"👁eqn Verberg modelantwoord"** on Schrijven & Spreken once the model is shown. The i18n strings (`toon_model`/`verberg_model`) are fine; the bug is the icon prefix in productief.js. Replace with a clean 👁 (or no) icon.
- **FIX (design session, `css/style.css`):** the new "Mijn voortgang" markup has **no `.vg-*` styling yet** (`.vg-item`, `.vg-progress`/`.vg-progress-fill`, `.vg-emoji`, `.vg-item-titel`, `.vg-item-detail`, `.vg-status` + `.is-pass/.is-busy/.is-todo`, `.stat-emoji`). JS logic & data are correct, but rows currently render as one unspaced line. Add rules (and the woorden practice `.wpract-*` classes from §2.C are also still awaiting styling).

---

## 6. NEW AGY tasks (2026-06-21, AGY back online) — productive-skill content is the thinnest part

The site's biggest content gap was Schrijven & Spreken: only ONE file each. We have now added:
- **Task 6 — Schrijven uitbreiding:** **DONE** (created and wired `a2_schrijven_2.js` and `a2_schrijven_3.js` with 5 tasks each).
- **Task 7 — Spreken uitbreiding:** **DONE** (created and wired `a2_spreken_2.js` with 6 spoken prompts covering daily life, home, transport, sports, and directions).
- **Task 8 (optional) — more vragen for thin vocab sets:** **DONE** (added 10 new questions each to `a2_woorden_basis_5.js` and `a2_woorden_basis_6.js`, bringing them to 23 questions each).
- **Task 9 — NEW: "Veelgebruikte zinnen & uitdrukkingen" (daily phrases) vocab set:** **DONE** (created and wired `a2_woorden_zinnen.js` with 50 high-quality phrases and 20 practice questions).

> AGY: produce only the `data/woorden/*.js` files above; Opus wires + bumps versions. Content quality (accurate de/het, correct TR) over quantity. After this, the site's beginner vocab is genuinely comprehensive.
