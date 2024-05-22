import moment from "moment";
import { ITransaction } from "../types/transactionType";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const displayDate = (date: string) => {
  return moment(date).format("DD-MM-YYYY hh:mm A");
};

export const displayError = (e: AxiosError<{ message: string }>) => {
  toast.error(e.response?.data?.message ?? "something went wrong");
};

export const displayMoney = (money: number) => {
  return Number(money).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
};

export const displayTransaction = (
  transactions: ITransaction[]
): { expense: number; income: number } => {
  const total = { expense: 0, income: 0 };
  transactions.reduce((total, txn) => {
    total.expense =
      txn.transactionType === "EXPENSE"
        ? total.expense + Number(txn.transactionAmount)
        : total.expense;

    total.income =
      txn.transactionType === "INCOME"
        ? total.income + Number(txn.transactionAmount)
        : total.income;

    return total;
  }, total);
  return total;
};

export const downloadCsv = (csvContent: string) => {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "transaction_report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
