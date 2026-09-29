/* a2_luisteren_4.js — Luisteren A2, oefenexamen 4 (eigen materiaal, geen DUO-tekst).
 * Schema: zie a2_luisteren_1.js. Audio: node tools/gen_luisteren_audio.js <dit bestand> */
(function(){
  "use strict";
  window.INB = window.INB || {};
  window.INB.registerExamen({
    id: "a2-luisteren-4",
    vak: "luisteren",
    niveau: "A2",
    bron: "eigen",
    titel: "Luisteren A2 — Oefenexamen 4",
    geslaagdVanaf: 16,
    teksten: [
      {
        titel: "Een pakketje bij de buren",
        situatie: "Er staat een bezorger van PostNL voor de deur bij de buurvrouw.",
        audio: [
          { spreker: "m", tekst: "Goedemiddag, ik heb een pakketje voor uw buurman op nummer veertien, maar hij is niet thuis. Wilt u het voor hem aannemen?" },
          { spreker: "v", tekst: "Ja hoor, geen probleem." },
          { spreker: "m", tekst: "Dank u wel. Ik doe een kaartje in zijn brievenbus, dan weet hij dat het pakketje bij u is." }
        ],
        vragen: [
          {
            vraag: "Wat vraagt de bezorger aan de vrouw?",
            opties: ["of zij een pakketje wil versturen", "of zij het pakketje voor de buurman wil aannemen", "waar nummer veertien is"],
            antwoord: 1,
            uitleg: {
              nl: "'Wilt u het voor hem aannemen?' Aannemen = in ontvangst nemen voor iemand anders.",
              en: "'Would you accept it for him?'",
              tr: "'Onun yerine teslim alır mısınız?' Aannemen = teslim almak."
            }
          },
          {
            vraag: "Hoe weet de buurman dat zijn pakketje bij de vrouw is?",
            opties: ["Er komt een kaartje in zijn brievenbus.", "De vrouw belt hem.", "Hij krijgt een e-mail van PostNL."],
            antwoord: 0,
            uitleg: {
              nl: "'Ik doe een kaartje in zijn brievenbus, dan weet hij dat het pakketje bij u is.'",
              en: "'I'll put a card in his letterbox, then he knows the parcel is with you.'",
              tr: "'Posta kutusuna bir kart bırakıyorum, böylece paketin sizde olduğunu bilir.'"
            }
          }
        ]
      },
      {
        titel: "In het ziekenhuis",
        situatie: "Een vrouw vraagt de weg aan de receptie van het ziekenhuis.",
        audio: [
          { spreker: "v", tekst: "Goedemorgen. Ik heb om tien uur een afspraak op de afdeling oogheelkunde. Waar is dat?" },
          { spreker: "m", tekst: "Dat is op de tweede verdieping. Neem de lift hier rechts. Boven gaat u naar links, en dan is het de derde deur. Meldt u zich eerst bij de balie daar." }
        ],
        vragen: [
          {
            vraag: "Waar is de afdeling oogheelkunde?",
            opties: ["op de begane grond, rechts", "op de derde verdieping", "op de tweede verdieping"],
            antwoord: 2,
            uitleg: {
              nl: "'Dat is op de tweede verdieping.' 'De derde deur' is iets anders.",
              en: "'That's on the second floor.' ('the third door' is something else)",
              tr: "'İkinci katta.' 'Üçüncü kapı' başka bir bilgi."
            }
          },
          {
            vraag: "Wat moet de vrouw boven eerst doen?",
            opties: ["zich melden bij de balie", "in de wachtkamer gaan zitten", "de lift terug nemen"],
            antwoord: 0,
            uitleg: {
              nl: "'Meldt u zich eerst bij de balie daar.' Zich melden = zeggen dat je er bent.",
              en: "'Report to the desk there first.'",
              tr: "'Önce oradaki bankoya kendinizi bildirin.' Zich melden = geldiğini bildirmek."
            }
          }
        ]
      },
      {
        titel: "Zorgtoeslag",
        situatie: "Een medewerker van een hulpbalie legt iets uit.",
        audio: [
          { spreker: "v", tekst: "U moet in Nederland een zorgverzekering hebben. Dat kost elke maand geld. Heeft u een laag inkomen? Dan kunt u zorgtoeslag aanvragen bij de Belastingdienst. U krijgt dan elke maand geld terug. Aanvragen doet u op de website, met uw DigiD." }
        ],
        vragen: [
          {
            vraag: "Wie kan zorgtoeslag krijgen?",
            opties: ["iedereen met een zorgverzekering", "mensen die vaak ziek zijn", "mensen met een laag inkomen"],
            antwoord: 2,
            uitleg: {
              nl: "'Heeft u een laag inkomen? Dan kunt u zorgtoeslag aanvragen.'",
              en: "'Do you have a low income? Then you can apply for healthcare allowance.'",
              tr: "'Geliriniz düşükse sağlık yardımı (zorgtoeslag) başvurusu yapabilirsiniz.'"
            }
          }
        ]
      },
      {
        titel: "Een verjaardag",
        situatie: "Anna belt haar vriendin Fatma.",
        audio: [
          { spreker: "v", tekst: "Hoi Fatma, met Anna. Volgende week zaterdag word ik veertig! Ik geef een feestje bij mij thuis. Kom je ook? Het begint om vier uur. Je hoeft geen cadeau mee te nemen, maar een lekkere salade vind ik wel fijn!" }
        ],
        vragen: [
          {
            vraag: "Waarom belt Anna?",
            opties: ["Ze nodigt Fatma uit voor haar verjaardag.", "Ze wil een salade bestellen.", "Ze vraagt Fatma om een cadeau."],
            antwoord: 0,
            uitleg: {
              nl: "Anna wordt veertig en geeft een feestje: 'Kom je ook?'",
              en: "Anna is turning forty and invites Fatma to her party.",
              tr: "Anna kırk yaşına giriyor ve Fatma'yı partisine davet ediyor."
            }
          },
          {
            vraag: "Wat vraagt Anna om mee te nemen?",
            opties: ["een cadeau", "een salade", "drinken"],
            antwoord: 1,
            uitleg: {
              nl: "'Je hoeft geen cadeau mee te nemen, maar een lekkere salade vind ik wel fijn.'",
              en: "'You don't need to bring a present, but a nice salad would be lovely.'",
              tr: "'Hediye getirmene gerek yok, ama güzel bir salata getirirsen sevinirim.'"
            }
          }
        ]
      },
      {
        titel: "Bij de kapper",
        situatie: "Een man belt naar de kapper.",
        audio: [
          { spreker: "m", tekst: "Goedemorgen, kan ik vandaag nog geknipt worden?" },
          { spreker: "v", tekst: "Vandaag zit alles vol, sorry. Morgenochtend om half tien kan wel." },
          { spreker: "m", tekst: "Dan moet ik werken. Kan het morgen na vijf uur?" },
          { spreker: "v", tekst: "Ja, om kwart over vijf is er plek." },
          { spreker: "m", tekst: "Prima, dan kom ik om kwart over vijf." }
        ],
        vragen: [
          {
            vraag: "Wanneer gaat de man naar de kapper?",
            opties: ["vandaag", "morgen om half tien", "morgen om kwart over vijf"],
            antwoord: 2,
            uitleg: {
              nl: "Vandaag is vol en om half tien moet hij werken. Hij kiest 'kwart over vijf' = 17.15 uur.",
              en: "Today is full and at 9:30 he works. He chooses 'quarter past five' = 17:15.",
              tr: "Bugün dolu, 9.30'da da çalışıyor. 'Beşi çeyrek geçe' = 17.15'i seçiyor."
            }
          },
          {
            vraag: "Waarom kan de man morgenochtend niet?",
            opties: ["Dan is de kapper dicht.", "Dan heeft hij een andere afspraak.", "Dan moet hij werken."],
            antwoord: 2,
            uitleg: {
              nl: "Op 'morgenochtend om half tien' zegt de man: 'Dan moet ik werken.'",
              en: "About tomorrow at 9:30 he says: 'Then I have to work.'",
              tr: "Yarın sabah 9.30 için 'O saatte çalışıyorum' diyor."
            }
          }
        ]
      },
      {
        titel: "Statiegeld",
        situatie: "U hoort een bericht in de supermarkt.",
        audio: [
          { spreker: "n", tekst: "Beste klanten, vergeet uw lege flessen en blikjes niet! Op flessen en blikjes zit statiegeld. Lever ze in bij de automaat naast de ingang. U krijgt een bonnetje. Met het bonnetje krijgt u korting bij de kassa." }
        ],
        vragen: [
          {
            vraag: "Waar kunt u de lege flessen inleveren?",
            opties: ["bij de kassa", "bij de automaat naast de ingang", "bij de klantenservice"],
            antwoord: 1,
            uitleg: {
              nl: "'Lever ze in bij de automaat naast de ingang.' Bij de kassa geeft u daarna het bonnetje.",
              en: "'Return them at the machine next to the entrance.' The receipt is used at the checkout.",
              tr: "'Girişin yanındaki makineye bırakın.' Fişi sonra kasada kullanırsınız."
            }
          },
          {
            vraag: "Wat doet u met het bonnetje?",
            opties: ["Daarmee krijgt u korting bij de kassa.", "U gooit het weg.", "U stuurt het naar de gemeente."],
            antwoord: 0,
            uitleg: {
              nl: "'Met het bonnetje krijgt u korting bij de kassa.'",
              en: "'With the receipt you get a discount at the checkout.'",
              tr: "'Fişle kasada indirim alırsınız.'"
            }
          }
        ]
      },
      {
        titel: "Storing op het spoor",
        situatie: "U staat op het perron en hoort een omroepbericht.",
        audio: [
          { spreker: "n", tekst: "Dames en heren, door een storing rijden er vandaag geen treinen tussen Leiden en Den Haag. Er rijden bussen. De bussen vertrekken vanaf het busstation, aan de achterkant van het station. Houd rekening met een half uur extra reistijd." }
        ],
        vragen: [
          {
            vraag: "Hoe kunt u vandaag van Leiden naar Den Haag reizen?",
            opties: ["met de trein, maar later", "met een taxi van NS", "met een bus"],
            antwoord: 2,
            uitleg: {
              nl: "'Er rijden geen treinen tussen Leiden en Den Haag. Er rijden bussen.'",
              en: "'No trains between Leiden and The Hague. There are buses.'",
              tr: "'Leiden ile Lahey arasında tren yok. Otobüsler çalışıyor.'"
            }
          }
        ]
      },
      {
        titel: "Zwemles",
        situatie: "Een vader praat met de zwemleraar van zijn dochter.",
        audio: [
          { spreker: "m", tekst: "Hoe gaat het met de zwemles van Lina?" },
          { spreker: "v", tekst: "Heel goed! Ze kan al goed onder water zwemmen. Over vier weken mag ze afzwemmen voor haar A-diploma. Dat is op zaterdag de twaalfde, om elf uur. Opa en oma mogen ook komen kijken." }
        ],
        vragen: [
          {
            vraag: "Wat gebeurt er over vier weken?",
            opties: ["Lina begint met zwemles.", "Lina doet examen voor haar A-diploma.", "Lina stopt met zwemles."],
            antwoord: 1,
            uitleg: {
              nl: "'Over vier weken mag ze afzwemmen voor haar A-diploma.' Afzwemmen = zwemexamen doen.",
              en: "'In four weeks she can take the test for her A diploma.' Afzwemmen = swimming exam.",
              tr: "'Dört hafta sonra A diploması için sınava girebilir.' Afzwemmen = yüzme sınavı."
            }
          },
          {
            vraag: "Hoe laat is het afzwemmen?",
            opties: ["om 11.00 uur", "om 12.00 uur", "om 10.00 uur"],
            antwoord: 0,
            uitleg: {
              nl: "'Op zaterdag de twaalfde, om elf uur.' De twaalfde is de datum, elf uur is de tijd.",
              en: "'Saturday the twelfth, at eleven.' Twelfth is the date, eleven the time.",
              tr: "'On ikisinde cumartesi, saat on birde.' On iki tarih, on bir saat."
            }
          }
        ]
      },
      {
        titel: "Veiligheid op het werk",
        situatie: "Een nieuwe medewerker krijgt uitleg in het magazijn.",
        audio: [
          { spreker: "m", tekst: "Welkom in het magazijn. Hier draagt iedereen veiligheidsschoenen en een geel hesje. De schoenen krijg je van ons. Het hesje hangt bij de ingang. Roken mag alleen buiten, bij het fietsenhok." }
        ],
        vragen: [
          {
            vraag: "Wat moet de nieuwe medewerker dragen?",
            opties: ["een helm en handschoenen", "veiligheidsschoenen en een geel hesje", "alleen een geel hesje"],
            antwoord: 1,
            uitleg: {
              nl: "'Hier draagt iedereen veiligheidsschoenen en een geel hesje.'",
              en: "'Everyone here wears safety shoes and a yellow vest.'",
              tr: "'Burada herkes iş güvenliği ayakkabısı ve sarı yelek giyer.'"
            }
          },
          {
            vraag: "Waar mag je roken?",
            opties: ["in de kantine", "nergens", "buiten, bij het fietsenhok"],
            antwoord: 2,
            uitleg: {
              nl: "'Roken mag alleen buiten, bij het fietsenhok.'",
              en: "'Smoking is only allowed outside, by the bicycle shed.'",
              tr: "'Sigara sadece dışarıda, bisiklet parkının yanında içilebilir.'"
            }
          }
        ]
      },
      {
        titel: "Iets ruilen in de winkel",
        situatie: "Een vrouw staat bij de kassa van een kledingwinkel.",
        audio: [
          { spreker: "v", tekst: "Goedemiddag. Ik heb deze trui vorige week gekocht, maar hij is te klein. Kan ik hem ruilen?" },
          { spreker: "m", tekst: "Heeft u de kassabon nog?" },
          { spreker: "v", tekst: "Ja, hier is de bon." },
          { spreker: "m", tekst: "Prima. Pak maar een grotere maat uit het rek." }
        ],
        vragen: [
          {
            vraag: "Waarom wil de vrouw de trui ruilen?",
            opties: ["De trui is te klein.", "De trui is kapot.", "Ze vindt de kleur niet mooi."],
            antwoord: 0,
            uitleg: {
              nl: "'Ik heb deze trui vorige week gekocht, maar hij is te klein.'",
              en: "'I bought this sweater last week, but it is too small.'",
              tr: "'Bu kazağı geçen hafta aldım ama küçük geldi.'"
            }
          }
        ]
      },
      {
        titel: "Pinpas kwijt",
        situatie: "Een man belt naar zijn bank.",
        audio: [
          { spreker: "m", tekst: "Goedemiddag, ik ben mijn pinpas kwijt. Ik denk dat hij in de bus is gevallen." },
          { spreker: "v", tekst: "Dan blokkeren we uw pas direct, dan kan niemand er geld mee opnemen. U krijgt binnen vijf werkdagen een nieuwe pas thuisgestuurd." }
        ],
        vragen: [
          {
            vraag: "Wat doet de bank direct?",
            opties: ["de pas blokkeren", "de politie bellen", "het busbedrijf bellen"],
            antwoord: 0,
            uitleg: {
              nl: "'Dan blokkeren we uw pas direct.' Blokkeren = de pas werkt niet meer.",
              en: "'We'll block your card immediately.'",
              tr: "'Kartınızı hemen bloke ediyoruz.' Blokkeren = kartı kullanılamaz yapmak."
            }
          },
          {
            vraag: "Wanneer krijgt de man een nieuwe pas?",
            opties: ["morgen, bij de bank", "binnen vijf werkdagen, thuis", "over vijf weken"],
            antwoord: 1,
            uitleg: {
              nl: "'U krijgt binnen vijf werkdagen een nieuwe pas thuisgestuurd.'",
              en: "'You'll get a new card sent to your home within five working days.'",
              tr: "'Beş iş günü içinde yeni kart evinize gönderilecek.'"
            }
          }
        ]
      },
      {
        titel: "Paspoort ophalen",
        situatie: "Een vrouw krijgt een telefoontje van de gemeente.",
        audio: [
          { spreker: "m", tekst: "Goedemorgen mevrouw Demir, u spreekt met de gemeente. Uw nieuwe paspoort ligt klaar. U kunt het ophalen zonder afspraak, van maandag tot en met vrijdag, van negen tot twaalf uur. Neem uw oude paspoort mee. U moet het paspoort zelf ophalen." }
        ],
        vragen: [
          {
            vraag: "Wanneer kan mevrouw Demir haar paspoort ophalen?",
            opties: ["alleen met een afspraak", "op zaterdagochtend", "op werkdagen van negen tot twaalf uur"],
            antwoord: 2,
            uitleg: {
              nl: "'Zonder afspraak, van maandag tot en met vrijdag, van negen tot twaalf uur.'",
              en: "'Without an appointment, Monday to Friday, from nine to twelve.'",
              tr: "'Randevusuz, pazartesiden cumaya, dokuzdan on ikiye kadar.'"
            }
          },
          {
            vraag: "Wat moet ze meenemen?",
            opties: ["een pasfoto", "haar oude paspoort", "haar man"],
            antwoord: 1,
            uitleg: {
              nl: "'Neem uw oude paspoort mee.' Ze moet het paspoort zelf ophalen, iemand anders mag dat niet.",
              en: "'Bring your old passport.' She must collect it herself.",
              tr: "'Eski pasaportunuzu getirin.' Pasaportu kendisi almalı."
            }
          }
        ]
      },
      {
        titel: "Koningsdag",
        situatie: "U luistert naar de lokale radio.",
        audio: [
          { spreker: "n", tekst: "Zaterdag is het Koningsdag! In het park is er een vrijmarkt voor kinderen. Kinderen mogen daar oud speelgoed en boeken verkopen. De markt begint om acht uur 's ochtends. Het centrum is die dag gesloten voor auto's." }
        ],
        vragen: [
          {
            vraag: "Wat kunnen kinderen op de vrijmarkt doen?",
            opties: ["gratis speelgoed krijgen", "hun oude speelgoed verkopen", "naar een concert gaan"],
            antwoord: 1,
            uitleg: {
              nl: "'Kinderen mogen daar oud speelgoed en boeken verkopen.'",
              en: "'Children can sell old toys and books there.'",
              tr: "'Çocuklar orada eski oyuncaklarını ve kitaplarını satabilir.'"
            }
          },
          {
            vraag: "Wat mag er op Koningsdag niet in het centrum?",
            opties: ["auto's", "fietsen", "marktkramen"],
            antwoord: 0,
            uitleg: {
              nl: "'Het centrum is die dag gesloten voor auto's.'",
              en: "'The centre is closed to cars that day.'",
              tr: "'O gün şehir merkezi arabalara kapalı.'"
            }
          }
        ]
      },
      {
        titel: "Online een afspraak maken",
        situatie: "U belt de huisarts en hoort een bandje.",
        audio: [
          { spreker: "n", tekst: "Welkom bij huisartsenpraktijk De Brug. Wilt u een afspraak maken? Dat kan ook online, via onze website of de app. Voor spoed kiest u toets één. Voor een herhaalrecept kiest u toets twee. Voor alle andere vragen blijft u aan de lijn." }
        ],
        vragen: [
          {
            vraag: "U wilt een herhaalrecept. Wat doet u?",
            opties: ["toets één kiezen", "toets twee kiezen", "aan de lijn blijven"],
            antwoord: 1,
            uitleg: {
              nl: "'Voor een herhaalrecept kiest u toets twee.'",
              en: "'For a repeat prescription, press two.'",
              tr: "'Tekrar reçete için ikiye basın.'"
            }
          },
          {
            vraag: "Hoe kunt u ook een afspraak maken?",
            opties: ["via de website of de app", "per brief", "via de apotheek"],
            antwoord: 0,
            uitleg: {
              nl: "'Dat kan ook online, via onze website of de app.'",
              en: "'You can also do that online, via our website or the app.'",
              tr: "'Bunu internetten, web sitemiz veya uygulama üzerinden de yapabilirsiniz.'"
            }
          }
        ]
      }
    ]
  });
})();
