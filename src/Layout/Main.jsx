import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const isHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      {isHeaderFooter || <NavBar />}
      <Outlet />
      {isHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
