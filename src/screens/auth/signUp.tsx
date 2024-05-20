import { Button, Form, FormProps, Input } from "antd";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { UserApi } from "../../api/userApi";
import { CONSTANT_COOKIE } from "../../constants/constants";
import { userContext } from "../../context/user";

type FieldType = {
  username: string;
  password: string;
};

export function SignUp() {
  const navigate = useNavigate();
  const { userDispatch } = userContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    UserApi.signup(values.username, values.password).then((res) => {
      if (!res) return;
      Cookies.set(
        CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY,
        res.data.accessToken
      );
      userDispatch({ type: "USER", payload: res.data });
      navigate("/");
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-1/2 shadow-2xl px-20 py-10 rounded-3xl space-y-8">
        <div>
          <h1 className="text-4xl"> Sign up to Fin Track</h1>
        </div>
        <Form
          className="w-full"
          layout="vertical"
          name="basic"
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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-end">
          Already a user please login{" "}
          <Link to="/auth/login">
            <Button className="btn-link" type="link">
              here
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
