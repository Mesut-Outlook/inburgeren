/* a2_luisteren_1.js — Luisteren A2, oefenexamen 1 (eigen materiaal, geen DUO-tekst).
 * Luisteren-schema: elke tekst heeft `situatie` (korte inleiding, zichtbaar) en
 * `audio` (fragment als regels; spreker "v" = vrouw, "m" = man, "n" = omroep/neutraal).
 * De runner leest `audio` voor met de Nederlandse browserstem; het transcript
 * verschijnt pas bij het nakijken. */
(function(){
  "use strict";
  window.INB = window.INB || {};
  window.INB.registerExamen({
    id: "a2-luisteren-1",
    vak: "luisteren",
    niveau: "A2",
    bron: "eigen",
    titel: "Luisteren A2 — Oefenexamen 1",
    geslaagdVanaf: 16,
    teksten: [
      {
        titel: "Voicemail van de huisarts",
        situatie: "Mevrouw Yilmaz krijgt een bericht op haar voicemail.",
        audio: [
          { spreker: "v", tekst: "Goedemorgen mevrouw Yilmaz, u spreekt met de assistente van huisartsenpraktijk De Linde. Uw afspraak van dinsdag om tien uur kan helaas niet doorgaan. De dokter is die dag ziek. U kunt woensdag om half elf komen. Wilt u ons even terugbellen? Ons nummer is nul twintig, vijf vijf, zes zes, zeven zeven acht. Dank u wel." }
        ],
        vragen: [
          {
            vraag: "Waarom belt de assistente?",
            opties: ["De uitslag van het onderzoek is binnen.", "De afspraak op dinsdag gaat niet door.", "De praktijk heeft een nieuw telefoonnummer."],
            antwoord: 1,
            uitleg: {
              nl: "Ze zegt: 'Uw afspraak van dinsdag om tien uur kan helaas niet doorgaan.'",
              en: "She says the Tuesday 10 o'clock appointment cannot go ahead.",
              tr: "Asistan, salı saat ondaki randevunun maalesef iptal olduğunu söylüyor."
            }
          },
          {
            vraag: "Wanneer kan mevrouw Yilmaz nu bij de dokter komen?",
            opties: ["dinsdag om tien uur", "woensdag om half tien", "woensdag om half elf"],
            antwoord: 2,
            uitleg: {
              nl: "'U kunt woensdag om half elf komen.' Let op: half elf = 10.30 uur.",
              en: "'You can come on Wednesday at half past ten.' Note: 'half elf' in Dutch means 10:30.",
              tr: "'Çarşamba half elf'te gelebilirsiniz.' Dikkat: Hollandacada 'half elf' = 10.30 demektir."
            }
          }
        ]
      },
      {
        titel: "Omroep op het station",
        situatie: "U staat op het station en hoort een omroepbericht.",
        audio: [
          { spreker: "n", tekst: "Dames en heren, de intercity naar Amsterdam Centraal van veertien uur twaalf vertrekt vandaag niet van spoor vijf, maar van spoor acht. De trein heeft ongeveer tien minuten vertraging. Onze excuses voor het ongemak." }
        ],
        vragen: [
          {
            vraag: "Van welk spoor vertrekt de trein naar Amsterdam?",
            opties: ["spoor 12", "spoor 5", "spoor 8"],
            antwoord: 2,
            uitleg: {
              nl: "'Niet van spoor vijf, maar van spoor acht.'",
              en: "'Not from platform five, but from platform eight.'",
              tr: "'Beşinci perondan değil, sekizinci perondan.'"
            }
          },
          {
            vraag: "Hoe laat vertrekt de trein ongeveer?",
            opties: ["om 14.02 uur", "om 14.12 uur", "om 14.22 uur"],
            antwoord: 2,
            uitleg: {
              nl: "De trein van 14.12 uur heeft ongeveer tien minuten vertraging: 14.12 + 10 = 14.22 uur.",
              en: "The 14:12 train is about ten minutes late: 14:12 + 10 = 14:22.",
              tr: "14.12 treni yaklaşık on dakika rötarlı: 14.12 + 10 = 14.22."
            }
          }
        ]
      },
      {
        titel: "In de supermarkt",
        situatie: "Een vrouw stelt een vraag aan een medewerker van de supermarkt.",
        audio: [
          { spreker: "v", tekst: "Pardon, waar kan ik de rijst vinden?" },
          { spreker: "m", tekst: "Rijst staat in gang drie, naast de pasta. Maar de grote zakken van vijf kilo zijn op. Morgen krijgen we nieuwe." },
          { spreker: "v", tekst: "O, jammer. Dan neem ik vandaag een klein pak." }
        ],
        vragen: [
          {
            vraag: "Wat is er vandaag niet meer in de winkel?",
            opties: ["grote zakken rijst", "pasta", "kleine pakken rijst"],
            antwoord: 0,
            uitleg: {
              nl: "De medewerker zegt: 'De grote zakken van vijf kilo zijn op.' 'Op' betekent: er is niets meer.",
              en: "The employee says the big 5-kilo bags are 'op' — sold out.",
              tr: "Çalışan 'beş kiloluk büyük paketler op' diyor. 'Op' = bitti, kalmadı demektir."
            }
          }
        ]
      },
      {
        titel: "Telefoontje van school",
        situatie: "De juf van Sam belt met de vader van Sam.",
        audio: [
          { spreker: "v", tekst: "Goedemiddag meneer Bakker, met juf Anouk van basisschool De Regenboog. Sam was vandaag een beetje ziek. Hij had buikpijn. Hij heeft een uurtje op de bank in de lerarenkamer gelegen. Nu gaat het wel beter. Wilt u hem vanmiddag om kwart over drie ophalen? Dan kan hij thuis lekker rusten." },
          { spreker: "m", tekst: "Natuurlijk, ik kom om kwart over drie. Bedankt voor het bellen." }
        ],
        vragen: [
          {
            vraag: "Wat was er met Sam?",
            opties: ["Hij had hoofdpijn.", "Hij was gevallen.", "Hij had buikpijn."],
            antwoord: 2,
            uitleg: {
              nl: "De juf zegt: 'Hij had buikpijn.'",
              en: "The teacher says: 'He had a stomach ache.'",
              tr: "Öğretmen 'karnı ağrıyordu' diyor."
            }
          },
          {
            vraag: "Wat vraagt de juf aan de vader?",
            opties: ["Sam om kwart over drie ophalen", "Sam morgen thuis houden", "met Sam naar de dokter gaan"],
            antwoord: 0,
            uitleg: {
              nl: "'Wilt u hem vanmiddag om kwart over drie ophalen?' Kwart over drie = 15.15 uur.",
              en: "'Would you pick him up at a quarter past three this afternoon?' (15:15)",
              tr: "'Onu bu öğleden sonra üçü çeyrek geçe alabilir misiniz?' (15.15)"
            }
          }
        ]
      },
      {
        titel: "Een andere dienst",
        situatie: "Fatima werkt in een verzorgingshuis. Haar leidinggevende belt haar.",
        audio: [
          { spreker: "m", tekst: "Hoi Fatima, met Erik. Kun jij morgen de ochtenddienst doen in plaats van de avonddienst? Karin is op vakantie. Je begint dan om zeven uur en je bent om drie uur klaar." },
          { spreker: "v", tekst: "Ja hoor, dat is goed. Maar ik moet mijn dochter om half drie van school halen." },
          { spreker: "m", tekst: "Geen probleem. Dan mag je om twee uur weg." }
        ],
        vragen: [
          {
            vraag: "Hoe laat begint Fatima morgen met werken?",
            opties: ["om 7.00 uur", "om 14.00 uur", "om 15.00 uur"],
            antwoord: 0,
            uitleg: {
              nl: "Erik zegt: 'Je begint dan om zeven uur.'",
              en: "Erik says: 'You then start at seven o'clock.'",
              tr: "Erik 'O zaman saat yedide başlarsın' diyor."
            }
          },
          {
            vraag: "Waarom mag Fatima morgen eerder naar huis?",
            opties: ["Ze is op vakantie.", "Ze moet haar dochter van school halen.", "Ze werkt ook de avonddienst."],
            antwoord: 1,
            uitleg: {
              nl: "Fatima moet haar dochter om half drie van school halen, daarom mag ze om twee uur weg.",
              en: "Fatima has to pick up her daughter from school at half past two, so she may leave at two.",
              tr: "Fatima kızını 14.30'da okuldan alması gerektiği için saat ikide çıkabiliyor."
            }
          }
        ]
      },
      {
        titel: "Het keuzemenu van de gemeente",
        situatie: "U belt naar de gemeente en hoort een bandje.",
        audio: [
          { spreker: "n", tekst: "Welkom bij de gemeente. Wilt u een afspraak maken voor een paspoort of een identiteitskaart? Toets dan één. Heeft u een vraag over afval? Toets twee. Voor alle andere vragen toetst u drie. Let op: het gemeentehuis is op vrijdagmiddag gesloten." }
        ],
        vragen: [
          {
            vraag: "U wilt een nieuwe identiteitskaart aanvragen. Welke toets kiest u?",
            opties: ["1", "2", "3"],
            antwoord: 0,
            uitleg: {
              nl: "'Afspraak voor een paspoort of een identiteitskaart? Toets dan één.'",
              en: "'Appointment for a passport or ID card? Press one.'",
              tr: "'Pasaport veya kimlik kartı randevusu için bire basın.'"
            }
          },
          {
            vraag: "Wanneer is het gemeentehuis dicht?",
            opties: ["op vrijdagmiddag", "op vrijdagochtend", "op zaterdagmiddag"],
            antwoord: 0,
            uitleg: {
              nl: "'Het gemeentehuis is op vrijdagmiddag gesloten.' Gesloten = dicht.",
              en: "'The town hall is closed on Friday afternoon.'",
              tr: "'Belediye binası cuma öğleden sonra kapalıdır.' Gesloten = kapalı."
            }
          }
        ]
      },
      {
        titel: "Het weerbericht",
        situatie: "U luistert naar het weerbericht op de radio.",
        audio: [
          { spreker: "n", tekst: "En dan het weer. Morgen begint de dag droog, maar in de middag gaat het regenen. Er staat ook veel wind. De temperatuur is ongeveer twaalf graden. Zaterdag wordt het weer zonnig en iets warmer." }
        ],
        vragen: [
          {
            vraag: "Hoe is het weer morgenmiddag?",
            opties: ["droog en zonnig", "regen en veel wind", "warm en zonder wind"],
            antwoord: 1,
            uitleg: {
              nl: "'In de middag gaat het regenen. Er staat ook veel wind.'",
              en: "'In the afternoon it will rain. There will also be a lot of wind.'",
              tr: "'Öğleden sonra yağmur yağacak. Ayrıca çok rüzgâr var.'"
            }
          },
          {
            vraag: "Hoe wordt het weer op zaterdag?",
            opties: ["zonnig", "koud en nat", "hetzelfde als morgen"],
            antwoord: 0,
            uitleg: {
              nl: "'Zaterdag wordt het weer zonnig en iets warmer.'",
              en: "'Saturday will be sunny again and a bit warmer.'",
              tr: "'Cumartesi yine güneşli ve biraz daha sıcak olacak.'"
            }
          }
        ]
      },
      {
        titel: "De buurman",
        situatie: "De buurman belt aan bij Eva.",
        audio: [
          { spreker: "m", tekst: "Hallo, ik ben Peter, uw buurman van nummer twaalf. Zaterdag geef ik een verjaardagsfeest in de tuin. Het wordt misschien een beetje laat en druk. Sorry alvast! Maar u bent ook van harte welkom." },
          { spreker: "v", tekst: "Wat aardig, dank u wel. Hoe laat begint het?" },
          { spreker: "m", tekst: "Om acht uur 's avonds." }
        ],
        vragen: [
          {
            vraag: "Waarom komt Peter bij Eva langs?",
            opties: ["Hij klaagt over lawaai.", "Hij vraagt of hij iets mag lenen.", "Hij vertelt over zijn feest en nodigt haar uit."],
            antwoord: 2,
            uitleg: {
              nl: "Peter vertelt over zijn verjaardagsfeest en zegt: 'U bent ook van harte welkom.'",
              en: "Peter tells her about his birthday party and says she is very welcome too.",
              tr: "Peter doğum günü partisinden bahsediyor ve 'Siz de davetlisiniz' diyor."
            }
          },
          {
            vraag: "Hoe laat begint het feest?",
            opties: ["om 18.00 uur", "om 20.00 uur", "om 22.00 uur"],
            antwoord: 1,
            uitleg: {
              nl: "'Om acht uur 's avonds' = 20.00 uur.",
              en: "'At eight in the evening' = 20:00.",
              tr: "'Akşam saat sekizde' = 20.00."
            }
          }
        ]
      },
      {
        titel: "Bij de apotheek",
        situatie: "De apothekersassistent legt uit hoe u uw medicijnen gebruikt.",
        audio: [
          { spreker: "v", tekst: "Deze tabletten neemt u drie keer per dag, bij het eten. Neem er niet meer dan zes per dag. U mag geen alcohol drinken zolang u deze medicijnen gebruikt. Na vijf dagen is het doosje leeg en bent u klaar." }
        ],
        vragen: [
          {
            vraag: "Wanneer moet u de tabletten innemen?",
            opties: ["alleen als u pijn heeft", "voor het slapen", "bij het eten"],
            antwoord: 2,
            uitleg: {
              nl: "'Deze tabletten neemt u drie keer per dag, bij het eten.'",
              en: "'You take these tablets three times a day, with meals.'",
              tr: "'Bu tabletleri günde üç kez, yemekle birlikte alırsınız.'"
            }
          },
          {
            vraag: "Wat mag u niet doen?",
            opties: ["alcohol drinken", "eten", "autorijden"],
            antwoord: 0,
            uitleg: {
              nl: "'U mag geen alcohol drinken zolang u deze medicijnen gebruikt.' Over autorijden zegt ze niets.",
              en: "'You may not drink alcohol while using this medicine.' Driving is not mentioned.",
              tr: "'Bu ilacı kullanırken alkol içmemelisiniz.' Araba kullanmaktan bahsedilmiyor."
            }
          }
        ]
      },
      {
        titel: "In de bibliotheek",
        situatie: "Een medewerker van de bibliotheek geeft uitleg aan een nieuw lid.",
        audio: [
          { spreker: "v", tekst: "U kunt de boeken drie weken lenen. Daarna kunt u ze online verlengen. Brengt u een boek te laat terug, dan betaalt u twintig cent per dag per boek. Kinderen tot achttien jaar lenen gratis." }
        ],
        vragen: [
          {
            vraag: "Wat betaalt u als u een boek te laat terugbrengt?",
            opties: ["twintig cent per dag", "niets", "twee euro per week"],
            antwoord: 0,
            uitleg: {
              nl: "'Dan betaalt u twintig cent per dag per boek.'",
              en: "'Then you pay twenty cents per day per book.'",
              tr: "'O zaman kitap başına günde yirmi sent ödersiniz.'"
            }
          }
        ]
      },
      {
        titel: "In de bus",
        situatie: "Een man stapt in de bus en stelt een vraag aan de chauffeur.",
        audio: [
          { spreker: "m", tekst: "Goedemorgen. Rijdt deze bus naar het ziekenhuis?" },
          { spreker: "v", tekst: "Nee, meneer, dan moet u lijn zeven hebben. Die stopt aan de overkant van de straat, bij de bakker." }
        ],
        vragen: [
          {
            vraag: "Wat moet de man doen?",
            opties: ["in deze bus blijven zitten", "bij de bakker uitstappen", "oversteken en bus 7 nemen"],
            antwoord: 2,
            uitleg: {
              nl: "Hij moet lijn zeven hebben; die stopt aan de overkant van de straat.",
              en: "He needs line seven, which stops on the other side of the street.",
              tr: "Yedi numaralı hatta binmesi gerekiyor; o otobüs caddenin karşı tarafında duruyor."
            }
          }
        ]
      },
      {
        titel: "Cursus Nederlands",
        situatie: "U belt naar het taalcentrum over een cursus Nederlands.",
        audio: [
          { spreker: "v", tekst: "U wilt meedoen aan de cursus Nederlands? Leuk! De lessen zijn op maandag en donderdag, van zeven tot negen uur 's avonds. De cursus begint op drie maart. Neem bij de eerste les uw identiteitsbewijs mee." }
        ],
        vragen: [
          {
            vraag: "Wanneer zijn de lessen?",
            opties: ["maandag- en donderdagavond", "maandag- en dinsdagochtend", "elke avond van zeven tot negen"],
            antwoord: 0,
            uitleg: {
              nl: "'Op maandag en donderdag, van zeven tot negen uur 's avonds.'",
              en: "'On Monday and Thursday, from seven to nine in the evening.'",
              tr: "'Pazartesi ve perşembe, akşam yediden dokuza kadar.'"
            }
          },
          {
            vraag: "Wat moet u meenemen naar de eerste les?",
            opties: ["een woordenboek", "uw identiteitsbewijs", "geld voor de cursus"],
            antwoord: 1,
            uitleg: {
              nl: "'Neem bij de eerste les uw identiteitsbewijs mee.'",
              en: "'Bring your ID to the first lesson.'",
              tr: "'İlk derse kimlik belgenizi getirin.'"
            }
          }
        ]
      },
      {
        titel: "Bij de voetbalclub",
        situatie: "Een moeder belt naar de voetbalclub.",
        audio: [
          { spreker: "v", tekst: "Hallo, mijn zoon wil graag voetballen. Kan hij lid worden van de club?" },
          { spreker: "m", tekst: "Natuurlijk. Hoe oud is hij?" },
          { spreker: "v", tekst: "Negen jaar." },
          { spreker: "m", tekst: "Dan kan hij bij de jeugd. Ze trainen op woensdagmiddag. De eerste twee trainingen zijn gratis. Dan kan hij eerst kijken of hij het leuk vindt." }
        ],
        vragen: [
          {
            vraag: "Wat is gratis?",
            opties: ["het lidmaatschap voor kinderen", "de eerste twee trainingen", "de voetbalkleding"],
            antwoord: 1,
            uitleg: {
              nl: "'De eerste twee trainingen zijn gratis.'",
              en: "'The first two training sessions are free.'",
              tr: "'İlk iki antrenman ücretsizdir.'"
            }
          }
        ]
      },
      {
        titel: "Oud papier",
        situatie: "Een medewerker van de gemeente vertelt iets over afval.",
        audio: [
          { spreker: "m", tekst: "In uw straat halen we het oud papier op, elke eerste dinsdag van de maand. Zet de doos met papier op die dinsdag vóór half acht 's ochtends aan de straat. Zet de doos niet de avond ervoor buiten, want dan kan het papier nat worden of wegwaaien." }
        ],
        vragen: [
          {
            vraag: "Wanneer moet u het oud papier buiten zetten?",
            opties: ["maandagavond", "dinsdagochtend vóór half acht", "elke dinsdagmiddag"],
            antwoord: 1,
            uitleg: {
              nl: "'Zet de doos op die dinsdag vóór half acht 's ochtends aan de straat', niet de avond ervoor.",
              en: "Put the box out on that Tuesday before 7:30 in the morning, not the evening before.",
              tr: "Kutuyu o salı sabah 7.30'dan önce dışarı koyun, bir önceki akşam değil."
            }
          }
        ]
      },
      {
        titel: "Een sollicitatiegesprek",
        situatie: "Amina heeft een sollicitatiegesprek bij een restaurant.",
        audio: [
          { spreker: "m", tekst: "U heeft gereageerd op onze vacature voor medewerker in de keuken. Heeft u al eerder in een restaurant gewerkt?" },
          { spreker: "v", tekst: "Ja, twee jaar in Turkije, en nu zes maanden hier in Utrecht." },
          { spreker: "m", tekst: "Mooi. Kunt u ook in het weekend werken?" },
          { spreker: "v", tekst: "Op zaterdag wel, maar op zondag helaas niet." }
        ],
        vragen: [
          {
            vraag: "Hoe lang werkt Amina al in een restaurant in Utrecht?",
            opties: ["twee maanden", "zes maanden", "twee jaar"],
            antwoord: 1,
            uitleg: {
              nl: "Twee jaar was in Turkije; in Utrecht werkt ze 'nu zes maanden'.",
              en: "The two years were in Turkey; in Utrecht she has worked 'six months now'.",
              tr: "İki yıl Türkiye'deydi; Utrecht'te 'şimdi altı aydır' çalışıyor."
            }
          },
          {
            vraag: "Wanneer kan Amina niet werken?",
            opties: ["op zaterdag", "in het hele weekend", "op zondag"],
            antwoord: 2,
            uitleg: {
              nl: "'Op zaterdag wel, maar op zondag helaas niet.'",
              en: "'Saturday yes, but Sunday unfortunately not.'",
              tr: "'Cumartesi olur, ama pazar maalesef olmaz.'"
            }
          }
        ]
      }
    ]
  });
})();
