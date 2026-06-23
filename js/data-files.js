/* data-files.js — PUBLIC data manifest (committed, safe to publish).
 * Lists the A2 data files loaded on every deployment. Opus wires new A2 files
 * here as agents add them under data/<vak>/ (see CLAUDE.md "Werkverdeling").
 *
 * NOTE: the earlier B1 / NT2 content (examen_2023/24/25, w_2023/24/25, the B1
 * oefen sample) is intentionally NOT listed here — it is set aside (files stay
 * on disk but are not loaded or shown). Do not re-add unless asked. */
window.INB = window.INB || {};
INB.dataFiles = [
  // A2 data files:
  "data/woorden/a2_woorden_tegenstellingen.js?v=1",
  "data/woorden/a2_woorden_tegenstellingen_2.js?v=1",
  "data/woorden/a2_woorden_knm.js?v=1",
  "data/woorden/a2_woorden_knm_2.js?v=1",
  "data/woorden/a2_woorden_basis_1.js?v=1",
  "data/woorden/a2_woorden_basis_2.js?v=1",
  "data/woorden/a2_woorden_basis_3.js?v=1",
  "data/woorden/a2_woorden_basis_4.js?v=1",
  "data/woorden/a2_woorden_basis_5.js?v=1",
  "data/woorden/a2_woorden_basis_6.js?v=1",
  "data/woorden/a2_woorden_zinnen.js?v=1",
  "data/knm/a2_knm_1.js?v=1",
  "data/schrijven/a2_schrijven_1.js?v=1",
  "data/schrijven/a2_schrijven_2.js?v=1",
  "data/schrijven/a2_schrijven_3.js?v=1",
  "data/schrijven/a2_schrijven_notities.js?v=1",
  "data/spreken/a2_spreken_1.js?v=1",
  "data/spreken/a2_spreken_2.js?v=1",
  "data/spreken/a2_spreken_notities.js?v=1",
  "data/lezen/a2_lezen_1.js?v=1",
  "data/lezen/a2_lezen_2.js?v=1",
  "data/lezen/a2_lezen_3.js?v=1",
  "data/lezen/a2_lezen_4.js?v=1",
  "data/lezen/a2_lezen_5.js?v=1",
  "data/lezen/a2_lezen_6.js?v=1",
  "data/lezen/a2_lezen_7.js?v=1",
  "data/lezen/a2_lezen_8.js?v=1",
  "data/knm/a2_knm_oefen_1.js?v=1",
  "data/knm/a2_knm_oefen_2.js?v=1",
  "data/knm/a2_knm_thema_1_werk.js?v=1",
  "data/knm/a2_knm_thema_2_omgang.js?v=1",
  "data/knm/a2_knm_thema_3_wonen.js?v=1",
  "data/knm/a2_knm_thema_4_gezondheid.js?v=1",
  "data/knm/a2_knm_thema_5_geschiedenis.js?v=1",
  "data/knm/a2_knm_thema_6_instanties.js?v=1",
  "data/knm/a2_knm_thema_7_onderwijs.js?v=1",
  "data/knm/a2_knm_thema_8_politiek.js?v=1",
  "data/knm/a2_knm_oefen_3.js?v=1",
  "data/knm/a2_knm_oefen_4.js?v=1"
];

