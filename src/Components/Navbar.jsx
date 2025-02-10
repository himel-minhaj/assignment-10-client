import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoAirplaneSharp } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import icon from "../assets/user.png";
import toast from "react-hot-toast";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { user, LogOutUser } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  // const [darkMode, setDarkMode] = useState(true);
  // console.log(darkMode);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
        toast.success("LogOut successful.");
      })
      .catch((error) => {
        alert("Error Paichi", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` font-bold ${
              isActive ? "btn bg-orange-400" : "hover:text-warning"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` font-bold ${
              isActive ? "btn bg-orange-400" : "hover:text-warning"
            }`
          }
          to="/Allvisas"
        >
          All visas
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${
                  isActive ? "btn bg-orange-400" : "hover:text-warning"
                }`
              }
              to="/AddVisa"
            >
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${
                  isActive ? "btn bg-orange-400" : "hover:text-warning"
                }`
              }
              to="/MyAddedVisas"
            >
              My added visas
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${
                  isActive ? "btn bg-orange-400" : "hover:text-warning"
                }`
              }
              to="/MyVisaApplications"
            >
              My Visa applications
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-blue-700 p-4 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink className="flex items-center md:text-xl font-bold">
          <span className="bg-orange-400 flex border rounded-full p-2">
            <IoAirplaneSharp />
          </span>
          <span className="text-orange-400 md:ml-3">V</span>ISA
          <span className="text-orange-400 md:ml-3">N</span>AVIGATOR
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {user && user?.email ? (
          <div className="relative inline-block">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src={user?.photoURL || icon}
              alt="User"
              onMouseEnter={() => setShowName(true)}
              onMouseLeave={() => setShowName(false)}
            />
            {showName && (
              <div className="absolute top-12 bg-blue-700 p-2 rounded shadow-md">
                {user?.displayName}
              </div>
            )}
          </div>
        ) : (
          <img
            className="w-10 h-10 rounded-full"
            src={icon}
            alt="Default User"
          />
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn bg-orange-400">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-orange-400">
            LogIn
          </Link>
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn bg-gray-600 text-white"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
