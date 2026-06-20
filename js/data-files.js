/* data-files.js — PUBLIC data manifest (committed, safe to publish).
 * Lists the data files that are loaded on EVERY deployment, including the
 * public GitHub Pages site: generated practice exams (bron:"oefen") and the
 * vocabulary sets. The three REAL CvTE exams are added only locally via the
 * gitignored js/data-files.local.js override (see .gitignore). */
window.INB = window.INB || {};
INB.dataFiles = [
  "data/lezen/examen_oefen_1.js?v=1",
  "data/woorden/w_2023.js?v=2",
  "data/woorden/w_2024.js?v=2",
  "data/woorden/w_2025.js?v=2",
  "data/woorden/w_oefen_1.js?v=1"
];
