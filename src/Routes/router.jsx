import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CatagoryPage from "../Pages/CatagoryPage";
import Home from "../Pages/Home";

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
    path: "/auth-layout",
    element: <h1>auth Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
export default router;
