import { axiosInstanceImage } from "../Host";
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
  return CreateFunc(`admin/updateNews/${id}`, data);
};
export const CreateImageConfig = (id, data) => {
  const config = {
    data,
    method: "POST",
    url: `admin/createDocument?newsId=${id}`,
  };
  return axiosInstanceImage(config);
};

// Get news
export const GetNewsConfig = (url, data) => {
  return GetFunc(`admin/news${url ?? ""}`, data);
};
export const GetNewsIdConfig = (id, data) => {
  return GetFunc(`admin/${id}`, data);
};
export const DelNewsIdConfig = (id) => {
  return DeleteFunc(`admin/${id}`);
};

// Get offers page
export const GetOffersConfig = (param = "") => {
  return GetFunc(`admin/offers?size=20${param}`);
};
