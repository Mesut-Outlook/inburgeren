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
    app_title:        { nl: "Inburgeringsexamen", en: "Civic Integration Exam", tr: "İnburgering Sınavı" },
    app_tagline:       { nl: "Oefenen voor het inburgeringsexamen", en: "Practice for the civic integration exam", tr: "İnburgering sınavı için pratik yapın" },
    nav_examens:       { nl: "Examens", en: "Exams", tr: "Sınavlar" },
    nav_woorden:       { nl: "Woorden", en: "Words", tr: "Kelimeler" },
    nav_overzicht:     { nl: "Overzicht", en: "Overview", tr: "Genel bakış" },
    nav_alle_woorden:  { nl: "Alle woorden", en: "All words", tr: "Tüm kelimeler" },
    nav_in_voorbereiding: { nl: "In voorbereiding", en: "Coming soon", tr: "Hazırlanıyor" },
    nav_voortgang:     { nl: "Mijn voortgang", en: "My progress", tr: "İlerlemem" },
    nav_info:          { nl: "Over het examen", en: "About the exam", tr: "Sınav hakkında" },
    lang_nl:           { nl: "Nederlands", en: "Dutch", tr: "Hollandaca" },
    lang_en:           { nl: "Engels", en: "English", tr: "İngilizce" },
    lang_tr:           { nl: "Turks", en: "Turkish", tr: "Türkçe" },

    // ---- hub ----
    hero_title:           { nl: "Inburgeringsexamen", en: "Civic Integration Exam", tr: "İnburgering Sınavı" },
    hero_subtitle:        { nl: "Om het A2-examen te halen — vrij en voor iedereen.", en: "To pass the A2 exam — free and for everyone.", tr: "A2 sınavını geçmek için — ücretsiz ve herkes için." },
    hero_desc:            { nl: "Een vrije oefensite die je een handje helpt op weg naar het A2-inburgeringsexamen. Je vindt hier echte examenvragen en soortgelijke oefeningen, de woordenschat en terminologie die je op het examen nodig hebt, en ondersteunende documenten en uitleg in het Nederlands, Engels en Turks. Oefen alle onderdelen rustig in je eigen tempo en volg op je eigen voortgangspagina hoe je groeit.",
                            en: "A free practice site to give you a hand on your way to the A2 civic integration exam. You'll find real exam questions and similar exercises, the vocabulary and terminology you'll need on the exam, and supporting documents and explanations in Dutch, English, and Turkish. Take your time and practise every component at your own pace, and follow how you grow on your own progress page.",
                            tr: "A2 inburgering (vatandaşlık uyum) sınavına giden yolda yanında olan ücretsiz bir pratik sitesi. Burada gerçek sınav sorularını ve benzer alıştırmaları, sınavda ihtiyaç duyacağın kelime ve terminoloji bilgisini, ayrıca Hollandaca, İngilizce ve Türkçe destekleyici belge ve açıklamaları bulacaksın. Tüm bölümleri acele etmeden, kendi hızında çalış ve kendi ilerleme sayfanda nasıl geliştiğini adım adım takip et." },
    hero_scroll_label:    { nl: "Scroll naar beneden om te beginnen", en: "Scroll down to start", tr: "Başlamak için aşağı kaydırın" },
    hero_feature_title:   { nl: "Wat kun je doen?", en: "What can you do?", tr: "Neler yapabilirsiniz?" },
    hero_feat_exams_title:{ nl: "Interactieve examens", en: "Interactive exams", tr: "Etkileşimli Sınavlar" },
    hero_feat_exams_desc: { nl: "Oefen met echte en oefenexamens voor Lezen en KNM. Beantwoord meerkeuzevragen en krijg direct uitgebreide uitleg.",
                            en: "Practice with real and sample exams for Reading and KNM. Answer multiple-choice questions and get instant, detailed explanations.",
                            tr: "Okuma ve KNM için gerçek ve deneme sınavlarıyla pratik yapın. Çoktan seçmeli soruları yanıtlayın ve anında detaylı açıklamalar alın." },
    hero_feat_lezen_desc: { nl: "Oefen met leesteksten en meerkeuzevragen op A2-niveau.",
                            en: "Practice with reading texts and multiple-choice questions at the A2 level.",
                            tr: "A2 seviyesindeki okuma metinleri ve çoktan seçmeli sorularla pratik yapın." },
    hero_feat_knm_title:  { nl: "KNM", en: "KNM", tr: "KNM" },
    hero_feat_knm_desc:   { nl: "Oefen met examenvragen over de Nederlandse maatschappij, cultuur en regels.",
                            en: "Practice with exam questions about Dutch society, culture, and rules.",
                            tr: "Hollanda toplumu, kültürü ve kuralları hakkındaki sınav sorularıyla pratik yapın." },
    hero_feat_prod_title: { nl: "Spreken & Schrijven", en: "Speaking & Writing", tr: "Konuşma ve Yazma" },
    hero_feat_prod_desc:  { nl: "Oefen met productieve taken. Voer schrijfopdrachten in of neem je spraak op, en vergelijk dit met professionele modelantwoorden.",
                            en: "Practice with productive tasks. Write answers or record your voice, then compare them with professional model answers.",
                            tr: "Üretken görevlerle pratik yapın. Yazılı cevaplar girin veya sesinizi kaydedin, ardından bunları profesyonel model cevaplarla karşılaştırın." },
    hero_feat_vocab_title:{ nl: "Gerichte woordenschat", en: "Targeted vocabulary", tr: "Hedefli Kelime Bilgisi" },
    hero_feat_vocab_desc: { nl: "Leer en oefen de belangrijkste woorden uit de examens met interactieve flashcards en oefenvragen met directe feedback.",
                            en: "Learn and practice the most important words from the exams using interactive flashcards and practice questions with instant feedback.",
                            tr: "İnteraktif kartlar ve anında geri bildirimli pratik sorularıyla sınavlardaki en önemli kelimeleri öğrenin ve çalışın." },
    hero_feat_track_title:{ nl: "Voortgang bijhouden", en: "Track your progress", tr: "İlerlemenizi Takip Edin" },
    hero_feat_track_desc: { nl: "Bekijk je geschiedenis, gemiddelde scores en slaagpercentages per examenonderdeel om te zien waar je nog kunt verbeteren.",
                            en: "View your history, average scores, and pass rates per component to see where you can improve.",
                            tr: "Hangi alanlarda kendinizi geliştirebileceğinizi görmek için sınav bölümü başına geçmişinizi, ortalama puanlarınızı ve başarı oranlarınızı görün." },

    hub_examens_title:    { nl: "Onderdelen van het examen", en: "Exam components", tr: "Sınav bölümleri" },
    hub_examens_sub:      { nl: "Oefen de vijf onderdelen van het inburgeringsexamen A2: Lezen, Luisteren, Spreken, Schrijven en KNM.",
                             en: "Practice the five components of the A2 civic integration exam: Reading, Listening, Speaking, Writing and KNM.",
                             tr: "A2 İnburgering sınavının beş bölümünü çalışın: Okuma, Dinleme, Konuşma, Yazma ve KNM." },
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
    btn_resultaten:       { nl: "Resultaten", en: "Results", tr: "Sonuçlar" },

    // ---- onderdeel sections ----
    onderdeel_lezen_titel:      { nl: "Lezen", en: "Reading", tr: "Okuma" },
    onderdeel_lezen_desc:       { nl: "Lees teksten en beantwoord meerkeuzevragen.", en: "Read texts and answer multiple-choice questions.", tr: "Metinleri okuyun ve çoktan seçmeli soruları cevaplayın." },
    onderdeel_luisteren_titel:  { nl: "Luisteren", en: "Listening", tr: "Dinleme" },
    onderdeel_luisteren_desc:   { nl: "Luister naar gesprekken en beantwoord vragen.", en: "Listen to conversations and answer questions.", tr: "Konuşmaları dinleyin ve soruları cevaplayın." },
    onderdeel_schrijven_titel:  { nl: "Schrijven", en: "Writing", tr: "Yazma" },
    onderdeel_schrijven_desc:   { nl: "Schrijf korte teksten zoals formulieren, berichten en brieven.", en: "Write short texts such as forms, messages and letters.", tr: "Formlar, mesajlar ve mektuplar gibi kısa metinler yazın." },
    onderdeel_spreken_titel:    { nl: "Spreken", en: "Speaking", tr: "Konuşma" },
    onderdeel_spreken_desc:     { nl: "Oefen met spreken in alledaagse situaties.", en: "Practice speaking in everyday situations.", tr: "Günlük durumlarda konuşma pratiği yapın." },
    onderdeel_knm_titel:        { nl: "KNM — Kennis van de Nederlandse Maatschappij", en: "KNM — Knowledge of Dutch Society", tr: "KNM — Hollanda Toplumu Bilgisi" },
    onderdeel_knm_desc:         { nl: "Toets je kennis van de Nederlandse samenleving.", en: "Test your knowledge of Dutch society.", tr: "Hollanda toplumu hakkındaki bilginizi test edin." },
    onderdeel_in_voorbereiding: { nl: "In voorbereiding", en: "Coming soon", tr: "Yakında" },
    onderdeel_luisteren_note:   { nl: "Audio-oefeningen worden nog toegevoegd.", en: "Audio exercises will be added soon.", tr: "Ses alıştırmaları yakında eklenecek." },
    onderdeel_schrijven_note:   { nl: "Schrijfoefeningen worden nog toegevoegd.", en: "Writing exercises will be added soon.", tr: "Yazma alıştırmaları yakında eklenecek." },
    onderdeel_spreken_note:     { nl: "Spreekoefeningen worden nog toegevoegd.", en: "Speaking exercises will be added soon.", tr: "Konuşma alıştırmaları yakında eklenecek." },
    onderdeel_knm_note:         { nl: "KNM-oefeningen worden nog toegevoegd.", en: "KNM exercises will be added soon.", tr: "KNM alıştırmaları yakında eklenecek." },

    // ---- alle woorden ----
    alle_woorden_titel:   { nl: "Alle woorden — alle examens", en: "All words — all exams", tr: "Tüm kelimeler — tüm sınavlar" },
    alle_woorden_intro:   { nl: "Oefen alle woorden uit alle woordensets in één keer.", en: "Practice all the words from every vocabulary set at once.", tr: "Tüm kelime setlerindeki kelimeleri bir kerede çalışın." },

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

    // ---- productieve onderdelen (schrijven / spreken) ----
    label_taken:          { nl: "opdrachten", en: "tasks", tr: "görev" },
    situatie_label:       { nl: "Situatie", en: "Situation", tr: "Durum" },
    opdracht_label:       { nl: "Opdracht", en: "Task", tr: "Görev" },
    eisen_label:          { nl: "Eisen", en: "Requirements", tr: "Gereksinimler" },
    prod_intro_schrijven: { nl: "Schrijf zelf je antwoord en vergelijk daarna met het modelantwoord. Deze oefening wordt niet automatisch beoordeeld.", en: "Write your own answer, then compare it with the model answer. This exercise is not scored automatically.", tr: "Kendi cevabınızı yazın, ardından model cevapla karşılaştırın. Bu alıştırma otomatik puanlanmaz." },
    prod_intro_spreken:   { nl: "Spreek je antwoord hardop uit en vergelijk daarna met de modelantwoorden. Deze oefening wordt niet automatisch beoordeeld.", en: "Say your answer out loud, then compare it with the model answers. This exercise is not scored automatically.", tr: "Cevabınızı yüksek sesle söyleyin, ardından model cevaplarla karşılaştırın. Bu alıştırma otomatik puanlanmaz." },
    jouw_antwoord_label:  { nl: "Jouw antwoord", en: "Your answer", tr: "Cevabınız" },
    jouw_antwoord_ph:     { nl: "Typ hier je antwoord…", en: "Type your answer here…", tr: "Cevabınızı buraya yazın…" },
    toon_model:           { nl: "Toon modelantwoord", en: "Show model answer", tr: "Model cevabı göster" },
    verberg_model:        { nl: "Verberg modelantwoord", en: "Hide model answer", tr: "Model cevabı gizle" },
    model_label:          { nl: "Modelantwoord", en: "Model answer", tr: "Model cevap" },
    tips_label:           { nl: "Tip", en: "Tip", tr: "İpucu" },
    self_eval_title:      { nl: "Zelfbeoordeling", en: "Self-evaluation", tr: "Kendi kendini değerlendirme" },
    self_eval_label:      { nl: "Voldoet jouw antwoord aan alle eisen?", en: "Does your answer meet all requirements?", tr: "Cevabınız tüm gereksinimleri karşılıyor mu?" },
    btn_eval_yes:         { nl: "Ja (Voldoet)", en: "Yes (Pass)", tr: "Evet (Geçti)" },
    btn_eval_no:          { nl: "Nee (Niet voldoende)", en: "No (Fail)", tr: "Hayır (Geçmedi)" },
    btn_record_start:     { nl: "Opname starten", en: "Start recording", tr: "Kaydı başlat" },
    btn_record_stop:      { nl: "Opname stoppen", en: "Stop recording", tr: "Kaydı durdur" },
    recording_label:      { nl: "Opname", en: "Recording", tr: "Kayıt" },
    model_antwoorden_label: { nl: "Modelantwoorden", en: "Model answers", tr: "Model cevaplar" },

    // ---- woorden ----
    woorden_teach_title:  { nl: "Woorden leren", en: "Learn the words", tr: "Kelimeleri öğren" },
    woorden_practice_title:{ nl: "Oefenen", en: "Practice", tr: "Alıştırma" },
    btn_teach:            { nl: "Leren", en: "Learn", tr: "Öğren" },
    btn_practice:         { nl: "Oefenen", en: "Practice", tr: "Alıştırma yap" },
    example_label:        { nl: "Voorbeeld", en: "Example", tr: "Örnek" },
    fill_gap_placeholder: { nl: "Vul het ontbrekende woord in…", en: "Fill in the missing word…", tr: "Eksik kelimeyi yazın…" },
    type_answer_placeholder:{ nl: "Typ je antwoord…", en: "Type your answer…", tr: "Cevabınızı yazın…" },
    result_percent_label: { nl: "Percentage goed", en: "Percent correct", tr: "Doğru yüzdesi" },
    no_practice_questions:{ nl: "Deze set heeft nog geen oefenvragen.", en: "This set has no practice questions yet.", tr: "Bu sette henüz alıştırma sorusu yok." },
    streak_label:         { nl: "serie", en: "streak", tr: "seri" },
    feedback_correct:     { nl: "Goed gedaan!", en: "Well done!", tr: "Doğru!" },
    feedback_wrong:       { nl: "Helaas, niet juist.", en: "Not quite.", tr: "Yanlış oldu." },
    requeue_note:         { nl: "Deze vraag komt straks nog een keer terug.", en: "This question will come back again later.", tr: "Bu soru birazdan tekrar gelecek." },
    btn_continue:         { nl: "Verder", en: "Continue", tr: "Devam" },
    practice_done_title:  { nl: "Klaar!", en: "Done!", tr: "Bitti!" },
    enc_high:             { nl: "Geweldig gedaan! 🌟", en: "Excellent work! 🌟", tr: "Harikasın! 🌟" },
    enc_mid:              { nl: "Goed bezig — blijf oefenen!", en: "Nice job — keep it up!", tr: "Aferin — devam et!" },
    enc_low:             { nl: "Blijf oefenen, je wordt steeds beter!", en: "Keep practicing, you're getting better!", tr: "Çalışmaya devam, gittikçe gelişiyorsun!" },

    // ---- voortgang dashboard ----
    voortgang_title:      { nl: "Mijn voortgang", en: "My progress", tr: "İlerlemem" },
    vg_intro:             { nl: "Zie in één oogopslag wat je al hebt gedaan en wat er nog op je wacht.",
                             en: "See at a glance what you've done and what's still waiting for you.",
                             tr: "Neyi tamamladığını ve neyin seni beklediğini tek bakışta gör." },
    vg_done_count:        { nl: "Afgerond", en: "Completed", tr: "Tamamlanan" },
    vg_woorden_mastered:  { nl: "Woordsets ≥80%", en: "Word sets ≥80%", tr: "Kelime setleri ≥80%" },
    vg_status_geslaagd:   { nl: "Geslaagd", en: "Passed", tr: "Geçti" },
    vg_status_bezig:      { nl: "Bijna!", en: "Almost!", tr: "Az kaldı!" },
    vg_status_todo:       { nl: "Nog te doen", en: "Not started", tr: "Henüz yapılmadı" },
    vg_status_gedaan:     { nl: "Gedaan", en: "Done", tr: "Yapıldı" },
    vg_status_top:        { nl: "Top!", en: "Mastered!", tr: "Süper!" },
    vg_status_oefenen:    { nl: "Blijf oefenen", en: "Keep practicing", tr: "Çalışmaya devam" },
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
    vg_alle_oefeningen:   { nl: "Alle oefeningen", en: "All exercises", tr: "Tüm alıştırmalar" },
    vg_col_onderdeel:     { nl: "Onderdeel", en: "Component", tr: "Bölüm" },
    vg_col_oefening:      { nl: "Oefening", en: "Exercise", tr: "Alıştırma" },
    vg_col_resultaat:     { nl: "Resultaat", en: "Result", tr: "Sonuç" },
    vg_col_status:        { nl: "Status", en: "Status", tr: "Durum" },
    vg_col_keer:          { nl: "Keer", en: "Times", tr: "Kez" },
    vg_col_beste:         { nl: "Beste", en: "Best", tr: "En iyi" },
    vg_col_gemiddeld:     { nl: "Gemiddeld", en: "Average", tr: "Ortalama" },
    vg_gemiddeld:         { nl: "gem.", en: "avg", tr: "ort." },
    vg_vak_woorden:       { nl: "Woorden", en: "Words", tr: "Kelime" },

    footer_note:          { nl: "Onofficiële oefensite voor het inburgeringsexamen A2 — lokaal opgeslagen in je browser, geen account nodig.",
                             en: "Unofficial practice site for the A2 civic integration exam — stored locally in your browser, no account needed.",
                             tr: "A2 İnburgering sınavı için resmi olmayan alıştırma sitesi — tarayıcınızda yerel olarak saklanır, hesap gerekmez." },

    // ---- per-exam stats page ----
    stats_title:          { nl: "Resultaten", en: "Results", tr: "Sonuçlar" },
    stats_attempts:       { nl: "Pogingen", en: "Attempts", tr: "Denemeler" },
    stats_best_score:     { nl: "Beste NT2-score", en: "Best NT2 score", tr: "En iyi NT2 puanı" },
    stats_last_score:     { nl: "Laatste score", en: "Last score", tr: "Son puan" },
    stats_timeline_title: { nl: "Geschiedenis", en: "History", tr: "Geçmiş" },
    no_exam_found:        { nl: "Examen niet gevonden.", en: "Exam not found.", tr: "Sınav bulunamadı." },
    no_set_found:         { nl: "Set niet gevonden.", en: "Set not found.", tr: "Set bulunamadı." },

    // ---- info page ----
    info_title:               { nl: "Over het examen", en: "About the exam", tr: "Sınav hakkında" },
    info_intro: { nl: "Het inburgeringsexamen op A2-niveau toetst je Nederlandse taalvaardigheid en je kennis van de Nederlandse samenleving. Hieronder een kort overzicht van de onderdelen — gebaseerd op de officiële informatie van inburgeren.nl.",
                  en: "The civic integration exam at A2 level tests your Dutch language skills and your knowledge of Dutch society. Below is a short overview of the components — based on the official information from inburgeren.nl.",
                  tr: "A2 seviyesindeki İnburgering sınavı Hollandaca dil becerilerinizi ve Hollanda toplumu hakkındaki bilginizi test eder. Aşağıda inburgeren.nl'deki resmi bilgilere dayanan kısa bir özet bulabilirsiniz." },
    info_project_titel: { nl: "Over dit project", en: "About this project", tr: "Bu proje hakkında" },
    info_project_desc: { nl: "Dit is een onofficiële, non-commerciële oefensite. Het doel is uitsluitend om expats en nieuwkomers die Nederlands staatsburger of inburgeraar willen worden te helpen zich voor te bereiden op het inburgeringsexamen (A2). De site werkt volledig in je eigen browser, slaat je voortgang lokaal op en verzamelt geen persoonlijke gegevens.",
                         en: "This is an unofficial, non-commercial practice site. Its sole purpose is to help expats and newcomers who want to integrate or become Dutch citizens prepare for the integration exam (A2). The site runs entirely in your browser, saves progress locally, and does not collect any personal data.",
                         tr: "Bu site, resmi olmayan ve ticari amaç gütmeyen bir alıştırma platformudur. Tek amacı, Hollanda vatandaşı olmak veya entegrasyon sürecini tamamlamak isteyen göçmenlerin (expatlar) inburgering sınavına (A2) hazırlanmalarına yardımcı olmaktır. Sistem tamamen tarayıcınızda çalışır, ilerlemenizi yerel olarak saklar ve hiçbir kişisel veri toplamaz." },
    info_taalvaardigheden_titel: { nl: "Taalvaardigheden", en: "Language skills", tr: "Dil becerileri" },
    info_taalvaardigheden_desc: { nl: "Vier onderdelen toetsen je Nederlands op A2-niveau: Lezen, Luisteren, Schrijven en Spreken.",
                                   en: "Four components test your Dutch at A2 level: Reading, Listening, Writing and Speaking.",
                                   tr: "Hollandacanızı A2 seviyesinde dört bölüm test eder: Okuma, Dinleme, Yazma ve Konuşma." },
    info_knm_titel: { nl: "KNM — Kennis van de Nederlandse Maatschappij", en: "KNM — Knowledge of Dutch Society", tr: "KNM — Hollanda Toplumu Bilgisi" },
    info_knm_desc: { nl: "KNM is verplicht voor iedereen die moet inburgeren. Het toetst je kennis van wonen, werken, gezondheid, geschiedenis en de Nederlandse normen en waarden.",
                      en: "KNM is mandatory for everyone who has to integrate. It tests your knowledge of housing, work, health, history, and Dutch norms and values.",
                      tr: "KNM, entegrasyon yükümlülüğü olan herkes için zorunludur. Barınma, çalışma, sağlık, tarih ve Hollanda norm ve değerleri hakkındaki bilginizi test eder." },
    info_ona_pvt_titel: { nl: "ONA en PVT (afhankelijk van je situatie)", en: "ONA and PVT (depending on your situation)", tr: "ONA ve PVT (durumunuza bağlı olarak)" },
    info_ona_pvt_desc: { nl: "Afhankelijk van je inburgeringsdatum moet je mogelijk ook ONA (Oriëntatie op de Nederlandse Arbeidsmarkt) en het PVT (Participatieverklaringstraject) afronden.",
                          en: "Depending on your integration start date, you may also need to complete ONA (Orientation on the Dutch Labour Market) and the PVT (Participation Statement process).",
                          tr: "Entegrasyon başlangıç tarihinize bağlı olarak ONA (Hollanda İş Piyasasına Yönelim) ve PVT (Katılım Beyanı süreci) sürecini de tamamlamanız gerekebilir." },
    info_niveau_titel: { nl: "Vereist niveau", en: "Required level", tr: "Gerekli seviye" },
    info_niveau_desc: { nl: "Het basis-inburgeringsexamen leg je af op niveau A2, met de onderdelen Lezen, Luisteren, Spreken en Schrijven plus KNM (en, afhankelijk van je inburgeringsdatum, ONA en/of het PVT). Deze site oefent in de eerste plaats met dit A2-examen. Wie liever via de B1-route inburgert, kan in plaats daarvan het NT2 Staatsexamen Programma I (B1) doen — dat is een afzonderlijk, hoger niveau-traject en geen onderdeel van het standaard A2-examen.",
                         en: "The basic civic integration exam is taken at A2 level, with the components Reading, Listening, Speaking and Writing plus KNM (and, depending on your integration start date, ONA and/or the PVT). This site's practice material is primarily aimed at this A2 exam. People who prefer to integrate via the B1 route can instead take the NT2 Staatsexamen Programma I (B1) — a separate, higher-level option, not part of the standard A2 exam.",
                         tr: "Temel İnburgering sınavı A2 seviyesinde yapılır; Okuma, Dinleme, Konuşma ve Yazma bölümleriyle birlikte KNM (ve entegrasyon başlangıç tarihinize bağlı olarak ONA ve/veya PVT) içerir. Bu sitedeki alıştırma materyali öncelikle bu A2 sınavına yöneliktir. B1 rotası ile entegrasyonu tercih edenler bunun yerine NT2 Staatsexamen Programma I (B1) sınavına girebilir — bu, standart A2 sınavının bir parçası olmayan, ayrı ve daha yüksek seviyeli bir seçenektir." },
    info_pip_titel: { nl: "Persoonlijk Plan Inburgering en Participatie (PIP)", en: "Personal Integration and Participation Plan (PIP)", tr: "Kişisel Entegrasyon ve Katılım Planı (PIP)" },
    info_pip_desc: { nl: "Je gemeente stelt samen met jou een PIP op. Je deadline hangt af van je inburgeringsdatum — check dit in je Mijn Inburgering account.",
                      en: "Your municipality creates a PIP together with you. Your deadline depends on your integration date — check this in your Mijn Inburgering account.",
                      tr: "Belediyeniz sizinle birlikte bir PIP hazırlar. Son tarihiniz entegrasyon tarihinize bağlıdır — bunu Mijn Inburgering hesabınızdan kontrol edin." },
    info_vrijstelling_titel: { nl: "Vrijstelling", en: "Exemptions", tr: "Muafiyet" },
    info_vrijstelling_desc: { nl: "In sommige gevallen kun je vrijstelling krijgen, bijvoorbeeld bij ziekte/beperking of als je al een erkend diploma hebt.",
                                en: "In some cases you can get an exemption, for example due to illness/disability or if you already have a recognized diploma.",
                                tr: "Bazı durumlarda muafiyet alabilirsiniz, örneğin hastalık/engellilik durumunda veya zaten tanınmış bir diplomanız varsa." },
    info_disclaimer_titel: { nl: "Let op: dit is geen officiële site", en: "Note: this is not an official site", tr: "Dikkat: bu resmi bir site değildir" },
    info_disclaimer_desc: { nl: "Deze website is een onofficiële oefensite. Voor officiële informatie, inschrijving en regelgeving ga je naar inburgeren.nl en DUO.",
                              en: "This website is an unofficial practice site. For official information, registration and rules, go to inburgeren.nl and DUO.",
                              tr: "Bu web sitesi resmi olmayan bir alıştırma sitesidir. Resmi bilgi, kayıt ve kurallar için inburgeren.nl ve DUO'yu ziyaret edin." },
    info_link_label: { nl: "Officiële informatie over het examen (inburgeren.nl)", en: "Official information about the exam (inburgeren.nl)", tr: "Sınav hakkında resmi bilgi (inburgeren.nl)" }
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

  // INB.tr({nl,en,tr} or string) -> string in current language with nl -> en -> tr fallback
  function tr(obj) {
    if (!obj) { return ""; }
    if (typeof obj === "string") { return obj; }
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
