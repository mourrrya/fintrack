import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { SiExpensify } from "react-icons/si";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <Layout>
      <Header className="flex justify-between items-center">
        <div className="text-white">
          <SiExpensify size={40} />
        </div>
      </Header>
      <Content className="w-full h-[calc(100vh_-_133px)]">
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Fin Track ©{new Date().getFullYear()} Anil Kumar
      </Footer>
    </Layout>
  );
}
