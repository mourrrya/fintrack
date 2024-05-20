import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { App } from "../app";
import { AuthLayout } from "../screens/auth/authLayout";
import { Login } from "../screens/auth/login";
import { SignUp } from "../screens/auth/signUp";
import { ErrorPage } from "../screens/errorPage";
import { Main } from "../screens/main";
import {
  CONSTANT_BROWSER_ROUTE,
  CONSTANT_COOKIE,
} from "../constants/constants";
import Cookies from "js-cookie";

const authRoutes: RouteObject[] = [
  {
    path: CONSTANT_BROWSER_ROUTE.LOGIN,
    element: <Login />,
  },
  {
    path: CONSTANT_BROWSER_ROUTE.SIGNUP,
    element: <SignUp />,
  },
];

const screenRoutes: RouteObject[] = [
  {
    index: true,
    element: <Main />,
  },
];

const layoutRoutes: RouteObject[] = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        children: screenRoutes,
        loader: () => {
          const accessToken = Cookies.get(
            CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY
          );
          if (!accessToken) {
            return redirect(CONSTANT_BROWSER_ROUTE.LOGIN);
          }
          return null;
        },
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: authRoutes,
        loader: () => {
          const accessToken = Cookies.get(
            CONSTANT_COOKIE.ACCESS_TOKEN_COOKIE_KEY
          );
          if (accessToken) {
            return redirect("/");
          }
          return null;
        },
      },
    ],
  },
];

export const browserRoute = createBrowserRouter(layoutRoutes);
