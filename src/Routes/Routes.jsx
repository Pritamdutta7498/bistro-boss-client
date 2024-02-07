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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";

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
    path: "dashboard",
    element: (
      <PrivetRoute>
        {" "}
        <DashBoard />{" "}
      </PrivetRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: <AdminRoute> <AddItem></AddItem> </AdminRoute> ,
      },
      {
        path: "manageItems",
        element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute> ,
      },
    ],
  },
]);

export default router;
