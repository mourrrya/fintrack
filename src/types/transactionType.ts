import { Dispatch } from "react";

export type transactionType = "INCOME" | "EXPENSE";

export interface ITransaction {
  transactionType: transactionType;
  transaction_amount: number;
}

export interface InitialTransactionState {
  transaction?: ITransaction;
  transactionModal?: transactionType;
}

export type TransactionAction =
  | {
      type: "TRANSACTION";
      payload: ITransaction;
    }
  | {
      type: "TRANSACTION_MODAL";
      payload?: transactionType;
    };

export interface TransactionContext {
  transactionState: InitialTransactionState;
  dispatchTransaction: Dispatch<TransactionAction>;
}
