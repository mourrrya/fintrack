import { Form, Input, InputNumber } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";
import { FC, useEffect } from "react";
import { TransactionFieldType } from "../types/transactionType";

interface TransactionFormProps {
  onFormInstanceReady: (instance: FormInstance<TransactionFieldType>) => void;
}

export const TransactionForm: FC<TransactionFormProps> = ({
  onFormInstanceReady,
}) => {
  const [form] = useForm();

  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  return (
    <Form layout="vertical" form={form} name="form_in_modal">
      <Form.Item<TransactionFieldType>
        name="title"
        label="Title"
        rules={[
          { required: true, message: "Please input the title of transaction!" },
        ]}
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item<TransactionFieldType>
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: "Please input the amount of transaction!",
          },
        ]}
      >
        <InputNumber className="w-full" type="number" />
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;