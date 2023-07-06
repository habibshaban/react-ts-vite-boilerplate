import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../../components/loadable";

const ErrorPage = Loadable(lazy(() => import("../../pages/error-page/error-page")));

const Home = Loadable(lazy(() => import("../../pages/home/home")));

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
];
