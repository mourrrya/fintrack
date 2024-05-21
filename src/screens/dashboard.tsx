import { Button, Modal } from "antd";
import { transactionContext } from "../context/transaction";
import { MouseEvent } from "react";

export function Dashboard() {
  const { transactionState, dispatchTransaction } = transactionContext();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-8">
        <Button
          type="primary"
          size="large"
          onClick={() =>
            dispatchTransaction({
              type: "TRANSACTION_MODAL",
              payload: "INCOME",
            })
          }
        >
          Income
        </Button>
        <Button
          type="primary"
          danger
          size="large"
          onClick={() =>
            dispatchTransaction({
              type: "TRANSACTION_MODAL",
              payload: "EXPENSE",
            })
          }
        >
          Expense
        </Button>
      </div>
      <Modal
        title="Add Expense"
        open={transactionState.transactionModal === "EXPENSE"}
        onOk={handleSubmit}
        onCancel={() =>
          dispatchTransaction({
            type: "TRANSACTION_MODAL",
          })
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Add Income"
        open={transactionState.transactionModal === "INCOME"}
        onOk={handleSubmit}
        onCancel={() =>
          dispatchTransaction({
            type: "TRANSACTION_MODAL",
          })
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
