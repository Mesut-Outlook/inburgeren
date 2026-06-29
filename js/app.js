/* app.js
 * Hub rendering + hash-based routing. Loads LAST, after all data files,
 * so every exam/woorden set is already registered with INB.
 * Routes:
 *   #/                    -> hub (onderdeel-sections + woordenschat)
 *   #/examen/<id>          -> Lezen exam runner
 *   #/examen/<id>/stats    -> per-exam results / proficiency dashboard
 *   #/woorden/<id>         -> Woorden practice runner (id "alle" = combined virtual set)
 *   #/voortgang            -> global progress dashboard
 *   #/info                 -> "Over het examen" info page
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  var rootEl;
  var currentRerender = null; // rerender fn for the currently mounted view, used on lang change

  // ---- theme (manual light/dark override, persisted; default "auto" follows OS) ----

  function getTheme() {
    try { return localStorage.getItem('inb_theme') || 'auto'; } catch (e) { return 'auto'; }
  }

  function applyTheme(t) {
    var el = document.documentElement;
    if (t === 'light' || t === 'dark') {
      el.setAttribute('data-theme', t);
    } else {
      el.removeAttribute('data-theme');
    }
  }

  function effectiveTheme() {
    var t = getTheme();
    if (t !== 'auto') { return t; }
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function toggleTheme() {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('inb_theme', next); } catch (e) {}
    applyTheme(next);
    renderHeader();
  }

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
    html += '<a class="brand-link" href="#/">';
    html += '<span class="brand"><span class="brand-flag" aria-hidden="true">🇳🇱</span>' + escapeHtml(INB.t("app_title")) + '</span>';
    html += '<span class="brand-tagline">' + escapeHtml(INB.t("app_tagline")) + '</span>';
    html += '</a>';
    html += '<nav class="main-nav">';
    html += buildExamensDropdown();
    html += buildWoordenDropdown();
    html += '<a href="#/voortgang" data-route="voortgang" class="nav-link">' + escapeHtml(INB.t("nav_voortgang")) + '</a>';
    html += '<a href="#/info" data-route="info" class="nav-link">' + escapeHtml(INB.t("nav_info")) + '</a>';
    html += '</nav>';
    html += '<button type="button" class="theme-toggle" id="theme-toggle" aria-label="Theme" title="Light / Dark">' + (effectiveTheme() === 'dark' ? '☀️' : '🌙') + '</button>';
    html += '<div class="lang-toggle" role="group" aria-label="Language">';
    html += '<button type="button" class="lang-btn' + (lang === "nl" ? " active" : "") + '" data-lang="nl">NL</button>';
    html += '<button type="button" class="lang-btn' + (lang === "en" ? " active" : "") + '" data-lang="en">EN</button>';
    html += '<button type="button" class="lang-btn' + (lang === "tr" ? " active" : "") + '" data-lang="tr">TR</button>';
    html += '</div>';
    html += '</div>';
    header.innerHTML = html;

    var tb = document.getElementById("theme-toggle");
    if (tb) { tb.addEventListener("click", toggleTheme); }

    var langButtons = header.querySelectorAll(".lang-btn");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", function (ev) {
        var newLang = ev.currentTarget.getAttribute("data-lang");
        INB.setLang(newLang);
      });
    }

    wireDropdowns(header);
  }

  // Build the "Examens" dropdown: an entry per onderdeel (Lezen, KNM, …),
  // each grouping its registered exams. Empty onderdelen show a muted
  // "in voorbereiding" placeholder so the full structure stays visible.
  function buildExamensDropdown() {
    var onderdelen = INB.getOnderdelen() || [];
    var menu = '';
    menu += '<a class="nav-menu-link nav-menu-overview" href="#/">' + escapeHtml(INB.t("nav_overzicht")) + '</a>';
    for (var i = 0; i < onderdelen.length; i++) {
      var sec = onderdelen[i];
      menu += '<div class="nav-menu-group">';
      menu += '<span class="nav-menu-group-title">' + sec.icoon + ' ' + escapeHtml(INB.t(sec.titelKey)) + '</span>';
      if (sec.examens && sec.examens.length > 0) {
        for (var j = 0; j < sec.examens.length; j++) {
          var ex = sec.examens[j];
          menu += '<a class="nav-menu-link" href="#/examen/' + encodeURIComponent(ex.id) + '">' +
            escapeHtml(INB.tr(ex.titel)) + '</a>';
        }
      } else {
        menu += '<span class="nav-menu-empty">' + escapeHtml(INB.t("nav_in_voorbereiding")) + '</span>';
      }
      menu += '</div>';
    }
    return dropdownShell("nav-dd-examens", INB.t("nav_examens"), menu);
  }

  // Build the "Woorden" dropdown: the combined "Alle woorden" set first,
  // then one entry per registered vocabulary set.
  function buildWoordenDropdown() {
    var sets = INB.getWoordenSets() || [];
    var menu = '';
    if (INB.getAllWoorden && INB.getAllWoorden()) {
      menu += '<a class="nav-menu-link nav-menu-overview" href="#/woorden/' + encodeURIComponent(INB.ALLE_WOORDEN_ID) + '">' +
        '🗂️ ' + escapeHtml(INB.t("nav_alle_woorden")) + '</a>';
    }
    if (sets.length > 0) {
      menu += '<div class="nav-menu-group">';
      for (var i = 0; i < sets.length; i++) {
        var set = sets[i];
        menu += '<a class="nav-menu-link" href="#/woorden/' + encodeURIComponent(set.id) + '">' +
          (set.icoon ? set.icoon + ' ' : '') + escapeHtml(INB.tr(set.titel)) + '</a>';
      }
      menu += '</div>';
    } else {
      menu += '<span class="nav-menu-empty">' + escapeHtml(INB.t("nav_in_voorbereiding")) + '</span>';
    }
    return dropdownShell("nav-dd-woorden", INB.t("nav_woorden"), menu);
  }

  // Wrap a dropdown toggle button + its menu panel in the shared shell markup.
  function dropdownShell(id, label, menuHtml) {
    return (
      '<div class="nav-dropdown" data-dropdown="' + id + '">' +
        '<button type="button" class="nav-link nav-dropdown-toggle" aria-haspopup="true" aria-expanded="false">' +
          escapeHtml(label) + '<span class="nav-caret" aria-hidden="true">▾</span>' +
        '</button>' +
        '<div class="nav-menu" role="menu">' + menuHtml + '</div>' +
      '</div>'
    );
  }

  // Close every open dropdown inside the header.
  function closeDropdowns() {
    var hdr = document.getElementById("app-header");
    if (!hdr) { return; }
    var open = hdr.querySelectorAll(".nav-dropdown.open");
    for (var i = 0; i < open.length; i++) {
      open[i].classList.remove("open");
      var btn = open[i].querySelector(".nav-dropdown-toggle");
      if (btn) { btn.setAttribute("aria-expanded", "false"); }
    }
  }

  // Click to open a dropdown (closing any other); click a link, click outside,
  // or press Escape to close.
  function wireDropdowns(header) {
    var dropdowns = header.querySelectorAll(".nav-dropdown");

    for (var d = 0; d < dropdowns.length; d++) {
      (function (dd) {
        var toggle = dd.querySelector(".nav-dropdown-toggle");
        if (toggle) {
          toggle.addEventListener("click", function (ev) {
            ev.stopPropagation();
            var isOpen = dd.classList.contains("open");
            closeDropdowns();
            if (!isOpen) {
              dd.classList.add("open");
              toggle.setAttribute("aria-expanded", "true");
            }
          });
        }
        // Selecting an item navigates (hash change) — just close the menu.
        var links = dd.querySelectorAll(".nav-menu-link");
        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener("click", closeDropdowns);
        }
      })(dropdowns[d]);
    }

    if (!wireDropdowns._docHandler) {
      wireDropdowns._docHandler = true;
      document.addEventListener("click", closeDropdowns);
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") { closeDropdowns(); }
      });
    }
  }

  // ---- hub: list of exams + woorden sets ----

  function renderHub() {
    var html = "";

    // Apple-style Hero Section
    html += '<section class="hero-section">' +
              '<div class="hero-header fade-in">' +
                '<h1 class="hero-title">' + escapeHtml(INB.t("hero_title")) + '</h1>' +
                '<p class="hero-subtitle">' + escapeHtml(INB.t("hero_subtitle")) + '</p>' +
                '<p class="hero-desc">' + escapeHtml(INB.t("hero_desc")) + '</p>' +
              '</div>' +
              
              '<div class="hero-features fade-in-delay-1">' +
                '<h2 class="hero-features-title">' + escapeHtml(INB.t("hero_feature_title")) + '</h2>' +
                '<div class="hero-features-grid">' +
                  
                  '<a class="hero-feature-card" href="javascript:void(0)" data-target="sec-woorden">' +
                    '<div class="feature-icon">📖</div>' +
                    '<h3>' + escapeHtml(INB.t("hero_feat_vocab_title")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("hero_feat_vocab_desc")) + '</p>' +
                  '</a>' +
                  
                  '<a class="hero-feature-card" href="javascript:void(0)" data-target="sec-lezen">' +
                    '<div class="feature-icon">📚</div>' +
                    '<h3>' + escapeHtml(INB.t("onderdeel_lezen_titel")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("hero_feat_lezen_desc")) + '</p>' +
                  '</a>' +
                  
                  '<a class="hero-feature-card" href="javascript:void(0)" data-target="sec-knm">' +
                    '<div class="feature-icon">🏛️</div>' +
                    '<h3>' + escapeHtml(INB.t("hero_feat_knm_title")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("hero_feat_knm_desc")) + '</p>' +
                  '</a>' +
                  
                  '<a class="hero-feature-card" href="javascript:void(0)" data-target="sec-schrijven">' +
                    '<div class="feature-icon">📝</div>' +
                    '<h3>' + escapeHtml(INB.t("hero_feat_prod_title")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("hero_feat_prod_desc")) + '</p>' +
                  '</a>' +
                  
                  '<a class="hero-feature-card" href="javascript:void(0)" data-target="sec-luisteren">' +
                    '<div class="feature-icon">🎧</div>' +
                    '<h3>' + escapeHtml(INB.t("onderdeel_luisteren_titel")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("onderdeel_luisteren_desc")) + '</p>' +
                  '</a>' +
                  
                  '<a class="hero-feature-card" href="#/voortgang">' +
                    '<div class="feature-icon">📈</div>' +
                    '<h3>' + escapeHtml(INB.t("hero_feat_track_title")) + '</h3>' +
                    '<p>' + escapeHtml(INB.t("hero_feat_track_desc")) + '</p>' +
                  '</a>' +

                '</div>' +
              '</div>' +

              '<div class="hero-scroll-container fade-in-delay-2">' +
                '<button type="button" class="btn btn-primary hero-scroll-btn" id="hero-scroll-btn">' +
                  escapeHtml(INB.t("hero_scroll_label")) + ' <span class="arrow">↓</span>' +
                '</button>' +
              '</div>' +
            '</section>';

    html += '<div id="hub-content" class="hub-content fade-in-delay-2">';

    // Woordenschat practice goes FIRST (top of the page) — it's the daily,
    // gamified core of the site. `hub-featured` marks it for prominent styling.
    html +=
      '<section id="sec-woorden" class="hub-section hub-section-woorden hub-featured">' +
        '<h2>' + escapeHtml(INB.t("hub_woorden_title")) + '</h2>' +
        '<p class="section-sub">' + escapeHtml(INB.t("hub_woorden_sub")) + '</p>' +
        '<div class="card-grid" id="woorden-grid"></div>' +
      '</section>';

    // Then the five exam components.
    var onderdelen = (INB.getOnderdelen && INB.getOnderdelen()) || [];
    for (var o = 0; o < onderdelen.length; o++) {
      html += renderOnderdeelSection(onderdelen[o]);
    }

    html += '</div>'; // close hub-content

    rootEl.innerHTML = html;

    // Attach smooth scroll behavior to the scroll button
    var scrollBtn = document.getElementById("hero-scroll-btn");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", function () {
        var contentEl = document.getElementById("hub-content");
        if (contentEl) {
          contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // Attach smooth scroll behavior to the feature cards
    var featureCards = rootEl.querySelectorAll(".hero-feature-card[data-target]");
    for (var i = 0; i < featureCards.length; i++) {
      featureCards[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        var targetId = ev.currentTarget.getAttribute("data-target");
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    var woordenGrid = document.getElementById("woorden-grid");
    var sets = INB.getWoordenSets() || [];
    var woordenHtml = "";
    woordenHtml += renderAlleWoordenCard();
    for (var j = 0; j < sets.length; j++) {
      woordenHtml += renderWoordenCard(sets[j]);
    }
    woordenGrid.innerHTML = woordenHtml || "<p>—</p>";
  }

  function renderOnderdeelSection(sectie) {
    var html = "";
    html += '<section id="sec-' + escapeHtml(sectie.vak) + '" class="hub-section onderdeel-section">';
    html += '<h2>' + sectie.icoon + ' ' + escapeHtml(INB.t(sectie.titelKey)) + '</h2>';
    html += '<p class="section-sub">' + escapeHtml(INB.t(sectie.descKey)) + '</p>';

    if (sectie.examens && sectie.examens.length > 0) {
      html += '<div class="card-grid">';
      for (var i = 0; i < sectie.examens.length; i++) {
        html += renderExamenCard(sectie.examens[i]);
      }
      html += '</div>';
    } else {
      html += '<div class="card placeholder-card">';
      html += '<span class="badge badge-voorbereiding">' + escapeHtml(INB.t("onderdeel_in_voorbereiding")) + '</span>';
      if (sectie.noteKey) {
        html += '<p class="card-meta">' + escapeHtml(INB.t(sectie.noteKey)) + '</p>';
      }
      html += '</div>';
    }
    html += '</section>';
    return html;
  }

  function renderAlleWoordenCard() {
    var all = (INB.getAllWoorden && INB.getAllWoorden()) || null;
    if (!all) { return ""; }
    var aantalItems = (all.items || []).length;
    var stats = (INB.store.getWoordenStats(all.id)) || null;
    var statsLine = "";
    if (stats) {
      statsLine = '<p class="card-attempt-info">' + escapeHtml(INB.t("table_best")) + ": " + (stats.beste || 0) + "%</p>";
    }
    return (
      '<div class="card woorden-card woorden-card-alle">' +
        '<h3>' + (all.icoon ? all.icoon + " " : "") + escapeHtml(INB.tr(all.titel)) + '</h3>' +
        '<p class="card-meta">' + aantalItems + " " + escapeHtml(INB.t("label_items")) + '</p>' +
        statsLine +
        '<a class="btn btn-primary" href="#/woorden/' + encodeURIComponent(all.id) + '">' + escapeHtml(INB.t("btn_bekijk")) + '</a>' +
      '</div>'
    );
  }

  function renderExamenCard(examen) {
    var isProductief = examen.vak === "schrijven" || examen.vak === "spreken";
    var badgeClass = examen.bron === "echt" ? "badge-echt" : "badge-oefen";
    var badgeLabel = examen.bron === "echt" ? INB.t("badge_echt") : INB.t("badge_oefen");
    var niveauBadge = examen.niveau
      ? '<span class="badge badge-niveau">' + escapeHtml(examen.niveau) + '</span>'
      : "";

    // Meta line + best-score line differ for productive (taken-based) exams,
    // which are not auto-scored, vs. scored MC exams (lezen / knm).
    var metaTail, bestLine = "", actions;
    if (isProductief) {
      var aantalTaken = (examen.taken || []).length;
      metaTail = aantalTaken + " " + escapeHtml(INB.t("label_taken"));
      actions =
        '<a class="btn btn-primary" href="#/examen/' + encodeURIComponent(examen.id) + '">' + escapeHtml(INB.t("btn_bekijk")) + '</a>';
    } else {
      var aantalTeksten = (examen.teksten || []).length;
      var aantalVragen = 0;
      for (var i = 0; i < (examen.teksten || []).length; i++) {
        aantalVragen += (examen.teksten[i].vragen || []).length;
      }
      metaTail = aantalTeksten + " " + escapeHtml(INB.t("label_teksten")) +
        " · " + aantalVragen + " " + escapeHtml(INB.t("label_vragen"));
      var attempt = (INB.store.getExamAttempt(examen.id)) || null;
      if (attempt && attempt.best) {
        bestLine = '<p class="card-attempt-info">' + escapeHtml(INB.t("result_score_label")) + ": " +
          attempt.best.score + " (" + attempt.best.correct + "/" + attempt.best.total + ")</p>";
      }
      actions =
        '<a class="btn btn-primary" href="#/examen/' + encodeURIComponent(examen.id) + '">' + escapeHtml(INB.t("btn_start")) + '</a>' +
        '<a class="btn" href="#/examen/' + encodeURIComponent(examen.id) + '/stats">' + escapeHtml(INB.t("btn_resultaten")) + '</a>';
    }

    return (
      '<div class="card examen-card">' +
        '<div class="card-top"><span class="badge ' + badgeClass + '">' + escapeHtml(badgeLabel) + '</span>' + niveauBadge + '</div>' +
        '<h3>' + escapeHtml(INB.tr(examen.titel)) + '</h3>' +
        '<p class="card-meta">' + escapeHtml(INB.t("label_niveau")) + ": " + escapeHtml(examen.niveau || "") +
          " · " + metaTail + '</p>' +
        bestLine +
        '<div class="card-actions">' + actions + '</div>' +
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
        '<h3>' + (set.icoon ? set.icoon + " " : "") + escapeHtml(INB.tr(set.titel)) + '</h3>' +
        '<p class="card-meta">' + aantalItems + " " + escapeHtml(INB.t("label_items")) + '</p>' +
        statsLine +
        '<a class="btn btn-primary" href="#/woorden/' + encodeURIComponent(set.id) + '">' + escapeHtml(INB.t("btn_bekijk")) + '</a>' +
      '</div>'
    );
  }

  // ---- voortgang dashboard ----

  function examStatus(examen, rec) {
    if (examen.vak === "schrijven" || examen.vak === "spreken") {
      return (rec && (rec.best || rec.last))
        ? { emoji: "📝", labelKey: "vg_status_gedaan", cls: "is-pass" }
        : { emoji: "📝", labelKey: "vg_status_todo", cls: "is-todo" };
    }
    if (!rec || !rec.best) {
      return { emoji: "⬜", labelKey: "vg_status_todo", cls: "is-todo" };
    }
    if (rec.best.passed) {
      return { emoji: "✅", labelKey: "vg_status_geslaagd", cls: "is-pass" };
    }
    return { emoji: "🟡", labelKey: "vg_status_bezig", cls: "is-busy" };
  }

  function woordenStatus(best) {
    if (!best) { return { emoji: "⬜", labelKey: "vg_status_todo", cls: "is-todo" }; }
    if (best >= 80) { return { emoji: "🏆", labelKey: "vg_status_top", cls: "is-pass" }; }
    if (best >= 50) { return { emoji: "📈", labelKey: "vg_status_bezig", cls: "is-busy" }; }
    return { emoji: "🔁", labelKey: "vg_status_oefenen", cls: "is-busy" };
  }

  function progressBar(done, total) {
    var pct = total > 0 ? Math.round(done / total * 100) : 0;
    return (
      '<div class="vg-progress" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100">' +
        '<div class="vg-progress-fill" style="width:' + pct + '%;"></div>' +
        '<span class="vg-progress-label">' + done + ' / ' + total + '</span>' +
      '</div>'
    );
  }

  function gradePct(entry) {
    return entry && entry.total ? Math.round(entry.correct / entry.total * 100) : 0;
  }

  function avg(nums) {
    if (!nums.length) { return null; }
    var s = 0;
    for (var i = 0; i < nums.length; i++) { s += nums[i]; }
    return Math.round(s / nums.length);
  }

  function renderVoortgang() {
    var examAttempts = (INB.store.getAllExamAttempts()) || {};
    var examens = INB.getExamens() || [];
    var woordenStats = (INB.store.getAllWoordenStats()) || {};
    var sets = INB.getWoordenSets() || [];
    var onderdelen = INB.getOnderdelen() || [];

    var examTotal = examens.length;
    var examDone = 0, passCount = 0, bestScore = 0;
    for (var i = 0; i < examens.length; i++) {
      var rec = examAttempts[examens[i].id];
      if (rec && (rec.best || rec.last)) { examDone++; }
      if (rec && rec.best) {
        if (rec.best.passed) { passCount++; }
        if ((rec.best.score || 0) > bestScore) { bestScore = rec.best.score; }
      }
    }

    var woordenTotal = sets.length;
    var woordenDone = 0, woordenMastered = 0;
    for (var w = 0; w < sets.length; w++) {
      var st = woordenStats[sets[w].id];
      if (st && (st.beste || st.pogingen)) { woordenDone++; }
      if (st && st.beste >= 80) { woordenMastered++; }
    }

    var totalAll = examTotal + woordenTotal;
    var doneAll = examDone + woordenDone;

    var html = "";

    // ---- Section A: overall ----
    html += '<section class="hub-section vg-overall">';
    html += '<h2>' + escapeHtml(INB.t("voortgang_title")) + '</h2>';
    html += '<p class="section-sub">' + escapeHtml(INB.t("vg_intro")) + '</p>';
    html += progressBar(doneAll, totalAll);
    html += '<div class="stats-grid">';
    html += statCard("📚", INB.t("vg_done_count"), doneAll + " / " + totalAll);
    html += statCard("🎯", INB.t("card_pass_count"), passCount);
    html += statCard("🏆", INB.t("vg_woorden_mastered"), woordenMastered + " / " + woordenTotal);
    html += statCard("⭐", INB.t("card_best_score"), bestScore);
    html += '</div>';
    html += '</section>';

    // ---- Section B: grouped exercise table with expandable history ----
    html += '<section class="hub-section">';
    html += '<h3>' + escapeHtml(INB.t("vg_alle_oefeningen")) + '</h3>';
    html += '<div class="vg-table-wrap"><table class="vg-table"><thead><tr>' +
      '<th>' + escapeHtml(INB.t("vg_col_oefening")) + '</th>' +
      '<th>' + escapeHtml(INB.t("vg_col_keer")) + '</th>' +
      '<th>' + escapeHtml(INB.t("vg_col_beste")) + '</th>' +
      '<th>' + escapeHtml(INB.t("vg_col_gemiddeld")) + '</th>' +
      '<th>' + escapeHtml(INB.t("vg_col_status")) + '</th>' +
      '</tr></thead><tbody>';

    for (var o = 0; o < onderdelen.length; o++) {
      var sec = onderdelen[o];
      var exs = sec.examens || [];
      if (exs.length === 0) { continue; }

      var groupGrades = [];
      var groupDone = 0;
      for (var g = 0; g < exs.length; g++) {
        var grec = examAttempts[exs[g].id];
        if (grec && grec.history && grec.history.length) {
          groupDone++;
          for (var gh = 0; gh < grec.history.length; gh++) {
            groupGrades.push(gradePct(grec.history[gh]));
          }
        }
      }
      var groupAvg = avg(groupGrades);

      html += '<tr class="vg-group"><td colspan="5">' + sec.icoon + ' ' + escapeHtml(INB.t(sec.titelKey)) +
        ' <span class="vg-group-avg">· ' + escapeHtml(INB.t("vg_gemiddeld")) + ' ' +
        (groupAvg !== null ? groupAvg + '%' : '—') + ' · ' + groupDone + '/' + exs.length + '</span></td></tr>';

      for (var x = 0; x < exs.length; x++) {
        var examen = exs[x];
        var xrec = examAttempts[examen.id];
        var status = examStatus(examen, xrec);
        var xhistory = (xrec && xrec.history) || [];
        var xcount = xhistory.length;
        var xbeste = (xrec && xrec.best) ? gradePct(xrec.best) + '%' : '—';
        var xgemiddeld = xcount ? avg(xhistory.map(gradePct)) + '%' : '—';
        var xkeer = xcount > 0
          ? (xcount + '× <button class="vg-toggle" data-exam="' + escapeHtml(examen.id) + '">▾</button>')
          : '—';

        html += '<tr class="vg-row' + (xcount ? ' vg-row--clickable' : '') + '" data-exam="' + escapeHtml(examen.id) + '">' +
          '<td><a href="#/examen/' + encodeURIComponent(examen.id) + '">' + escapeHtml(INB.tr(examen.titel)) + '</a></td>' +
          '<td>' + xkeer + '</td>' +
          '<td>' + escapeHtml(xbeste) + '</td>' +
          '<td>' + escapeHtml(xgemiddeld) + '</td>' +
          '<td><span class="vg-status-badge ' + status.cls + '">' + status.emoji + ' ' + escapeHtml(INB.t(status.labelKey)) + '</span></td>' +
        '</tr>';

        if (xcount > 0) {
          html += '<tr class="vg-detail" id="vgd-' + escapeHtml(examen.id) + '" style="display:none;"><td colspan="5"><div class="vg-history">';
          for (var xh = xhistory.length - 1; xh >= 0; xh--) {
            var xentry = xhistory[xh];
            html += '<div class="vg-history-item">' +
              '<span>' + escapeHtml(formatDate(xentry.date)) + '</span>' +
              '<span>' + xentry.correct + '/' + xentry.total + '</span>' +
              '<span>' + gradePct(xentry) + '%</span>' +
              '<span class="' + (xentry.passed ? 'is-pass' : 'is-todo') + '">' +
                escapeHtml(xentry.passed ? INB.t("result_pass") : INB.t("result_fail")) + '</span>' +
            '</div>';
          }
          html += '</div></td></tr>';
        }
      }
    }

    // ---- Woorden group ----
    var woordenGrades = [];
    for (var ws = 0; ws < sets.length; ws++) {
      var wgrec = woordenStats[sets[ws].id];
      if (wgrec && wgrec.history && wgrec.history.length) {
        for (var wgh = 0; wgh < wgrec.history.length; wgh++) {
          woordenGrades.push(wgrec.history[wgh].percent || 0);
        }
      }
    }
    var woordenGroupAvg = avg(woordenGrades);

    html += '<tr class="vg-group"><td colspan="5">🗂️ ' + escapeHtml(INB.t("vg_vak_woorden")) +
      ' <span class="vg-group-avg">· ' + escapeHtml(INB.t("vg_gemiddeld")) + ' ' +
      (woordenGroupAvg !== null ? woordenGroupAvg + '%' : '—') + '</span></td></tr>';

    for (var s = 0; s < sets.length; s++) {
      var set = sets[s];
      var sst = woordenStats[set.id];
      var shistory = (sst && sst.history) || [];
      var scount = (sst && sst.pogingen) ? sst.pogingen : 0;
      var sbeste = sst ? (sst.beste || 0) + '%' : '—';
      var sgemiddeld = shistory.length ? avg(shistory.map(function (h) { return h.percent || 0; })) + '%' : '—';
      var skeer = scount > 0
        ? (scount + '× <button class="vg-toggle" data-set="' + escapeHtml(set.id) + '">▾</button>')
        : '—';
      var wstatus = woordenStatus(sst ? (sst.beste || 0) : 0);

      html += '<tr class="vg-row' + (shistory.length ? ' vg-row--clickable' : '') + '" data-set="' + escapeHtml(set.id) + '">' +
        '<td><a href="#/woorden/' + encodeURIComponent(set.id) + '">' + (set.icoon ? set.icoon + ' ' : '') + escapeHtml(INB.tr(set.titel)) + '</a></td>' +
        '<td>' + skeer + '</td>' +
        '<td>' + escapeHtml(sbeste) + '</td>' +
        '<td>' + escapeHtml(sgemiddeld) + '</td>' +
        '<td><span class="vg-status-badge ' + wstatus.cls + '">' + wstatus.emoji + ' ' + escapeHtml(INB.t(wstatus.labelKey)) + '</span></td>' +
      '</tr>';

      if (shistory.length > 0) {
        html += '<tr class="vg-detail" id="vgd-' + escapeHtml(set.id) + '" style="display:none;"><td colspan="5"><div class="vg-history">';
        for (var sh = shistory.length - 1; sh >= 0; sh--) {
          var sentry = shistory[sh];
          html += '<div class="vg-history-item">' +
            '<span>' + escapeHtml(formatDate(sentry.date)) + '</span>' +
            '<span>' + sentry.correct + '/' + sentry.total + '</span>' +
            '<span>' + (sentry.percent || 0) + '%</span>' +
          '</div>';
        }
        html += '</div></td></tr>';
      }
    }

    html += '</tbody></table></div>';
    html += '</section>';

    rootEl.innerHTML = html;

    var toggles = rootEl.querySelectorAll(".vg-toggle");
    for (var t = 0; t < toggles.length; t++) {
      toggles[t].addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var btn = ev.currentTarget;
        var key = btn.getAttribute("data-exam") || btn.getAttribute("data-set");
        if (!key) { return; }
        var detail = document.getElementById("vgd-" + key);
        if (!detail) { return; }
        var isOpen = detail.style.display !== "none";
        detail.style.display = isOpen ? "none" : "table-row";
        btn.textContent = isOpen ? "▾" : "▴";
      });
    }
  }

  function statCard(a, b, c) {
    var emoji = (typeof c === "undefined") ? "" : a;
    var label = (typeof c === "undefined") ? a : b;
    var value = (typeof c === "undefined") ? b : c;
    return (
      '<div class="card stat-card">' +
        (emoji ? '<div class="stat-emoji">' + emoji + '</div>' : "") +
        '<div class="stat-value">' + value + '</div>' +
        '<div class="stat-label">' + escapeHtml(label) + '</div>' +
      '</div>'
    );
  }

  // ---- per-exam results / proficiency dashboard ----

  function renderExamenStats(examenId) {
    var examen = INB.getExamen(examenId);
    if (!examen) {
      rootEl.innerHTML = "<p>" + escapeHtml(INB.t("no_exam_found")) + "</p>" +
        '<a class="btn" href="#/">' + escapeHtml(INB.t("btn_back")) + '</a>';
      return;
    }

    var rec = (INB.store.getExamAttempt(examenId)) || null;
    var history = (rec && rec.history) || [];
    var attemptsCount = history.length;
    var bestScore = (rec && rec.best) ? rec.best.score : 0;
    var bestPassed = (rec && rec.best) ? rec.best.passed : false;
    var lastScore = (rec && rec.last) ? rec.last.score : 0;

    var html = "";
    html += '<section class="hub-section">';
    html += '<h2>' + escapeHtml(INB.tr(examen.titel)) + '</h2>';
    html += '<p class="section-sub">' + escapeHtml(INB.t("stats_title")) + '</p>';

    html += '<div class="stats-grid">';
    html += statCard(INB.t("stats_attempts"), attemptsCount);
    html += statCard(INB.t("stats_best_score"), bestScore);
    html += statCard(INB.t("stats_last_score"), lastScore);
    html += '</div>';

    if (rec && rec.best) {
      html += '<p><span class="badge ' + (bestPassed ? "badge-pass" : "badge-fail") + '">' +
        escapeHtml(bestPassed ? INB.t("result_pass") : INB.t("result_fail")) + '</span></p>';
    }

    html += '<div class="card table-card">';
    html += '<h3>' + escapeHtml(INB.t("stats_timeline_title")) + '</h3>';
    if (history.length === 0) {
      html += '<p>' + escapeHtml(INB.t("no_attempts")) + '</p>';
    } else {
      html += '<table class="data-table"><thead><tr>';
      html += '<th>' + escapeHtml(INB.t("table_date")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("result_correct_label")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_score")) + '</th>';
      html += '<th>' + escapeHtml(INB.t("table_result")) + '</th>';
      html += '</tr></thead><tbody>';
      for (var i = history.length - 1; i >= 0; i--) {
        var entry = history[i];
        html += '<tr>';
        html += '<td>' + escapeHtml(formatDate(entry.date)) + '</td>';
        html += '<td>' + entry.correct + '/' + entry.total + '</td>';
        html += '<td>' + entry.score + '</td>';
        html += '<td><span class="badge ' + (entry.passed ? "badge-pass" : "badge-fail") + '">' +
          escapeHtml(entry.passed ? INB.t("result_pass") : INB.t("result_fail")) + '</span></td>';
        html += '</tr>';
      }
      html += '</tbody></table>';
    }
    html += '</div>';

    html += '<div class="exam-actions">';
    html += '<a class="btn btn-primary" href="#/examen/' + encodeURIComponent(examenId) + '">' + escapeHtml(INB.t("btn_start")) + '</a>';
    html += '<a class="btn" href="#/">' + escapeHtml(INB.t("btn_back")) + '</a>';
    html += '</div>';

    html += '</section>';

    rootEl.innerHTML = html;
  }

  // ---- productieve onderdelen: schrijven / spreken ----

  // Escape, then turn newlines into <br> for model answers / situatie text.
  function escapeMultiline(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }
  // ---- info page ----

  function infoBlock(titelKey, descKey) {
    return (
      '<div class="card info-card">' +
        '<h3>' + escapeHtml(INB.t(titelKey)) + '</h3>' +
        '<p>' + escapeHtml(INB.t(descKey)) + '</p>' +
      '</div>'
    );
  }

  function renderInfo() {
    var html = "";
    html += '<section class="hub-section">';
    html += '<h2>' + escapeHtml(INB.t("info_title")) + '</h2>';
    html += '<p class="section-sub">' + escapeHtml(INB.t("info_intro")) + '</p>';

    html += '<div class="info-grid">';
    html += infoBlock("info_project_titel", "info_project_desc");
    html += infoBlock("info_taalvaardigheden_titel", "info_taalvaardigheden_desc");
    html += infoBlock("info_knm_titel", "info_knm_desc");
    html += infoBlock("info_ona_pvt_titel", "info_ona_pvt_desc");
    html += infoBlock("info_niveau_titel", "info_niveau_desc");
    html += infoBlock("info_pip_titel", "info_pip_desc");
    html += infoBlock("info_vrijstelling_titel", "info_vrijstelling_desc");
    html += '</div>';

    html += '<div class="card info-disclaimer">';
    html += '<h3>' + escapeHtml(INB.t("info_disclaimer_titel")) + '</h3>';
    html += '<p>' + escapeHtml(INB.t("info_disclaimer_desc")) + '</p>';
    html += '<p><a href="https://inburgeren.nl/en/taking-the-integration-exam/" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(INB.t("info_link_label")) + '</a></p>';
    html += '</div>';

    html += '</section>';

    rootEl.innerHTML = html;
  }

  // ---- routing ----

  function parseHash() {
    var hash = window.location.hash || "#/";
    // strip leading "#"
    var path = hash.replace(/^#/, "");
    if (path === "" || path === "/") { return { view: "hub" }; }
    var parts = path.split("/").filter(function (p) { return p.length > 0; });
    if (parts[0] === "examen" && parts[1] && parts[2] === "stats") { return { view: "examen-stats", id: decodeURIComponent(parts[1]) }; }
    if (parts[0] === "examen" && parts[1]) { return { view: "examen", id: decodeURIComponent(parts[1]) }; }
    if (parts[0] === "woorden" && parts[1]) { return { view: "woorden", id: decodeURIComponent(parts[1]) }; }
    if (parts[0] === "voortgang") { return { view: "voortgang" }; }
    if (parts[0] === "info") { return { view: "info" }; }
    return { view: "hub" };
  }

  function render() {
    var route = parseHash();
    currentRerender = null;
    updateNavActiveState(route);

    if (route.view === "examen") {
      var ex = INB.getExamen(route.id);
      if (ex && (ex.vak === "schrijven" || ex.vak === "spreken")) {
        var result = INB.productief.renderExamen(route.id, rootEl);
        if (result && result.rerender) { currentRerender = result.rerender; }
      } else {
        var result2 = INB.lezen.renderExamen(route.id, rootEl);
        if (result2 && result2.rerender) { currentRerender = result2.rerender; }
      }
    } else if (route.view === "examen-stats") {
      renderExamenStats(route.id);
      currentRerender = function () { renderExamenStats(route.id); };
    } else if (route.view === "woorden") {
      var setId = route.id === "alle" ? INB.ALLE_WOORDEN_ID : route.id;
      var result2 = INB.woorden.renderWoordenSet(setId, rootEl);
      if (result2 && result2.rerender) { currentRerender = result2.rerender; }
    } else if (route.view === "voortgang") {
      renderVoortgang();
      currentRerender = renderVoortgang;
    } else if (route.view === "info") {
      renderInfo();
      currentRerender = renderInfo;
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
    var key = "hub-examens";
    if (route.view === "voortgang") { key = "voortgang"; }
    else if (route.view === "info") { key = "info"; }
    var active = document.querySelector('.nav-link[data-route="' + key + '"]');
    if (active) { active.classList.add("active"); }
  }

  function init() {
    applyTheme(getTheme());
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
