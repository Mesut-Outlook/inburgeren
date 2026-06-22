(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-thema-7-onderwijs",
    vak: "knm",
    niveau: "A2",
    bron: "oefentoets",
    titel: "KNM — Thema 7: Onderwijs en opvoeding",
    geslaagdVanaf: 9,
    teksten: [
      {
        titel: "Onderwijs en opvoeding",
        html: "<p>Vragen over de leerplicht, de basisschool, het voortgezet onderwijs en de opvoeding van kinderen in Nederland.</p>",
        vragen: [
          {
            vraag: "Tot welke leeftijd is een kind in Nederland leerplichtig?",
            opties: ["14 jaar", "16 jaar", "18 jaar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Kinderen zijn leerplichtig tot 16 jaar. Daarna geldt tot 18 jaar de kwalificatieplicht: je moet een startkwalificatie halen.",
              en: "Children are required to attend school until age 16. After that, until age 18, the qualification duty applies: you must obtain a basic qualification.",
              tr: "Çocuklar 16 yaşına kadar okula devam etmek zorundadır. Bundan sonra 18 yaşına kadar 'yeterlilik zorunluluğu' geçerlidir: bir temel yeterlilik diploması almak gerekir."
            }
          },
          {
            vraag: "Vanaf welke leeftijd begint de leerplicht in Nederland?",
            opties: ["4 jaar", "5 jaar", "6 jaar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De leerplicht begint op de eerste dag van de maand nadat een kind 5 jaar is geworden. Veel kinderen gaan al vanaf 4 jaar naar school.",
              en: "Compulsory education starts on the first day of the month after a child turns 5. Many children already start school at age 4.",
              tr: "Zorunlu eğitim, çocuğun 5 yaşına girdiği ayı takip eden ayın ilk günü başlar. Birçok çocuk zaten 4 yaşında okula başlar."
            }
          },
          {
            vraag: "Hoeveel jaar duurt het vwo (Voorbereidend Wetenschappelijk Onderwijs)?",
            opties: ["4 jaar", "5 jaar", "6 jaar"],
            antwoord: 2,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het vwo duurt 6 jaar en bereidt voor op de universiteit.",
              en: "VWO takes 6 years and prepares students for university.",
              tr: "VWO 6 yıl sürer ve öğrencileri üniversiteye hazırlar."
            }
          },
          {
            vraag: "Hoeveel jaar duurt het vmbo?",
            opties: ["4 jaar", "5 jaar", "6 jaar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het vmbo duurt 4 jaar en bereidt voor op een beroep, vaak gevolgd door het mbo.",
              en: "VMBO takes 4 years and prepares students for a profession, often followed by MBO.",
              tr: "VMBO 4 yıl sürer ve öğrencileri bir mesleğe hazırlar, genellikle ardından MBO'ya geçilir."
            }
          },
          {
            vraag: "Wat betekent vwo?",
            opties: [
              "Voorbereidend Wetenschappelijk Onderwijs",
              "Voortgezet Werk Onderwijs",
              "Vrij Wetenschappelijk Opleidingsniveau"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Vwo staat voor Voorbereidend Wetenschappelijk Onderwijs, het schooltype dat voorbereidt op de universiteit.",
              en: "VWO stands for pre-university education, the school type that prepares students for university.",
              tr: "VWO, üniversiteye hazırlık eğitimi anlamına gelir."
            }
          },
          {
            vraag: "Op welke school leer je vooral een beroep?",
            opties: ["Het vmbo", "Het vwo", "Het gymnasium"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het vmbo (voorbereidend middelbaar beroepsonderwijs) is praktisch gericht en bereidt voor op een beroep.",
              en: "VMBO (pre-vocational secondary education) is practically oriented and prepares students for a profession.",
              tr: "VMBO (mesleğe yönelik orta öğretim hazırlık) pratiğe dayalıdır ve öğrencileri bir mesleğe hazırlar."
            }
          },
          {
            vraag: "Wat is een Cito-toets?",
            opties: [
              "De test aan het einde van de basisschool",
              "Een examen voor volwassenen",
              "Een sporttest op school"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De Cito-toets (eindtoets) wordt aan het einde van de basisschool gemaakt en geeft een advies voor het voortgezet onderwijs.",
              en: "The Cito test (final test) is taken at the end of primary school and gives advice for secondary education.",
              tr: "Cito testi (bitiş testi), ilkokulun sonunda yapılır ve orta öğretim için bir öneri sunar."
            }
          },
          {
            vraag: "Wat is de brugklas?",
            opties: [
              "De klas waarin de definitieve schoolkeuze nog wordt uitgesteld",
              "De laatste klas van het vwo",
              "Een speciale klas voor kinderen met leerproblemen"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "In de brugklas, het eerste jaar van het voortgezet onderwijs, wordt de definitieve niveaukeuze nog even uitgesteld.",
              en: "In the bridging class (brugklas), the first year of secondary school, the final level choice is postponed for a while.",
              tr: "Köprü sınıfında (brugklas), orta öğretimin ilk yılında, kesin seviye seçimi bir süre ertelenir."
            }
          },
          {
            vraag: "Is de basisschool gratis in Nederland?",
            opties: [
              "Ja, maar ouders betalen vaak een vrijwillige ouderbijdrage en overblijfkosten",
              "Nee, school is altijd duur",
              "Ja, helemaal gratis, ook schoolreisjes"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Onderwijs op de basisschool is gratis, maar scholen vragen vaak een vrijwillige ouderbijdrage en geld voor overblijven of schoolreisjes.",
              en: "Primary education is free, but schools often ask for a voluntary parental contribution and money for after-school care or school trips.",
              tr: "İlkokul eğitimi ücretsizdir, ancak okullar genellikle gönüllü bir veli katkısı ve okul gezileri için para talep eder."
            }
          },
          {
            vraag: "Waarvoor gebruik je vaak de vrijwillige ouderbijdrage op school?",
            opties: ["Schoolreisjes en extra activiteiten", "Het salaris van de leraar", "De huur van het schoolgebouw"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De vrijwillige ouderbijdrage wordt gebruikt voor extra activiteiten, zoals schoolreisjes en feesten.",
              en: "The voluntary parental contribution is used for extra activities, such as school trips and parties.",
              tr: "Gönüllü veli katkısı, okul gezileri ve etkinlikler gibi ek faaliyetler için kullanılır."
            }
          },
          {
            vraag: "Ouders van kinderen tot 4 jaar krijgen advies over groei en gezondheid bij het consultatiebureau.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het consultatiebureau geeft ouders van jonge kinderen (tot 4 jaar) advies over groei, gezondheid en opvoeding.",
              en: "The well-baby clinic (consultatiebureau) gives parents of young children (up to age 4) advice on growth, health, and upbringing.",
              tr: "Bebek-çocuk sağlık merkezi (consultatiebureau), küçük çocukların (4 yaşına kadar) ailelerine büyüme, sağlık ve çocuk yetiştirme konularında tavsiyelerde bulunur."
            }
          },
          {
            vraag: "Wat zijn klaar-overs?",
            opties: [
              "Mensen die kinderen helpen oversteken bij school",
              "Leraren die extra les geven na school",
              "Ouders die op school helpen koken"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Klaar-overs zijn vrijwilligers die kinderen veilig helpen oversteken bij een drukke weg in de buurt van school.",
              en: "Klaar-overs are volunteers who help children safely cross busy roads near schools.",
              tr: "Klaar-over'lar, okul çevresindeki yoğun yollarda çocukların güvenli geçişine yardımcı olan gönüllülerdir."
            }
          },
          {
            vraag: "Uw zoon wil een lange studie volgen om dokter te worden, maar u wilt liever dat hij snel gaat werken. Wat doet u het beste?",
            opties: [
              "U zegt dat hij zelf mag beslissen over zijn studie en beroep",
              "U verbiedt hem om de studie te volgen",
              "U regelt zelf een andere opleiding voor hem"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "In Nederland mogen kinderen zelf hun studie- en beroepskeuze maken; ouders beslissen hier niet alleen over.",
              en: "In the Netherlands, children may make their own choice of study and profession; parents do not decide this alone.",
              tr: "Hollanda'da çocuklar kendi eğitim ve meslek seçimlerini kendileri yapabilirler; ebeveynler bu konuda tek başına karar vermez."
            }
          }
        ]
      }
    ]
  });
})();
