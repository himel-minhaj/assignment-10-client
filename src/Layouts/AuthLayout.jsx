import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
