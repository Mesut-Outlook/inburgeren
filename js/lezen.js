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
      container.innerHTML = "<p>" + escapeHtml(INB.t("no_exam_found")) + "</p>";
      return;
    }

    var flat = flattenQuestions(examen);
    var answers = new Array(flat.length); // user's selected option index per question, or undefined
    var isLuisteren = examen.vak === "luisteren";
    var plays = [];        // luisteren: times each fragment has been played
    var MAX_PLAYS = 2;
    var lastResult = null; // args of the shown result screen, so a language switch keeps it
    var warnedUnanswered = false;

    function renderRunner() {
      var html = "";
      html += '<div class="exam-header">';
      html += '<h2>' + escapeHtml(INB.tr(examen.titel)) + '</h2>';
      html += '<div class="exam-meta"><span class="pill">' + escapeHtml(INB.t("label_niveau")) + ": " + escapeHtml(examen.niveau || "") + '</span>';
      html += '<span class="pill">' + flat.length + ' ' + escapeHtml(INB.t("label_vragen")) + '</span></div>';
      html += '</div>';

      // Collapsible Exam Guide Box
      if (typeof INB.renderExamGuideHtml === "function") {
        html += INB.renderExamGuideHtml(examen.vak);
      }

      var teksten = examen.teksten || [];
      var isKnm = examen.vak === "knm";
      for (var ti = 0; ti < teksten.length; ti++) {
        var tekst = teksten[ti];
        // Non-KNM (Lezen/Luisteren): two-column layout — the reading text stays
        // in a left column (.tekst-kolom) so it remains beside ALL of its
        // questions (.vragen-list, right column). KNM has no reading panel and
        // renders full-width.
        html += '<section class="tekst-block card' + (isKnm ? " knm-block" : " tekst-block--split") + '">';
        if (isLuisteren) {
          html += '<div class="tekst-kolom">';
          html += '<h3>' + escapeHtml(INB.t("fragment_label")) + ' ' + (ti + 1) + ': ' + escapeHtml(tekst.titel || "") + '</h3>';
          if (tekst.situatie) { html += '<p class="luister-situatie"><em>' + escapeHtml(tekst.situatie) + '</em></p>'; }
          html += '<div class="luister-player" data-player="' + ti + '">' + playerHtml(ti) + '</div>';
          html += '</div>';
        } else if (!isKnm) {
          html += '<div class="tekst-kolom">';
          html += '<h3>' + escapeHtml(INB.t("text_label")) + ' ' + (ti + 1) + ': ' + escapeHtml(tekst.titel || "") + '</h3>';
          html += '<div class="tekst-html scroll-panel">' + (tekst.html || "") + '</div>';
          html += '</div>'; // tekst-kolom
        } else if (tekst.titel) {
          html += '<h3>' + escapeHtml(tekst.titel) + '</h3>';
        }
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

      var playBtns = container.querySelectorAll("[data-play]");
      for (var p = 0; p < playBtns.length; p++) {
        playBtns[p].addEventListener("click", onPlayClick);
      }

      var checkBtn = document.getElementById("btn-check-exam");
      if (checkBtn) {
        checkBtn.addEventListener("click", onCheck);
      }

      if (typeof INB.wireExamGuide === "function") {
        INB.wireExamGuide(container);
      }
    }

    // ---- luisteren: fragments read aloud by the browser's Dutch voice ----

    function playerHtml(ti) {
      var used = plays[ti] || 0;
      if (used >= MAX_PLAYS) {
        return '<p class="hint-text">' + escapeHtml(INB.t("luister_no_plays")) + '</p>';
      }
      return '<button type="button" class="btn btn-primary" data-play="' + ti + '">🔊 ' + escapeHtml(INB.t("luister_play")) + '</button>' +
        ' <span class="card-meta">' + escapeHtml(INB.t("luister_plays_left").replace("{n}", MAX_PLAYS - used)) + '</span>';
    }

    function nlVoice() {
      var voices = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < voices.length; i++) {
        if (/^nl/i.test(voices[i].lang)) { return voices[i]; }
      }
      return null;
    }

    // One voice only in most browsers, so speakers differ by pitch.
    var PITCH = { v: 1.25, m: 0.75, n: 1 };

    var currentAudio = null; // the MP3 element playing now (stopped on navigation)

    // Leaving this view must silence a playing fragment.
    if (isLuisteren) {
      window.addEventListener("hashchange", function onLeave() {
        window.removeEventListener("hashchange", onLeave);
        if (currentAudio) { currentAudio.pause(); }
      });
    }

    // Natural recordings live at audio/luisteren/<id>/fNN.mp3 (tools/gen_luisteren_audio.js).
    function mp3Url(ti) {
      return "audio/luisteren/" + examen.id + "/f" + (ti < 9 ? "0" : "") + (ti + 1) + ".mp3";
    }

    function onPlayClick(ev) {
      var ti = parseInt(ev.currentTarget.getAttribute("data-play"), 10);
      var tekst = (examen.teksten || [])[ti];
      if (!tekst) { return; }
      if (currentAudio) { currentAudio.pause(); }
      if (window.speechSynthesis) { window.speechSynthesis.cancel(); }
      plays[ti] = (plays[ti] || 0) + 1;
      var slot = ev.currentTarget.parentNode;
      slot.innerHTML = '<p class="hint-text">🔊 ' + escapeHtml(INB.t("luister_playing")) + '</p>';

      function refresh(msgKey) {
        var fresh = container.querySelector('[data-player="' + ti + '"]');
        if (!fresh) { return; }
        fresh.innerHTML = msgKey ? '<p class="hint-text">' + escapeHtml(INB.t(msgKey)) + '</p>' : playerHtml(ti);
        wirePlay(fresh);
      }
      // Nothing was heard: give the play back.
      function mislukt(msgKey) { plays[ti]--; refresh(msgKey); }

      var audio = new Audio(mp3Url(ti));
      currentAudio = audio;
      var gestart = false;
      audio.onplaying = function () { gestart = true; };
      audio.onended = function () { refresh(); };
      // No MP3 for this fragment (or it fails to load): fall back to the browser voice.
      audio.onerror = function () {
        if (currentAudio !== audio) { return; }
        currentAudio = null;
        if (gestart) { refresh(); } else { speakTTS(tekst, refresh, mislukt); }
      };
      var p = audio.play();
      if (p && p.catch) {
        p.catch(function (err) {
          // NotAllowedError = autoplay blocked; load errors are handled by onerror.
          if (err && err.name === "NotAllowedError" && currentAudio === audio) { mislukt(); }
        });
      }
    }

    // Fallback: the browser's Dutch voice (robotic; speakers differ by pitch only).
    function speakTTS(tekst, klaar, mislukt) {
      var synth = window.speechSynthesis;
      if (!synth) { mislukt("luister_no_voice"); return; }
      var voice = nlVoice();
      var regels = tekst.audio || [];
      var utterances = [];
      for (var r = 0; r < regels.length; r++) {
        // Sentence-sized chunks: Chrome's online voices stop after ~15 s per utterance.
        var zinnen = String(regels[r].tekst || "").match(/[^.!?]+[.!?]*/g) || [];
        for (var z = 0; z < zinnen.length; z++) {
          var u = new SpeechSynthesisUtterance(zinnen[z].trim());
          u.lang = "nl-NL";
          if (voice) { u.voice = voice; }
          u.rate = 0.9;
          u.pitch = PITCH[regels[r].spreker] || 1;
          utterances.push(u);
        }
      }
      if (!utterances.length) { mislukt(); return; }
      var started = false;
      utterances[0].onstart = function () { started = true; };
      utterances[utterances.length - 1].onend = function () { klaar(); };
      var failed = false;
      for (var e = 0; e < utterances.length; e++) {
        utterances[e].onerror = function (err) {
          if (failed || err.error === "interrupted" || err.error === "canceled") { return; }
          failed = true;
          synth.cancel();
          if (started) { klaar(); } else { mislukt(); }
        };
      }
      for (var k = 0; k < utterances.length; k++) { synth.speak(utterances[k]); }
    }

    function wirePlay(scope) {
      var b = scope.querySelector("[data-play]");
      if (b) { b.addEventListener("click", onPlayClick); }
    }

    function transcriptHtml(tekst) {
      var WIE = { v: "👩", m: "👨", n: "📢" };
      var html = '<details class="luister-transcript"><summary>' + escapeHtml(INB.t("luister_transcript")) + ': ' +
        escapeHtml(tekst.titel || "") + '</summary>';
      var regels = tekst.audio || [];
      for (var r = 0; r < regels.length; r++) {
        html += '<p>' + (WIE[regels[r].spreker] || "") + ' ' + escapeHtml(regels[r].tekst) + '</p>';
      }
      return html + '</details>';
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
      var warn = document.getElementById("exam-warning");
      if (unanswered === flat.length) {
        if (warn) { warn.style.display = "block"; }
        return;
      }
      // Some left open: warn once, a second click checks anyway.
      if (unanswered > 0 && !warnedUnanswered) {
        warnedUnanswered = true;
        if (warn) {
          warn.textContent = INB.t("unanswered_warning").replace("{n}", unanswered);
          warn.style.display = "block";
        }
        return;
      }
      scoreAndRender();
    }

    function scoreAndRender() {
      if (currentAudio) { currentAudio.pause(); }
      if (isLuisteren && window.speechSynthesis) { window.speechSynthesis.cancel(); }
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
      lastResult = [correct, total, score, passed];
      var hasScoretabel = (examen.scoretabel || []).length > 0;
      var html = '<div class="result-screen card">';
      html += '<h2>' + escapeHtml(INB.t("result_title")) + '</h2>';
      if (hasScoretabel) {
        // Only exams with an official score conversion table show the NT2 score.
        html += '<div class="result-score">' + score + '</div>';
        html += '<p class="result-score-label">' + escapeHtml(INB.t("result_score_label")) + '</p>';
      }
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

        if (isLuisteren && (i === 0 || flat[i - 1].textIndex !== item.textIndex)) {
          html += transcriptHtml(item.tekst);
        }
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
      window.scrollTo(0, 0);

      document.getElementById("btn-restart-exam").addEventListener("click", function () {
        answers = new Array(flat.length);
        plays = [];
        if (currentAudio) { currentAudio.pause(); }
        lastResult = null;
        warnedUnanswered = false;
        renderRunner();
        window.scrollTo(0, 0);
      });
      document.getElementById("btn-back-exam").addEventListener("click", function () {
        window.location.hash = "#/";
      });
    }

    renderRunner();

    // Allow the app shell to re-render text when the language changes,
    // by re-invoking this same render function (registered via app.js routing).
    return {
      rerender: function () {
        if (lastResult) { renderResult.apply(null, lastResult); } else { renderRunner(); }
      }
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
