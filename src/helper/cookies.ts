import Cookies from "js-cookie";
import { CONSTANT_COOKIE } from "../constants/constants";

export const getAccessToken = () => {
  return Cookies.get(CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY);
};
export const setAccessToken = (accessToken: string) => {
  return Cookies.set(CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY, accessToken);
};
export const removeAccessToken = () => {
  return Cookies.remove(CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY);
};

export const getRefreshToken = () => {
  return Cookies.get(CONSTANT_COOKIE.REFRESH_TOKEN_COOKIE_KEY);
};
export const setRefreshToken = (refreshToken: string) => {
  return Cookies.set(CONSTANT_COOKIE.REFRESH_TOKEN_COOKIE_KEY, refreshToken);
};
export const removeRefreshToken = () => {
  return Cookies.remove(CONSTANT_COOKIE.REFRESH_TOKEN_COOKIE_KEY);
};
