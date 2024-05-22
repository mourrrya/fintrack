import { displayError } from "../helper/helper";
import { IUser } from "../types/userTypes";
import { api } from "./api";

export class UserApi {
  static signup(username: string, password: string): Promise<IUser> {
    const payload = { username, password };
    return api
      .post("/user/signup", payload)
      .then((res) => res.data)
      .catch(displayError);
  }

  static login(username: string, password: string): Promise<IUser> {
    const payload = { username: username.trim(), password };
    return api
      .post("/user/login", payload)
      .then((res) => res.data)
      .catch(displayError);
  }

  static user(): Promise<IUser> {
    return api.get("/user").then((res) => res.data);
  }

  static refreshToken(refreshToken: string): Promise<IUser> {
    return api
      .post("/user/refresh-token", { refreshToken })
      .then((res) => res.data);
  }
}
