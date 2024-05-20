import { AxiosResponse } from "axios";
import { api } from "./api";
import { IUser } from "../types/userTypes";

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
  ): Promise<AxiosResponse<IUser> | void> {
    const payload = { username, password };
    return api
      .post("/user/login", payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static user() {
    return api
      .get("/user")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
