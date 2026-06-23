(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-thema-6-instanties",
    vak: "knm",
    niveau: "A2",
    bron: "oefentoets",
    titel: "KNM — Thema 6: Instanties",
    geslaagdVanaf: 9,
    teksten: [
      {
        titel: "Instanties",
        html: "<p>Vragen over belangrijke organisaties in Nederland zoals de gemeente, de IND, het UWV, DUO en de Belastingdienst.</p>",
        vragen: [
          {
            vraag: "Waar vraag je een verblijfsvergunning voor onbepaalde tijd aan?",
            opties: ["Bij de IND", "Bij de gemeente", "Bij het UWV"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De Immigratie- en Naturalisatiedienst (IND) behandelt aanvragen voor verblijfsvergunningen.",
              en: "The Immigration and Naturalisation Service (IND) handles applications for residence permits.",
              tr: "Göçmenlik ve Vatandaşlık Dairesi (IND), oturma izni başvurularını işleme alır."
            }
          },
          {
            vraag: "Bij wie vraag je huurtoeslag aan?",
            opties: ["Bij de Belastingdienst", "Bij de woningcorporatie", "Bij de SVB"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Toeslagen zoals huurtoeslag en zorgtoeslag worden aangevraagd bij de Belastingdienst.",
              en: "Benefits such as rent allowance and healthcare allowance are applied for at the Tax Authority (Belastingdienst).",
              tr: "Kira yardımı ve sağlık sigortası yardımı gibi toeslagen, Vergi Dairesi'nden (Belastingdienst) talep edilir."
            }
          },
          {
            vraag: "Waar vraag je een werkloosheidsuitkering aan?",
            opties: ["Bij de gemeente", "Bij het UWV", "Bij DUO"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het UWV regelt de werkloosheidsuitkering (WW-uitkering) voor mensen die hun baan zijn verloren.",
              en: "The UWV arranges unemployment benefit (WW) for people who have lost their job.",
              tr: "UWV, işini kaybeden kişiler için işsizlik ödeneğini (WW) düzenler."
            }
          },
          {
            vraag: "Bij welke instantie vraag je studiefinanciering aan?",
            opties: ["DUO", "SVB", "IND"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "DUO (Dienst Uitvoering Onderwijs) regelt onder andere de studiefinanciering en het inburgeringsexamen.",
              en: "DUO (Education Executive Agency) arranges student finance, among other things, and the integration exam.",
              tr: "DUO (Eğitim Uygulama Kurumu) öğrenci finansmanı ve entegrasyon sınavı gibi konuları yönetir."
            }
          },
          {
            vraag: "De OZB (onroerendezaakbelasting) betaal je aan de gemeente.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De OZB is een belasting voor huiseigenaren en wordt betaald aan de gemeente.",
              en: "The OZB is a property tax for homeowners and is paid to the municipality.",
              tr: "OZB, ev sahiplerinden alınan bir emlak vergisidir ve belediyeye ödenir."
            }
          },
          {
            vraag: "Je BSN (burgerservicenummer) staat op papieren van de Belastingdienst.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Je burgerservicenummer (BSN) staat op officiële papieren, zoals die van de Belastingdienst, je zorgverzekering en je werkgever.",
              en: "Your citizen service number (BSN) appears on official documents, such as those from the Tax Authority, your health insurer, and your employer.",
              tr: "Vatandaşlık hizmet numaranız (BSN), Vergi Dairesi, sağlık sigortanız ve işvereniniz gibi resmi belgelerde yer alır."
            }
          },
          {
            vraag: "Iets officieel tegen de politie zeggen over een misdrijf heet:",
            opties: ["aangifte doen", "een klacht indienen", "een verklaring tekenen"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Als je de politie vertelt dat er een misdrijf is gepleegd, doe je aangifte.",
              en: "When you report to the police that a crime has been committed, you are filing a report (aangifte).",
              tr: "Polise bir suç işlendiğini bildirmek 'aangifte doen' (şikayette bulunma/ihbar) olarak adlandırılır."
            }
          },
          {
            vraag: "Wat doet het Anti-Discriminatiebureau met een klacht over discriminatie?",
            opties: [
              "Het registreert de klacht en kan juridische hulp regelen",
              "Het legt direct een boete op aan de dader",
              "Het stuurt de klacht door naar de rechter"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het Anti-Discriminatiebureau registreert klachten over discriminatie en kan helpen met juridisch advies of hulp.",
              en: "The Anti-Discrimination Bureau registers discrimination complaints and can help arrange legal advice or support.",
              tr: "Ayrımcılıkla Mücadele Bürosu, ayrımcılık şikayetlerini kayda alır ve hukuki destek sağlanmasına yardımcı olabilir."
            }
          },
          {
            vraag: "Sociaal Raadslieden kunnen helpen met het invullen van formulieren.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Sociaal Raadslieden geven gratis advies en helpen mensen met formulieren, brieven en regelingen.",
              en: "Social Counsellors (Sociaal Raadslieden) give free advice and help people with forms, letters, and arrangements.",
              tr: "Sosyal Danışmanlar (Sociaal Raadslieden), ücretsiz danışmanlık verir ve insanlara formlar, mektuplar ve düzenlemelerle ilgili yardımcı olur."
            }
          },
          {
            vraag: "Waarvoor gebruik je DigiD?",
            opties: [
              "Om veilig in te loggen op websites van de overheid",
              "Om geld over te maken naar het buitenland",
              "Om een rijbewijs te halen"
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "DigiD gebruik je om veilig in te loggen op websites van de overheid en de zorg.",
              en: "You use DigiD to log in securely to government and healthcare websites.",
              tr: "DigiD, devlet ve sağlık kurumlarının web sitelerine güvenli giriş yapmak için kullanılır."
            }
          },
          {
            vraag: "Je verhuist naar een ander huis. Wie moet je nieuwe adres weten?",
            opties: ["De gemeente", "Je werkgever", "Je huisarts"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Bij een verhuizing moet je je nieuwe adres binnen vijf dagen doorgeven aan de gemeente.",
              en: "When you move, you must report your new address to the municipality within five days.",
              tr: "Taşındığınızda, yeni adresinizi beş gün içinde belediyeye bildirmeniz gerekir."
            }
          },
          {
            vraag: "Er is een gevaarlijk ongeluk gebeurd en je hebt direct hulp nodig. Welk nummer bel je?",
            opties: ["0800-0123", "112", "0900-8844"],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "112 is het alarmnummer voor spoedgevallen waarbij snel politie, brandweer of ambulance nodig is.",
              en: "112 is the emergency number for urgent situations requiring police, fire brigade, or ambulance.",
              tr: "112, polis, itfaiye veya ambulansa hızlı ihtiyaç duyulan acil durumlar için aranan numaradır."
            }
          },
          {
            vraag: "Waar kun je terecht met een klacht over een gemeente die je niet goed helpt?",
            opties: ["Bij de Nationale Ombudsman", "Bij de Kamer van Koophandel", "Bij de Belastingdienst"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De Nationale Ombudsman onderzoekt klachten van burgers over de overheid, zoals een gemeente.",
              en: "The National Ombudsman investigates citizens' complaints about the government, such as a municipality.",
              tr: "Ulusal Ombudsman, belediye gibi devlet kurumları hakkındaki vatandaş şikayetlerini araştırır."
            }
          }
        ]
      }
    ]
  });
})();
