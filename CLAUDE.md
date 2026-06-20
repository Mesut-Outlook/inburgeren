# CLAUDE.md — Inburgeren / NT2 Oefensite

Statische oefensite voor het **NT2 Staatsexamen Programma I (B1)** — voor een volwassene die **Engels en Turks** spreekt en Nederlands leert voor inburgering. **Pure static, geen build, geen ES-modules** (werkt op `file://` én via `python3 server.py`). Alle examen-**inhoud blijft Nederlands**; de UI, hints, woordglossen en antwoorduitleg zijn **drietalig (NL / EN / TR)** via een taalknop.

## Doel & scope
- Onderdeel **Lezen** eerst (Luisteren later — audio nog niet aanwezig).
- Drie soorten oefening:
  1. **Echte examens** (`bron:"echt"`) — letterlijk overgenomen uit de officiële PDF's (2023/2024/2025). ⚠️ Telijk: CvTE staat reproductie alleen toe voor *eigen, niet-commercieel* gebruik → echte examens **niet publiek hosten**; lokaal/privé houden.
  2. **Oefenexamens** (`bron:"oefen"`) — zelf gegenereerde, gelijkende B1-teksten + MC-vragen. **Dit is wat publiek mag.**
  3. **Woordenschat & zinsbouw** — woorden en zinsstructuren uit de examenteksten, met NL/EN/TR-uitleg.

## Echte examenstructuur (uit de PDF's)
Lezen I = **6 teksten**, elk **5–7 meerkeuzevragen** (A/B/C/D), **totaal 35 vragen**. Domeinen: `werk` / `educatie` / `overig`. Tekstsoorten: `persuasief` / `instructief` / `descriptief` / `beschouwend`. **Geslaagd = ≥24 goed** (NT2-score ≥500). Per examen hoort een eigen **scoretabel** (punten→NT2-score) en eigen antwoordsleutel. Bron-PDF's: `/home/mesuto/Downloads/Inburgeren/Lezen/`.

## Structuur
```
index.html              hub-shell + NL·EN·TR taalknop, views: "Examens" / "Mijn voortgang"
css/style.css           thema (licht + dark via prefers-color-scheme), kaarten/badges
js/i18n.js              UI-stringtabel nl/en/tr · INB.t(key) · INB.tr({nl,en,tr}) (fallback nl→en→tr) · taal in localStorage['inb_lang']
js/bootstrap.js         window.INB · registerExamen() · registerWoorden() · getters
js/store.js             localStorage (prefix inb_): examenpogingen + woorden-stats. Lees altijd met `|| {}` / `|| []`
js/lezen.js             Lezen-runner: tekstpaneel + MC, globale nummering 1..N, score = #goed, NT2 = scoretabel[#goed]
js/woorden.js           woorden-runner: teach/flashcard + oefenvragen (mc / invoer / gat)
js/app.js               hub-render + hash-routing (#/, #/examen/<id>, #/woorden/<id>, #/voortgang) — LAATST geladen
data/lezen/*.js         één registerExamen() per bestand
data/woorden/*.js       één registerWoorden() per bestand
server.py               statische server, **poort 8126**
```
**Script-volgorde in index.html** (cruciaal): i18n → bootstrap → store → lezen → woorden → data/lezen/* → data/woorden/* → app.js (laatst). Cache-busting `?v=` bumpen bij CSS/JS-wijzigingen.

## Datacontract — EXAMEN (`data/lezen/*.js`)
```js
INB.registerExamen({
  id:"lezen-2024", vak:"lezen", jaar:2024, bron:"echt",   // "echt" | "oefen"
  titel:"Lezen I — 2024", niveau:"B1", geslaagdVanaf:24,
  scoretabel:[283, …, 694],   // index = #punten (0..N), waarde = NT2-score
  teksten:[ {
    titel:"Bakkerij", domein:"werk", tekstsoort:"persuasief",
    html:`<p>…</p>`,
    vragen:[ { vraag:"…?", opties:["A…","B…","C…","D…"], antwoord:1 /*0-based*/,
               uitleg:{nl:"…",en:"…",tr:"…"} } ]
  } ]
});
```
Runner nummert vragen globaal 1..N, `score=#goed`, `NT2=scoretabel[#goed]`, `geslaagd = #goed>=geslaagdVanaf`. Resultaatscherm: grote NT2-score + geslaagd/gezakt-badge + per-vraag review met uitleg in de actieve taal. **Houd `scoretabel`-lengte = N+1** (anders out-of-range).

## Datacontract — WOORDEN (`data/woorden/*.js`)
```js
INB.registerWoorden({
  id:"w-2024-werk", titel:"Woordenschat — Werk", bronExamen:"lezen-2024", icoon:"💼",
  intro:{nl:"…",en:"…",tr:"…"},
  items:[ {woord:"de bakkerij", nl:"…", en:"bakery", tr:"fırın", voorbeeld:"…"} ],
  vragen:[
    {type:"mc",     vraag:"…", opties:["…"], antwoord:0, uitleg:{nl,en,tr}},
    {type:"invoer", vraag:"…", antwoord:"bakkerij", uitleg:{…}},  // case-insensitive, alternatieven met "a|b"
    {type:"gat",    zin:"Ik koop brood bij de ___.", antwoord:"bakkerij", uitleg:{…}}
  ]
});
```

## Draaien & hosting
`python3 server.py` → `http://localhost:8126/` (of `index.html` direct via `file://`). **Publiceren: GitHub Pages** (puur statisch, geen backend; scores in localStorage). **Alleen `bron:"oefen"` + woordenschat publiek**; echte examens via `.gitignore` uit de publieke repo houden.

## Werkwijze (tokenbeleid)
**Planning + coördinatie + verificatie door Opus 4.8; code en data-extractie door Sonnet-subagents** (mechanisch werk eventueel Haiku). PDF-extractie en bulk-generatie kunnen later via Antigravity CLI. Commit-trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`. Bij CSS/JS-wijziging de `?v=`-versie in `index.html` bumpen.

## Status
- ✅ Skelet + Lezen-engine + woorden-runner + drietalige UI + dashboard (geverifieerd: node --check + headless render).
- ✅ 1 sample-oefenexamen + 1 sample-woordenset (end-to-end werkend).
- ⬜ Echte examens 2023/2024/2025 extraheren (taak #3).
- ⬜ Meer oefenexamens + woordensets (taken #4/#5).
- ⬜ GitHub Pages-publicatie (taak #6). ⬜ Luisteren + audio (later).
