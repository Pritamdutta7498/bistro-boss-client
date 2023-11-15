import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import { BsCart4 } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // console.log(user);

  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      <li>
        <Link to="dashboard/myCart">
          <div className=" p-0 hover:bg-none mb-5 flex flex-row gap-3 justify-center items-center">
            <BsCart4 className="text-2xl text-white " />
            <div className="badge badge-secondary"> + {cart?.length || 0}</div>
          </div>
        </Link>
      </li>

      {user ? (
        <li>
          <button onClick={handleLogOut} className="btn btn-warning">
            LogOut
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-40 text-white bg-black max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl pl-16">
          <h2 className="font-semibold text-2xl">
            BISTRO BOSS <br />{" "}
            <span className="tracking-widest uppercase text-xl font-light pl-2">
              Restaurant
            </span>{" "}
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      {/* user profile setup */}
      {user ? (
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-gray-800 ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} title={`${user?.displayName}`} />
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-gray-800 ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.ibb.co/3C2Qg3C/avater.jpg"
                title="Please Login"
                alt="userName"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
