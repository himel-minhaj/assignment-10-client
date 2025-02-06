import React from "react";
import goals from "../assets/download (1).jpeg";
import Lottie from "lottie-react";
import plane from "../plane.json";

const OurGoals = () => {
  return (
    <div className="hero bg-blue-400 min-h-screen text-white  mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src={goals} className="md:w-96 rounded-lg shadow-2xl" /> */}
        <Lottie className="md:w-full md:h-60" animationData={plane} loop={true} />
        <div className="w-7/12">
          <h1 className="text-2xl md:text-5xl font-bold">Future and Goals</h1>
          <p className="md:py-6 text-sm">
            The goal of a "Visa Navigator" website is to simplify the visa
            application process by providing users with a comprehensive online
            platform to determine which visa they need based on their travel
            plans, access detailed information about the required documents, and
            guide them through the application process for a specific country,
            ultimately aiming to streamline the process and minimize the chance
            of errors or rejections
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
