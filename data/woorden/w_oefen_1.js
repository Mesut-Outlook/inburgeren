/* data/woorden/w_oefen_1.js
 * Sample vocabulary & sentence-structure practice set, tied to
 * lezen-oefen-1 (Bakkerij Van Dam / Fietsen in de stad).
 * 8 vocabulary items, plus a small mix of mc / invoer / gat questions.
 */
(function () {
  "use strict";

  INB.registerWoorden({
    id: "w-oefen-1",
    titel: "Woordenschat — Bakkerij & Fietsen",
    bronExamen: "lezen-oefen-1",
    icoon: "🥖",
    intro: {
      nl: "Leer eerst de woorden uit het oefenexamen, en oefen ze daarna.",
      en: "First learn the words from the practice exam, then practice them.",
      tr: "Önce alıştırma sınavındaki kelimeleri öğrenin, sonra alıştırma yapın."
    },
    items: [
      {
        woord: "de bakkerij",
        nl: "plek waar brood wordt gebakken en verkocht",
        en: "bakery",
        tr: "fırın",
        voorbeeld: "Ik koop brood bij de bakkerij."
      },
      {
        woord: "de medewerker",
        nl: "iemand die voor een bedrijf werkt",
        en: "employee, staff member",
        tr: "çalışan, personel",
        voorbeeld: "De winkel zoekt een nieuwe medewerker."
      },
      {
        woord: "de sfeer",
        nl: "de gevoelswaarde van een plek of situatie",
        en: "atmosphere, vibe",
        tr: "atmosfer, hava",
        voorbeeld: "De sfeer in de winkel is heel gezellig."
      },
      {
        woord: "vers",
        nl: "net gemaakt, niet oud",
        en: "fresh",
        tr: "taze",
        voorbeeld: "Het brood is elke ochtend vers."
      },
      {
        woord: "de motivatie",
        nl: "een tekst waarin je uitlegt waarom je iets wilt",
        en: "motivation letter, cover letter",
        tr: "niyet mektubu, motivasyon yazısı",
        voorbeeld: "Stuur een korte motivatie met je cv."
      },
      {
        woord: "het milieu",
        nl: "de natuur en de wereld om ons heen",
        en: "the environment",
        tr: "çevre",
        voorbeeld: "Fietsen is beter voor het milieu dan autorijden."
      },
      {
        woord: "de uitstoot",
        nl: "schadelijke stoffen die in de lucht komen, bijvoorbeeld van een auto",
        en: "emissions",
        tr: "emisyon, salınım",
        voorbeeld: "Een fiets heeft geen uitstoot."
      },
      {
        woord: "stelen",
        nl: "iets van iemand anders pakken zonder toestemming",
        en: "to steal",
        tr: "çalmak",
        voorbeeld: "Fietsen worden in de stad vaak gestolen."
      }
    ],
    vragen: [
      {
        type: "mc",
        vraag: "Wat betekent 'vers' in deze zin: 'Het brood is elke ochtend vers'?",
        opties: ["Oud en droog", "Net gemaakt, niet oud", "Heel duur", "Heel goedkoop"],
        antwoord: 1,
        uitleg: {
          nl: "'Vers' betekent dat iets net gemaakt is en niet oud is.",
          en: "'Vers' means something is freshly made, not old.",
          tr: "'Vers' bir şeyin yeni yapıldığı ve eski olmadığı anlamına gelir."
        }
      },
      {
        type: "mc",
        vraag: "Welk woord past bij: 'iemand die voor een bedrijf werkt'?",
        opties: ["de bakkerij", "de medewerker", "de sfeer", "het milieu"],
        antwoord: 1,
        uitleg: {
          nl: "'De medewerker' is iemand die voor een bedrijf of organisatie werkt.",
          en: "'De medewerker' is someone who works for a company or organization.",
          tr: "'De medewerker' bir şirket veya kurum için çalışan kişidir."
        }
      },
      {
        type: "mc",
        vraag: "Wat is het tegenovergestelde effect van 'uitstoot' op het milieu?",
        opties: [
          "Uitstoot is altijd goed voor het milieu",
          "Uitstoot is schadelijk voor het milieu",
          "Uitstoot heeft geen effect op het milieu",
          "Uitstoot bestaat alleen bij fietsen"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Uitstoot bestaat uit schadelijke stoffen die in de lucht komen; dat is slecht voor het milieu.",
          en: "Emissions are harmful substances released into the air; that is bad for the environment.",
          tr: "Emisyonlar havaya salınan zararlı maddelerdir; bu çevre için kötüdür."
        }
      },
      {
        type: "invoer",
        vraag: "Wat is het Nederlandse woord voor 'bakery'?",
        antwoord: "bakkerij|de bakkerij",
        uitleg: {
          nl: "'De bakkerij' is de plek waar brood wordt gebakken en verkocht.",
          en: "'De bakkerij' is the place where bread is baked and sold.",
          tr: "'De bakkerij', ekmeğin pişirildiği ve satıldığı yerdir."
        }
      },
      {
        type: "invoer",
        vraag: "Wat is het Nederlandse woord voor 'to steal'?",
        antwoord: "stelen",
        uitleg: {
          nl: "'Stelen' betekent iets van iemand anders pakken zonder toestemming.",
          en: "'Stelen' means to take something from someone else without permission.",
          tr: "'Stelen', başka birinden izinsiz bir şey almak demektir."
        }
      },
      {
        type: "gat",
        zin: "Ik koop elke ochtend vers brood bij de ___.",
        antwoord: "bakkerij",
        uitleg: {
          nl: "De zin gaat over de plek waar je brood koopt: de bakkerij.",
          en: "The sentence is about the place where you buy bread: the bakery.",
          tr: "Cümle ekmek satın aldığınız yerle ilgilidir: fırın."
        }
      },
      {
        type: "gat",
        zin: "Een fiets is beter voor het ___ dan een auto, omdat een fiets geen uitstoot heeft.",
        antwoord: "milieu",
        uitleg: {
          nl: "De zin gaat over de natuur en de wereld om ons heen: het milieu.",
          en: "The sentence is about nature and the world around us: the environment.",
          tr: "Cümle doğa ve çevremizdeki dünya ile ilgilidir: çevre."
        }
      },
      {
        type: "gat",
        zin: "De winkel zoekt een nieuwe ___ die klanten kan helpen.",
        antwoord: "medewerker",
        uitleg: {
          nl: "De zin gaat over iemand die voor het bedrijf gaat werken: een medewerker.",
          en: "The sentence is about someone who will work for the company: an employee.",
          tr: "Cümle şirket için çalışacak biriyle ilgilidir: bir çalışan."
        }
      }
    ]
  });
})();
