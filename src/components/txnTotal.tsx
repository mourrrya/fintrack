import { transactionContext } from "../context/transaction";
import { displayMoney, displayTransaction } from "../helper/helper";

function TxnTotal() {
  const { transactionState } = transactionContext();
  const { expense, income } = displayTransaction(transactionState.transactions);
  return (
    <div className="flex flex-col gap-2">
      <span>
        <span>Total Expense: </span>
        <span className="text-danger font-semibold">
          {displayMoney(expense)}
        </span>
      </span>
      <span>
        <span>Total Income</span>:{" "}
        <span className="font-semibold">{displayMoney(income)}</span>
      </span>
    </div>
  );
}

export default TxnTotal;
