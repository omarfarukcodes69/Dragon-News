import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CatagoryPage from "../Pages/CatagoryPage";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Components/Auth/LogIn";
import Register from "../Components/Auth/Register";

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
      },
    ],
  },
  {
    path: "/authlayout",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        // path: "/authlayout/login",
        element: <LogIn />,
      },
      {
        path: "/authlayout/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
export default router;
