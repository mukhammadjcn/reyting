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
  const data1_1 = await Page1_1(param);
  const data1_2 = await Page1_2(param);
  const data1_3 = await Page1_3(param);
  const data1_4 = await Page1_4(param);
  const data1_5 = await Page1_5(param);
  const data1_6 = await Page1_6(param);
  const data1_7 = await Page1_7(param);

  return {
    cardType: "small",
    title: "АКТ инфратузилмаси ҳолати",
    cards: [
      {
        url: "teacherEquipmentRate",
        title:
          "Профессор-ўқитyвчи ва ходимларнинг компьютер билан таъминланганлик холати",
        values: [
          {
            title:
              "Профессор-ўқитувчи ва ходимлар учун ажратилган компьютерлар сони",
            count: data1_1?.data?.content?.[0].computerCount,
            url: "computerCount",
          },
          {
            title: "Профессор-ўқитувчи ва ходимлар умумий сони",
            count: data1_1?.data?.content?.[0].totalTeacherCount,
            url: "totalTeacherCount",
          },
        ],
      },
      {
        url: "studentEquipmentRate",
        title: "Талабаларнинг компьютер билан таъминланганлик холати",
        values: [
          {
            title: "Талабалар фойдаланиши учун ажратилган компьютерлар сони",
            count: data1_2?.data?.content?.[0].computerCount,
            url: "computerCount",
          },
          {
            title: "Талабаларнинг умумий сони",
            count: data1_2?.data?.content?.[0].totalStudentCount,
            url: "totalStudentCount",
          },
        ],
      },
      {
        url: "internetConnectedBuildingRate",
        title: "Интернет уланган ўқув, ТТЖ ва бошқа бинолар улуши",
        values: [
          {
            title: "Интернет уланган бинолар сони (Шартнома uлова қuлинади)",
            count: data1_3?.data?.content?.[0].educationalBuildingCount,
            url: "educationalBuildingCount",
          },
          {
            title: "Ўқув бинолари сони",
            count: data1_3?.data?.content?.[0].buildingCount,
            url: "buildingCount",
          },
          {
            title: "ТТЖлар сони",
            count: data1_3?.data?.content?.[0].dormitoryCount,
            url: "dormitoryCount",
          },
          {
            title: "Бошқа бинолар сони",
            count: data1_3?.data?.content?.[0].otherBuildingCount,
            url: "otherBuildingCount",
          },
        ],
      },
      {
        url: "fiberOpticCoverageRate",
        title: "Оптик толали алоқа линиялари билан қамраб олинганлик улуши",
        values: [
          {
            title:
              "Оптик толали интернет уланган бинолар сони (Шартнома uлова қилинади)",
            count: data1_4?.data?.content?.[0].buildingWithOpticCount,
            url: "buildingWithOpticCount",
          },
          {
            title: "Биноларнинг умумий сони",
            count: data1_4?.data?.content?.[0].totalBuildingCount,
            url: "totalBuildingCount",
          },
        ],
      },
      {
        title: "Интернет тезлиги",
        url: "internetSpeed",
        values: [
          {
            title: "Ўқув биноларида интернетга уланиш ўртача тезлиги",
            url: "averageInternetSpeed",
            count: data1_5?.data?.content?.[0].averageInternetSpeed,
          },
          {
            title: "Талабаларнинг умумий сони",
            url: "totalStudentCount",
            count: data1_5?.data?.content?.[0].totalStudentCount,
          },
        ],
      },
      {
        url: "wirelessInternetRate",
        title: "Симсиз интернет қамрови ва сифати",
        values: [
          {
            title: "Симсиз интернет тарқатувчи қурилмалар сони",
            count: data1_6?.data?.content?.[0].deviceCount,
            url: "deviceCount",
          },
          {
            title: "Талабаларнинг умумий сони",
            count: data1_6?.data?.content?.[0].totalStudentCount,
            url: "totalStudentCount",
          },
          {
            title: "Профессор-ўқитувчи ва ходимлар умумий сони",
            count: data1_6?.data?.content?.[0].totalTeacherCount,
            url: "totalTeacherCount",
          },
        ],
      },
      {
        url: "auditoriumEquipmentElectronicDevice",
        title:
          "Ўқув аудиторияларининг проектор, интерактив доска, катта диагоналли экранлар билан жихозланганлиги",
        values: [
          {
            title: "Ўқув аудиторияларидаги проекторлар сони",
            count: data1_7?.data?.content?.[0].projectorCount,
            url: "projectorCount",
          },
          {
            title: "Ўқув аудиторияларидагиинтерактив доскалар сони",
            count: data1_7?.data?.content?.[0].blackboardCount,
            url: "blackboardCount",
          },
          {
            title: "Ўқув аудиторияларидаги катта диагоналли экранлар сони",
            count: data1_7?.data?.content?.[0].screenCount,
            url: "screenCount",
          },
          {
            title: "Ўқув, аудиториялари сони",
            count: data1_7?.data?.content?.[0].classRoomCount,
            url: "classRoomCount",
          },
        ],
      },
    ],
  };
};

export const GetPage2 = async (param = "") => {
  const data1_1 = await Page2_1(param);
  const data1_2 = await Page2_2(param);
  const data1_5 = await Page2_5(param);
  const data1_6 = await Page2_6(param);

  return {
    cardType: "big",
    title: "ОТМ ахборот тизимлари, ахборот ресурслари ҳолати",
    cards: [
      {
        title:
          "ОТМ фаолияти жараёнларини автоматлаштиришга йўналтирилган АТлар сони",
        url: "iSForAutomateProcess",
        values: [
          {
            title: "АТ ёки модул номи",
            url: "isname",
            count: data1_1?.data?.content[0]?.isname,
          },
          {
            title: "АТ ёки модул домени (линки)",
            url: "isdomain",
            count: data1_1?.data?.content[0]?.isdomain,
          },
          {
            title: "АТ ёки модулнинг мақсад ва вазифалари",
            url: "isaid",
            count: data1_1?.data?.content[0]?.isaid,
          },
          {
            title: "Интеграция қилинган ахборот тизимлари рўйхати",
            url: "integratedIS",
            count: data1_1?.data?.content[0]?.integratedIS,
          },
          {
            title: "Автоматлаштирилган хизматлар (функциялар)",
            url: "automatedServices",
            count: data1_1?.data?.content[0]?.automatedServices,
          },
        ],
      },
      {
        title:
          "ОТМ ўз ташаббуси асосида ишлаб чиққан ва жорий қилган АТ лари сони",
        url: "initiativeIS",
        values: [
          {
            title: "АТ тўлиқ номланиши",
            url: "fullNameIS",
            count: data1_2?.data?.content[0]?.fullNameIS,
          },
          {
            title: "АТ га ҳавола (линк)",
            url: "linkIS",
            count: data1_2?.data?.content[0]?.linkIS,
          },
          {
            title: "АТнинг мақсад ва вазифалари",
            url: "aidIS",
            count: data1_2?.data?.content[0]?.aidIS,
          },
          {
            title: "Интеграция қилинган ахборот тизимлари рўйхати",
            url: "integratedIS",
            count: data1_2?.data?.content[0]?.integratedIS,
          },
          {
            title: "Автоматлаштирилган хизматлар (функциялар)",
            url: "automatedServices",
            count: data1_2?.data?.content[0]?.automatedServices,
          },
          {
            title: "Фойдаланувчилар сони",
            url: "userCount",
            count: data1_2?.data?.content[0]?.userCount,
          },
          {
            title:
              "АТга тегишли хужжатлар (эксперт хулосаси, гувоҳнома, патент, сертификат ва ҳ.к.)",
            url: "documentUrl",
            count: data1_2?.data?.content[0]?.documentUrl,
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
        title: "Тақдим қилинаётган электрон хизматлар сони",
        values: [
          {
            title: "Электрон хизмат номи",
            url: "electronService",
            count: data1_5?.data?.content[0]?.electronServiceName,
          },
          {
            title: "Электрон хизматга ҳавола (линк)",
            url: "electronServiceLink",
            count: data1_5?.data?.content[0]?.electronServiceLink,
          },
          {
            title: "Электрон хизматнинг мақсад ва вазифалари",
            url: "electronServiceAid",
            count: data1_5?.data?.content[0]?.electronServiceAid,
          },
          {
            title:
              "Электрон хизматни ишга туширишда интеграция қилинган АТлари рўйхати",
            url: "integratedISToElectronService",
            count: data1_5?.data?.content[0]?.integratedISToElectronService,
          },
          {
            title: "Электрон хизматдан фойдаланганлар сони",
            curl: "userCount",
            count: data1_5?.data?.content[0]?.userCount,
          },
          {
            title:
              "Электрон хизматга тегишли хужжатлар (эксперт хулосаси, гувоҳнома, патент, сертификат ва ҳ.к.)",
            url: "documentRelatedToElectronicServiceUrl",
            count:
              data1_5?.data?.content[0]?.documentRelatedToElectronicServiceUrl,
          },
        ],
      },
      {
        url: "modernSpecializedEquipmentRate",
        title:
          "ОТМ даги йўналиш ва мутахассисликлар учун йўналтирилган махсус замонавий АТ ларидан фойдаланиш даражаси",
        values: [
          {
            title: "ОТМ ўқув жараёнида фойдаланиладиган замонавий АТ лари сони",
            url: "modernISCount",
            count: data1_6?.data?.content[0]?.modernISCount,
          },
          {
            title: "ОТМ даги йўналиш ва мутахассисликларнинг умумий сони",
            url: "totalSpecialityCount",
            count: data1_6?.data?.content[0]?.totalSpecialityCount,
          },
        ],
      },
    ],
  };
};

export const GetPage3 = async (param = "") => {
  const data1_1 = await Page3_1(param);
  const data1_2 = await Page3_2(param);

  return {
    cardType: "small",
    title: "ОТМ даги АКТ соҳасидаги инсон капитали ҳолати",
    cards: [
      {
        title: "АКТ бўйича ходимлар улуши (дастурчи ва АКТга масъуллар)",
        url: "ITStaffRate",
        values: [
          {
            title:
              "ОТМ даги АКТ га масъул ходимлар, соха мутахассислари ва қайта тайёрлаш курсларидан ўтган профессор-ўқитувчи хамда ходимлар сони",
            url: "retrainingStaffCount",
            count: data1_1?.data?.content[0]?.retrainingStaffCount,
          },
          {
            title: "Профессор-ўқитyвчи ва ходимлар умумий сони",
            url: "staffCount",
            count: data1_1?.data?.content[0]?.staffCount,
          },
        ],
      },
      {
        title:
          "АКТ бўйича малака оширган, онлайн ёки офлайн курсларни якунлаган ходимлар улуши (АКТ соҳаси мутахассиси бўлмаган ходимлар)",
        url: "ITRetrainedStaffRate",
        values: [
          {
            title: "Сертификат номи",
            url: "certificateName",
            count: data1_2?.data?.content[0]?.certificateName,
          },
          {
            title: "Берилган санаси",
            url: "issueDate",
            count: new Date(
              data1_2?.data?.content[0]?.issueDate
            ).toLocaleDateString(),
          },
          {
            title: "Сертификат файли",
            url: "certificateFile",
            count: data1_2?.data?.content[0]?.certificateFile,
          },
          {
            title: "Сертификатга ҳавола (мавжуд бўлса)",
            url: "linkForCertificate",
            count: data1_2?.data?.content[0]?.linkForCertificate,
          },
        ],
      },
    ],
  };
};

export const GetPage5 = async (param = "") => {
  const data1_1 = await Page5_1(param);
  const data1_2 = await Page5_2(param);
  const data1_3 = await Page5_3(param);
  const data1_4 = await Page5_4(param);
  const data1_5 = await Page5_5(param);
  const data1_6 = await Page5_6(param);
  const data1_7 = await Page5_7(param);
  const data1_8 = await Page5_8(param);
  const data1_9 = await Page5_9(param);
  const data1_10 = await Page5_10(param);
  const data1_11 = await Page5_11(param);
  const data1_12 = await Page5_12(param);
  const data1_13 = await Page5_13(param);

  return {
    cardType: "big",
    title: "Ахборот хавфсизлигини таъминлашдаги меъёрий тадбирлар",
    cards: [
      {
        title:
          "Ахборот хавфсизлиги талаблари тасдиқланганлиги ва ходимларни таништирилганлиги",
        url: "approvedISecurityRequirement",
        values: [
          {
            title: "Ахборот хавфсизлиги талаблари тасдиқланган буйруқ санаси",
            url: "orderDate",
            count: data1_1?.data?.content[0]?.orderDate,
          },
          {
            title: "Ахборот хавфсизлиги талаблари тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_1?.data?.content[0]?.orderNumber,
          },
          {
            title: "Буйруқ файли",
            url: "orderFileUrl",
            count: data1_1?.data?.content[0]?.orderFileUrl,
          },
          {
            title:
              "Ходимларнинг ахборот хавфсизлиги талаблари билан танишганлигини қайд қилиш журналининг файли (скайнер вариантда)",
            url: "staffJournalFileUrl",
            count: data1_1?.data?.content[0]?.staffJournalFileUrl,
          },
        ],
      },
      {
        title:
          "Конфиденциал маълумотлар ҳажми ва рўйхати, ходимлар билан конфиденциаллик келишуви (низоми) мавжудлиги",
        url: "confidentialDataStatute",
        values: [
          {
            title:
              "Конфиденциал маълумотларнинг ҳажми ва рўйхати тасдиқланган буйруқ санаси",
            url: "orderApprovedDate",
            count: data1_2?.data?.content[0]?.orderApprovedDate,
          },
          {
            title:
              "Конфиденциал маълумотларнинг ҳажми ва рўйхати тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_2?.data?.content[0]?.orderNumber,
          },
          {
            title: "Буйруқ файли",
            url: "orderFileUrl",
            count: data1_2?.data?.content[0]?.orderFileUrl,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати тасдиқланган буйруқ санаси",
            url: "staffListOrderDate",
            count: data1_2?.data?.content[0]?.staffListOrderDate,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати  тасдиқланган буйруқ рақами",
            url: "staffListOrderNumber",
            count: data1_2?.data?.content[0]?.staffListOrderNumber,
          },
          {
            title:
              "Конфиденциал маълумотлардан фойдаланишга рухсат берилган ходимлар рўйхати  тасдиқланган буйруқ файли",
            url: "staffOrderFileUrl",
            count: data1_2?.data?.content[0]?.staffOrderFileUrl,
          },
          {
            title:
              "Ходимлар билан конфиденциаллик келишуви бўйича низом тасдиқланган санаси",
            url: "statuteDate",
            count: data1_2?.data?.content[0]?.statuteDate,
          },
          {
            title:
              "Ходимлар билан конфиденциаллик келишуви бўйича низом рақами",
            url: "statuteNumber",
            count: data1_2?.data?.content[0]?.statuteNumber,
          },
          {
            title: "Ходимлар билан конфиденциаллик келишуви бўйича низом файли",
            url: "statuteFileUrl",
            count: data1_2?.data?.content[0]?.statuteFileUrl,
          },
        ],
      },
      {
        title:
          "Ахборот хавфсизлиги масалалари бўйича масъул раҳбар ҳамда ходимнинг тайинланганлиги",
        url: "iSecurityStaff",
        values: [
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг Ф.И.Ш.",
            url: "chiefFullName",
            count: data1_3?.data?.content[0]?.chiefFullName,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг лавозими",
            url: "chiefRank",
            count: data1_3?.data?.content[0]?.chiefRank,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг телефон рақами",
            url: "chiefPhone",
            count: data1_3?.data?.content[0]?.chiefPhone,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбарнинг электрон почта манзили",
            url: "chiefEmail",
            count: data1_3?.data?.content[0]?.chiefEmail,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг Ф.И.Ш.",
            url: "staffFullName",
            count: data1_3?.data?.content[0]?.staffFullName,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг лавозими",
            url: "staffRank",
            count: data1_3?.data?.content[0]?.staffRank,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг телефон рақами",
            url: "staffPhone",
            count: data1_3?.data?.content[0]?.staffPhone,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул ходимнинг электрон почта манзили",
            url: "staffEmail",
            count: data1_3?.data?.content[0]?.staffEmail,
          },
          {
            title:
              "Ахборот хавфсизлиги масалалари бўйича масъул раҳбар ҳамда ходимнинг тайинланганлиги тўғрисидаги тасдиқланган буйруқ файли",
            url: "orderFileUrl",
            count: data1_3?.data?.content[0]?.orderFile,
          },
        ],
      },
      {
        title:
          "Ахборот хавфсизлиги учун масъул ходимларнинг малака оширганлиги",
        url: "iSecurityStaffRetraining",
        values: [
          {
            title: "Масъул ходим малака оширган ўқув марказининг номи",
            url: "educationalCenterName",
            count: data1_4?.data?.content[0]?.educationalCenterName,
          },
          {
            title: "Малака ошириш тури (онлайн/офлайн)",
            url: "educationType",
            count: data1_4?.data?.content[0]?.educationType,
          },
          {
            title: "Малака ошириш курсининг мавзуси",
            url: "retrainingTheme",
            count: data1_4?.data?.content[0]?.retrainingTheme,
          },
          {
            title: "Малака ошириш курси бошланган сана",
            url: "retrainingInitialDate",
            count: data1_4?.data?.content[0]?.retrainingInitialDate,
          },
          {
            title: "Малака ошириш курси тугаган сана",
            url: "retrainingFinishDate",
            count: data1_4?.data?.content[0]?.retrainingFinishDate,
          },
          {
            title: "Малака оширганлик тўғрисидаги сертификат файли",
            url: "retrainingCertificateUrl",
            count: data1_4?.data?.content[0]?.retrainingCertificate,
          },
        ],
      },
      {
        title:
          "Расмий веб-сайтнинг киберхавфсизлик талабларига кўра экспертизадан ўтказилганлиги (Камида 6 ойда бир марта экспертизадан ўтказиш талаб этилади)",
        url: "websiteSecurityExpertise",
        values: [
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома рақами",
            url: "contractNumber",
            count: data1_5?.data?.content[0]?.contractNumber,
          },
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома санаси",
            url: "contractDate",
            count: data1_5?.data?.content[0]?.contractDate,
          },
          {
            title:
              "Расмий веб-сайтни экспертизадан ўтказиш бўйича тузилган шартнома файли",
            url: "contractFileUrl",
            count: data1_5?.data?.content[0]?.contractFile,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат рақами",
            url: "expertiseConclusionNumber",
            count: data1_5?.data?.content[0]?.expertiseConclusionNumber,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат санаси",
            url: "expertiseConclusionDate",
            count: data1_5?.data?.content[0]?.expertiseConclusionDate,
          },
          {
            title: "Экспертиза хулосаси бўйича расмий хат файли",
            url: "expertiseConclusionFileUrl",
            count: data1_5?.data?.content[0]?.expertiseConclusionFile,
          },
          {
            title: "Заифликлар бартараф этилганлиги бўйича изоҳ",
            url: "commentForEliminatedWeakness",
            count: data1_5?.data?.content[0]?.commentForEliminatedWeakness,
          },
        ],
      },
      {
        title: "Расмий веб-сайт учун SSL сертификат мавжудлиги",
        url: "websiteSSLCertificate",
        values: [
          {
            title:
              "Расмий веб-сайт учун SSL сертификати мавжудлиги (мавжуд, мавжуд эмас)",
            url: "existSSLCertificate",
            count: data1_6?.data?.content[0]?.existSSLCertificate
              ? "Mavjud"
              : "Mavjud emas",
          },
          {
            title: "Исботловчи расмини юклаш ",
            url: "sslCertificatePhotoUrl",
            count: data1_6?.data?.content[0]?.sslCertificatePhoto,
          },
        ],
      },
      {
        title:
          "Ахборот тизимлари ҳамда ресурслари маълумотларининг захира нусхаланиши",
        url: "iSystemAndResourceBackup",
        values: [
          {
            title:
              " Ахборот тизимлари ҳамда ресурслари маълумотларининг захира нусхаланиши режа-жадвалининг файли",
            url: "dataBackupPeriodicity",
            count: data1_7?.data?.content[0]?.dataBackupPeriodicity,
          },
          {
            title: "Маълумотларни захиралаш даврийлиги",
            url: "backupScheduleFileUrl",
            count: data1_7?.data?.content[0]?.backupScheduleFile,
          },
        ],
      },
      {
        title:
          "Конфиденциал ахборотни ташувчи воситаларни ҳисобга олиш ва сақлаш бўйича ишларнинг ташкил қилинганлиги",
        url: "storageConfidentialData",
        values: [
          {
            title:
              "Конфиденциал ахборотларни ташувчи воситаларни ҳисобга олиш журналининг файли (сканер варианти)",
            url: "journalFileUrl",
            count: data1_8?.data?.content[0]?.journalFile,
          },
        ],
      },
      {
        title:
          "Ишчи станциялар ва серверларда паролли ҳимоя воситаларини жорий қилинганлиги",
        url: "serversPasswordProtectionToolsState",
        values: [
          {
            title:
              "Ишчи станциялар ва серверларда паролли ҳимоя воситаларини жорий қилинганлиги (файл ёки расм)",
            url: "protectionToolsWithPasswordPhoto",
            count: data1_9?.data?.content[0]?.protectionToolsWithPasswordPhoto,
          },
          {
            title:
              "Ишчи станцияларда паролларни автоматик ўзгартириш бўйича автоматик сўровлар ва талабларнинг жорий этилганлиги (файл ёки расм)",
            url: "automaticPasswordChangePhoto",
            count: data1_9?.data?.content[0]?.automaticPasswordChangePhoto,
          },
        ],
      },
      {
        title:
          "Сервер хоналарга (Ахборотлаштириш объектлари жойлаштирилган хоналарга) кириш учун рухсат берилган ходимлар тасдиқланганлиги",
        url: "verificationStaffToAccessServerRoom",
        values: [
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ санаси ",
            url: "orderApprovedDate",
            count: data1_10?.data?.content[0]?.orderApprovedDate,
          },
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ рақами",
            url: "orderNumber",
            count: data1_10?.data?.content[0]?.orderNumber,
          },
          {
            title:
              "Сервер хоналарга кириш учун рухсат берилган ходимлар рўйхати тасдиқланган буйруқ файли",
            url: "orderFileUrl",
            count: data1_10?.data?.content[0]?.orderFileUrl,
          },
          {
            title:
              "Сервер хонага кириш/чиқишларни қайд қилиш журнали нусхаси (скайнер файл)",
            url: "journalInputOutputToServerRoomUrl",
            count:
              data1_10?.data?.content[0]?.journalInputOutputToServerRoomUrl,
          },
        ],
      },
      {
        title: "Тармоқлараро экран (Firewall) мавжудлиги ",
        url: "firewall",
        values: [
          {
            title: "Тармоқлараро экран қурилмаси/дастурий воситаси номи",
            url: "firewallName",
            count: data1_11?.data?.content[0]?.firewallName,
          },
          {
            title: "Тармоқлараро экран қурилмаси/дастурий воситаси модели",
            url: "firewallModel",
            count: data1_11?.data?.content[0]?.firewallModel,
          },
          {
            title: "Лицензия нусхаси (файли ёки расм)",
            url: "licenceCopyUrl",
            count: data1_11?.data?.content[0]?.licenceCopyUrl,
          },
        ],
      },
      {
        title: "Зарарли дастурлардан ҳимоя воситаларини жорий этилганлиги",
        url: "protectionToolsFromHarmfulProgram",
        values: [
          {
            title: "Дастурий таъминот номи",
            url: "softwareName",
            count: data1_12?.data?.content[0]?.softwareName,
          },
          {
            title: "Дастурий таъминот версияси",
            url: "softwareVersion",
            count: data1_12?.data?.content[0]?.softwareVersion,
          },
          {
            title: "Лицензиялар сони",
            url: "licenceCount",
            count: data1_12?.data?.content[0]?.licenceCount,
          },
          {
            title: "Лицензиянинг амал қилиш муддати",
            url: "licenceValidityPeriod",
            count: data1_12?.data?.content[0]?.licenceValidityPeriod,
          },
          {
            title: "Лицензия нусхаси (файл)",
            url: "licenceCopyUrl",
            count: data1_12?.data?.content[0]?.licenceCopyUrl,
          },
        ],
      },
      {
        title: "Видеоназорат тизими",
        url: "videoSurveillanceSystem",
        values: [
          {
            title:
              "Видеоназорат тизими (мавжуд ва ишлайди, мавжуд лекин ишламайди, мавжуд эмас)",
            url: "videoSurveillanceSystemState",
            count: data1_13?.data?.content[0]?.videoSurveillanceSystemState,
          },
          {
            title: "Исботловчи расмини юклаш",
            url: "proofPhotoUrl",
            count: data1_13?.data?.content[0]?.proofPhoto,
          },
        ],
      },
    ],
  };
};

export const GetPage6 = async (param = "") => {
  const data1_1 = await Page6_1(param);
  const data1_2 = await Page6_2(param);
  const data1_3 = await Page6_3(param);

  return {
    cardType: "small",
    title: "Ташкилий ишлар",
    cards: [
      {
        title:
          "ОТМнинг молиялаштириш манбалари билан тасдиқланган, яқин йиллардаги фаолиятига АКТ жорий этиш ва ривожлантириш тадбирлари режаларининг мавжудлиги",
        url: "iTDevelopmentMeasure",
        values: [
          {
            title: "Чора-тадбир номи",
            url: "measureName",
            count: data1_1?.data?.content[0]?.measureName,
          },
          {
            title: "Тасдиқланган санаси",
            url: "measureApprovalDate",
            count: data1_1?.data?.content[0]?.measureApprovalDate,
          },
          {
            title: "Чора-тадбир файли",
            url: "measureFileUrl",
            count: data1_1?.data?.content[0]?.measureFileUrl,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "measureDocumentLink",
            count: data1_1?.data?.content[0]?.measureDocumentLink,
          },
        ],
      },
      {
        title:
          "ОТМда АКТ жорий этиш ва ривожлантириш юзасидан раҳбарият орасидан масъул шахснинг мавжудлиги",
        url: "iTInternalOrder",
        values: [
          {
            title: "Ички тасдиқланган буйруқ рақами",
            url: "internalOrderNumber",
            count: data1_2?.data?.content[0]?.internalOrderNumber,
          },
          {
            title: "Тасдиқланган санаси",
            url: "approvalDate",
            count: data1_2?.data?.content[0]?.approvalDate,
          },
          {
            title: "Ички буйруқ файли",
            url: "orderFileUrl",
            count: data1_2?.data?.content[0]?.orderFileUrl,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "documentLink",
            count: data1_2?.data?.content[0]?.documentLink,
          },
        ],
      },
      {
        title:
          "ОТМда АКТ жорий этиш ва ривожлантириш юзасидан масъул бўлган ихтисослаштирилган таркибий бўлинманинг ёки тегишли хизматлар аутсорсинги бўйича шартноманинг мавжудлиги",
        url: "iTDevelopmentContract",
        values: [
          {
            title: "Шартнома рақами",
            url: "contractNumber",
            count: data1_3?.data?.content[0]?.contractNumber,
          },
          {
            title: "Тасдиқланган санаси",
            url: "contractApprovalDate",
            count: data1_3?.data?.content[0]?.contractApprovalDate,
          },
          {
            title: "Шартнома файли",
            url: "contractFileUrl",
            count: data1_3?.data?.content[0]?.contractFileUrl,
          },
          {
            title: "Ҳужжат линки (агар мавжуд бўлса)",
            url: "contractDocumentLink",
            count: data1_3?.data?.content[0]?.contractDocumentLink,
          },
        ],
      },
    ],
  };
};
