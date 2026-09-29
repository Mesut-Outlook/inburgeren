/* a2_luisteren_3.js — Luisteren A2, oefenexamen 3 (eigen materiaal, geen DUO-tekst).
 * Schema: zie a2_luisteren_1.js. Audio: node tools/gen_luisteren_audio.js <dit bestand> */
(function(){
  "use strict";
  window.INB = window.INB || {};
  window.INB.registerExamen({
    id: "a2-luisteren-3",
    vak: "luisteren",
    niveau: "A2",
    bron: "eigen",
    titel: "Luisteren A2 — Oefenexamen 3",
    geslaagdVanaf: 16,
    teksten: [
      {
        titel: "Bij de bakker",
        situatie: "Een man koopt brood bij de bakker.",
        audio: [
          { spreker: "m", tekst: "Goedemorgen. Mag ik een volkorenbrood, gesneden?" },
          { spreker: "v", tekst: "Het volkorenbrood is helaas op. Ik heb nog wel een bruin brood." },
          { spreker: "m", tekst: "Dat is ook goed. En vier krentenbollen, graag." },
          { spreker: "v", tekst: "Dat is samen vijf euro twintig." }
        ],
        vragen: [
          {
            vraag: "Welk brood koopt de man?",
            opties: ["een volkorenbrood", "een wit brood", "een bruin brood"],
            antwoord: 2,
            uitleg: {
              nl: "Het volkorenbrood is op. De man zegt over het bruine brood: 'Dat is ook goed.'",
              en: "The wholemeal bread is sold out; he accepts the brown bread: 'That's fine too.'",
              tr: "Tam buğday ekmeği bitmiş; adam esmer ekmeği kabul ediyor: 'O da olur.'"
            }
          },
          {
            vraag: "Hoeveel moet de man betalen?",
            opties: ["€ 5,20", "€ 5,12", "€ 4,20"],
            antwoord: 0,
            uitleg: {
              nl: "'Dat is samen vijf euro twintig' = € 5,20.",
              en: "'Five euros twenty altogether' = €5.20.",
              tr: "'Hepsi beş euro yirmi' = 5,20 €."
            }
          }
        ]
      },
      {
        titel: "Verhuizing doorgeven",
        situatie: "Een medewerker van de gemeente geeft informatie over verhuizen.",
        audio: [
          { spreker: "v", tekst: "Gaat u verhuizen? Geef uw nieuwe adres dan door aan de gemeente. Dat kan online, met uw DigiD. Doe dit binnen vijf dagen na de verhuizing. De gemeente geeft uw nieuwe adres dan ook door aan de Belastingdienst." }
        ],
        vragen: [
          {
            vraag: "Hoe kunt u uw nieuwe adres doorgeven?",
            opties: ["met een brief aan de Belastingdienst", "online met uw DigiD", "alleen aan de balie van de gemeente"],
            antwoord: 1,
            uitleg: {
              nl: "'Dat kan online, met uw DigiD.' De gemeente geeft het zelf door aan de Belastingdienst.",
              en: "'You can do that online, with your DigiD.' The municipality informs the Tax Office itself.",
              tr: "'Bunu DigiD'nizle internetten yapabilirsiniz.' Belediye vergi dairesine kendisi bildiriyor."
            }
          },
          {
            vraag: "Wanneer moet u uw nieuwe adres doorgeven?",
            opties: ["binnen vijf dagen na de verhuizing", "een maand voor de verhuizing", "binnen vijf weken"],
            antwoord: 0,
            uitleg: {
              nl: "'Doe dit binnen vijf dagen na de verhuizing.'",
              en: "'Do this within five days after moving.'",
              tr: "'Bunu taşındıktan sonra beş gün içinde yapın.'"
            }
          }
        ]
      },
      {
        titel: "Een treinkaartje kopen",
        situatie: "Een vrouw staat aan het loket op het station.",
        audio: [
          { spreker: "v", tekst: "Goedemiddag. Een kaartje naar Rotterdam, alstublieft." },
          { spreker: "m", tekst: "Enkele reis of retour?" },
          { spreker: "v", tekst: "Retour. Ik kom vanavond terug." },
          { spreker: "m", tekst: "Dat is dertig euro veertig. De trein vertrekt over tien minuten van spoor drie." }
        ],
        vragen: [
          {
            vraag: "Wat voor kaartje koopt de vrouw?",
            opties: ["een enkele reis naar Rotterdam", "een retour naar Rotterdam", "een dagkaart voor de bus"],
            antwoord: 1,
            uitleg: {
              nl: "Ze zegt 'Retour. Ik kom vanavond terug.' Retour = heen en terug.",
              en: "She says 'Return, I'm coming back tonight.' Retour = there and back.",
              tr: "'Gidiş-dönüş. Bu akşam dönüyorum' diyor. Retour = gidiş-dönüş."
            }
          }
        ]
      },
      {
        titel: "De huisartsenpost",
        situatie: "Het is zaterdagavond. U belt de huisarts en hoort een bandje.",
        audio: [
          { spreker: "n", tekst: "U belt met huisartsenpraktijk Centrum. De praktijk is nu gesloten. Heeft u 's avonds of in het weekend dringend een huisarts nodig? Bel dan de huisartsenpost: nul negen nul, één twee drie, vier vijf zes. Is het levensgevaarlijk? Bel dan meteen één één twee." }
        ],
        vragen: [
          {
            vraag: "Uw kind heeft zaterdagavond hoge koorts en u heeft een dokter nodig. Wat doet u?",
            opties: ["maandag de praktijk bellen", "één één twee bellen", "de huisartsenpost bellen"],
            antwoord: 2,
            uitleg: {
              nl: "'Heeft u 's avonds of in het weekend dringend een huisarts nodig? Bel dan de huisartsenpost.' 112 is alleen bij levensgevaar.",
              en: "For urgent care in the evening or weekend, call the huisartsenpost (GP out-of-hours). 112 is only for life-threatening situations.",
              tr: "Akşam veya hafta sonu acil doktor gerekiyorsa huisartsenpost'u (nöbetçi aile hekimi) arayın. 112 sadece hayati tehlikede."
            }
          },
          {
            vraag: "Wanneer belt u 112?",
            opties: ["als het levensgevaarlijk is", "als de praktijk gesloten is", "als u een recept nodig heeft"],
            antwoord: 0,
            uitleg: {
              nl: "'Is het levensgevaarlijk? Bel dan meteen één één twee.'",
              en: "'Is it life-threatening? Then call 112 immediately.'",
              tr: "'Hayati tehlike varsa hemen 112'yi arayın.'"
            }
          }
        ]
      },
      {
        titel: "Ziekmelding op school",
        situatie: "Een moeder belt naar de school van haar zoon.",
        audio: [
          { spreker: "v", tekst: "Goedemorgen, met de moeder van Yusuf uit groep vijf. Yusuf is ziek. Hij heeft keelpijn en hij hoest veel. Hij blijft vandaag en morgen thuis." },
          { spreker: "m", tekst: "Dank u voor het bellen. Beterschap voor Yusuf! Ik zeg het tegen zijn juf." }
        ],
        vragen: [
          {
            vraag: "Hoe lang blijft Yusuf thuis?",
            opties: ["alleen vandaag", "de hele week", "vandaag en morgen"],
            antwoord: 2,
            uitleg: {
              nl: "'Hij blijft vandaag en morgen thuis.'",
              en: "'He is staying home today and tomorrow.'",
              tr: "'Bugün ve yarın evde kalacak.'"
            }
          }
        ]
      },
      {
        titel: "Het nieuwe rooster",
        situatie: "Tijdens de pauze praat Mehmet met zijn collega Ellen.",
        audio: [
          { spreker: "v", tekst: "Mehmet, heb je het nieuwe rooster al gezien? Volgende week werk je op dinsdag, woensdag en vrijdag." },
          { spreker: "m", tekst: "Vrijdag? Maar op vrijdag heb ik les, ik doe een cursus Nederlands." },
          { spreker: "v", tekst: "Dan moet je het aan Johan vragen. Misschien kun je met iemand ruilen." }
        ],
        vragen: [
          {
            vraag: "Waarom kan Mehmet op vrijdag niet werken?",
            opties: ["Hij heeft dan les Nederlands.", "Hij is dan op vakantie.", "Hij werkt dan bij een ander bedrijf."],
            antwoord: 0,
            uitleg: {
              nl: "'Op vrijdag heb ik les, ik doe een cursus Nederlands.'",
              en: "'On Friday I have a class, I'm doing a Dutch course.'",
              tr: "'Cuma günü dersim var, Hollandaca kursuna gidiyorum.'"
            }
          },
          {
            vraag: "Wat adviseert Ellen?",
            opties: ["de cursus stoppen", "aan Johan vragen of hij kan ruilen", "op zaterdag werken"],
            antwoord: 1,
            uitleg: {
              nl: "'Dan moet je het aan Johan vragen. Misschien kun je met iemand ruilen.'",
              en: "'Then ask Johan. Maybe you can swap with someone.'",
              tr: "'O zaman Johan'a sor. Belki biriyle değiş tokuş yapabilirsin.'"
            }
          }
        ]
      },
      {
        titel: "Computercursus in de bibliotheek",
        situatie: "U hoort een bericht in de bibliotheek.",
        audio: [
          { spreker: "n", tekst: "Wilt u beter leren werken met de computer? In de bibliotheek start een gratis cursus: Klik en Tik. U leert e-mailen, internetten en inloggen met DigiD. De cursus is op donderdagmiddag. Aanmelden kan bij de informatiebalie." }
        ],
        vragen: [
          {
            vraag: "Hoe kunt u zich aanmelden voor de cursus?",
            opties: ["via e-mail", "met uw DigiD", "bij de informatiebalie"],
            antwoord: 2,
            uitleg: {
              nl: "'Aanmelden kan bij de informatiebalie.' DigiD is iets wat u in de cursus leert.",
              en: "'You can sign up at the information desk.' DigiD is something you learn in the course.",
              tr: "'Bilgi masasından kayıt olabilirsiniz.' DigiD kursta öğrenilen bir konu."
            }
          },
          {
            vraag: "Wat kost de cursus?",
            opties: ["niets", "vijf euro per les", "dat wordt niet gezegd"],
            antwoord: 0,
            uitleg: {
              nl: "Het is 'een gratis cursus'. Gratis = het kost niets.",
              en: "It is 'a free course'.",
              tr: "'Ücretsiz bir kurs'. Gratis = bedava."
            }
          }
        ]
      },
      {
        titel: "Het weer voor het weekend",
        situatie: "U luistert naar het weerbericht.",
        audio: [
          { spreker: "n", tekst: "Het weer voor het weekend. Zaterdag is het bewolkt, met in de ochtend wat mist. Zondag wordt het een mooie dag: veel zon en twintig graden. Een goede dag om naar het strand te gaan!" }
        ],
        vragen: [
          {
            vraag: "Op welke dag is het goed weer om naar het strand te gaan?",
            opties: ["zaterdagochtend", "zaterdagmiddag", "zondag"],
            antwoord: 2,
            uitleg: {
              nl: "'Zondag wordt het een mooie dag: veel zon en twintig graden.'",
              en: "'Sunday will be a nice day: lots of sun and twenty degrees.'",
              tr: "'Pazar güzel bir gün olacak: bol güneş ve yirmi derece.'"
            }
          }
        ]
      },
      {
        titel: "De wijkagent",
        situatie: "De wijkagent praat met bewoners van de straat.",
        audio: [
          { spreker: "m", tekst: "Goedenavond allemaal. Ik ben Ruud, uw wijkagent. De laatste tijd worden er in deze buurt veel fietsen gestolen. Zet uw fiets daarom altijd op slot, het liefst met twee sloten. En zet hem 's nachts binnen als dat kan." }
        ],
        vragen: [
          {
            vraag: "Wat is het probleem in de buurt?",
            opties: ["Er worden veel fietsen gestolen.", "Er wordt te hard gereden.", "Er is veel afval op straat."],
            antwoord: 0,
            uitleg: {
              nl: "'Er worden in deze buurt veel fietsen gestolen.' Stelen = iets pakken wat niet van jou is.",
              en: "'Many bikes are being stolen in this neighbourhood.'",
              tr: "'Bu mahallede çok bisiklet çalınıyor.'"
            }
          },
          {
            vraag: "Wat is het advies van de wijkagent?",
            opties: ["geen fiets meer kopen", "de fiets op slot zetten, het liefst met twee sloten", "de fiets bij het politiebureau zetten"],
            antwoord: 1,
            uitleg: {
              nl: "'Zet uw fiets altijd op slot, het liefst met twee sloten.'",
              en: "'Always lock your bike, preferably with two locks.'",
              tr: "'Bisikletinizi her zaman kilitleyin, tercihen iki kilitle.'"
            }
          }
        ]
      },
      {
        titel: "Herhaalrecept",
        situatie: "Een man belt naar de apotheek.",
        audio: [
          { spreker: "m", tekst: "Goedemiddag, ik wil graag een herhaalrecept voor mijn bloeddrukpillen." },
          { spreker: "v", tekst: "Dat kan. Wij vragen het recept aan bij uw huisarts. U kunt de medicijnen overmorgen na twee uur ophalen." },
          { spreker: "m", tekst: "Overmorgen, dus donderdag? Prima." }
        ],
        vragen: [
          {
            vraag: "Wat wil de man?",
            opties: ["een afspraak bij de huisarts", "nieuwe pillen voor zijn bloeddruk", "informatie over bijwerkingen"],
            antwoord: 1,
            uitleg: {
              nl: "Hij wil 'een herhaalrecept voor mijn bloeddrukpillen'. Een herhaalrecept = hetzelfde medicijn nog een keer.",
              en: "He wants a repeat prescription for his blood pressure pills.",
              tr: "Tansiyon hapları için 'herhaalrecept' (tekrar reçete) istiyor."
            }
          },
          {
            vraag: "Wanneer kan de man de medicijnen ophalen?",
            opties: ["vandaag na twee uur", "morgen", "donderdag na twee uur"],
            antwoord: 2,
            uitleg: {
              nl: "'Overmorgen na twee uur' — en de man zegt: 'Overmorgen, dus donderdag.' Overmorgen = de dag na morgen.",
              en: "'The day after tomorrow after two' — which is Thursday.",
              tr: "'Öbür gün saat ikiden sonra' — yani perşembe. Overmorgen = yarından sonraki gün."
            }
          }
        ]
      },
      {
        titel: "Bij de fietsenmaker",
        situatie: "Een vrouw brengt haar fiets naar de fietsenmaker.",
        audio: [
          { spreker: "v", tekst: "Hallo, mijn achterband is lek. Kunt u hem maken?" },
          { spreker: "m", tekst: "Ja hoor. Maar het is vandaag erg druk. Uw fiets is morgen om twaalf uur klaar. Het kost vijftien euro." }
        ],
        vragen: [
          {
            vraag: "Wanneer is de fiets klaar?",
            opties: ["vandaag om twaalf uur", "morgen om twaalf uur", "over een week"],
            antwoord: 1,
            uitleg: {
              nl: "'Uw fiets is morgen om twaalf uur klaar.' Vandaag is het te druk.",
              en: "'Your bike will be ready tomorrow at twelve.' Today is too busy.",
              tr: "'Bisikletiniz yarın saat on ikide hazır.' Bugün çok yoğun."
            }
          }
        ]
      },
      {
        titel: "Lid worden van de sportschool",
        situatie: "Een man vraagt informatie bij de sportschool.",
        audio: [
          { spreker: "m", tekst: "Hallo, ik wil graag lid worden. Wat kost dat?" },
          { spreker: "v", tekst: "Een abonnement kost vijfentwintig euro per maand. U kunt elke dag komen. Studenten betalen twintig euro. De eerste les is gratis, dan kunt u het eerst proberen." }
        ],
        vragen: [
          {
            vraag: "Hoeveel kost een abonnement voor de man? Hij is geen student.",
            opties: ["€ 25 per maand", "€ 20 per maand", "€ 25 per week"],
            antwoord: 0,
            uitleg: {
              nl: "'Een abonnement kost vijfentwintig euro per maand.' Twintig euro is voor studenten.",
              en: "'€25 per month.' €20 is for students.",
              tr: "'Abonelik ayda yirmi beş euro.' Yirmi euro öğrenciler için."
            }
          },
          {
            vraag: "Wat is gratis?",
            opties: ["het abonnement voor studenten", "elke eerste les van de maand", "de eerste les"],
            antwoord: 2,
            uitleg: {
              nl: "'De eerste les is gratis, dan kunt u het eerst proberen.'",
              en: "'The first lesson is free, so you can try it first.'",
              tr: "'İlk ders ücretsiz, böylece önce deneyebilirsiniz.'"
            }
          }
        ]
      },
      {
        titel: "Een brief over de huur",
        situatie: "Een medewerker van de woningcorporatie geeft uitleg.",
        audio: [
          { spreker: "v", tekst: "Alle huurders krijgen deze week een brief. Vanaf één juli gaat de huur omhoog met drie procent. Heeft u een laag inkomen? Dan kunt u misschien huurtoeslag krijgen. Kijk daarvoor op de website van de Belastingdienst." }
        ],
        vragen: [
          {
            vraag: "Wat verandert er op 1 juli?",
            opties: ["De huur wordt hoger.", "De huur wordt lager.", "Er komt een nieuwe woningcorporatie."],
            antwoord: 0,
            uitleg: {
              nl: "'Vanaf één juli gaat de huur omhoog met drie procent.' Omhoog = hoger.",
              en: "'From 1 July the rent goes up by three percent.'",
              tr: "'1 Temmuz'dan itibaren kira yüzde üç artıyor.' Omhoog = yukarı/artış."
            }
          }
        ]
      },
      {
        titel: "Lawaai van de buren",
        situatie: "Sara praat met haar bovenbuurman.",
        audio: [
          { spreker: "v", tekst: "Hallo, ik woon onder u. Mag ik iets vragen? Uw wasmachine staat vaak 's nachts aan. Ik kan dan niet slapen." },
          { spreker: "m", tekst: "O, sorry, dat wist ik niet. 's Nachts is stroom goedkoper, daarom doe ik het. Maar vanaf nu zet ik de wasmachine voor tien uur 's avonds aan." },
          { spreker: "v", tekst: "Dank u wel, dat is fijn." }
        ],
        vragen: [
          {
            vraag: "Waarom kan Sara niet slapen?",
            opties: ["De buurman heeft 's nachts harde muziek aan.", "De wasmachine van de buurman staat 's nachts aan.", "De buurman heeft een hond."],
            antwoord: 1,
            uitleg: {
              nl: "'Uw wasmachine staat vaak 's nachts aan. Ik kan dan niet slapen.'",
              en: "'Your washing machine is often on at night. Then I can't sleep.'",
              tr: "'Çamaşır makineniz sık sık gece çalışıyor. O zaman uyuyamıyorum.'"
            }
          },
          {
            vraag: "Wat belooft de buurman?",
            opties: ["een nieuwe wasmachine kopen", "de wasmachine alleen in het weekend gebruiken", "de wasmachine voor tien uur 's avonds aanzetten"],
            antwoord: 2,
            uitleg: {
              nl: "'Vanaf nu zet ik de wasmachine voor tien uur 's avonds aan.'",
              en: "'From now on I'll turn the washing machine on before ten in the evening.'",
              tr: "'Bundan sonra çamaşır makinesini akşam saat ondan önce çalıştıracağım.'"
            }
          }
        ]
      },
      {
        titel: "Een tafel reserveren",
        situatie: "Een man belt naar een restaurant.",
        audio: [
          { spreker: "v", tekst: "Restaurant De Linde, goedemiddag." },
          { spreker: "m", tekst: "Goedemiddag. Ik wil graag een tafel reserveren voor zaterdagavond, voor zes personen." },
          { spreker: "v", tekst: "Om zeven uur zijn we vol. Om half negen hebben we nog een tafel." },
          { spreker: "m", tekst: "Half negen is goed. Op naam van Özdemir." }
        ],
        vragen: [
          {
            vraag: "Voor hoeveel personen reserveert de man?",
            opties: ["voor zes personen", "voor zeven personen", "voor acht personen"],
            antwoord: 0,
            uitleg: {
              nl: "'Een tafel voor zaterdagavond, voor zes personen.' Zeven en half negen zijn tijden.",
              en: "'A table for Saturday evening, for six people.' Seven and half past eight are times.",
              tr: "'Cumartesi akşamı altı kişilik bir masa.' Yedi ve sekiz buçuk saatlerdir."
            }
          },
          {
            vraag: "Hoe laat gaan ze eten?",
            opties: ["om 19.00 uur", "om 19.30 uur", "om 20.30 uur"],
            antwoord: 2,
            uitleg: {
              nl: "Om zeven uur is het vol. De man kiest 'half negen' = 20.30 uur.",
              en: "Seven o'clock is full; he chooses 'half negen' = 20:30.",
              tr: "Saat yedi dolu; adam 'half negen' = 20.30'u seçiyor."
            }
          }
        ]
      }
    ]
  });
})();
