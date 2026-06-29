# CLAUDE.md — Inburgeringsexamen A2 oefensite

Statische, **drietalige (NL / EN / TR)** oefensite voor het **Inburgeringsexamen op A2-niveau** (DUO) — voor een volwassene die Engels en Turks spreekt en Nederlands leert voor de inburgering. **Pure static, geen build, geen ES-modules** (werkt op `file://` én via `python3 server.py`, **poort 8126**). Examen-**inhoud blijft Nederlands**; UI, hints, woordglossen en antwoorduitleg zijn drietalig via een taalknop.

> **Niveau: A2 is primair.** Het basis-inburgeringsexamen is **A2**. Eerder gemaakte **B1 / NT2 Staatsexamen Programma I**-content (Lezen 2023/2024/2025 + bijbehorende woordenschat) is **opzijgezet**: de bestanden blijven lokaal op schijf staan maar worden **niet meer geladen** (verwijderd uit de manifests) en **niet getoond**. Niet opnieuw inschakelen tenzij gevraagd.

## Onderdelen (A2 inburgeringsexamen)
Taalvaardigheden: **Lezen** (Reading), **Luisteren** (Listening), **Spreken** (Speaking), **Schrijven** (Writing). Kennis: **KNM** (Kennis van de Nederlandse Maatschappij). Daarnaast bestaan **ONA** en **PVT** (afhankelijk van inburgeringsdatum) — alleen informatief op de "Over het examen"-pagina. Slagen op niveau **A2 of hoger**.

## Bronmateriaal (A2)
Map `/home/mesuto/Downloads/Inburgeren/`:
- `A2/Lezen/oefenexamen-1..4/` — DUO online oefenexamens, per vraag een screenshot `q01.png..q25.png` (**25 vragen/examen**, tekst links + **3 opties A/B/C** rechts). ⚠️ De screenshots bevatten **geen antwoordsleutel** (interactieve online examens) → het juiste antwoord wordt **door begrip bepaald** (A2 is eenvoudig genoeg; markeer als afgeleid antwoord).
- `A2/Schrijven/oefenexamen-A2-schrijven-1..3.pdf` — schrijfopdrachten (productief).
- `A2/KNM/voorbeeldexamen-1..2/` (PNG `s01..`) + PDF's — KNM-voorbeeldexamens.
- `A2/Online-oefenexamens-LINKS.md` — DUO oefen-links (Lezen/Luisteren/Spreken/KNM; online, niet downloadbaar).
- `Inburgeren Sinav Notlari/` — `KNS.pdf`, `KNS Exam notes.pdf`, `word notlaar.docx`, `Spreeken and Schrijven Notes.pdf`, `Tegenstelling - Karsit Anlamlilar.xlsx` (woordenschat/notities; andere agents extraheren deze).

## Structuur
```
index.html              hub-shell + NL·EN·TR taalknop; views: Examens / Over het examen / Mijn voortgang
css/style.css           pastel thema (licht primair + zachte dark) — GEEN paars (zie design-voorkeuren)
js/i18n.js              UI-strings nl/en/tr · INB.t(key) · INB.tr({nl,en,tr})
js/bootstrap.js         window.INB · registerExamen/registerWoorden · getOnderdelen (groepeert exams per vak) · getAllWoorden · ONDERDELEN (lezen/luisteren/spreken/schrijven/knm)
js/store.js             localStorage (prefix inb_): examenpogingen + woorden-stats (guard met || {})
js/lezen.js             Lezen-runner: tekstpaneel + MC (A/B/C of A/B/C/D), globale nummering, score + (optioneel) niveau-conversie
js/woorden.js           woorden-runner: teach/flashcard + mc/invoer/gat
js/app.js               hub + hash-routing: #/, #/examen/<id>, #/examen/<id>/stats, #/woorden/<id>, #/woorden/alle, #/info, #/voortgang — LAATST geladen
js/data-files.js        PUBLIEKE manifest (INB.dataFiles) — de te laden A2-databestanden
js/data-files.local.js  LOKALE override (gitignored) — extra/lokaal-only bestanden
data/<vak>/*.js         databestanden (lezen/knm/schrijven/woorden/…), één register-call per bestand
server.py               statische server, poort 8126
```
**Laadvolgorde (index.html):** core libs (i18n→bootstrap→store→lezen→woorden) → `data-files.js` → inline loader die `data-files.local.js` (optioneel) + alle `INB.dataFiles` + `app.js` + footer laadt. Ontbrekende bestanden worden stil overgeslagen (onerror). Bump `?v=` bij wijzigingen.

## Werkverdeling (BELANGRIJK)
Meerdere agents werken parallel. **Andere agents + AGY schrijven A2-databestanden rechtstreeks in `data/<vak>/`.** **Opus (ik) bezit en wijzigt de "kern": `index.html`, `js/data-files.js`, `js/data-files.local.js`, `js/app.js`, `js/i18n.js`, `js/bootstrap.js`, `js/lezen.js`, `js/woorden.js`, `css/style.css`, `CLAUDE.md`.** Databestand-agents raken deze kernbestanden NIET aan. Nieuwe databestanden worden door Opus in `js/data-files.js` gezet (wiring) en geverifieerd. (Andere agents lieten extractie-scripts/-output in de root achter: `extract*.py`, `extracted_*.txt` — staan in `.gitignore`.)

**Naamconventie A2-databestanden:** `data/lezen/a2_lezen_1.js`…, `data/knm/a2_knm_1.js`…, `data/schrijven/a2_schrijven_1.js`…, `data/woorden/a2_woorden_*.js`. Achtergrond-subagents krijgen in deze omgeving GEEN permissies (Read/Bash geweigerd) → PDF/afbeelding-werk via FOREGROUND-subagents.

## Datacontract — EXAMEN (`data/<vak>/*.js`)
```js
INB.registerExamen({
  id:"a2-lezen-1", vak:"lezen",          // lezen | luisteren | spreken | schrijven | knm
  niveau:"A2",                            // "A2" (primair) | "B1" (NT2, verborgen)
  bron:"duo-oefen",                       // herkomst (bv. DUO oefenexamen)
  titel:"Lezen A2 — Oefenexamen 1",
  geslaagdVanaf:<min #goed>,              // slaaggrens
  scoretabel:[…],                         // optioneel; index=#punten → score. Weglaten = alleen #goed/totaal tonen
  teksten:[ {
    titel:"…", domein:"…", tekstsoort:"…",
    html:`<p>…</p>`,
    vragen:[ { vraag:"…?", opties:["A…","B…","C…"], antwoord:1 /*0-based*/,
               antwoordBron:"afgeleid",   // optioneel: "afgeleid" als antwoord door begrip bepaald is (geen officiële sleutel)
               uitleg:{nl:"…",en:"…",tr:"…"} } ]
  } ]
});
```
KNM kan dezelfde vorm gebruiken (korte situatie als `html` + MC-vraag). **Schrijven/Spreken zijn productief** (opdracht + modelantwoord/zelfbeoordeling) → eigen runner later; voorlopig als onderdeel-placeholder of simpele opdracht-weergave.

## Datacontract — WOORDEN (`data/woorden/*.js`)
```js
INB.registerWoorden({
  id:"a2-woorden-1", titel:"Woordenschat A2 — …", bronExamen:"a2-lezen-1", icoon:"📖",
  intro:{nl,en,tr},
  items:[ {woord:"de buurt", nl:"…", en:"neighbourhood", tr:"mahalle", voorbeeld:"…"} ],
  vragen:[ {type:"mc",vraag,opties,antwoord,uitleg:{nl,en,tr}},
           {type:"invoer",vraag,antwoord:"a|b",uitleg},
           {type:"gat",zin:"… ___ …",antwoord,uitleg} ]
});
```

## Draaien & hosting
`python3 server.py` → `http://localhost:8126/`. **Publiceren: GitHub Pages** (puur statisch). Telijk: officiële DUO-oefenexamens zijn vrij beschikbaar oefenmateriaal (lager risico dan de CvTE-examens), maar houd dezelfde splitsing aan — twijfelachtige/letterlijke content kan lokaal blijven via `.gitignore` + `data-files.local.js`. git: branch `main`, user `Mesut-Outlook` / `ozdemirmesut@gmail.com`; `gh` niet geïnstalleerd → push/Pages doet de gebruiker zelf.

## Werkwijze (tokenbeleid)
**Planning + coördinatie + verificatie door Opus 4.8; code/data door Sonnet-subagents (mechanisch evt. Haiku).** Bulk PDF/afbeelding-extractie + generatie kan via AGY (Antigravity CLI) — verdeel per bestandseigenaarschap zodat niemand elkaars bestanden overschrijft. Commit-trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`. **Design: pastel, zacht, licht, elegant — NOOIT paars.**

## Status (2026-06-29)
- ✅ Engine (Lezen/woorden), drietalige UI, 5-onderdelen-hub, "Over het examen", "Alle woorden", per-examen dashboard, pastel thema, Apple-stijl hero-sectie op de hub.
- ✅ **Hero-welkomsttekst** herschreven (missie-gericht, warme/persoonlijke toon): vrij & voor iedereen, echte examenvragen + soortgelijke oefeningen, woordenschat/terminologie, ondersteunende documenten in NL/EN/TR, oefenen in eigen tempo + eigen voortgangspagina. Subtitle: "A2 sınavını geçmek için — ücretsiz ve herkes için" (`hero_subtitle`/`hero_desc` in `js/i18n.js`).
- ✅ **Omschakeling naar A2 voltooid.** B1/NT2-content opzijgezet (niet geladen, blijft lokaal). Alle huidige A2-databestanden zijn in `js/data-files.js` gewired: Lezen (4 oefenexamens), KNM (1 + 2 oefen), Schrijven (7 + notities), Spreken (5 + notities), woordenschat (12 sets: basis 1–6, tegenstellingen 1–2, KNM 1–2, zinnen, schrijven).
- ⬜ Luisteren (audio) — nog niet gestart. ⬜ Verdere uitbreiding oefenexamens (Lezen/KNM/Schrijven/Spreken) blijft doorlopend.
