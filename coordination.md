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
- `data/lezen/a2_lezen_5.js`  ✅ wired & tested
- `data/lezen/a2_lezen_6.js`  ✅ wired & tested
- `data/lezen/a2_lezen_7.js`  ✅ wired & tested
- `data/lezen/a2_lezen_8.js`  ✅ wired & tested
- `data/knm/a2_knm_oefen_1.js`  ✅ wired & tested
- `data/knm/a2_knm_oefen_2.js`  ✅ wired & tested
- `data/woorden/a2_woorden_basis_6.js`  ✅ wired & tested
- `data/woorden/a2_woorden_tegenstellingen_2.js`  ✅ wired & tested
- `data/woorden/a2_woorden_zinnen.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_2.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_3.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_4.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_5.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_6.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_7.js`  ✅ wired & tested
- `data/schrijven/a2_schrijven_notities.js`  ✅ wired & tested
- `data/spreken/a2_spreken_2.js`  ✅ wired & tested
- `data/spreken/a2_spreken_notities.js`  ✅ wired & tested
- `data/knm/a2_knm_thema_1_werk.js`  ✅ wired & tested (Task 10, 14 vragen)
- `data/knm/a2_knm_thema_2_omgang.js`  ✅ wired & tested (Task 10, 13 vragen)
- `data/knm/a2_knm_thema_3_wonen.js`  ✅ wired & tested (Task 10, 12 vragen)
- `data/knm/a2_knm_thema_4_gezondheid.js`  ✅ wired & tested (Task 10, 16 vragen)
- `data/knm/a2_knm_thema_5_geschiedenis.js`  ✅ wired & tested (Task 10, 14 vragen)
- `data/knm/a2_knm_thema_6_instanties.js`  ✅ wired & tested (Task 10, 13 vragen)
- `data/knm/a2_knm_thema_7_onderwijs.js`  ✅ wired & tested (Task 10, 13 vragen)
- `data/knm/a2_knm_thema_8_politiek.js`  ✅ wired & tested (Task 10, 13 vragen)
- `data/knm/a2_knm_oefen_3.js`  ✅ wired & tested
- `data/knm/a2_knm_oefen_4.js`  ✅ wired & tested

---

## 8. Linux-session sync (2026-06-23)

A second Opus session (Linux box) had its own uncommitted core changes (a new Apple-style hero section on the hub — `hero-section`/`hero-feature-card`/`hero-scroll-btn` markup+CSS, `app.js`/`i18n.js`) sitting in the working tree when `33bd3a7` (sitename rename) and `0c8d100` (KNM theme sets) landed on `origin/main`. Merged cleanly (commit `78ad677`); only conflict was the `<title>` tag, resolved in favor of the rename (`Inburgeringsexamen` + 🇳🇱, no "A2"). `hero_title` in `i18n.js` was also reworded to drop "A2" for consistency with that decision.

**Bug found & fixed during sync:** a bare `agy` token had been pasted directly into `index.html` (inside the core inline loader `<script>`), breaking the data-loading sequence with a `ReferenceError`. This is exactly the kind of core-file edit §1 says AGY/data agents must never make — whoever/whatever inserted it should stick to `data/<vak>/*.js` only. Fixed before commit (`a626bc3`); not present in the version pushed to GitHub.

CLAUDE.md status section updated to reflect that all current A2 data (Lezen ×8, KNM ×11, Schrijven ×7, Spreken ×3, woordenschat ×11) is wired in `js/data-files.js`, 0 errors per `node validate_data.js`.

**Backlog review (2026-06-23):** Re-checked every task in §3/§6/§7 against the actual repo state — **all are done** (Tasks 1–11, the Schrijven/Spreken expansion, the daily-phrases set). Tegenstellingen now has 392 items combined (file 1 + 2), past the ~300+ target. No open AGY task remains. User explicitly decided (asked directly): **do not build a Luisteren placeholder/link-out page right now** (no source audio/transcripts exist; the generic "in voorbereiding" badge already covers it gracefully) and **do not generate extra volume/depth content this round** (current scope is considered sufficient until further feedback). AGY/Sonnet agents: no new task is open — hold until the user or Opus opens a new one here.

## 9. Linux-session sync (2026-06-29)

Opus (Linux) reworked the hub **hero welcome copy** in `js/i18n.js` per user feedback: `hero_desc` is now mission-driven and warm/personal ("yolda yanında olan", "acele etmeden", own progress-page mention; the "no financial/commercial motive" clause was dropped on request); `hero_subtitle` → "A2 sınavını geçmek için — ücretsiz ve herkes için" (NL/EN/TR). Cache-busting bumped: `i18n.js?v=14`, `css/style.css?v=13`, `app.js?v=10`. Also picked up another agent's in-tree work and verified it before committing: **4 new Schrijven sets** `data/schrijven/a2_schrijven_4..7.js` (wired into `data-files.js`, `node --check` clean) → Schrijven count is now **×7** (CLAUDE.md + this doc updated from ×4). All committed + pushed together.

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
- **FIXED:** The `js/productief.js` emoji bug (literal `'👁eqn '` prefix) is verified as fixed (clean `👁 ` emoji is used).
- **FIXED (design session, `css/style.css`):** Added the styling for the "Mijn voortgang" dashboard progress bar (`.vg-progress`, `.vg-progress-fill`, `.vg-progress-label`) and interactive rows (`.vg-row--clickable`), along with the Duolingo-style words practice classes (`.wpract`, `.wpract-top`, `.wpract-bar`, `.wpract-bar-fill`, `.wpract-streak`, `.wpract-card`, `.wpract-feedback`, `.wpract-done`, etc.). Defined the missing accent colors `--color-mint-soft` and `--color-peach-soft` in light and dark mode variables.

---

## 6. NEW AGY tasks (2026-06-21, AGY back online) — productive-skill content is the thinnest part

The site's biggest content gap was Schrijven & Spreken: only ONE file each. We have now added:
- **Task 6 — Schrijven uitbreiding:** **DONE** (created and wired `a2_schrijven_2.js` and `a2_schrijven_3.js` with 5 tasks each).
- **Task 7 — Spreken uitbreiding:** **DONE** (created and wired `a2_spreken_2.js` with 6 spoken prompts covering daily life, home, transport, sports, and directions).
- **Task 8 (optional) — more vragen for thin vocab sets:** **DONE** (added 10 new questions each to `a2_woorden_basis_5.js` and `a2_woorden_basis_6.js`, bringing them to 23 questions each).
- **Task 9 — NEW: "Veelgebruikte zinnen & uitdrukkingen" (daily phrases) vocab set:** **DONE** (created and wired `a2_woorden_zinnen.js` with 50 high-quality phrases and 20 practice questions).

> AGY: produce only the `data/woorden/*.js` files above; Opus wires + bumps versions. Content quality (accurate de/het, correct TR) over quantity. After this, the site's beginner vocab is genuinely comprehensive.

---

## 7. NEW: KNM thema-oefentoetsen — research-backed (2026-06-22, by 2 Opus research subagents)

Two research subagents searched the web for **real, previously-used KNM exam questions and the recurring topics**. The richest find: three full community practice exams **with answer keys** — *Knoester Trainingen "Oefentoets 003 / 007 / 010 / 011"* (hosted on steunpuntvluchtelingendebilt.nl & taalabc.nl). These are teacher/community material modelled closely on the real DUO KNM exam (the **official** DUO online KNM exams publish **no** answer key — same situation as Lezen). Everything below is sourced; verbatim items carry the published key.

### Confirmed exam structure (use this for the new files)
- **~40 vragen** per real KNM exam (some sources say 45), **45 min**, pass ≈ **60%** (~24–28 goed). Multiple choice: mostly **3 opties A/B/C**, some 4 (A–D), and **many `Waar` / `Niet waar`** (true/false) items. The real exam shows a **short video/situation**, then the question → so items are **situational** ("U bent…, wat doet u het beste?").
- Official source booklets: **"Welkom in Nederland"** (Coutinho, 4e ed. — aangepast aan de **nieuwe KNM-eindtermen per 1 juli 2025**) and **"Kom verder!"**.
- **2025-herziening (per 1 juli 2025):** extra nadruk op **zelfbeschikkingsrecht van vrouwen**, **kennis van de Holocaust + herkennen van antisemitisme**, en **recht boven religie/cultuur**. Lean factual.

### ⚠️ Current-facts cautions (do NOT bake outdated facts into questions)
- **Minister-president:** RESEARCH CONFLICT. One subagent (web, June 2026) reports **Rob Jetten** (D66, beëdigd 23 feb 2026); the project's earlier QA note (§5) and `a2_knm_oefen_2.js` use **Dick Schoof** (PM jul 2024–feb 2026). → **Safest rule for A2: do NOT name the sitting PM in any new question.** A2 KNM asks the *role* ("wie leidt het kabinet?" → de minister-president), not the name. If a name is unavoidable, Opus confirms the current one before wiring.
- ✅ Stable facts (safe to use): koning **Willem-Alexander**; **12 provincies**; hoofdstad **Amsterdam**; regeringszetel **Den Haag**; Tweede Kamer **150**, Eerste Kamer **75**; buurlanden **België & Duitsland**; munt **euro**; leerplicht vanaf **5** tot **16** + **kwalificatieplicht tot 18**.
- ❌ **Avoid** "partij links/midden/rechts" placement questions (PVV/BBB/NSC/D66-kabinet — landscape shifted, ages badly). Possibly dated: **CIZ vs gemeente** for thuiszorg (Wmo-routing changed) — prefer clearer items.

---

### Task 10 — Build 8 thematic KNM practice sets (AGY: produce only `data/knm/*.js`)

Create **one file per official KNM theme**, standard `INB.registerExamen` schema (KNM runs on the Lezen runner — short situation in `teksten[].html`, MC in `vragen[]`). Aim **12–20 vragen each**, `vak:"knm"`, `niveau:"A2"`, `bron:"oefentoets"`, trilingual `uitleg:{nl,en,tr}` per vraag, **no `scoretabel`**, `geslaagdVanaf` ≈ 65% of the count. Because these are not official DUO keys, set **`antwoordBron:"afgeleid"`** on each vraag. `antwoord` is **0-based** — match the ✓ option by its TEXT (shuffle option order freely). Validate with `node validate_data.js <file>`, then list filenames in §4.

Filenames + the sourced question bank to draw from (✓ = correct answer from the published key):

**`data/knm/a2_knm_thema_1_werk.js`** — *Werk en inkomen.* Subtopics: vaste/tijdelijke/parttime baan, vrijwilligerswerk, zelfstandig ondernemer, WW→**UWV**, CAO & vakbond, arbowet, ziekmelden, cv, jaaropgave, bruto/belasting, lening aflossen, KvK/ondernemingsplan.
- Wat is een vaste baan? → *een baan voor onbepaalde tijd* ✓ (vs stopt op bepaalde tijd / fulltime)
- Wat is vrijwilligerswerk? → *werken zonder salaris* ✓
- U bent ontslagen, u wilt een werkloosheidsuitkering. Waar? → *naar het UWV* ✓ (vs gemeente / Sociale dienst)
- Wat is een cv? → *overzicht van persoonlijke gegevens, opleiding en werkervaring* ✓
- Wat is een parttime baan? → *een baan van 32 uur per week* ✓
- Wat doet de vakbond? → *zorgt samen met werkgevers voor een CAO* ✓
- Belangrijke regel uit de arbowet? → *elke werknemer moet veilig kunnen werken* ✓
- Wat doe je als je geld leent van de bank? → *de lening aflossen* ✓ (niet oplossen/afschrijven)
- (Waar/Niet waar) Je jaaropgave is een loonstrook voor een heel jaar. → **Waar** ✓
- (W/NW) In de cao staan afspraken voor alle mensen die in een sector werken. → **Waar** ✓
- Hoe verdient een zelfstandig ondernemer geld? → *met een eigen bedrijf* ✓
- Van je bruto salaris betaal je belasting; wat doet de overheid ermee? → *bouwt o.a. wegen en bruggen* ✓

**`data/knm/a2_knm_thema_2_omgang.js`** — *Omgangsvormen, waarden en normen.* Subtopics: op tijd komen, gelijkheid (homohuwelijk/samenwonen), geweldloos (niemand slaan), feliciteren/condoleren/beterschap, buren informeren bij feest, gastvrijheid/terugvragen, discriminatie melden, schooltas buiten bij diploma. (2025: zelfbeschikking vrouwen, Holocaust/antisemitisme.)
- Gewoonte als iemand geslaagd is (voortgezet onderwijs)? → *de schooltas buiten hangen* ✓
- Jongen schopt bal tegen winkelraam; mag u hem slaan? → *Nee, u vraagt naam/adres en raakt hem niet aan* ✓
- Dochter gaat op kamers; buren zijn lesbische vrouwen; wat doet u? → *Niets* ✓
- Mag je in NL samenwonen zonder te trouwen? → *Ja, iedereen mag samenwonen met wie hij/zij wil* ✓
- Buurman overleden; wat doet u? → *u condoleert de buren* ✓
- Welke felicitatie is goed? → *Proficiat, van harte gefeliciteerd* ✓
- U geeft een tuinfeestje; wat doet u? → *u vertelt uw buren dat u een feestje geeft* ✓
- Verplicht om een kennis die u uitnodigde terug te vragen? → *Nee, niet verplicht, maar men vraagt mensen meestal wel terug* ✓
- Collega discrimineert op het werk; wat doet u? → *met uw baas praten* ✓
- "Een praatje maken" = → *een kort gesprekje* ✓
- Wat doet het Anti-Discriminatiebureau met een klacht? → *registreert de klacht en kan juridische hulp regelen* ✓

**`data/knm/a2_knm_thema_3_wonen.js`** — *Wonen.* Subtopics: huren via woningcorporatie (aangeboden woning niet verplicht), reparaties→verhuurder/loodgieter, afval scheiden (GFT, chemobox→milieustraat, grof afval = groot, textielbak), inboedelverzekering, buren.
- (W/NW) Chemisch afval mag in de GFT-container. → **Niet waar** ✓
- (W/NW) Een loodgieter kan je kapotte kraan repareren. → **Waar** ✓
- "Grof huishoudelijk afval" — grof betekent? → *groot* ✓
- Volle chemobox legen; wat doet u? → *naar de milieustraat brengen* ✓
- Waar breng je textiel heen? → *naar de textielbak of kledinginzamelacties* ✓
- (W/NW) Aangeboden woning van de woningbouwvereniging: je moet er gaan wonen. → **Niet waar** ✓
- Container vol, vuilniswagen komt pas later, u gaat op vakantie; wat doet u? → *buren vragen de container buiten te zetten* ✓
- Wanneer betaalt de inboedelverzekering NIET? → *als het dak kapot is door storm* (dat is opstal) ✓
- Hoe werkt een kledinginzamelactie? → *u krijgt thuis een plastic zak voor oude kleding* ✓

**`data/knm/a2_knm_thema_4_gezondheid.js`** — *Gezondheidszorg.* Subtopics: huisarts eerst, huisartsenpost ('s nachts/weekend), 112 (spoed/levensgevaar), verwijsbrief→specialist, recept→apotheek, zorgverzekering (vrije keuze, basis dekt niet alles, eigen risico, polis), AOW=volksverzekering, consultatiebureau, verloskundige/gynaecoloog, GGZ, maatschappelijk werker, patiëntenpas.
- Welk briefje heb je nodig voor de specialist? → *een verwijsbrief* ✓ (niet etiket/recept)
- (W/NW) Met eigen risico betaal je álle kosten zelf. → **Niet waar** ✓
- (W/NW) Bij de basisverzekering worden alle kosten betaald. → **Niet waar** ✓
- (W/NW) Hoger eigen risico = meer eigen risico betalen. → **Waar** ✓
- 's Nachts een huisarts nodig; wat doe je? → *je belt de huisartsenpost* ✓
- Wanneer bel je 112? → *als je snel politie, brandweer of ambulance nodig hebt* (bv. gebroken been) ✓
- (W/NW) In NL kies je vrij je eigen zorgverzekeraar. → **Waar** ✓
- Hoe heet het officiële document van de verzekering? → *polis* ✓ (niet premie/zorgpas)
- Voorbeeld van een volksverzekering? → *AOW* ✓ (niet bijstand/zorgverzekering)
- Wat is de GGZ? → *plaats waar psychologen en psychiaters werken* ✓
- (W/NW) De wijkverpleegkundige is een dokter. → **Niet waar** ✓
- Wie controleert de baby tijdens de zwangerschap? → *de verloskundige* ✓
- Wie is een speciale vrouwendokter? → *de gynaecoloog* ✓
- Wat is een patiëntenpas? → *kaartje met informatie over jou en een persoonlijke barcode* ✓

**`data/knm/a2_knm_thema_5_geschiedenis.js`** — *Geschiedenis en geografie.* Subtopics: 12 provincies + hoofdsteden, buurlanden, Den Haag = westen, Deltawerken (na Watersnoodramp 1953), gastarbeiders na de wederopbouw, euro, industrie 1800–1900, 1648 zelfstandig, Wilhelmus, WOII/Holocaust, 4 mei Dodenherdenking / 5 mei Bevrijdingsdag.
- Welke 2 buurlanden heeft NL? → *België en Duitsland* ✓
- In welke provincie veel duinen? → *Noord-Holland* ✓
- Waar ligt Den Haag? → *in het westen van NL* ✓
- Hoe heten de dijken na de Watersnoodramp in Zeeland? → *de Deltawerken* ✓
- Wanneer kwamen er veel gastarbeiders? → *na de wederopbouw* ✓
- Met de euro betaal je → *in veel landen in Europa* ✓
- Hoofdstad van de provincie Groningen? → *Groningen* ✓
- Hoe hielp Amerika NL na WOII? → *bevrijding in WOII en daarna financiële hulp* ✓
- Wanneer veel industrie in NL? → *1800–1900* ✓
- (W/NW) In 1648 werden de Nederlanden zelfstandig. → **Waar** ✓
- (W/NW) Het Wilhelmus wordt nog steeds gezongen. → **Waar** ✓
- 1940: 140.000 Joden, 1945: 36.000 — waar zijn ze gebleven? → *vermoord in concentratiekampen van de nazi's* ✓
- Op 4 mei om 20:00 doen mensen → *twee minuten stilte* ✓
- Wanneer is Bevrijdingsdag? → *5 mei* ✓

**`data/knm/a2_knm_thema_6_instanties.js`** — *Instanties.* Subtopics: gemeente (adres/BRP, paspoort, OZB), IND (verblijfsvergunning), UWV (WW), Belastingdienst (toeslagen, BSN), DUO (studiefinanciering/inburgering), SVB (AOW/kinderbijslag), DigiD (veilig inloggen), politie/aangifte, 112, Anti-Discriminatiebureau, Nationale Ombudsman (klacht over overheid), Sociaal Raadslieden.
- Verblijfsvergunning voor onbepaalde tijd aanvragen — waar? → *bij de IND* ✓
- Huurtoeslag aanvragen bij → *de Belastingdienst* ✓
- Werkloosheidsuitkering — waar? → *het UWV* ✓
- Studiefinanciering aanvragen bij → *DUO* ✓
- (W/NW) De OZB betaal je aan de gemeente. → **Waar** ✓
- (W/NW) Je BSN staat op papieren van de belasting. → **Waar** ✓
- (W/NW) Iets officieel tegen de politie zeggen = aangifte doen. → **Waar** ✓
- Wat doet het Anti-Discriminatiebureau met een klacht? → *registreert de klacht + kan juridische hulp regelen* ✓
- (W/NW) Sociaal Raadslieden helpen met formulieren invullen. → **Waar** ✓
- Waarvoor gebruik je DigiD? → *veilig inloggen op overheidswebsites* ✓
- Je verhuist; wie moet je nieuwe adres weten? → *de gemeente* ✓
- Gevaarlijk ongeluk, directe hulp nodig; welk nummer? → *112* ✓

**`data/knm/a2_knm_thema_7_onderwijs.js`** — *Onderwijs en opvoeding.* Subtopics: leerplicht 5–16 + kwalificatieplicht 18, basisonderwijs (groep 1–8, ouderbijdrage/overblijven), brugklas, vmbo/havo/vwo (duur 4/5/6 jaar), vmbo = beroep, Cito-toets, ouderavond/schoolgids, consultatiebureau (tot 4 jaar), klaar-overs, vrije studie-/beroepskeuze kind.
- Leerplichtig tot? → *16 jaar* ✓ (+ uitleg: kwalificatieplicht tot 18)
- Leerplicht vanaf welke leeftijd? → *5 jaar* ✓
- Het VWO duurt → *6 jaar* ✓
- Het VMBO duurt → *4 jaar* ✓
- VWO is → *Voorbereidend Wetenschappelijk Onderwijs* ✓
- Op welke school leer je een beroep? → *vmbo* ✓
- Een Cito-toets is → *de test aan het eind van de basisschool* ✓
- Wat is de brugklas? → *klas waarin de definitieve schoolkeuze wordt uitgesteld* ✓
- Is de basisschool gratis? → *Ja, maar ouders betalen ouderbijdrage en overblijven* ✓
- Wat betaal je met de vrijwillige bijdrage? → *schoolreisjes* ✓
- (W/NW) Bij het consultatiebureau krijgen ouders van kinderen tot 4 jaar advies. → **Waar** ✓
- Wat zijn klaar-overs? → *mensen die kinderen helpen oversteken bij de school* ✓
- Zoon wil lange studie (dokter), u wilt dat hij werkt; wat doet u? → *u zegt dat hij zelf mag beslissen* ✓

**`data/knm/a2_knm_thema_8_politiek.js`** — *Politiek en grondrechten.* Subtopics: democratie ("de baas is het volk"), koning = staatshoofd, Tweede/Eerste Kamer, trias politica, actief/passief kiesrecht, niet-Nederlander mag pas na 5 jaar legaal verblijf voor de gemeenteraad stemmen, gemeente (burgemeester+wethouders+raad), Grondwet/Artikel 1 (discriminatieverbod), vrijheid van meningsuiting/godsdienst, rechtsstaat, EU/Europees Parlement.
- Wie is de baas in NL? → *het volk* ✓
- U woont 4 jaar legaal in NL; gemeenteverkiezingen — mag u stemmen? → *Nee, u woont nog geen vijf jaar legaal in NL* ✓
- Dochter (18, Nederlands paspoort) wil in de Tweede Kamer; kan dat? → *Ja, ze heeft passief kiesrecht* ✓
- Waar gaat het Europees Parlement over? → *economie, milieu en veiligheid* ✓
- Hassan wordt geweigerd ("Nederlanders werken harder"); wat doet hij? → *naar het Anti-Discriminatiebureau* ✓
- (W/NW) Iemand met de Nederlandse nationaliteit is altijd in NL geboren. → **Niet waar** ✓
- (W/NW) Als je wilt scheiden, kan een advocaat je helpen. → **Waar** ✓
- Wie leidt de gemeente? → *de burgemeester en wethouders, met de gemeenteraad* ✓
- Waar gaat de rechtsstaat over? → *overheid én burgers volgen de wet; rechters zijn onafhankelijk* ✓
- Wat zegt Artikel 1 van de Grondwet over discriminatie? → *het is verboden* ✓

> **Optional Task 11** — once the 8 themed sets exist, AGY may also assemble **2 new mixed full oefenexamens** `data/knm/a2_knm_oefen_3.js` / `_4.js` (40 vragen each, drawn across all 8 themes, `geslaagdVanaf:26`) to complement the existing oefen-1/2. Same schema, `antwoordBron:"afgeleid"`.

> **Sources (for verification):** Oefentoets PDFs `steunpuntvluchtelingendebilt.nl/.../Oefenexamen_003_KNM.pdf`, `.../Oefenexamen_007_KNM.pdf`, `.../Oefenexamen_010_KNM.pdf`, `taalabc.nl/.../oefentekst011_KNM-1.pdf`; study sites `knmleren.nl/onderwerpen/*`, `inburgering.org/nl/exam-info/knm-exam-guide`, `denieuwenederlanders.nl/knm-2025`; structure `inburgeren.nl/examen-doen/inhoud-kennisexamens.jsp`; 2025-herziening `rijksoverheid.nl` (30-06-2025). The verbatim items above carry the published teacher answer key but are **not** official DUO/CvTE → use `antwoordBron:"afgeleid"`.
