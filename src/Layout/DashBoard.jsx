import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCcAmazonPay,
  FaHome,
  FaPhoneSquareAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import {
  BsFillCalendar2WeekFill,
  BsFillCalendarCheckFill,
  BsStars,
} from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: admin maintain
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}

      <div className="drawer-content bg-[#F6F6F6]">
        {/* Page content here */}

        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="text-center my-10">
          <h2 className="font-bold text-3xl">Bistro Boss</h2>
          <p className="font-semibold text-2xl tracking-widest">Restaurant</p>
        </div>

        <ul className="menu  p-4 w-80 min-h-full">
          {/* dynamic change for normal user and admin */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home" className="text-xl font-semibold">
                  {" "}
                  <FaHome className="text-2xl" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItem"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <ImSpoonKnife className="text-2xl" /> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <FaBars className="text-2xl" /> Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addReview"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <FaBook className="text-2xl" /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <FaUsers className="text-2xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home" className="text-xl font-semibold">
                  {" "}
                  <FaHome className="text-2xl" /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reserve"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <BsFillCalendar2WeekFill className="text-2xl" /> reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <FaCcAmazonPay className="text-2xl" /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myCart"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <FaShoppingCart className="text-2xl" /> My Cart
                  <span className="badge badge-ghost">
                    {" "}
                    + {cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addReview"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <BsStars className="text-2xl" /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myBooking"
                  className="text-xl font-semibold"
                >
                  {" "}
                  <BsFillCalendarCheckFill className="text-2xl" /> My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* divider */}

          <hr className=" bg-slate-300 p-[0.05rem] my-5" />

          <li>
            <NavLink to="/" className="text-xl font-semibold">
              <FaHome className="text-xl font-semibold" /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-xl font-semibold">
              <FaBars className="text-xl font-semibold" /> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-xl font-semibold">
              <FaShoppingBag className="text-xl font-semibold" /> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-xl font-semibold">
              <FaPhoneSquareAlt className="text-xl font-semibold" /> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
