/* app.js
 * Hub rendering + hash-based routing. Loads LAST, after all data files,
 * so every exam/woorden set is already registered with INB.
 * Routes:
 *   #/                -> hub (Examens + Mijn voortgang tab switcher lives here too)
 *   #/examen/<id>      -> Lezen exam runner
 *   #/woorden/<id>     -> Woorden practice runner
 *   #/voortgang        -> progress dashboard
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  var rootEl;
  var currentRerender = null; // rerender fn for the currently mounted view, used on lang change

  function escapeHtml(str) {
    if (str === null || typeof str === "undefined") { return ""; }
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDate(iso) {
    if (!iso) { return ""; }
    try {
      var d = new Date(iso);
      return d.toLocaleDateString();
    } catch (e) {
      return iso;
    }
  }

  // ---- header / chrome ----

  function renderHeader() {
    var header = document.getElementById("app-header");
    if (!header) { return; }
    var lang = INB.getLang();
    var html = '';
    html += '<div class="header-inner">';
    html += '<a class="brand" href="#/">' + escapeHtml(INB.t("app_title")) + '</a>';
    html += '<nav class="main-nav">';
    html += '<a href="#/" data-route="hub-examens" class="nav-link">' + escapeHtml(INB.t("nav_examens")) + '</a>';
    html += '<a href="#/voortgang" data-route="voortgang" class="nav-link">' + escapeHtml(INB.t("nav_voortgang")) + '</a>';
    html += '</nav>';
    html += '<div class="lang-toggle" role="group" aria-label="Language">';
    html += '<button type="button" class="lang-btn' + (lang === "nl" ? " active" : "") + '" data-lang="nl">NL</button>';
    html += '<button type="button" class="lang-btn' + (lang === "en" ? " active" : "") + '" data-lang="en">EN</button>';
    html += '<button type="button" class="lang-btn' + (lang === "tr" ? " active" : "") + '" data-lang="tr">TR</button>';
    html += '</div>';
    html += '</div>';
    header.innerHTML = html;

    var langButtons = header.querySelectorAll(".lang-btn");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", function (ev) {
        var newLang = ev.currentTarget.getAttribute("data-lang");
        INB.setLang(newLang);
      });
    }
  }

  // ---- hub: list of exams + woorden sets ----

  function renderHub() {
    rootEl.innerHTML =
      '<section class="hub-section">' +
        '<h2>' + escapeHtml(INB.t("hub_examens_title")) + '</h2>' +
        '<p class="section-sub">' + escapeHtml(INB.t("hub_examens_sub")) + '</p>' +
        '<div class="card-grid" id="examens-grid"></div>' +
      '</section>' +
      '<section class="hub-section">' +
        '<h2>' + escapeHtml(INB.t("hub_woorden_title")) + '</h2>' +
        '<p class="section-sub">' + escapeHtml(INB.t("hub_woorden_sub")) + '</p>' +
        '<div class="card-grid" id="woorden-grid"></div>' +
      '</section>';

    var examensGrid = document.getElementById("examens-grid");
    var examens = INB.getExamens() || [];
    var examensHtml = "";
    for (var i = 0; i < examens.length; i++) {
      examensHtml += renderExamenCard(examens[i]);
    }
    examensGrid.innerHTML = examensHtml || "<p>" + escapeHtml(INB.t("no_attempts")) + "</p>";

    var woordenGrid = document.getElementById("woorden-grid");
    var sets = INB.getWoordenSets() || [];
    var woordenHtml = "";
    for (var j = 0; j < sets.length; j++) {
      woordenHtml += renderWoordenCard(sets[j]);
    }
    woordenGrid.innerHTML = woordenHtml || "<p>—</p>";
  }

  function renderExamenCard(examen) {
    var aantalTeksten = (examen.teksten || []).length;
    var aantalVragen = 0;
    for (var i = 0; i < (examen.teksten || []).length; i++) {
      aantalVragen += (examen.teksten[i].vragen || []).length;
    }
    var badgeClass = examen.bron === "echt" ? "badge-echt" : "badge-oefen";
    var badgeLabel = examen.bron === "echt" ? INB.t("badge_echt") : INB.t("badge_oefen");

    var attempt = (INB.store.getExamAttempt(examen.id)) || null;
    var bestLine = "";
    if (attempt && attempt.best) {
      bestLine = '<p class="card-attempt-info">' + escapeHtml(INB.t("result_score_label")) + ": " +
        attempt.best.score + " (" + attempt.best.correct + "/" + attempt.best.total + ")</p>";
    }

    return (
      '<div class="card examen-card">' +
        '<div class="card-top"><span class="badge ' + badgeClass + '">' + escapeHtml(badgeLabel) + '</span></div>' +
        '<h3>' + escapeHtml(examen.titel) + '</h3>' +
        '<p class="card-meta">' + escapeHtml(INB.t("label_niveau")) + ": " + escapeHtml(examen.niveau || "") +
          " · " + aantalTeksten + " " + escapeHtml(INB.t("label_teksten")) +
          " · " + aantalVragen + " " + escapeHtml(INB.t("label_vragen")) + '</p>' +
        bestLine +
        '<a class="btn btn-primary" href="#/examen/' + encodeURIComponent(examen.id) + '">' + escapeHtml(INB.t("btn_start")) + '</a>' +
      '</div>'
    );
  }

  function renderWoordenCard(set) {
    var aantalItems = (set.items || []).length;
    var stats = (INB.store.getWoordenStats(set.id)) || null;
    var statsLine = "";
    if (stats) {
      statsLine = '<p class="card-attempt-info">' + escapeHtml(INB.t("table_best")) + ": " + (stats.beste || 0) + "%</p>";
    }
    return (
      '<div class="card woorden-card">' +
        '<h3>' + (set.icoon ? set.icoon + " " : "") + escapeHtml(set.titel) + '</h3>' +
        '<p class="card-meta">' + aantalItems + " " + escapeHtml(INB.t("label_items")) + '</p>' +
        statsLine +
        '<a class="btn btn-primary" href="#/woorden/' + encodeURIComponent(set.id) + '">' + escapeHtml(INB.t("btn_bekijk")) + '</a>' +
      '</div>'
    );
  }

  // ---- voortgang dashboard ----

  function renderVoortgang() {
    var examAttempts = (INB.store.getAllExamAttempts()) || {};
    var examens = INB.getExamens() || [];

    var taken = 0, scoreSum = 0, bestScore = 0, passCount = 0;
    var rows = [];

    for (var i = 0; i < examens.length; i++) {
      var examen = examens[i];
      var rec = examAttempts[examen.id];
      if (!rec || !rec.best) { continue; }
      taken++;
      scoreSum += rec.best.score || 0;
      if ((rec.best.score || 0) > bestScore) { bestScore = rec.best.score; }
      if (rec.best.passed) { passCount++; }
      rows.push({
        titel: examen.titel,
        correct: rec.best.correct,
        total: rec.best.total,
        score: rec.best.score,
        passed: rec.best.passed,
        date: rec.last ? rec.last.date : ""
      });
    }

    var avgScore = taken > 0 ? Math.round(scoreSum / taken) : 0;

    var html = "";
    html += '<section class="hub-section">';
    html += '<h2>' + escapeHtml(INB.t("voortgang_title")) + '</h2>';
    html += '<div class="stats-grid">';
    html += statCard(INB.t("card_exams_taken"), taken);
    html += statCard(INB.t("card_avg_score"), avgScore);
    html += statCard(INB.t("card_best_score"), bestScore);
    html += statCard(INB.t("card_pass_count"), passCount);
    html += '</div>';

    html += '<div class="card table-card">';
    if (rows.length === 0) {
      html += '<p>' + escapeHtml(INB.t("no_attempts")) + '</p>';
    } else {
      html += '<table class="data-table"><thead><tr>';
      html += '<th>' + escapeHtml(INB.t("table_examen")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("result_correct_label")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_score")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_result")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_date")) + '</th>';
      html += '</tr></thead><tbody>';
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        html += '<tr>';
        html += '<td>' + escapeHtml(row.titel) + '</td>';
        html += '<td>' + row.correct + '/' + row.total + '</td>';
        html += '<td>' + row.score + '</td>';
        html += '<td><span class="badge ' + (row.passed ? "badge-pass" : "badge-fail") + '">' +
          escapeHtml(row.passed ? INB.t("result_pass") : INB.t("result_fail")) + '</span></td>';
        html += '<td>' + escapeHtml(formatDate(row.date)) + '</td>';
        html += '</tr>';
      }
      html += '</tbody></table>';
    }
    html += '</div>';
    html += '</section>';

    // woorden practice summary
    var woordenStats = (INB.store.getAllWoordenStats()) || {};
    var sets = INB.getWoordenSets() || [];
    var woordenRows = [];
    for (var w = 0; w < sets.length; w++) {
      var set = sets[w];
      var st = woordenStats[set.id];
      if (!st) { continue; }
      woordenRows.push({ titel: set.titel, pogingen: st.pogingen || 0, beste: st.beste || 0 });
    }

    html += '<section class="hub-section">';
    html += '<h2>' + escapeHtml(INB.t("woorden_summary_title")) + '</h2>';
    html += '<div class="card table-card">';
    if (woordenRows.length === 0) {
      html += '<p>' + escapeHtml(INB.t("no_woorden_practice")) + '</p>';
    } else {
      html += '<table class="data-table"><thead><tr>';
      html += '<th>' + escapeHtml(INB.t("table_set")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_times")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_best")) + '</th>';
      html += '</tr></thead><tbody>';
      for (var wr = 0; wr < woordenRows.length; wr++) {
        var wrow = woordenRows[wr];
        html += '<tr><td>' + escapeHtml(wrow.titel) + '</td><td>' + wrow.pogingen + '</td><td>' + wrow.beste + '%</td></tr>';
      }
      html += '</tbody></table>';
    }
    html += '</div>';
    html += '</section>';

    rootEl.innerHTML = html;
  }

  function statCard(label, value) {
    return (
      '<div class="card stat-card">' +
        '<div class="stat-value">' + value + '</div>' +
        '<div class="stat-label">' + escapeHtml(label) + '</div>' +
      '</div>'
    );
  }

  // ---- routing ----

  function parseHash() {
    var hash = window.location.hash || "#/";
    // strip leading "#"
    var path = hash.replace(/^#/, "");
    if (path === "" || path === "/") { return { view: "hub" }; }
    var parts = path.split("/").filter(function (p) { return p.length > 0; });
    if (parts[0] === "examen" && parts[1]) { return { view: "examen", id: decodeURIComponent(parts[1]) }; }
    if (parts[0] === "woorden" && parts[1]) { return { view: "woorden", id: decodeURIComponent(parts[1]) }; }
    if (parts[0] === "voortgang") { return { view: "voortgang" }; }
    return { view: "hub" };
  }

  function render() {
    var route = parseHash();
    currentRerender = null;
    updateNavActiveState(route);

    if (route.view === "examen") {
      var result = INB.lezen.renderExamen(route.id, rootEl);
      if (result && result.rerender) { currentRerender = result.rerender; }
    } else if (route.view === "woorden") {
      var result2 = INB.woorden.renderWoordenSet(route.id, rootEl);
      if (result2 && result2.rerender) { currentRerender = result2.rerender; }
    } else if (route.view === "voortgang") {
      renderVoortgang();
      currentRerender = renderVoortgang;
    } else {
      renderHub();
      currentRerender = renderHub;
    }
  }

  function updateNavActiveState(route) {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    var key = (route.view === "voortgang") ? "voortgang" : "hub-examens";
    var active = document.querySelector('.nav-link[data-route="' + key + '"]');
    if (active) { active.classList.add("active"); }
  }

  function init() {
    rootEl = document.getElementById("app-root");
    renderHeader();
    render();

    window.addEventListener("hashchange", render);

    // Re-render header + current view whenever the language changes.
    INB.onLangChange = function () {
      renderHeader();
      render();
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
