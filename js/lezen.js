/* lezen.js
 * Renders and scores a Lezen (reading) exam: all texts + their multiple-choice
 * questions, numbered globally across the whole exam. Saves the result via
 * INB.store and shows a review screen with explanations in the active language.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  /**
   * Build a flat list of questions across all texts, each annotated with
   * the index of its source text and a global question number.
   */
  function flattenQuestions(examen) {
    var flat = [];
    var teksten = examen.teksten || [];
    for (var ti = 0; ti < teksten.length; ti++) {
      var tekst = teksten[ti];
      var vragen = tekst.vragen || [];
      for (var qi = 0; qi < vragen.length; qi++) {
        flat.push({
          textIndex: ti,
          tekst: tekst,
          vraag: vragen[qi],
          globalIndex: flat.length // 0-based; +1 for display
        });
      }
    }
    return flat;
  }

  /**
   * Render the exam runner into `container` (a DOM element).
   * @param {string} examenId
   * @param {HTMLElement} container
   */
  function renderExamen(examenId, container) {
    var examen = INB.getExamen(examenId);
    if (!examen) {
      container.innerHTML = "<p>Examen niet gevonden.</p>";
      return;
    }

    var flat = flattenQuestions(examen);
    var answers = new Array(flat.length); // user's selected option index per question, or undefined

    function renderRunner() {
      var html = "";
      html += '<div class="exam-header">';
      html += '<h2>' + escapeHtml(examen.titel) + '</h2>';
      html += '<div class="exam-meta"><span class="pill">' + escapeHtml(INB.t("label_niveau")) + ": " + escapeHtml(examen.niveau || "") + '</span>';
      html += '<span class="pill">' + flat.length + ' ' + escapeHtml(INB.t("label_vragen")) + '</span></div>';
      html += '</div>';

      var teksten = examen.teksten || [];
      for (var ti = 0; ti < teksten.length; ti++) {
        var tekst = teksten[ti];
        html += '<section class="tekst-block card">';
        html += '<h3>' + escapeHtml(INB.t("text_label")) + ' ' + (ti + 1) + ': ' + escapeHtml(tekst.titel || "") + '</h3>';
        html += '<div class="tekst-html scroll-panel">' + (tekst.html || "") + '</div>';
        html += '<div class="vragen-list">';

        var vragen = tekst.vragen || [];
        for (var qi = 0; qi < vragen.length; qi++) {
          var globalIdx = findGlobalIndex(flat, ti, qi);
          var vraag = vragen[qi];
          html += renderQuestionBlock(vraag, globalIdx, answers[globalIdx]);
        }
        html += '</div>'; // vragen-list
        html += '</section>';
      }

      html += '<div class="exam-actions">';
      html += '<button type="button" class="btn btn-primary" id="btn-check-exam">' + escapeHtml(INB.t("btn_check")) + '</button>';
      html += '</div>';
      html += '<p class="hint-text" id="exam-warning" style="display:none;">' + escapeHtml(INB.t("answer_all_warning")) + '</p>';

      container.innerHTML = html;

      // wire up option clicks
      var optionButtons = container.querySelectorAll("[data-qidx]");
      for (var i = 0; i < optionButtons.length; i++) {
        optionButtons[i].addEventListener("click", onOptionClick);
      }

      var checkBtn = document.getElementById("btn-check-exam");
      checkBtn.addEventListener("click", onCheck);
    }

    function findGlobalIndex(flat, textIndex, qIndexWithinText) {
      var count = 0;
      for (var i = 0; i < flat.length; i++) {
        if (flat[i].textIndex === textIndex) {
          if (count === qIndexWithinText) { return i; }
          count++;
        }
      }
      return -1;
    }

    function renderQuestionBlock(vraag, globalIdx, selected) {
      var html = '<div class="vraag-block" data-question="' + globalIdx + '">';
      html += '<p class="vraag-nummer">' + escapeHtml(INB.t("question_label")) + ' ' + (globalIdx + 1) + ' ' + escapeHtml(INB.t("of_label")) + ' ' + flat.length + '</p>';
      html += '<p class="vraag-tekst">' + escapeHtml(vraag.vraag) + '</p>';
      html += '<div class="opties">';
      var opties = vraag.opties || [];
      for (var oi = 0; oi < opties.length; oi++) {
        var isSelected = selected === oi;
        html += '<button type="button" class="optie-btn' + (isSelected ? " selected" : "") + '" data-qidx="' + globalIdx + '" data-oidx="' + oi + '">';
        html += '<span class="optie-letter">' + String.fromCharCode(65 + oi) + '</span>';
        html += '<span class="optie-tekst">' + escapeHtml(opties[oi]) + '</span>';
        html += '</button>';
      }
      html += '</div></div>';
      return html;
    }

    function onOptionClick(ev) {
      var btn = ev.currentTarget;
      var qidx = parseInt(btn.getAttribute("data-qidx"), 10);
      var oidx = parseInt(btn.getAttribute("data-oidx"), 10);
      answers[qidx] = oidx;

      // update visual state for this question's options only
      var block = container.querySelector('.vraag-block[data-question="' + qidx + '"]');
      var btns = block.querySelectorAll(".optie-btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("selected");
      }
      btn.classList.add("selected");
    }

    function onCheck() {
      // Allow checking even if not all answered; unanswered count as wrong.
      var unanswered = 0;
      for (var i = 0; i < flat.length; i++) {
        if (typeof answers[i] === "undefined") { unanswered++; }
      }
      if (unanswered === flat.length) {
        var warn = document.getElementById("exam-warning");
        if (warn) { warn.style.display = "block"; }
        return;
      }
      scoreAndRender();
    }

    function scoreAndRender() {
      var correct = 0;
      for (var i = 0; i < flat.length; i++) {
        if (answers[i] === flat[i].vraag.antwoord) { correct++; }
      }
      var total = flat.length;
      var scoretabel = examen.scoretabel || [];
      var clampedIndex = Math.max(0, Math.min(correct, scoretabel.length - 1));
      var score = scoretabel.length ? scoretabel[clampedIndex] : 0;
      var passed = correct >= (examen.geslaagdVanaf || 0);

      INB.store.saveExamAttempt(examen.id, {
        correct: correct,
        total: total,
        score: score,
        passed: passed
      });

      renderResult(correct, total, score, passed);
    }

    function renderResult(correct, total, score, passed) {
      var html = '<div class="result-screen card">';
      html += '<h2>' + escapeHtml(INB.t("result_title")) + '</h2>';
      html += '<div class="result-score">' + score + '</div>';
      html += '<p class="result-score-label">' + escapeHtml(INB.t("result_score_label")) + '</p>';
      html += '<p class="result-correct">' + escapeHtml(INB.t("result_correct_label")) + ': <strong>' + correct + ' / ' + total + '</strong></p>';
      html += '<div class="badge ' + (passed ? "badge-pass" : "badge-fail") + '">' + escapeHtml(passed ? INB.t("result_pass") : INB.t("result_fail")) + '</div>';
      html += '</div>';

      html += '<div class="review card">';
      html += '<h3>' + escapeHtml(INB.t("result_review_title")) + '</h3>';
      for (var i = 0; i < flat.length; i++) {
        var item = flat[i];
        var vraag = item.vraag;
        var userIdx = answers[i];
        var isCorrect = userIdx === vraag.antwoord;
        var opties = vraag.opties || [];
        var userText = (typeof userIdx === "number" && opties[userIdx]) ? opties[userIdx] : INB.t("no_answer");
        var correctText = opties[vraag.antwoord];

        html += '<div class="review-item ' + (isCorrect ? "review-correct" : "review-wrong") + '">';
        html += '<p class="review-q">' + (i + 1) + '. ' + escapeHtml(vraag.vraag) + '</p>';
        html += '<p class="review-your">' + escapeHtml(INB.t("your_answer")) + ': ' + escapeHtml(userText) + '</p>';
        if (!isCorrect) {
          html += '<p class="review-correct-answer">' + escapeHtml(INB.t("correct_answer")) + ': ' + escapeHtml(correctText) + '</p>';
        }
        if (vraag.uitleg) {
          html += '<p class="review-explanation"><em>' + escapeHtml(INB.t("explanation_label")) + ':</em> ' + escapeHtml(INB.tr(vraag.uitleg)) + '</p>';
        }
        html += '</div>';
      }
      html += '</div>';

      html += '<div class="exam-actions">';
      html += '<button type="button" class="btn btn-secondary" id="btn-restart-exam">' + escapeHtml(INB.t("btn_restart")) + '</button>';
      html += '<button type="button" class="btn" id="btn-back-exam">' + escapeHtml(INB.t("btn_back")) + '</button>';
      html += '</div>';

      container.innerHTML = html;

      document.getElementById("btn-restart-exam").addEventListener("click", function () {
        answers = new Array(flat.length);
        renderRunner();
      });
      document.getElementById("btn-back-exam").addEventListener("click", function () {
        window.location.hash = "#/";
      });
    }

    renderRunner();

    // Allow the app shell to re-render text when the language changes,
    // by re-invoking this same render function (registered via app.js routing).
    return {
      rerender: renderRunner
    };
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

  INB.lezen = {
    renderExamen: renderExamen
  };
})();
