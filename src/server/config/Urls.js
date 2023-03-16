import { axiosInstanceNoAuth } from "../Host";
import { GetFunc, EditFunc, CreateFunc, DeleteFunc } from "./Requests";

// Login Configs ----------------------------------------------------------
export const SignInOneIDAdminConfig = (code) => {
  return CreateFunc(`/auth/signIn?code=${code}`);
};

// Create news
export const CreateNewsConfig = (data) => {
  return CreateFunc(`admin/createNews`, data);
};
export const UpdateNewsConfig = (id, data) => {
  return EditFunc(`admin/updateNews/${id}`, data);
};
export const CreateImageConfig = (id, data) => {
  return CreateFunc(`admin/createDocument?newsId=${id}`, data);
};

// Get news
export const GetNewsConfig = (url, data) => {
  const config = {
    method: "GET",
    data,
    url: `admin/news${url ?? ""}`,
  };
  return axiosInstanceNoAuth(config);
};
export const GetNewsIdConfig = (id, data) => {
  const config = {
    method: "GET",
    data,
    url: `admin/news/${id}`,
  };
  return axiosInstanceNoAuth(config);
};
export const DelNewsIdConfig = (id) => {
  return DeleteFunc(`admin/news/${id}`);
};

// Get offers page
export const GetOffersConfig = (param = "") => {
  return GetFunc(`admin/offers?size=20${param}`);
};
export const SendOffersConfig = (param = "") => {
  return EditFunc(`admin/sendAnswer${param}`, "", "PATCH");
};

// Members api
export const CreateMemberConfig = (data) => {
  return CreateFunc(`admin/createMember`, data);
};
export const UpdateMemberConfig = (id, data) => {
  return EditFunc(`admin/updateMember/${id}`, data);
};
export const GetMemberConfig = () => {
  return GetFunc(`admin/members`);
};
export const CreateMemberImageConfig = (id, data) => {
  return CreateFunc(`admin/createDocument?memberId=${id}`, data);
};
export const DelMembersIdConfig = (id) => {
  return DeleteFunc(`admin/members/${id}`);
};

// User side APIIS
export const CreateOfferConfig = (data) => {
  const config = {
    data,
    method: "POST",
    url: `auth/createOffer`,
  };
  return axiosInstanceNoAuth(config);
};
