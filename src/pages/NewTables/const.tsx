export const TabsData: any = {
  1: [
    {
      url: "teacherEquipmentRate",
      title:
        "Professor-o'qituvchi va xodimlarning kompyuter bilan ta'minlanganlik holati",
      values: [
        {
          title:
            "Professor-o'qituvchi va xodimlar uchun ajratilgan kompyuterlar soni",
          url: "computerCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni",
          url: "totalTeacherCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni (HEMIS)",
          url: "hemisTotalTeacherCount",
        },
      ],
    },
    {
      url: "studentEquipmentRate",
      title: "Talabalarning kompyuter bilan ta'minlanganlik holati",
      values: [
        {
          title: "Talabalar foydalanishi uchun ajratilgan kompyuterlar soni",
          url: "computerCount",
        },
        {
          title: "Talabalarning umumiy soni",
          url: "totalStudentCount",
        },
        {
          title: "Talabalarning umumiy soni (HEMIS)",
          url: "hemisTotalStudentCount",
        },
      ],
    },
    {
      url: "internetConnectedBuildingRate",
      title: "Internet ulangan o'quv, TTJ va boshqa binolar ulushi",
      values: [
        {
          title: "Internet ulangan binolarning umumiy soni",
          url: "educationalBuildingCount",
        },
        {
          title: "Internet ulangan o'quv binolari soni",
          url: "buildingCount",
        },
        {
          title: "Internet ulangan TTJlar soni",
          url: "dormitoryCount",
        },
        {
          title: "Internet ulangan boshqa binolar soni",
          url: "otherBuildingCount",
        },
        {
          title: "OTMdagi barcha binolar soni",
          url: "totalBuildingCount",
        },
      ],
    },
    {
      url: "fiberOpticCoverageRate",
      title: "Optik tolali aloqa liniyalari bilan qamrab olinganlik ulushi",
      values: [
        {
          title: "Optik tolali internet ulangan binolar soni",
          url: "buildingWithOpticCount",
        },
        {
          title: "Binolarning umumiy soni",
          url: "totalBuildingCount",
        },
      ],
    },
    {
      title: "Internet tezligi",
      url: "internetSpeed",
      values: [
        {
          title: "O'quv binolarida internetga ulanish o'rtacha tezligi",
          url: "averageInternetSpeed",
        },
        {
          title: "Talabalarning umumiy soni",
          url: "totalStudentCount",
        },
        {
          title: "Talabalarning umumiy soni (HEMIS)",
          url: "hemisTotalStudentCount",
        },
      ],
    },
    {
      url: "wirelessInternetRate",
      title: "Simsiz internet qamrovi va sifati",
      values: [
        {
          title: "Simsiz internet tarqatuvchi qurilmalar (WiFi) soni",
          url: "deviceCount",
        },
        {
          title: "Talabalar soni",
          url: "totalStudentCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni",
          url: "totalTeacherCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni (HEMIS)",
          url: "hemisTotalTeacherCount",
        },
      ],
    },
    {
      url: "auditoriumEquipmentElectronicDevice",
      title:
        "O'quv auditoriyalarining proyektor, interaktiv doska, katta diagonalli ekranlar bilan jihozlanganligi",
      values: [
        {
          title: "Proyektorlar soni",
          url: "projectorCount",
        },
        {
          title: "Interaktiv doskalar soni",
          url: "blackboardCount",
        },
        {
          title: "Katta diagonalli ekranlar soni",
          url: "screenCount",
        },
        {
          title: "O'quv, auditoriyalari soni",
          url: "classRoomCount",
        },
      ],
    },
  ],
  2: [
    {
      title:
        "OTM faoliyati jarayonlarini avtomatlashtirishga yo'naltirilgan axborot tizimlari",
      url: "iSForAutomateProcess",
      values: [
        {
          title: "AT yoki modul nomi",
          url: "isname",
        },
        {
          title: "AT yoki modul domeni (linki)",
          url: "isdomain",
        },
        {
          title: "ATga mas'ul shaxsning FISH",
          url: "responsiblePersonFullName",
        },
        {
          title: "ATga mas'ul shaxsning JSHSHIR raqami",
          url: "responsiblePersonPnfl",
        },
        {
          title: "ATga mas'ul shaxsning pasport seriya raqami",
          url: "responsiblePersonPassportNumber",
        },
        {
          title: "ATga mas'ul shaxsning pasport berilgan sanasi",
          url: "responsiblePersonPassportIssuedDate",
        },
        {
          title: "ATga mas'ul shaxsning telefon raqami",
          url: "responsiblePersonPhoneNumber",
        },
      ],
    },
    {
      title:
        "OTM o'z tashabbusi asosida ishlab chiqqan va joriy qilgan axborot tizimlari",
      url: "initiativeIS",
      values: [
        {
          title: "AT turi",
          url: "typeIS",
        },
        {
          title: "ATning to'liq nomlanishi",
          url: "fullNameIS",
        },
        {
          title:
            "Ishlab chiqish va joriy etish uchun sarflangan umumiy mablag'",
          url: "totalSpentMoney",
        },
        {
          title: "ATning maqsad va vazifalari",
          url: "aidIS",
        },
        {
          title: "Joriy etilgan sanasi",
          url: "implementationDate",
        },
        {
          title: "Integratsiya qilingan axborot tizimlari ro'yxati",
          url: "integratedIS",
        },
        {
          title: "AT pullikmi?",
          url: "paidStateIS",
        },
        {
          title: "Avtomatlashtirilgan xizmatlar (funksiyalar)",
          url: "automatedServices",
        },
        {
          title: "Foydalanuvchilar soni",
          url: "userCount",
        },
        {
          title:
            "ATga tegishli hujjatlar (ekspert xulosasi, guvohnoma, patent, sertifikat va h.k.)",
          url: "document",
        },
        {
          title: "Joriy etilganligi buyrug'i (mavjud bo'lsa)",
          url: "implementationOrderFile",
        },
        {
          title: "ATga mas'ul shaxsning FISH",
          url: "responsiblePersonFullName",
        },
        {
          title: "ATga mas'ul shaxsning JSHSHIR raqami",
          url: "responsiblePersonPnfl",
        },
        {
          title: "ATga mas'ul shaxsning pasport seriya raqami",
          url: "responsiblePersonPassportNumber",
        },
        {
          title: "ATga mas'ul shaxsning pasport berilgan sanasi",
          url: "responsiblePersonPassportIssuedDate",
        },
        {
          title: "ATga mas'ul shaxsning telefon raqami",
          url: "responsiblePersonPhoneNumber",
        },
      ],
    },
    //   {
    //     title:
    //       "HEMlS ёки ўз LMS тизими мавжудлиги ва унга маълумотларни киритилганлик холати",
    //     values: [],
    //   },
    //   {
    //     title:
    //       " LMS тизимига киритилган ОТМдаги фанлар бўйича материаллар сони ва сифати",
    //     values: [],
    //   },
    {
      url: "electronService",
      title: "Taqdim qilinayotgan elektron xizmatlar",
      values: [
        {
          title: "Elektron xizmat nomi",
          url: "electronServiceName",
        },
        {
          title: "Elektron xizmatga havola (link)",
          url: "electronServiceLink",
        },
        {
          title: "Elektron xizmatning maqsad va vazifalari",
          url: "electronServiceAid",
        },
        {
          title:
            "Elektron xizmatni ishga tushirishda integratsiya qilingan axborot tizimlari ro'yxati",
          url: "integratedISToElectronService",
        },
        {
          title: "Elektron xizmatdan foydalanganlar soni",
          url: "userCount",
        },
        {
          title:
            "Elektron xizmatga tegishli hujjatlar (ekspert xulosasi, guvohnoma, patent, sertifikat va h.k.)",
          url: "documentRelatedToElectronicService",
        },
      ],
    },
    {
      url: "modernSpecializedEquipmentRate",
      title:
        "OTMdagi yo'nalish va mutaxassisliklar uchun yo'naltirilgan maxsus zamonaviy axborot tizimlaridan foydalanish darajasi",
      values: [
        {
          title:
            "OTM o'quv jarayonida foydalaniladigan zamonaviy axborot tizimlari soni",
          url: "modernISCount",
        },
        {
          title: "OTMdagi yo'nalish va mutaxassisliklarning umumiy soni",
          url: "totalSpecialityCount",
        },
      ],
    },
  ],
  3: [
    {
      title: "AKT bo'yicha xodimlar ulushi (dasturchi va AKTga mas'ullar)",
      url: "ITStaffRate",
      values: [
        {
          title:
            "OTMdagi AKT ga mas'ul xodimlar, soha mutaxassislari va qayta tayyorlash kurslaridan o'tgan professor-o'qituvchi hamda xodimlar soni",
          url: "retrainingStaffCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni",
          url: "staffCount",
        },
        {
          title: "Professor-o'qituvchi va xodimlarning umumiy soni (HEMIS)",
          url: "hemisTotalTeacherCount",
        },
      ],
    },
    {
      title:
        "AKT bo'yicha malaka oshirgan, onlayn yoki oflayn kurslarni yakunlagan xodimlar ulushi (AKT sohasi mutaxassisi bo'lmagan xodimlar)",
      url: "ITRetrainedStaffRate",
      values: [
        {
          title: "Sertifikat nomi",
          url: "certificateName",
        },
        {
          title: "Berilgan sanasi",
          url: "issueDate",
        },
        {
          title: "Sertifikat fayli",
          url: "certificateFile",
        },
        {
          title: "Sertifikatga havola (mavjud bo'lsa)",
          url: "linkForCertificate",
        },
      ],
    },
  ],
  5: [
    {
      title:
        "Axborot xavfsizligi talablari tasdiqlanganligi va xodimlarni tanishtirilganligi",
      url: "approvedISecurityRequirement",
      values: [
        {
          title: "Axborot xavfsizligi talablari tasdiqlangan buyruq sanasi",
          url: "orderDate",
        },
        {
          title: "Axborot xavfsizligi talablari tasdiqlangan buyruq raqami",
          url: "orderNumber",
        },
        {
          title: "Buyruq fayli",
          url: "orderFile",
        },
        {
          title:
            "Xodimlarning axborot xavfsizligi talablari bilan tanishganligini qayd qilish jurnalining fayli (skayner variantda)",
          url: "staffJournalFile",
        },
      ],
    },
    {
      title:
        "Konfidensial ma'lumotlar hajmi va ro'yxati, xodimlar bilan konfidensiallik kelishuvi (nizomi) mavjudligi",
      url: "confidentialDataStatute",
      values: [
        {
          title:
            "Konfidensial ma'lumotlarning hajmi va ro'yxati tasdiqlangan buyruq sanasi",
          url: "orderApprovedDate",
        },
        {
          title:
            "Konfidensial ma'lumotlarning hajmi va ro'yxati tasdiqlangan buyruq raqami",
          url: "orderNumber",
        },
        {
          title: "Buyruq fayli",
          url: "orderFile",
        },
        {
          title:
            "Konfidensial ma'lumotlardan foydalanishga ruxsat berilgan xodimlar ro'yxati tasdiqlangan buyruq sanasi",
          url: "staffListOrderDate",
        },
        {
          title:
            "Konfidensial ma'lumotlardan foydalanishga ruxsat berilgan xodimlar ro'yxati  tasdiqlangan buyruq raqami",
          url: "staffListOrderNumber",
        },
        {
          title:
            "Konfidensial ma'lumotlardan foydalanishga ruxsat berilgan xodimlar ro'yxati  tasdiqlangan buyruq fayli",
          url: "staffOrderFile",
        },
        {
          title:
            "Xodimlar bilan konfidensiallik kelishuvi bo'yicha nizom tasdiqlangan sanasi",
          url: "statuteApprovedDate",
        },
        {
          title:
            "Xodimlar bilan konfidensiallik kelishuvi bo'yicha nizom raqami",
          url: "statuteNumber",
        },
        {
          title:
            "Xodimlar bilan konfidensiallik kelishuvi bo'yicha nizom fayli",
          url: "statuteFile",
        },
      ],
    },
    {
      title:
        "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbar hamda xodimning tayinlanganligi",
      url: "iSecurityStaff",
      values: [
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbarning F.I.Sh.",
          url: "chiefFullName",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbarning lavozimi",
          url: "chiefRank",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbarning telefon raqami",
          url: "chiefPhone",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbarning elektron pochta manzili",
          url: "chiefEmail",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul xodimning F.I.Sh.",
          url: "staffFullName",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul xodimning lavozimi",
          url: "staffRank",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul xodimning telefon raqami",
          url: "staffPhone",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul xodimning elektron pochta manzili",
          url: "staffEmail",
        },
        {
          title:
            "Axborot xavfsizligi masalalari bo'yicha mas'ul rahbar hamda xodimning tayinlanganligi to'g'risidagi tasdiqlangan buyruq fayli",
          url: "orderFile",
        },
      ],
    },
    {
      title:
        "Axborot xavfsizligi uchun mas'ul xodimlarning malaka oshirganligi",
      url: "iSecurityStaffRetraining",
      values: [
        {
          title: "Mas'ul xodim malaka oshirgan tashkilot nomi",
          url: "educationalCenterName",
        },
        {
          title: "Malaka oshirish turi (onlayn/oflayn)",
          url: "educationType",
        },
        {
          title: "Malaka oshirish kursining mavzusi",
          url: "retrainingTheme",
        },
        {
          title: "Malaka oshirish kursi boshlangan sana",
          url: "retrainingInitialDate",
        },
        {
          title: "Malaka oshirish kursi tugagan sana",
          url: "retrainingFinishDate",
        },
        {
          title: "Malaka oshirganlik to'g'risidagi sertifikat fayli",
          url: "retrainingCertificate",
        },
      ],
    },
    {
      title:
        "Rasmiy veb-saytning kiberxavfsizlik talablariga ko'ra ekspertizadan o'tkazilganligi (Kamida 6 oyda bir marta ekspertizadan o'tkazish talab etiladi)",
      url: "websiteSecurityExpertise",
      values: [
        {
          title:
            "Rasmiy veb-saytni ekspertizadan o'tkazish bo'yicha tuzilgan shartnoma raqami",
          url: "contractNumber",
        },
        {
          title:
            "Rasmiy veb-saytni ekspertizadan o'tkazish bo'yicha tuzilgan shartnoma sanasi",
          url: "contractDate",
        },
        {
          title:
            "Rasmiy veb-saytni ekspertizadan o'tkazish bo'yicha tuzilgan shartnoma fayli",
          url: "contractFile",
        },
        {
          title: "Ekspertiza xulosasi bo'yicha rasmiy xat raqami",
          url: "expertiseConclusionNumber",
        },
        {
          title: "Ekspertiza xulosasi bo'yicha rasmiy xat sanasi",
          url: "expertiseConclusionDate",
        },
        {
          title: "Ekspertiza xulosasi bo'yicha rasmiy xat fayli",
          url: "expertiseConclusionFile",
        },
        {
          title: "Aniqlangan zaifliklarning bartaraf etilganligi bo'yicha izoh",
          url: "commentForEliminatedWeakness",
        },
      ],
    },
    {
      title: "Rasmiy veb-sayt uchun SSL sertifikatining mavjudligi",
      url: "websiteSSLCertificate",
      values: [
        {
          title:
            "Rasmiy veb-sayt uchun SSL sertifikatining mavjudligi (mavjud, mavjud emas)",
          url: "existSSLCertificate",
        },
        {
          title: "Isbotlovchi rasmini yuklash",
          url: "sslCertificatePhoto",
        },
      ],
    },
    {
      title:
        "Axborot tizimlari hamda resurslari ma'lumotlarining zaxira nusxalanishi",
      url: "iSystemAndResourceBackup",
      values: [
        {
          title: "Ma'lumotlarni zaxiralash davriyligi",
          url: "dataBackupPeriodicity",
        },
        {
          title:
            " Axborot tizimlari hamda resurslari ma'lumotlarining zaxira nusxalanishi reja-jadvalining fayli",
          url: "backupScheduleFile",
        },
      ],
    },
    {
      title:
        "Konfidensial axborotni tashuvchi vositalarni hisobga olish va saqlash bo'yicha ishlarning tashkil qilinganligi",
      url: "storageConfidentialData",
      values: [
        {
          title:
            "Konfidensial axborotlarni tashuvchi vositalarni hisobga olish jurnalining fayli (skaner varianti)",
          url: "journalFile",
        },
      ],
    },
    {
      title:
        "Ishchi stansiyalar va serverlarda parolli himoya vositalarini joriy qilinganligi",
      url: "serversPasswordProtectionToolsState",
      values: [
        {
          title:
            "Ishchi stansiyalar va serverlarda parolli himoya vositalarini joriy qilinganligi (fayl yoki rasm)",
          url: "protectionToolsWithPasswordPhoto",
        },
        {
          title:
            "Ishchi stansiyalarda parollarni avtomatik o'zgartirish bo'yicha avtomatik so'rovlar va talablarning joriy etilganligi (fayl yoki rasm)",
          url: "automaticPasswordChangePhoto",
        },
      ],
    },
    {
      title:
        "Server xonalarga (Axborotlashtirish obyektlari joylashtirilgan xonalarga) kirish uchun ruxsat berilgan xodimlar tasdiqlanganligi",
      url: "verificationStaffToAccessServerRoom",
      values: [
        {
          title:
            "Server xonalarga kirish uchun ruxsat berilgan xodimlar ro'yxati tasdiqlangan buyruq sanasi",
          url: "orderApprovedDate",
        },
        {
          title:
            "Server xonalarga kirish uchun ruxsat berilgan xodimlar ro'yxati tasdiqlangan buyruq raqami",
          url: "orderNumber",
        },
        {
          title:
            "Server xonalarga kirish uchun ruxsat berilgan xodimlar ro'yxati tasdiqlangan buyruq fayli",
          url: "orderFile",
        },
        {
          title:
            "Server xonaga kirish/chiqishlarni qayd qilish jurnali nusxasi (skaner fayl)",
          url: "journalInputOutputToServerRoom",
        },
      ],
    },
    {
      title: "Tarmoqlararo ekran (Firewall) mavjudligi ",
      url: "firewall",
      values: [
        {
          title: "Tarmoqlararo ekran qurilmasi/dasturiy vositasi nomi",
          url: "firewallName",
        },
        {
          title: "Tarmoqlararo ekran qurilmasi/dasturiy vositasi modeli",
          url: "firewallModel",
        },
        {
          title: "Litsenziya nusxasi (fayli yoki rasm)",
          url: "licenceCopy",
        },
      ],
    },
    {
      title: "Zararli dasturlardan himoya vositalarini joriy etilganligi",
      url: "protectionToolsFromHarmfulProgram",
      values: [
        {
          title: "Dasturiy ta'minot nomi",
          url: "softwareName",
        },
        {
          title: "Dasturiy ta'minot versiyasi",
          url: "softwareVersion",
        },
        {
          title: "Litsenziyalar soni",
          url: "licenceCount",
        },
        {
          title: "Litsenziyaning amal qilish muddati",
          url: "licenceValidityPeriod",
        },
        {
          title: "Litsenziya nusxasi (fayl)",
          url: "licenceCopy",
        },
      ],
    },
    {
      title: "Videonazorat tizimi",
      url: "videoSurveillanceSystem",
      values: [
        {
          title:
            "Videonazorat tizimi (mavjud va ishlaydi, mavjud lekin ishlamaydi, mavjud emas)",
          url: "videoSurveillanceSystemState",
        },
        {
          title: "Isbotlovchi rasmini yuklash",
          url: "proofPhoto",
        },
      ],
    },
  ],
  6: [
    {
      title:
        "OTMning moliyalashtirish manbalari bilan tasdiqlangan, yaqin yillardagi faoliyatiga AKTni joriy etish va rivojlantirish tadbirlari rejalarining mavjudligi",
      url: "iTDevelopmentMeasure",
      values: [
        {
          title: "Chora-tadbir nomi",
          url: "measureName",
        },
        {
          title: "Tasdiqlangan sanasi",
          url: "measureApprovalDate",
        },
        {
          title: "Chora-tadbir fayli",
          url: "measureFile",
        },
        {
          title: "Hujjat linki (agar mavjud bo'lsa)",
          url: "measureDocumentLink",
        },
      ],
    },
    {
      title:
        "OTMda AKTni joriy etish va rivojlantirish yuzasidan rahbariyat orasidan mas'ul shaxsning mavjudligi",
      url: "iTInternalOrder",
      values: [
        {
          title: "Ichki tasdiqlangan buyruq raqami",
          url: "internalOrderNumber",
        },
        {
          title: "Tasdiqlangan sanasi",
          url: "approvalDate",
        },
        {
          title: "Ichki buyruq fayli",
          url: "orderFile",
        },
        {
          title: "Hujjat linki (agar mavjud bo'lsa)",
          url: "documentLink",
        },
      ],
    },
    {
      title:
        "OTMda AKTni joriy etish va rivojlantirish yuzasidan mas'ul bo'lgan ixtisoslashtirilgan tarkibiy bo'linmaning yoki tegishli xizmatlar autsorsingi bo'yicha shartnomaning mavjudligi",
      url: "iTDevelopmentContract",
      values: [
        {
          title: "Shartnoma raqami",
          url: "contractNumber",
        },
        {
          title: "Tasdiqlangan sanasi",
          url: "contractApprovalDate",
        },
        {
          title: "Shartnoma fayli",
          url: "contractFile",
        },
        {
          title: "Hujjat linki (agar mavjud bo'lsa)",
          url: "contractDocumentLink",
        },
      ],
    },
  ],
};
