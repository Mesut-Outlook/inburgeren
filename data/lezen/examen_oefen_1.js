/* data/lezen/examen_oefen_1.js
 * ONE sample generated ("oefen") Lezen exam, B1 level, for the NT2 Staatsexamen
 * Programma I. Two short texts, 10 questions total. All Dutch content is
 * original and written for this demo.
 *
 * geslaagdVanaf is set to 7 (~70% of 10 questions), and scoretabel has 11
 * entries (indices 0..10) so it never goes out of range.
 */
(function () {
  "use strict";

  INB.registerExamen({
    id: "lezen-oefen-1",
    vak: "lezen",
    jaar: null,
    bron: "oefen",
    titel: "Oefenexamen Lezen I — 1",
    niveau: "B1",
    geslaagdVanaf: 7,
    // Short scoretabel scaled to 10 questions (indices 0..10).
    // Loosely modeled on the shape of the real NT2 table (low scores rise slowly,
    // then climb faster near the top), kept consistent with this exam's length.
    scoretabel: [250, 300, 340, 370, 395, 415, 435, 460, 490, 540, 620],
    teksten: [
      {
        titel: "Bakkerij Van Dam zoekt hulp",
        domein: "werk",
        tekstsoort: "persuasief",
        html:
          "<p><strong>Bakkerij Van Dam zoekt een medewerker voor in de winkel</strong></p>" +
          "<p>Bakkerij Van Dam staat al dertig jaar in het centrum van Utrecht. Wij bakken elke ochtend vers brood, " +
          "broodjes en gebak. Onze klanten komen graag bij ons, omdat de sfeer in de winkel gezellig is en het brood " +
          "altijd vers is.</p>" +
          "<p>Voor onze winkel zoeken wij per 1 augustus een nieuwe medewerker. Je helpt klanten, je vult de schappen " +
          "aan en je houdt de winkel netjes. Een opleiding als bakker is niet verplicht, maar je moet wel goed met " +
          "mensen kunnen omgaan. Je werkt drie tot vier dagen per week, ook op zaterdag. Wij bieden een goed salaris " +
          "en gratis brood voor onze medewerkers.</p>" +
          "<p>Heb je interesse? Stuur dan een korte motivatie en je cv naar werk@bakkerijvandam-voorbeeld.nl. " +
          "Bellen mag ook, van maandag tot en met vrijdag tussen 09.00 en 17.00 uur.</p>",
        vragen: [
          {
            vraag: "Hoe lang bestaat Bakkerij Van Dam al?",
            opties: ["Tien jaar", "Twintig jaar", "Dertig jaar", "Veertig jaar"],
            antwoord: 2,
            uitleg: {
              nl: "In de tekst staat: 'Bakkerij Van Dam staat al dertig jaar in het centrum van Utrecht.'",
              en: "The text says: 'Bakkerij Van Dam staat al dertig jaar in het centrum van Utrecht' (has been there for thirty years).",
              tr: "Metinde şöyle deniyor: 'Bakkerij Van Dam staat al dertig jaar in het centrum van Utrecht' (otuz yıldır oradadır)."
            }
          },
          {
            vraag: "Waarom komen klanten graag bij Bakkerij Van Dam?",
            opties: [
              "Omdat het brood goedkoop is",
              "Omdat de sfeer gezellig is en het brood vers is",
              "Omdat er altijd korting is",
              "Omdat de winkel 24 uur open is"
            ],
            antwoord: 1,
            uitleg: {
              nl: "De tekst noemt: 'de sfeer in de winkel gezellig is en het brood altijd vers is'.",
              en: "The text states: the atmosphere in the shop is cosy and the bread is always fresh.",
              tr: "Metinde belirtiliyor: dükkânın atmosferi samimi ve ekmek her zaman taze."
            }
          },
          {
            vraag: "Wat is GEEN taak van de nieuwe medewerker?",
            opties: [
              "Klanten helpen",
              "Schappen aanvullen",
              "De winkel netjes houden",
              "Brood bakken in de bakkerij"
            ],
            antwoord: 3,
            uitleg: {
              nl: "De tekst noemt klanten helpen, schappen aanvullen en de winkel netjes houden. Bakken wordt niet als taak genoemd; een bakkersopleiding is zelfs niet verplicht.",
              en: "The text mentions helping customers, restocking shelves, and keeping the shop tidy. Baking is not mentioned as a task; a baker's training is not even required.",
              tr: "Metinde müşterilere yardım etmek, rafları doldurmak ve dükkânı düzenli tutmak belirtiliyor. Ekmek pişirmek görev olarak geçmiyor; fırıncılık eğitimi bile zorunlu değil."
            }
          },
          {
            vraag: "Is een opleiding als bakker verplicht voor deze baan?",
            opties: ["Ja, altijd", "Nee, niet verplicht", "Alleen op zaterdag", "Alleen voor mannen"],
            antwoord: 1,
            uitleg: {
              nl: "De tekst zegt: 'Een opleiding als bakker is niet verplicht'.",
              en: "The text says: 'a baker's training is not required'.",
              tr: "Metinde 'fırıncılık eğitimi zorunlu değildir' deniyor."
            }
          },
          {
            vraag: "Hoe kun je reageren op deze vacature?",
            opties: [
              "Alleen via een sollicitatieformulier op de website",
              "Alleen langskomen in de winkel",
              "Per e-mail met motivatie en cv, of bellen",
              "Alleen via een uitzendbureau"
            ],
            antwoord: 2,
            uitleg: {
              nl: "De tekst zegt: 'Stuur dan een korte motivatie en je cv naar...' en 'Bellen mag ook'.",
              en: "The text says to send a short motivation and CV by email, and that calling is also fine.",
              tr: "Metinde kısa bir niyet mektubu ve özgeçmiş e-postayla gönderilmesi, aramanın da mümkün olduğu belirtiliyor."
            }
          }
        ]
      },
      {
        titel: "Fietsen in de stad: handig en gezond",
        domein: "overig",
        tekstsoort: "beschouwend",
        html:
          "<p><strong>Fietsen in de stad: handig en gezond</strong></p>" +
          "<p>In Nederland fietsen veel mensen naar hun werk of naar school. Dat is niet voor niets: fietsen is goedkoop, " +
          "snel in de stad en goed voor je gezondheid. Bovendien is fietsen beter voor het milieu dan de auto, omdat een " +
          "fiets geen uitstoot heeft.</p>" +
          "<p>Toch heeft fietsen ook nadelen. Bij regen of harde wind is fietsen minder fijn. Ook moet je in de stad goed " +
          "opletten, want er zijn veel andere fietsers, voetgangers en auto's. Daarom is het belangrijk om een goede fietsverlichting " +
          "te hebben en je fiets op slot te zetten als je hem ergens neerzet, want fietsen worden in de stad vaak gestolen.</p>" +
          "<p>Veel gemeenten investeren in nieuwe fietspaden en fietsenstallingen om fietsen nog veiliger en makkelijker te maken. " +
          "Voor wie gezond en duurzaam wil reizen, is de fiets in Nederland vaak de beste keuze.</p>",
        vragen: [
          {
            vraag: "Wat is volgens de tekst GEEN voordeel van fietsen?",
            opties: ["Het is goedkoop", "Het is snel in de stad", "Het is goed voor je gezondheid", "Het is altijd droog en windstil"],
            antwoord: 3,
            uitleg: {
              nl: "De tekst noemt juist dat fietsen bij regen of harde wind minder fijn is; dat is een nadeel, geen voordeel.",
              en: "The text actually says cycling is less pleasant in rain or strong wind; that is a disadvantage, not an advantage.",
              tr: "Metin aslında yağmurda veya şiddetli rüzgârda bisiklete binmenin daha az hoş olduğunu söylüyor; bu bir dezavantajdır, avantaj değil."
            }
          },
          {
            vraag: "Waarom is fietsen beter voor het milieu dan autorijden?",
            opties: [
              "Omdat een fiets sneller is",
              "Omdat een fiets geen uitstoot heeft",
              "Omdat een fiets goedkoper is",
              "Omdat een fiets minder weegt"
            ],
            antwoord: 1,
            uitleg: {
              nl: "De tekst zegt: 'omdat een fiets geen uitstoot heeft'.",
              en: "The text says: 'because a bicycle has no emissions'.",
              tr: "Metinde 'çünkü bir bisikletin emisyonu yoktur' deniyor."
            }
          },
          {
            vraag: "Wat wordt genoemd als nadeel van fietsen in de stad?",
            opties: [
              "Je moet altijd een helm dragen",
              "Fietsen zijn duur om te onderhouden",
              "Er zijn veel andere fietsers, voetgangers en auto's",
              "Er zijn te weinig fietspaden in heel Nederland"
            ],
            antwoord: 2,
            uitleg: {
              nl: "De tekst noemt: 'je moet in de stad goed opletten, want er zijn veel andere fietsers, voetgangers en auto's'.",
              en: "The text mentions: you need to pay attention in the city because of many other cyclists, pedestrians and cars.",
              tr: "Metinde, şehirde dikkatli olmak gerektiği, çünkü birçok bisikletçi, yaya ve araba olduğu belirtiliyor."
            }
          },
          {
            vraag: "Waarom is het belangrijk om je fiets op slot te zetten?",
            opties: [
              "Omdat dat verplicht is door de wet",
              "Omdat fietsen in de stad vaak gestolen worden",
              "Omdat je anders een boete krijgt",
              "Omdat de gemeente dat vraagt voor de stalling"
            ],
            antwoord: 1,
            uitleg: {
              nl: "De tekst zegt: 'fietsen worden in de stad vaak gestolen', daarom is een slot belangrijk.",
              en: "The text says bicycles are often stolen in the city, which is why a lock is important.",
              tr: "Metinde şehirde bisikletlerin sık sık çalındığı belirtiliyor, bu nedenle kilit önemlidir."
            }
          },
          {
            vraag: "Wat doen veel gemeenten volgens de tekst?",
            opties: [
              "Ze verbieden auto's in het centrum",
              "Ze investeren in fietspaden en fietsenstallingen",
              "Ze geven gratis fietsen aan inwoners",
              "Ze verhogen de prijs van het openbaar vervoer"
            ],
            antwoord: 1,
            uitleg: {
              nl: "De tekst zegt: 'Veel gemeenten investeren in nieuwe fietspaden en fietsenstallingen'.",
              en: "The text says many municipalities invest in new bike paths and bike parking facilities.",
              tr: "Metinde birçok belediyenin yeni bisiklet yollarına ve bisiklet park yerlerine yatırım yaptığı belirtiliyor."
            }
          }
        ]
      }
    ]
  });
})();
