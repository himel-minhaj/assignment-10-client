import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      {/* className="w-[90%] max-w-[1200px] mx-auto" */}
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
