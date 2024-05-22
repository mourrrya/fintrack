import { Button, FormInstance, Modal } from "antd";
import { useState } from "react";
import { TransactionApi } from "../api/transactionApi";
import { transactionContext } from "../context/transaction";
import {
  TransactionFieldType,
  TransactionType,
} from "../types/transactionType";
import TransactionForm from "./transactionForm";

export const TransactionBtn = () => {
  const { transactionState, dispatchTransaction } = transactionContext();
  const [formInstance, setFormInstance] = useState<FormInstance>();

  const handleModalOk = async (transactionType: TransactionType) => {
    try {
      const values = await formInstance?.validateFields();
      formInstance?.resetFields();
      dispatchModal();
      handleSubmit(transactionType, values);
    } catch (error) {
      console.log("Failed:", error);
    }
  };

  const handleSubmit = (
    transactionType: TransactionType,
    values: TransactionFieldType
  ) => {
    TransactionApi.create({ ...values, transactionType }).then(() => {
      refreshTxns();
    });
  };

  const refreshTxns = () => {
    TransactionApi.getTransactions().then((res) => {
      dispatchTransaction({ type: "GET_TRANSACTIONS", payload: res });
    });
  };

  const dispatchModal = (transactionType?: TransactionType) => {
    dispatchTransaction({
      type: "TRANSACTION_MODAL",
      payload: transactionType,
    });
  };

  return (
    <>
      <div className="flex gap-8 flex-wrap">
        <Button
          type="primary"
          size="large"
          onClick={() => dispatchModal("INCOME")}
        >
          Income
        </Button>
        <Button
          type="primary"
          danger
          size="large"
          onClick={() => dispatchModal("EXPENSE")}
        >
          Expense
        </Button>
      </div>
      <Modal
        title="Add Expense"
        okText="Add"
        destroyOnClose
        open={transactionState.transactionModal === "EXPENSE"}
        onOk={() => handleModalOk("EXPENSE")}
        onCancel={() => dispatchModal()}
      >
        <TransactionForm
          onFormInstanceReady={(instance) => {
            setFormInstance(instance);
          }}
        />
      </Modal>
      <Modal
        title="Add Income"
        okText="Add"
        destroyOnClose
        open={transactionState.transactionModal === "INCOME"}
        onOk={() => handleModalOk("INCOME")}
        onCancel={() => dispatchModal()}
      >
        <TransactionForm
          onFormInstanceReady={(instance) => {
            setFormInstance(instance);
          }}
        />
      </Modal>
    </>
  );
};

export default TransactionBtn;
