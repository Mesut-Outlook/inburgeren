/* woorden.js
 * Vocabulary & sentence-structure practice runner.
 * Two views per set:
 *  - "teach" (flashcard list): shows every item with NL word + NL/EN/TR gloss + example.
 *  - "practice": runs through `vragen` of type mc / invoer / gat, scores, and saves via store.
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

  /**
   * Normalize a user-typed answer for comparison: trim, lowercase, collapse spaces.
   */
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

  /**
   * Render the main entry view for a woorden set: choice between "teach" and "practice".
   */
  function renderWoordenSet(setId, container) {
    var set = INB.getWoordenSet(setId);
    if (!set) {
      container.innerHTML = "<p>Set niet gevonden.</p>";
      return;
    }

    function renderMenu() {
      var html = "";
      html += '<div class="woorden-header card">';
      html += '<h2>' + (set.icoon ? set.icoon + " " : "") + escapeHtml(set.titel) + '</h2>';
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

    function renderPractice(subContainer) {
      var vragen = set.vragen || [];
      var answers = new Array(vragen.length);

      function renderRunner() {
        var html = '<div class="practice-list">';
        for (var i = 0; i < vragen.length; i++) {
          html += renderQuestion(vragen[i], i);
        }
        html += '</div>';
        html += '<div class="exam-actions">';
        html += '<button type="button" class="btn btn-primary" id="btn-check-practice">' + escapeHtml(INB.t("btn_check")) + '</button>';
        html += '</div>';
        subContainer.innerHTML = html;

        // wire mc option buttons
        var optionButtons = subContainer.querySelectorAll("[data-qidx]");
        for (var oi = 0; oi < optionButtons.length; oi++) {
          optionButtons[oi].addEventListener("click", function (ev) {
            var btn = ev.currentTarget;
            var qidx = parseInt(btn.getAttribute("data-qidx"), 10);
            var oidx = parseInt(btn.getAttribute("data-oidx"), 10);
            answers[qidx] = oidx;
            var block = subContainer.querySelector('.practice-q[data-question="' + qidx + '"]');
            var btns = block.querySelectorAll(".optie-btn");
            for (var bi = 0; bi < btns.length; bi++) { btns[bi].classList.remove("selected"); }
            btn.classList.add("selected");
          });
        }

        // wire text inputs (invoer + gat)
        var textInputs = subContainer.querySelectorAll("[data-text-qidx]");
        for (var ti = 0; ti < textInputs.length; ti++) {
          textInputs[ti].addEventListener("input", function (ev) {
            var input = ev.currentTarget;
            var qidx = parseInt(input.getAttribute("data-text-qidx"), 10);
            answers[qidx] = input.value;
          });
        }

        document.getElementById("btn-check-practice").addEventListener("click", function () {
          scoreAndRender();
        });
      }

      function renderQuestion(vraag, idx) {
        var html = '<div class="practice-q card" data-question="' + idx + '">';
        html += '<p class="vraag-nummer">' + escapeHtml(INB.t("question_label")) + ' ' + (idx + 1) + ' ' + escapeHtml(INB.t("of_label")) + ' ' + vragen.length + '</p>';

        if (vraag.type === "mc") {
          html += '<p class="vraag-tekst">' + escapeHtml(vraag.vraag) + '</p>';
          html += '<div class="opties">';
          var opties = vraag.opties || [];
          for (var oi = 0; oi < opties.length; oi++) {
            html += '<button type="button" class="optie-btn" data-qidx="' + idx + '" data-oidx="' + oi + '">';
            html += '<span class="optie-letter">' + String.fromCharCode(65 + oi) + '</span>';
            html += '<span class="optie-tekst">' + escapeHtml(opties[oi]) + '</span>';
            html += '</button>';
          }
          html += '</div>';
        } else if (vraag.type === "invoer") {
          html += '<p class="vraag-tekst">' + escapeHtml(vraag.vraag) + '</p>';
          html += '<input type="text" class="text-input" data-text-qidx="' + idx + '" placeholder="' + escapeHtml(INB.t("type_answer_placeholder")) + '">';
        } else if (vraag.type === "gat") {
          var zinHtml = escapeHtml(vraag.zin || "").replace("___", '<span class="gap-marker">___</span>');
          html += '<p class="vraag-tekst">' + zinHtml + '</p>';
          html += '<input type="text" class="text-input" data-text-qidx="' + idx + '" placeholder="' + escapeHtml(INB.t("fill_gap_placeholder")) + '">';
        }

        html += '</div>';
        return html;
      }

      function isCorrectAnswer(vraag, userAnswer) {
        if (vraag.type === "mc") {
          return userAnswer === vraag.antwoord;
        }
        // invoer + gat: string match with alternatives
        return typeof userAnswer !== "undefined" && matchesAnswer(userAnswer, vraag.antwoord);
      }

      function expectedDisplay(vraag) {
        if (vraag.type === "mc") {
          var opties = vraag.opties || [];
          return opties[vraag.antwoord];
        }
        // show first alternative only
        return String(vraag.antwoord || "").split("|")[0];
      }

      function userDisplay(vraag, userAnswer) {
        if (vraag.type === "mc") {
          var opties = vraag.opties || [];
          return (typeof userAnswer === "number" && opties[userAnswer]) ? opties[userAnswer] : INB.t("no_answer");
        }
        return (userAnswer && String(userAnswer).length) ? userAnswer : INB.t("no_answer");
      }

      function scoreAndRender() {
        var correct = 0;
        for (var i = 0; i < vragen.length; i++) {
          if (isCorrectAnswer(vragen[i], answers[i])) { correct++; }
        }
        var total = vragen.length;
        var percent = total > 0 ? Math.round((correct / total) * 100) : 0;

        INB.store.saveWoordenAttempt(set.id, {
          correct: correct,
          total: total,
          percent: percent
        });

        renderResult(correct, total, percent);
      }

      function renderResult(correct, total, percent) {
        var html = '<div class="result-screen card">';
        html += '<h2>' + escapeHtml(INB.t("result_title")) + '</h2>';
        html += '<div class="result-score">' + percent + '%</div>';
        html += '<p class="result-score-label">' + escapeHtml(INB.t("result_percent_label")) + '</p>';
        html += '<p class="result-correct">' + escapeHtml(INB.t("result_correct_label")) + ': <strong>' + correct + ' / ' + total + '</strong></p>';
        html += '</div>';

        html += '<div class="review card">';
        html += '<h3>' + escapeHtml(INB.t("result_review_title")) + '</h3>';
        for (var i = 0; i < vragen.length; i++) {
          var vraag = vragen[i];
          var userAnswer = answers[i];
          var ok = isCorrectAnswer(vraag, userAnswer);
          html += '<div class="review-item ' + (ok ? "review-correct" : "review-wrong") + '">';
          html += '<p class="review-q">' + (i + 1) + '. ' + escapeHtml(vraag.vraag || vraag.zin) + '</p>';
          html += '<p class="review-your">' + escapeHtml(INB.t("your_answer")) + ': ' + escapeHtml(userDisplay(vraag, userAnswer)) + '</p>';
          if (!ok) {
            html += '<p class="review-correct-answer">' + escapeHtml(INB.t("correct_answer")) + ': ' + escapeHtml(expectedDisplay(vraag)) + '</p>';
          }
          if (vraag.uitleg) {
            html += '<p class="review-explanation"><em>' + escapeHtml(INB.t("explanation_label")) + ':</em> ' + escapeHtml(INB.tr(vraag.uitleg)) + '</p>';
          }
          html += '</div>';
        }
        html += '</div>';

        html += '<div class="exam-actions">';
        html += '<button type="button" class="btn btn-secondary" id="btn-restart-practice">' + escapeHtml(INB.t("btn_restart")) + '</button>';
        html += '<button type="button" class="btn" id="btn-back-practice">' + escapeHtml(INB.t("btn_back")) + '</button>';
        html += '</div>';

        subContainer.innerHTML = html;

        document.getElementById("btn-restart-practice").addEventListener("click", function () {
          answers = new Array(vragen.length);
          renderRunner();
        });
        document.getElementById("btn-back-practice").addEventListener("click", function () {
          window.location.hash = "#/";
        });
      }

      renderRunner();
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
