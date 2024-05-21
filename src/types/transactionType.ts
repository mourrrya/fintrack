import { Dispatch } from "react";

export type TransactionType = "INCOME" | "EXPENSE";

export interface ITransaction {
  id?: number;
  title: string;
  transactionType: TransactionType;
  transaction_amount: number;
}

export interface TransactionFieldType {
  id?: number;
  title: string;
  amount: string;
}

export interface InitialTransactionState {
  transaction?: ITransaction;
  transactionModal?: TransactionType;
}

export type TransactionAction =
  | {
      type: "TRANSACTION";
      payload: ITransaction;
    }
  | {
      type: "TRANSACTION_MODAL";
      payload?: TransactionType;
    };

export interface TransactionContext {
  transactionState: InitialTransactionState;
  dispatchTransaction: Dispatch<TransactionAction>;
}
