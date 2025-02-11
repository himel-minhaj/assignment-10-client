import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const LeatestVisa = () => {
  const allVisa = useLoaderData();
  // console.log(allVisa);
  // const [allVisa, setAllVisa] = useState(visaData);

  return (
    <div className="dark:text-black">
      <h1 className="md:text-4xl font-bold text-center mt-3 dark:text-white">
        Apply for visa for{" "}
        <span className="font-bold text-red-600">
          <Typewriter
            words={[
              "destinations worldwide",
              "Explore World Wide",
              "Adventure Trails",
              "Hop-on",
              "The Royal Route",
            ]}
            loop={5}
            // cursor
            // cursorStyle=">"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        <span>
          <Cursor cursorColor="green" cursorStyle="/" />
        </span>
      </h1>
      <p className="text-lg text-center my-2 w-9/12 mx-auto dark:text-white">
        The Visa Navigator helps you to quickly and easily find the visa
        you,tailored for your travel, study, or work needs. Learn about visa
        categories, fees, processing times, and more in one seamless platform
        need
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 ">
        {allVisa.slice(0, 6).map((visa) => (
          <div
            key={visa._id}
            className="card bg-base-100 my-3 lg:w-70 shadow-2xl"
          >
            <figure className="  border ">
              <img
                className=" object-cover w-full md:h-[200px]"
                src={visa.countryImageUrl}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {visa.countryName}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <div>
                <p>Processing_time :{visa.Processing_time} </p>
                <p>Validity : {visa.Processing_time}</p>
              </div>
              <div className="flex flex-col lg:flex-row  justify-center items-center gap-2 ">
                <h1 className=" text-red-600 font-bold text-xl">
                  Fee :${visa.fee}
                </h1>
                <Link to={`/Details/${visa._id}`} className="btn btn-warning">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/Allvisas"} className="btn btn-warning p-4">
          See All Visa
        </Link>
      </div>
    </div>
  );
};

export default LeatestVisa;
