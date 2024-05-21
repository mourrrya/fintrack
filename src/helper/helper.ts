import moment from "moment";

export const displayDate = (date: string) => {
  return moment(date).format("DD-MM-YYYY hh:mm A");
};

export const displayMoney = (money: number) => {
  return Number(money).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
};
