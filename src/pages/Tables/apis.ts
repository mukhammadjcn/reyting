import {
  Page1_1,
  Page1_2,
  Page1_3,
  Page1_4,
  Page1_5,
  Page1_6,
  Page1_7,
  Page2_1,
  Page2_2,
  Page2_5,
  Page2_6,
  Page3_1,
  Page3_2,
  Page5_1,
  Page5_10,
  Page5_11,
  Page5_12,
  Page5_13,
  Page5_2,
  Page5_3,
  Page5_4,
  Page5_5,
  Page5_6,
  Page5_7,
  Page5_8,
  Page5_9,
  Page6_1,
  Page6_2,
  Page6_3,
} from "src/server/config/Urls";

export const GetPage1 = async (param = "") => {
  const data1_1 = (await Page1_1(param)).data?.content?.[0];
  const data1_2 = (await Page1_2(param)).data?.content?.[0];
  const data1_3 = (await Page1_3(param)).data?.content?.[0];
  const data1_4 = (await Page1_4(param)).data?.content?.[0];
  const data1_5 = (await Page1_5(param)).data?.content?.[0];
  const data1_6 = (await Page1_6(param)).data?.content?.[0];
  const data1_7 = (await Page1_7(param)).data?.content?.[0];

  return {
    cardType: "small",
    title: "АКТ инфратузилмаси ҳолати",
    cards: [
      {
        id: data1_1?.id || 0,
        url: "teacherEquipmentRate",
        title:
          "Профессор-ўқитyвчи ва ходимларнинг компьютер билан таъминланганлик холати",
        values: [
          {
            title:
              "Профессор-ўқитувчи ва ходимлар учун ажратилган компьютерлар сони",
            count: data1_1?.computerCount || `Мавжуд емас`,
            url: "computerCount",
          },
          {
            title: "Профессор-ўқитувчи ва ходимлар умумий сони",
            count: data1_1?.totalTeacherCount || `Мавжуд емас`,
            url: "totalTeacherCount",
          },
        ],
      },
      {
        id: data1_2?.id || 0,
        url: "studentEquipmentRate",
        title: "Талабаларнинг компьютер билан таъминланганлик холати",
        values: [
          {
            title: "Талабалар фойдаланиши учун ажратилган компьютерлар сони",
            count: data1_2?.computerCount || `Мавжуд емас`,
            url: "computerCount",
          },
          {
            title: "Талабаларнинг умумий сони",
            count: data1_2?.totalStudentCount || `Мавжуд емас`,
            url: "totalStudentCount",
          },
        ],
      },
      {
        id: data1_3?.id || 0,
        url: "internetConnectedBuildingRate",
        title: "Интернет уланган ўқув, ТТЖ ва бошқа бинолар улуши",
        values: [
          {
            title: "Интернет уланган бинолар сони (Шартнома uлова қuлинади)",
            count: data1_3?.educationalBuildingCount || `Мавжуд емас`,
            url: "educationalBuildingCount",
          },
          {
            title: "Ўқув бинолари сони",
            count: data1_3?.buildingCount || `Мавжуд емас`,
            url: "buildingCount",
          },
          {
            title: "ТТЖлар сони",
            count: data1_3?.dormitoryCount || `Мавжуд емас`,
            url: "dormitoryCount",
          },
          {
            title: "Бошқа бинолар сони",
            count: data1_3?.otherBuildingCount || `Мавжуд емас`,
            url: "otherBuildingCount",
          },
        ],
      },
      {
        id: data1_4?.id || 0,
        url: "fiberOpticCoverageRate",
        title: "Оптик толали алоқа линиялари билан қамраб олинганлик улуши",
        values: [
          {
            title:
              "Оптик толали интернет уланган бинолар сони (Шартнома uлова қилинади)",
            count: data1_4?.buildingWithOpticCount || `Мавжуд емас`,
            url: "buildingWithOpticCount",
          },
          {
            title: "Биноларнинг умумий сони",
            count: data1_4?.totalBuildingCount || `Мавжуд емас`,
            url: "totalBuildingCount",
          },
        ],
      },
      {
        id: data1_5?.id || 0,
        title: "Интернет тезлиги",
        url: "internetSpeed",
        values: [
          {
            title: "Ўқув биноларида интернетга уланиш ўртача тезлиги",
            url: "averageInternetSpeed",
            count: data1_5?.averageInternetSpeed || `Мавжуд емас`,
          },
          {
            title: "Талабаларнинг умумий сони",
            url: "totalStudentCount",
            count: data1_5?.totalStudentCount || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_6?.id || 0,
        url: "wirelessInternetRate",
        title: "Симсиз интернет қамрови ва сифати",
        values: [
          {
            title: "Симсиз интернет тарқатувчи қурилмалар сони",
            count: data1_6?.deviceCount || `Мавжуд емас`,
            url: "deviceCount",
          },
          {
            title: "Талабаларнинг умумий сони",
            count: data1_6?.totalStudentCount || `Мавжуд емас`,
            url: "totalStudentCount",
          },
          {
            title: "Профессор-ўқитувчи ва ходимлар умумий сони",
            count: data1_6?.totalTeacherCount || `Мавжуд емас`,
            url: "totalTeacherCount",
          },
        ],
      },
      {
        id: data1_7?.id || 0,
        url: "auditoriumEquipmentElectronicDevice",
        title:
          "Ўқув аудиторияларининг проектор, интерактив доска, катта диагоналли экранлар билан жихозланганлиги",
        values: [
          {
            title: "Ўқув аудиторияларидаги проекторлар сони",
            count: data1_7?.projectorCount || `Мавжуд емас`,
            url: "projectorCount",
          },
          {
            title: "Ўқув аудиторияларидагиинтерактив доскалар сони",
            count: data1_7?.blackboardCount || `Мавжуд емас`,
            url: "blackboardCount",
          },
          {
            title: "Ўқув аудиторияларидаги катта диагоналли экранлар сони",
            count: data1_7?.screenCount || `Мавжуд емас`,
            url: "screenCount",
          },
          {
            title: "Ўқув, аудиториялари сони",
            count: data1_7?.classRoomCount || `Мавжуд емас`,
            url: "classRoomCount",
          },
        ],
      },
    ],
  };
};

export const GetPage2 = async (param = "") => {
  const data1_1 = (await Page2_1(param)).data?.content?.[0];
  const data1_2 = (await Page2_2(param)).data?.content?.[0];
  const data1_5 = (await Page2_5(param)).data?.content?.[0];
  const data1_6 = (await Page2_6(param)).data?.content?.[0];

  return {
    cardType: "full",
    title: "ОТМ ахборот тизимлари, ахборот ресурслари ҳолати",
    cards: [
      {
        id: data1_1?.id || 0,
        title:
          "ОТМ фаолияти жараёнларини автоматлаштиришга йўналтирилган АТлар сони",
        url: "iSForAutomateProcess",
        values: [
          {
            title: "АТ ёки модул номи",
            url: "isname",
            count: data1_1?.isname || `Мавжуд емас`,
          },
          {
            title: "АТ ёки модул домени (линки)",
            url: "isdomain",
            count: data1_1?.isdomain || `Мавжуд емас`,
          },
          {
            title: "АТ ёки модулнинг мақсад ва вазифалари",
            url: "isaid",
            count: data1_1?.isaid || `Мавжуд емас`,
          },
          {
            title: "Интеграция қилинган ахборот тизимлари рўйхати",
            url: "integratedIS",
            count: data1_1?.integratedIS || `Мавжуд емас`,
          },
          {
            title: "Автоматлаштирилган хизматлар (функциялар)",
            url: "automatedServices",
            count: data1_1?.automatedServices || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_2?.id || 0,
        title:
          "ОТМ ўз ташаббуси асосида ишлаб чиққан ва жорий қилган АТ лари сони",
        url: "initiativeIS",
        values: [
          {
            title: "АТ тўлиқ номланиши",
            url: "fullNameIS",
            count: data1_2?.fullNameIS || `Мавжуд емас`,
          },
          {
            title: "АТ га ҳавола (линк)",
            url: "linkIS",
            count: data1_2?.linkIS || `Мавжуд емас`,
          },
          {
            title: "АТнинг мақсад ва вазифалари",
            url: "aidIS",
            count: data1_2?.aidIS || `Мавжуд емас`,
          },
          {
            title: "Интеграция қилинган ахборот тизимлари рўйхати",
            url: "integratedIS",
            count: data1_2?.integratedIS || `Мавжуд емас`,
          },
          {
            title: "Автоматлаштирилган хизматлар (функциялар)",
            url: "automatedServices",
            count: data1_2?.automatedServices || `Мавжуд емас`,
          },
          {
            title: "Фойдаланувчилар сони",
            url: "userCount",
            count: data1_2?.userCount || `Мавжуд емас`,
          },
          {
            title:
              "АТга тегишли хужжатлар (эксперт хулосаси, гувоҳнома, патент, сертификат ва ҳ.к.)",
            url: "document",
            count: data1_2?.document || `Мавжуд емас`,
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
        id: data1_5?.id || 0,
        url: "electronService",
        title: "Тақдим қилинаётган электрон хизматлар сони",
        values: [
          {
            title: "Электрон хизмат номи",
            url: "electronServiceName",
            count: data1_5?.electronServiceName || `Мавжуд емас`,
          },
          {
            title: "Электрон хизматга ҳавола (линк)",
            url: "electronServiceLink",
            count: data1_5?.electronServiceLink || `Мавжуд емас`,
          },
          {
            title: "Электрон хизматнинг мақсад ва вазифалари",
            url: "electronServiceAid",
            count: data1_5?.electronServiceAid || `Мавжуд емас`,
          },
          {
            title:
              "Электрон хизматни ишга туширишда интеграция қилинган АТлари рўйхати",
            url: "integratedISToElectronService",
            count: data1_5?.integratedISToElectronService || `Мавжуд емас`,
          },
          {
            title: "Электрон хизматдан фойдаланганлар сони",
            url: "userCount",
            count: data1_5?.userCount || `Мавжуд емас`,
          },
          {
            title:
              "Электрон хизматга тегишли хужжатлар (эксперт хулосаси, гувоҳнома, патент, сертификат ва ҳ.к.)",
            url: "documentRelatedToElectronicService",
            count: data1_5?.documentRelatedToElectronicService || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_6?.id || 0,
        url: "modernSpecializedEquipmentRate",
        title:
          "ОТМ даги йўналиш ва мутахассисликлар учун йўналтирилган махсус замонавий АТ ларидан фойдаланиш даражаси",
        values: [
          {
            title: "ОТМ ўқув жараёнида фойдаланиладиган замонавий АТ лари сони",
            url: "modernISCount",
            count: data1_6?.modernISCount || `Мавжуд емас`,
          },
          {
            title: "ОТМ даги йўналиш ва мутахассисликларнинг умумий сони",
            url: "totalSpecialityCount",
            count: data1_6?.totalSpecialityCount || `Мавжуд емас`,
          },
        ],
      },
    ],
  };
};

export const GetPage3 = async (param = "") => {
  const data1_1 = (await Page3_1(param)).data?.content?.[0];
  const data1_2 = (await Page3_2(param)).data?.content?.[0];

  return {
    cardType: "full",
    title: "ОТМ даги АКТ соҳасидаги инсон капитали ҳолати",
    cards: [
      {
        id: data1_1?.id || 0,
        title: "АКТ бўйича ходимлар улуши (дастурчи ва АКТга масъуллар)",
        url: "ITStaffRate",
        values: [
          {
            title:
              "ОТМ даги АКТ га масъул ходимлар, соха мутахассислари ва қайта тайёрлаш курсларидан ўтган профессор-ўқитувчи хамда ходимлар сони",
            url: "retrainingStaffCount",
            count: data1_1?.retrainingStaffCount || `Мавжуд емас`,
          },
          {
            title: "Профессор-ўқитyвчи ва ходимлар умумий сони",
            url: "staffCount",
            count: data1_1?.staffCount || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_2?.id || 0,
        title:
          "АКТ бўйича малака оширган, онлайн ёки офлайн курсларни якунлаган ходимлар улуши (АКТ соҳаси мутахассиси бўлмаган ходимлар)",
        url: "ITRetrainedStaffRate",
        values: [
          {
            title: "Сертификат номи",
            url: "certificateName",
            count: data1_2?.certificateName || `Мавжуд емас`,
          },
          {
            title: "Берилган санаси",
            url: "issueDate",
            count: data1_2?.issueDate || `Мавжуд емас`,
          },
          {
            title: "Сертификат файли",
            url: "certificateFile",
            count: data1_2?.certificateFile || `Мавжуд емас`,
          },
          {
            title: "Сертификатга ҳавола (мавжуд бўлса)",
            url: "linkForCertificate",
            count: data1_2?.linkForCertificate || `Мавжуд емас`,
          },
        ],
      },
    ],
  };
};

export const GetPage5 = async (param = "") => {
  const data1_1 = (await Page5_1(param)).data?.content?.[0];
  const data1_2 = (await Page5_2(param)).data?.content?.[0];
  const data1_3 = (await Page5_3(param)).data?.content?.[0];
  const data1_4 = (await Page5_4(param)).data?.content?.[0];
  const data1_5 = (await Page5_5(param)).data?.content?.[0];
  const data1_6 = (await Page5_6(param)).data?.content?.[0];
  const data1_7 = (await Page5_7(param)).data?.content?.[0];
  const data1_8 = (await Page5_8(param)).data?.content?.[0];
  const data1_9 = (await Page5_9(param)).data?.content?.[0];
  const data1_10 = (await Page5_10(param)).data?.content?.[0];
  const data1_11 = (await Page5_11(param)).data?.content?.[0];
  const data1_12 = (await Page5_12(param)).data?.content?.[0];
  const data1_13 = (await Page5_13(param)).data?.content?.[0];

  return {
    cardType: "full",
    title: "Ахборот хавфсизлигини таъминлашдаги меъёрий тадбирлар",
    cards: [
      {
        id: data1_1?.id || 0,
        title:
          "Ахборот хавфсизлиги талаблари тасдиқланганлиги ва ходимларни таништирилганлиги",
        url: "approvedISecurityRequirement",
        values: [
          {
            title: "Ахборот хавфсизлиги талаблари тасдиқланган буйруқ санаси",
            url: "orderDate",
            count: data1_1?.orderDate || `Мавжуд емас`,
          },
          {
            title: "Ахборот хавфсизлиги талаблари тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_1?.orderNumber || `Мавжуд емас`,
          },
          {
            title: "Буйруқ файли",
            url: "orderFile",
            count: data1_1?.orderFile || `Мавжуд емас`,
          },
          {
            title:
              "Ходимларнинг ахборот хавфсизлиги талаблари билан танишганлигини қайд қилиш журналининг файли (скайнер вариантда)",
            url: "staffJournalFile",
            count: data1_1?.staffJournalFile || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_2?.id || 0,
        title:
          "Конфиденциал маълумотлар ҳажми ва рўйхати, ходимлар билан конфиденциаллик келишуви (низоми) мавжудлиги",
        url: "confidentialDataStatute",
        values: [
          {
            title:
              "Конфиденциал маълумотларнинг ҳажми ва рўйхати тасдиқланган буйруқ санаси",
            url: "orderApprovedDate",
            count: data1_2?.orderApprovedDate || `Мавжуд емас`,
          },
          {
            title:
              "Конфиденциал маълумотларнинг ҳажми ва рўйхати тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_2?.orderNumber || `Мавжуд емас`,
          },
          {
            title: "Буйруқ файли",
            url: "orderFile",
            count: data1_2?.orderFile || `Мавжуд емас`,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати тасдиқланган буйруқ санаси",
            url: "staffListOrderDate",
            count: data1_2?.staffListOrderDate || `Мавжуд емас`,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати  тасдиқланган буйруқ рақами",
            url: "staffListOrderNumber",
            count: data1_2?.staffListOrderNumber || `Мавжуд емас`,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати  тасдиқланган буйруқ файли",
            url: "staffOrderFile",
            count: data1_2?.staffOrderFile || `Мавжуд емас`,
          },
          {
            title:
              "Ходимлар билан конфиденциаллик келишуви бўйича низом тасдиқланган санаси",
            url: "statuteApprovedDate",
            count: data1_2?.statuteApprovedDate || `Мавжуд емас`,
          },
          {
            title:
              "Ходимлар билан конфиденциаллик келишуви бўйича низом рақами",
            url: "statuteNumber",
            count: data1_2?.statuteNumber || `Мавжуд емас`,
          },
          {
            title: "Ходимлар билан конфиденциаллик келишуви бўйича низом файли",
            url: "statuteFile",
            count: data1_2?.statuteFile || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_3?.id || 0,
        title:
          "Ахборот хавфсизлиги масалалари бўйича масъул раҳбар ҳамда ходимнинг тайинланганлиги",
        url: "iSecurityStaff",
        values: [
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг Ф.И.Ш.",
            url: "chiefFullName",
            count: data1_3?.chiefFullName || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг лавозими",
            url: "chiefRank",
            count: data1_3?.chiefRank || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг телефон рақами",
            url: "chiefPhone",
            count: data1_3?.chiefPhone || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг электрон почта манзили",
            url: "chiefEmail",
            count: data1_3?.chiefEmail || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг Ф.И.Ш.",
            url: "staffFullName",
            count: data1_3?.staffFullName || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг лавозими",
            url: "staffRank",
            count: data1_3?.staffRank || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг телефон рақами",
            url: "staffPhone",
            count: data1_3?.staffPhone || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг электрон почта манзили",
            url: "staffEmail",
            count: data1_3?.staffEmail || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбар ҳамда ходимнинг тайинланганлиги тўғрисидаги тасдиқланган буйруқ файли",
            url: "orderFile",
            count: data1_3?.orderFile || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_4?.id || 0,
        title:
          "Ахборот хавфсизлиги учун масъул ходимларнинг малака оширганлиги",
        url: "iSecurityStaffRetraining",
        values: [
          {
            title: "Масъул ходим малака оширган ўқув марказининг номи",
            url: "educationalCenterName",
            count: data1_4?.educationalCenterName || `Мавжуд емас`,
          },
          {
            title: "Малака ошириш тури (онлайн/офлайн)",
            url: "educationType",
            count: data1_4?.educationType || `Мавжуд емас`,
          },
          {
            title: "Малака ошириш курсининг мавзуси",
            url: "retrainingTheme",
            count: data1_4?.retrainingTheme || `Мавжуд емас`,
          },
          {
            title: "Малака ошириш курси бошланган сана",
            url: "retrainingInitialDate",
            count: data1_4?.retrainingInitialDate || `Мавжуд емас`,
          },
          {
            title: "Малака ошириш курси тугаган сана",
            url: "retrainingFinishDate",
            count: data1_4?.retrainingFinishDate || `Мавжуд емас`,
          },
          {
            title: "Малака оширганлик тўғрисидаги сертификат файли",
            url: "retrainingCertificate",
            count: data1_4?.retrainingCertificate || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_5?.id || 0,
        title:
          "Расмий веб-сайтнинг киберхавфсизлик талабларига кўра экспертизадан ўтказилганлиги (Камида 6 ойда бир марта экспертизадан ўтказиш талаб этилади)",
        url: "websiteSecurityExpertise",
        values: [
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома рақами",
            url: "contractNumber",
            count: data1_5?.contractNumber || `Мавжуд емас`,
          },
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома санаси",
            url: "contractDate",
            count: data1_5?.contractDate || `Мавжуд емас`,
          },
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома файли",
            url: "contractFile",
            count: data1_5?.contractFile || `Мавжуд емас`,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат рақами",
            url: "expertiseConclusionNumber",
            count: data1_5?.expertiseConclusionNumber || `Мавжуд емас`,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат санаси",
            url: "expertiseConclusionDate",
            count: data1_5?.expertiseConclusionDate || `Мавжуд емас`,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат файли",
            url: "expertiseConclusionFile",
            count: data1_5?.expertiseConclusionFile || `Мавжуд емас`,
          },
          {
            title: "Заифликлар бартараф этилганлиги бўйича изоҳ",
            url: "commentForEliminatedWeakness",
            count: data1_5?.commentForEliminatedWeakness || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_6?.id || 0,
        title: "Расмий веб-сайт учун SSL сертификат мавжудлиги",
        url: "websiteSSLCertificate",
        values: [
          {
            title:
              "Расмий веб-сайт учун SSL сертификати мавжудлиги (мавжуд, мавжуд эмас)",
            url: "existSSLCertificate",
            count: data1_6?.existSSLCertificate,
          },
          {
            title: "Исботловчи расмини юклаш ",
            url: "sslCertificatePhoto",
            count: data1_6?.sslCertificatePhoto || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_7?.id || 0,
        title:
          "Ахборот тизимлари ҳамда ресурслари маълумотларининг захира нусхаланиши",
        url: "iSystemAndResourceBackup",
        values: [
          {
            title: "Маълумотларни захиралаш даврийлиги",
            url: "dataBackupPeriodicity",
            count: data1_7?.dataBackupPeriodicity || `Мавжуд емас`,
          },
          {
            title:
              "Ахборот тизимлари ҳамда ресурслари маълумотларининг захира нусхаланиши режа-жадвалининг файли",
            url: "backupScheduleFile",
            count: data1_7?.backupScheduleFile || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_8?.id || 0,
        title:
          "Конфиденциал ахборотни ташувчи воситаларни ҳисобга олиш ва сақлаш бўйича ишларнинг ташкил қилинганлиги",
        url: "storageConfidentialData",
        values: [
          {
            title:
              "Конфиденциал ахборотларни ташувчи воситаларни ҳисобга олиш журналининг файли (сканер варианти)",
            url: "journalFile",
            count: data1_8?.journalFile || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_9?.id || 0,
        title:
          "Ишчи станциялар ва серверларда паролли ҳимоя воситаларини жорий қилинганлиги",
        url: "serversPasswordProtectionToolsState",
        values: [
          {
            title:
              "Ишчи станциялар ва серверларда паролли ҳимоя воситаларини жорий қилинганлиги (файл ёки расм)",
            url: "protectionToolsWithPasswordPhoto",
            count: data1_9?.protectionToolsWithPasswordPhoto || `Мавжуд емас`,
          },
          {
            title:
              "Ишчи станцияларда паролларни автоматик ўзгартириш бўйича автоматик сўровлар ва талабларнинг жорий этилганлиги (файл ёки расм)",
            url: "automaticPasswordChangePhoto",
            count: data1_9?.automaticPasswordChangePhoto || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_10?.id || 0,
        title:
          "Сервер хоналарга (Ахборотлаштириш объектлари жойлаштирилган хоналарга) кириш учун рухсат берилган ходимлар тасдиқланганлиги",
        url: "verificationStaffToAccessServerRoom",
        values: [
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ санаси ",
            url: "orderApprovedDate",
            count: data1_10?.orderApprovedDate || `Мавжуд емас`,
          },
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_10?.orderNumber || `Мавжуд емас`,
          },
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ файли",
            url: "orderFile",
            count: data1_10?.orderFile || `Мавжуд емас`,
          },
          {
            title:
              "Сервер хонага кириш/чиқишларни қайд қилиш журнали нусхаси (скайнер файл)",
            url: "journalInputOutputToServerRoom",
            count: data1_10?.journalInputOutputToServerRoom || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_11?.id || 0,
        title: "Тармоқлараро экран (Firewall) мавжудлиги ",
        url: "firewall",
        values: [
          {
            title: "Тармоқлараро экран қурилмаси/дастурий воситаси номи",
            url: "firewallName",
            count: data1_11?.firewallName || `Мавжуд емас`,
          },
          {
            title: "Тармоқлараро экран қурилмаси/дастурий воситаси модели",
            url: "firewallModel",
            count: data1_11?.firewallModel || `Мавжуд емас`,
          },
          {
            title: "Лицензия нусхаси (файли ёки расм)",
            url: "licenceCopy",
            count: data1_11?.licenceCopy || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_12?.id || 0,
        title: "Зарарли дастурлардан ҳимоя воситаларини жорий этилганлиги",
        url: "protectionToolsFromHarmfulProgram",
        values: [
          {
            title: "Дастурий таъминот номи",
            url: "softwareName",
            count: data1_12?.softwareName || `Мавжуд емас`,
          },
          {
            title: "Дастурий таъминот версияси",
            url: "softwareVersion",
            count: data1_12?.softwareVersion || `Мавжуд емас`,
          },
          {
            title: "Лицензиялар сони",
            url: "licenceCount",
            count: data1_12?.licenceCount || `Мавжуд емас`,
          },
          {
            title: "Лицензиянинг амал қилиш муддати",
            url: "licenceValidityPeriod",
            count: data1_12?.licenceValidityPeriod || `Мавжуд емас`,
          },
          {
            title: "Лицензия нусхаси (файл)",
            url: "licenceCopy",
            count: data1_12?.licenceCopy || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_13?.id || 0,
        title: "Видеоназорат тизими",
        url: "videoSurveillanceSystem",
        values: [
          {
            title:
              "Видеоназорат тизими (мавжуд ва ишлайди, мавжуд лекин ишламайди, мавжуд эмас)",
            url: "videoSurveillanceSystemState",
            count: data1_13?.videoSurveillanceSystemState || `Мавжуд емас`,
          },
          {
            title: "Исботловчи расмини юклаш",
            url: "proofPhoto",
            count: data1_13?.proofPhoto || `Мавжуд емас`,
          },
        ],
      },
    ],
  };
};

export const GetPage6 = async (param = "") => {
  const data1_1 = (await Page6_1(param)).data?.content?.[0];
  const data1_2 = (await Page6_2(param)).data?.content?.[0];
  const data1_3 = (await Page6_3(param)).data?.content?.[0];

  return {
    cardType: "full",
    title: "Ташкилий ишлар",
    cards: [
      {
        id: data1_1?.id || 0,
        title:
          "ОТМнинг молиялаштириш манбалари билан тасдиқланган, яқин йиллардаги фаолиятига АКТ жорий этиш ва ривожлантириш тадбирлари режаларининг мавжудлиги",
        url: "iTDevelopmentMeasure",
        values: [
          {
            title: "Чора-тадбир номи",
            url: "measureName",
            count: data1_1?.measureName || `Мавжуд емас`,
          },
          {
            title: "Тасдиқланган санаси",
            url: "measureApprovalDate",
            count: data1_1?.measureApprovalDate || `Мавжуд емас`,
          },
          {
            title: "Чора-тадбир файли",
            url: "measureFile",
            count: data1_1?.measureFile || `Мавжуд емас`,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "measureDocumentLink",
            count: data1_1?.measureDocumentLink || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_2?.id || 0,
        title:
          "ОТМда АКТ жорий этиш ва ривожлантириш юзасидан раҳбарият орасидан масъул шахснинг мавжудлиги",
        url: "iTInternalOrder",
        values: [
          {
            title: "Ички тасдиқланган буйруқ рақами",
            url: "internalOrderNumber",
            count: data1_2?.internalOrderNumber || `Мавжуд емас`,
          },
          {
            title: "Тасдиқланган санаси",
            url: "approvalDate",
            count: data1_2?.approvalDate || `Мавжуд емас`,
          },
          {
            title: "Ички буйруқ файли",
            url: "orderFile",
            count: data1_2?.orderFile || `Мавжуд емас`,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "documentLink",
            count: data1_2?.documentLink || `Мавжуд емас`,
          },
        ],
      },
      {
        id: data1_3?.id || 0,
        title:
          "ОТМда АКТ жорий этиш ва ривожлантириш юзасидан масъул бўлган ихтисослаштирилган таркибий бўлинманинг ёки тегишли хизматлар аутсорсинги бўйича шартноманинг мавжудлиги",
        url: "iTDevelopmentContract",
        values: [
          {
            title: "Шартнома рақами",
            url: "contractNumber",
            count: data1_3?.contractNumber || `Мавжуд емас`,
          },
          {
            title: "Тасдиқланган санаси",
            url: "contractApprovalDate",
            count: data1_3?.contractApprovalDate || `Мавжуд емас`,
          },
          {
            title: "Шартнома файли",
            url: "contractFile",
            count: data1_3?.contractFile || `Мавжуд емас`,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "contractDocumentLink",
            count: data1_3?.contractDocumentLink || `Мавжуд емас`,
          },
        ],
      },
    ],
  };
};
