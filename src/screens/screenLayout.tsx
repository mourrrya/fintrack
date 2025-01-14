import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuItemType } from "antd/es/menu/interface";
import { useEffect } from "react";
import { SiExpensify } from "react-icons/si";
import { Outlet, useNavigate } from "react-router-dom";
import { UserApi } from "../api/userApi";
import { CONSTANT_BROWSER_ROUTE, CONSTANT_ERROR } from "../constants/constants";
import { userContext } from "../context/user";
import {
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../helper/cookies";
import { displayError } from "../helper/helper";

export function ScreenLayout() {
  const navigate = useNavigate();
  const { userState, userDispatch } = userContext();
  useEffect(() => {
    UserApi.user()
      .then((userRes) => {
        userDispatch({ type: "USER", payload: userRes });
      })
      .catch((err) => {
        if (err.response?.data?.message === CONSTANT_ERROR.JWT_EXPIRED) {
          return UserApi.refreshToken(getRefreshToken() || "")
            .then((tokenRes) => {
              setAccessToken(tokenRes.accessToken);
              setRefreshToken(tokenRes.refreshToken);
            })
            .catch((e) => {
              removeAccessToken();
              removeRefreshToken();
              displayError(e);
              navigate(CONSTANT_BROWSER_ROUTE.LOGIN);
            });
        }
        removeAccessToken();
        removeRefreshToken();
        displayError(err);
        navigate("/auth/login");
      });
  }, []);

  const menuList: MenuItemType[] = [
    {
      key: "1",
      label: `Welcome ${userState.user?.username || ""}`,
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => {
        removeAccessToken();
        navigate(CONSTANT_BROWSER_ROUTE.LOGIN);
      },
    },
  ];

  return (
    <Layout>
      <Header className="flex justify-between items-center">
        <div className="text-white">
          <SiExpensify size={40} />
        </div>
        <Menu
          className="flex-1 justify-end text-xl capitalize"
          theme="dark"
          mode="horizontal"
          items={menuList}
        />
      </Header>
      <Content className="pt-4 px-4 md:pt-12 md:px-12">
        <div className="bg-white  h-[calc(100vh_-_149px)] md:h-[calc(100vh_-_181px)]">
          {userState.user && <Outlet />}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Fin Track ©{new Date().getFullYear()} Anil Kumar
      </Footer>
    </Layout>
  );
}
