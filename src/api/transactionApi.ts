import { displayError } from "../helper/helper";
import { ITransaction } from "../types/transactionType";
import { api } from "./api";

export class TransactionApi {
  static create(transaction: ITransaction): Promise<ITransaction> {
    return api
      .post("/transaction/create", transaction)
      .then((res) => res.data)
      .catch(displayError);
  }
  static getTransactions(): Promise<ITransaction[]> {
    return api
      .get("/transaction/get")
      .then((res) => res.data)
      .catch(displayError);
  }
  static update(transaction: ITransaction): Promise<number[]> {
    return api
      .post("/transaction/update", transaction)
      .then((res) => res.data)
      .catch(displayError);
  }
  static delete(txnId: number): Promise<number> {
    return api
      .post("/transaction/delete", { id: txnId })
      .then((res) => res.data)
      .catch(displayError);
  }
}
