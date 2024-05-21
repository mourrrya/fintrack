import { Button, Form, FormProps, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserApi } from "../../api/userApi";
import { userContext } from "../../context/user";
import { setAccessToken, setRefreshToken } from "../../helper/cookies";

type FieldType = {
  username: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const { userDispatch } = userContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    UserApi.login(values.username, values.password).then((res) => {
      if (!res) return;
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      userDispatch({ type: "USER", payload: res });
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
      <div className="w-1/2 shadow-2xl px-20 py-10 rounded-lg space-y-8">
        <div>
          <h1 className="text-4xl"> Login to Fin Track</h1>
        </div>

        <Form
          className="min-full"
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
          Not a user please sign up{" "}
          <Link to="/auth/signup">
            <Button className="btn-link" type="link">
              here
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
