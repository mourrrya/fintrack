import { Dispatch } from "react";

export type TransactionType = "INCOME" | "EXPENSE";

export interface TransactionFieldType {
  id?: number;
  title: string;
  transactionAmount: number;
}

export interface ITransaction extends TransactionFieldType {
  userId?: number;
  updatedAt?: string;
  createdAt?: string;
  transactionType: TransactionType;
}

export interface InitialTransactionState {
  transactions: ITransaction[];
  selectedTransactions?: ITransaction;
  transactionModal?: TransactionType;
}

export type TransactionAction =
  | {
      type: "GET_TRANSACTIONS";
      payload: ITransaction[];
    }
  | {
      type: "ON_TRANSACTION_EDIT";
      payload?: ITransaction;
    }
  | {
      type: "TRANSACTION_MODAL";
      payload?: TransactionType;
    };

export interface TransactionContext {
  transactionState: InitialTransactionState;
  dispatchTransaction: Dispatch<TransactionAction>;
}
