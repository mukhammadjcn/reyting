export interface IDirections {
  key: string;
  name: string;
  subject_number: number;
}

export interface IList {
  label: string;
  value: string;
}

export interface ISubject {
  key: string;
  name: string;
  status: boolean;
  theme_number: number;
  resurs_number: number;
}

export interface ITheme {
  themeId: number;
  themeName: string;
}

// -------------------------------------
export interface IUniverList {
  key: string;
  eduName: string;
  district: string;
  address: string;
  eduId: string;
  fullName: string;
  phoneNumber: string;
  pinfl: string;
  count: number;
}

export interface IBoshqarmaList {
  key: string;
  id: number;
  address: string;
  count: number;
  phoneNumber: string;
  fullName: string;
  regionId: number;
  pinfl: string;
}

// ------------------------------------------
export interface IUser {
  id: number;
  fullName: string;
  phoneNumber: string;
  pinfl: string;
  gender: string;
  serialNumber: string;
  eduName: string;
  region: null | number;
  eduAddress: string;
  permanentAddress: string;
  photo: string;
  direction: string;
  academicGroupName: string;
  enrollment: string;
}

export interface ISubject {
  subjectDirectionEduId: number;
  name: string;
  countTheme: number;
  countResource: number;
}

export interface IApplication {
  user: IUser;
  subjects: ISubject[];
}

export interface IOffer {
  id: number;
  key: number;
  phoneNumber: string;
  email: string;
  fullName: string;
  text: string;
  answer: string;
}

export interface INews {
  id: number;
  titleUZ: string;
  titleRU: string;
  titleEN: string;
  anonsUZ: string;
  anonsRU: string;
  anonsEN: string;
  textUZ: string;
  textRU: string;
  textEN: string;
  createdDate: string;
  isPublic: false;
  documentResponses: IImage[];
}

export interface IMember {
  id: number;
  fullName: string;
  workPlace: string;
  documentResponses: IImage[];
}

export interface IImage {
  id: number;
  fileUrl: string;
  fileName: string;
}
