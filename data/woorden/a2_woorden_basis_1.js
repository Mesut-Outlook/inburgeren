(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerWoorden({
    id: "a2-woorden-basis-1",
    titel: "Basiswoorden A2 - Deel 1",
    bronExamen: "a2-basis-1",
    icoon: "👋",
    intro: {
      nl: "Leer begroetingen, tijd, dagen, maanden, seizoenen en familie.",
      en: "Learn greetings, time, days, months, seasons, and family.",
      tr: "Selamlaşmalar, zaman, günler, aylar, mevsimler ve aileyi öğrenin."
    },
    items: [
      { woord: "hallo", nl: "een groet als je iemand ontmoet", en: "hello", tr: "merhaba", voorbeeld: "Hallo, hoe gaat het met jou?" },
      { woord: "goedemorgen", nl: "een groet in de ochtend tot 12:00 uur", en: "good morning", tr: "günaydın", voorbeeld: "Goedemorgen! Heb je lekker geslapen?" },
      { woord: "goedemiddag", nl: "een groet in de middag tussen 12:00 en 18:00 uur", en: "good afternoon", tr: "tünaydın / iyi günler", voorbeeld: "Goedemiddag meneer, wat kan ik voor u doen?" },
      { woord: "goedenavond", nl: "een groet in de avond vanaf 18:00 uur", en: "good evening", tr: "iyi akşamlar", voorbeeld: "Goedenavond allemaal, welkom op ons feest." },
      { woord: "dag", nl: "een groet bij aankomst of vertrek", en: "good day / goodbye", tr: "iyi günler / merhaba / hoşça kal", voorbeeld: "Dag mevrouw, tot de volgende keer!" },
      { woord: "tot ziens", nl: "een groet als je weggaat en elkaar weer zult zien", en: "goodbye", tr: "görüşmek üzere", voorbeeld: "Bedankt voor het gesprek, tot ziens!" },
      { woord: "doei", nl: "een informele groet bij het weggaan", en: "bye", tr: "bay bay / hoşça kal", voorbeeld: "Ik ga nu naar huis. Doei!" },
      { woord: "alsjeblieft", nl: "woord dat je gebruikt als je beleefd iets vraagt of geeft", en: "please / here you are", tr: "lütfen / buyurun", voorbeeld: "Alsjeblieft, hier is je koffie." },
      { woord: "dank je wel", nl: "woord dat je zegt als je iemand bedankt (informeel)", en: "thank you", tr: "teşekkür ederim", voorbeeld: "Dank je wel voor je hulp met de boodschappen." },
      { woord: "dank u wel", nl: "woord dat je zegt als je iemand beleefd bedankt (formeel)", en: "thank you (formal)", tr: "teşekkür ederim (saygı ifadesi)", voorbeeld: "Dank u wel voor het advies, dokter." },
      { woord: "de meneer", nl: "een volwassen man, beleefde vorm", en: "sir / gentleman", tr: "beyefendi / bay", voorbeeld: "Die meneer daar wil u iets vragen." },
      { woord: "de mevrouw", nl: "een volwassen vrouw, beleefde vorm", en: "madam / lady", tr: "hanımefendi / bayan", voorbeeld: "Mevrouw Jansen is onze nieuwe lerares." },
      { woord: "sorry", nl: "woord om excuses aan te bieden", en: "sorry", tr: "üzgünüm / afedersiniz", voorbeeld: "Sorry, ik ben te laat gekomen." },
      { woord: "pardon", nl: "woord om beleefd de aandacht te vragen of excuses aan te bieden", en: "excuse me / pardon", tr: "pardon / afedersiniz", voorbeeld: "Pardon, mag ik er even langs?" },
      { woord: "gefeliciteerd", nl: "groet om iemand geluk te wensen met een verjaardag of succes", en: "congratulations", tr: "tebrikler / doğum günün kutlu olsun", voorbeeld: "Gefeliciteerd met je verjaardag!" },
      { woord: "welkom", nl: "groet om aan te geven dat iemand gewenst is", en: "welcome", tr: "hoş geldiniz", voorbeeld: "Welkom in ons nieuwe huis!" },
      { woord: "hoe gaat het?", nl: "vraag naar de gezondheid of situatie van iemand", en: "how are you?", tr: "nasılsın / nasıl gidiyor?", voorbeeld: "Hallo Jan, hoe gaat het?" },
      { woord: "prima", nl: "heel goed, uitstekend", en: "fine / great", tr: "harika / çok iyi", voorbeeld: "Met mij gaat het prima, dank je." },
      { woord: "de seconde", nl: "een hele korte tijd, een zestigste deel van een minuut", en: "second", tr: "saniye", voorbeeld: "Wacht even een seconde, alsjeblieft." },
      { woord: "de minuut", nl: "een tijd van zestig seconden", en: "minute", tr: "dakika", voorbeeld: "De bus komt over vijf minuten." },
      { woord: "het uur", nl: "een tijd van zestig minuten", en: "hour", tr: "saat (zaman dilimi)", voorbeeld: "We moeten een uur wachten op de trein." },
      { woord: "de dag", nl: "een periode van 24 uur", en: "day", tr: "gün", voorbeeld: "Er zitten zeven dagen in een week." },
      { woord: "de week", nl: "een periode van zeven dagen", en: "week", tr: "hafta", voorbeeld: "Volgende week ga ik op vakantie." },
      { woord: "de maand", nl: "een van de twaalf delen van een jaar", en: "month", tr: "ay", voorbeeld: "De maand juli is meestal erg warm." },
      { woord: "het jaar", nl: "een periode van twaalf maanden", en: "year", tr: "yıl / sene", voorbeeld: "Hij woont al een jaar in Nederland." },
      { woord: "de ochtend", nl: "het begin van de dag, van 6:00 tot 12:00 uur", en: "morning", tr: "sabah", voorbeeld: "Ik drink in de ochtend altijd koffie." },
      { woord: "de middag", nl: "het deel van de dag tussen 12:00 en 18:00 uur", en: "afternoon", tr: "öğleden sonra", voorbeeld: "Zullen we vanmiddag samen lunchen?" },
      { woord: "de avond", nl: "het deel van de dag tussen 18:00 en 24:00 uur", en: "evening", tr: "akşam", voorbeeld: "In de avond kijk ik graag televisie." },
      { woord: "de nacht", nl: "de tijd dat het donker is, van 24:00 tot 6:00 uur", en: "night", tr: "gece", voorbeeld: "Ik slaap goed in de nacht." },
      { woord: "de tijd", nl: "de uren, minuten en seconden waarin we leven", en: "time", tr: "zaman / vakit", voorbeeld: "Heb je tijd om mij te helpen?" },
      { woord: "de klok", nl: "een apparaat dat de tijd laat zien", en: "clock / watch", tr: "saat (duvar/kol saati)", voorbeeld: "De klok hangt aan de muur in de keuken." },
      { woord: "vandaag", nl: "op deze dag", en: "today", tr: "bugün", voorbeeld: "Vandaag is het maandag." },
      { woord: "gisteren", nl: "op de dag voor vandaag", en: "yesterday", tr: "dün", voorbeeld: "Gisteren was ik de hele dag thuis." },
      { woord: "morgen", nl: "op de dag na vandaag", en: "tomorrow", tr: "yarın", voorbeeld: "Morgen moet ik weer werken." },
      { woord: "het weekend", nl: "de zaterdag en de zondag", en: "weekend", tr: "hafta sonu", voorbeeld: "Fijn weekend en tot maandag!" },
      { woord: "de lente", nl: "het seizoen tussen de winter en de zomer", en: "spring", tr: "ilkbahar", voorbeeld: "In de lente bloeien de bloemen." },
      { woord: "de zomer", nl: "het warmste seizoen van het jaar", en: "summer", tr: "yaz", voorbeeld: "Wij gaan in de zomer naar het strand." },
      { woord: "de herfst", nl: "het seizoen tussen de zomer en de winter", en: "autumn / fall", tr: "sonbahar", voorbeeld: "In de herfst vallen de bladeren van de bomen." },
      { woord: "de winter", nl: "het koudste seizoen van het jaar", en: "winter", tr: "kış", voorbeeld: "Er ligt vaak sneeuw in de winter." },
      { woord: "het seizoen", nl: "een van de vier delen van het jaar", en: "season", tr: "mevsim", voorbeeld: "Mijn favoriete seizoen is de lente." },
      { woord: "de verjaardag", nl: "de dag waarop je geboren bent en dat viert", en: "birthday", tr: "doğum günü", voorbeeld: "Mijn verjaardag is op 15 oktober." },
      { woord: "de kalender", nl: "een lijst met de dagen, weken en maanden van het jaar", en: "calendar", tr: "takvim", voorbeeld: "Ik schrijf alle verjaardagen op de kalender." },
      { woord: "nul", nl: "het getal 0", en: "zero", tr: "sıfır", voorbeeld: "Het is koud, de temperatuur is nul graden." },
      { woord: "één", nl: "het getal 1", en: "one", tr: "bir", voorbeeld: "Ik wil graag één brood kopen." },
      { woord: "twee", nl: "het getal 2", en: "two", tr: "iki", voorbeeld: "Zij heeft twee katten." },
      { woord: "de eerste", nl: "nummer één in een rij of serie", en: "first", tr: "birinci / ilk", voorbeeld: "Vandaag is de eerste dag van de maand." },
      { woord: "de tweede", nl: "nummer twee in een rij of serie", en: "second (ordinal)", tr: "ikinci", voorbeeld: "Dit is mijn tweede jaar in Nederland." },
      { woord: "de familie", nl: "de mensen waarmee je door geboorte of huwelijk bent verbonden", en: "family / relatives", tr: "aile / akrabalar", voorbeeld: "Mijn hele familie komt op mijn feest." },
      { woord: "de ouders", nl: "vader en moeder samen", en: "parents", tr: "anne baba / ebeveyn", voorbeeld: "Mijn ouders wonen in een groot huis." },
      { woord: "de vader", nl: "een man met een kind of kinderen", en: "father", tr: "baba", voorbeeld: "Mijn vader houdt van tuinieren." },
      { woord: "de moeder", nl: "een vrouw met een kind of kinderen", en: "mother", tr: "anne", voorbeeld: "Mijn moeder kookt erg lekker." },
      { woord: "de zoon", nl: "een mannelijk kind van ouders", en: "son", tr: "erkek evlat / oğul", voorbeeld: "Hun zoon gaat al naar de middelbare school." },
      { woord: "de dochter", nl: "een vrouwelijk kind van ouders", en: "daughter", tr: "kız evlat / kız", voorbeeld: "Onze dochter is net vier jaar geworden." },
      { woord: "het kind", nl: "een jonge jongen of meisje", en: "child", tr: "çocuk", voorbeeld: "Het kind speelt buiten met een bal." },
      { woord: "de baby", nl: "een heel jong kind dat nog niet kan lopen of praten", en: "baby", tr: "bebek", voorbeeld: "De baby slaapt in zijn bedje." },
      { woord: "de broer", nl: "een mannelijk gezinslid met dezelfde ouders", en: "brother", tr: "erkek kardeş / ağabey", voorbeeld: "Ik heb één broer en twee zussen." },
      { woord: "de zus", nl: "een vrouwelijk gezinslid met dezelfde ouders", en: "sister", tr: "kız kardeş / abla", voorbeeld: "Mijn oudste zus woont in Utrecht." },
      { woord: "de opa", nl: "de vader van je vader of moeder", en: "grandfather", tr: "dede / büyükbaba", voorbeeld: "Mijn opa is tachtig jaar oud." },
      { woord: "de oma", nl: "de moeder van je vader of moeder", en: "grandmother", tr: "anneanne / babaanne / büyükanne", voorbeeld: "Oma vertelt altijd leuke verhalen." },
      { woord: "de man", nl: "een volwassen man of echtgenoot", en: "man / husband", tr: "adam / erkek / eş (koca)", voorbeeld: "Mijn man werkt in de bouw." },
      { woord: "de vrouw", nl: "een volwassen vrouw of echtgenote", en: "woman / wife", tr: "kadın / eş (karı)", voorbeeld: "Die vrouw daar is mijn collega." },
      { woord: "de vriend", nl: "een man waarmee je een goede relatie hebt", en: "friend (male)", tr: "arkadaş / dost (erkek)", voorbeeld: "Thomas is een goede vriend van mij." },
      { woord: "de vriendin", nl: "een vrouw waarmee je een goede relatie hebt", en: "friend (female)", tr: "arkadaş / dost (kadın)", voorbeeld: "Zij gaat met haar vriendin naar de bioscoop." },
      { woord: "de oom", nl: "de broer van je vader of moeder", en: "uncle", tr: "amca / dayı", voorbeeld: "Mijn oom woont in Amsterdam." },
      { woord: "de tante", nl: "de zus van je vader of moeder", en: "aunt", tr: "hala / teyze", voorbeeld: "Ik krijg een cadeau van mijn tante." },
      { woord: "de buurman", nl: "een man die naast je woont", en: "neighbor (male)", tr: "erkek komşu", voorbeeld: "De buurman helpt mij met de tuin." },
      { woord: "de buurvrouw", nl: "een vrouw die naast je woont", en: "neighbor (female)", tr: "kadın komşu", voorbeeld: "Ik drink soms koffie met mijn buurvrouw." }
    ],
    vragen: [
      {
        type: "mc",
        vraag: "Hoe begroet je iemand formeel in de ochtend?",
        opties: [
          "Goedemorgen",
          "Goedenavond",
          "Doei"
        ],
        antwoord: 0,
        uitleg: {
          nl: "In de ochtend (tot 12:00 uur) zeg je 'goedemorgen'.",
          en: "In the morning (until 12:00 PM) you say 'goedemorgen'.",
          tr: "Sabah saatlerinde (saat 12:00'ye kadar) 'goedemorgen' denir."
        }
      },
      {
        type: "mc",
        vraag: "Wat is de eerste dag van het weekend?",
        opties: [
          "Vrijdag",
          "Zaterdag",
          "Zondag"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Het weekend bestaat uit zaterdag en zondag. De eerste dag is dus zaterdag.",
          en: "The weekend consists of Saturday and Sunday. The first day is Saturday.",
          tr: "Hafta sonu Cumartesi ve Pazar günlerinden oluşur. İlk günü Cumartesi (zaterdag) günüdür."
        }
      },
      {
        type: "mc",
        vraag: "De zoon van mijn vader is mijn...",
        opties: [
          "Oom",
          "Buurman",
          "Broer"
        ],
        antwoord: 2,
        uitleg: {
          nl: "De zoon van je vader (of moeder) is je broer.",
          en: "The son of your father (or mother) is your brother.",
          tr: "Babanızın (veya annenizin) oğlu sizin erkek kardeşinizdir (broer)."
        }
      },
      {
        type: "mc",
        vraag: "Als je te laat komt voor een afspraak, wat zeg je?",
        opties: [
          "Gefeliciteerd",
          "Alsjeblieft",
          "Sorry"
        ],
        antwoord: 2,
        uitleg: {
          nl: "Als je te laat bent of een fout maakt, zeg je 'sorry'.",
          en: "If you are late or make a mistake, you say 'sorry'.",
          tr: "Geç kaldığınızda veya bir hata yaptığınızda 'sorry' (üzgünüm/özür dilerim) dersiniz."
        }
      },
      {
        type: "mc",
        vraag: "Welk seizoen volgt direct na de zomer?",
        opties: [
          "De lente",
          "De herfst",
          "De winter"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Na de zomer begint de herfst. Daarna komt de winter.",
          en: "After summer comes autumn (herfst). Then winter.",
          tr: "Yaz mevsiminden sonra sonbahar (herfst) başlar. Sonrasında kış gelir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Mijn moeder en vader zijn mijn ... (meervoud)",
        antwoord: "ouders",
        uitleg: {
          nl: "Je vader en moeder samen zijn je 'ouders'.",
          en: "Your father and mother together are your 'parents' (ouders).",
          tr: "Anne ve babanızın ikisine birden ebeveyn yani 'ouders' denir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. 60 seconden is één ...",
        antwoord: "minuut",
        uitleg: {
          nl: "Er zitten 60 seconden in één minuut.",
          en: "There are 60 seconds in one minute (minuut).",
          tr: "Bir dakikada (minuut) 60 saniye vardır."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Vandaag is het dinsdag, gisteren was het ...",
        antwoord: "maandag",
        uitleg: {
          nl: "De dag voor dinsdag is maandag.",
          en: "The day before Tuesday is Monday (maandag).",
          tr: "Salı gününden önceki gün Pazartesi (maandag) günüdür."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. De vader van mijn moeder is mijn ...",
        antwoord: "opa",
        uitleg: {
          nl: "De vader van je moeder of vader is je opa (grootvader).",
          en: "The father of your mother or father is your grandfather (opa).",
          tr: "Annenizin veya babanızın babası dedenizdir (opa)."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Als je weggaat en iemand groet, zeg je: 'tot ...'",
        antwoord: "ziens",
        uitleg: {
          nl: "'Tot ziens' is een beleefde manier om gedag te zeggen.",
          en: "'Tot ziens' is a polite way to say goodbye.",
          tr: "'Tot ziens', hoşça kal veya görüşmek üzere anlamına gelen saygılı bir vedalaşmadır."
        }
      },
      {
        type: "gat",
        zin: "Ik wil graag ___ kopje thee bestellen, alsjeblieft.",
        antwoord: "één|een",
        uitleg: {
          nl: "Je kunt 'één' of 'een' gebruiken om het aantal aan te geven.",
          en: "You can use 'één' or 'een' to indicate the quantity.",
          tr: "Miktarı belirtmek için 'een' veya vurgulu olarak 'één' (bir) kullanabilirsiniz."
        }
      },
      {
        type: "gat",
        zin: "De baby slaapt in zijn bedje omdat hij nog heel ___ is.",
        antwoord: "klein|jong",
        uitleg: {
          nl: "Een baby is nog heel klein of jong.",
          en: "A baby is still very small (klein) or young (jong).",
          tr: "Bir bebek henüz çok küçük (klein) veya gençtir (jong)."
        }
      },
      {
        type: "gat",
        zin: "Mijn buurman woont naast ons. Zijn vrouw is mijn ___.",
        antwoord: "buurvrouw",
        uitleg: {
          nl: "De vrouwelijke vorm van buurman is buurvrouw.",
          en: "The female form of neighbor is 'buurvrouw'.",
          tr: "Yanınızda oturan kadına komşu yani 'buurvrouw' denir."
        }
      },
      {
        type: "gat",
        zin: "In de ___ is het erg koud en ligt er soms sneeuw.",
        antwoord: "winter",
        uitleg: {
          nl: "Het koudste seizoen met sneeuw is de winter.",
          en: "The coldest season with snow is winter (winter).",
          tr: "Kar yağan ve en soğuk mevsim kıştır (winter)."
        }
      },
      {
        type: "gat",
        zin: "Als je jarig bent, zeggen mensen: '___ met je verjaardag!'",
        antwoord: "gefeliciteerd",
        uitleg: {
          nl: "Als iemand jarig is, feliciteer je hem met 'gefeliciteerd'.",
          en: "When it is someone's birthday, you congratulate them with 'gefeliciteerd'.",
          tr: "Birinin doğum günü olduğunda onu 'gefeliciteerd' (tebrikler/kutlu olsun) diyerek kutlarsınız."
        }
      }
    ]
  });
})();
