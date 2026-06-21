/* data/woorden/a2_woorden_zinnen.js
 * Conversational phrases vocabulary set for Inburgering A2.
 * Registered via INB.registerWoorden.
 */
(function () {
  "use strict";

  window.INB = window.INB || {};

  INB.registerWoorden({
    id: "a2-woorden-zinnen",
    titel: {
      nl: "Veelgebruikte zinnen",
      en: "Common phrases",
      tr: "Sıkça kullanılan cümleler"
    },
    bronExamen: "basiswoordenschat",
    icoon: "💬",
    intro: {
      nl: "Leer en oefen de belangrijkste zinnen en uitdrukkingen voor alledaagse situaties.",
      en: "Learn and practice the most important phrases and expressions for everyday situations.",
      tr: "Günlük durumlar için en önemli cümleleri ve kalıpları öğrenin ve çalışın."
    },
    items: [
      // 1. Begroetingen & Afscheid
      { woord: "Goedemorgen, hoe gaat het?", nl: "een vriendelijke groet in de ochtend", en: "Good morning, how are you?", tr: "Günaydın, nasılsınız?", voorbeeld: "Goedemorgen, hoe gaat het? - Goed, met u?" },
      { woord: "Fijne dag nog!", nl: "een wens als je afscheid neemt", en: "Have a nice day!", tr: "İyi günler!", voorbeeld: "Tot ziens en een fijne dag nog!" },
      { woord: "Prettig weekend!", nl: "een wens voor het weekend", en: "Have a nice weekend!", tr: "İyi hafta sonları!", voorbeeld: "Fijn weekend allemaal!" },
      { woord: "Tot ziens!", nl: "een algemene groet bij het weggaan", en: "Goodbye!", tr: "Görüşmek üzere!", voorbeeld: "Ik ga nu naar huis. Tot ziens!" },
      { woord: "Tot snel!", nl: "als je elkaar snel weer ziet", en: "See you soon!", tr: "Yakında görüşmek üzere!", voorbeeld: "Bedankt voor de gezellige middag. Tot snel!" },
      
      // 2. Jezelf voorstellen & Kennismaken
      { woord: "Aangenaam kennis te maken.", nl: "gezegd bij een eerste ontmoeting", en: "Pleased to meet you.", tr: "Tanıştığımıza memnun oldum.", voorbeeld: "Ik ben Jan. - Aangenaam kennis te maken." },
      { woord: "Waar kom je vandaan?", nl: "vraag naar iemands herkomstland", en: "Where do you come from?", tr: "Nerelisiniz?", voorbeeld: "Hallo, waar kom je vandaan?" },
      { woord: "Hoe oud ben je?", nl: "vraag naar iemands leeftijd", en: "How old are you?", tr: "Kaç yaşındasınız?", voorbeeld: "Ik ben dertig jaar oud. En hoe oud ben je?" },
      { woord: "Wat is je beroep?", nl: "vraag naar iemands werk", en: "What is your profession?", tr: "Mesleğiniz nedir?", voorbeeld: "Wat is je beroep? - Ik ben monteur." },
      { woord: "Ik woon in...", nl: "vertellen over je woonplaats", en: "I live in...", tr: "...'da yaşıyorum.", voorbeeld: "Ik woon in Utrecht sinds twee jaar." },

      // 3. Bij de dokter / Gezondheid
      { woord: "Ik heb pijn aan...", nl: "vertellen waar je pijn voelt", en: "I have a pain in my...", tr: "...'m ağrıyor.", voorbeeld: "Ik heb pijn aan mijn keel en hoofd." },
      { woord: "Ik wil een afspraak maken.", nl: "zeggen als je de dokter belt voor een afspraak", en: "I want to make an appointment.", tr: "Randevu almak istiyorum.", voorbeeld: "Huisartsenpost, goedemorgen. - Hallo, ik wil een afspraak maken." },
      { woord: "Ik ben verkouden.", nl: "zeggen als je niest of hoest door verkoudheid", en: "I have a cold.", tr: "Üşüttüm / Nezle oldum.", voorbeeld: "Ik kom vandaag niet werken, want ik ben verkouden." },
      { woord: "Beterschap!", nl: "een wens voor een ziek persoon", en: "Get well soon!", tr: "Geçmiş olsun!", voorbeeld: "Ben je ziek? Beterschap!" },
      { woord: "Waar is de apotheek?", nl: "vragen naar de medicijnenwinkel", en: "Where is the pharmacy?", tr: "Eczane nerede?", voorbeeld: "Pardon, weet u waar de apotheek is?" },

      // 4. In de winkel / Boodschappen
      { woord: "Hoeveel kost dit?", nl: "vragen naar de prijs van iets", en: "How much does this cost?", tr: "Bu ne kadar?", voorbeeld: "Pardon, hoeveel kost dit jasje?" },
      { woord: "Mag ik pinnen?", nl: "vragen of je elektronisch mag betalen", en: "Can I pay by card?", tr: "Kartla ödeyebilir miyim?", voorbeeld: "Het is tien euro. - Mag ik pinnen?" },
      { woord: "Alstublieft.", nl: "gezegd bij het geven van geld of spullen", en: "Here you are.", tr: "Buyurun.", voorbeeld: "Tien euro wisselgeld, alstublieft." },
      { woord: "Dank u wel.", nl: "iemand bedanken (formeel)", en: "Thank you very much.", tr: "Çok teşekkür ederim.", voorbeeld: "Fijne dag nog. - Dank u wel, hetzelfde!" },
      { woord: "Kan ik u helpen?", nl: "vraag van een winkelmedewerker aan een klant", en: "Can I help you?", tr: "Size yardımcı olabilir miyim?", voorbeeld: "Goedemiddag, kan ik u helpen?" },
      { woord: "Ik kijk gewoon even rond.", nl: "antwoord als je geen hulp nodig hebt in de winkel", en: "I'm just looking around.", tr: "Sadece bakınıyorum.", voorbeeld: "Zoekt u iets? - Nee, ik kijk gewoon even rond." },
      { woord: "Heeft u een tasje?", nl: "vragen om een plastic of papieren tas", en: "Do you have a bag?", tr: "Poşetiniz var mı?", voorbeeld: "Alstublieft uw bon. - Heeft u ook een tasje?" },
      { woord: "Wilt u de bon?", nl: "vraag van de kassier bij de kassa", en: "Do you want the receipt?", tr: "Fiş istiyor musunuz?", voorbeeld: "Dat is dan vijftien euro. Wilt u de bon?" },

      // 5. Op het werk / Telefoneren
      { woord: "Kunt u dat herhalen?", nl: "vragen om iets nog een keer te zeggen", en: "Could you repeat that?", tr: "Tekrar edebilir misiniz?", voorbeeld: "Ik begrijp het niet, kunt u dat herhalen?" },
      { woord: "Ik bel over...", nl: "de reden van je telefoontje uitleggen", en: "I am calling about...", tr: "... hakkında arıyorum.", voorbeeld: "Hallo, ik bel over de vacature op uw website." },
      { woord: "Een ogenblikje, alstublieft.", nl: "vragen om kort te wachten aan de telefoon", en: "One moment, please.", tr: "Bir dakika lütfen.", voorbeeld: "Ik zoek uw dossier. Een ogenblikje, alstublieft." },
      { woord: "Kunt u langzamer praten?", nl: "vragen om rustiger te spreken", en: "Could you speak slower?", tr: "Daha yavaş konuşabilir misiniz?", voorbeeld: "Ik leer nog Nederlands, kunt u langzamer praten?" },
      { woord: "Ik ben te laat.", nl: "melden dat u niet op tijd bent", en: "I am late.", tr: "Geciktim.", voorbeeld: "Sorry, de trein had vertraging, ik ben te laat." },
      { woord: "Fijne werkdag!", nl: "een wens aan een collega bij aanvang van het werk", en: "Have a good workday!", tr: "İyi çalışmalar!", voorbeeld: "Tot morgen, fijne werkdag nog!" },
      { woord: "Ik ga met verlof.", nl: "melden dat u vakantiedagen opneemt", en: "I am going on leave.", tr: "İzne ayrılıyorum.", voorbeeld: "Volgende week werk ik niet, ik ga met verlof." },

      // 6. Weg vragen / Richting
      { woord: "Hoe kom ik bij...", nl: "vragen naar de route naar een plek", en: "How do I get to...", tr: "...'a nasıl giderim?", voorbeeld: "Pardon, hoe kom ik bij het station?" },
      { woord: "Ga rechtdoor.", nl: "richting aangeven", en: "Go straight ahead.", tr: "Düz gidin.", voorbeeld: "Ga hier rechtdoor en sla dan rechtsaf." },
      { woord: "Sla linksaf.", nl: "richting aangeven", en: "Turn left.", tr: "Sola dönün.", voorbeeld: "Sla bij het stoplicht linksaf." },
      { woord: "Sla rechtsaf.", nl: "richting aangeven", en: "Turn right.", tr: "Sağa dönün.", voorbeeld: "Loop rechtdoor en sla daarna rechtsaf." },
      { woord: "Het is aan de linkerkant.", nl: "locatie beschrijven", en: "It is on the left side.", tr: "Sol tarafta.", voorbeeld: "De supermarkt is aan de linkerkant." },

      // 7. Hulp & Begrip
      { woord: "Ik begrijp het niet.", nl: "melden dat u iets niet snapt", en: "I do not understand.", tr: "Anlamıyorum.", voorbeeld: "Dit woord is moeilijk, ik begrijp het niet." },
      { woord: "Wat betekent dit?", nl: "vragen naar de betekenis van een woord", en: "What does this mean?", tr: "Bu ne anlama geliyor?", voorbeeld: "Pardon, wat betekent het woord 'vergunning'?" },
      { woord: "Spreekt u Engels?", nl: "vragen of iemand Engels praat", en: "Do you speak English?", tr: "İngilizce konuşuyor musunuz?", voorbeeld: "Mijn Nederlands is niet zo goed, spreekt u Engels?" },
      { woord: "Kunt u mij helpen?", nl: "iemand om hulp vragen", en: "Can you help me?", tr: "Bana yardımcı olabilir misiniz?", voorbeeld: "Pardon, ik zoek het station, kunt u mij helpen?" },
      { woord: "Geen probleem.", nl: "zeggen dat iets prima is", en: "No problem.", tr: "Sorun değil / Önemli değil.", voorbeeld: "Bedankt voor uw hulp! - Geen probleem!" },

      // 8. Afspraken maken
      { woord: "Zullen we afspreken?", nl: "voorstellen om elkaar te ontmoeten", en: "Shall we meet up?", tr: "Buluşalım mı?", voorbeeld: "Ik heb dit weekend tijd. Zullen we afspreken?" },
      { woord: "Wanneer heb je tijd?", nl: "vragen naar iemands vrije momenten", en: "When do you have time?", tr: "Ne zaman vaktiniz var?", voorbeeld: "Ik wil je graag zien. Wanneer heb je tijd?" },
      { woord: "Dat komt goed uit.", nl: "zeggen dat een voorgestelde tijd prima is", en: "That suits me well.", tr: "Bu bana uyar.", voorbeeld: "Zullen we om drie uur afspreken? - Ja, dat komt goed uit." },
      { woord: "Helaas kan ik niet.", nl: "een voorstel afwijzen", en: "Unfortunately, I cannot.", tr: "Maalesef gelemem.", voorbeeld: "Zullen we morgen gaan? - Helaas kan ik niet." },
      { woord: "Ik wil graag reserveren.", nl: "een tafel of plek boeken", en: "I would like to book/reserve.", tr: "Rezervasyon yaptırmak istiyorum.", voorbeeld: "Goedenavond, ik wil graag een tafel reserveren voor vier personen." },

      // 9. Sociale interactie
      { woord: "Veel succes!", nl: "wensen bij een toets of moeilijke taak", en: "Good luck!", tr: "Başarılar!", voorbeeld: "Morgen heb je het examen. Veel succes!" },
      { woord: "Gefeliciteerd!", nl: "wensen bij een verjaardag of prestatie", en: "Congratulations!", tr: "Tebrikler!", voorbeeld: "Heb je je diploma gehaald? Gefeliciteerd!" },
      { woord: "Wat jammer!", nl: "medeleven tonen bij slecht nieuws", en: "What a pity!", tr: "Ne yazık! / Çok yazık!", voorbeeld: "Ik ben gezakt voor het examen. - Wat jammer!" },
      { woord: "Hoe was je dag?", nl: "vragen naar iemands dag", en: "How was your day?", tr: "Günün nasıl geçti?", voorbeeld: "Hallo schat, hoe was je dag?" },
      { woord: "Eet smakelijk!", nl: "gezegd voor het eten", en: "Enjoy your meal!", tr: "Afiyet olsun!", voorbeeld: "Het eten staat op tafel, eet smakelijk!" }
    ],
    vragen: [
      {
        type: "mc",
        vraag: "Wat zeg je tegen iemand die ziek is?",
        opties: ["Veel succes!", "Beterschap!", "Eet smakelijk!"],
        antwoord: 1,
        uitleg: { nl: "Je wenst een ziek persoon 'Beterschap!'.", en: "You wish a sick person 'Beterschap!' (Get well).", tr: "Hasta olan kişiye geçmiş olsun ('Beterschap!') denir." }
      },
      {
        type: "mc",
        vraag: "Wat zeg je bij het weggaan als afscheid?",
        opties: ["Aangenaam.", "Tot ziens!", "Alstublieft."],
        antwoord: 1,
        uitleg: { nl: "'Tot ziens!' is een afscheidsgroet.", en: "'Tot ziens!' means goodbye.", tr: "'Tot ziens!' görüşmek üzere / hoşça kal demektir." }
      },
      {
        type: "mc",
        vraag: "Als je de weg niet weet, wat vraag je?",
        opties: ["Hoe kom ik bij het station?", "Mag ik pinnen?", "Waar kom je vandaan?"],
        antwoord: 0,
        uitleg: { nl: "'Hoe kom ik bij...' vraagt naar de weg.", en: "'Hoe kom ik bij...' asks for directions.", tr: "'Hoe kom ik bij...' (...-e nasıl giderim?) yol tarifini sormak içindir." }
      },
      {
        type: "mc",
        vraag: "Wat vraagt de kassier in de supermarkt na het scannen van de boodschappen?",
        opties: ["Spreekt u Engels?", "Wilt u de bon?", "Wanneer heb je tijd?"],
        antwoord: 1,
        uitleg: { nl: "De kassier vraagt of je de bon wilt.", en: "The cashier asks if you want the receipt.", tr: "Kasiyer fiş isteyip istemediğinizi sorar." }
      },
      {
        type: "mc",
        vraag: "Wat betekent 'Kunt u dat herhalen?'",
        opties: ["Could you repeat that?", "Could you speak slower?", "Where is the pharmacy?"],
        antwoord: 0,
        uitleg: { nl: "Het betekent vragen om iets nogmaals te zeggen.", en: "It means asking to say something again.", tr: "Söylenen şeyi tekrar etmesini rica etmek anlamına gelir." }
      },
      {
        type: "mc",
        vraag: "Wat zeg je als iemand geslaagd is voor een examen?",
        opties: ["Wat jammer!", "Gefeliciteerd!", "Geen probleem."],
        antwoord: 1,
        uitleg: { nl: "Je feliciteert iemand met een succes.", en: "You congratulate someone on a success.", tr: "Başarılı olan kişiyi tebrik edersiniz ('Gefeliciteerd!')." }
      },
      {
        type: "mc",
        vraag: "Wat zeg je als je in een winkel bent en geen hulp nodig hebt?",
        opties: ["Ik wil een afspraak maken.", "Ik kijk gewoon even rond.", "Kunt u mij helpen?"],
        antwoord: 1,
        uitleg: { nl: "Je geeft aan dat je alleen wilt kijken.", en: "You indicate that you are just browsing.", tr: "Sadece göz gezdirdiğinizi belirtirsiniz ('Ik kijk gewoon even rond.')." }
      },
      {
        type: "mc",
        vraag: "Wat zeg je aan het begin van het weekend tegen collega's?",
        opties: ["Fijne werkdag!", "Prettig weekend!", "Eet smakelijk!"],
        antwoord: 1,
        uitleg: { nl: "Je wenst hen een fijn weekend.", en: "You wish them a nice weekend.", tr: "Hafta sonu başlarken iyi hafta sonları ('Prettig weekend!') dilersiniz." }
      },
      {
        type: "invoer",
        vraag: "Wat zeg je tegen iemand voordat hij begint met eten?",
        antwoord: "eet smakelijk",
        uitleg: { nl: "'Eet smakelijk' betekent enjoy your meal.", en: "'Eet smakelijk' means enjoy your meal.", tr: "'Eet smakelijk' afiyet olsun demektir." }
      },
      {
        type: "invoer",
        vraag: "Hoe vraag je beleefd of je met je bankkaart mag betalen?",
        antwoord: "mag ik pinnen",
        uitleg: { nl: "Je vraagt 'Mag ik pinnen?'.", en: "You ask 'Mag ik pinnen?' (Can I pay by card?).", tr: "Kartla ödemek için 'Mag ik pinnen?' diye sorulur." }
      },
      {
        type: "invoer",
        vraag: "Wat is de Nederlandse vertaling voor 'Good luck!'?",
        antwoord: "veel succes",
        uitleg: { nl: "'Veel succes!' betekent good luck.", en: "'Veel succes!' means good luck.", tr: "'Veel succes!' başarılar demektir." }
      },
      {
        type: "invoer",
        vraag: "Wat zeg je als je een afspraak wilt maken bij de huisarts?",
        antwoord: "ik wil een afspraak maken",
        uitleg: { nl: "Je vraagt om een afspraak.", en: "You state that you want to make an appointment.", tr: "Aile hekiminden randevu almak için kullanılır." }
      },
      {
        type: "invoer",
        vraag: "Wat is het Nederlandse antwoord voor 'No problem.'?",
        antwoord: "geen probleem",
        uitleg: { nl: "'Geen probleem' betekent no problem.", en: "'Geen probleem' means no problem.", tr: "'Geen probleem' sorun değil demektir." }
      },
      {
        type: "invoer",
        vraag: "Wat zeg je als je te laat op je werk of afspraak komt?",
        antwoord: "ik ben te laat",
        uitleg: { nl: "'Ik ben te laat' meldt dat je niet op tijd bent.", en: "'Ik ben te laat' means I am late.", tr: "Geciktiğinizi bildirmek için kullanılır." }
      },
      {
        type: "gat",
        zin: "Ik begrijp het niet. Kunt u alstublieft ___ praten?",
        antwoord: "langzamer",
        uitleg: { nl: "Als het te snel gaat, vraag je om langzamer (slower) te praten.", en: "If it is too fast, you ask to speak slower.", tr: "Çok hızlı konuşulduğunda daha yavaş ('langzamer') konuşulması rica edilir." }
      },
      {
        type: "gat",
        zin: "Hallo, ik ben Selin. Aangenaam ___ te maken.",
        antwoord: "kennis",
        uitleg: { nl: "'Aangenaam kennis te maken' is de vaste uitdrukking.", en: "'Aangenaam kennis te maken' is the fixed expression for nice to meet you.", tr: "Tanıştığımıza memnun oldum anlamına gelen kalıptır." }
      },
      {
        type: "gat",
        zin: "Pardon, hoe ___ ik bij het treinstation?",
        antwoord: "kom",
        uitleg: { nl: "Je vraagt 'Hoe kom ik bij...' om de weg te vinden.", en: "You ask 'Hoe kom ik bij...' to find the route.", tr: "Yol tarifi almak için 'nasıl ulaşırım/giderim' anlamındaki 'kom' kullanılır." }
      },
      {
        type: "gat",
        zin: "Ik ga volgende week met ___ naar een zonnig land.",
        antwoord: "verlof|vakantie",
        uitleg: { nl: "'Verlof' of 'vakantie' betekent vrije dagen opnemen.", en: "Both 'verlof' (leave) and 'vakantie' (vacation) fit here.", tr: "İzin veya tatil dönemini belirtmek için kullanılır." }
      },
      {
        type: "gat",
        zin: "Pardon, ik zoek een medicijn. Waar is de ___?",
        antwoord: "apotheek",
        uitleg: { nl: "Je koopt medicijnen in de apotheek.", en: "You buy prescription medicines at the pharmacy (apotheek).", tr: "İlaçlar eczaneden ('apotheek') satın alınır." }
      },
      {
        type: "gat",
        zin: "Zullen we aanstaande zaterdag ___?",
        antwoord: "afspreken",
        uitleg: { nl: "'Afspreken' betekent een ontmoeting plannen.", en: "'Afspreken' means to meet up.", tr: "'Afspreken' buluşmak / randevulaşmak demektir." }
      }
    ]
  });
})();
