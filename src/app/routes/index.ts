import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "./home/home-routes";

export const router = createBrowserRouter([...homeRoutes]);
