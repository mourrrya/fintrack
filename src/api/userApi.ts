import { AxiosResponse } from "axios";
import { IUser } from "../types/userTypes";
import { api } from "./api";

export class UserApi {
  static signup(
    username: string,
    password: string
  ): Promise<AxiosResponse<IUser> | void> {
    const payload = { username, password };
    return api
      .post("/user/signup", payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static login(
    username: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    const payload = { username: username.trim(), password };
    return api.post("/user/login", payload).then((res) => {
      return res;
    });
  }

  static user(): Promise<AxiosResponse<IUser>> {
    return api.get("/user").then((res) => {
      return res;
    });
  }

  static refreshToken(refreshToken: string): Promise<AxiosResponse<IUser>> {
    return api.post("/user/refresh-token", { refreshToken }).then((res) => {
      return res;
    });
  }
}
