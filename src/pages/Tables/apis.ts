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
  Page6_1,
  Page6_2,
  Page6_3,
} from "src/server/config/Urls";

export const GetPage1 = async () => {
  const data1_1 = await Page1_1();
  const data1_2 = await Page1_2();
  const data1_3 = await Page1_3();
  const data1_4 = await Page1_4();
  const data1_5 = await Page1_5();
  const data1_6 = await Page1_6();
  const data1_7 = await Page1_7();

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

export const GetPage2 = async () => {
  const data1_1 = await Page2_1();
  const data1_2 = await Page2_2();
  const data1_5 = await Page2_5();
  const data1_6 = await Page2_6();

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

export const GetPage3 = async () => {
  const data1_1 = await Page3_1();
  const data1_2 = await Page3_2();

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

export const GetPage6 = async () => {
  const data1_1 = await Page6_1();
  const data1_2 = await Page6_2();
  const data1_3 = await Page6_3();

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
