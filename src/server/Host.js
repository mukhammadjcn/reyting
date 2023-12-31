import { message } from "antd";
import axios from "axios";

// Host URL
export let host = "https://akt.edu.uz/api/";

// Names for local usage
export const ROLE = "role";
export const ACCESS = "access";
export const REFRESH = "refresh";
export const UNIVERSITY = "univer";

// Get cookies
export const role = localStorage.getItem(ROLE);
export const token = localStorage.getItem(ACCESS);
export const refresh = localStorage.getItem(REFRESH);

// Set localstorage items
export const getLocal = (name) => localStorage.getItem(name);
export const removeLocal = (name) => localStorage.removeItem(name);
export const setLocal = (name, value) => localStorage.setItem(name, value);

export const isAdmin = () => token && role == "ROLE_OTMADMIN";

// Requests header
export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
};
export let headersNoAuth = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
};

export let headersMultipart = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "multipart/form-data",
  Authorization: token ? `Bearer ${token}` : "",
};

// Axios instance
export let axiosInstance = axios.create({
  headers,
  baseURL: host,
  timeout: 100000,
});
export let axiosInstanceNoAuth = axios.create({
  headersNoAuth,
  baseURL: host,
  timeout: 100000,
});

export const HttpRequestHub = (config = null) => {
  return axiosInstance(config);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      let obj = error.response.data;
      if (error.response.status === 401) {
        removeLocal(ROLE);
        removeLocal(ACCESS);
        window.location.href = "/";
      }
      {
        message.info(obj?.message);
      }
    }
    throw error;
  }
);
