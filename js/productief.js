/* productief.js
 * Renders and scores a Schrijven (writing) or Spreken (speaking) exam.
 * Allows typing text responses or recording audio answers, reveals model answers,
 * and uses self-evaluation to score the progress. Saves to localStorage via INB.store.
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
   * Render the productive exam runner into `container`.
   * @param {string} examenId
   * @param {HTMLElement} container
   */
  function renderExamen(examenId, container) {
    var examen = INB.getExamen(examenId);
    if (!examen) {
      container.innerHTML = "<p>Examen niet gevonden.</p>";
      return;
    }

    var taken = examen.taken || [];
    var currentIndex = 0;

    // State per task
    var userAnswers = new Array(taken.length);      // text response or audio blob URL
    var selfEvaluations = new Array(taken.length);  // true = pass, false = fail, undefined = not evaluated
    var showModel = new Array(taken.length);        // true = showing model, false = hidden

    // Audio recorder state
    var mediaRecorder = null;
    var audioChunks = [];
    var isRecording = false;

    function renderRunner() {
      if (taken.length === 0) {
        container.innerHTML = "<p>Geen opdrachten gevonden.</p>";
        return;
      }

      var task = taken[currentIndex];
      var isSpreken = examen.vak === "spreken";
      var currentAnswer = userAnswers[currentIndex] || "";
      var evaluated = selfEvaluations[currentIndex];
      var showingModel = !!showModel[currentIndex];

      var html = "";
      html += '<div class="exam-header">';
      html += '<h2>' + escapeHtml(INB.tr(examen.titel)) + '</h2>';
      html += '<div class="exam-meta">';
      html += '<span class="pill">' + escapeHtml(INB.t("label_niveau")) + ": " + escapeHtml(examen.niveau || "") + '</span>';
      html += '<span class="pill">' + (currentIndex + 1) + ' / ' + taken.length + ' ' + escapeHtml(INB.t("label_taken")) + '</span>';
      html += '</div>';
      html += '</div>';

      // Intro warning/instruction banner
      html += '<div class="card info-card prod-intro-banner">';
      html += '<p>💡 ' + escapeHtml(isSpreken ? INB.t("prod_intro_spreken") : INB.t("prod_intro_schrijven")) + '</p>';
      html += '</div>';

      // Split layout container if showing model answer
      html += '<div class="productive-layout' + (showingModel ? ' show-model-split' : '') + '">';

      // --- LEFT PANEL (Question + Input + Self-evaluation) ---
      html += '<div class="productive-panel left-panel card">';
      html += '<h3>' + escapeHtml(INB.t("opdracht_label")) + ' ' + (currentIndex + 1) + '</h3>';

      if (isSpreken) {
        html += '<p class="vraag-tekst text-highlight">' + escapeHtml(task.vraag || "") + '</p>';
      } else {
        html += '<p class="vraag-tekst"><strong>' + escapeHtml(INB.t("situatie_label")) + ':</strong></p>';
        html += '<p class="situatie-text">' + escapeHtml(task.situatie || "") + '</p>';

        if (task.eisen && task.eisen.length > 0) {
          html += '<p class="vraag-tekst"><strong>' + escapeHtml(INB.t("eisen_label")) + ':</strong></p>';
          html += '<ul class="eisen-list">';
          for (var i = 0; i < task.eisen.length; i++) {
            html += '<li>' + escapeHtml(task.eisen[i]) + '</li>';
          }
          html += '</ul>';
        }
      }

      // Input Section
      html += '<div class="productive-input-section">';
      html += '<p class="section-label"><strong>' + escapeHtml(INB.t("jouw_antwoord_label")) + ':</strong></p>';

      if (isSpreken) {
        html += '<div class="voice-recorder-widget">';
        if (isRecording) {
          html += '<button type="button" class="btn btn-danger recording-pulse" id="btn-record-toggle">';
          html += '🛑 ' + escapeHtml(INB.t("btn_record_stop")) + ' <span class="record-timer">00:00</span>';
          html += '</button>';
        } else {
          html += '<button type="button" class="btn btn-primary" id="btn-record-toggle">';
          html += '🎙️ ' + escapeHtml(INB.t("btn_record_start")) + '';
          html += '</button>';
        }

        if (currentAnswer) {
          html += '<div class="audio-playback-container">';
          html += '<p class="playback-label">' + escapeHtml(INB.t("recording_label")) + ':</p>';
          html += '<audio class="audio-player" controls src="' + currentAnswer + '"></audio>';
          html += '</div>';
        }
        html += '</div>';
      } else {
        html += '<textarea class="text-input productive-textarea" id="writing-input" placeholder="' + escapeHtml(INB.t("jouw_antwoord_ph")) + '">' + escapeHtml(currentAnswer) + '</textarea>';
      }
      html += '</div>'; // productive-input-section

      // Toggle model answer button
      html += '<div class="model-toggle-section">';
      html += '<button type="button" class="btn btn-secondary" id="btn-toggle-model">';
      html += (showingModel ? '👁 ' + escapeHtml(INB.t("verberg_model")) : '👁 ' + escapeHtml(INB.t("toon_model")));
      html += '</button>';
      html += '</div>';

      // Self-evaluation inside the left panel if model is shown
      if (showingModel) {
        html += '<div class="self-eval-box card">';
        html += '<h4>' + escapeHtml(INB.t("self_eval_title")) + '</h4>';
        html += '<p>' + escapeHtml(INB.t("self_eval_label")) + '</p>';
        html += '<div class="eval-buttons">';
        html += '<button type="button" class="btn btn-success' + (evaluated === true ? ' active' : '') + '" id="btn-eval-yes">' + escapeHtml(INB.t("btn_eval_yes")) + '</button>';
        html += '<button type="button" class="btn btn-danger' + (evaluated === false ? ' active' : '') + '" id="btn-eval-no">' + escapeHtml(INB.t("btn_eval_no")) + '</button>';
        html += '</div>';
        html += '</div>';
      }

      html += '</div>'; // left-panel

      // --- RIGHT PANEL (Model Answer + Tips) ---
      if (showingModel) {
        html += '<div class="productive-panel right-panel card animate-slide-in">';
        html += '<h3>' + escapeHtml(INB.t("model_label")) + '</h3>';

        if (isSpreken) {
          var answers = task.modelAntwoorden || [];
          html += '<p class="sub-label"><strong>' + escapeHtml(INB.t("model_antwoorden_label")) + ':</strong></p>';
          html += '<ol class="model-answers-list">';
          for (var j = 0; j < answers.length; j++) {
            html += '<li>💡 <em>"' + escapeHtml(answers[j]) + '"</em></li>';
          }
          html += '</ol>';

          if (task.tips) {
            html += '<div class="tips-box">';
            html += '<p class="tips-header"><strong>' + escapeHtml(INB.t("tips_label")) + ':</strong></p>';
            html += '<p class="tips-body">' + escapeHtml(INB.tr(task.tips)) + '</p>';
            html += '</div>';
          }
        } else {
          html += '<div class="model-answer-box scroll-panel">';
          html += '<pre class="model-answer-text">' + escapeHtml(task.modelAntwoord || "") + '</pre>';
          html += '</div>';
        }
        html += '</div>'; // right-panel
      }

      html += '</div>'; // productive-layout

      // --- NAVIGATION ACTIONS ---
      html += '<div class="exam-actions nav-actions">';
      html += '<button type="button" class="btn btn-secondary" id="btn-prev-task" ' + (currentIndex === 0 ? 'disabled' : '') + '>' + escapeHtml(INB.t("btn_prev")) + '</button>';
      
      if (currentIndex < taken.length - 1) {
        html += '<button type="button" class="btn btn-primary" id="btn-next-task">' + escapeHtml(INB.t("btn_next")) + '</button>';
      } else {
        html += '<button type="button" class="btn btn-primary" id="btn-finish-task">' + escapeHtml(INB.t("btn_finish")) + '</button>';
      }
      html += '<button type="button" class="btn" id="btn-abort-task">' + escapeHtml(INB.t("btn_back")) + '</button>';
      html += '</div>';

      container.innerHTML = html;

      // --- EVENTS WIRE UP ---
      if (!isSpreken) {
        var textarea = document.getElementById("writing-input");
        textarea.addEventListener("input", function () {
          userAnswers[currentIndex] = textarea.value;
        });
      } else {
        var recordBtn = document.getElementById("btn-record-toggle");
        recordBtn.addEventListener("click", toggleRecording);
      }

      document.getElementById("btn-toggle-model").addEventListener("click", function () {
        showModel[currentIndex] = !showModel[currentIndex];
        renderRunner();
      });

      if (showingModel) {
        document.getElementById("btn-eval-yes").addEventListener("click", function () {
          selfEvaluations[currentIndex] = true;
          renderRunner();
        });
        document.getElementById("btn-eval-no").addEventListener("click", function () {
          selfEvaluations[currentIndex] = false;
          renderRunner();
        });
      }

      document.getElementById("btn-prev-task").addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          renderRunner();
        }
      });

      if (currentIndex < taken.length - 1) {
        document.getElementById("btn-next-task").addEventListener("click", function () {
          currentIndex++;
          renderRunner();
        });
      } else {
        document.getElementById("btn-finish-task").addEventListener("click", finishExam);
      }

      document.getElementById("btn-abort-task").addEventListener("click", function () {
        window.location.hash = "#/";
      });
    }

    // --- Media Recording Logic ---
    var recordingStartTime = 0;
    var timerInterval = null;

    function toggleRecording() {
      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    }

    function startRecording() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Microfoontoegang wordt niet ondersteund door deze browser.");
        return;
      }

      audioChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = function (e) {
            audioChunks.push(e.data);
          };
          mediaRecorder.onstop = function () {
            var audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            userAnswers[currentIndex] = URL.createObjectURL(audioBlob);
            renderRunner();
          };
          mediaRecorder.start();
          isRecording = true;
          recordingStartTime = Date.now();
          renderRunner();
          startTimer();
        })
        .catch(function (err) {
          console.error("Microfoonfout:", err);
          alert("Kan microfoon niet openen. Zorg ervoor dat u toestemming geeft.");
        });
    }

    function stopRecording() {
      if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        // Stop all tracks on the stream to release the mic
        if (mediaRecorder.stream) {
          mediaRecorder.stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }
        isRecording = false;
        clearInterval(timerInterval);
      }
    }

    function startTimer() {
      var timerEl = container.querySelector(".record-timer");
      clearInterval(timerInterval);
      timerInterval = setInterval(function () {
        if (!timerEl) return;
        var elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
        var min = String(Math.floor(elapsed / 60)).padStart(2, "0");
        var sec = String(elapsed % 60).padStart(2, "0");
        timerEl.textContent = min + ":" + sec;
      }, 1000);
    }

    function finishExam() {
      // Score calculation
      var passedCount = 0;
      var total = taken.length;
      for (var i = 0; i < total; i++) {
        if (selfEvaluations[i] === true) {
          passedCount++;
        }
      }

      var passed = passedCount >= (examen.geslaagdVanaf || 1);

      // Save to store
      INB.store.saveExamAttempt(examen.id, {
        correct: passedCount,
        total: total,
        score: Math.round((passedCount / total) * 10), // standard 1-10 grade
        passed: passed
      });

      renderResult(passedCount, total, passed);
    }

    function renderResult(passedCount, total, passed) {
      var html = "";
      html += '<div class="result-screen card">';
      html += '<h2>' + escapeHtml(INB.t("result_title")) + '</h2>';
      html += '<div class="result-score">' + passedCount + ' / ' + total + '</div>';
      html += '<p class="result-score-label">' + escapeHtml(INB.t("result_correct_label")) + '</p>';
      html += '<div class="badge ' + (passed ? "badge-pass" : "badge-fail") + '">' + escapeHtml(passed ? INB.t("result_pass") : INB.t("result_fail")) + '</div>';
      html += '</div>';

      // Detailed Review Screen
      html += '<div class="review card">';
      html += '<h3>' + escapeHtml(INB.t("result_review_title")) + '</h3>';

      var isSpreken = examen.vak === "spreken";

      for (var i = 0; i < total; i++) {
        var task = taken[i];
        var answer = userAnswers[i];
        var evalPassed = selfEvaluations[i];

        html += '<div class="review-item ' + (evalPassed === true ? 'review-correct' : 'review-wrong') + '">';
        html += '<p class="review-q"><strong>Opdracht ' + (i + 1) + ':</strong> ' + escapeHtml(isSpreken ? task.vraag : task.titel) + '</p>';
        
        if (isSpreken) {
          if (answer) {
            html += '<p class="review-your">🔊 <audio controls src="' + answer + '"></audio></p>';
          } else {
            html += '<p class="review-your"><em>' + escapeHtml(INB.t("no_answer")) + '</em></p>';
          }
          
          html += '<div class="model-review-block">';
          html += '<p class="playback-label"><strong>Modelantwoorden:</strong></p>';
          html += '<ul class="model-answers-review">';
          var mAnswers = task.modelAntwoorden || [];
          for (var m = 0; m < mAnswers.length; m++) {
            html += '<li>💡 <em>"' + escapeHtml(mAnswers[m]) + '"</em></li>';
          }
          html += '</ul>';
          html += '</div>';
        } else {
          html += '<p class="review-your"><strong>' + escapeHtml(INB.t("your_answer")) + ':</strong></p>';
          html += '<div class="user-text-review scroll-panel"><pre>' + escapeHtml(answer || INB.t("no_answer")) + '</pre></div>';
          
          html += '<p class="review-correct-answer"><strong>' + escapeHtml(INB.t("model_label")) + ':</strong></p>';
          html += '<div class="model-text-review scroll-panel"><pre>' + escapeHtml(task.modelAntwoord || "") + '</pre></div>';
        }

        html += '<p class="self-eval-badge-line">Resultaat: <span class="badge ' + (evalPassed === true ? 'badge-pass' : 'badge-fail') + '">' + 
          (evalPassed === true ? 'Voldoet' : 'Onvoldoende') + '</span></p>';
        html += '</div>';
      }

      html += '</div>'; // review card

      html += '<div class="exam-actions">';
      html += '<button type="button" class="btn btn-secondary" id="btn-restart-exam">' + escapeHtml(INB.t("btn_restart")) + '</button>';
      html += '<button type="button" class="btn" id="btn-back-exam">' + escapeHtml(INB.t("btn_back")) + '</button>';
      html += '</div>';

      container.innerHTML = html;

      document.getElementById("btn-restart-exam").addEventListener("click", function () {
        currentIndex = 0;
        userAnswers = new Array(total);
        selfEvaluations = new Array(total);
        showModel = new Array(total);
        renderRunner();
      });

      document.getElementById("btn-back-exam").addEventListener("click", function () {
        window.location.hash = "#/";
      });
    }

    renderRunner();

    return {
      rerender: renderRunner
    };
  }

  INB.productief = {
    renderExamen: renderExamen
  };
})();
