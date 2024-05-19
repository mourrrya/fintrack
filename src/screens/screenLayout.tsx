import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { SiExpensify } from "react-icons/si";
import { Outlet } from "react-router-dom";

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export function ScreenLayout() {
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
          items={items}
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
