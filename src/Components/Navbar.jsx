import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoAirplaneSharp } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import icon from "../assets/user.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, LogOutUser } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
        // toast(" LogOut successful.");
        toast.success(" LogOut successful.");
      })
      .catch((error) => {
        alert("Error Paichi", error.message);
      });
  };
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` font-bold ${
              isActive ? "btn bg-orange-400 " : "hover:text-warning"
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
    <div className="navbar bg-blue-700 p-4  text-white">
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
        <div className="flex">
          <NavLink className="flex justify-center items-center md:text-xl font-bold">
            <span className="bg-orange-400 flex border rounded-full p-2">
              <IoAirplaneSharp />
            </span>
            <span className="text-orange-400 md:ml-3">V</span>ISA
            <span className="text-orange-400 md:ml-3">N</span>AVIGATOR
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">{user?.email}</a> */}
        {/* <Link to="/auth/login">Login</Link> */}
        {user && user?.email ? (
          <div className="relative inline-block">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src={user?.photoURL}
              alt=""
              // id="user-img"
              onMouseEnter={() => setShowName(true)}
              onMouseLeave={() => setShowName(false)}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            {showName && (
              <div
                // id="user-name"
                style={{
                  position: "absolute",
                  top: "60px",
                  background: "blue",
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                }}
              >
                {user?.displayName}
              </div>
            )}
          </div>
        ) : (
          <img className="w-10 h-10 rounded-full" src={icon} alt="" />
        )}
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn bg-orange-400">
              LogOut
            </button>
          </>
        ) : (
          <Link to={"/auth/login"}>LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
