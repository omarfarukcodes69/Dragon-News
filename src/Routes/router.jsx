import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CatagoryPage from "../Pages/CatagoryPage";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Components/Auth/LogIn";
import Register from "../Components/Auth/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoutes from "./PrivetRoutes";
import PersentageLoading from "../Components/Loaders/PersentageLoading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/catagory/:id",
        element: <CatagoryPage />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <PersentageLoading />,
      },
    ],
  },
  {
    path: "/authlayout",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "/authlayout/login",
        element: <LogIn />,
      },
      {
        path: "/authlayout/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRoutes>
        {" "}
        <NewsDetails />
      </PrivetRoutes>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <PersentageLoading />,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
export default router;
