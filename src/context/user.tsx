import { ReactNode, createContext, useContext, useReducer } from "react";
import { InitialUserState, UserAction, UserContext } from "../types/userTypes";

const userCtx = createContext<UserContext>({} as UserContext);

const userReducer = (
  state: InitialUserState,
  action: UserAction
): InitialUserState => {
  switch (action.type) {
    case "USER": {
      return { ...state, user: action.payload };
    }

    default: {
      return state;
    }
  }
};

const initialUserState = {
  user: undefined,
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  return (
    <userCtx.Provider value={{ userState, userDispatch }}>
      {children}
    </userCtx.Provider>
  );
};

export const userContext = () => {
  const context = useContext(userCtx);
  return context;
};
