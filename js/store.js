/* store.js
 * localStorage-backed progress tracking.
 * Keys are prefixed with "inb_" to avoid clashing with other projects/pages.
 * All reads are defensively guarded with `|| {}` / `|| []` so missing or
 * corrupted data never crashes the app.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  var KEY_EXAM_ATTEMPTS = "inb_exam_attempts";   // { [examenId]: { best, last, history: [] } }
  var KEY_WOORDEN_STATS = "inb_woorden_stats";   // { [setId]: { pogingen, beste, history: [] } }

  function safeParse(json) {
    if (!json) { return null; }
    try {
      return JSON.parse(json);
    } catch (e) {
      console.warn("INB.store: failed to parse stored JSON, ignoring", e);
      return null;
    }
  }

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("INB.store: could not write to localStorage", e);
    }
  }

  // ---- exam attempts ----

  /** Returns the full map of exam attempts: { [examenId]: {...} }. Never null. */
  function getAllExamAttempts() {
    return safeParse(safeGet(KEY_EXAM_ATTEMPTS)) || {};
  }

  /** Returns the attempt record for one exam id, or null if never attempted. */
  function getExamAttempt(examenId) {
    var all = getAllExamAttempts() || {};
    return all[examenId] || null;
  }

  /**
   * Record a finished attempt.
   * @param {string} examenId
   * @param {Object} result - { correct, total, score, passed }
   */
  function saveExamAttempt(examenId, result) {
    if (!examenId || !result) { return; }
    var all = getAllExamAttempts() || {};
    var rec = all[examenId] || { best: null, last: null, history: [] };
    var entry = {
      correct: result.correct || 0,
      total: result.total || 0,
      score: result.score || 0,
      passed: !!result.passed,
      date: new Date().toISOString()
    };
    rec.last = entry;
    if (!rec.best || entry.score > rec.best.score) {
      rec.best = entry;
    }
    rec.history = rec.history || [];
    rec.history.push(entry);
    all[examenId] = rec;
    safeSet(KEY_EXAM_ATTEMPTS, JSON.stringify(all));
  }

  // ---- woorden practice stats ----

  /** Returns the full map of woorden stats: { [setId]: {...} }. Never null. */
  function getAllWoordenStats() {
    return safeParse(safeGet(KEY_WOORDEN_STATS)) || {};
  }

  /** Returns the stats record for one set id, or null if never practiced. */
  function getWoordenStats(setId) {
    var all = getAllWoordenStats() || {};
    return all[setId] || null;
  }

  /**
   * Record a finished practice round.
   * @param {string} setId
   * @param {Object} result - { correct, total, percent }
   */
  function saveWoordenAttempt(setId, result) {
    if (!setId || !result) { return; }
    var all = getAllWoordenStats() || {};
    var rec = all[setId] || { pogingen: 0, beste: 0, history: [] };
    rec.pogingen = (rec.pogingen || 0) + 1;
    var percent = result.percent || 0;
    if (percent > (rec.beste || 0)) {
      rec.beste = percent;
    }
    rec.history = rec.history || [];
    rec.history.push({
      correct: result.correct || 0,
      total: result.total || 0,
      percent: percent,
      date: new Date().toISOString()
    });
    all[setId] = rec;
    safeSet(KEY_WOORDEN_STATS, JSON.stringify(all));
  }

  INB.store = {
    getAllExamAttempts: getAllExamAttempts,
    getExamAttempt: getExamAttempt,
    saveExamAttempt: saveExamAttempt,
    getAllWoordenStats: getAllWoordenStats,
    getWoordenStats: getWoordenStats,
    saveWoordenAttempt: saveWoordenAttempt
  };
})();
