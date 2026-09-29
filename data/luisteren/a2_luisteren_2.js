/* a2_luisteren_2.js — Luisteren A2, oefenexamen 2 (eigen materiaal, geen DUO-tekst).
 * Schema: zie a2_luisteren_1.js. Audio: node tools/gen_luisteren_audio.js <dit bestand> */
(function(){
  "use strict";
  window.INB = window.INB || {};
  window.INB.registerExamen({
    id: "a2-luisteren-2",
    vak: "luisteren",
    niveau: "A2",
    bron: "eigen",
    titel: "Luisteren A2 — Oefenexamen 2",
    geslaagdVanaf: 16,
    teksten: [
      {
        titel: "Voicemail van de tandarts",
        situatie: "Meneer Kaya krijgt een bericht van de tandartspraktijk.",
        audio: [
          { spreker: "v", tekst: "Goedemiddag meneer Kaya, u spreekt met Linda van tandartspraktijk Het Witte Huis. U heeft maandag om twee uur een controle. De tandarts moet die middag naar een cursus. Daarom hebben we uw afspraak verzet naar donderdag om kwart over negen. Wilt u uw zorgpas meenemen? Tot donderdag!" }
        ],
        vragen: [
          {
            vraag: "Waarom belt Linda?",
            opties: ["De afspraak is naar een andere dag verzet.", "Meneer Kaya is zijn afspraak vergeten.", "De tandarts is op vakantie."],
            antwoord: 0,
            uitleg: {
              nl: "De tandarts gaat naar een cursus, daarom is de afspraak 'verzet naar donderdag'. Verzetten = naar een ander moment zetten.",
              en: "The dentist is going to a course, so the appointment was 'verzet' (moved) to Thursday.",
              tr: "Diş hekimi kursa gidiyor, bu yüzden randevu perşembeye 'verzet' (ertelendi/taşındı)."
            }
          },
          {
            vraag: "Wat moet meneer Kaya meenemen?",
            opties: ["zijn paspoort", "zijn zorgpas", "een brief van de huisarts"],
            antwoord: 1,
            uitleg: {
              nl: "'Wilt u uw zorgpas meenemen?' De zorgpas is het pasje van de zorgverzekering.",
              en: "'Would you bring your zorgpas?' — the health insurance card.",
              tr: "'Zorgpas'ınızı getirir misiniz?' Zorgpas = sağlık sigortası kartı."
            }
          }
        ]
      },
      {
        titel: "Omroep in de supermarkt",
        situatie: "U bent in de supermarkt en hoort een bericht.",
        audio: [
          { spreker: "n", tekst: "Beste klanten, welkom in onze winkel. Vandaag hebben we een mooie aanbieding: twee pakken koffie voor de prijs van één. Let op: vanwege de feestdag sluit de winkel vandaag om zes uur, en niet om acht uur. Wij wensen u een fijne dag." }
        ],
        vragen: [
          {
            vraag: "Wat is de aanbieding?",
            opties: ["koffie voor de halve prijs", "één pak koffie gratis bij thee", "twee pakken koffie voor de prijs van één"],
            antwoord: 2,
            uitleg: {
              nl: "'Twee pakken koffie voor de prijs van één.' U betaalt één pak en krijgt er twee.",
              en: "'Two packs of coffee for the price of one.'",
              tr: "'Bir fiyatına iki paket kahve.' Bir paket ödeyip iki paket alıyorsunuz."
            }
          },
          {
            vraag: "Hoe laat gaat de winkel vandaag dicht?",
            opties: ["om 18.00 uur", "om 20.00 uur", "om 16.00 uur"],
            antwoord: 0,
            uitleg: {
              nl: "'De winkel sluit vandaag om zes uur, en niet om acht uur.' Zes uur 's avonds = 18.00 uur.",
              en: "'The shop closes today at six, not at eight' = 18:00.",
              tr: "'Mağaza bugün sekizde değil, altıda kapanıyor' = 18.00."
            }
          }
        ]
      },
      {
        titel: "De verwarming is kapot",
        situatie: "Nadia belt met haar woningcorporatie.",
        audio: [
          { spreker: "v", tekst: "Goedemorgen, met Nadia Amrani, Lindelaan zeven. De verwarming in mijn huis doet het niet. Het is erg koud." },
          { spreker: "m", tekst: "Vervelend, mevrouw. Ik stuur morgenochtend een monteur, tussen acht en tien uur. Bent u dan thuis?" },
          { spreker: "v", tekst: "Nee, dan moet ik werken. Maar mijn buurvrouw op nummer negen heeft een sleutel." },
          { spreker: "m", tekst: "Prima. Dan haalt de monteur de sleutel bij uw buurvrouw." }
        ],
        vragen: [
          {
            vraag: "Wat is het probleem?",
            opties: ["Er is water in de keuken.", "De verwarming werkt niet.", "Nadia is haar sleutel kwijt."],
            antwoord: 1,
            uitleg: {
              nl: "'De verwarming in mijn huis doet het niet.' 'Het doet het niet' = het werkt niet.",
              en: "'The heating doesn't work.' ('het doet het niet' = it doesn't work)",
              tr: "'Evimdeki kalorifer çalışmıyor.' 'Het doet het niet' = çalışmıyor."
            }
          },
          {
            vraag: "Hoe komt de monteur morgen in het huis?",
            opties: ["Nadia blijft thuis.", "De monteur heeft zelf een sleutel.", "Hij haalt de sleutel bij de buurvrouw."],
            antwoord: 2,
            uitleg: {
              nl: "Nadia moet werken, maar 'mijn buurvrouw heeft een sleutel'. De monteur haalt de sleutel daar.",
              en: "Nadia has to work, but her neighbour has a key; the mechanic will pick it up there.",
              tr: "Nadia çalışacak, ama komşusunda anahtar var; tamirci anahtarı oradan alacak."
            }
          }
        ]
      },
      {
        titel: "Op het consultatiebureau",
        situatie: "Een verpleegkundige praat met de moeder van Aya.",
        audio: [
          { spreker: "v", tekst: "Uw dochter Aya is nu bijna vier jaar. Dan mag ze naar de basisschool. U moet haar wel eerst inschrijven bij een school. Doe dat op tijd, want de school in uw wijk is erg vol." }
        ],
        vragen: [
          {
            vraag: "Wat moet de moeder doen?",
            opties: ["Aya inschrijven bij een school", "een nieuwe afspraak maken", "Aya naar de kinderopvang brengen"],
            antwoord: 0,
            uitleg: {
              nl: "'U moet haar wel eerst inschrijven bij een school.'",
              en: "'You do have to register her at a school first.'",
              tr: "'Önce onu bir okula kaydettirmeniz gerekiyor.'"
            }
          },
          {
            vraag: "Waarom moet de moeder dat op tijd doen?",
            opties: ["Aya is al vier jaar.", "De school in de wijk is erg vol.", "De inschrijving kost geld."],
            antwoord: 1,
            uitleg: {
              nl: "'Doe dat op tijd, want de school in uw wijk is erg vol.' Na 'want' komt de reden.",
              en: "'Do it in time, because the school in your area is very full.' 'Want' gives the reason.",
              tr: "'Zamanında yapın, çünkü mahallenizdeki okul çok dolu.' 'Want' = çünkü."
            }
          }
        ]
      },
      {
        titel: "Ziek melden",
        situatie: "Karim belt 's ochtends naar zijn werk.",
        audio: [
          { spreker: "m", tekst: "Goedemorgen, met Karim. Ik kan vandaag niet komen werken. Ik ben ziek, ik heb koorts." },
          { spreker: "v", tekst: "O, wat vervelend. Blijf maar lekker thuis. Wil je morgen voor tien uur bellen? Dan weet ik of je weer kunt komen." },
          { spreker: "m", tekst: "Ja, dat doe ik. Dank je wel." }
        ],
        vragen: [
          {
            vraag: "Wat moet Karim morgen doen?",
            opties: ["om tien uur op het werk zijn", "naar de huisarts gaan", "voor tien uur naar zijn werk bellen"],
            antwoord: 2,
            uitleg: {
              nl: "De leidinggevende vraagt: 'Wil je morgen voor tien uur bellen?'",
              en: "The manager asks: 'Will you call tomorrow before ten?'",
              tr: "Yönetici 'Yarın saat ondan önce arar mısın?' diye soruyor."
            }
          }
        ]
      },
      {
        titel: "Het zwembad",
        situatie: "U hoort een bericht op de telefoon van het zwembad.",
        audio: [
          { spreker: "n", tekst: "Welkom bij zwembad De Golf. Let op: vanaf maandag is het zwembad drie weken gesloten voor onderhoud. De zwemlessen voor kinderen gaan wel door, in het zwembad aan de Parkstraat. Heeft u een abonnement? Dan wordt het abonnement met drie weken verlengd." }
        ],
        vragen: [
          {
            vraag: "Waarom is zwembad De Golf gesloten?",
            opties: ["Er is te weinig personeel.", "Het is vakantie.", "Er wordt onderhoud gedaan."],
            antwoord: 2,
            uitleg: {
              nl: "'Gesloten voor onderhoud.' Onderhoud = dingen repareren en schoonmaken.",
              en: "'Closed for maintenance.'",
              tr: "'Bakım nedeniyle kapalı.' Onderhoud = bakım/onarım."
            }
          },
          {
            vraag: "Waar zijn de zwemlessen de komende drie weken?",
            opties: ["in zwembad De Golf", "in het zwembad aan de Parkstraat", "er zijn geen zwemlessen"],
            antwoord: 1,
            uitleg: {
              nl: "'De zwemlessen gaan wel door, in het zwembad aan de Parkstraat.'",
              en: "'Swimming lessons do continue, in the pool on Parkstraat.'",
              tr: "'Yüzme dersleri devam ediyor, Parkstraat'taki havuzda.'"
            }
          }
        ]
      },
      {
        titel: "Bij de kaartautomaat",
        situatie: "Een vrouw op het station vraagt hulp aan een medewerker.",
        audio: [
          { spreker: "v", tekst: "Pardon, mijn OV-chipkaart doet het niet. Ik kan niet door het poortje." },
          { spreker: "m", tekst: "Even kijken. Er staat geen geld meer op uw kaart. U kunt geld opladen bij de gele automaat daar." },
          { spreker: "v", tekst: "Kan ik contant betalen?" },
          { spreker: "m", tekst: "Nee, bij deze automaat kan alleen pinnen." }
        ],
        vragen: [
          {
            vraag: "Wat is het probleem met de OV-chipkaart?",
            opties: ["Er staat geen geld meer op.", "De kaart is kapot.", "De kaart is te oud."],
            antwoord: 0,
            uitleg: {
              nl: "'Er staat geen geld meer op uw kaart.'",
              en: "'There is no more money on your card.'",
              tr: "'Kartınızda artık para yok.'"
            }
          },
          {
            vraag: "Hoe kan de vrouw betalen bij de automaat?",
            opties: ["alleen contant", "met contant geld of pinpas", "alleen met haar pinpas"],
            antwoord: 2,
            uitleg: {
              nl: "'Bij deze automaat kan alleen pinnen.' Pinnen = betalen met een bankpas.",
              en: "'At this machine you can only pay by card (pinnen).'",
              tr: "'Bu makinede sadece kartla ödeme (pinnen) yapılabilir.'"
            }
          }
        ]
      },
      {
        titel: "Het verkeersbericht",
        situatie: "U luistert naar de radio in de auto.",
        audio: [
          { spreker: "n", tekst: "Het verkeer. Op de A12 bij Utrecht staat een file van acht kilometer. Er is een ongeluk gebeurd. Moet u vanochtend naar Utrecht? Neem dan als het kan de trein, of vertrek wat later." }
        ],
        vragen: [
          {
            vraag: "Wat is het advies in het verkeersbericht?",
            opties: ["een andere snelweg nemen", "de trein nemen of later vertrekken", "thuis blijven"],
            antwoord: 1,
            uitleg: {
              nl: "'Neem dan als het kan de trein, of vertrek wat later.'",
              en: "'Take the train if possible, or leave a bit later.'",
              tr: "'Mümkünse trene binin ya da biraz daha geç çıkın.'"
            }
          }
        ]
      },
      {
        titel: "Bij de huisarts",
        situatie: "De huisarts praat met meneer Jansen.",
        audio: [
          { spreker: "m", tekst: "Meneer Jansen, u heeft griep. Daar zijn geen medicijnen voor. Drink veel water en neem veel rust. Heeft u hoofdpijn, dan kunt u een paracetamol nemen. Heeft u na een week nog steeds koorts? Kom dan terug." }
        ],
        vragen: [
          {
            vraag: "Wat kan meneer Jansen doen als hij hoofdpijn heeft?",
            opties: ["een paracetamol nemen", "de huisarts bellen", "veel koffie drinken"],
            antwoord: 0,
            uitleg: {
              nl: "'Heeft u hoofdpijn, dan kunt u een paracetamol nemen.'",
              en: "'If you have a headache, you can take a paracetamol.'",
              tr: "'Başınız ağrırsa bir parasetamol alabilirsiniz.'"
            }
          },
          {
            vraag: "Wanneer moet meneer Jansen terugkomen?",
            opties: ["morgen", "als hij na een week nog koorts heeft", "over twee weken"],
            antwoord: 1,
            uitleg: {
              nl: "'Heeft u na een week nog steeds koorts? Kom dan terug.'",
              en: "'Do you still have a fever after a week? Then come back.'",
              tr: "'Bir hafta sonra hâlâ ateşiniz varsa tekrar gelin.'"
            }
          }
        ]
      },
      {
        titel: "Bericht van school",
        situatie: "De juf vertelt iets aan de ouders na schooltijd.",
        audio: [
          { spreker: "v", tekst: "Beste ouders, volgende week dinsdag is er een ouderavond. We praten dan over het schoolreisje naar de dierentuin. Het schoolreisje kost vijftien euro per kind. U kunt betalen tot het einde van de maand." }
        ],
        vragen: [
          {
            vraag: "Waarover praten ze op de ouderavond?",
            opties: ["over de rapporten", "over het schoolreisje", "over de nieuwe juf"],
            antwoord: 1,
            uitleg: {
              nl: "'We praten dan over het schoolreisje naar de dierentuin.'",
              en: "'We will talk about the school trip to the zoo.'",
              tr: "'Hayvanat bahçesine okul gezisi hakkında konuşacağız.'"
            }
          },
          {
            vraag: "Hoeveel kost het schoolreisje?",
            opties: ["vijf euro", "vijftig euro", "vijftien euro"],
            antwoord: 2,
            uitleg: {
              nl: "'Het schoolreisje kost vijftien euro per kind.' Let op: vijftien = 15, vijftig = 50.",
              en: "'Fifteen euros per child.' Careful: vijftien = 15, vijftig = 50.",
              tr: "'Çocuk başına on beş euro.' Dikkat: vijftien = 15, vijftig = 50."
            }
          }
        ]
      },
      {
        titel: "Op de markt",
        situatie: "Een vrouw koopt fruit op de markt.",
        audio: [
          { spreker: "v", tekst: "Goedemorgen. Hoeveel kosten de appels?" },
          { spreker: "m", tekst: "Twee euro per kilo. Maar als u twee kilo neemt, betaalt u maar drie euro." },
          { spreker: "v", tekst: "Dan neem ik twee kilo." }
        ],
        vragen: [
          {
            vraag: "Hoeveel betaalt de vrouw?",
            opties: ["twee euro", "drie euro", "vier euro"],
            antwoord: 1,
            uitleg: {
              nl: "Ze neemt twee kilo, en voor twee kilo 'betaalt u maar drie euro'.",
              en: "She takes two kilos, and for two kilos you 'only pay three euros'.",
              tr: "İki kilo alıyor; iki kilo için 'sadece üç euro ödersiniz'."
            }
          }
        ]
      },
      {
        titel: "Grofvuil",
        situatie: "U hoort informatie van de gemeente over afval.",
        audio: [
          { spreker: "m", tekst: "Wilt u een oude bank, kast of matras weggooien? Zet het dan niet zomaar op straat. Maak eerst een afspraak via de website van de gemeente. De gemeente haalt het gratis bij u op, maar maximaal twee keer per jaar." }
        ],
        vragen: [
          {
            vraag: "U wilt een oude kast weggooien. Wat moet u eerst doen?",
            opties: ["de kast op straat zetten", "naar het gemeentehuis gaan", "een afspraak maken via de website"],
            antwoord: 2,
            uitleg: {
              nl: "'Maak eerst een afspraak via de website van de gemeente.'",
              en: "'First make an appointment via the municipality's website.'",
              tr: "'Önce belediyenin web sitesinden randevu alın.'"
            }
          },
          {
            vraag: "Hoe vaak haalt de gemeente grofvuil gratis op?",
            opties: ["maximaal twee keer per jaar", "elke maand", "één keer per jaar"],
            antwoord: 0,
            uitleg: {
              nl: "'Gratis, maar maximaal twee keer per jaar.'",
              en: "'Free, but at most twice a year.'",
              tr: "'Ücretsiz, ama yılda en fazla iki kez.'"
            }
          }
        ]
      },
      {
        titel: "Taalcafé in het buurthuis",
        situatie: "Een vrijwilliger vertelt over het buurthuis.",
        audio: [
          { spreker: "v", tekst: "In ons buurthuis is er elke woensdagochtend een taalcafé. U kunt daar Nederlands praten met vrijwilligers. U hoeft zich niet aan te melden, u kunt gewoon binnenlopen. Koffie en thee zijn gratis." }
        ],
        vragen: [
          {
            vraag: "Wat hoeft u niet te doen voor het taalcafé?",
            opties: ["koffie betalen", "u aanmelden", "Nederlands praten"],
            antwoord: 1,
            uitleg: {
              nl: "'U hoeft zich niet aan te melden, u kunt gewoon binnenlopen.' (Koffie is ook gratis, maar de vraag gaat over aanmelden.)",
              en: "'You don't need to sign up, you can just walk in.'",
              tr: "'Kayıt olmanıza gerek yok, doğrudan gelebilirsiniz.'"
            }
          }
        ]
      },
      {
        titel: "Naar de film",
        situatie: "Lisa belt met haar vriend Tom.",
        audio: [
          { spreker: "v", tekst: "Hoi Tom, zullen we zaterdag naar de film gaan?" },
          { spreker: "m", tekst: "Zaterdag kan ik niet, dan moet ik werken. Zondag kan ik wel." },
          { spreker: "v", tekst: "Oké. Zondagmiddag om drie uur, bij de bioscoop?" },
          { spreker: "m", tekst: "Goed, tot zondag!" }
        ],
        vragen: [
          {
            vraag: "Wanneer gaan Lisa en Tom naar de film?",
            opties: ["zaterdag om drie uur", "zondag om drie uur", "zondagavond"],
            antwoord: 1,
            uitleg: {
              nl: "Zaterdag moet Tom werken. Ze spreken af: 'zondagmiddag om drie uur'.",
              en: "Tom works on Saturday. They agree on 'Sunday afternoon at three'.",
              tr: "Tom cumartesi çalışıyor. 'Pazar öğleden sonra saat üçte' buluşuyorlar."
            }
          }
        ]
      },
      {
        titel: "Het uitzendbureau",
        situatie: "Meneer De Vries krijgt een voicemail van een uitzendbureau.",
        audio: [
          { spreker: "v", tekst: "Hallo meneer De Vries, met Sanne van uitzendbureau Werkplus. Goed nieuws: we hebben werk voor u gevonden, in een magazijn. U kunt maandag beginnen. Wilt u vrijdag bij ons langskomen om het contract te tekenen? Neem dan uw identiteitsbewijs en uw bankpas mee." }
        ],
        vragen: [
          {
            vraag: "Waarom moet meneer De Vries vrijdag naar het uitzendbureau?",
            opties: ["om het contract te tekenen", "om te beginnen met werken", "voor een sollicitatiegesprek"],
            antwoord: 0,
            uitleg: {
              nl: "'Wilt u vrijdag langskomen om het contract te tekenen?' Hij begint pas maandag.",
              en: "He should come on Friday 'to sign the contract'. He starts work on Monday.",
              tr: "Cuma günü 'sözleşmeyi imzalamak için' gelmeli. İşe pazartesi başlıyor."
            }
          },
          {
            vraag: "Wat moet hij meenemen?",
            opties: ["zijn diploma", "een pasfoto", "zijn identiteitsbewijs en bankpas"],
            antwoord: 2,
            uitleg: {
              nl: "'Neem dan uw identiteitsbewijs en uw bankpas mee.'",
              en: "'Bring your ID and your bank card.'",
              tr: "'Kimlik belgenizi ve banka kartınızı getirin.'"
            }
          }
        ]
      }
    ]
  });
})();
