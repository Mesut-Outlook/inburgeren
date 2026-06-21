/* woorden.js
 * Vocabulary & sentence-structure practice runner.
 * Two views per set:
 *  - "teach" (flashcard list): shows every item with NL word + NL/EN/TR gloss + example.
 *  - "practice": a Duolingo-style ONE-question-at-a-time flow with instant
 *    feedback, a progress bar, a streak (🔥) counter, and re-queueing of wrong
 *    answers to the end (no "lives" — the session never fails, you keep going
 *    until every question is answered correctly once). Scores first-try % and
 *    saves via store.
 *
 * Markup contract for the design session (styling lives in css/style.css):
 *   .wpract              practice wrapper
 *   .wpract-top          header row (progress + streak)
 *   .wpract-bar          progress track  > .wpract-bar-fill   (width = % done)
 *   .wpract-streak       streak chip (hidden when streak === 0)
 *   .wpract-card         the current question card
 *   .wpract-feedback     feedback banner, gets .correct / .wrong modifier
 *   .optie-btn / .text-input  reused from the exam runner
 *   #btn-w-check  -> after answering becomes  #btn-w-continue
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  function escapeHtml(str) {
    if (str === null || typeof str === "undefined") { return ""; }
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /** Normalize a user-typed answer for comparison: trim, lowercase, collapse spaces. */
  function normalize(str) {
    return String(str || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  /**
   * Check a typed answer against an expected answer string that may contain
   * alternatives separated by "|" (e.g. "bakkerij|de bakkerij").
   */
  function matchesAnswer(userInput, expected) {
    var alts = String(expected || "").split("|");
    var normalizedUser = normalize(userInput);
    for (var i = 0; i < alts.length; i++) {
      if (normalize(alts[i]) === normalizedUser) { return true; }
    }
    return false;
  }

  /** In-place Fisher–Yates shuffle. */
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  /**
   * Render the main entry view for a woorden set: choice between "teach" and "practice".
   */
  function renderWoordenSet(setId, container) {
    var set = INB.getWoordenSet(setId);
    if (!set && setId === INB.ALLE_WOORDEN_ID && typeof INB.getAllWoorden === "function") {
      set = INB.getAllWoorden();
    }
    if (!set) {
      container.innerHTML = "<p>" + escapeHtml(INB.t("no_set_found")) + "</p>";
      return;
    }

    function renderMenu() {
      var html = "";
      html += '<div class="woorden-header card">';
      html += '<h2>' + (set.icoon ? set.icoon + " " : "") + escapeHtml(INB.tr(set.titel)) + '</h2>';
      if (set.intro) {
        html += '<p class="woorden-intro">' + escapeHtml(INB.tr(set.intro)) + '</p>';
      }
      html += '<div class="exam-actions">';
      html += '<button type="button" class="btn btn-primary" id="btn-teach">' + escapeHtml(INB.t("btn_teach")) + '</button>';
      html += '<button type="button" class="btn btn-secondary" id="btn-practice">' + escapeHtml(INB.t("btn_practice")) + '</button>';
      html += '<button type="button" class="btn" id="btn-back-woorden">' + escapeHtml(INB.t("btn_back")) + '</button>';
      html += '</div></div>';
      html += '<div id="woorden-sub"></div>';

      container.innerHTML = html;

      document.getElementById("btn-teach").addEventListener("click", function () {
        renderTeach(document.getElementById("woorden-sub"));
      });
      document.getElementById("btn-practice").addEventListener("click", function () {
        renderPractice(document.getElementById("woorden-sub"));
      });
      document.getElementById("btn-back-woorden").addEventListener("click", function () {
        window.location.hash = "#/";
      });
    }

    function renderTeach(subContainer) {
      var items = set.items || [];
      var html = '<div class="teach-list">';
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        html += '<div class="flashcard card">';
        html += '<div class="flashcard-woord">' + escapeHtml(item.woord) + '</div>';
        html += '<div class="flashcard-glosses">';
        if (item.nl) { html += '<span class="gloss gloss-nl">NL: ' + escapeHtml(item.nl) + '</span>'; }
        if (item.en) { html += '<span class="gloss gloss-en">EN: ' + escapeHtml(item.en) + '</span>'; }
        if (item.tr) { html += '<span class="gloss gloss-tr">TR: ' + escapeHtml(item.tr) + '</span>'; }
        html += '</div>';
        if (item.voorbeeld) {
          html += '<p class="flashcard-voorbeeld"><em>' + escapeHtml(INB.t("example_label")) + ':</em> ' + escapeHtml(item.voorbeeld) + '</p>';
        }
        html += '</div>';
      }
      html += '</div>';
      subContainer.innerHTML = html;
    }

    // ---- Duolingo-style practice ----------------------------------------

    function renderPractice(subContainer) {
      var vragen = set.vragen || [];

      if (!vragen.length) {
        subContainer.innerHTML =
          '<div class="card"><p>' + escapeHtml(INB.t("no_practice_questions")) + '</p>' +
          '<div class="exam-actions"><button type="button" class="btn" id="btn-w-back">' +
          escapeHtml(INB.t("btn_back")) + '</button></div></div>';
        document.getElementById("btn-w-back").addEventListener("click", backToHub);
        return;
      }

      var n = vragen.length;
      var queue = shuffle((function () { var a = []; for (var i = 0; i < n; i++) { a.push(i); } return a; })());
      var correctSet = {};   // qi -> true once answered correctly (drives progress)
      var attempted = {};    // qi -> true once it has been answered at least once
      var firstTryCorrect = 0;
      var streak = 0;
      var current = null;    // current question index
      var selectedOption = null; // mc selection for the current question
      var currentView = null;    // {promptHtml, opties[], correctIdx} for the current question
      var distractorPool = buildDistractorPool();

      function uniqueCorrect() {
        var c = 0;
        for (var k in correctSet) { if (correctSet.hasOwnProperty(k)) { c++; } }
        return c;
      }

      function firstAlt(ans) { return String(ans || "").split("|")[0].trim(); }

      // Pool of candidate wrong-answer strings drawn from this set, so that
      // gat / invoer questions can also be presented as multiple-choice.
      function buildDistractorPool() {
        var pool = [], seen = {};
        function add(s) {
          s = String(s || "").trim();
          var k = normalize(s);
          if (s && !seen[k]) { seen[k] = 1; pool.push(s); }
        }
        (set.vragen || []).forEach(function (v) {
          if (v.type === "mc") { (v.opties || []).forEach(add); }
          else { add(firstAlt(v.antwoord)); }
        });
        return pool;
      }

      // Turn ANY question into a multiple-choice view: {promptHtml, opties, correctIdx}.
      // mc questions keep their options; gat/invoer get the correct answer plus
      // up to three distractors picked from the pool.
      function buildView(vraag) {
        if (vraag.type === "mc") {
          return { promptHtml: escapeHtml(vraag.vraag), opties: (vraag.opties || []).slice(), correctIdx: vraag.antwoord };
        }
        var correct = firstAlt(vraag.antwoord);
        var correctKey = normalize(correct);
        var promptHtml = (vraag.type === "gat")
          ? escapeHtml(vraag.zin || "").replace("___", '<span class="gap-marker">___</span>')
          : escapeHtml(vraag.vraag);

        var cands = distractorPool.filter(function (s) { return normalize(s) !== correctKey; });
        shuffle(cands);
        var opties = [correct];
        for (var i = 0; i < cands.length && opties.length < 4; i++) { opties.push(cands[i]); }
        shuffle(opties);
        var correctIdx = 0;
        for (var j = 0; j < opties.length; j++) { if (normalize(opties[j]) === correctKey) { correctIdx = j; break; } }
        return { promptHtml: promptHtml, opties: opties, correctIdx: correctIdx };
      }

      function backToHub() { window.location.hash = "#/"; }

      function next() {
        selectedOption = null;
        while (queue.length && correctSet[queue[0]]) { queue.shift(); }
        if (!queue.length || uniqueCorrect() >= n) { return finish(); }
        current = queue[0];
        renderStep();
      }

      function progressHtml() {
        var pct = Math.round((uniqueCorrect() / n) * 100);
        var html = '<div class="wpract-top">';
        html += '<div class="wpract-bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100">';
        html += '<div class="wpract-bar-fill" style="width:' + pct + '%;"></div></div>';
        html += '<span class="wpract-streak"' + (streak > 0 ? "" : ' style="display:none;"') + '>🔥 ' +
          escapeHtml(INB.t("streak_label")) + ' ' + streak + '</span>';
        html += '</div>';
        return html;
      }

      function renderStep() {
        var vraag = vragen[current];
        currentView = buildView(vraag); // always a multiple-choice view
        var html = '<div class="wpract">';
        html += progressHtml();
        html += '<div class="wpract-card card" data-question="' + current + '">';
        html += '<p class="vraag-nummer">' + escapeHtml(INB.t("question_label")) + ' ' +
          (uniqueCorrect() + 1) + ' ' + escapeHtml(INB.t("of_label")) + ' ' + n + '</p>';
        html += '<p class="vraag-tekst">' + currentView.promptHtml + '</p>';
        html += '<div class="opties">';
        for (var oi = 0; oi < currentView.opties.length; oi++) {
          html += '<button type="button" class="optie-btn" data-oidx="' + oi + '">';
          html += '<span class="optie-letter">' + String.fromCharCode(65 + oi) + '</span>';
          html += '<span class="optie-tekst">' + escapeHtml(currentView.opties[oi]) + '</span>';
          html += '</button>';
        }
        html += '</div>';
        html += '<div class="wpract-feedback" id="w-feedback" style="display:none;"></div>';
        html += '</div>'; // wpract-card

        html += '<div class="exam-actions">';
        html += '<button type="button" class="btn btn-primary" id="btn-w-check">' + escapeHtml(INB.t("btn_check")) + '</button>';
        html += '</div>';
        html += '</div>'; // wpract

        subContainer.innerHTML = html;

        var optBtns = subContainer.querySelectorAll(".optie-btn");
        for (var i = 0; i < optBtns.length; i++) {
          optBtns[i].addEventListener("click", function (ev) {
            selectedOption = parseInt(ev.currentTarget.getAttribute("data-oidx"), 10);
            for (var b = 0; b < optBtns.length; b++) { optBtns[b].classList.remove("selected"); }
            ev.currentTarget.classList.add("selected");
          });
        }

        document.getElementById("btn-w-check").addEventListener("click", check);
      }

      function check() {
        if (selectedOption === null) { return; } // need a choice first
        var ok = selectedOption === currentView.correctIdx;
        var firstAttempt = !attempted[current];
        attempted[current] = true;

        if (ok) {
          streak++;
          correctSet[current] = true;
          queue.shift(); // remove from front; it's done
          if (firstAttempt) { firstTryCorrect++; }
        } else {
          streak = 0;
          queue.shift();
          queue.push(current); // re-queue to the end
        }

        showFeedback(ok);
      }

      function showFeedback(ok) {
        var optBtns = subContainer.querySelectorAll(".optie-btn");
        for (var i = 0; i < optBtns.length; i++) {
          optBtns[i].disabled = true;
          var oidx = parseInt(optBtns[i].getAttribute("data-oidx"), 10);
          if (oidx === currentView.correctIdx) { optBtns[i].classList.add("optie-correct"); }
          else if (oidx === selectedOption) { optBtns[i].classList.add("optie-wrong"); }
        }

        var vraag = vragen[current];
        var fb = document.getElementById("w-feedback");
        var html = '<p class="wpract-feedback-title">' +
          escapeHtml(ok ? INB.t("feedback_correct") : INB.t("feedback_wrong")) + '</p>';
        if (!ok) {
          html += '<p class="wpract-feedback-answer">' + escapeHtml(INB.t("correct_answer")) + ': <strong>' +
            escapeHtml(currentView.opties[currentView.correctIdx]) + '</strong></p>';
          html += '<p class="wpract-feedback-note">' + escapeHtml(INB.t("requeue_note")) + '</p>';
        }
        if (vraag.uitleg) {
          html += '<p class="wpract-feedback-uitleg"><em>' + escapeHtml(INB.t("explanation_label")) + ':</em> ' +
            escapeHtml(INB.tr(vraag.uitleg)) + '</p>';
        }
        fb.innerHTML = html;
        fb.className = "wpract-feedback " + (ok ? "correct" : "wrong");
        fb.style.display = "block";

        // turn the check button into a continue button
        var btn = document.getElementById("btn-w-check");
        btn.id = "btn-w-continue";
        btn.textContent = INB.t("btn_continue");
        btn.replaceWith(btn.cloneNode(true)); // drop old listeners
        var cont = document.getElementById("btn-w-continue");
        cont.addEventListener("click", next);
        cont.focus();
      }

      function finish() {
        var percent = n > 0 ? Math.round((firstTryCorrect / n) * 100) : 0;

        INB.store.saveWoordenAttempt(set.id, {
          correct: firstTryCorrect,
          total: n,
          percent: percent
        });

        var encKey = percent >= 90 ? "enc_high" : (percent >= 60 ? "enc_mid" : "enc_low");
        var html = '<div class="result-screen card wpract-done">';
        html += '<div class="wpract-done-emoji">' + (percent >= 90 ? "🎉" : (percent >= 60 ? "👍" : "💪")) + '</div>';
        html += '<h2>' + escapeHtml(INB.t("practice_done_title")) + '</h2>';
        html += '<p class="wpract-done-enc">' + escapeHtml(INB.t(encKey)) + '</p>';
        html += '<div class="result-score">' + percent + '%</div>';
        html += '<p class="result-score-label">' + escapeHtml(INB.t("result_percent_label")) + '</p>';
        html += '<p class="result-correct">' + escapeHtml(INB.t("result_correct_label")) + ': <strong>' +
          firstTryCorrect + ' / ' + n + '</strong></p>';
        html += '</div>';

        html += '<div class="exam-actions">';
        html += '<button type="button" class="btn btn-primary" id="btn-w-again">' + escapeHtml(INB.t("btn_restart")) + '</button>';
        html += '<button type="button" class="btn" id="btn-w-back">' + escapeHtml(INB.t("btn_back")) + '</button>';
        html += '</div>';

        subContainer.innerHTML = html;
        document.getElementById("btn-w-again").addEventListener("click", function () {
          renderPractice(subContainer);
        });
        document.getElementById("btn-w-back").addEventListener("click", backToHub);
      }

      next();
    }

    renderMenu();

    return {
      rerender: renderMenu
    };
  }

  INB.woorden = {
    renderWoordenSet: renderWoordenSet,
    matchesAnswer: matchesAnswer
  };
})();
