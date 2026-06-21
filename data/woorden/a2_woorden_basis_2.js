(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerWoorden({
    id: "a2-woorden-basis-2",
    titel: "Basiswoorden A2 - Deel 2",
    bronExamen: "a2-basis-2",
    icoon: "🍎",
    intro: {
      nl: "Leer over het lichaam, gezondheid, wonen en eten & drinken.",
      en: "Learn about the body, health, housing, and food & drinks.",
      tr: "Vücut, sağlık, barınma ve yiyecek & içecekler hakkında öğrenin."
    },
    items: [
      { woord: "het lichaam", nl: "de fysieke vorm van een mens of dier", en: "body", tr: "vücut / beden", voorbeeld: "Bewegen is goed voor je lichaam." },
      { woord: "het hoofd", nl: "het bovenste deel van je lichaam met je ogen, oren, neus en mond", en: "head", tr: "baş / kafa", voorbeeld: "Ik draag een hoed op mijn hoofd." },
      { woord: "het haar", nl: "de draden die op je hoofd groeien", en: "hair", tr: "saç", voorbeeld: "Mijn zus heeft lang bruin haar." },
      { woord: "het oog", nl: "het deel van je gezicht waarmee je kunt zien", en: "eye", tr: "göz", voorbeeld: "Zij heeft blauwe ogen." },
      { woord: "het oor", nl: "het deel aan de zijkant van je hoofd waarmee je hoort", en: "ear", tr: "kulak", voorbeeld: "Ik luister met mijn oren naar muziek." },
      { woord: "de neus", nl: "het deel van je gezicht waarmee je ruikt en ademt", en: "nose", tr: "burun", voorbeeld: "Mijn neus is rood van de kou." },
      { woord: "de mond", nl: "het deel van je gezicht waarmee je eet en praat", en: "mouth", tr: "ağız", voorbeeld: "Doe je mond open alsjeblieft." },
      { woord: "de tand", nl: "de witte harde dingen in je mond waarmee je bijt en kauwt", en: "tooth", tr: "diş", voorbeeld: "Ik moet mijn tanden twee keer per dag poetsen." },
      { woord: "de keel", nl: "het binnenste deel van je hals waarmee je slikt", en: "throat", tr: "boğaz", voorbeeld: "Ik heb pijn in mijn keel als ik praat." },
      { woord: "de schouder", nl: "het deel van je lichaam tussen je hals en je armen", en: "shoulder", tr: "omuz", voorbeeld: "Hij draagt zijn tas over zijn schouder." },
      { woord: "de arm", nl: "het lichaamsdeel van je schouder tot je hand", en: "arm", tr: "kol", voorbeeld: "Ik heb twee sterke armen." },
      { woord: "de hand", nl: "het deel aan het einde van je arm met vijf vingers", en: "hand", tr: "el", voorbeeld: "Geef me een hand bij het oversteken." },
      { woord: "de vinger", nl: "een van de vijf delen aan je hand", en: "finger", tr: "parmak", voorbeeld: "Zij draagt een ring aan haar vinger." },
      { woord: "de rug", nl: "de achterkant van het menselijk lichaam", en: "back", tr: "sırt", voorbeeld: "Ik heb pijn in mijn rug door het tillen." },
      { woord: "de buik", nl: "het deel van je lichaam waar je eten naartoe gaat", en: "belly / stomach", tr: "karın", voorbeeld: "Mijn buik zit vol na het lekkere eten." },
      { woord: "het been", nl: "het lichaamsdeel waarmee je loopt en staat", en: "leg", tr: "bacak", voorbeeld: "Zijn been is gebroken na een val." },
      { woord: "de voet", nl: "het onderste deel van je been waar je op staat", en: "foot", tr: "ayak", voorbeeld: "Ik heb koude voeten in de winter." },
      { woord: "de dokter", nl: "iemand die zieke mensen helpt en medicijnen voorschrijft", en: "doctor / GP", tr: "doktor / aile hekimi", voorbeeld: "Als je ziek bent, moet je naar de dokter gaan." },
      { woord: "het ziekenhuis", nl: "een gebouw waar zieke mensen worden geholpen door artsen", en: "hospital", tr: "hastane", voorbeeld: "Hij ligt in het ziekenhuis na een ongeluk." },
      { woord: "de apotheek", nl: "een winkel waar je medicijnen kunt halen", en: "pharmacy / drugstore", tr: "eczane", voorbeeld: "Ik haal mijn medicijnen bij de apotheek." },
      { woord: "het medicijn", nl: "een middel dat je helpt om beter te worden als je ziek bent", en: "medicine", tr: "ilaç", voorbeeld: "Neem dit medicijn drie keer per dag met water." },
      { woord: "de pijn", nl: "een vervelend gevoel in je lichaam dat zegt dat er iets niet goed is", en: "pain", tr: "acı / ağrı", voorbeeld: "Heeft u pijn in uw rug?" },
      { woord: "ziek", nl: "niet gezond, je voelt je niet goed", en: "sick / ill", tr: "hasta", voorbeeld: "Ik ben vandaag ziek en blijf in bed." },
      { woord: "beter", nl: "weer gezond na een ziekte", en: "better / recovered", tr: "iyileşmiş / daha iyi", voorbeeld: "Gelukkig ben ik weer helemaal beter." },
      { woord: "de koorts", nl: "een hoge lichaamstemperatuur omdat je ziek bent", en: "fever", tr: "ateş (vücut ısısı)", voorbeeld: "Het kind heeft 39 graden koorts." },
      { woord: "het huis", nl: "een gebouw waarin mensen wonen", en: "house", tr: "ev", voorbeeld: "Wij wonen in een mooi huis in Haarlem." },
      { woord: "het appartement", nl: "een woning die deel uitmaakt van een groter gebouw", en: "apartment / flat", tr: "daire / apartman dairesi", voorbeeld: "Mijn appartement is op de derde verdieping." },
      { woord: "de deur", nl: "een bewegend deel waarmee je een kamer of huis kunt openen en sluiten", en: "door", tr: "kapı", voorbeeld: "Doe de deur dicht alsjeblieft, het is koud." },
      { woord: "het raam", nl: "een glas in de muur waardoor je naar buiten kunt kijken", en: "window", tr: "pencere", voorbeeld: "Maak het raam open voor wat frisse lucht." },
      { woord: "de muur", nl: "de zijkant van een kamer of gebouw van steen of hout", en: "wall", tr: "duvar", voorbeeld: "Er hangt een schilderij aan de muur." },
      { woord: "het dak", nl: "de bovenkant van een huis of gebouw", en: "roof", tr: "çatı", voorbeeld: "Er ligt sneeuw op het dak van het huis." },
      { woord: "de tuin", nl: "een stuk grond bij een huis met planten en gras", en: "garden", tr: "bahçe", voorbeeld: "In de zomer zitten we graag in de tuin." },
      { woord: "de kamer", nl: "een ruimte in een huis", en: "room", tr: "oda", voorbeeld: "Dit huis heeft vier kamers." },
      { woord: "de woonkamer", nl: "de kamer in het huis waar je overdag zit en tv kijkt", en: "living room", tr: "oturma odası / salon", voorbeeld: "De woonkamer heeft een grote bank." },
      { woord: "de slaapkamer", nl: "de kamer in het huis waar je slaapt", en: "bedroom", tr: "yatak odası", voorbeeld: "Mijn slaapkamer is erg rustig." },
      { woord: "de badkamer", nl: "de kamer waar je je kunt wassen en douchen", en: "bathroom", tr: "banyo", voorbeeld: "De badkamer heeft een douche en een spiegel." },
      { woord: "de keuken", nl: "de ruimte waar je eten kookt en klaarmaakt", en: "kitchen", tr: "mutfak", voorbeeld: "Ik kook elke avond in de keuken." },
      { woord: "het toilet", nl: "de wc, de ruimte waar je je behoefte doet", en: "toilet / restroom", tr: "tuvalet / wc", voorbeeld: "Mag ik hier naar het toilet?" },
      { woord: "de trap", nl: "een constructie waarmee je naar een andere verdieping kunt lopen", en: "stairs", tr: "merdiven", voorbeeld: "Ik neem de trap naar boven." },
      { woord: "de meubels", nl: "spullen in je huis zoals tafels, stoelen en kasten", en: "furniture", tr: "mobilya", voorbeeld: "Zij hebben nieuwe meubels gekocht." },
      { woord: "de tafel", nl: "een meubelstuk met poten en een plat blad om aan te eten of werken", en: "table", tr: "masa", voorbeeld: "Het eten staat op de tafel." },
      { woord: "de stoel", nl: "een meubelstuk waarop één persoon kan zitten", en: "chair", tr: "sandalye", voorbeeld: "Schuif je stoel goed aan bij de tafel." },
      { woord: "de kast", nl: "een meubelstuk om spullen of kleding in op te bergen", en: "cupboard / cabinet", tr: "dolap", voorbeeld: "Zet de glazen maar in de kast." },
      { woord: "het bed", nl: "een meubelstuk om in te slapen", en: "bed", tr: "yatak", voorbeeld: "Ik ga lekker vroeg naar mijn bed." },
      { woord: "de lamp", nl: "een voorwerp dat licht geeft", en: "lamp / light", tr: "lamba / ışık", voorbeeld: "Doe de lamp aan, het is donker." },
      { woord: "de sleutel", nl: "een metalen voorwerp om een slot mee te openen", en: "key", tr: "anahtar", voorbeeld: "Ik kan mijn fietssleutel niet vinden." },
      { woord: "huren", nl: "geld betalen om ergens in te wonen of iets te gebruiken", en: "rent", tr: "kiralamak", voorbeeld: "Wij huren een appartement in Utrecht." },
      { woord: "kopen", nl: "iets krijgen in ruil voor geld", en: "buy", tr: "satın almak", voorbeeld: "Ik wil een nieuw huis kopen." },
      { woord: "verhuizen", nl: "in een ander huis gaan wonen", en: "move (to a new house)", tr: "taşınmak", voorbeeld: "Volgende maand gaan we verhuizen naar Rotterdam." },
      { woord: "het eten", nl: "alles wat je via je mond tot je neemt om te leven", en: "food", tr: "yemek / gıda", voorbeeld: "Het eten in dit restaurant is heerlijk." },
      { woord: "het drinken", nl: "vloeistoffen die je via je mond tot je neemt", en: "drinks", tr: "içecek", voorbeeld: "Zorg voor genoeg drinken op het feest." },
      { woord: "het ontbijt", nl: "de eerste maaltijd van de dag in de ochtend", en: "breakfast", tr: "kahvaltı", voorbeeld: "Ik eet een broodje met kaas als ontbijt." },
      { woord: "de lunch", nl: "de maaltijd midden op de dag rond 12:30 uur", en: "lunch", tr: "öğle yemeği", voorbeeld: "Zullen we samen lunchen in de stad?" },
      { woord: "het avondeten", nl: "de warme maaltijd aan het einde van de middag of in de avond", en: "dinner / supper", tr: "akşam yemeği", voorbeeld: "Het avondeten is om zes uur klaar." },
      { woord: "het brood", nl: "eten gemaakt van meel, water en gist dat gebakken is", en: "bread", tr: "ekmek", voorbeeld: "Ik koop altijd bruin brood." },
      { woord: "de kaas", nl: "een hard zuivelproduct gemaakt van melk", en: "cheese", tr: "peynir", voorbeeld: "Nederlandse kaas is wereldberoemd." },
      { woord: "de melk", nl: "een witte vloeistof die geproduceerd wordt door koeien", en: "milk", tr: "süt", voorbeeld: "Drinkt u melk bij het ontbijt?" },
      { woord: "het water", nl: "een heldere vloeistof die je drinkt of om te wassen gebruikt", en: "water", tr: "su", voorbeeld: "Ik drink het liefst koud water uit de kraan." },
      { woord: "de koffie", nl: "een warme donkere drank gemaakt van bonen", en: "coffee", tr: "kahve", voorbeeld: "Wilt u koffie of thee?" },
      { woord: "de thee", nl: "een warme drank gemaakt van gedroogde blaadjes van de theeplant", en: "tea", tr: "çay", voorbeeld: "Ik drink mijn thee zonder suiker." },
      { woord: "de suiker", nl: "een zoete stof om eten of drinken zoeter te maken", en: "sugar", tr: "şeker", voorbeeld: "Gebruikt u suiker in de koffie?" },
      { woord: "het zout", nl: "een witte stof om eten smaak te geven", en: "salt", tr: "tuz", voorbeeld: "Er moet nog een beetje zout in de soep." },
      { woord: "de groente", nl: "gezonde plantendelen die we eten, zoals wortels, sla en tomaten", en: "vegetables", tr: "sebze", voorbeeld: "Kinderen moeten veel groente eten." },
      { woord: "het fruit", nl: "zoete plantendelen die we eten, zoals appels, bananen en sinaasappels", en: "fruit", tr: "meyve", voorbeeld: "Ik eet elke dag twee stuks fruit." },
      { woord: "de supermarkt", nl: "een grote winkel waar je eten en huishoudelijke spullen koopt", en: "supermarket", tr: "süpermarket", voorbeeld: "Ik doe mijn boodschappen bij de supermarkt om de hoek." },
      { woord: "de bakker", nl: "iemand die brood en gebak maakt en verkoopt", en: "baker / bakery", tr: "fırıncı / fırın", voorbeeld: "Het brood van de warme bakker is erg lekker." },
      { woord: "de slager", nl: "iemand die vlees snijdt en verkoopt", en: "butcher", tr: "kasap", voorbeeld: "De slager verkoopt biologisch vlees." },
      { woord: "de boodschappen", nl: "spullen die je koopt voor dagelijks gebruik, vooral eten en drinken", en: "groceries", tr: "mutfak alışverişi", voorbeeld: "Ik moet vanmiddag nog boodschappen doen." },
      { woord: "het vlees", nl: "delen van een dier dat we eten", en: "meat", tr: "et", voorbeeld: "Eet u vlees of bent u vegetariër?" },
      { woord: "de vis", nl: "een dier dat in het water leeft en dat we eten", en: "fish", tr: "balık", voorbeeld: "Op vrijdag eten we vaak gebakken vis." }
    ],
    vragen: [
      {
        type: "mc",
        vraag: "Waar ga je naartoe als je specifieke medicijnen op recept nodig hebt?",
        opties: [
          "De supermarkt",
          "De apotheek",
          "De woonkamer"
        ],
        antwoord: 1,
        uitleg: {
          nl: "Voor medicijnen ga je naar de apotheek.",
          en: "For medication, you go to the pharmacy.",
          tr: "İlaç almak için eczaneye (apotheek) gidersiniz."
        }
      },
      {
        type: "mc",
        vraag: "Welk deel van je lichaam gebruik je om te luisteren?",
        opties: [
          "Het oog",
          "De neus",
          "Het oor"
        ],
        antwoord: 2,
        uitleg: {
          nl: "Luisteren of horen doe je met je oren.",
          en: "Listening or hearing is done with your ears.",
          tr: "Dinleme ve duyma işlemi kulaklarla (oren) yapılır."
        }
      },
      {
        type: "mc",
        vraag: "Welke kamer in het huis gebruik je om te douchen?",
        opties: [
          "De badkamer",
          "De slaapkamer",
          "De keuken"
        ],
        antwoord: 0,
        uitleg: {
          nl: "De douche en het bad zijn in de badkamer.",
          en: "The shower and bath are in the bathroom.",
          tr: "Duş ve banyo, banyo odasında (badkamer) bulunur."
        }
      },
      {
        type: "mc",
        vraag: "Wat eet men meestal in de ochtend als eerste maaltijd?",
        opties: [
          "De lunch",
          "Het ontbijt",
          "Het avondeten"
        ],
        antwoord: 1,
        uitleg: {
          nl: "De eerste maaltijd van de dag heet het ontbijt.",
          en: "The first meal of the day is called breakfast (ontbijt).",
          tr: "Günün ilk öğününe kahvaltı (ontbijt) denir."
        }
      },
      {
        type: "mc",
        vraag: "Waar koop je vers vlees?",
        opties: [
          "Bij de slager",
          "Bij de bakker",
          "In het ziekenhuis"
        ],
        antwoord: 0,
        uitleg: {
          nl: "De slager verkoopt vlees. De bakker verkoopt brood.",
          en: "The butcher (slager) sells meat. The baker sells bread.",
          tr: "Kasap (slager) et satar. Fırıncı ise ekmek satar."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Als je lichaamstemperatuur heel hoog is door ziekte, heb je ...",
        antwoord: "koorts",
        uitleg: {
          nl: "Als je ziek bent en je lichaam is heel warm, heb je koorts.",
          en: "When you are sick and your body is very warm, you have a fever (koorts).",
          tr: "Hasta olduğunuzda vücut ısınızın çok yükselmesine ateş (koorts) denir."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Je gebruikt een ... om de deur te openen of op slot te doen.",
        antwoord: "sleutel",
        uitleg: {
          nl: "Je opent of sluit een deur met een sleutel.",
          en: "You open or lock a door with a key (sleutel).",
          tr: "Bir kapıyı açmak veya kilitlemek için anahtar (sleutel) kullanırsınız."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Appels en bananen zijn voorbeelden van gezond ...",
        antwoord: "fruit",
        uitleg: {
          nl: "Appels, bananen en sinaasappels zijn fruit.",
          en: "Apples, bananas, and oranges are fruit.",
          tr: "Elma, muz ve portakal gibi gıdalar meyvedir (fruit)."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Je tanden poetsen en handen wassen doe je in de ...",
        antwoord: "badkamer",
        uitleg: {
          nl: "Handen wassen en tanden poetsen doe je bij de wastafel in de badkamer.",
          en: "You brush your teeth and wash your hands in the bathroom.",
          tr: "Dişlerinizi fırçalama ve ellerinizi yıkama işlemlerini banyoda (badkamer) yaparsınız."
        }
      },
      {
        type: "invoer",
        vraag: "Vul de vertaling in het Nederlands in. Een woning waar je elke maand voor betaalt, moet je ... (werkwoord)",
        antwoord: "huren",
        uitleg: {
          nl: "Als je de woning niet koopt maar huur betaalt, ga je deze huren.",
          en: "If you pay rent monthly instead of buying, you rent (huren) the house.",
          tr: "Bir evi satın almayıp her ay ödeme yapıyorsanız, o evi kiralıyorsunuzdur (huren)."
        }
      },
      {
        type: "gat",
        zin: "Ik heb veel last van mijn keel. Ik ga morgen naar de ___.",
        antwoord: "dokter|huisarts",
        uitleg: {
          nl: "Als je ziek bent, ga je naar de dokter of huisarts.",
          en: "When you are sick, you go to the doctor or GP.",
          tr: "Hastalandığınızda doktora (dokter) veya aile hekimine (huisarts) gidersiniz."
        }
      },
      {
        type: "gat",
        zin: "Zullen we koffie drinken met een beetje ___ en melk?",
        antwoord: "suiker",
        uitleg: {
          nl: "Suiker maakt de koffie zoeter.",
          en: "Sugar makes the coffee sweeter.",
          tr: "Şeker (suiker) kahveyi daha tatlı hale getirir."
        }
      },
      {
        type: "gat",
        zin: "De bank, de tafel en de kasten in huis zijn ___.",
        antwoord: "meubels",
        uitleg: {
          nl: "Kasten, tafels en stoelen zijn meubels.",
          en: "Cabinets, tables, and chairs are furniture (meubels).",
          tr: "Dolap, masa ve sandalyeler ev eşyası, yani mobilyalardır (meubels)."
        }
      },
      {
        type: "gat",
        zin: "Ik ga naar de ___ om vers brood en heerlijk gebak te kopen.",
        antwoord: "bakker",
        uitleg: {
          nl: "Brood koop je bij de bakker.",
          en: "You buy bread at the bakery (bakker).",
          tr: "Ekmeği fırından (bakker) satın alırsınız."
        }
      },
      {
        type: "gat",
        zin: "Als je niet gezond bent en je voelt je erg slap, dan ben je ___.",
        antwoord: "ziek",
        uitleg: {
          nl: "Als je niet gezond bent, ben je ziek.",
          en: "If you are not healthy, you are sick (ziek).",
          tr: "Sağlıklı olmayıp kendinizi halsiz hissettiğinizde hastasınızdır (ziek)."
        }
      }
    ]
  });
})();
