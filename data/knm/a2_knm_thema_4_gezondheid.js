(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-thema-4-gezondheid",
    vak: "knm",
    niveau: "A2",
    bron: "oefentoets",
    titel: "KNM — Thema 4: Gezondheidszorg",
    geslaagdVanaf: 9,
    teksten: [
      {
        titel: "Gezondheidszorg",
        html: "<p>Vragen over de huisarts, het noodnummer 112, medicijnen, verzekeringen en andere zorgverleners in Nederland.</p>",
        vragen: [
          {
            vraag: "Welk briefje heeft u nodig om naar een specialist in het ziekenhuis te gaan?",
            opties: [
              "Een verwijsbrief.",
              "Een recept.",
              "Een patiëntenetiket."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Voor een bezoek aan een specialist heb je meestal eerst een verwijsbrief van de huisarts nodig.",
              en: "To visit a specialist, you usually first need a referral letter from your GP.",
              tr: "Bir uzmana gitmek için genellikle önce aile hekiminizden bir sevk mektubu (verwijsbrief) almanız gerekir."
            }
          },
          {
            vraag: "Met eigen risico betaalt u alle zorgkosten zelf.",
            opties: ["Waar", "Niet waar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het eigen risico is een vast bedrag per jaar dat je zelf betaalt; de zorgverzekering betaalt de rest van de kosten.",
              en: "The deductible (eigen risico) is a fixed annual amount you pay yourself; the health insurance pays the rest of the costs.",
              tr: "Kişisel risk payı (eigen risico), yıllık olarak kendinizin ödediği sabit bir tutardır; sağlık sigortası kalan giderleri öder."
            }
          },
          {
            vraag: "Bij de basisverzekering worden alle zorgkosten betaald.",
            opties: ["Waar", "Niet waar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De basisverzekering dekt niet alles, bijvoorbeeld de tandarts voor volwassenen valt er meestal niet onder.",
              en: "The basic insurance does not cover everything, for example dental care for adults is usually not included.",
              tr: "Temel sigorta (basisverzekering) her şeyi kapsamaz, örneğin yetişkinler için diş hekimi giderleri genellikle dahil değildir."
            }
          },
          {
            vraag: "Een hoger eigen risico betekent dat u meer eigen risico moet betalen.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Hoe hoger het eigen risico dat je kiest, hoe meer je zelf moet betalen voordat de verzekering meebetaalt — maar je premie is dan vaak lager.",
              en: "The higher the deductible you choose, the more you pay yourself before the insurance contributes — but your premium is often lower.",
              tr: "Seçtiğiniz kişisel risk payı ne kadar yüksek olursa, sigorta katkıda bulunmadan önce o kadar fazla ödeme yaparsınız — ancak primi genellikle daha düşük olur."
            }
          },
          {
            vraag: "Het is 's nachts en u heeft snel een dokter nodig. Wat doet u?",
            opties: [
              "U belt de huisartsenpost.",
              "U belt direct uw eigen huisarts thuis.",
              "U gaat naar de apotheek."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "'s Nachts en in het weekend, als je niet kunt wachten, bel je de huisartsenpost in plaats van je eigen huisarts.",
              en: "At night and during the weekend, if you cannot wait, you call the out-of-hours GP service instead of your own GP.",
              tr: "Gece veya hafta sonu, bekleyemeyecek bir durumda kendi aile hekiminizi değil, nöbetçi aile hekimi hizmetini (huisartsenpost) ararsınız."
            }
          },
          {
            vraag: "Wanneer belt u 112?",
            opties: [
              "Als je snel politie, brandweer of ambulance nodig hebt.",
              "Als je een afspraak wilt maken met de huisarts.",
              "Als je vragen hebt over je zorgverzekering."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "112 bel je alleen bij een spoedgeval, levensgevaar of als snel hulp nodig is, bijvoorbeeld bij een ernstig ongeluk.",
              en: "You only call 112 in an emergency, when there is danger to life, or when help is needed quickly, for example after a serious accident.",
              tr: "112 sadece acil bir durumda, hayati tehlike varsa veya hızlı yardıma ihtiyaç olduğunda, örneğin ciddi bir kaza durumunda aranır."
            }
          },
          {
            vraag: "In Nederland kiest u zelf vrij uw zorgverzekeraar.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Iedereen in Nederland mag zelf kiezen bij welke zorgverzekeraar hij of zij een zorgverzekering afsluit.",
              en: "Everyone in the Netherlands may choose for themselves which health insurer they take out insurance with.",
              tr: "Hollanda'da herkes hangi sağlık sigortası şirketinden sigorta alacağını kendisi seçebilir."
            }
          },
          {
            vraag: "Hoe heet het officiële document van uw zorgverzekering?",
            opties: [
              "De polis.",
              "De premie.",
              "De zorgpas."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De polis is het officiële document waarin staat wat je verzekering precies dekt.",
              en: "The policy (polis) is the official document that states exactly what your insurance covers.",
              tr: "Poliçe (polis), sigortanızın tam olarak neyi kapsadığını belirten resmi belgedir."
            }
          },
          {
            vraag: "Wat is een voorbeeld van een volksverzekering?",
            opties: [
              "De AOW.",
              "De bijstand.",
              "De zorgverzekering."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De AOW (staatspensioen) is een volksverzekering: iedereen die in Nederland heeft gewoond, bouwt er recht op op.",
              en: "The AOW (state pension) is a national insurance: everyone who has lived in the Netherlands builds up entitlement to it.",
              tr: "AOW (devlet emekli maaşı), bir halk sigortasıdır: Hollanda'da yaşamış olan herkes buna hak kazanır."
            }
          },
          {
            vraag: "Wat is de GGZ?",
            opties: [
              "Een plaats waar psychologen en psychiaters werken.",
              "Een plaats waar je medicijnen ophaalt.",
              "Een plaats waar je een rijbewijs aanvraagt."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "GGZ staat voor geestelijke gezondheidszorg; hier werken psychologen en psychiaters die helpen bij psychische klachten.",
              en: "GGZ stands for mental healthcare; psychologists and psychiatrists work here, helping with psychological issues.",
              tr: "GGZ, ruh sağlığı hizmetleri anlamına gelir; burada psikologlar ve psikiyatristler ruhsal sorunlarla ilgilenir."
            }
          },
          {
            vraag: "De wijkverpleegkundige is een dokter.",
            opties: ["Waar", "Niet waar"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een wijkverpleegkundige is geen dokter, maar een verpleegkundige die zorg geeft bij mensen thuis.",
              en: "A district nurse is not a doctor, but a nurse who provides care to people at home.",
              tr: "Mahalle hemşiresi (wijkverpleegkundige) bir doktor değildir, evlerde bakım sağlayan bir hemşiredir."
            }
          },
          {
            vraag: "Wie controleert meestal de baby tijdens de zwangerschap?",
            opties: [
              "De verloskundige.",
              "De wijkverpleegkundige.",
              "De apotheker."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een verloskundige begeleidt de zwangerschap en bevalling, vaak zonder dat een gynaecoloog nodig is.",
              en: "A midwife (verloskundige) guides the pregnancy and delivery, often without a gynaecologist being needed.",
              tr: "Bir ebe (verloskundige), genellikle bir jinekoloğa gerek kalmadan hamilelik ve doğum sürecine eşlik eder."
            }
          },
          {
            vraag: "Wie is een speciale dokter voor vrouwenziekten?",
            opties: [
              "De gynaecoloog.",
              "De huisarts.",
              "De wijkverpleegkundige."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een gynaecoloog is een specialist voor vrouwenziekten en zwangerschap met complicaties.",
              en: "A gynaecologist is a specialist for women's health issues and complicated pregnancies.",
              tr: "Jinekolog, kadın hastalıkları ve komplikasyonlu hamilelikler için bir uzmandır."
            }
          },
          {
            vraag: "Wat is een patiëntenpas?",
            opties: [
              "Een kaartje met informatie over u en een persoonlijke barcode.",
              "Een formulier om een huisarts te kiezen.",
              "Een vergunning om medicijnen te verkopen."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een patiëntenpas is een kaartje van het ziekenhuis met jouw gegevens en een barcode, zodat artsen je snel kunnen herkennen.",
              en: "A patient card is a card from the hospital with your details and a barcode, so doctors can quickly identify you.",
              tr: "Hasta kartı, hastanenin verdiği, kişisel bilgilerinizi ve bir barkodu içeren bir karttır, böylece doktorlar sizi hızlıca tanıyabilir."
            }
          },
          {
            vraag: "U gaat naar de apotheek om medicijnen voor uw hart te halen. Wat heeft de apotheek hiervoor nodig?",
            opties: [
              "Een recept van de dokter.",
              "Uw DigiD.",
              "Uw verzekeringspapieren."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Voor veel medicijnen, zoals hartmedicatie, heb je een recept van de arts nodig om het bij de apotheek te kunnen ophalen.",
              en: "For many medicines, such as heart medication, you need a prescription from the doctor to collect it at the pharmacy.",
              tr: "Kalp ilaçları gibi birçok ilaç için eczaneden almak amacıyla doktordan bir reçeteye ihtiyacınız vardır."
            }
          },
          {
            vraag: "Nadia spreekt geen Nederlands en heeft niemand die kan vertalen tijdens haar afspraak bij de huisarts. Wat kan de huisarts het beste doen?",
            opties: [
              "Een tolk regelen voor Nadia.",
              "Nadia gewoon in het Nederlands aanspreken.",
              "Nadia doorverwijzen naar het ziekenhuis."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Bij een taalbarrière zonder vertaler kan de huisarts een telefonische tolkdienst inschakelen om goed te kunnen communiceren.",
              en: "When there is a language barrier and no translator, the GP can arrange a telephone interpreter service to communicate properly.",
              tr: "Dil engeli olduğunda ve tercüman olmadığında, aile hekimi düzgün iletişim kurmak için telefonla tercümanlık hizmeti ayarlayabilir."
            }
          }
        ]
      }
    ]
  });
})();
