import { Button, Form, FormProps, Input } from "antd";
import AntDLink from "antd/es/typography/Link";
import axios from "axios";
import { Link } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

export function Login() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-1/2 shadow-2xl px-20 py-10 rounded-lg space-y-8">
        <div>
          <h1 className="text-4xl"> Login to Fin Track</h1>
        </div>

        <Form
          className="min-w-96"
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-end">
          Not a user please sign Up{" "}
          <Link to="/auth/signup">
            <AntDLink>here</AntDLink>
          </Link>
        </div>
      </div>
    </div>
  );
}
