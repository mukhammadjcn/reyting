import { message, Radio } from "antd";
import { ACCESS, REFRESH, role, ROLE } from "../server/Host";

export const CatchError = async (error: any) => {
  if (error.response) {
    let obj = error.response.data;
    if (error.response.status === 401) {
      localStorage.removeItem(ACCESS);
      localStorage.removeItem(REFRESH);
      localStorage.removeItem(ROLE);
      window.location.href = "/";
      // Displaying error messages
      for (let key in obj) {
        if (key !== "status") {
          if (obj[key] === "Not found.") {
            message.warning(
              `Sizning raqamingiz bazada yo'q. Iltimos ro'yhatdan o'ting !`
            );
          } else {
            if (key === "error") {
              message.error(obj.error.detail);
            }
            if (obj[key].length > 0 && typeof obj[key] === "string") {
              message.error(obj[key]);
            }
            if (Array.isArray(obj[key])) {
              obj[key]?.forEach((item: any) => {
                item.length > 0 && message.error(item);
              });
            }
          }
        }
      }
    } else {
      if (obj?.code == "token_not_valid") {
        localStorage.removeItem(ROLE);
        localStorage.removeItem(ACCESS);
        localStorage.removeItem(REFRESH);
        message.info("Kirish vaqti tugadi, qaytadan kiring !");
        await new Promise((r: any) => setTimeout(r, 2000));
        window.location.href = "/";
      } else {
        if (role !== "ministry") {
          for (let key in obj) {
            if (key !== "status") {
              if (obj[key] === "Not found.") {
                message.warning(
                  `Sizning raqamingiz bazada yo'q. Iltimos ro'yhatdan o'ting !`
                );
              } else {
                if (key === "error") {
                  message.error(obj.error.detail);
                }
                if (obj[key].length > 0 && typeof obj[key] === "string") {
                  if (obj[key] === "Siz universitet admini emassiz") {
                    message.info('"Siz universitet admini emassiz"');
                    await new Promise((r) => setTimeout(r, 3000));
                    localStorage.removeItem(ACCESS);
                    localStorage.removeItem(REFRESH);
                    localStorage.removeItem(ROLE);
                    window.location.href = "/";
                  } else {
                    message.error(obj[key]);
                  }
                }
                if (Array.isArray(obj[key])) {
                  obj[key]?.forEach((item: any) => {
                    item.length > 0 && message.error(item);
                  });
                }
              }
            }
          }
        }
      }
    }
  }
};

// Give edu lang
export const GiveLang = (key: number) => {
  return key == 1 ? `O'zbekcha` : key == 2 ? `Ruscha` : "Qoraqalpoqcha";
};

// Pretty phone
export const PrettyPhone = (phone: string) => {
  return `998${phone.replace("(", "").replace(")", "").replaceAll(" ", "")}`;
};

export const DatesFields = [
  `issueDate`,
  `orderDate`,
  `orderApprovedDate`,
  `staffListOrderDate`,
  `statuteApprovedDate`,
  `retrainingInitialDate`,
  `retrainingFinishDate`,
  `contractDate`,
  `expertiseConclusionDate`,
  `orderApprovedDate`,
  `measureApprovalDate`,
  `approvalDate`,
  `contractApprovalDate`,
  `implementationDate`,
  `responsiblePersonPassportIssuedDate`,
];
export const BooleanFiels = [
  `existSSLCertificate`,
  `educationType`,
  `videoSurveillanceSystemState`,
  `typeIS`,
  `paidStateIS`,
];
export const TextAreaFiels = [
  `isaid`,
  `integratedIS`,
  `automatedServices`,
  `aidIS`,
  `integratedIS`,
  `automatedServices`,
  `electronServiceAid`,
  `integratedISToElectronService`,
];
export const NumberFiels = [
  `userCount`,
  `computerCount`,
  `totalTeacherCount`,
  `totalStudentCount`,
  `educationalBuildingCount`,
  `buildingCount`,
  `dormitoryCount`,
  `otherBuildingCount`,
  `buildingWithOpticCount`,
  `totalBuildingCount`,
  `projectorCount`,
  `blackboardCount`,
  `screenCount`,
  `classRoomCount`,
  `modernISCount`,
  `totalSpecialityCount`,
  `staffCount`,
  `licenceCount`,
  `deviceCount`,
  `responsiblePersonPnfl`,
  `retrainingStaffCount`,
  `chiefPhone`,
  `staffPhone`,
  `hemisTotalTeacherCount`,
  `hemisTotalStudentCount`,
];
export const FileFiels = [
  `certificateFile`,
  `orderFile`,
  `staffJournalFile`,
  `statuteFile`,
  `retrainingCertificate`,
  `contractFile`,
  `expertiseConclusionFile`,
  `backupScheduleFile`,
  `journalFile`,
  `protectionToolsWithPasswordPhoto`,
  `automaticPasswordChangePhoto`,
  `journalInputOutputToServerRoom`,
  `licenceCopy`,
  `measureFile`,
  `staffOrderFile`,
  `document`,
  `implementationOrderFile`,
  `documentRelatedToElectronicService`,
];
export const HemisList = [
  `teacherEquipmentRate`,
  `studentEquipmentRate`,
  `internetSpeed`,
  `wirelessInternetRate`,
  `ITStaffRate`,
];
export const DisabledFiels = [
  `hemisTotalTeacherCount`,
  `hemisTotalStudentCount`,
];
export const NotRequiredFiels = [
  `measureDocumentLink`,
  `documentLink`,
  `contractDocumentLink`,
  `linkForCertificate`,
  `implementationOrderFile`,
  `document`,
  `documentRelatedToElectronicService`,
];

export const DateFormat = `YYYY-MM-DD`;

// Rendering in tables
export const GiveBooleanValue = (key: number, name: string) => {
  if (name === `existSSLCertificate`) {
    return key == 1 ? "Mavjud" : "Mavjud emas";
  }
  if (name === `educationType`) {
    return key == 1 ? "Online" : "Offline";
  }
  if (name === `videoSurveillanceSystemState`) {
    return key == 1
      ? "Mavjud va ishlaydi"
      : key == 2
      ? "Mavjud lekin ishlamaydi"
      : "Mavjud emas";
  }
  if (name === `typeIS`) {
    return key == 1 ? "Veb-sayt" : key == 2 ? "Portal" : "Axborot tizim";
  }
  if (name === `paidStateIS`) {
    return key == 1 ? "Pullik" : "Bepul";
  }
};

// Rendering in modals
export const GiveBooleanRender = (name: string) => {
  if (name === `existSSLCertificate`) {
    return (
      <Radio.Group buttonStyle="solid" size="large">
        <Radio.Button value={true}>Mavjud</Radio.Button>
        <Radio.Button value={false}>Mavjud emas</Radio.Button>
      </Radio.Group>
    );
  }
  if (name === `educationType`) {
    return (
      <Radio.Group buttonStyle="solid" size="large">
        <Radio.Button value={"1"}>Online</Radio.Button>
        <Radio.Button value={"2"}>Offline</Radio.Button>
      </Radio.Group>
    );
  }
  if (name === `videoSurveillanceSystemState`) {
    return (
      <Radio.Group buttonStyle="solid" size="large">
        <Radio.Button value={"1"}>Mavjud va ishlaydi</Radio.Button>
        <Radio.Button value={"2"}>Mavjud lekin ishlamaydi</Radio.Button>
        <Radio.Button value={"3"}>Mavjud emas</Radio.Button>
      </Radio.Group>
    );
  }
  if (name === `typeIS`) {
    return (
      <Radio.Group buttonStyle="solid" size="large">
        <Radio.Button value={"1"}>Veb-sayt</Radio.Button>
        <Radio.Button value={"2"}>Portal</Radio.Button>
        <Radio.Button value={"3"}>Axborot tizim</Radio.Button>
      </Radio.Group>
    );
  }
  if (name === `paidStateIS`) {
    return (
      <Radio.Group buttonStyle="solid" size="large">
        <Radio.Button value={"1"}>Pullik</Radio.Button>
        <Radio.Button value={"2"}>Bepul</Radio.Button>
      </Radio.Group>
    );
  }
};
