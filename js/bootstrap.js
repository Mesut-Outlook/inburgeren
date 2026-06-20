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
})();
