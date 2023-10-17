import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCcAmazonPay,
  FaHome,
  FaPhoneSquareAlt,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import {
  BsFillCalendar2WeekFill,
  BsFillCalendarCheckFill,
  BsStars,
} from "react-icons/bs";

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-amber-200">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="text-center my-10">
          <h2 className="font-bold text-3xl">Bistro Boss</h2>
          <p className="font-semibold text-2xl tracking-widest">Restaurant</p>
        </div>

        <ul className="menu  p-4 w-80 min-h-full text-base-content">
          {/* Sidebar content here */}

          <li>
            <Link to="/" className="text-xl font-semibold">
              {" "}
              <FaHome className="text-2xl" /> User Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              {" "}
              <BsFillCalendar2WeekFill className="text-2xl" /> reservation
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              {" "}
              <FaCcAmazonPay className="text-2xl" /> Payment History
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myCart" className="text-xl font-semibold">
              {" "}
              <FaShoppingCart className="text-2xl" /> My Cart
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              {" "}
              <BsStars className="text-2xl" /> Add Review
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              {" "}
              <BsFillCalendarCheckFill className="text-2xl" /> My Booking
            </Link>
          </li>

          {/* divider */}

        <hr className=" bg-slate-300 p-[0.05rem] my-5"  />

          <li>
            <Link to="/" className="text-xl font-semibold">
              <FaHome className="text-xl font-semibold" /> HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              <FaBars className="text-xl font-semibold" /> MENU
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              <FaShoppingBag className="text-xl font-semibold" /> SHOP
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold">
              <FaPhoneSquareAlt className="text-xl font-semibold" /> CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
