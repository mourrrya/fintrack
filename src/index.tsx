import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/user";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { browserRoute } from "./routes/routes";
import { TransactionProvider } from "./context/transaction";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#001529", colorSuccess: "ffffffa6" },
      }}
    >
      <UserProvider>
        <TransactionProvider>
          <RouterProvider router={browserRoute} />
        </TransactionProvider>
      </UserProvider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
