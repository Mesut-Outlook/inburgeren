# Inburgeren NT2 — Lezen

A pure-static practice website for the Dutch NT2/Inburgeren Staatsexamen
Programma I (B1), **Lezen** (reading) component. No build step, no ES
modules, no frameworks — works directly from `file://` or via a simple
static server.

UI chrome (navigation, buttons, hints, vocabulary glosses, explanations)
supports **Dutch / English / Turkish**. All exam content itself stays in
Dutch.

## How to run

Option 1 — open directly:

```
open index.html        # or just double-click it / drag into a browser
```

Option 2 — via the included static server (recommended, avoids any
file:// quirks with some browsers):

```
python3 server.py
```

Then visit http://localhost:8126/

Option 3 — Python's built-in server:

```
python3 -m http.server 8126
```

## Structure

```
index.html              Hub page: header with NL/EN/TR toggle, "Examens" + "Mijn voortgang" views
css/style.css            Responsive styling, light + dark mode (prefers-color-scheme)
js/i18n.js                UI string table (nl/en/tr), INB.t() / INB.tr(), language persistence
js/bootstrap.js           window.INB registry: registerExamen(), registerWoorden(), getters
js/store.js               localStorage-backed progress tracking (exam attempts, woorden stats)
js/lezen.js               Lezen exam runner: renders texts + questions, scores, shows review
js/woorden.js             Vocabulary/sentence-structure runner: teach (flashcards) + practice (mc/invoer/gat)
js/app.js                 Hub rendering + hash routing (#/, #/examen/<id>, #/woorden/<id>, #/voortgang)
data/lezen/examen_oefen_1.js   Sample practice exam: 2 texts, 10 questions (B1, original Dutch content)
data/woorden/w_oefen_1.js      Sample vocabulary set tied to the sample exam: 8 items + 8 practice questions
server.py                 Static file server on port 8126
```

## Notes

- Progress is stored only in the browser's `localStorage` (key prefix `inb_`) — no account, no backend.
- Script load order in `index.html` is significant: i18n → bootstrap → store → lezen → woorden → data files → app.js (last).
- To add a new exam or vocabulary set, drop a new file into `data/lezen/` or `data/woorden/` following the schema in the existing sample files, and add a `<script>` tag for it in `index.html` (before `js/app.js`).
