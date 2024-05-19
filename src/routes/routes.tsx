import { RouteObject, createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import { Main } from "../screens/main";
import { ErrorPage } from "../screens/errorPage";
import { AuthLayout } from "../screens/auth/authLayout";
import { Login } from "../screens/auth/login";
import { SignUp } from "../screens/auth/signUp";

const authRoutes: RouteObject[] = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
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
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: authRoutes,
      },
    ],
  },
];

export const browserRoute = createBrowserRouter(layoutRoutes);
