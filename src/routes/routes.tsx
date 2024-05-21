import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { App } from "../app";
import { CONSTANT_BROWSER_ROUTE } from "../constants/constants";
import { getAccessToken } from "../helper/cookies";
import { AuthLayout } from "../screens/auth/authLayout";
import { Login } from "../screens/auth/login";
import { SignUp } from "../screens/auth/signUp";
import { ErrorPage } from "../screens/errorPage";
import { Dashboard } from "../screens/dashboard";

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
    element: <Dashboard />,
  },
];

const handleAuthPath = () => {
  const accessToken = getAccessToken();
  if (accessToken) {
    return redirect("/");
  }
  return null;
};

export const handlePrivatePath = () => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    return redirect(CONSTANT_BROWSER_ROUTE.LOGIN);
  }
  return null;
};

const layoutRoutes: RouteObject[] = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        children: screenRoutes,
        loader: handlePrivatePath,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: authRoutes,
        loader: handleAuthPath,
      },
    ],
  },
];

export const browserRoute = createBrowserRouter(layoutRoutes);
