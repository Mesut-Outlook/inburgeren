/* bootstrap.js
 * Defines the global INB registry: collections for exams and vocabulary sets,
 * plus registration functions used by data/*.js files.
 * Must load AFTER i18n.js (which creates window.INB) and BEFORE data files.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  // Internal collections, keyed by id, plus an array to preserve registration order.
  INB._examens = {};
  INB._examenOrder = [];
  INB._woorden = {};
  INB._woordenOrder = [];

  /**
   * Register a Lezen exam. See data/lezen/examen_oefen_1.js for the schema.
   * @param {Object} examen
   */
  INB.registerExamen = function (examen) {
    if (!examen || !examen.id) {
      console.error("INB.registerExamen: missing id", examen);
      return;
    }
    if (!INB._examens[examen.id]) {
      INB._examenOrder.push(examen.id);
    }
    INB._examens[examen.id] = examen;
  };

  /**
   * Register a vocabulary / sentence-structure practice set.
   * See data/woorden/w_oefen_1.js for the schema.
   * @param {Object} set
   */
  INB.registerWoorden = function (set) {
    if (!set || !set.id) {
      console.error("INB.registerWoorden: missing id", set);
      return;
    }
    if (!INB._woorden[set.id]) {
      INB._woordenOrder.push(set.id);
    }
    INB._woorden[set.id] = set;
  };

  /** Get all registered exams as an array, in registration order. */
  INB.getExamens = function () {
    var out = [];
    for (var i = 0; i < INB._examenOrder.length; i++) {
      out.push(INB._examens[INB._examenOrder[i]]);
    }
    return out;
  };

  /** Get a single exam by id, or null. */
  INB.getExamen = function (id) {
    return INB._examens[id] || null;
  };

  /** Get all registered vocabulary sets as an array, in registration order. */
  INB.getWoordenSets = function () {
    var out = [];
    for (var i = 0; i < INB._woordenOrder.length; i++) {
      out.push(INB._woorden[INB._woordenOrder[i]]);
    }
    return out;
  };

  /** Get a single vocabulary set by id, or null. */
  INB.getWoordenSet = function (id) {
    return INB._woorden[id] || null;
  };

  /** id of the virtual "all words" combined vocabulary set. */
  INB.ALLE_WOORDEN_ID = "w-alle";

  /**
   * Build (on demand) a virtual vocabulary set that aggregates the items
   * and vragen of every registered woorden set into one. Used by the
   * "Alle woorden" combined practice card. Not stored in INB._woorden,
   * so it never shows up twice in INB.getWoordenSets().
   * @returns {Object|null} the combined set, or null if nothing is registered yet.
   */
  INB.getAllWoorden = function () {
    var sets = INB.getWoordenSets() || [];
    if (sets.length === 0) { return null; }
    var items = [];
    var vragen = [];
    for (var i = 0; i < sets.length; i++) {
      items = items.concat(sets[i].items || []);
      vragen = vragen.concat(sets[i].vragen || []);
    }
    return {
      id: INB.ALLE_WOORDEN_ID,
      titel: { nl: "Alle woorden — alle examens", en: "All words — all exams", tr: "Tüm kelimeler — tüm sınavlar" },
      icoon: "🗂️",
      intro: { nl: "Oefen alle woorden uit alle woordensets in één keer.", en: "Practice all the words from every vocabulary set at once.", tr: "Tüm kelime setlerindeki kelimeleri bir kerede çalışın." },
      items: items,
      vragen: vragen
    };
  };

  /**
   * Onderdeel (exam component) section definitions for the hub, in display order.
   * Each section groups registered exams by their `vak` field. Sections with
   * no registered exams yet render as "in voorbereiding" placeholders, so the
   * structure stays visible and new exams (e.g. vak:"luisteren") automatically
   * slot into the right section once registered.
   */
  INB.ONDERDELEN = [
    { vak: "lezen",      icoon: "📖", titelKey: "onderdeel_lezen_titel",      descKey: "onderdeel_lezen_desc",      noteKey: null },
    { vak: "knm",        icoon: "🏛️", titelKey: "onderdeel_knm_titel",        descKey: "onderdeel_knm_desc",        noteKey: "onderdeel_knm_note" },
    { vak: "schrijven",  icoon: "✍️", titelKey: "onderdeel_schrijven_titel",  descKey: "onderdeel_schrijven_desc",  noteKey: "onderdeel_schrijven_note" },
    { vak: "spreken",    icoon: "🗣️", titelKey: "onderdeel_spreken_titel",    descKey: "onderdeel_spreken_desc",    noteKey: "onderdeel_spreken_note" },
    { vak: "luisteren",  icoon: "🎧", titelKey: "onderdeel_luisteren_titel",  descKey: "onderdeel_luisteren_desc",  noteKey: "onderdeel_luisteren_note" }
  ];

  /**
   * Group all registered exams by `vak`, returning one entry per item in
   * INB.ONDERDELEN with its matching exams (possibly empty array).
   * @returns {Array<{vak,icoon,titelKey,descKey,noteKey,examens:Array}>}
   */
  INB.getOnderdelen = function () {
    var examens = INB.getExamens() || [];
    var out = [];
    for (var i = 0; i < INB.ONDERDELEN.length; i++) {
      var def = INB.ONDERDELEN[i];
      var matched = [];
      for (var j = 0; j < examens.length; j++) {
        if (examens[j].vak === def.vak) { matched.push(examens[j]); }
      }
      out.push({
        vak: def.vak,
        icoon: def.icoon,
        titelKey: def.titelKey,
        descKey: def.descKey,
        noteKey: def.noteKey,
        examens: matched
      });
    }
    return out;
  };
})();
