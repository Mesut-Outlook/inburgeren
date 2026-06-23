(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-thema-3-wonen",
    vak: "knm",
    niveau: "A2",
    bron: "oefentoets",
    titel: "KNM — Thema 3: Wonen",
    geslaagdVanaf: 8,
    teksten: [
      {
        titel: "Wonen",
        html: "<p>Vragen over huren, reparaties, afval scheiden en verzekeringen rondom wonen in Nederland.</p>",
        vragen: [
          {
            vraag: "Mag chemisch afval (zoals verfresten) in de GFT-container?",
            opties: ["Waar", "Niet waar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Chemisch afval is gevaarlijk en moet apart worden afgevoerd naar de milieustraat, niet bij groente-, fruit- en tuinafval (GFT).",
              en: "Chemical waste is dangerous and must be disposed of separately at the recycling centre, not with organic waste (GFT).",
              tr: "Kimyasal atıklar tehlikelidir ve organik atıklarla (GFT) değil, ayrı olarak çevre istasyonuna (milieustraat) bırakılmalıdır."
            }
          },
          {
            vraag: "Een loodgieter kan je kapotte kraan repareren.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een loodgieter is een vakman die kranen, leidingen en waterproblemen in huis repareert.",
              en: "A plumber (loodgieter) is a tradesperson who repairs taps, pipes and water problems in the home.",
              tr: "Tesisatçı (loodgieter), evdeki musluk, boru ve su sorunlarını onaran bir ustadır."
            }
          },
          {
            vraag: "U leest 'grof huishoudelijk afval'. Wat betekent 'grof' hier?",
            opties: [
              "Groot.",
              "Gevaarlijk.",
              "Vies."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "'Grof' betekent hier 'groot'. Grof huishoudelijk afval is grote spullen zoals een bank of een kast.",
              en: "'Grof' here means 'large'. Bulky waste (grof huishoudelijk afval) refers to large items such as a sofa or a cupboard.",
              tr: "Buradaki 'grof' kelimesi 'büyük' demektir. İri ev atığı, kanepe veya dolap gibi büyük eşyalar anlamına gelir."
            }
          },
          {
            vraag: "Uw chemobox (klein gevaarlijk afval) is vol. Wat doet u?",
            opties: [
              "U brengt het naar de milieustraat.",
              "U gooit het in de gewone vuilnisbak.",
              "U gooit het in de GFT-container."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Klein gevaarlijk afval (zoals batterijen of verf) breng je naar de milieustraat, niet bij het gewone afval.",
              en: "Small hazardous waste (such as batteries or paint) must be taken to the recycling centre, not put with regular waste.",
              tr: "Küçük tehlikeli atıklar (pil veya boya gibi) normal çöple birlikte değil, çevre istasyonuna (milieustraat) bırakılmalıdır."
            }
          },
          {
            vraag: "Waar breng je oude kleding (textiel) heen?",
            opties: [
              "Naar de textielbak of kledinginzamelacties.",
              "Naar de milieustraat alleen.",
              "Bij het gewone huisvuil."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Oude kleding gooi je in een textielbak of geef je mee aan een kledinginzamelactie, niet bij het gewone afval.",
              en: "Old clothes are put in a textile container or given to a clothing collection, not thrown away with regular waste.",
              tr: "Eski kıyafetler tekstil kutusuna bırakılır veya giysi toplama kampanyalarına verilir, normal çöpe atılmaz."
            }
          },
          {
            vraag: "U krijgt een woning aangeboden door de woningbouwvereniging. Moet u daar gaan wonen?",
            opties: ["Waar", "Niet waar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Je mag een aangeboden woning weigeren als deze niet bij je past. Het is geen verplichting om elke aangeboden woning te accepteren.",
              en: "You may decline an offered home if it does not suit you. There is no obligation to accept every home that is offered.",
              tr: "Size uygun olmayan bir ev teklifini reddedebilirsiniz. Teklif edilen her evi kabul etme zorunluluğu yoktur."
            }
          },
          {
            vraag: "Uw afvalcontainer is vol, maar de vuilniswagen komt pas over een week. U gaat op vakantie. Wat doet u het beste?",
            opties: [
              "U vraagt de buren om uw container op de juiste dag buiten te zetten.",
              "U laat de container gewoon binnen staan.",
              "U gooit het afval in de tuin van de buren."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het is gebruikelijk om buren om hulp te vragen, bijvoorbeeld om de afvalcontainer op tijd buiten te zetten als je weg bent.",
              en: "It is common to ask neighbours for help, for example to put out the waste container on time when you are away.",
              tr: "Komşulardan yardım istemek yaygındır, örneğin siz yokken çöp konteynerini doğru günde dışarı çıkarmaları için."
            }
          },
          {
            vraag: "Wanneer betaalt de inboedelverzekering NIET?",
            opties: [
              "Als het dak kapot is door storm (dat valt onder de opstalverzekering).",
              "Als er brand is geweest in je huis.",
              "Als er bij je is ingebroken."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De inboedelverzekering dekt schade aan je spullen (zoals na brand of inbraak). Schade aan het gebouw zelf, zoals het dak, valt onder de opstalverzekering.",
              en: "Home contents insurance covers damage to your belongings (such as after fire or burglary). Damage to the building itself, like the roof, is covered by building insurance.",
              tr: "Eşya sigortası (inboedelverzekering), yangın veya hırsızlık sonrası eşyalarınızdaki zararı kapsar. Çatı gibi binanın kendisindeki zarar ise bina sigortasının (opstalverzekering) kapsamındadır."
            }
          },
          {
            vraag: "Hoe werkt een kledinginzamelactie meestal?",
            opties: [
              "Je krijgt thuis een plastic zak om oude kleding in te doen.",
              "Je moet de kleding zelf naar een ander land sturen.",
              "Je krijgt geld voor je oude kleding."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Bij een kledinginzamelactie krijg je vaak thuis een zak; je vult deze met oude kleding en zet hem op een afgesproken dag buiten.",
              en: "With a clothing collection, you often receive a bag at home; you fill it with old clothes and put it outside on an agreed day.",
              tr: "Giysi toplama kampanyalarında genellikle eve bir torba bırakılır; bu torba eski kıyafetlerle doldurulup belirlenen günde dışarı çıkarılır."
            }
          },
          {
            vraag: "Wie regelt meestal de reparatie als de verwarming in een huurwoning kapot is?",
            opties: [
              "De verhuurder.",
              "De buren.",
              "De gemeente."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Grote reparaties, zoals aan de verwarming of de leidingen, zijn meestal de verantwoordelijkheid van de verhuurder.",
              en: "Major repairs, such as to the heating or pipes, are usually the responsibility of the landlord.",
              tr: "Isıtma veya tesisat gibi büyük onarımlar genellikle ev sahibinin (verhuurder) sorumluluğundadır."
            }
          },
          {
            vraag: "U huurt een sociale huurwoning. Wat is hiervan een kenmerk?",
            opties: [
              "Er is een wettelijk maximum aan de huurprijs.",
              "Je mag er nooit huisdieren houden.",
              "Je moet de woning na een jaar kopen."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een sociale huurwoning is bedoeld voor mensen met een lager inkomen en heeft een wettelijk maximale huurprijs.",
              en: "Social housing is intended for people with a lower income and has a legally capped maximum rent.",
              tr: "Sosyal kiralık ev, düşük gelirli kişiler için tasarlanmıştır ve yasayla belirlenmiş bir tavan kira fiyatı vardır."
            }
          },
          {
            vraag: "Bij wie kunt u terecht voor het kopen of huren van een huis?",
            opties: [
              "Bij een makelaar.",
              "Bij het UWV.",
              "Bij een uitzendbureau."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een makelaar helpt mensen bij het zoeken, kopen, verkopen of huren van een woning.",
              en: "A real estate agent helps people search for, buy, sell, or rent a home.",
              tr: "Bir emlakçı, insanların ev aramasına, satın almasına, satmasına veya kiralamasına yardımcı olur."
            }
          }
        ]
      }
    ]
  });
})();
