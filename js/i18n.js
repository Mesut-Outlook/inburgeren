/* i18n.js
 * Tiny translation table + helpers for the UI chrome.
 * Exposes INB.t(key) for UI strings and INB.tr(obj) for {nl,en,tr} content objects.
 * Active language persists in localStorage['inb_lang'] (default 'nl').
 * No build step, no modules — everything hangs off window.INB.
 */
(function () {
  "use strict";

  var STRINGS = {
    // ---- nav / header ----
    app_title:        { nl: "Inburgeren NT2 — Lezen", en: "Inburgeren NT2 — Reading", tr: "Inburgeren NT2 — Okuma" },
    nav_examens:       { nl: "Examens", en: "Exams", tr: "Sınavlar" },
    nav_voortgang:     { nl: "Mijn voortgang", en: "My progress", tr: "İlerlemem" },
    lang_nl:           { nl: "Nederlands", en: "Dutch", tr: "Hollandaca" },
    lang_en:           { nl: "Engels", en: "English", tr: "İngilizce" },
    lang_tr:           { nl: "Turks", en: "Turkish", tr: "Türkçe" },

    // ---- hub ----
    hub_examens_title:    { nl: "Leesexamens", en: "Reading exams", tr: "Okuma sınavları" },
    hub_examens_sub:      { nl: "Kies een examen om te oefenen.", en: "Pick an exam to practice.", tr: "Pratik yapmak için bir sınav seçin." },
    hub_woorden_title:    { nl: "Woordenschat & zinsbouw", en: "Vocabulary & sentence structure", tr: "Kelime bilgisi ve cümle yapısı" },
    hub_woorden_sub:      { nl: "Oefen de woorden uit de examens.", en: "Practice the words from the exams.", tr: "Sınavlardaki kelimeleri çalışın." },
    badge_echt:           { nl: "Echt examen", en: "Real exam", tr: "Gerçek sınav" },
    badge_oefen:          { nl: "Oefenexamen", en: "Practice exam", tr: "Alıştırma sınavı" },
    label_niveau:         { nl: "Niveau", en: "Level", tr: "Seviye" },
    label_teksten:        { nl: "teksten", en: "texts", tr: "metin" },
    label_vragen:         { nl: "vragen", en: "questions", tr: "soru" },
    label_items:          { nl: "woorden", en: "words", tr: "kelime" },
    btn_start:            { nl: "Start", en: "Start", tr: "Başla" },
    btn_bekijk:           { nl: "Bekijk", en: "View", tr: "Görüntüle" },

    // ---- exam runner ----
    btn_check:            { nl: "Nakijken", en: "Check", tr: "Kontrol et" },
    btn_next:             { nl: "Volgende", en: "Next", tr: "Sonraki" },
    btn_prev:             { nl: "Vorige", en: "Previous", tr: "Önceki" },
    btn_finish:           { nl: "Afronden", en: "Finish", tr: "Tamamla" },
    btn_restart:          { nl: "Opnieuw", en: "Restart", tr: "Tekrar başla" },
    btn_back:             { nl: "Terug", en: "Back", tr: "Geri" },
    text_label:           { nl: "Tekst", en: "Text", tr: "Metin" },
    question_label:       { nl: "Vraag", en: "Question", tr: "Soru" },
    of_label:             { nl: "van", en: "of", tr: "/" },
    answer_all_warning:   { nl: "Beantwoord alle vragen voordat je nakijkt.", en: "Answer all questions before checking.", tr: "Kontrol etmeden önce tüm soruları cevaplayın." },

    // ---- results ----
    result_title:         { nl: "Resultaat", en: "Result", tr: "Sonuç" },
    result_score_label:   { nl: "NT2-score", en: "NT2 score", tr: "NT2 puanı" },
    result_correct_label: { nl: "Goed beantwoord", en: "Correct answers", tr: "Doğru cevap" },
    result_pass:          { nl: "Geslaagd", en: "Passed", tr: "Geçti" },
    result_fail:          { nl: "Niet geslaagd", en: "Not passed", tr: "Geçemedi" },
    result_review_title:  { nl: "Overzicht per vraag", en: "Per-question review", tr: "Soru bazında inceleme" },
    your_answer:          { nl: "Jouw antwoord", en: "Your answer", tr: "Cevabınız" },
    correct_answer:       { nl: "Juiste antwoord", en: "Correct answer", tr: "Doğru cevap" },
    explanation_label:    { nl: "Uitleg", en: "Explanation", tr: "Açıklama" },
    no_answer:            { nl: "(geen antwoord)", en: "(no answer)", tr: "(cevap yok)" },

    // ---- woorden ----
    woorden_teach_title:  { nl: "Woorden leren", en: "Learn the words", tr: "Kelimeleri öğren" },
    woorden_practice_title:{ nl: "Oefenen", en: "Practice", tr: "Alıştırma" },
    btn_teach:            { nl: "Leren", en: "Learn", tr: "Öğren" },
    btn_practice:         { nl: "Oefenen", en: "Practice", tr: "Alıştırma yap" },
    example_label:        { nl: "Voorbeeld", en: "Example", tr: "Örnek" },
    fill_gap_placeholder: { nl: "Vul het ontbrekende woord in…", en: "Fill in the missing word…", tr: "Eksik kelimeyi yazın…" },
    type_answer_placeholder:{ nl: "Typ je antwoord…", en: "Type your answer…", tr: "Cevabınızı yazın…" },
    result_percent_label: { nl: "Percentage goed", en: "Percent correct", tr: "Doğru yüzdesi" },

    // ---- voortgang dashboard ----
    voortgang_title:      { nl: "Mijn voortgang", en: "My progress", tr: "İlerlemem" },
    card_exams_taken:     { nl: "Examens gemaakt", en: "Exams taken", tr: "Yapılan sınavlar" },
    card_avg_score:       { nl: "Gemiddelde NT2-score", en: "Average NT2 score", tr: "Ortalama NT2 puanı" },
    card_best_score:      { nl: "Beste score", en: "Best score", tr: "En iyi puan" },
    card_pass_count:      { nl: "Keer geslaagd", en: "Times passed", tr: "Geçilen sayısı" },
    table_examen:         { nl: "Examen", en: "Exam", tr: "Sınav" },
    table_score:          { nl: "Score", en: "Score", tr: "Puan" },
    table_result:         { nl: "Resultaat", en: "Result", tr: "Sonuç" },
    table_date:           { nl: "Datum", en: "Date", tr: "Tarih" },
    no_attempts:          { nl: "Nog geen examens gemaakt.", en: "No exams taken yet.", tr: "Henüz sınav yapılmadı." },
    woorden_summary_title:{ nl: "Woordenschat-oefening", en: "Vocabulary practice", tr: "Kelime alıştırması" },
    table_set:            { nl: "Set", en: "Set", tr: "Set" },
    table_times:          { nl: "Keer geoefend", en: "Times practiced", tr: "Alıştırma sayısı" },
    table_best:           { nl: "Beste %", en: "Best %", tr: "En iyi %" },
    no_woorden_practice:  { nl: "Nog geen woordenoefeningen gedaan.", en: "No vocabulary practice yet.", tr: "Henüz kelime alıştırması yapılmadı." },

    footer_note:          { nl: "Lokaal opgeslagen in je browser — geen account nodig.", en: "Stored locally in your browser — no account needed.", tr: "Tarayıcınızda yerel olarak saklanır — hesap gerekmez." }
  };

  function getLang() {
    try {
      return localStorage.getItem("inb_lang") || "nl";
    } catch (e) {
      return "nl";
    }
  }

  function setLang(lang) {
    if (lang !== "nl" && lang !== "en" && lang !== "tr") { lang = "nl"; }
    try { localStorage.setItem("inb_lang", lang); } catch (e) { /* ignore */ }
    window.INB._lang = lang;
    if (typeof window.INB.onLangChange === "function") {
      window.INB.onLangChange(lang);
    }
  }

  // INB.t('key') -> string in current language, falls back nl -> en -> tr -> key itself
  function t(key) {
    var lang = (window.INB && window.INB._lang) || getLang();
    var entry = STRINGS[key];
    if (!entry) { return key; }
    return entry[lang] || entry.nl || entry.en || entry.tr || key;
  }

  // INB.tr({nl,en,tr}) -> string in current language with nl -> en -> tr fallback
  function tr(obj) {
    if (!obj) { return ""; }
    var lang = (window.INB && window.INB._lang) || getLang();
    return obj[lang] || obj.nl || obj.en || obj.tr || "";
  }

  window.INB = window.INB || {};
  window.INB._lang = getLang();
  window.INB.t = t;
  window.INB.tr = tr;
  window.INB.getLang = getLang;
  window.INB.setLang = setLang;
})();
