import { Avatar, Button, FormInstance, List, Modal, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { TransactionApi } from "../api/transactionApi";
import { transactionContext } from "../context/transaction";
import { displayDate, displayMoney } from "../helper/helper";
import { ITransaction } from "../types/transactionType";
import TransactionForm from "./transactionForm";

function TransactionList() {
  const { transactionState, dispatchTransaction } = transactionContext();
  const { transactions, selectedTransactions } = transactionState;
  const [formInstance, setFormInstance] = useState<FormInstance>();

  useEffect(() => {
    refreshTxns();
  }, []);

  const handleModalOk = async () => {
    try {
      const values = await formInstance?.validateFields();
      formInstance?.resetFields();
      dispatchModal();
      handleSubmit({ ...selectedTransactions, ...values });
    } catch (error) {
      console.log("Failed:", error);
    }
  };

  const handleSubmit = (values: ITransaction) => {
    TransactionApi.update(values).then(() => {
      refreshTxns();
    });
  };

  const dispatchModal = (txn?: ITransaction) => {
    dispatchTransaction({ type: "ON_TRANSACTION_EDIT", payload: txn });
  };

  const deleteTxn = (txnId: number) => {
    TransactionApi.delete(txnId || 0).then(() => {
      refreshTxns();
    });
  };

  const refreshTxns = () => {
    TransactionApi.getTransactions().then((res) => {
      dispatchTransaction({ type: "GET_TRANSACTIONS", payload: res });
    });
  };

  return (
    <>
      <div>
        <List
          dataSource={transactions}
          renderItem={(txn) => (
            <List.Item
              key={txn.id}
              actions={[
                <Button key={1} onClick={() => dispatchModal(txn)}>
                  <AiFillEdit size={24} />
                </Button>,

                <Popconfirm
                  key={2}
                  title="Confirm Delete!"
                  onConfirm={() => deleteTxn(txn.id!)}
                  okText="Yes"
                  okButtonProps={{ danger: true }}
                  cancelText="No"
                >
                  <Button danger>
                    <AiFillDelete size={24} />
                  </Button>
                </Popconfirm>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="bg-primary"
                    size="large"
                    icon={
                      (txn.transactionType === "INCOME" && (
                        <div className="text-success">
                          <GiReceiveMoney size={30} />
                        </div>
                      )) ||
                      (txn.transactionType === "EXPENSE" && (
                        <div className="text-danger">
                          <GiPayMoney size={30} />
                        </div>
                      ))
                    }
                  />
                }
                title={`${displayMoney(txn.transactionAmount)} (${txn.title})`}
                description={displayDate(txn.updatedAt!)}
              />
            </List.Item>
          )}
        />
      </div>
      <Modal
        title="Add Income"
        okText="Add"
        destroyOnClose
        open={!!selectedTransactions}
        onOk={handleModalOk}
        onCancel={() => dispatchModal()}
      >
        <TransactionForm
          onFormInstanceReady={(instance) => {
            setFormInstance(instance);
          }}
          initialValues={selectedTransactions}
        />
      </Modal>
    </>
  );
}

export default TransactionList;
