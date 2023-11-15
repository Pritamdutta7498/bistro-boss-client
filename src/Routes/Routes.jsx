import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivetRoute>
            <Secret />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path:"dashboard",
    element: <PrivetRoute> <DashBoard/> </PrivetRoute>,
    children: [
      {
        path:'myCart',
        element: <MyCart />
      }
    ]
  }
]);

export default router;
