/* data/woorden/a2_woorden_knm_2.js
 * Dutch-English-Turkish KNM vocabulary set #2 for Inburgering A2.
 * Complementary to a2_woorden_knm.js — covers different/additional society
 * vocabulary (toeslagen, instanties, wonen, gezondheid, staatsinrichting,
 * provincies, geschiedenis, normen en waarden).
 * Registered via INB.registerWoorden.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerWoorden({
    id: "a2-woorden-knm-2",
    titel: "KNM — Maatschappij 2 (Wetten, Instanties & Zorg)",
    bronExamen: "knm-notities",
    icoon: "🏛️",
    intro: {
      nl: "Nog meer belangrijke woorden over wonen, geld, gezondheid en de Nederlandse staat — een vervolg op de eerste KNM-woordenlijst.",
      en: "More important words about housing, money, health, and the Dutch state — a follow-up to the first KNM word list.",
      tr: "Konut, para, sağlık ve Hollanda devleti hakkında daha fazla önemli kelime — ilk KNM kelime listesinin devamı."
    },
    items: [
      {
        woord: "het CWI (Centrum voor Werk en Inkomen)",
        nl: "de plek waar je vroeger naartoe ging als je werk zocht; nu via het UWV en de gemeente geregeld",
        en: "Centre for Work and Income (former agency for job seeking, now part of UWV/municipality)",
        tr: "İş ve Gelir Merkezi (eskiden iş aramak için gidilen kurum; artık UWV ve belediye üzerinden yürütülür)",
        voorbeeld: "Vroeger schreef je je bij het CWI in als je een baan zocht."
      },
      {
        woord: "het arbeidsbureau",
        nl: "een kantoor dat helpt bij het zoeken van werk",
        en: "employment office (helps people find work)",
        tr: "iş bulma kurumu (iş aramaya yardımcı olan büro)",
        voorbeeld: "Bij het arbeidsbureau kun je vacatures bekijken en advies krijgen."
      },
      {
        woord: "de sollicitatiebrief",
        nl: "een brief die je schrijft naar een bedrijf om te vragen of je daar mag werken",
        en: "job application letter",
        tr: "iş başvuru mektubu",
        voorbeeld: "Ik heb een open sollicitatiebrief gestuurd naar drie restaurants in de stad."
      },
      {
        woord: "het netwerk",
        nl: "de mensen die je kent (vrienden, familie, collega's) die je kunnen helpen bij het vinden van werk",
        en: "(personal) network (people you know who can help you find a job)",
        tr: "kişisel ağ (iş bulmanıza yardımcı olabilecek arkadaş, aile, tanıdıklar)",
        voorbeeld: "Via mijn netwerk hoorde ik over een vacature bij een groot bedrijf."
      },
      {
        woord: "de wegenbelasting",
        nl: "de belasting die je betaalt omdat je een auto hebt en op de weg rijdt",
        en: "road tax (paid for owning and driving a car)",
        tr: "yol vergisi (araba sahibi olduğunuz için ödenen vergi)",
        voorbeeld: "Elk kwartaal moet ik wegenbelasting betalen voor mijn auto."
      },
      {
        woord: "de inkomstenbelasting",
        nl: "de belasting die je betaalt over het geld dat je verdient met werken",
        en: "income tax (paid on the money you earn from working)",
        tr: "gelir vergisi (çalışarak kazandığınız para üzerinden ödenen vergi)",
        voorbeeld: "Aan het einde van het jaar doe ik mijn belastingaangifte voor de inkomstenbelasting."
      },
      {
        woord: "de huurtoeslag",
        nl: "extra geld van de overheid om je huur te kunnen betalen als je weinig verdient",
        en: "rent benefit (government support to help pay rent for low incomes)",
        tr: "kira yardımı (düşük gelirlilerin kira ödemesine destek olan devlet yardımı)",
        voorbeeld: "Omdat mijn salaris laag is, krijg ik huurtoeslag van de Belastingdienst."
      },
      {
        woord: "de zorgtoeslag",
        nl: "extra geld van de overheid om je zorgverzekering te kunnen betalen als je weinig verdient",
        en: "healthcare benefit (government support to help pay health insurance for low incomes)",
        tr: "sağlık yardımı (düşük gelirlilerin sağlık sigortası ödemesine destek olan devlet yardımı)",
        voorbeeld: "Studenten met een laag inkomen kunnen zorgtoeslag aanvragen."
      },
      {
        woord: "de kinderbijslag",
        nl: "geld dat ouders elk kwartaal van de overheid krijgen voor de opvoeding van hun kinderen",
        en: "child benefit (quarterly payment from the government to help raise children)",
        tr: "çocuk yardımı (devletin çocuk yetiştirme için ebeveynlere üç ayda bir verdiği para)",
        voorbeeld: "Voor elk kind krijgen we kinderbijslag van de Sociale Verzekeringsbank."
      },
      {
        woord: "de toeslag",
        nl: "extra geld dat de Belastingdienst geeft als bijdrage in vaste kosten zoals huur of zorg",
        en: "(government) allowance/benefit (extra money to help with fixed costs like rent or care)",
        tr: "ek ödenek (kira veya sağlık gibi sabit giderlere katkı olarak verilen ek para)",
        voorbeeld: "Je kunt een toeslag aanvragen bij de Belastingdienst voor huur of zorgkosten."
      },
      {
        woord: "het GBA (Gemeentelijke Basisadministratie)",
        nl: "het register van de gemeente waarin alle persoonsgegevens van inwoners staan",
        en: "Municipal Personal Records Database (register with residents' personal data)",
        tr: "Belediye Nüfus Kayıt Sistemi (sakinlerin kişisel verilerinin bulunduğu belediye kaydı)",
        voorbeeld: "Mijn adres staat geregistreerd in het GBA van de gemeente."
      },
      {
        woord: "het ondernemingsplan",
        nl: "een document waarin je beschrijft hoe je een eigen bedrijf gaat starten en geld gaat verdienen",
        en: "business plan (document describing how you will start and run your own business)",
        tr: "iş planı (kendi şirketinizi nasıl kuracağınızı ve para kazanacağınızı açıklayan belge)",
        voorbeeld: "Voor de lening bij de bank moest ik eerst een goed ondernemingsplan schrijven."
      },
      {
        woord: "de brandverzekering",
        nl: "de verzekering die schade door brand aan je huis of spullen vergoedt",
        en: "fire insurance (covers fire damage to your home or belongings)",
        tr: "yangın sigortası (evinize veya eşyalarınıza gelen yangın zararını öder)",
        voorbeeld: "Na de brand kregen we een vergoeding van onze brandverzekering."
      },
      {
        woord: "de energiekosten",
        nl: "de kosten voor gas, water en elektriciteit in je huis",
        en: "energy costs (costs for gas, water, and electricity)",
        tr: "enerji giderleri (ev için gaz, su ve elektrik masrafları)",
        voorbeeld: "Naast de huur betaal ik ook nog energiekosten voor gas en stroom."
      },
      {
        woord: "het GFT-afval",
        nl: "afval van groente, fruit en tuin dat apart wordt ingezameld",
        en: "organic waste (vegetable, fruit, and garden waste, collected separately)",
        tr: "organik atık (sebze, meyve ve bahçe atıkları; ayrı toplanır)",
        voorbeeld: "Schillen van groente en fruit gooi ik in de GFT-bak."
      },
      {
        woord: "de afvalscheiding",
        nl: "het apart houden van soorten afval (papier, glas, GFT, plastic) zodat het gerecycled kan worden",
        en: "waste separation (keeping different types of waste apart for recycling)",
        tr: "atık ayrıştırma (kağıt, cam, organik, plastik gibi atıkların geri dönüşüm için ayrılması)",
        voorbeeld: "In Nederland is afvalscheiding heel normaal: papier, glas en plastic apart."
      },
      {
        woord: "de gynaecoloog",
        nl: "de dokter in het ziekenhuis die je bezoekt bij zwangerschap of vrouwenziekten",
        en: "gynaecologist (hospital doctor for pregnancy or women's health issues)",
        tr: "jinekolog (hamilelik veya kadın sağlığı sorunları için hastanede görülen doktor)",
        voorbeeld: "Bij medische problemen tijdens de zwangerschap stuurt de huisarts je naar de gynaecoloog."
      },
      {
        woord: "het consultatiebureau",
        nl: "de plek waar ouders met hun baby's en jonge kinderen (tot 4 jaar) terecht kunnen voor controle en advies",
        en: "child health clinic (for check-ups and advice for babies and young children up to age 4)",
        tr: "çocuk sağlığı danışma merkezi (4 yaşına kadar bebek ve küçük çocuklar için kontrol ve tavsiye merkezi)",
        voorbeeld: "Elke maand gaan we met de baby naar het consultatiebureau voor een controle."
      },
      {
        woord: "het recept",
        nl: "een briefje van de huisarts waarmee je bij de apotheek medicijnen kunt krijgen",
        en: "prescription (note from a doctor that lets you get medicine at the pharmacy)",
        tr: "reçete (doktordan alınan ve eczaneden ilaç almayı sağlayan belge)",
        voorbeeld: "Zonder recept van de huisarts krijg je geen antibiotica bij de apotheek."
      },
      {
        woord: "de thuiszorg",
        nl: "zorg en hulp die mensen thuis krijgen, bijvoorbeeld bij ziekte of ouderdom",
        en: "home care (care and help received at home, e.g. for illness or old age)",
        tr: "evde bakım hizmeti (hastalık veya yaşlılık gibi durumlarda evde verilen bakım ve yardım)",
        voorbeeld: "Mijn opa krijgt elke ochtend thuiszorg omdat hij niet meer goed kan lopen."
      },
      {
        woord: "het noodgeval",
        nl: "een gevaarlijke of urgente situatie waarbij je direct hulp nodig hebt",
        en: "emergency (a dangerous or urgent situation requiring immediate help)",
        tr: "acil durum (anında yardım gerektiren tehlikeli veya ivedi durum)",
        voorbeeld: "Bij een noodgeval bel je het alarmnummer 112."
      },
      {
        woord: "het alarmnummer (112)",
        nl: "het telefoonnummer dat je belt bij een noodgeval (politie, brandweer of ambulance)",
        en: "emergency number (112 — for police, fire brigade, or ambulance)",
        tr: "acil çağrı numarası (112 — polis, itfaiye veya ambulans için)",
        voorbeeld: "Als er brand is, bel je meteen het alarmnummer 112."
      },
      {
        woord: "de verloskundige (verloskundigenpraktijk)",
        nl: "de zorgverlener die je bezoekt zodra je zwanger bent voor controles tijdens de zwangerschap",
        en: "midwife (visited as soon as you become pregnant for check-ups during pregnancy)",
        tr: "ebe (hamilelik süresince kontroller için ziyaret edilen sağlık görevlisi)",
        voorbeeld: "Zodra je zwanger bent, maak je een afspraak bij de verloskundige."
      },
      {
        woord: "vrijheid van meningsuiting",
        nl: "het recht om in Nederland vrij je mening te zeggen of schrijven",
        en: "freedom of speech (the right to freely express your opinion in the Netherlands)",
        tr: "ifade özgürlüğü (Hollanda'da fikrini özgürce söyleme veya yazma hakkı)",
        voorbeeld: "Door de vrijheid van meningsuiting mag je in Nederland kritiek geven op de regering."
      },
      {
        woord: "vrijheid van godsdienst",
        nl: "het recht om zelf te kiezen welk geloof je hebt en dit vrij te beleven",
        en: "freedom of religion (the right to choose and freely practise your own religion)",
        tr: "din özgürlüğü (kendi dinini seçme ve özgürce yaşama hakkı)",
        voorbeeld: "Vrijheid van godsdienst betekent dat iedereen zelf mag kiezen of en wat hij gelooft."
      },
      {
        woord: "het kiesrecht (actief en passief)",
        nl: "het recht om te stemmen (actief) en het recht om zelf gekozen te worden (passief)",
        en: "right to vote and to be elected (active and passive suffrage)",
        tr: "seçme ve seçilme hakkı (aktif: oy verme; pasif: seçilebilme)",
        voorbeeld: "Bij landelijke verkiezingen heb je actief kiesrecht vanaf 18 jaar."
      },
      {
        woord: "de constitutionele monarchie",
        nl: "een staatsvorm met een koning of koningin waarbij de macht beperkt wordt door de Grondwet",
        en: "constitutional monarchy (a state with a king/queen whose power is limited by the constitution)",
        tr: "anayasal monarşi (kral/kraliçenin yetkisinin anayasa ile sınırlandırıldığı devlet biçimi)",
        voorbeeld: "Nederland is een constitutionele monarchie met koning Willem-Alexander als staatshoofd."
      },
      {
        woord: "de regering",
        nl: "de koning en de ministers samen, die het land besturen",
        en: "government (the king and the ministers together, who govern the country)",
        tr: "hükümet (ülkeyi yöneten kral ve bakanların tümü)",
        voorbeeld: "De ministers zitten in de regering en maken samen het beleid."
      },
      {
        woord: "de ruimtelijke ordening",
        nl: "het plannen van waar wegen, huizen, fabrieken en natuur in een provincie komen",
        en: "spatial planning (planning where roads, houses, factories, and nature go in a province)",
        tr: "mekansal planlama (bir ilde yolların, evlerin, fabrikaların ve doğal alanların nereye yapılacağının planlanması)",
        voorbeeld: "De provincie is verantwoordelijk voor de ruimtelijke ordening van het gebied."
      },
      {
        woord: "geweld is strafbaar",
        nl: "het principe dat geweld (zoals slaan, huiselijk geweld of eerwraak) altijd verboden en strafbaar is in Nederland",
        en: "violence is punishable (the principle that all violence, including domestic violence, is forbidden by law)",
        tr: "şiddet cezalandırılır (Hollanda'da ev içi şiddet dahil her türlü şiddetin yasak ve cezalandırılabilir olduğu ilke)",
        voorbeeld: "Ook huiselijk geweld en het slaan van kinderen is in Nederland strafbaar."
      },
      {
        woord: "het NAVO (Noord-Atlantische Verdragsorganisatie)",
        nl: "de militaire organisatie van Europese en Noord-Amerikaanse landen die elkaar helpen bij een aanval",
        en: "NATO (North Atlantic Treaty Organization — military alliance of European/North American countries)",
        tr: "NATO (Kuzey Atlantik İttifakı — Avrupa ve Kuzey Amerika ülkelerinin birbirine askeri destek verdiği örgüt)",
        voorbeeld: "Nederland kan militaire steun vragen aan andere landen via de NAVO."
      },
      {
        woord: "de Europese Unie (EU)",
        nl: "de samenwerking van Europese landen op het gebied van economie, wetten en reizen",
        en: "European Union (cooperation between European countries on economy, law, and travel)",
        tr: "Avrupa Birliği (Avrupa ülkelerinin ekonomi, yasa ve seyahat alanında işbirliği yaptığı birlik)",
        voorbeeld: "Nederland werkt economisch samen met andere landen binnen de Europese Unie."
      },
      {
        woord: "de kolonie",
        nl: "een gebied (zoals vroeger Indonesië of Suriname) dat bestuurd werd door Nederland",
        en: "colony (a territory, such as former Indonesia or Suriname, ruled by the Netherlands)",
        tr: "koloni (eskiden Endonezya veya Surinam gibi Hollanda tarafından yönetilen bölge)",
        voorbeeld: "Indonesië en Suriname waren vroeger koloniën van Nederland."
      },
      {
        woord: "Zuid-Holland",
        nl: "de provincie met Den Haag als hoofdstad, onderdeel van de Randstad",
        en: "South Holland (province with The Hague as its capital, part of the Randstad)",
        tr: "Güney Hollanda (başkenti Lahey olan ve Randstad'a bağlı il)",
        voorbeeld: "Den Haag, de stad van de regering, ligt in de provincie Zuid-Holland."
      },
      {
        woord: "Noord-Holland",
        nl: "de provincie met Haarlem als hoofdstad en Amsterdam als grootste stad",
        en: "North Holland (province with Haarlem as its capital and Amsterdam as its largest city)",
        tr: "Kuzey Hollanda (başkenti Haarlem olan, en büyük şehri Amsterdam olan il)",
        voorbeeld: "Amsterdam ligt in de provincie Noord-Holland."
      },
      {
        woord: "Limburg",
        nl: "de provincie in het zuiden van Nederland met Maastricht als hoofdstad",
        en: "Limburg (province in the south of the Netherlands with Maastricht as its capital)",
        tr: "Limburg (Hollanda'nın güneyinde, başkenti Maastricht olan il)",
        voorbeeld: "Het hoogste punt van Nederland ligt in de provincie Limburg."
      },
      {
        woord: "Friesland",
        nl: "de provincie in het noorden van Nederland met Leeuwarden als hoofdstad, bekend om zijn eigen taal",
        en: "Friesland (northern province with Leeuwarden as its capital, known for its own language)",
        tr: "Friesland (kuzeyde, başkenti Leeuwarden olan, kendi diliyle bilinen il)",
        voorbeeld: "In Friesland spreken veel mensen naast Nederlands ook Fries."
      },
      {
        woord: "Nederland betekent 'laag land'",
        nl: "de naam Nederland verwijst naar het feit dat een groot deel van het land lager ligt dan de zeespiegel",
        en: "the Netherlands means 'low land' (much of the country lies below sea level)",
        tr: "Nederland 'aşağı/alçak ülke' anlamına gelir (ülkenin büyük bölümü deniz seviyesinin altındadır)",
        voorbeeld: "Nederland betekent letterlijk 'laag land', omdat veel grond onder de zeespiegel ligt."
      },
      {
        woord: "het hoofdstad",
        nl: "de belangrijkste stad van een land of provincie waar het bestuur zit",
        en: "capital city (main city of a country or province where the government is based)",
        tr: "başkent (hükümetin bulunduğu, bir ülke veya ilin en önemli şehri)",
        voorbeeld: "Amsterdam is de hoofdstad van Nederland, maar de regering zit in Den Haag."
      },
      {
        woord: "de schadebeoordeling",
        nl: "het onderzoek van een verzekering om te bepalen hoeveel schade er is en wat wordt vergoed",
        en: "damage assessment (insurance investigation to determine the amount of damage and compensation)",
        tr: "zarar değerlendirmesi (sigortanın hasarı ve ödenecek tazminatı belirlemek için yaptığı inceleme)",
        voorbeeld: "Na de storm kwam een expert van de verzekering voor de schadebeoordeling."
      },
      {
        woord: "de hypotheek",
        nl: "het geld dat je leent bij de bank om een huis te kopen",
        en: "mortgage (money you borrow from the bank to buy a house)",
        tr: "ipotek/mortgage (ev satın almak için bankadan alınan kredi)",
        voorbeeld: "We hebben een hypotheek bij de bank afgesloten om ons huis te kopen."
      },
      {
        woord: "de hypotheekadviseur",
        nl: "iemand bij de bank die je helpt en advies geeft over het lenen van geld voor een huis",
        en: "mortgage advisor (bank employee who advises on borrowing money for a house)",
        tr: "mortgage danışmanı (ev için kredi almak konusunda tavsiye veren banka çalışanı)",
        voorbeeld: "De hypotheekadviseur legde uit hoeveel we maximaal konden lenen."
      },
      {
        woord: "de rente",
        nl: "het extra geld dat je moet betalen aan de bank als je geld leent",
        en: "interest (extra money you must pay the bank when you borrow money)",
        tr: "faiz (bankadan para ödünç aldığınızda ödemeniz gereken ekstra para)",
        voorbeeld: "Als je geld leent voor een huis, betaal je elke maand rente aan de bank."
      },
      {
        woord: "de boete",
        nl: "het geld dat je moet betalen als straf voor iets dat verboden is",
        en: "fine (money you must pay as a punishment for breaking a rule)",
        tr: "para cezası (yasak bir şey yaptığınızda ceza olarak ödediğiniz para)",
        voorbeeld: "Als je kind zonder geldige reden niet naar school gaat, krijg je een boete."
      },
      {
        woord: "de Tweede Wereldoorlog — bondgenoten",
        nl: "de landen (zoals Amerika, Engeland en Canada) die Nederland hielpen bevrijden van de Duitse bezetting",
        en: "WWII allies (countries such as the USA, UK, and Canada that helped liberate the Netherlands)",
        tr: "2. Dünya Savaşı müttefikleri (Hollanda'yı Alman işgalinden kurtarmaya yardım eden Amerika, İngiltere, Kanada gibi ülkeler)",
        voorbeeld: "Amerika, Engeland en Canada hielpen Nederland bevrijden tijdens de Tweede Wereldoorlog."
      },
      {
        woord: "het rijbewijs",
        nl: "het officiële document waarmee je mag autorijden, dat je krijgt na een geslaagd rijexamen",
        en: "driving licence (official document allowing you to drive, obtained after passing a driving test)",
        tr: "sürücü belgesi/ehliyet (sınavı geçtikten sonra alınan, araç kullanma izni veren resmi belge)",
        voorbeeld: "Voordat je mag autorijden, moet je eerst een theorie- en een rijexamen halen voor je rijbewijs."
      },
      {
        woord: "het theorie-examen",
        nl: "het schriftelijke examen over verkeersregels dat je eerst moet halen voordat je het rijexamen mag doen",
        en: "theory test (written exam on traffic rules required before the practical driving test)",
        tr: "teorik sınav (pratik sürücü sınavından önce geçilmesi gereken yazılı trafik kuralları sınavı)",
        voorbeeld: "Eerst moet je het theorie-examen halen, daarna mag je het praktijkexamen doen."
      },
      {
        woord: "de proeftijd",
        nl: "een korte periode aan het begin van een nieuwe baan waarin werkgever en werknemer kunnen stoppen zonder lange opzegtermijn",
        en: "probation period (short initial period of a new job where either party can end it without notice)",
        tr: "deneme süresi (yeni bir işin başında işveren ve çalışanın kısa bildirimle işi sonlandırabildiği dönem)",
        voorbeeld: "In de eerste maand, de proeftijd, kan mijn baas mij zonder reden ontslaan."
      },
      {
        woord: "de opleiding",
        nl: "een cursus of studie waarmee je een vak of beroep leert",
        en: "training/education programme (a course of study to learn a trade or profession)",
        tr: "eğitim/kurs (bir meslek öğrenmek için alınan eğitim)",
        voorbeeld: "Ik ga een opleiding volgen om verpleegkundige te worden."
      }
    ],
    vragen: [
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Welke instantie regelt studiefinanciering?",
        opties: ["DUO", "UWV", "de gemeente"],
        antwoord: 0,
        uitleg: {
          nl: "DUO (Dienst Uitvoering Onderwijs) regelt studiefinanciering en studieleningen.",
          en: "DUO (Education Executive Agency) manages student finance and loans.",
          tr: "DUO (Eğitim Yürütme Kurumu), öğrenci finansmanı ve kredilerini düzenler."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Je verdient weinig en kunt je huur moeilijk betalen. Welke toeslag kun je aanvragen?",
        opties: ["Kinderbijslag", "Huurtoeslag", "Zorgtoeslag"],
        antwoord: 1,
        uitleg: {
          nl: "De huurtoeslag is extra geld van de overheid om de huur te kunnen betalen bij een laag inkomen.",
          en: "Rent benefit (huurtoeslag) is extra government money to help pay rent for low incomes.",
          tr: "Kira yardımı (huurtoeslag), düşük gelirlilerin kira ödemesine yardımcı olan devlet desteğidir."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Wat is het recht om vrij je mening te zeggen of schrijven in Nederland?",
        opties: ["Vrijheid van godsdienst", "Vrijheid van meningsuiting", "Kiesrecht"],
        antwoord: 1,
        uitleg: {
          nl: "Vrijheid van meningsuiting is het recht om vrij je mening te zeggen of te schrijven.",
          en: "Freedom of speech is the right to freely express your opinion.",
          tr: "İfade özgürlüğü, fikrinizi özgürce söyleme veya yazma hakkıdır."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Wat betekent constitutionele monarchie?",
        opties: [
          "De koning bestuurt het land alleen",
          "De macht van de koning is beperkt door de Grondwet",
          "Er is geen koning meer in Nederland"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Bij een constitutionele monarchie wordt de macht van de koning beperkt door de Grondwet.",
          en: "In a constitutional monarchy, the king's power is limited by the constitution.",
          tr: "Anayasal monarşide kralın yetkisi anayasa ile sınırlandırılmıştır."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Je hebt brand gehad en je huis is beschadigd. Welke verzekering vergoedt dit?",
        opties: ["De brandverzekering", "De inboedelverzekering", "De aansprakelijkheidsverzekering"],
        antwoord: 0,
        uitleg: {
          nl: "De brandverzekering vergoedt schade door brand aan je huis.",
          en: "Fire insurance covers fire damage to your house.",
          tr: "Yangın sigortası, evinize gelen yangın hasarını karşılar."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Je bent zwanger. Naar wie ga je voor controles tijdens de zwangerschap?",
        opties: ["De tandarts", "De verloskundige", "De drogist"],
        antwoord: 1,
        uitleg: {
          nl: "De verloskundige controleert je tijdens de zwangerschap.",
          en: "The midwife checks you during pregnancy.",
          tr: "Hamilelik sürecinde kontrolleri ebe (verloskundige) yapar."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Welk telefoonnummer bel je bij een noodgeval?",
        opties: ["0900", "112", "144"],
        antwoord: 1,
        uitleg: {
          nl: "112 is het alarmnummer voor politie, brandweer en ambulance.",
          en: "112 is the emergency number for police, fire brigade, and ambulance.",
          tr: "112, polis, itfaiye ve ambulans için acil çağrı numarasıdır."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Wat doe je met schillen van groente en fruit?",
        opties: ["In de GFT-bak", "In de glasbak", "In de papierbak"],
        antwoord: 0,
        uitleg: {
          nl: "Groente-, fruit- en tuinafval (GFT) gooi je in de speciale GFT-bak.",
          en: "Vegetable, fruit, and garden waste (GFT) goes in the special GFT bin.",
          tr: "Sebze, meyve ve bahçe atıkları (GFT) özel GFT kutusuna atılır."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Welke organisatie geeft militaire steun aan Nederland als dat nodig is?",
        opties: ["De Europese Unie", "De NAVO", "De Verenigde Naties"],
        antwoord: 1,
        uitleg: {
          nl: "De NAVO is de militaire organisatie waar Nederland lid van is.",
          en: "NATO is the military alliance the Netherlands is a member of.",
          tr: "NATO, Hollanda'nın üyesi olduğu askeri ittifaktır."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Wie was vroeger een Nederlandse kolonie?",
        opties: ["Belgiё", "Indonesië", "Duitsland"],
        antwoord: 1,
        uitleg: {
          nl: "Indonesië was vroeger een kolonie van Nederland.",
          en: "Indonesia was formerly a colony of the Netherlands.",
          tr: "Endonezya eskiden Hollanda'nın bir kolonisiydi."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "In welke provincie ligt de stad Maastricht?",
        opties: ["Noord-Brabant", "Zeeland", "Limburg"],
        antwoord: 2,
        uitleg: {
          nl: "Maastricht is de hoofdstad van de provincie Limburg.",
          en: "Maastricht is the capital of the province of Limburg.",
          tr: "Maastricht, Limburg ilinin başkentidir."
        }
      },
      {
        type: "mc",
        command: "Kies het juiste antwoord:",
        vraag: "Je wilt een huis kopen en geld lenen bij de bank. Hoe heet deze lening?",
        opties: ["De rente", "De hypotheek", "De boete"],
        antwoord: 1,
        uitleg: {
          nl: "Een hypotheek is de lening bij de bank om een huis te kopen.",
          en: "A mortgage is the loan from the bank used to buy a house.",
          tr: "Mortgage (hypotheek), ev satın almak için bankadan alınan kredidir."
        }
      },
      {
        type: "invoer",
        vraag: "Welke afkorting staat voor het orgaan dat vroeger hielp bij werk zoeken, nu onderdeel van UWV/gemeente?",
        antwoord: "cwi",
        uitleg: {
          nl: "Het CWI (Centrum voor Werk en Inkomen) hielp vroeger bij het zoeken naar werk.",
          en: "The CWI (Centre for Work and Income) used to help with job searching.",
          tr: "CWI (İş ve Gelir Merkezi), eskiden iş aramaya yardımcı olurdu."
        }
      },
      {
        type: "invoer",
        vraag: "Hoe heet de belasting die je betaalt omdat je een auto hebt? (twee woorden samen, één woord invullen)",
        antwoord: "wegenbelasting",
        uitleg: {
          nl: "De wegenbelasting betaal je voor het hebben en rijden van een auto.",
          en: "Road tax (wegenbelasting) is paid for owning and driving a car.",
          tr: "Yol vergisi (wegenbelasting), araba sahibi olmak ve kullanmak için ödenir."
        }
      },
      {
        type: "invoer",
        vraag: "Welk woord betekent: geld dat ouders elk kwartaal krijgen voor hun kinderen?",
        antwoord: "kinderbijslag",
        uitleg: {
          nl: "Kinderbijslag is geld dat ouders krijgen voor de opvoeding van hun kinderen.",
          en: "Child benefit (kinderbijslag) is money parents receive to help raise their children.",
          tr: "Çocuk yardımı (kinderbijslag), ebeveynlerin çocuk yetiştirmesi için aldığı paradır."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de afkorting in: het register van de gemeente met persoonsgegevens van inwoners.",
        antwoord: "gba",
        uitleg: {
          nl: "Het GBA (Gemeentelijke Basisadministratie) bevat persoonsgegevens van inwoners.",
          en: "The GBA (Municipal Personal Records Database) holds residents' personal data.",
          tr: "GBA (Belediye Nüfus Kayıt Sistemi), sakinlerin kişisel verilerini içerir."
        }
      },
      {
        type: "invoer",
        vraag: "Hoe heet het document dat je schrijft om geld te kunnen lenen bij de bank voor je eigen bedrijf?",
        antwoord: "ondernemingsplan|het ondernemingsplan",
        uitleg: {
          nl: "Je schrijft een ondernemingsplan om de bank te overtuigen geld te lenen.",
          en: "You write a business plan (ondernemingsplan) to convince the bank to lend you money.",
          tr: "Bankayı para vermeye ikna etmek için bir iş planı (ondernemingsplan) yazarsınız."
        }
      },
      {
        type: "invoer",
        vraag: "Hoe heet de dokter in het ziekenhuis die je bezoekt bij zwangerschap of vrouwenziekten?",
        antwoord: "gynaecoloog|de gynaecoloog",
        uitleg: {
          nl: "De gynaecoloog behandelt medische problemen bij zwangerschap en vrouwenziekten.",
          en: "The gynaecologist treats medical issues related to pregnancy and women's health.",
          tr: "Jinekolog, hamilelik ve kadın sağlığı sorunlarını tedavi eder."
        }
      },
      {
        type: "invoer",
        vraag: "Hoe heet de plek waar ouders met hun baby tot 4 jaar terecht kunnen voor controle?",
        antwoord: "consultatiebureau|het consultatiebureau",
        uitleg: {
          nl: "Het consultatiebureau controleert de groei en gezondheid van jonge kinderen.",
          en: "The child health clinic checks the growth and health of young children.",
          tr: "Çocuk sağlığı danışma merkezi, küçük çocukların büyümesini ve sağlığını kontrol eder."
        }
      },
      {
        type: "invoer",
        vraag: "Welk telefoonnummer bel je bij een noodgeval in Nederland?",
        antwoord: "112",
        uitleg: {
          nl: "112 is het alarmnummer voor politie, brandweer en ambulance.",
          en: "112 is the emergency number for police, fire brigade, and ambulance.",
          tr: "112, polis, itfaiye ve ambulans için acil numaradır."
        }
      },
      {
        type: "invoer",
        vraag: "Welk recht geeft je de mogelijkheid om zelf te kiezen welk geloof je hebt?",
        antwoord: "vrijheid van godsdienst",
        uitleg: {
          nl: "Vrijheid van godsdienst is het recht om je geloof zelf te kiezen en te beleven.",
          en: "Freedom of religion is the right to choose and practise your own religion.",
          tr: "Din özgürlüğü, kendi dininizi seçme ve yaşama hakkıdır."
        }
      },
      {
        type: "gat",
        zin: "Als je weinig verdient, kun je ___ aanvragen om je huur te kunnen betalen.",
        antwoord: "huurtoeslag",
        uitleg: {
          nl: "Huurtoeslag helpt mensen met een laag inkomen om de huur te betalen.",
          en: "Rent benefit (huurtoeslag) helps low-income people pay their rent.",
          tr: "Kira yardımı (huurtoeslag), düşük gelirlilerin kira ödemesine yardımcı olur."
        }
      },
      {
        type: "gat",
        zin: "Het geld dat je elke maand aan de bank betaalt voor het lenen van geld heet de ___.",
        antwoord: "rente",
        uitleg: {
          nl: "De rente is de vergoeding die je betaalt aan de bank voor een lening.",
          en: "Interest (rente) is the fee you pay the bank for a loan.",
          tr: "Faiz (rente), bir kredi için bankaya ödediğiniz ücrettir."
        }
      },
      {
        type: "gat",
        zin: "Het apart houden van papier, glas, GFT en plastic heet ___.",
        antwoord: "afvalscheiding",
        uitleg: {
          nl: "Afvalscheiding zorgt ervoor dat afval gerecycled kan worden.",
          en: "Waste separation (afvalscheiding) makes it possible to recycle waste.",
          tr: "Atık ayrıştırma (afvalscheiding), atıkların geri dönüştürülebilmesini sağlar."
        }
      },
      {
        type: "gat",
        zin: "Nederland is een ___, want de koning heeft beperkte macht door de Grondwet.",
        antwoord: "constitutionele monarchie",
        uitleg: {
          nl: "Bij een constitutionele monarchie is de macht van de koning beperkt door de wet.",
          en: "In a constitutional monarchy the king's power is limited by law.",
          tr: "Anayasal monarşide kralın gücü yasalarla sınırlıdır."
        }
      },
      {
        type: "gat",
        zin: "Voordat je mag autorijden, moet je eerst het ___ halen en daarna het praktijkexamen.",
        antwoord: "theorie-examen",
        uitleg: {
          nl: "Het theorie-examen test je kennis van de verkeersregels.",
          en: "The theory test checks your knowledge of traffic rules.",
          tr: "Teorik sınav, trafik kuralları bilginizi test eder."
        }
      },
      {
        type: "gat",
        zin: "Maastricht is de hoofdstad van de provincie ___.",
        antwoord: "Limburg",
        uitleg: {
          nl: "Limburg ligt in het zuiden van Nederland en heeft Maastricht als hoofdstad.",
          en: "Limburg is in the south of the Netherlands and has Maastricht as its capital.",
          tr: "Limburg, Hollanda'nın güneyinde yer alır ve başkenti Maastricht'tir."
        }
      }
    ]
  });
})();
