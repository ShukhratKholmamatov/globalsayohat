const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "0px",
  // duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// ScrollReveal().reveal(".destination__card", {
//   ...scrollRevealOption,
//   interval: 0,
// });

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 100,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

  const cityButtons = document.querySelectorAll('.filter-btn'); // same as before
const starButtons = document.querySelectorAll('.star-btn'); // new
const cards = document.querySelectorAll('.destination__card');

let selectedCity = 'all';
let selectedStars = 'all';

  // filterButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const selectedCity = button.getAttribute('data-city');

  //     // Remove 'active' class from all and add to current
  //     filterButtons.forEach(btn => btn.classList.remove('active'));
  //     button.classList.add('active');

  //     // Show/Hide cards based on filter
  //     cards.forEach(card => {
  //       const cardCity = card.getAttribute('data-city');
  //       if (selectedCity === 'all' || cardCity === selectedCity) {
  //         card.style.display = 'block';
  //       } else {
  //         card.style.display = 'none';
  //       }
  //     });
  //   });
  // });

  // City filter (your code extended)
cityButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedCity = button.getAttribute('data-city');

    cityButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    applyFilters();
  });
});

// Star filter (new)
starButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedStars = button.getAttribute('data-stars');

    starButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    applyFilters();
  });
});

// Apply both filters
function applyFilters() {
  cards.forEach(card => {
    const cardCity = card.getAttribute('data-city');
    const cardStars = card.getAttribute('data-stars');

    const matchCity = (selectedCity === 'all' || cardCity === selectedCity);
    const matchStars = (selectedStars === 'all' || cardStars === selectedStars);

    card.style.display = (matchCity && matchStars) ? 'block' : 'none';
  });
}


  (function () {
const translations = {
  uz: {
    main_nav: "ASOSIY",
    about_nav: "BIZ HAQIMIZDA",
    tour_nav: "TUR PAKETLAR",
    hotel_nav: "MEHMONXONALAR",
    contact_nav: "BOG'LANISH",
    book_nav: "Sayohatni bron qilish",
    bron: "BRON QILISH",
    index1: "SAYOHATINGIZNI yangi bosqichga olib chiqing",
    index2: "O‘zbekiston sehrini his eting!",
    index3: "Hozir band qilish",
    facts_title: "O‘zbekiston Haqida Qiziqarli Faktlar",
    fact_metro_title: "Toshkent metropoliteni",
    fact_metro_descr: "Toshkent metropoliteni — Markaziy Osiyo mintaqasidagi birinchi metro hisoblanadi.",
    fact_army_title: "O‘zbekiston qurolli kuchlari",
    fact_army_descr: "Markaziy Osiyo mintaqasida esa O‘zbekiston harbiy qudrati bo‘yicha birinchi o‘rinda turadi — Qozog‘iston, Qirg‘iziston, Tojikiston va Turkmanistondan oldinda.",
    fact_oldcity_title: "O‘zbekistonning qadimiy shahri",
    fact_oldcity_descr: "O‘zbekistonning eng qadimiy shahri Samarqand — Rim shahri bilan tengdosh hisoblanadi.",
    fact_people_title: "Oʻzbek xalqi haqida qisqacha",
    fact_people_descr: "Oʻzbekiston koʻp millatli davlat. Aholining asosiy qismini (71% dan ortigʻini) oʻzbeklar tashkil etadi. Ular janubiy yevropoid irqiga mansub boʻlib, tarkibida mongoloid unsurlar ham mavjud.",
    fact_langs_title: "Oʻzbekistondagi tillar",
    fact_langs_descr: "Oʻzbekistonda davlat tili — oʻzbek tili. Rus tili keng tarqalgan, ayrim hududlarda tojik tili ham ishlatiladi.",
    fact_population_title: "Oʻzbekiston aholisi tarkibi",
    fact_population_descr: "Oʻzbekistonda qozoq, qirgʻiz, turkman, uygʻur, tatar, tojik (4,7%), rus va boshqa xalqlar (16%) yashaydi. Shuningdek, koreys, arab, loʻli, yahudiy va boshqalar ham bor. Aholi soni tez ortmoqda.",
    fact_climate_title: "Oʻzbekiston iqlimi",
    fact_climate_descr: "Oʻzbekiston iqlimi kontinental: issiq yoz, sovuq qish. Yogʻin kam, asosan bahor va qishda. Sayohat uchun eng qulay fasllar — bahor va kuz.",
    fact_tashkent_title: "Toshkent haqida",
    fact_tashkent_descr: "Toshkent — Oʻzbekiston poytaxti va eng yirik shahri. 2000 yillik tarixga ega, iqtisodiy va madaniy markaz. Bu yerda 3 millionga yaqin aholi yashaydi.",
    fact_tashkentdistricts_title: "Toshkent shahri tumanlari",
    fact_tashkentdistricts_descr: "Toshkent shahri 11 ta tumanlardan iborat: Olmazor, Bektemir, Mirobod, Mirzo Ulug‘bek, Sergeli, Chilonzor, Shayxontohur, Yunusobod, Yakkasaroy, Yashnobod, Uchtepa.",
    showcase_title: "O‘ZBEKISTON",
    showcase_descr1: "O‘zbekistonning rasmiy nomi — O‘zbekiston Respublikasi. Uning poytaxti — Toshkent shahri. Mamlakatning umumiy hududi 447,4 ming kvadrat kilometrni tashkil qiladi. Davlat tuzumi huquqiy demokratik tizim asosida qurilgan. 2015-yilgi ma’lumotlarga ko‘ra, aholi soni 37,7 million kishini tashkil etadi. 2025-yilga kelib, mehnatga layoqatli aholining ulushi umumiy aholining 60,5 foizini tashkil etishi kutilmoqda. Respublikaning davlat tili — o‘zbek tili. Davlat rahbari — Prezident Shavkat Miromonovich Mirziyoyev. Pul birligi — O‘zbekiston so‘mi. O‘zbekiston GMT +5 vaqt zonasida joylashgan. Mamlakatning xalqaro telefon kodi +998, internetdagi yuqori darajadagi domeni esa “.uz” hisoblanadi. Elektr tarmog‘ining kuchlanishi 220 volt, chastotasi esa 50 Gts. O‘zbekistonda avtomobillar harakati o‘ng tomonlama hisoblanadi.",
    showcase_descr2: "O‘zbekistonda boshqa turkiy tillarda so‘zlashuvchi xalqlar vakillari ham yashaydi. Ular qatoriga qozoqlar, qirg‘izlar, turkmanlar, uyg‘urlar va tatarlar kiradi. Bundan tashqari, respublikada fors tillari guruhiga mansub til — tojik tilida so‘zlashuvchi tojiklar katta jamoani tashkil etadi (taxminan 4,7%). Aholining muhim qismini ruslar va rus tilida so‘zlashuvchi boshqa xalqlar tashkil qiladi. Ularning umumiy ulushi respublika aholining qariyb 16 foiziga teng. Shuningdek, O‘zbekistonda koreyslar, arablar, Markaziy Osiyo lo‘lilari, yahudiylar, nemislar va boshqa ko‘plab millat vakillari ham istiqomat qiladi. Umuman olganda, O‘zbekiston aholisi soni yildan-yilga tez sur’atlarda ortib bormoqda.",
    showcase_btn: "Hoziroq band qiling!",
    client_header: "Minglab sayohatchilar tomonidan sevib tanlangan",
    client_descr: "Sayohatga oshno qalblar va unutilmas xotiralar haqidagi hikoyalarni bizning qadrli mijozlarimiz nigohi orqali kashf eting.",
    client1_text: "Global Sayohat turizm kompaniyasi orqali O‘zbekistonga sayohatimiz juda ajoyib o‘tdi. Ular bizga eng yaxshi marshrutlarni tavsiya qilib, vaqtimizni samarali o‘tkazishimizga yordam berishdi. Juda minnatdormiz!",
    client1_name: "Abdurahmon Vahobboyev",
    client1_title: "Sayohat blogeri",
    client2_text: "Global Sayohat bizga O‘zbekistonga kelganimizda katta yordam berdi. Ular orqali eng go‘zal joylarni ko‘rib, vaqtimizni bekor o‘tkazmasdan, samarali dam oldik. Rahmat!",
    client2_name: "Muhammadiyor Shokirov",
    client2_title: "Sarguzasht ishqibozi",
    client3_text: "Biz Global Sayohat orqali O‘zbekistonning eng chiroyli manzillarini ko‘rdik. Kompaniya bizni kerakli odamlar va joylar bilan bog‘lab, vaqtimizni to‘liq foydali o‘tkazishimizga imkon yaratdi.",
    client3_name: "Doniyor Sohibov",
    client3_title: "Sportchi",
    client4_text: "Global Sayohat turizm kompaniyasi tufayli O‘zbekistonga safarimiz juda qulay va maroqli bo‘ldi. Ular barcha tashkiliy ishlarni o‘z zimmasiga olib, bizga faqat sayohatdan zavqlanish qoldi.",
    client4_name: "Ruslan Aleksandrov",
    client4_title: "Biznes rahbari",
    footer_logo: "Global Sayohat",
    footer_descr: "O‘zbekistonni osongina va zavq bilan kashf eting — bizning keng qamrovli sayohat platformamiz orqali. Sayohatingiz aynan shu yerda boshlanadi — bu yerda qulay rejalashtirish unutilmas taassurotlar bilan uyg‘unlashadi.",
    footer_havola: "Havola",
    footer_asosiy: "ASOSIY",
    footer_tour: "TUR PAKETLAR",
    footer_about: "BIZ HAQIMIZDA",
    footer_hotel: "MEHMONXONALAR",
    footer_contact: "Biz bilan bog'laning",
    footer_phone: "+998 95 381 50 05",
    footer_email: "info@globalsayohat",
    footer_address: "Toshkent, Yakkasaroy tumani, Kichik halqa yo'li, 14-b-uy",
    footer_copyright: "Mualliflik huquqi © 2025 Leno Agency. Barcha huquqlar himoyalangan.",
    five_day_trip: "Toshkent-Samarqand-Buxoro-Xiva",
    six_day_trip: "Toshkent-Samarqand-Buxoro",
    eight_day_trip: "Toshkent-Samarqand-Buxoro",
    five_text: "5 kunduz 4 kecha",
    six_text: "6 kunduz 5 kecha",
    eight_text: "8 kunduz 7 kecha",
    m_manzil: "Mashhur Manzillar",
    manzil_desc: "O‘zbekiston atrofidagi eng go'zal va qadimiy manzillarni kashf eting",
    h1_gold: "Kurortlar",
    p_gold: "O‘zbekiston boy balneologik (suv bilan davolovchi) kurortlarga ega: Chortoq, Ag‘aliq, Toshkent mineral suvlari, Chimyon.",
    h1_kurortlar: "Kurortlar",
    p_kurortlar: "O‘zbekiston boy balneologik (suv bilan davolovchi) kurortlarga ega: Chortoq, Ag‘aliq, Toshkent mineral suvlari, Chimyon.",
    h1_metro: "Toskent metrosi",
    p_metro: "Toshkent metropoliteni — Markaziy Osiyo mintaqasidagi birinchi metro hisoblanadi.<br>Toshkent metrosi hatto Moskva metrosidan ham zo‘r.",
    h1_qurol: "O‘zbekiston Qurolli Kuchlari",
    p_qurol: "O‘zbekiston Qurolli Kuchlari dunyodagi eng kuchli armiyalar reytingida 58-o‘rinni egallaydi. Markaziy Osiyo doirasida esa O‘zbekiston harbiy kuch bo‘yicha birinchi o‘rinda turadi, Qozog‘iston, Qirg‘iziston, Tojikiston va Turkmanistondan o‘zib ketgan.",
    h1_muy: "Muy-Muborak madrasasi",
    p_muymuborak: "Qur’onning eng qadimgi nusxasi aynan Muy-Muborak madrasasida saqlanishi UNESCO sertifikati bilan tasdiqlangan.",
    p_yil: "Yil Tajriba",
    p_xursand: "Xursand Mijozlar",
    p_rating: "Umumiy reyting",
    p_sayohat: "BMB Global Sayohat - O'zbekistonning ichki turizmi rivojlanishiga hissa qo'shadigan va xorijiy sayohatlarni tashkil etuvchi sayyohlik kompaniyasi. Asosiy faoliyat yo'nalishi-mamlakatning asosiy diniy va tarixiy markazlari bo'ylab noyob ziyorat va madaniy sayohatlar o'tkazish. BMB Global Sayohat — O‘zbekiston va xorijiy turistlar uchun ichki va xalqaro sayohatlarni rivojlantirishga bag‘ishlangan sayyohlik kompaniyasidir. Kompaniyamiz O‘zbekistonning asosiy tarixiy va diniy obidalariga sayohatlar tashkil etish orqali milliy madaniy merosni targ‘ib qilish va unutilmas tajribalar yaratishga intiladi. Shu bilan birga, biz zamonaviy talab va xalqaro standartlarga mos keluvchi xorijiy sayohat dasturlarini ishlab chiqib, o‘zbek sayyohlariga dunyoning mashhur maskanlarini kashf etish imkoniyatini taqdim etamiz. Bizning xizmatlarimizga muqaddas joylarga ziyoratlar, Samarqand, Buxoro, Xiva kabi shaharlar bo‘ylab ekskursiyalar va har bir mijoz istaklariga mos xorijiy turpaketlar kiradi. BMB Global Sayohat turizm rivojiga kompleks yondashib, madaniy merosni asrash, sayohatchilar uchun qulay sharoit yaratish va innovatsion marshrutlar ishlab chiqishga e’tibor qaratadi. Kompaniyamiz shuningdek ishonchli hamkorlik tamoyillariga asoslanib, noyob yo‘nalishlarga kirish, birgalikda reklama va xalqaro turizm aloqalarini mustahkamlash bo‘yicha keng imkoniyatlarni taqdim etadi. Yuqori sifatli xizmat, professionallik va yangilikka intilish orqali biz sizni yangi sayohat ufqlari sari chorlaymiz.",
    h2_xavfsiz: "O‘zbekiston Bo‘ylab Qulay va Xavfsiz Sayohat",
    xotiralar: "Unutilmas xotiralar, ishonchli xizmat va qulay yo‘llanmalar – biz sizning orzudagi sayohatingizni haqiqatga aylantiramiz.",
    h4_tajriba: "Mahalliy tajriba va chuqur bilim",
    p_tajriba: "Biz O‘zbekistonning har bir burchagini yurakdan bilamiz. Qadimiy shaharlar, tarixiy obidalar, tabiiy mo‘jizalar — har bir sayohatimizda sizga faqat sayyoh emas, balki mezbon kabi his qilishingizga yordam beramiz.",
    h4_xavfsiz: "Shaxsiy yondashuv va qulay xizmat",
    p_xavfsiz: "Har bir mijoz biz uchun muhim. Sizning qiziqishlaringiz, qulayligingiz va byudjetingiz asosida individual sayohat dasturlarini tuzamiz. Transport, turar joy, ekskursiyalar – barchasi siz uchun moslashtiriladi.",
    h4_ishonch: "Ishonchli hamkor va xavfsiz sayohat",
    p_ishonch: "Sifatli xizmat, xavfsizlik va halollik — bizning ustuvor tamoyillarimiz. Minglab sayohatchilar bizni tanlagan va mamnun qolgan. Endi navbat sizda!",
    h2_hotel: "Mehmonxonalar",
    p_hotel: "O‘zbekiston Respublikasining barcha viloyatlaridagi mehmonxonalar",
    tashkent_hotel: "Toshkent shahridagi mehmonxonalari",
    samarkand_hotel: "Samarqand viloyatidagi mehmonxonalari",
    bukhara_hotel: "Buxoro viloyatidagi mehmonxonalari",
    khiva_hotel: "Xiva shahridagi mehmonxonalari",
    btn_all: "Barchasi",
    h2_connect: "Biz Bilan Bog'laning!",
    btn_send: "Yuborish",
    div_xabar: "Xabar yuborildi!",
    div_error: "Xatolik yuz berdi."
  },
  ru: {
    main_nav: "ГЛАВНАЯ",
    about_nav: "О НАС",
    tour_nav: "ТУРПАКЕТЫ",
    hotel_nav: "ОТЕЛИ",
    contact_nav: "КОНТАКТЫ",
    book_nav: "Забронировать тур",
    bron: "ЗАБРОНИРОВАТЬ",
    index1: "Поднимите своё путешествие на новый уровень",
    index2: "Почувствуйте магию Узбекистана!",
    index3: "Забронировать сейчас",
    facts_title: "Интересные факты об Узбекистане",
    fact_metro_title: "Ташкентский метрополитен",
    fact_metro_descr: "Ташкентский метрополитен — первый в Центральной Азии.",
    fact_army_title: "Вооружённые силы Узбекистана",
    fact_army_descr: "По военной мощи Узбекистан занимает первое место в Центральной Азии, опережая Казахстан, Кыргызстан, Таджикистан и Туркменистан.",
    fact_oldcity_title: "Древний город Узбекистана",
    fact_oldcity_descr: "Самый древний город Узбекистана — Самарканд, ровесник Рима.",
    fact_people_title: "Кратко о народе Узбекистана",
    fact_people_descr: "Узбекистан — многонациональная страна. Основную часть населения (более 71%) составляют узбеки. Они относятся к южноевропеоидной расе, в составе также есть монголоидные элементы.",
    fact_langs_title: "Языки Узбекистана",
    fact_langs_descr: "В Узбекистане государственный язык — узбекский. Русский язык широко распространён, в некоторых регионах говорят на таджикском.",
    fact_population_title: "Состав населения Узбекистана",
    fact_population_descr: "В Узбекистане проживают казахи, кыргызы, туркмены, уйгуры, татары, таджики (4,7%), русские и другие народы (16%). Также есть корейцы, арабы, цыгане, евреи и др. Население быстро растёт.",
    fact_climate_title: "Климат Узбекистана",
    fact_climate_descr: "Климат Узбекистана континентальный: жаркое лето, холодная зима. Осадков мало, в основном весной и зимой. Лучшее время для путешествий — весна и осень.",
    fact_tashkent_title: "О Ташкенте",
    fact_tashkent_descr: "Ташкент — столица и крупнейший город Узбекистана. История более 2000 лет, экономический и культурный центр, население около 3 млн человек.",
    fact_tashkentdistricts_title: "Районы города Ташкента",
    fact_tashkentdistricts_descr: "В Ташкенте 11 районов: Олмазор, Бектемир, Миробод, Мирзо Улугбек, Сергелий, Чиланзар, Шайхонтохур, Юнусабад, Яккасарай, Яшнабад, Учтепа.",
    showcase_title: "УЗБЕКИСТАН",
    showcase_descr1: "Официальное название — Республика Узбекистан. Столица — город Ташкент. Общая площадь — 447,4 тыс. кв. км. Государственный строй — демократическая правовая система. По данным на 2015 год, численность населения — 37,7 млн человек. К 2025 году доля трудоспособного населения ожидается на уровне 60,5% от общего числа жителей. Государственный язык — узбекский. Глава государства — Президент Шавкат Миромонович Мирзиёев. Валюта — узбекский сум. Узбекистан находится в часовом поясе GMT+5. Международный телефонный код — +998, национальный интернет-домен — .uz. Электросеть: 220В, 50Гц. Правостороннее движение.",
    showcase_descr2: "В Узбекистане проживают и представители других тюркоязычных народов: казахи, кыргызы, туркмены, уйгуры, татары. Кроме того, в стране крупная таджикоязычная община (около 4,7%). Значительную часть составляют русские и русскоязычные. Всего около 16% населения. Также проживают корейцы, арабы, цыгане, евреи, немцы и др. Население страны быстро увеличивается с каждым годом.",
    showcase_btn: "Забронируйте сейчас!",
    client_header: "Выбор тысяч путешественников",
    client_descr: "Откройте для себя истории о путешествиях и незабываемых впечатлениях глазами наших клиентов.",
    client1_text: "Skywings полностью изменил мои впечатления от путешествий. Я нашёл скрытые жемчужины в шумных городах и открыл уединённые места вдали от туристических маршрутов. Всё было организовано идеально. Рекомендую Skywings всем, кто хочет сделать своё путешествие особенным!",
    client1_name: "Абдурахмон Вахоббоев",
    client1_title: "Тревел-блогер",
    client2_text: "Моё недавнее путешествие с Skywings было просто великолепным. Индивидуальный маршрут и рекомендации помогли мне побывать там, куда сам бы не попал. Уже планирую следующую поездку с ними!",
    client2_name: "Мухаммадийор Шокиров",
    client2_title: "Любитель приключений",
    client3_text: "Skywings предложил уникальный опыт для моего исследования исторических памятников. Необычные ракурсы позволили глубже понять и оценить места, которые я изучал. Рекомендую их всем историкам и ценителям культуры.",
    client3_name: "Дониёр Сохибов",
    client3_title: "Спортсмен",
    client4_text: "Найти баланс между работой и путешествиями бывает сложно, но с Skywings всё стало проще. Грамотное планирование и отличные советы помогли мне использовать свободное время на максимум и получить удовольствие от каждой минуты поездки. Буду обращаться ещё!",
    client4_name: "Руслан Александров",
    client4_title: "Руководитель бизнеса",
    footer_logo: "Global Sayohat",
    footer_descr: "Откройте Узбекистан легко и с удовольствием — с нашей современной туристической платформой. Ваше путешествие начинается здесь — здесь простое планирование сочетается с незабываемыми впечатлениями.",
    footer_havola: "Ссылки",
    footer_asosiy: "ГЛАВНАЯ",
    footer_tour: "ТУРПАКЕТЫ",
    footer_about: "О НАС",
    footer_hotel: "ОТЕЛИ",
    footer_contact: "Связаться с нами",
    footer_phone: "+998 95 381 50 05",
    footer_email: "info@globalsayohat",
    footer_address: "Ташкент, Яккасарайский район, Кичик кольцевая дорога, дом 14-Б",
    footer_copyright: "Авторские права © 2025 Leno Agency. Все права защищены.",
    five_day_trip: "Ташкент – Самарканд – Бухара – Хива",
    six_day_trip: "Ташкент – Самарканд – Бухара",
    eight_day_trip: "Ташкент – Самарканд – Бухара",
    five_text: "5 дней 4 ночи",
    six_text: "6 дней 5 ночей",
    eight_text: "8 дней 7 ночей",
    m_manzil: "Знаменитые места",
    manzil_desc: "Откройте для себя самые красивые и древние места Узбекистана",
    h1_gold: "Золото",
    p_gold: "По запасам золота Узбекистан занимает 4-е место в мире.",
    h1_kurortlar: "Курорты",
    p_kurortlar: "Узбекистан богат бальнеологическими (лечебными водными) курортами: Чартак, Агалык, Ташкентские минеральные воды, Чимган.",
    h1_metro: "Ташкентское метро",
    p_metro: "Ташкентский метрополитен — первый метро в регионе Центральной Азии. Ташкентское метро даже лучше, чем московское.",
    h1_qurol: "Вооружённые силы Узбекистана",
    p_qurol: "Вооружённые силы Узбекистана занимают 58-е место в рейтинге самых сильных армий мира. В рамках Центральной Азии Узбекистан занимает первое место по военной мощи, опередив Казахстан, Кыргызстан, Таджикистан и Туркменистан.",
    h1_muy: "Медресе Муй-Муборак",
    p_muymuborak: "Самый древний экземпляр Корана хранится именно в медресе Муй-Муборак, что подтверждено сертификатом UNESCO",
    p_yil: "Годы опыта",
    p_xursand: "Довольные клиенты",
    p_rating: "Общий рейтинг",
    p_sayohat: "BMB Global Sayohat — туристическая компания, вносящая вклад в развитие внутреннего туризма Узбекистана и организующая зарубежные поездки. Основное направление деятельности — проведение уникальных паломнических и культурных туров по основным религиозным и историческим центрам страны. BMB Global Sayohat — туристическая компания, посвящённая развитию внутреннего и международного туризма для туристов из Узбекистана и зарубежья. Наша компания стремится продвигать национальное культурное наследие и создавать незабываемые впечатления, организуя поездки к основным историческим и религиозным памятникам Узбекистана. В то же время мы разрабатываем зарубежные туристические программы, соответствующие современным требованиям и международным стандартам, предоставляя узбекским туристам возможность открывать для себя знаменитые уголки мира. Наши услуги включают паломничества к священным местам, экскурсии по таким городам, как Самарканд, Бухара, Хива, а также зарубежные турпакеты, адаптированные под пожелания каждого клиента. BMB Global Sayohat комплексно подходит к развитию туризма, уделяя внимание сохранению культурного наследия, созданию комфортных условий для путешественников и разработке инновационных маршрутов. Наша компания также предоставляет широкие возможности для доступа к уникальным направлениям, совместной рекламы и укрепления международных туристических связей, основываясь на принципах надёжного партнёрства. Благодаря высокому качеству обслуживания, профессионализму и стремлению к новаторству, мы приглашаем вас к новым горизонтам путешествий.",
    h2_xavfsiz: "Комфортное и безопасное путешествие по Узбекистану",
    xotiralar: "Незабываемые воспоминания, надёжный сервис и удобные турпакеты — мы воплотим в реальность путешествие вашей мечты.",
    h4_tajriba: "Местный опыт и глубокие знания",
    p_tajriba: "Мы знаем каждый уголок Узбекистана. Древние города, исторические памятники, природные чудеса — в каждом нашем путешествии мы поможем вам почувствовать себя не просто туристом, а гостем.",
    h4_xavfsiz: "Индивидуальный подход и комфортный сервис",
    p_xavfsiz: "Каждый клиент важен для нас. Мы разрабатываем индивидуальные туристические программы, исходя из ваших интересов, комфорта и бюджета. Транспорт, проживание, экскурсии — всё адаптируется для вас.",
    h4_ishonch: "Надёжный партнёр и безопасное путешествие",
    p_ishonch: "Качественный сервис, безопасность и честность — наши приоритетные принципы. Тысячи путешественников выбрали нас и остались довольны. Теперь очередь за вами!",
    h2_hotel: "Отели",
    p_hotel: "Отели во всех регионах Республики Узбекистан",
    tashkent_hotel: "Отели в городе Ташкент",
    samarkand_hotel: "Отели в Самаркандской области",
    bukhara_hotel: "Отели в Бухарской области",
    khiva_hotel: "Отели в городе Хива",
    btn_all: "Все",
    btn_all: "Все",
    h2_connect: "Свяжитесь с нами!",
    btn_send: "Отправить",
    div_xabar: "Сообщение отправлено!",
    div_error: "Произошла ошибка."


  }
};

      // 🔄 Set Language Function
      window.setLang = function (lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
          const key = el.getAttribute('data-translate');
          el.textContent = translations[lang][key] || key;
        });
        localStorage.setItem('selectedLang', lang);
      };

      // 📦 Load saved language or default to Uzbek
      const savedLang = localStorage.getItem('selectedLang') || 'uz';
      setLang(savedLang);

      // 🖱️ Drag Logic
      const langSwitcher = document.getElementById("langSwitcher");
      let isDragging = false, offsetX = 0, offsetY = 0;

      langSwitcher.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - langSwitcher.offsetLeft;
        offsetY = e.clientY - langSwitcher.offsetTop;
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          langSwitcher.style.left = (e.clientX - offsetX) + 'px';
          langSwitcher.style.top = (e.clientY - offsetY) + 'px';
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    })();

    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change every 5 seconds