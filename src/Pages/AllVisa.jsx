import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const allVisa = useLoaderData();
  console.log(allVisa);
  return (
    <div>
      <h1 className="md:text-2xl font-bold text-center mt-3">
        Apply for visa for destinations worldwide
      </h1>
      <p className="text-lg text-center my-2 w-9/12 mx-auto">
        The Visa Navigator helps you to quickly and easily find the visa
        you,tailored for your travel, study, or work needs. Learn about visa
        categories, fees, processing times, and more in one seamless platform
        need
      </p>
      <div className="md:grid md:grid-cols-4 ml-3  gap-1 mx-auto space-y-5">
        {allVisa.map((visa) => (
          <div key={visa._id} className="card bg-base-100 md:w-80 shadow-2xl">
            <figure className="  border border-red-500">
              <img
                className=" object-fill md:h-60"
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
              <div className="flex justify-center items-center gap-2 ">
                <h1 className=" text-red-600 font-bold text-xl">
                  Fee :${visa.fee}
                </h1>
                <Link to={`/Details/${visa._id}`} className="btn btn-success">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
