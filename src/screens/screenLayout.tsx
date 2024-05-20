import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuItemType } from "antd/es/menu/interface";
import { SiExpensify } from "react-icons/si";
import { Outlet, useNavigate } from "react-router-dom";
import {
  CONSTANT_BROWSER_ROUTE,
  CONSTANT_COOKIE,
} from "../constants/constants";
import Cookies from "js-cookie";

export function ScreenLayout() {
  const navigate = useNavigate();
  const menuList: MenuItemType[] = [
    {
      key: "1",
      label: "Logout",
      onClick: () => {
        Cookies.remove(CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY);
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
          onClick={(e) => {
            console.log("Hello world", e);
          }}
          className="flex-1 justify-end text-xl capitalize"
          theme="dark"
          mode="horizontal"
          items={menuList}
        />
      </Header>
      <Content className="pt-12 px-12">
        <div className="p-4 bg-white min-h-[calc(100vh_-_181px)]">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Fin Track ©{new Date().getFullYear()} Anil Kumar
      </Footer>
    </Layout>
  );
}
