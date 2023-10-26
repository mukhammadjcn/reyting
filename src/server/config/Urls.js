import { axiosInstanceNoAuth } from "../Host";
import { GetFunc, EditFunc, CreateFunc, DeleteFunc } from "./Requests";

// Login Configs ----------------------------------------------------------
export const SignInOneIDAdminConfig = (code) => {
  return CreateFunc(`public/auth/signIn?code=${code}`);
};

// Page 1  urls
export const Page1_1 = (param = "") => {
  return GetFunc(`teacherEquipmentRate?size=30${param}`);
};
export const Page1_2 = (param = "") => {
  return GetFunc(`studentEquipmentRate?size=30${param}`);
};
export const Page1_3 = (param = "") => {
  return GetFunc(`internetConnectedBuildingRate?size=30${param}`);
};
export const Page1_4 = (param = "") => {
  return GetFunc(`fiberOpticCoverageRate?size=30${param}`);
};
export const Page1_5 = (param = "") => {
  return GetFunc(`internetSpeed?size=30${param}`);
};
export const Page1_6 = (param = "") => {
  return GetFunc(`wirelessInternetRate?size=30${param}`);
};
export const Page1_7 = (param = "") => {
  return GetFunc(`auditoriumEquipmentElectronicDevice?size=30${param}`);
};

// Page 2  urls
export const Page2_1 = (param = "") => {
  return GetFunc(`iSForAutomateProcess?size=30${param}`);
};
export const Page2_2 = (param = "") => {
  return GetFunc(`initiativeIS?size=30${param}`);
};
// export const Page2_3 = (param = "") => {
//   return GetFunc(`internetConnectedBuildingRate?size=30${param}`);
// };
// export const Page2_4 = (param = "") => {
//   return GetFunc(`fiberOpticCoverageRate?size=30${param}`);
// };
export const Page2_5 = (param = "") => {
  return GetFunc(`electronService?size=30${param}`);
};
export const Page2_6 = (param = "") => {
  return GetFunc(`modernSpecializedEquipmentRate?size=30${param}`);
};

// Page 3  urls
export const Page3_1 = (param = "") => {
  return GetFunc(`ITStaffRate?size=30${param}`);
};
export const Page3_2 = (param = "") => {
  return GetFunc(`ITRetrainedStaffRate?size=30${param}`);
};

// Page 6  urls
export const Page6_1 = (param = "") => {
  return GetFunc(`iTDevelopmentMeasure?size=30${param}`);
};
export const Page6_2 = (param = "") => {
  return GetFunc(`iTInternalOrder?size=30${param}`);
};
export const Page6_3 = (param = "") => {
  return GetFunc(`iTDevelopmentContract?size=30${param}`);
};
