import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // .use(HttpBackend) // *** added this ***
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "RU",
    // supportedLngs: ["en", "es"], // *** added this ***
    // ns: ["translations"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
    // },
    resources: {
      UZ: {
        translation: {
          ministr:
            "O‘ZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGI",
          nav: {
            about: "Kengash haqida",
            projects: "Loyihalar",
            edu: "Ta'lim",
            blog: "Blog",
            contact: "Aloqa",
            about2: "Kengash ishtirokchilari",
            home: "Bosh sahifa",
            news: "Yangiliklar",
          },
          home: {
            title:
              "O'zR OTFIV huzuridagi Sun’iy intellekt bo‘yicha maslahat kengashi",
            title2:
              "O‘zbekiston turkiy dunyoning IT-mutaxassislarini birlashtirdi",
            info: "Raqamlashtirish boʻyicha mutaxassislar forumi “aqlli shaharlar” sohasida bilim va tajriba almashish uchun muhim platforma boʻlib xizmat qilishi hamda Turkiy davlatlar tashkiloti davlatlarining tegishli davlat organlariga tavsiyalar berishi kerak.",
            more: "Batafsil",
            mission: "Missiya",
            mission_title:
              "Maslahat kengashining asosiy maqsadi ilmiy tadqiqotlar, amaliy startaplar va boshqa tashabbuslarni rivojlantirish uchun turli ilg‘or g‘oyalarini taklif qila oluvchi muhim mutaxassislar hamjamiyati (professional komyuniti)ni shakllantirish uchun shart-sharoit yaratish hamda keyinchalik sun’iy intellekt texnologiyalari vositalari va imkoniyatlarini O‘zbekiston iqtisodiyotining turli sohalariga joriy qilish orqali fuqarolar farovonligini oshirishga xizmat qilish hisoblanadi.",
            work_title: "FAOLIYAT YO'NALISHLARI",
            work1: "Tibbiyotda sun`iy intelekt",
            work2: "Sun'iy intellekt etikasi",
            work3: "Ta'lim",
            work4: "Turizm va kreativ industriyalar",
            work1_info:
              "Sun'iy intellekt texnologiyalaridan foydalangan holda tibbiyot va sog'liqni saqlash sohalari uchun echimlarni taklif eting",
            work2_info:
              "Mamlakatda shakllangan madaniyat va qadriyatlarni hisobga olgan holda sun'iy intellektning etika kodeksini ishlab chiqish",
            work3_info:
              "O‘zbekistonda sun’iy intellektni o‘qitish jarayoni samaradorligini oshirishga hissa qo‘shish",
            work4_info:
              "Raqamli texnologiyalar va sun'iy intellekt texnologiyalaridan foydalangan holda turizm va madaniyat uchun yechimlarni taklif eting",
            download: "Nizom matnini yuklab olish",
            blog: "Blog",
            blog1:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul malaka oshirish kursi yo‘lga qo‘yildi",
            blog2:
              "Toshkentdagi TEAM universitetida 6th Global Entrepreneurship Week GEW-2022 (Global Entrepreneurship Week) boshlandi.",
            blog3: `"Sun'iy intellekt" tushunchasi haqida.`,
            partners: "Ishtirokchilar",
            about_info:
              "— Texnologiyalar hayotimizga jadal sur’atlar bilan kirib kelmoqda va bu jarayonga hech bir omil to‘siq bo‘la olmaydi, nazarimda. Ammo texnologik rivojlanish, raqamlashtirish hamda globallashuv ta’sirida kelajakda insoniyatni ishchi o‘rinlarini yo‘qotishi bilan bog‘liq muammolar kutib turgan bo‘lishi mumkin. Shu sababli, faqat inson aql-idroki qodir bo‘lgan, texnologiyalar bajarishi imkonsiz hisoblangan ijodiy vazifalarni o‘z ichiga olgan yangi ishchi o‘rinlarini yaratish  va shu vazifalarini uddalashga  qodir kadrlarni yetishtirish bizning asosiy maqsadlarimizdan biriga aylanishi kerak. Sun’iy intellekt texnologiyalari kundan kunga rivojlanib, takomillashib bormoqda. Biroq bu texnologiyalar uchun qat’iy belgilangan etika qoidalari mavjud emas. Texnologiyalar bugun bo‘lmasa, ertaga jamiyatimizdagi har bir shaxsning hayotiga aralashishi mumkin. Mana shu aralashuvning sarhadlarini belgilash ustida ham sizu biz ishlashimiz darkor.  Bu sohada yetakchi bo‘lgan ko‘plab rivojlangan mamlakatlar tajribasidan kelib chiqib, etika qoidalarini yaratishimiz mumkin. Biroq, madaniyat va milliy qadriyatlar masalasi nima bo‘ladi? Innovatsiyalar yaratar ekanmiz, yangi texnologiyalarni joriy etar ekanmiz, ularning jamiyatimiz ongu shuuriga ta’sirini o‘rganishimiz, uni oldini olishimiz, bu borada siyosat yuritishimiz darkor.",
            about_info2:
              "Ishni oddiy va jo‘n ko‘ringan vazifalardan boshlaganimizga qaramay, oldimizda mashaqqatli vazifa turibdi. Bu mashaqqatni yengib o‘tish uchun esa, kelgusi 50 yil uchun o‘z qarashlarimiz va ustuvor yo‘nalishlarimizni belgilab olishimiz zarur.",
            about_name: "Ibroxim Abduraxmonov",
            about_work:
              "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vaziri",
            email: "Yangiliklarga obuna bo'ling",
            email_info:
              "Elektron pochta manzilingizni kiritib, yangiliklar va maslahatlarni to'g'ridan-to'g'ri oling",
            email_name: "Elektron pochta",
            email_button: "Obuna boʻling",
            email_check: "Yangiliklarni olishga rozilik berish",
            footer:
              "Portalda e’lon qilingan materiallardan nusxa ko‘chirish, tarqatish va ulardan foydalanishning boshqa shakllari faqat tahririyatning yozma roziligi bilan amalga oshirilishi mumkin.",
            socials: "Ijtimoiy tarmoqlarimiz",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Foydali havolalar",
            made: "2022 © Ishlab chiqaruvchi: Raqamli taʼlim texnologiyalarini rivojlantirish markazi",
            news1:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul o‘quv kursi yo‘lga qo‘yildi",
            news1_info:
              "Oliy ta’lim, fan va innovatsiyalar vazirligi, Maktabgacha va maktab ta’limi vazirligi hamda Toshkent shahridagi Amity universiteti hamkorligida Toshkent shahridagi umumta’lim maktablarining informatika fani o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar interneti (Internet of Things - IoT) bo‘yicha bepul o‘quv kursiga start berildi.",
            news2:
              "Sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi platforma ishga tushiriladi",
            news2_info:
              "Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov Toshkent Pediatriya Tibbiyot Instituti huzuridagi Ilg’or texnologiyalar va strategik tashabbuslar markazi faoliyati va markazning sun'iy intellekt bo'yicha amalga oshirayotgan loyihalari bilan yaqindan tanishdi.",
            news3:
              "Sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv o'tkazildi",
            news3_info:
              "Joriy yilning 16-fevral kuni Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov va Toshkentdagi AMITY universiteti direktori B.Abdullayev o'rtasida sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv bo'lib o'tdi.",
          },
          about: {
            user1: {
              name: "Bobur Raximov",
              work: "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirining maslahatchisi, Maslahat kengashi raisi",
            },
            user2: {
              name: "Zafar Yuldashev",
              work: "Oliy taʼlim, fan va innovatsiyalar vazirligi AKTni joriy etish va raqamlashtirish boshqarmasi boshligʻi oʻrinbosari, rais oʻrinbosari",
            },
            user3: {
              name: "Baxtiyor Maxkamov",
              work: "Iqtisodiyot fanlari doktori, prof. Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti rektori",
            },
            user4: {
              name: "Andrey Neznamov",
              work: "Rossiyada sun'iy intellekt etika kodeksini joriy etish bo'yicha komissiya rahbari. Boshqaruvchi direktor - Sberbankning sun'iy intellektni tartibga solish markazi rahbari",
            },
            user5: {
              name: "Igor Vixrov",
              work: `Toshkent pediatriya tibbiyot instituti Innovatsiya markazining "E-Health" boʻlimi boshligʻi`,
            },
            user6: {
              name: "Vladimir Opredelenov",
              work: "CDO, San'at va madaniy meros bo'yicha texnik ekspert, .ART domenlari, Rossiya",
            },
            user7: {
              name: "Farhod Xoliqov",
              work: "“O‘zbektelekom” AK “Sun’iy intellekt” departamenti boshlig‘i, maslahatchi-konsultant",
            },
            user8: {
              name: "Shahzod Umirzoqov",
              work: "TASS VISION asoschisi va bosh direktori",
            },
            user9: {
              name: "Doktor Danish Ather",
              work: "Tashkent shahridagi Amity universiteti dotsenti, IEEE katta a'zosi, Hindiston",
            },
            user10: {
              name: "Azizjon Azimi",
              work: "Tojikiston sunʼiy intellekt milliy kengashi raisi, “zypl.ai” MChJ asoschisi",
            },
            user11: {
              name: "Sherzod Abdullaev",
              work: "Oliy ta’lim, fan va innovatsiyalar vazirligi bosh mutaxassisi, kengash kotibi",
            },
            user12: {
              name: "Abdullayev Alisher",
              work: "Oliy ta'lim, fan va innovatsiyalar vazirligi huzuridagi Raqamli ta'lim texnologiyalarini rivojlantirish markazi direktori",
            },
            user13: {
              name: "Nilufar A'zamova",
              work: "Raqamli texnologiyalar va sun'iy intellektni rivojlantirish ilmiy-tadqiqot instituti direktorining ilm-fan bo‘yicha o‘rinbosari",
            },
            work_group: "Ishchi guruhlar",
            work_info: `Ishchi guruhlar Kodeksning ayrim qoidalari va vazifalarini amalga oshirish uchun Komissiya a'zolarining umumiy qarori va yoki AI etikasi bo'yicha vakillar yig'ilishining qarori bilan tuziladi. Ishchi guruhlar tarkibi tadbirkorlik, fan, davlat hokimiyati organlari va boshqa manfaatdor shaxslar (kuzatuvchilar) vakillaridan tuzilishi mumkin.`,
            work1: {
              title: "Sun'iy intellekt etikasi ishchi guruhi",
              info: "Mamlakatda shakllangan madaniyat va qadriyatlarni hisobga olgan holda sun'iy intellektning etika kodeksini ishlab chiqish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              team: "Vladimir Opredelenov, Ammar Younas, Igor Vixrov, Shaxzod Umirzakov, Zafar Yuldashev, Andrey Neznamov.",
              name: "Bobur Raximov",
            },
            work2: {
              title:
                "Sun'iy intellekt sohasida ma'rifiy va ta'lim loyihalarini rivojlantirish bo'yicha ishchi guruh",
              info: "O‘zbekistonda sun’iy intellektni o‘qitish jarayoni samaradorligini oshirishga hissa qo‘shish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              team: "Sherzod Abdullaev, Nodirbek Abulov, Yusuf Avazov, Igor Vixrov, Ulug'bek Berdanov, Vladimir Oprelenov, Axmed Seffax (OAE)",
              name: "Doktor Danish Ather",
            },
            work3: {
              title:
                "Turizm, madaniyat va kreativ industriyalar bo‘yicha ishchi guruh",
              info: "Raqamli texnologiyalar va sun'iy intellekt texnologiyalaridan foydalangan holda turizm va madaniyat uchun yechimlarni taklif etish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              name: "Bobur Raximov",
              team: "Anna Ubaydullaeva, Jaxongir Mirmo'minov, Vladimir Operedinov, Amar Yunus",
            },
            work4: {
              title: "Tibbiyotda sun'iy intellekt bo'yicha ishchi guruhi",
              info: "Sun'iy intellekt texnologiyalaridan foydalangan holda tibbiyot va sog'liqni saqlash sohalari uchun echimlarni taklif eting",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              name: "Igor Vixrov",
              team: "Otabek Xujaev, Ammar Yunas",
            },
            documents: "Hujjatlar",
            document1: {
              name: "“Raqamli O‘zbekiston – 2030” strategiyasini tasdiqlash va uni samarali amalga oshirish chora-tadbirlari to‘g‘risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2020-yil 05-oktabrdagi PF-6079-son qarori",
            },
            document2: {
              name: "2022-2026-yillarda O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasini amalga oshirish bo‘yicha tashkiliy chora-tadbirlar to‘g‘risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2022-yil 6-iyuldagi PQ-307-son qarori.",
            },
            document3: {
              name: "Sun'iy intellekt texnologiyalarini jadal joriy etish uchun shart-sharoitlar yaratish chora-tadbirlari to'g'risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2021-yil 17-fevraldagi PQ-4996-son qarori",
            },
            document4: {
              name: "Oliy ta’lim, fan va innovatsiyalar vazirligi huzurida sun’iy intellekt texnologiyalari bo‘yicha Maslahat kengashi nizomi",
              info: "",
            },
          },
          news: {
            title:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul o‘quv kursi yo‘lga qo‘yildi",
            p1: "Oliy ta’lim, fan va innovatsiyalar vazirligi, Maktabgacha va maktab ta’limi vazirligi hamda Toshkent shahridagi Amity universiteti hamkorligida Toshkent shahridagi umumta’lim maktablarining informatika fani o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar interneti (Internet of Things - IoT) bo‘yicha bepul o‘quv kursiga start berildi.",
            p2: "Ishtirok etish istagini bildirgan nomzodlar orasida onlayn so‘rovnoma o‘tkazilib, 24 nafar informatika o‘qituvchisi saralab olindi. Ular oʻquv kursidan olgan o‘z tajribalari bilan keyingi bosqichda qolgan informatika fani oʻqituvchilari bilan boʻlishadilar. Mazkur kurs davomiyligi 3 oy boʻlib, Python dasturlash tili, Sun’iy intellekt asoslari va Buyumlar interneti (IoT) modullarini o’z ichiga olgan. ",
            p3: "Kurs asosan amaliy mashgʻulotlar va qurilmalarni boshqarishga yoʻnaltirilgan dasturlarni yaratishdan iborat boʻlib, oʻqituvchilarga xalqaro maktablardagi oʻqitish uslubiyotini ulashishga qaratilgan. Mashg‘ulotlar Toshkent shahridagi Amiti universitetining malakali xorijiy professorlari tomonidan olib boriladi.",
          },
          news2: {
            title:
              "Sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi platforma ishga tushiriladi",
            p1: "Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov Toshkent Pediatriya Tibbiyot Instituti huzuridagi Ilg’or texnologiyalar va strategik tashabbuslar markazi faoliyati va markazning sun'iy intellekt bo'yicha amalga oshirayotgan loyihalari bilan yaqindan tanishdi.",
            p2: "Xususan, markaz tomonidan Toshkent pediatriya tibbiyot instituti faoliyatini raqamlashtirish doirasida ishlab chiqilgan tizimlar, Toshkent shahrida institut talaba yoshlari uchun yaratilgan wi-fi hududlar va ularning monitoring tizimi, sog'liqni saqlash sohasiga sun'iy intellekt texnologiyalarini joriy qilishga qaratilgan loyihalar bilan tanishildi.",
            p3: `Shu bilan birga, 2022-yilda o'tkazilgan UrbanTech xakatonida qatnashgan "Homila AI" loyihasi taqdimoti o'tkazilib, loyihani takomillashtirish hamda ommalashtirish bo'yicha tavsiyalar berildi.`,
            p4: "Tashrif davomida markaz va vazirlik huzuridagi sun'iy intellekt bo'yicha maslahat kengashi o'rtasida hamkorlikni kuchaytirish, xususan sog'liqni saqlash sohasiga sun'iy intellekt texnologiyalarini keng joriy etish, soha xodimlariga sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi  platformani hamkorlikda ishga tushirish yuzasidan kelishib olindi.",
          },
          news3: {
            title:
              "Sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv o'tkazildi",
            p1: "Joriy yilning 16-fevral kuni Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov va Toshkentdagi AMITY universiteti direktori B.Abdullayev o'rtasida sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv bo'lib o'tdi.",
            p2: "Unda Toshkent shahridagi 24 nafar informatika o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar Interneti bo‘yicha bepul kursni tashkil etish masalasi muhokama qilindi.",
            p3: "Shuningdek AMITY universitetida IT-ta’limni tashkil etish va ta’lim jarayonini raqamlashtirish bo‘yicha universitetda olib borilayotgan ishlar, xususan, universitetning LMS tizimi, imtixonlarni masofadan tashkil etish, HEMIS tizimi imkoniyatlarini universitetda yanada kengroq foydalanish imkoniyatlari muhokama qilindi.",
          },
          news4: {
            title:
              "Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat kengashining ilk yig'ilishi o'z ishini boshladi",
            p1: "2022 yil 18 oktyabr` kuni «InnoWeek.uz-2022» xalqaro innovatsion g'oyalar haftaligi doirasida O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat Kengashining birinchi tarkibini shakllantirish bo'yicha rasmiy marosim va uning yig'ilishi bo'lib o'tdi. Tadbirning birinchi kuni sun'iy intellekt texnologiyalarini rivojlantirishning ayrim yo'nalishlari bo'yicha ma'ruzalar tinglandi, etakchi soha mutaxassislari bilan tanishtirildi va Kengash tarkibiga a'zo vakillar qabul qilindi.",
            p2: "Yig'ilishni Kengash faxriy raisi – Innovatsion rivojlanish vaziri Ibroxim Abduraxmonov ochib berdi. Tadbirda ishtirok etish uchun Birlashgan Arab Amirliklari, eron, Xitoy va Hindistondan xalqaro hamkorlar, shuningdek, AQSh, Evropa Ittifoqi mamlakatlari, Rossiya va Tojikistondan ekspertlar taklif etilgan. Birinchi ish kuni yakunida Maslahat kengashi a'zolari unga a'zo bo'lish to'g'risidagi hujjatlarni imzoladilar.",
            p3: "Majlisning ikkinchi kuni, ya'ni 19 oktyabrda O'zbekiston Respublikasida sun'iy intellektni rivojlantirish bo'yicha 2022–2024 yillarga mo'ljallangan aniq vazifalar, tashabbuslar hamda ilmiy-amaliy, innovatsion va ta'limga oid loyihalar bo'yicha Kengashning dasturi ko'rib chiqiladi. Kengash tarkibi va ish dasturi O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi veb-saytida e'lon qilinadi.",
            p4: "Innovatsion rivojlanish vazirligi huzurida sun'iy intellekt bo'yicha maslahat kengashi joriy yilning avgust oyida tashkil etilgan bo'lib, kengash tuzilishidan asosiy maqsad sun'iy intellekt bo'yicha ekspertlar hamjamiyatini shakllantirish va ushbu soha haqida jamoatchilik tasavvurini rivojlantirish uchun keng sharoitlar yaratishdir. Kengashning asosiy vazifalariga O'zbekiston Respublikasida sun'iy intellekt bilan bog'liq barcha faoliyat yo'nalishlarini qo'llab-quvvatlash, individual loyihalar ishlab chiqish, istiqbolli tashabbuslarni yo'lga qo'yish hamda sun'iy intellektdan ongli va inson qadriyatlariga mos tarzda foydalanish kiradi.",
          },
          news5: {
            title:
              "Sun'iy intellekt bo'yicha maslahat kengashining faoliyat yo'nalishlari belgilandi",
            p1: "Innovatsion rivojlanish vazirligi yig'ilishining ikkinchi kunida «InnoWeek-2022» doirasida Kengashning 2022–2024-yillarga mo'ljallangan ish dasturi loyihasi ko'rib chiqildi.",
            p2: `Kengashning bir qator a'zolari ma'ruzalari bilan chiqib, taklif-mulohazalarini bildirishdi. Natijada Kengash tomonidan asosiy faoliyat yo'nalishlari belgilab olindi va ma'qullandi. Mazkur yo'nalishlar bo'yicha 8 ta ishchi guruhi tasdiqlandi. Aniq loyihalarning dastlabki ro'yxati tuzilib, «Yo'l xaritalari» ishlab chiqish va keyingi yig'ilishda tasdiqlash to'g'risida qaror qabul qilindi.`,
            p3: `Sun'iy intellekt bo'yicha maslahat kengashi raisi Bobur Raximov shunday ta'kidlaydi: «Sun'iy intellekt bo'yicha Kengashning ikki kunlik faoliyati natijasida xalqaro tendentsiyalar, ekspert hisobotlari hamda Kengashning 2022–2024-yillarga mo'ljallangan rejasi va loyihalarini qizg'in muhokama qilish asosida biz shunday xulosaga keldikki, sun'iy intellekt texnologiyalarini sinovdan o'tkazish va joriy etishning aniq natijalari davlat boshqaruvi va bank xizmatlari, huquq, tibbiyot va, albatta, sanoat va xavfsizlik, turizm va madaniyat sohalarida yaqqol namoyon bo'lishi  bilan bir qatorda, ijodkorlik bilan bog'liq  sohalarni ham rivojlantirishga hissa qo'shishi kerak.  Ijodkorlik hamda raqamli texnologiyalar birlashishi, ular kesishgan nuqta  innovatsion echimlar uchun ulkan maydon bo'dib xizmat qiladi. Bu kelgusi yillarda mamlakatimizda  sanoat rivojiga va ijodkorlik  iqtisodiyoti shakllanishiga katta hissa qo'shadi».`,
            p4: "Kengash tarkibiga 50 kishi, jumladan, 7 nafar xalqaro ekspert (Hindiston, eron, Xitoy, BAA, Rossiya, Janubiy Koreya), O'zbekiston sun'iy intellekt al`yansi, shuningdek, sun'iy intellekt bo'yicha istiqbolli startaplar, jamoat arboblari va ommaviy axborot vositalari vakillari kiritilgan.",
          },
          news6: {
            title:
              "Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat kengashi yig'ilishi doirasida Oliy ta'lim muassasalari bilan hamkorlik o'rnatildi.",
            p1: `Sun'iy intellekt bo'yicha maslahat kengashining birinchi yig'ilishida Kengash raisi B.Raximov va AMITI universiteti direktor o'rinbosari o'rtasida hamkorlik memorandumi imzolandi.`,
            p2: `Hujjatga ko'ra nazariy va amaliy bilimlarni uyg'unlashtirish, tomonlar o'rtasida o'zaro hamkorlikni yo'lga qo'yish orqali IT sohasi uchun zarur bo'lgan etuk kadrlarni tayyorlash hamda umumiy o'rta ta'lim maktablarida informatika yo'nalishi bo'yicha 25 nafar o'qituvchi-kadrlar uchun qo'shma malaka oshirish kurslarini tashkil etishga kelishildi.`,
            p3: `Hamkorlik doirasida, avvaliga, bir oy mobaynida umumiy o'rta ta'lim maktablarida faoliyat yurituvchi fidoyi kardlarni tanlab olish rejalashtirilgan. Shuningdek, olti oylik maxsus kurs davomida ularga sun'iy intellekt sohasida malaka oshirish imkoniyati yaratiladi.`,
          },
          test: "Sayt test rejimida ishlamoqda (mumkin xatolar uchun uzr so'raymiz)",
          footer: {
            about: {
              work: "Kengash ishtirokchilari",
              group: "Ishchi guruhlar",
              partner: "Ishtirokchilar",
              documents: "Hujjatlar",
            },
            project: {
              catalog: "Filtrlar bilan loyiha katalogi",
              list: "Tadbirlar ro'yxati",
            },
            blog: {
              news: "Yangiliklar",
              state: "Maqolalar",
              anons: "Tadbirlar anonlari",
            },
          },
          newsTitle: "yangilik",
          feedback: {
            title: "Murojaat yuborish",
            name: "Ism sharifi",
            phone: "Telefon raqami",
            email: "Elektron pochata",
            send: "Yuborish",
            text: "Murojaat matni",
            info: `O'zingizni qiziqtirgan savolingizni yozing, tez orada javob beramiz`,
          },
          development: "Sahifa ishlab chiqish jarayonida",
        },
      },
      EN: {
        translation: {
          ministr:
            "MINISTRY OF HIGHER EDUCATION, SCIENCE AND INNOVATIONS OF THE REPUBLIC OF UZBEKISTAN",
          nav: {
            about: "About",
            projects: "Projects",
            edu: "Education",
            blog: "Blog",
            contact: "Contact",
            about2: "Council Members",
            home: "Home",
            news: "News",
          },
          home: {
            title:
              "Advisory Council on Artificial Intelligence under the MHESI RUz",
            title2:
              "Uzbekistan brought together IT specialists from the Turkic world",
            info: "The Forum of Digitalization Specialists should serve as an important platform for the exchange of knowledge and experience in the field of 'smart cities' and provide recommendations to the relevant government agencies of the ATC countries",
            more: "More",
            mission: "Mission",
            mission_title:
              "The Advisory Council was formed with the aim of creating conditions for the formation of a significant community of specialists (professional community) who, based on the foundation laid by the documents and programs adopted in the Country, will be able to offer innovative ideas for scientific research, practical start-ups and develop other initiatives that will subsequently ensure the transition from experiments to real implementations technology and processes based on artificial intelligence into the economy of Uzbekistan, thereby improving the quality of life of citizens of the Republic of Uzbekistan.",
            work_title: "AREAS OF WORK",
            work1: "Artificial intelligence in medicine",
            work2: "The ethics of artificial intelligence",
            work3: "Education",
            work4: "Tourism and Creative Industries",
            work1_info:
              "Offer solutions for the field of medicine and healthcare using artificial intelligence technologies",
            work2_info:
              "Development of an ethical code for artificial intelligence, taking into account the culture and values that have formed in the country",
            work3_info:
              "Contribute to improving the efficiency of the process of teaching artificial intelligence in Uzbekistan",
            work4_info:
              "Offer solutions for tourism and culture using digital technologies and artificial intelligence technologies",
            download: "Download PDF",
            blog: "Blog",
            blog1:
              "A free training course for teachers of secondary schools has been launched",
            blog2:
              "The 6th Global Entrepreneurship Week GEW-2022 (Global Entrepreneurship Week) has been launched at TEAM University in Tashkent.",
            blog3: `On the concept of "artificial intelligence".`,
            partners: "Members",
            about_info:
              "- Technology is rapidly entering our lives, and, in my opinion, no factor can interfere with this process. But due to the development of technology, digitalization and globalization, the problems associated with the loss of jobs may await humanity in the future. Therefore, one of our main goals should be the creation of new jobs that include creative tasks that only human intelligence is capable of, which are considered impossible to perform by technical means, and the training of personnel capable of performing these tasks. Artificial intelligence technologies are developing and improving day by day. However, there are no strictly defined ethical rules for these technologies. Technology can interfere with the lives of every person in our society, if not today, then tomorrow. You and I need to work on defining the boundaries of this interference. Based on the experience of many developed countries that are leaders in this field, we can create rules of ethics. But what about the issues of culture and national values? As we innovate, as we introduce new technologies, we need to study their impact on the consciousness of our society, prevent it and implement policies in connection with it.",
            about_info2:
              "Despite the fact that we started with seemingly simple tasks, we have a difficult task ahead of us. To overcome this challenge, we need to define our vision and priorities for the next 50 years.",
            about_name: "Ibrahim Abdurakhmanov",
            about_work:
              "Minister of Higher Education, Science and Innovation of the Republic of Uzbekistan",
            email: "Subscribe to news",
            email_info:
              "Receive news and tips directly by entering your email address",
            email_name: "Электронная почта",
            email_button: "Subscribe",
            email_check: "Accept, receiving email",
            footer:
              "Copying, distribution and other forms of use of materials published on the portal can be carried out only with the written consent of the editors.",
            socials: "Social networks",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Usefull links",
            made: "2022 © Producer: Center for the Development of Digital Educational Technologies",

            news1: "School Teachers Technical Skill Development Programme",
            news1_info:
              "Basics of Artificial Intelligence and Internet of Things (IoT) for IT teachers of public schools in Tashkent in cooperation with the Ministry of Higher Education, Science and Innovation, the Ministry of Preschool and School Education and Amity University in Tashkent a free training course was started.",
            news2:
              "An artificial intelligence education platform will be launched",
            news2_info:
              "B. Rakhimov, ICT adviser to the Minister of Higher Education, Science and Innovation, got acquainted with the activities of the Center for Advanced Technologies and Strategic Initiatives under the Tashkent Pediatric Medical Institute and the projects implemented by the center on artificial intelligence.",
            news3:
              "A meeting was held on cooperation in the issues of artificial intelligence and digitization of the educational process",
            news3_info:
              "On February 16 of this year, B. Rakhimov, ICT advisor to the Minister of Higher Education, Science and Innovation, and B. Abdullayev, director of AMITY University in Tashkent, held a meeting on cooperation in the field of artificial intelligence and digitization of the educational process. the meeting took place.",
          },
          about: {
            user1: {
              name: "Bobur Raximov",
              work: "Advisor on ICT issues to the Minister of Higher Education, Science and Innovation of the Republic of Uzbekistan, Chairman of the Advisory Council",
            },
            user2: {
              name: "Zafar Yuldashev",
              work: "Deputy Head of the Department of ICT Implementation and Digitalization, Ministry of Higher Education, Science and Innovation, Deputy Chairman",
            },
            user3: {
              name: "Bakhtiyor Makhkamov",
              work: "Doctor of Economics, prof. Rector of the University of Tashkent University of Information Technologies named after Muhammad al-Khwarizm",
            },
            user4: {
              name: "Andrey Neznamov",
              work: "Head of the Commission for the Implementation of the Code of Ethics for Artificial Intelligence in Russia. Managing Director - Head of the AI Regulation Center, Sberbank",
            },
            user5: {
              name: "Igor Vikhrov",
              work: "Head of E-Health Department, Innovation center, Tashkent Pediatric Medical Institute",
            },
            user6: {
              name: "Vladimir Opredelenov",
              work: "CDO, Art and Cultural Heritage Technical Expert, .ART domains, Russia",
            },
            user7: {
              name: "Farkhod Kholikov",
              work: `Head of the Department "Artificial Intelligence", advisor-consultant of JSC "Uzbektelecom"`,
            },
            user8: {
              name: "Shakhzod Umirzakov",
              work: "Founder and CEO of TASS VISION",
            },
            user9: {
              name: "Danish Ather",
              work: "Associate Professor, Amity University Tashkent, IEEE Senior Member, India",
            },
            user10: {
              name: "Azizjon Azimi",
              work: "Chairman of the National Council of Tajikistan on Artificial Intelligence, founder of “zypl.ai” LLC",
            },
            user11: {
              name: "Sherzod Abdullaev",
              work: "Chief Specialist at the Ministry of Higher Education, Scientific and Innovation, secretary of the Council",
            },
            user12: {
              name: "Abdullaev Alisher",
              work: "Director of the Center for The Development of Digital Education Technologies under The Ministry of Higher Education, Science and Innovations of the Republic of Uzbekistan",
            },
            user13: {
              name: "Nilufar A'zamova",
              work: "Deputy Director of the Scientific Research Institute for the Development of Digital Technologies and Artificial Intelligence",
            },
            work_group: "Working groups",
            work_info:
              "Working groups are created by a common decision of the members of the Commission and   or a decision of the Meeting of Commissioners for AI Ethics to implement certain provisions and tasks of the Code. The composition of the working groups can be formed from representatives of business, science, public authorities and other interested parties (observers).",
            work1: {
              title: "AI Ethics Working Group",
              info: "Develop a code of ethics for artificial intelligence, taking into account the culture and values formed in the country",
              group: "Composition of the working group:",
              label: "Team leader:",
              name: "Bobur Raximov",
              team: "Vladimir Opredelenov, Ammar Younas, Igor Vixrov, Shaxzod Umirzakov, Zafar Yuldashev, Andrey Neznamov.",
            },
            work2: {
              title:
                "Working group on the development of education and training projects in the field of AI",
              info: "To contribute to the improvement of the effectiveness of the artificial intelligence training process in Uzbekistan",
              group: "Composition of the working group:",
              label: "Team leader:",
              name: "Doctor Danish Ather",
              team: "Sherzod Abdullaev, Nodirbek Abulov, Yusuf Avazov, Igor Vixrov, Ulug'bek Berdanov, Vladimir Oprelenov, Axmed Seffax (OAE)",
            },
            work3: {
              title:
                "Working Group on Tourism, Culture and Creative Industries",
              info: "Offer solutions for tourism and culture using digital technologies and artificial intelligence technologies",
              group: "Composition of the working group:",
              label: "Team leader:",
              name: "Bobur Raximov",
              team: "Vladimir Opredelenov, Anna Ubaydullaeva, Jakhongir Mirmuminov, Ammar Younas",
            },
            work4: {
              title: "Working Group on Artificial Intelligence in Medicine",
              info: "Offer solutions for the field of medicine and healthcare using artificial intelligence technologies",
              group: "Composition of the working group:",
              label: "Team leader:",
              name: "Igor Vikhrov",
              team: "Otabek Khuzhaev, Ammar Younas",
            },
            documents: "Documents",
            document1: {
              name: `On the approval of the "Digital Uzbekistan - 2030" strategy and measures for its effective implementation`,
              info: "Resolution No. PF-6079 of the President of the Republic of Uzbekistan dated October 5, 2020",
            },
            document2: {
              name: "On organizational measures to implement the innovative development strategy of the Republic of Uzbekistan in 2022-2026",
              info: "Decision PQ-307 of the President of the Republic of Uzbekistan dated July 6, 2022.",
            },
            document3: {
              name: "On measures to create conditions for rapid introduction of artificial intelligence technologies",
              info: "Decision PQ-4996 of the President of the Republic of Uzbekistan dated February 17, 2021",
            },
            document4: {
              name: "Regulation about the Advisory Council on Artificial Intelligence under the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan",
              info: "",
            },
          },
          news: {
            title: "School Teachers Technical Skill Development Programme",
            p1: "A free training course on the basics of Artificial Intelligence and the Internet of Things (IoT) has been launched for teachers of informatics of public schools in Tashkent. The course is organized in collaboration of the Ministry of Higher Education, Science and Innovation, the Ministry of Preschool and School Education of the Republic of Uzbekistan and Amity University in Tashkent.",
            p2: "An online survey was conducted among the candidates who expressed their desire to participate, and 24 informatics teachers were selected. They will share their experiences from the training course with the rest of the computer science teachers at the next level. The duration of this course is 3 months and includes Python programming language, Basics of Artificial Intelligence and Internet of Things (IoT) modules.",
            p3: "The training is aimed at combining theoretical and practical knowledge, sharing the teaching methodology of international schools with Informatics teachers. The course is conducted by qualified international Faculty of Amity University in Tashkent.",
          },
          news2: {
            title:
              "It is expected to launch the platform for the provision of basic knowledge of artificial intelligence",
            p1: "Advisor to the Minister of Higher Education, Science and Innovation on ICT Bobur Rakhimov got acquainted with the activities of the Center for Advanced Technologies and Strategic Initiatives at the Tashkent Pediatric Medical Institute and with projects implemented by the Center for Artificial Intelligence.",
            p2: "Systems developed by the center under the digitalization of the Tashkent Pediatric Medical Institute, Wi-Fi zones created for students of the Institute and their monitoring systems, as well as projects aimed at introducing artificial intelligence technologies in the health sector.",
            p3: "The project “Homila AI” was also presented, which took part in the Hakaton Urbantech, in 2022, and at the end of the presentation, recommendations were given to improve and popularize the project.",
            p4: "During the visit, the issues of strengthening cooperation between the center and the advisory council of artificial intelligence under the Ministry, in particular, the wide implementation of artificial intelligence technologies in the healthcare sphere, an agreement on the joint launch of the platform for the provision of basic knowledge of artificial intelligence employees of the industry were discussed.",
          },
          news3: {
            title:
              "A meeting was held on cooperation in the field of artificial intelligence and digitalization of educational processes",
            p1: "On February 16 this year, a meeting was held between Advisor to the Minister of Higher Education, Science and Innovation on ICT B. Rakhimov and Director of AMITY University in Tashkent B. Abdullayev on cooperation in the field of artificial intelligence and digitalization of educational processes.",
            p2: "During the meeting, the issues of organizing a free course on the basics of artificial intelligence and the Internet of things for 24 computer science teachers in Tashkent were discussed.",
            p3: "Information was also presented about the work on the organization of IT education and digitalization of the educational process, in particular, the possibility of wider use of the University of LMS, and the organization of remote passing exams. It was proposed to expand the possibilities of using the Hemis system at the university.",
          },
          news4: {
            title:
              "The first meeting of the advisory council on artificial intelligence under the Ministry of Innovative Development was held",
            p1: "On October 18, 2022, as part of the International Week of Innovative Ideas, Innoweek.uz-2022, an official ceremony of forming the first composition of the advisory council for artificial intelligence under the Ministry of Innovative Development of the Republic of Uzbekistan and its programmatic meeting was held. The first day is dedicated to acquaintance and adoption of leading experts and industry specialists to the Council.",
            p2: "The meeting was opened by the Honorary Chairman of the Council - Minister of Innovation Development Ibro -Chief Abdurakhmonov. International partners from the United Arab Emirates, Iran, China and India, as well as experts from the USA, EU countries, Russia and Tajikistan are invited to participate. Council members received certificates confirming their participation in his work.",
            p3: "The result of the second day of the meeting should be the Council work program for 2022-2024, with a list of specific areas of work, initiatives, scientific, practical, innovative, educational and business development projects in the Republic of Uzbekistan. The composition of the Council and the work program will be published on the website of the Ministry of Innovative Development of the Republic of Uzbekistan.",
            p4: "The advice on artificial intelligence (AI) was established in August of this year under the Ministry of Innovative Development of Uzbekistan in order to create conditions for the formation of a community of experts and the development of public dialogue on this topic. The tasks of the Council include supporting areas of activity related to AI in the RUZ, the development of individual projects, the study of promising initiatives and the establishment of international contacts, to integrate into the world community that works on the conscious and ethical use of artificial intelligence. An integrated approach to ethics, the use of human potential, the flexibility of adaptation of technology and the development of the general IT infrastructure of the country is designed to influence the general economic and social development of the Republic of Uzbekistan, and, as a result, to increase the rating of Uzbekistan in the world.",
          },
          news5: {
            title:
              "Determined areas of the Council of Consulting Council for Artificial Intelligence",
            p1: "On the second day of the meeting of the advisory council on artificial intelligence under the Ministry of Innovation Development as part of the Innoweek-2022, a draft program of the Council for 2022-2024 was considered.",
            p2: `Several members of the Council made their proposals and made reports on this topic, a lively discussion took place. As a result, the main directions of the work were agreed by the Soviets that approved unanimously, 8 working groups in these areas were also approved. A preliminary list of specific projects has been adopted, a decision was made to develop "road maps" and approving them at the next meeting.`,
            p3: `"As a result of two days of the work of the AI, relying on international trends, expert reports and a living discussion of the activities and draft councils for 2022-2024, we came to the conclusion that one of the visible and tangible results of the testing and implementation of artificial intelligence technologies for a number with obvious tasks for state and banking services, law, medicine and, of course, industry and security, should be the scope of tourism and culture, but one of the main directions that were practically not talked about before, there will be a search for the maximum development of creative in Uzbekistan industries. We see a great potential in this area and a huge field for innovative solutions at the junction of creativity and digital technologies, which in the coming years should make a significant contribution to the development of the traditional industries and the sector of the creative economy in our country., ”said the chairman of the advisory council in artificial intelligence Bobur Rakhimov.`,
            p4: "The council included 50 people, including 7 international experts (India, Iran, China, the UAE, Russia, South Korea), the Alliance of the II of Uzbekistan, as well as promising startups using AI, public figures and media representatives.",
          },
          news6: {
            title:
              "Cooperation with higher educational institutions has been established as part of a meeting of the advisory council for artificial intelligence under the Ministry of Innovative Development.",
            p1: `At the first meeting of the advisory council on artificial intelligence, which took place on October 18 on the fields of Innoweek.uz-2022 signed a memorandum of cooperation between the chairman of the Council of B. Rakhimov and Deputy Director of the University of Ami.`,
            p2: `The goal of the memorandum is to unite theoretical and practical knowledge, training for an IT sector by establishing mutual cooperation between the parties. It is agreed to organize joint advanced training courses for 25 teachers in the field of computer science in general schools.`,
            p3: `As part of cooperation, it is planned to select the best personnel of workers in secondary schools for training for 6 months within the framework of a special course.`,
          },
          test: "The site is working in test mode (we apologize for possible errors)",
          footer: {
            about: {
              work: "Council members",
              group: "Working groups",
              partner: "Members",
              documents: "Documentation",
            },
            project: {
              catalog: "Project catalog with filters",
              list: "List of events",
            },
            blog: {
              news: "News",
              state: "Articles",
              anons: "Event announcements",
            },
          },
          newsTitle: "news",
          feedback: {
            title: "Send a request",
            name: "Full name",
            phone: "Phone number",
            email: "Email",
            send: "Send",
            text: "Request text",
            info: `Write your question, we will answer soon`,
          },
          development: "The page is under development",
        },
      },
      RU: {
        translation: {
          ministr:
            "Министерство высшего образования, науки и инноваций Республики Узбекистан",
          nav: {
            about: "О совете",
            projects: "Проекты",
            edu: "Образование",
            blog: "Блог",
            contact: "Контакты",
            about2: "Участники совета",
            home: "Главная",
            news: "Новости",
          },
          home: {
            title:
              "Консультативный совет по искусственному интеллекту при МВОНИ РУз",
            title2: "Узбекистан собрал IT-специалистов тюркского мира",
            info: "Форум специалистов в сфере цифровизации должен послужить важной платформой для обмена знаниями и опытом в области «умных городов» и предоставить рекомендации для соответствующих государственных учреждений стран ОТГ",
            more: "Подробнее",
            mission: "Миссия",
            mission_title:
              "Консультативный совет образован с целью создания условий для формирования значимого сообщества специалистов (профессионального комьюнити), которые смогут, основываясь на фундаменте, заложенном основными принятыми в стране документами и программами, предложить различные прорывные идеи научных исследований, практических стартапов и развить другие инициативы, которые впоследствии обеспечат переход от экспериментов к реальным серьезным внедрениям в экономику Узбекистана, тем самым повышая благосостояние каждого жителя благодаря инструментам и возможностям, которые дает искусственный интеллект.",
            work_title: "Направленные работы",
            work1: "Искусственный интеллект в медицине",
            work2: "Этика искусственного интеллекта",
            work3: "Образования",
            work4: "Туризм и Креативные индустрии",
            work1_info:
              "Предложить решений для сферы медицины и здравоохранение с использованием технологий искусственного интеллекта",
            work2_info:
              "Разработка этического кодекса искусственного интеллекта с учетом культуры и ценностей, сформировавшихся в стране",
            work3_info:
              "Способствовать повышению эффективности процесса обучения искусственному интеллекту в Узбекистане",
            work4_info:
              "Предложить решений для сферы туризма и культуры с использованием цифровых технологий и технологий искусственного интеллекта",
            download: "Скачать Положение PDF",
            blog: "Блог",
            blog1:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            blog2: "О понятии «искусственный интеллект».",
            blog3: "О понятии «искусственный интеллект».",
            partners: "Партнёры",
            about_info:
              "— Технологии стремительно входят в нашу жизнь, и, на мой взгляд, никакой фактор не может помешать этому процессу. Но в связи с развитием технологий, цифровизацией и глобализацией, проблемы, связанные с потерей рабочих мест, могут ждать человечество в будущем. Поэтому одной из наших основных целей должно быть создание новых рабочих мест, включающих в себя творческие задачи, на которые способен только человеческий интеллект, которые считаются невозможными для выполнения техническими средствами, и подготовка кадров, способных выполнять эти задачи. Технологии искусственного интеллекта развиваются и совершенствуются день ото дня. Однако для этих технологий нет строго определенных этических правил. Технологии могут вмешиваться в жизнь каждого человека в нашем обществе, если не сегодня, то завтра. Нам с вами нужно работать над определением границ этого вмешательства. Основываясь на опыте многих развитых стран, являющихся лидерами в этой области, мы можем создать правила этики. А как же вопросы культуры и национальных ценностей? По мере того, как мы создаем инновации, по мере того, как внедряем новые технологии, нам необходимо изучать их влияние на сознание нашего общества, предотвращать его и проводить политику в связи с этим.",
            about_info2:
              "Несмотря на то, что мы начали с казалось бы, простых задач, перед нами стоит непростая задача. Чтобы преодолеть эту проблему, нам необходимо определить наше видение и приоритеты на следующие 50 лет.",
            about_name: "Иброxим Абдураxмонов",
            about_work:
              "Министр высшего образования, науки и инноваций Республики Узбекистан",
            email: "Подписаться на новости",
            email_info:
              "Получайте новости и советы напрямую, введя свой адрес электронной почты",
            email_name: "Электронная почта",
            email_button: "Подписаться",
            email_check: "Согласие на получение рассылки",
            footer:
              "Копирование, распространение и иные формы использования материалов, опубликованных на портале, могут осуществляться только с письменного согласия редакции.",
            socials: "Мы в социальных сетях",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Полезные ссылки",
            made: "2022 © Разработчик: Центр развития цифровых образовательных технологий",
            news1:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            news1_info:
              "Основы искусственного интеллекта и интернета вещей (IoT) для учителей информационных технологий общеобразовательных школ г.Ташкента в сотрудничестве с Министерством высшего образования, науки и инноваций, Министерством дошкольного и школьного образования и Университетом Амити в Ташкенте стартовал бесплатный курс обучения .",
            news2:
              "Состоялась встреча по сотрудничеству в вопросах искусственного интеллекта и цифровизации образовательного процесса",
            news2_info:
              "Советник министра высшего образования, науки и инноваций по ИКТ Б.Рахимов ознакомился с деятельностью Центра передовых технологий и стратегических инициатив при Ташкентском педиатрическом медицинском институте и проектами, реализуемыми центром по искусственному интеллекту.",
            news3:
              "Состоялась встреча по сотрудничеству в вопросах искусственного интеллекта и цифровизации образовательного процесса",
            news3_info:
              "16 февраля т.г. советник министра высшего образования, науки и инноваций по ИКТ Б.Рахимов и директор Университета AMITY в Ташкенте Б.Абдуллаев провели встречу по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебный процесс.состоялась встреча.",
          },
          about: {
            user1: {
              name: "Бoбур Рахимов",
              work: "Советник Министра высшего образования, науки и инноваций Республики Узбекистан, председатель Консультативного совета",
            },
            user2: {
              name: "Зафар Юлдашев",
              work: "Заместитель начальника управлении, Министерства высшего образования, науки и инноваций, заместитель председателья",
            },
            user3: {
              name: "Бахтиёр Махкамов",
              work: "Ректор университета  Ташкентского университета информационных технологий имени Мухаммада ал-Хоразми, доктор экономических наук, профессор",
            },
            user4: {
              name: "Андрей Незнамов",
              work: "Глава комиссии по внедрению Кодекса этики искусственного интеллекта России. Управляющий директор - начальник Центра регулирования AI, Сбербанк",
            },
            user5: {
              name: "Игор Вихров",
              work: "Руководитель отдела  E-Health Инновационного центра Ташкентского педиатрического медицинского института",
            },
            user6: {
              name: "Владимир Определенов",
              work: "CDO, Технический эксперт по искусству и культурному наследию, домены .ART, Россия",
            },
            user7: {
              name: "Фарход Холиков",
              work: `Начальник департамента «Искусственный интеллект», советник-консультант АК «Узбектелеком»`,
            },
            user8: {
              name: "Шахзод Умирзаков",
              work: "Основатель и главный директор компании  TASS VISION",
            },
            user9: {
              name: "Даниш Атер",
              work: "Доцент Университета Амити в Ташкенте, Старший член IEEE",
            },
            user10: {
              name: "Азизжон Азими",
              work: "Председатель совета Таджикистана по искусственному интеллекту, основатель ООО Zypl.ai",
            },
            user11: {
              name: "Шерзод Абдуллаев",
              work: "Главный специалист Министерства высшего образования, науки и инноваций, cекретарь совета",
            },
            user12: {
              name: "Абдуллаев Алишер",
              work: "Директор Центра развития цифровых образовательных технологий при Министерстве высшего образования, науки и инноваций Республики Узбекистан",
            },
            user13: {
              name: "Нилуфар Аъзамова",
              work: "Заместитель директора НИИ развития цифровых технологий и искусственного интеллекта",
            },
            work_group: "Рабочие группы",
            work_info:
              "Рабочие группы создаются по общему решению членов Комиссии и/или решению Собрания уполномоченных по этике ИИ для реализации отдельных положений и задач Кодекса. Состав рабочих групп может формироваться из представителей бизнеса, науки, органов государственной власти и иных заинтересованных сторон (наблюдателей).",
            work1: {
              title: "Рабочая группа по этике ИИ",
              info: "Разработать этический кодекс для искусственного интеллекта с учетом культуры и ценностей, сформировавшихся в стране",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Бoбур Рахимов",
              team: "Владимир Определенов, Ammar Younas, Игор Вихров, Шахзод Умирзаков, Зафар Юлдашев, Андрей Незнамов.",
            },
            work2: {
              title:
                "Рабочая группа по разработке образовательных и обучающих проектов в области ИИ",
              info: "Способствовать повышению эффективности процесса обучения искусственному интеллекту в Узбекистане",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Доктор Даниш Атер",
              team: "Шерзод Абдуллаев, Нодирбек Абулов, Юсуф Авазов, Игор Вихров, Улуғбек Берданов, Владимир Определенов, Ахмед Сеффах",
            },
            work3: {
              title:
                "Рабочая группа по туризму, культуре и креативной индустрии",
              info: "Предложить решения для туризма и культуры с использованием цифровых технологий и технологий искусственного интеллекта",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Бoбур Рахимов",
              team: "Владимир Определенов, Анна Убайдуллаева, Жахонгир Мирмуминов, Аммар Юнус",
            },
            work4: {
              title: "Рабочая группа по искусственному интеллекту в медицине",
              info: "Предложить решений для сферы медицины и здравоохранение с использованием технологий искусственного интеллекта",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Игорь Вихров",
              team: "Отабек Хужаев, Аммар Юнас",
            },
            documents: "Документы",
            document1: {
              name: "Об утверждении стратегии «Цифровой Узбекистан – 2030» и мерах по ее эффективной реализации",
              info: "Постановление Президента Республики Узбекистан от 5 октября 2020 года № ПФ-6079",
            },
            document2: {
              name: "Об организационных мерах по реализации Стратегии инновационного развития Республики Узбекистан на 2022-2026 годы",
              info: "Постановление Президента Республики Узбекистан PQ-307 от 6 июля 2022 года.",
            },
            document3: {
              name: "О мерах по созданию условий для быстрого внедрения технологий искусственного интеллекта",
              info: "Постановление Президента Республики Узбекистан PQ-4996 от 17 февраля 2021 года",
            },
            document4: {
              name: "Положение о консультативном совете по искусственному интеллекту при Министерстве высшего образования, науки и инноваций Республики Узбекистан",
              info: "",
            },
          },
          news: {
            title:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            p1: 'Стартовал бесплатный учебный курс по "Основам искусственного интеллекта" и "Интернета вещей" (Internet of Things - IoT) для учителей информатики среднеобразовательных школ при содействии Министерства высшего образования, науки и инноваций, Министерства дошкольного и школьного образования и университета Amity в Ташкенте. ',
            p2: "Среди заявителей на обучение проведен онлайн опрос, по итогам которого отобраны 24 учителя информатики. Они поделятся своим опытом на учебном курсе с учителями информатики на следующем этапе. Продолжительность курса составляет 3 месяца, что включает в себя модули язык программирования Phython, основы искусственного интеллекта и Интернет вещей (IoT).",
            p3: "Курс в основном заключается в создании программ для практических занятий и управления устройствами, при этом делясь методиками зарубежного опыта. Занятия будут проводиться квалифицированными зарубежными профессорами Университета Amity в Ташкенте.",
          },
          news2: {
            title:
              "Ожидается запуск платформы предоставления базовых знаний по искусственному интеллекту",
            p1: "Советник министра высшего образования, науки и инноваций по вопросам ИКТ Бобур Рахимов ознакомился с деятельностью Центра передовых технологий и стратегических инициатив при Ташкентском педиатрическом медицинском институте и с проектами, реализуемыми центром по искусственному интеллекту.",
            p2: "Представлены системы, разработанные центром в рамках цифровизации Ташкентского педиатрического медицинского института, зоны Wi-Fi, созданные для студентов института и системы их мониторинга, а также проекты, направленные на внедрение технологий искусственного интеллекта в секторе здравоохранения.",
            p3: "Также был представлен проект «Homila AI», принимавший участие в хакатоне UrbanTech, в 2022 году, и в конце презентации были даны рекомендации по улучшению и популяризации проекта.",
            p4: "В ходе визита обсуждены вопросы укрепления сотрудничества между центром и Консультативным советом по искусственному интеллекту при министерстве, в частности, широкое внедрение технологий искусственного интеллекта в сферу здравоохранения, достигнуты договоренности о совместном запуске платформы предоставления базовых знаний по искусственному интеллекту работникам отрасли.",
          },
          news3: {
            title:
              "Состоялась встреча по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебных процессов",
            p1: "16 февраля текущего года состоялась встреча между советником министра высшего образования, науки и инноваций по вопросам ИКТ Б.Рахимовым и директором Университета AMITY в Ташкенте Б.Абдуллаевым по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебных процессов.",
            p2: "В ходе встречи обсуждены вопросы организации бесплатного курса по основам искусственного интеллекта и Интернета вещей для 24 учителей информатики в Ташкенте.",
            p3: "Также была представлена информация о проведенной в университете AMITY работе по организации ИТ-образования и цифровизации образовательного процесса, в частности, возможности более широкого использования системы LMS университета, организации дистанционной сдачи экзаменов. Было предложено расширить возможности применения системы HEMIS в университете.",
          },
          news4: {
            title:
              "Состоялось первое заседание Консультативного совета по искусственному интеллекту при Министерстве инновационного развития",
            p1: "18 октября 2022 года в рамках Международной недели инновационных идей «InnoWeek.Uz-2022» состоялась официальная церемония формирования первого состава Консультативного совета по искусственному интеллекту при Министерстве инновационного развития Республики Узбекистан и его программное заседание. Первый день  посвящен знакомству и принятию в состав Совета ведущих экспертов и специалистов отрасли.",
            p2: "Заседание открыл почётный председатель Совета - министр инновационного развития Иброхим Абдурахмонов. Приглашены к участию международные партнеры из Объединенных Арабских Эмиратов, Ирана, Китая и Индии, а также эксперты из США, стран ЕС, России и Таджикистана. Члены совета получили сертификаты, подтверждающие их участие в его работе.",
            p3: "Итогом второго дня заседания должна стать Программа работы Совета на 2022-2024, с перечнем конкретных направлений работы, инициатив, научно-практических, инновационных, образовательных и бизнес проектов по развитии искусственного интеллекта в Республике Узбекистан. Состав Совета и Программа работы будут опубликованы на сайте Министерства инновационного развития Республики Узбекистан.",
            p4: "Консультативный совет по искусственному интеллекту (Совета по ИИ) был учрежден в августе текущего года при Министерстве инновационного развития Узбекистана с целью создания условий для формирования сообщества экспертов и развития общественного диалога по этой теме. В задачи Совета входит поддержка направлений деятельности, связанных с ИИ в РУз, развитие отдельных проектов, проработка перспективных инициатив и установление международных контактов, для интеграции в мировое сообщество, которое работает над осознанным и этичным использованием искусственного интеллекта. Комплексный подход к вопросам этики, использования человеческого потенциала, гибкости адаптации технологий и развития общей ИТ-инфраструктуры страны призван повлиять на общее экономическое и социальное развитие Республики Узбекистан, и как следствие — на повышение рейтинга Узбекистана в мире.",
          },
          news5: {
            title:
              "Определены направления деятельности Консультативного совета по искусственному интеллекту",
            p1: "Во второй день заседания Консультативного совета по искусственному интеллекту при Министерстве инновационного развития в рамках «InnoWeek-2022» рассмотрен проект программы работы Совета на 2022-2024 годы.",
            p2: `Несколько членов Совета выступили со своими предложениями и сделали доклады на эту тему, состоялась оживленная дискуссия. В итоге были согласованы основные направления работы Советы, которые утвердили единогласно, также были утверждены 8 рабочих групп по этим направлениям. Принят предварительный список конкретных проектов, принято решение о разработке "Дорожных карт" и утверждения их на следующем заседании. `,
            p3: `В результате двух дней работы Совета по ИИ, опираясь на международные тенденции, доклады экспертов и живое обсуждение направлений деятельности и проектов Совета на 2022-2024 годы, мы пришли к выводу, что одним из видимых и ощутимых результатов апробации и внедрении технологий искусственного интеллекта на ряду с очевидными задачами по государственным и банковским сервисам, праву, медицине и, конечно промышленности и обеспечению безопасности, должна стать сфера туризма и культуры, но одним из главных направлений, о котором раньше практически не говорили, будет поиск возможностей для максимального развития в Узбекистане креативных индустрий.  Мы видим большой потенциал в этой сфере и огромное поле для инновационных решений на стыке креативности и цифровых технологий, что в ближайшие годы должно внести существенный вклад в развитие помимо традиционных отраслей и сектора креативной экономики в нашей стране.", — отметил председатель Консультативного совета по искусственному интеллекту Бобур Рахимов.`,
            p4: "В состав Совета вошло 50 человек в том числе 7 международных экспертов (Индия, Иран, Китай, ОАЭ, Россия, Южная Корея), Альянс ИИ Узбекистана, а также перспективные стартапы с использованием ИИ, общественные деятели и представители СМИ.",
          },
          news6: {
            title:
              "Сотрудничество с высшими учебными заведениями налажено в рамках заседания Консультативного совета по искусственному интеллекту при Министерстве инновационного развития.",
            p1: `На первом заседании Консультативного совета по искусственному интеллекту, который состоялся 18 октября на полях "InnoWeek.uz-2022" подписан меморандум о сотрудничестве между председателем Совета Б.Рахимовым и заместителем директора Университета АМИТИ.`,
            p2: `Целью меморандума является объединение теоретических и практических знаний, подготовка кадров для IT-сектора путем установления взаимного сотрудничества между сторонами. Согласовано организовать совместные курсы повышения квалификации для 25 преподавателей в области информатики в общеобразовательные средние школы.`,
            p3: `В рамках сотрудничества планируется отобрать лучших кадров работающих в общеобразовательных школах для обучения в течение 6 месяцев в рамках спецкурса.`,
          },
          test: "Сайт работает в тестовом режиме (приносим свои извинения за возможные ошибки)",
          footer: {
            about: {
              work: "Участники совета",
              group: "Рабочая группа",
              partner: "Партнёры",
              documents: "Документы",
            },
            project: {
              catalog: "Каталог проектов с фильтрами",
              list: "Список мероприятий",
            },
            blog: {
              news: "Новости",
              state: "Статьи",
              anons: "Анонсы мероприятий",
            },
          },
          newsTitle: "новости",
          feedback: {
            title: "Отправить запрос",
            name: "Имя",
            phone: "Телефон номер",
            email: "Электронная почта",
            send: "Отправить",
            text: "Текст заявки",
            info: `Напишите свой вопрос, мы ответим в ближайшее время`,
          },
          development: "Страница находится в разработке",
        },
      },
    },
  });

export default i18n;
