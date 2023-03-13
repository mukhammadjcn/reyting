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
  return CreateFunc(`admin/createDocument?newsId=${id}`, data);
};

// Get news
export const GetNewsConfig = (url, data) => {
  return CreateFunc(`admin/${url ?? ""}`, data);
};
export const GetNewsIdConfig = (id, data) => {
  return CreateFunc(`admin/${id}`, data);
};
