(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerExamen({
    id: "a2-knm-thema-1-werk",
    vak: "knm",
    niveau: "A2",
    bron: "oefentoets",
    titel: "KNM — Thema 1: Werk en inkomen",
    geslaagdVanaf: 9,
    teksten: [
      {
        titel: "Werk en inkomen",
        html: "<p>Vragen over solliciteren, contracten, vakbonden, belasting en geld lenen in Nederland.</p>",
        vragen: [
          {
            vraag: "Wat is een vaste baan?",
            opties: [
              "Een baan voor onbepaalde tijd.",
              "Een baan die op een bepaalde datum stopt.",
              "Een baan van altijd fulltime werken."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een vaste baan is een contract zonder einddatum (onbepaalde tijd). Een tijdelijke baan heeft wel een einddatum.",
              en: "A permanent job (vaste baan) is a contract without an end date. A temporary job does have an end date.",
              tr: "Kadrolu iş (vaste baan), bitiş tarihi olmayan bir sözleşmedir. Geçici işin ise bir bitiş tarihi vardır."
            }
          },
          {
            vraag: "Wat is vrijwilligerswerk?",
            opties: [
              "Werken voor een heel hoog salaris.",
              "Werken zonder salaris.",
              "Werken met een vast contract."
            ],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Bij vrijwilligerswerk help je mensen of een organisatie, maar je krijgt er geen salaris voor.",
              en: "With volunteer work, you help people or an organisation, but you do not receive a salary for it.",
              tr: "Gönüllü çalışmada insanlara veya bir kuruluşa yardım edersiniz, ancak bunun için maaş almazsınız."
            }
          },
          {
            vraag: "U bent ontslagen en wilt een werkloosheidsuitkering aanvragen. Waar doet u dit?",
            opties: [
              "Bij de gemeente.",
              "Bij de Sociale dienst.",
              "Bij het UWV."
            ],
            antwoord: 2,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Het UWV (Uitvoeringsinstituut Werknemersverzekeringen) regelt de WW-uitkering voor mensen die hun baan zijn verloren.",
              en: "The UWV (Employee Insurance Agency) handles unemployment benefits (WW) for people who lost their job.",
              tr: "İşini kaybeden kişiler için işsizlik ödeneğini (WW) UWV (Çalışan Sigortaları Uygulama Kurumu) düzenler."
            }
          },
          {
            vraag: "Wat is een cv?",
            opties: [
              "Een overzicht van je persoonlijke gegevens, opleiding en werkervaring.",
              "Een brief waarin je vraagt om meer salaris.",
              "Een contract tussen werkgever en werknemer."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een cv (curriculum vitae) geeft een overzicht van je gegevens, opleidingen en werkervaring. Je stuurt het mee als je solliciteert.",
              en: "A CV (curriculum vitae) gives an overview of your details, education and work experience. You send it when applying for a job.",
              tr: "Bir özgeçmiş (cv), kişisel bilgilerinizin, eğitiminizin ve iş deneyiminizin bir özetini verir. İş başvurusunda gönderilir."
            }
          },
          {
            vraag: "Wat is een parttime baan?",
            opties: [
              "Een baan van 32 uur per week.",
              "Een baan van 40 uur per week.",
              "Een baan zonder salaris."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een parttime (deeltijd) baan is minder dan een volledige werkweek, bijvoorbeeld 32 uur in plaats van 36-40 uur.",
              en: "A part-time job has fewer hours than a full working week, for example 32 hours instead of 36-40 hours.",
              tr: "Yarı zamanlı (parttime) iş, tam haftalık çalışmadan daha az saat içerir, örneğin 36-40 saat yerine 32 saat."
            }
          },
          {
            vraag: "Wat doet de vakbond?",
            opties: [
              "Hij betaalt de WW-uitkering aan werklozen.",
              "Hij zorgt samen met werkgevers voor een CAO.",
              "Hij controleert of bedrijven belasting betalen."
            ],
            antwoord: 1,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een vakbond komt op voor de belangen van werknemers en maakt samen met werkgevers afspraken in een CAO.",
              en: "A trade union represents the interests of employees and, together with employers, makes agreements in a collective labour agreement (CAO).",
              tr: "Bir sendika, çalışanların haklarını korur ve işverenlerle birlikte toplu iş sözleşmesi (CAO) için anlaşmalar yapar."
            }
          },
          {
            vraag: "Wat is een belangrijke regel uit de arbowet?",
            opties: [
              "Elke werknemer moet veilig kunnen werken.",
              "Elke werknemer moet een vast contract krijgen.",
              "Elke werknemer moet lid zijn van een vakbond."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De arbowet (Arbeidsomstandighedenwet) zorgt ervoor dat werkgevers een veilige en gezonde werkplek moeten regelen.",
              en: "The Working Conditions Act (arbowet) requires employers to provide a safe and healthy workplace.",
              tr: "İş Sağlığı ve Güvenliği Kanunu (arbowet), işverenlerin güvenli ve sağlıklı bir çalışma ortamı sağlamasını gerektirir."
            }
          },
          {
            vraag: "U leent geld van de bank. Wat doet u elke maand met dat geld?",
            opties: [
              "U lost de lening af.",
              "U lost de lening op.",
              "U schrijft de lening af."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Als je een lening hebt, betaal je die elke maand een stukje terug. Dit heet de lening 'aflossen'.",
              en: "If you have a loan, you pay it back bit by bit every month. This is called 'repaying' (aflossen) the loan.",
              tr: "Bir krediniz varsa, her ay biraz geri ödersiniz. Bu işlem 'aflossen' (krediyi geri ödemek) olarak adlandırılır."
            }
          },
          {
            vraag: "Je jaaropgave is een loonstrook voor een heel jaar.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "De jaaropgave is een overzicht van je salaris en de ingehouden belasting over het hele jaar. Je hebt deze nodig voor de belastingaangifte.",
              en: "The annual statement (jaaropgave) is an overview of your salary and the tax withheld over the whole year. You need it for your tax return.",
              tr: "Yıllık bildirim (jaaropgave), tüm yıl boyunca maaşınızın ve kesilen verginin bir özetidir. Vergi beyannamesi için gereklidir."
            }
          },
          {
            vraag: "In de CAO staan afspraken voor alle mensen die in een sector werken.",
            opties: ["Waar", "Niet waar"],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een CAO (collectieve arbeidsovereenkomst) bevat afspraken over loon en arbeidsvoorwaarden voor een hele sector of bedrijf.",
              en: "A CAO (collective labour agreement) contains agreements about pay and working conditions for an entire sector or company.",
              tr: "CAO (toplu iş sözleşmesi), bütün bir sektör veya şirket için ücret ve çalışma koşulları hakkındaki anlaşmaları içerir."
            }
          },
          {
            vraag: "Hoe verdient een zelfstandig ondernemer geld?",
            opties: [
              "Met een eigen bedrijf.",
              "Met een vast salaris van een werkgever.",
              "Met een uitkering van het UWV."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Een zelfstandig ondernemer (zzp'er) heeft een eigen bedrijf en verdient geld door eigen klanten en opdrachten.",
              en: "A self-employed entrepreneur has their own business and earns money through their own clients and assignments.",
              tr: "Bağımsız bir girişimci (zzp'er) kendi işine sahiptir ve kendi müşterileri ve işleriyle para kazanır."
            }
          },
          {
            vraag: "Van je brutosalaris betaal je belasting aan de overheid. Waarvoor gebruikt de overheid dit geld onder andere?",
            opties: [
              "Voor het bouwen van wegen en bruggen.",
              "Voor het salaris van je werkgever.",
              "Voor de winst van jouw bedrijf."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Belastinggeld wordt onder andere gebruikt voor wegen, bruggen, onderwijs en zorg.",
              en: "Tax money is used among other things for roads, bridges, education and healthcare.",
              tr: "Vergi parası, yollar, köprüler, eğitim ve sağlık hizmetleri için kullanılır."
            }
          },
          {
            vraag: "Wat stuur je meestal mee als je solliciteert naar een baan?",
            opties: [
              "Een sollicitatiebrief en je cv.",
              "Alleen een kopie van je paspoort.",
              "Alleen je laatste loonstrook."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Bij een sollicitatie stuur je meestal een sollicitatiebrief (waarom je de baan wilt) en je cv (je ervaring en opleiding).",
              en: "When applying for a job, you usually send an application letter (why you want the job) and your CV (your experience and education).",
              tr: "Bir işe başvururken genellikle bir başvuru mektubu (işi neden istediğinizi açıklayan) ve özgeçmişinizi (deneyim ve eğitim) gönderirsiniz."
            }
          },
          {
            vraag: "Mariska wil een eigen webshop beginnen. Wat moet zij volgens de wet doen?",
            opties: [
              "Zich inschrijven bij de Kamer van Koophandel.",
              "Lid worden van een vakbond.",
              "Een ontslagvergunning aanvragen."
            ],
            antwoord: 0,
            antwoordBron: "afgeleid",
            uitleg: {
              nl: "Iedereen die een eigen bedrijf start, moet zich wettelijk inschrijven bij de Kamer van Koophandel (KvK).",
              en: "Everyone who starts their own business is legally required to register with the Chamber of Commerce (KvK).",
              tr: "Kendi işini kuran herkes yasal olarak Ticaret Odası'na (KvK) kayıt olmak zorundadır."
            }
          }
        ]
      }
    ]
  });
})();
