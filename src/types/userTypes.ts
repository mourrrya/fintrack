import { Dispatch } from "react";

export interface IUser {
  id?: string;
  username: string;
  accessToken: string;
}

export interface InitialUserState {
  user?: IUser;
}

export type UserAction =
  | { type: "SIGNUP"; payload: IUser }
  | { type: "USER"; payload: IUser }
  | { type: "LOGIN"; payload: IUser };

export interface UserContext {
  userState: InitialUserState;
  userDispatch: Dispatch<UserAction>
} 
