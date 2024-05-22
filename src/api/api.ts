import axios, { AxiosError } from "axios";
import { getAccessToken, removeAccessToken } from "../helper/cookies";

console.log("REACT_APP_SERVER_URL", process.env.REACT_APP_SERVER_URL);

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

api.interceptors.request.use(
  (req) => {
    req.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      removeAccessToken();
    }
    return Promise.reject(error);
  }
);
