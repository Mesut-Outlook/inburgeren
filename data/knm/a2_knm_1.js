/* data/knm/a2_knm_1.js
 * KNM example questions based on exam notes.
 * Registered via INB.registerExamen.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-1",
    vak: "knm",
    jaar: 2026,
    bron: "voorbeeld",
    titel: "KNM Oefenexamen — Werk, School en Gezondheid",
    niveau: "A2",
    geslaagdVanaf: 8,
    teksten: [
      {
        titel: "Gezondheidszorg en Noodgevallen",
        html: "<p>In Nederland regelen we noodgevallen en zorg via specifieke regels en instanties. Het is belangrijk om te weten wie u moet bellen.</p>",
        vragen: [
          {
            vraag: "Een kind valt tijdens het spelen en breekt zijn been. Welk nummer moet u bellen?",
            opties: [
              "De huisarts",
              "De huisartsenpost",
              "112 (het noodnummer)"
            ],
            antwoord: 2,
            uitleg: {
              nl: "Bij een levensbedreigende situatie of een ernstig ongeval (zoals een gebroken been) belt u direct 112.",
              en: "In a life-threatening situation or a serious accident (such as a broken leg), you call 112 immediately.",
              tr: "Hayati tehlike olan veya ciddi kazaların yaşandığı durumlarda (kırık bacak gibi) hemen 112 aranır."
            }
          },
          {
            vraag: "Uw man krijgt in het weekend plotseling zware koorts. U wilt advies van een arts. Wie belt u?",
            opties: [
              "De huisartsenpost (HAP)",
              "De apotheek",
              "112"
            ],
            antwoord: 0,
            uitleg: {
              nl: "Voor medische hulp in de avond, de nacht of het weekend (buiten kantoortijden) belt u de huisartsenpost.",
              en: "For medical assistance during evenings, nights, or weekends (outside working hours), call the out-of-hours GP station (huisartsenpost).",
              tr: "Akşam, gece veya hafta sonu (mesai saatleri dışında) tıbbi yardım ve danışma için nöbetçi aile hekimi merkezi (huisartsenpost) aranır."
            }
          },
          {
            vraag: "U heeft al drie dagen last van oorpijn en wilt naar een specialist in het ziekenhuis. Wat moet u eerst doen?",
            opties: [
              "Direct naar het ziekenhuis gaan",
              "Een afspraak maken met uw huisarts voor een verwijsbrief",
              "De apotheek bellen"
            ],
            antwoord: 1,
            uitleg: {
              nl: "In Nederland moet u altijd eerst naar de huisarts. De huisarts geeft een verwijsbrief voor het ziekenhuis.",
              en: "In the Netherlands, you must always visit the GP first. The GP provides a referral letter (verwijsbrief) for the hospital.",
              tr: "Hollanda'da uzman doktora gitmeden önce aile hekimine (huisarts) gitmeniz gerekir. Aile hekimi hastane sevk yazısı (verwijsbrief) hazırlar."
            }
          }
        ]
      },
      {
        titel: "Wonen en Verzekeringen",
        html: "<p>Bij het huren of kopen van een huis in Nederland krijgt u te maken met verschillende kosten en verzekeringen.</p>",
        vragen: [
          {
            vraag: "U heeft een koopwoning. Tijdens een zware storm vallen de dakpannen van uw dak en raakt het dak beschadigd. Welke verzekering dekt deze schade?",
            opties: [
              "De inboedelverzekering",
              "De aansprakelijkheidsverzekering",
              "De opstalverzekering"
            ],
            antwoord: 2,
            uitleg: {
              nl: "De opstalverzekering is voor schade aan het huis zelf (muren, dak). De inboedelverzekering is voor spullen in het huis.",
              en: "The building insurance (opstalverzekering) covers damage to the house structure (walls, roof). Contents insurance (inboedel) covers items inside the house.",
              tr: "Bina sigortası (opstalverzekering), evin yapısına (duvarlar, çatı) gelen zararları karşılar. Eşya sigortası (inboedel) ise ev içindeki eşyaları kapsar."
            }
          },
          {
            vraag: "De dochter van uw buren speelt in uw tuin en breekt per ongeluk uw dure tuinset. Welke verzekering van de buren betaalt dit?",
            opties: [
              "De aansprakelijkheidsverzekering (AVP)",
              "De inboedelverzekering",
              "De opstalverzekering"
            ],
            antwoord: 0,
            uitleg: {
              nl: "De aansprakelijkheidsverzekering betaalt schade die jij (of je kinderen/huisdieren) per ongeluk aan een ander geeft.",
              en: "Liability insurance (aansprakelijkheidsverzekering) covers damage you, your children, or pets accidentally cause to others.",
              tr: "Sorumluluk sigortası (aansprakelijkheidsverzekering), sizin veya çocuğunuzun/evcil hayvanınızın başkalarının eşyalarına kazara verdiği zararları karşılar."
            }
          }
        ]
      },
      {
        titel: "Het Nederlandse Onderwijssysteem",
        html: "<p>Het Nederlandse schoolstelsel begint bij de basisschool en splits zich daarna op in verschillende niveaus.</p>",
        vragen: [
          {
            vraag: "Uw kind is 12 jaar en zit in groep 8 van de basisschool. Wie bepaalt naar welk niveau de leerling op de middelbare school gaat?",
            opties: [
              "Alleen de ouders",
              "De basisschool geeft een schooladvies op basis van de resultaten van het kind",
              "De gemeente"
            ],
            antwoord: 1,
            uitleg: {
              nl: "De leraar van groep 8 geeft een schooladvies (schooladvies). Dit advies is leidend voor de inschrijving op de middelbare school.",
              en: "The teacher of Group 8 gives a school recommendation (schooladvies) based on student performance. This recommendation is primary for high school enrollment.",
              tr: "İlkokul son sınıftaki (groep 8) öğretmen, çocuğun ders başarılarına göre bir okul tavsiyesi (schooladvies) hazırlar. Ortaokula kayıtta bu tavsiye belirleyicidir."
            }
          },
          {
            vraag: "Een leerling wil kapper of automonteur worden. Welke route is het meest geschikt?",
            opties: [
              "VMBO en daarna MBO (middelbaar beroepsonderwijs)",
              "HAVO en daarna HBO (hoger beroepsonderwijs)",
              "VWO en daarna Universiteit"
            ],
            antwoord: 0,
            uitleg: {
              nl: "Het VMBO en MBO zijn gericht op praktisch werk en beroepsopleidingen.",
              en: "VMBO followed by MBO is focused on vocational training and practical professions (like hairdresser or mechanic).",
              tr: "Pratik meslekler (kuaförlük, oto tamirciliği vb.) için en uygun rota VMBO ortaokulu ve ardından MBO meslek okuludur."
            }
          }
        ]
      },
      {
        titel: "Nederlandse Geschiedenis en Water",
        html: "<p>Nederland heeft een lange geschiedenis van strijd tegen het water en belangrijke historische periodes.</p>",
        vragen: [
          {
            vraag: "In 1953 was er een grote watersnoodramp in Nederland (Zeeland). Wat heeft Nederland daarna gebouwd om zich te beschermen?",
            opties: [
              "De Afsluitdijk",
              "De Deltawerken",
              "De grachten van Amsterdam"
            ],
            antwoord: 1,
            uitleg: {
              nl: "Na de watersnoodramp van 1953 startte Nederland met de bouw van de Deltawerken om Zeeland en Zuid-Holland te beschermen.",
              en: "After the 1953 flood, the Netherlands built the Delta Works (Deltawerken) to protect the coastal regions of Zeeland and Zuid-Holland.",
              tr: "1953 büyük sel felaketinden sonra Hollanda, Zeeland ve Zuid-Holland bölgelerini korumak amacıyla devasa su barajları sistemi olan 'Deltawerken'i inşa etmiştir."
            }
          },
          {
            vraag: "Wie schreef een beroemd dagboek tijdens haar onderduikperiode in de Tweede Wereldoorlog in Amsterdam?",
            opties: [
              "Koningin Wilhelmina",
              "Anne Frank",
              "Maxima"
            ],
            antwoord: 1,
            uitleg: {
              nl: "Anne Frank schreef haar beroemde dagboek in het Achterhuis in Amsterdam tijdens de Duitse bezetting.",
              en: "Anne Frank wrote her famous diary while hiding in the 'Achterhuis' in Amsterdam during the German occupation.",
              tr: "Anne Frank, 2. Dünya Savaşı'nda Nazi işgali altındaki Amsterdam'da saklanırken meşhur günlüğünü yazmıştır."
            }
          }
        ]
      },
      {
        titel: "Staatsinrichting en Wetten",
        html: "<p>De Nederlandse staat heeft democratische regels en grondrechten voor iedereen die in het land woont.</p>",
        vragen: [
          {
            vraag: "U woont 6 jaar legaal in Nederland en heeft nog geen Nederlands paspoort. Waar mag u voor stemmen?",
            opties: [
              "U mag stemmen voor de gemeenteraad (lokale verkiezingen)",
              "U mag stemmen voor de Tweede Kamer (nationale verkiezingen)",
              "U mag nergens voor stemmen"
            ],
            antwoord: 0,
            uitleg: {
              nl: "Als buitenlander die langer dan 5 jaar legaal in Nederland woont, mag u stemmen voor de gemeenteraad.",
              en: "Foreigners residing legally in the Netherlands for more than 5 years have the right to vote in local municipal elections.",
              tr: "Hollanda'da 5 yıldan uzun süredir yasal olarak ikamet eden yabancılar, yerel belediye seçimlerinde (gemeenteraad verkiezingen) oy kullanma hakkına sahiptir."
            }
          },
          {
            vraag: "Wie maakt de wetten in Nederland?",
            opties: [
              "De Koning alleen",
              "De Rechters",
              "Het Parlement (de Eerste en Tweede Kamer) samen met de regering"
            ],
            antwoord: 2,
            uitleg: {
              nl: "In Nederland is de regering samen met het parlement de wetgever. Rechters maken geen wetten, maar controleren de naleving.",
              en: "In the Netherlands, laws are created by the parliament and the government together.",
              tr: "Hollanda'da yasaları hükümet ve parlamento ortaklaşa hazırlar ve kabul eder."
            }
          }
        ]
      }
    ]
  });
})();
