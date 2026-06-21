(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerWoorden({
    id: "a2-woorden-basis-4",
    titel: "Basiswoorden A2 - Deel 4",
    bronExamen: "a2-basis-4",
    icoon: "🏫",
    intro: {
      nl: "Leer over winkelen & geld, school, gevoelens & eigenschappen, en grammatica (werkwoorden/voorzetsels).",
      en: "Learn about shopping & money, school, feelings & attributes, and grammar (verbs/prepositions).",
      tr: "Alışveriş & para, okul, duygular & özellikler ve dil bilgisi (fiiller/edatlar) hakkında öğrenin."
    },
    items: [
      { woord: "de winkel", nl: "een gebouw of ruimte waar je producten kunt kopen", en: "shop / store", tr: "mağaza / dükkan", voorbeeld: "De winkel sluit om zes uur." },
      { woord: "winkelen", nl: "winkels bezoeken om dingen te kopen of te bekijken", en: "shop (verb)", tr: "alışveriş yapmak", voorbeeld: "Ik ga op zaterdag gezellig winkelen." },
      { woord: "het geld", nl: "munten en bankbiljetten waarmee je kunt betalen", en: "money", tr: "para", voorbeeld: "Heeft u genoeg geld bij u?" },
      { woord: "de prijs", nl: "het bedrag dat iets kost in de winkel", en: "price", tr: "fiyat", voorbeeld: "De prijs van dit boek is vijftien euro." },
      { woord: "de kassa", nl: "de plaats in de winkel waar je betaalt", en: "cash register / checkout", tr: "kasa", voorbeeld: "U kunt betalen bij de kassa." },
      { woord: "de bon", nl: "het papieren bewijs dat je hebt betaald in een winkel", en: "receipt / bill", tr: "fiş / fatura", voorbeeld: "Wilt u de bon mee in de tas?" },
      { woord: "de korting", nl: "vermindering van de prijs, je hoeft minder te betalen", en: "discount", tr: "indirim", voorbeeld: "Op deze jas zit twintig procent korting." },
      { woord: "betalen", nl: "geld geven voor een product of dienst", en: "pay (verb)", tr: "ödemek", voorbeeld: "Kan ik hier met mijn telefoon betalen?" },
      { woord: "kopen", nl: "iets krijgen door geld te geven", en: "buy (verb)", tr: "satın almak", voorbeeld: "Ik wil een nieuw T-shirt kopen." },
      { woord: "verkopen", nl: "iets aanbieden en weggeven in ruil voor geld", en: "sell (verb)", tr: "satmak", voorbeeld: "Zij verkopen oude boeken op de markt." },
      { woord: "goedkoop", nl: "kost weinig geld", en: "cheap", tr: "ucuz", voorbeeld: "Groente is hier erg goedkoop." },
      { woord: "duur", nl: "kost veel geld", en: "expensive", tr: "pahalı", voorbeeld: "Een nieuwe auto is erg duur." },
      { woord: "de bank", nl: "een organisatie waar je geld kunt bewaren of lenen", en: "bank", tr: "banka", voorbeeld: "Ik moet geld storten bij de bank." },
      { woord: "de pinpas", nl: "een plastic kaart van de bank waarmee je elektronisch betaalt", en: "debit card", tr: "banka kartı", voorbeeld: "Ik heb mijn pinpas in mijn portemonnee zitten." },
      { woord: "pinnen", nl: "betalen met je pinpas aan een automaat", en: "pay with debit card", tr: "kartla ödemek / pin yapmak", voorbeeld: "U kunt hier alleen pinnen, contant geld kan niet." },
      { woord: "de school", nl: "een gebouw waar leerlingen les krijgen en leren", en: "school", tr: "okul", voorbeeld: "De kinderen gaan om half negen naar school." },
      { woord: "de opleiding", nl: "de studie of cursus die je volgt om een beroep te leren", en: "education / training / course", tr: "eğitim / öğrenim", voorbeeld: "Zij volgt een opleiding tot verpleegkundige." },
      { woord: "de klas", nl: "de groep leerlingen of de ruimte waarin zij les krijgen", en: "class / classroom", tr: "sınıf", voorbeeld: "Er zitten twintig leerlingen in onze klas." },
      { woord: "de les", nl: "de periode waarin een leraar uitleg geeft over een vak", en: "lesson / class", tr: "ders", voorbeeld: "De les Nederlands begint om tien uur." },
      { woord: "de leraar", nl: "de persoon die lesgeeft op een school", en: "teacher", tr: "öğretmen", voorbeeld: "Onze leraar kan heel goed uitleggen." },
      { woord: "de leerling", nl: "iemand die les krijgt op een school (vaak basisschool of middelbare school)", en: "pupil / student", tr: "öğrenci (okul öncesi/ortaokul)", voorbeeld: "De leerlingen luisteren aandachtig." },
      { woord: "de student", nl: "iemand die studeert aan een hogeschool of universiteit", en: "student", tr: "öğrenci (yükseköğrenim)", voorbeeld: "De student woont op een kamer in Utrecht." },
      { woord: "het boek", nl: "bedrukte bladzijden tussen twee kaften om te lezen", en: "book", tr: "kitap", voorbeeld: "Ik lees elke avond een hoofdstuk in mijn boek." },
      { woord: "het schrift", nl: "een dun boekje met lege lijntjes om in te schrijven", en: "notebook", tr: "defter", voorbeeld: "Schrijf de woorden op in je schrift." },
      { woord: "de pen", nl: "een voorwerp gevuld met inkt waarmee je kunt schrijven", en: "pen", tr: "tükenmez kalem", voorbeeld: "Mag ik jouw pen even lenen?" },
      { woord: "het huiswerk", nl: "opdrachten die leerlingen thuis moeten maken voor school", en: "homework", tr: "ev ödevi", voorbeeld: "Ik heb mijn huiswerk voor morgen al af." },
      { woord: "het examen", nl: "een officiële test om te kijken of je genoeg weet", en: "exam", tr: "sınav", voorbeeld: "Spannend, morgen heb ik mijn inburgeringsexamen!" },
      { woord: "leren", nl: "kennis opdoen of vaardigheden oefenen", en: "learn / study", tr: "öğrenmek / ders çalışmak", voorbeeld: "Ik moet hard leren voor mijn toets." },
      { woord: "studeren", nl: "een opleiding volgen na de middelbare school", en: "study (verb)", tr: "öğrenim görmek / okumak", voorbeeld: "Zij wil geneeskunde gaan studeren." },
      { woord: "lezen", nl: "geschreven woorden begrijpen en bekijken", en: "read (verb)", tr: "okumak (metin)", voorbeeld: "Ik lees de krant op mijn tablet." },
      { woord: "schrijven", nl: "letters en woorden op papier of een scherm zetten", en: "write (verb)", tr: "yazmak", voorbeeld: "Kun je jouw naam hier schrijven?" },
      { woord: "begrijpen", nl: "snappen wat iets betekent of hoe het werkt", en: "understand", tr: "anlamak", voorbeeld: "Ik begrijp de vraag niet helemaal." },
      { woord: "vragen", nl: "een vraag stellen om informatie te krijgen", en: "ask (verb)", tr: "sormak / istemek", voorbeeld: "Mag ik u wat vragen, mevrouw?" },
      { woord: "blij", nl: "een vrolijk gevoel hebben, tevreden zijn", en: "happy / glad", tr: "mutlu / memnun", voorbeeld: "Ik ben blij dat je er bent." },
      { woord: "boos", nl: "een kwaad gevoel hebben omdat er iets stoms is gebeurd", en: "angry", tr: "kızgın / öfkeli", voorbeeld: "De baas was erg boos omdat hij te laat kwam." },
      { woord: "verdrietig", nl: "een naar gevoel hebben, moeten huilen door verdriet", en: "sad", tr: "üzgün", voorbeeld: "Het kind is verdrietig omdat zijn speelgoed stuk is." },
      { woord: "moe", nl: "weinig energie hebben, willen rusten of slapen", en: "tired", tr: "yorgun", voorbeeld: "Ik ben moe na een lange dag werken." },
      { woord: "bang", nl: "angst hebben voor iets", en: "afraid / scared", tr: "korkmuş", voorbeeld: "De hond is bang voor harde geluiden." },
      { woord: "lief", nl: "aardig, zachtaardig, schattig", en: "sweet / kind / cute", tr: "tatlı / sevimli / nazik", voorbeeld: "Wat een lief klein kindje!" },
      { woord: "aardig", nl: "vriendelijk en sociaal naar anderen", en: "nice / friendly", tr: "nazik / hoş", voorbeeld: "Onze buren zijn heel aardig." },
      { woord: "mooi", nl: "prettig om naar te kijken of te luisteren, fraai", en: "beautiful / pretty", tr: "güzel", voorbeeld: "Zij heeft een mooi schilderij gemaakt." },
      { woord: "lelijk", nl: "niet mooi om naar te kijken", en: "ugly", tr: "çirkin", voorbeeld: "Ik vind dat gebouw erg lelijk." },
      { woord: "groot", nl: "met flinke afmetingen, het tegenovergestelde van klein", en: "big / large", tr: "büyük", voorbeeld: "Dat is een heel groot huis." },
      { woord: "klein", nl: "met geringe afmetingen, het tegenovergestelde van groot", en: "small / little", tr: "küçük", voorbeeld: "Zij woont in een klein appartement." },
      { woord: "oud", nl: "heeft al lang geleefd of bestaat al lang", en: "old", tr: "eski / yaşlı", voorbeeld: "Die auto is al twintig jaar oud." },
      { woord: "nieuw", nl: "net gemaakt of gekocht, nog niet gebruikt", en: "new", tr: "yeni", voorbeeld: "Ik heb een nieuwe telefoon gekocht." },
      { woord: "jong", nl: "heeft nog niet lang geleefd", en: "young", tr: "genç", voorbeeld: "Zij is nog erg jong om te trouwen." },
      { woord: "zijn", nl: "hulpwerkwoord om een toestand aan te geven", en: "to be", tr: "olmak (var olmak / -dir)", voorbeeld: "Wij zijn erg blij met ons nieuwe huis." },
      { woord: "hebben", nl: "in je bezit hebben, beschikken over", en: "to have", tr: "sahip olmak / var (bende var)", voorbeeld: "Zij hebben twee kinderen." },
      { woord: "doen", nl: "een handeling uitvoeren of uitvoeren", en: "to do / make", tr: "yapmak / etmek", voorbeeld: "Wat ga je dit weekend doen?" },
      { woord: "gaan", nl: "je verplaatsen naar een andere plek", en: "to go", tr: "gitmek", voorbeeld: "Ik ga morgen naar Amsterdam." },
      { woord: "komen", nl: "zich verplaatsen naar de plek van de spreker", en: "to come", tr: "gelmek", voorbeeld: "Wanneer kom je bij mij op bezoek?" },
      { woord: "willen", nl: "de wens hebben om iets te krijgen of te doen", en: "to want", tr: "istemek", voorbeeld: "Ik wil graag een kopje koffie bestellen." },
      { woord: "moeten", nl: "verplicht zijn om iets te doen", en: "must / have to", tr: "-meli -malı / zorunda olmak", voorbeeld: "Ik moet morgen om acht uur werken." },
      { woord: "kunnen", nl: "de mogelijkheid of vaardigheid hebben om iets te doen", en: "can / to be able to", tr: "abilmek / ebilmek", voorbeeld: "Kan jij goed Nederlands praten?" },
      { woord: "maken", nl: "bouwen, repareren of bereiden", en: "to make / build", tr: "yapmak / hazırlamak / tamir etmek", voorbeeld: "Ik ga vanavond soep maken." },
      { woord: "geven", nl: "iets aan iemand overhandigen zonder betaling", en: "to give", tr: "vermek", voorbeeld: "Kun je mij dat boek geven?" },
      { woord: "in", nl: "binnen de grenzen van een ruimte of gebied", en: "in / inside", tr: "içinde / -de -da", voorbeeld: "Er ligt kleding in de kast." },
      { woord: "op", nl: "bovenop en in contact met iets anders", en: "on / on top of", tr: "üstünde / üzerinde", voorbeeld: "Het boek ligt op de tafel." },
      { woord: "onder", nl: "lager dan iets anders", en: "under / below", tr: "altında", voorbeeld: "De kat slaapt onder de stoel." },
      { woord: "naast", nl: "aan de zijkant van iets anders", en: "next to / beside", tr: "yanında", voorbeeld: "Het station ligt naast het park." },
      { woord: "voor", nl: "aan de voorkant van iets anders of bestemd voor", en: "in front of / for", tr: "önünde / için", voorbeeld: "De auto staat voor de deur." },
      { woord: "achter", nl: "aan de achterkant van iets anders", en: "behind", tr: "arkasında", voorbeeld: "De tuin is achter het huis." },
      { woord: "wie", nl: "vraagwoord om te vragen naar een persoon", en: "who", tr: "kim", voorbeeld: "Wie is die man daar?" },
      { woord: "wat", nl: "vraagwoord om te vragen naar een ding of actie", en: "what", tr: "ne", voorbeeld: "Wat ga je vanavond eten?" },
      { woord: "waar", nl: "vraagwoord om te vragen naar een plaats", en: "where", tr: "nere / nerede", voorbeeld: "Waar is de dichtstbijzijnde supermarkt?" },
      { woord: "wanneer", nl: "vraagwoord om te vragen naar een tijdstip", en: "when", tr: "ne zaman", voorbeeld: "Wanneer begint de les?" },
      { woord: "waarom", nl: "vraagwoord om te vragen naar de reden", en: "why", tr: "neden / niçin", voorbeeld: "Waarom ben je gisteren niet gekomen?" },
      { woord: "hoe", nl: "vraagwoord om te vragen naar de manier waarop", en: "how", tr: "nasıl", voorbeeld: "Hoe schrijf je jouw naam?" },
      { woord: "hoeveel", nl: "vraagwoord om te vragen naar de hoeveelheid of aantal", en: "how much / how many", tr: "ne kadar / kaç tane", voorbeeld: "Hoeveel kost dit treinkaartje?" }
    ],
    vragen: [
      {
        type: "mc",
        vraag: "Waar betaal je je boodschappen in de winkel?",
        opties: [
          "Bij de kassa",
          "Op het kantoor",
          "In het schrift"
        ],
        antwoord: 0,
        uitleg: {
          nl: "In een winkel betaal je bij de kassa.",
          en: "In a shop, you pay at the cash register (kassa).",
          tr: "Dükkanda veya markette ödemeyi kasada (kassa) yaparsınız."
        }
      },
      {
        type: "mc",
        vraag: "Wat is het tegenovergestelde van 'duur' (kost veel geld)?",
        opties: [
          "Goedkoop",
          "Mooi",
          "Klein"
        ],
        antwoord: 0,
        uitleg: {
          nl: "Het tegenovergestelde van duur is goedkoop.",
          en: "The opposite of expensive (duur) is cheap (goedkoop).",
          tr: "Pahalı (duur) kelimesinin zıt anlamlısı ucuzdur (goedkoop)."
        }
      },
      {
        type: "mc",
        vraag: "Welk vraagwoord gebruik je om naar een specifieke plaats te vragen?",
        opties: [
          "Wanneer",
          "Waar",
          "Wie"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Je gebruikt 'waar' om naar een locatie te vragen. 'Wanneer' is voor tijd en 'wie' voor personen.",
          en: "You use 'waar' (where) to ask about a location.",
          tr: "Bir konumu veya yeri sormak için 'waar' (nerede) soru kelimesi kullanılır."
        }
      },
      {
        type: "mc",
        vraag: "Welk gevoel heb je als je wilt gaan slapen na een hele lange werkdag?",
        opties: [
          "Boos",
          "Moe",
          "Bang"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Als je te weinig energie hebt door inspanning, ben je moe.",
          en: "When you have little energy after work, you are tired (moe).",
          tr: "Uzun süre çalıştıktan sonra enerjiniz kalmadığında yorgun (moe) hissedersiniz."
        }
      },
      {
        type: "mc",
        vraag: "Wat moet je maken of leren na de les voor de volgende dag op school?",
        opties: [
          "Het huiswerk",
          "De korting",
          "De pinpas"
        ],
        antwoord: 0,
        uitleg: {
          nl: "Het werk dat je thuis voor school moet doen is huiswerk.",
          en: "The work you have to do at home for school is homework (huiswerk).",
          tr: "Okul için evde yapılması gereken görevlere ev ödevi (huiswerk) denir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Als je iets niet snapt, zeg je: 'Ik kan het niet ...'",
        antwoord: "begrijpen",
        uitleg: {
          nl: "Snappen of begrijpen betekent dat je het weet.",
          en: "To grasp or comprehend is 'begrijpen' (understand).",
          tr: "Bir şeyi kavramak veya kavramsal olarak çözmek 'anlamak' yani 'begrijpen' fiilidir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul het juiste voorzetsel in. De hond ligt op de vloer ... de tafel. (onder/op)",
        antwoord: "onder",
        uitleg: {
          nl: "Als iets onder het tafelblad ligt, ligt het 'onder' de tafel.",
          en: "If something is beneath the tabletop, it is 'onder' (under) the table.",
          tr: "Köpek masanın altında, yani tablanın aşağısında yattığı için 'onder' edatı kullanılır."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Het papieren bewijs dat je krijgt na de betaling heet de ...",
        antwoord: "bon",
        uitleg: {
          nl: "Als je betaalt, krijg je een kassabon (kortweg 'bon').",
          en: "When you pay, you receive a receipt (bon).",
          tr: "Ödeme yaptıktan sonra aldığınız fişe 'bon' denir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. De grote test aan het einde van een schoolopleiding heet het ...",
        antwoord: "examen",
        uitleg: {
          nl: "Het inburgeringsexamen is een officiële toets.",
          en: "An official final test is an exam (examen).",
          tr: "Okul veya kurs sonunda bilginizi ölçen resmi sınava 'examen' denir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Elektronisch betalen met een pasje noem je ... (werkwoord)",
        antwoord: "pinnen",
        uitleg: {
          nl: "Pinnen is betalen met een pinpas.",
          en: "Paying with a bank card is called 'pinnen' in Dutch.",
          tr: "Banka kartı ile şifre girerek ödeme yapmaya 'pinnen' denir."
        }
      },
      {
        type: "gat",
        zin: "Ik wil graag een nieuwe fiets kopen, maar ik heb niet genoeg ___ op mijn bankrekening.",
        antwoord: "geld",
        uitleg: {
          nl: "Om dingen te kopen heb je geld nodig.",
          en: "To buy things, you need money (geld).",
          tr: "Bir şeyler satın alabilmek için paraya (geld) ihtiyacınız vardır."
        }
      },
      {
        type: "gat",
        zin: "Mijn opa is tachtig jaar oud, maar mijn dochtertje is nog erg ___.",
        antwoord: "jong|klein",
        uitleg: {
          nl: "Het tegenovergestelde van oud is jong of klein.",
          en: "The opposite of old (oud) is young (jong) or small (klein).",
          tr: "Yaşlı (oud) kelimesinin zıt anlamlısı genç (jong) veya küçük (klein) kelimesidir."
        }
      },
      {
        type: "gat",
        zin: "___ euro kost dit boek? Het kost 15 euro.",
        antwoord: "hoeveel",
        uitleg: {
          nl: "Als je naar de prijs vraagt, zeg je 'hoeveel'.",
          en: "When asking about the price, you use 'hoeveel' (how much).",
          tr: "Fiyatı veya miktarı sormak için 'hoeveel' (ne kadar / kaç) kullanılır."
        }
      },
      {
        type: "gat",
        zin: "De boeken liggen niet in de kast, maar ___ op het bureau.",
        antwoord: "op|bovenop",
        uitleg: {
          nl: "Boeken liggen op een bureau.",
          en: "Books lie on top of (op) a desk.",
          tr: "Kitaplar çalışma masasının üzerinde, yani 'op' (üstünde) konumundadır."
        }
      },
      {
        type: "gat",
        zin: "Zij is heel ___ en glimlacht omdat ze is geslaagd voor haar examen.",
        antwoord: "blij|gelukkig",
        uitleg: {
          nl: "Als je slaagt voor je examen, ben je blij of gelukkig.",
          en: "If you pass your exam, you are happy (blij / gelukkig).",
          tr: "Sınavı kazandığınızda sevinir ve mutlu/neşeli (blij/gelukkig) olursunuz."
        }
      }
    ]
  });
})();
