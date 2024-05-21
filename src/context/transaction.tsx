import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  InitialTransactionState,
  TransactionAction,
  TransactionContext,
} from "../types/transactionType";

const transactionCtx = createContext<TransactionContext>(
  {} as TransactionContext
);

const userReducer = (
  state: InitialTransactionState,
  action: TransactionAction
) => {
  switch (action.type) {
    case "TRANSACTION": {
      return state;
    }
    case "TRANSACTION_MODAL": {
      state.transactionModal = action.payload;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

const initialTransactionState = {};

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactionState, dispatchTransaction] = useReducer(
    userReducer,
    initialTransactionState
  );

  return (
    <transactionCtx.Provider value={{ transactionState, dispatchTransaction }}>
      {children}
    </transactionCtx.Provider>
  );
};

export const transactionContext = () => {
  const context = useContext(transactionCtx);
  return context;
};
