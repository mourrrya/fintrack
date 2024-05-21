import { Button } from "antd";
import moment from "moment";
import { unparse } from "papaparse";
import { TransactionApi } from "../api/transactionApi";
import { downloadCsv } from "../helper/helper";
import { transactionContext } from "../context/transaction";
import { isEmpty } from "lodash";
import { Fragment } from "react/jsx-runtime";

function TxnReport() {
  const { transactionState } = transactionContext();
  const refreshTxns = () => {
    TransactionApi.getTransactions().then((res) => {
      const data = res.map(
        ({ transactionAmount, transactionType, updatedAt, title }) => {
          return {
            Title: title,
            Type: transactionType,
            Date: moment(updatedAt).format("DD_MM_YYYY"),
            Time: moment(updatedAt).format("hh:mm A"),
            Amount: Number(Number(transactionAmount)).toLocaleString("en-IN"),
          };
        }
      );
      const csv = unparse(data);
      downloadCsv(csv);
    });
  };
  if (isEmpty(transactionState.transactions)) return <Fragment />;
  return <Button onClick={refreshTxns}>Generate Report</Button>;
}

export default TxnReport;
