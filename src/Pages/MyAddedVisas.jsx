import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyAddedVisas = () => {
  const myAddedVisa = useLoaderData();
  // console.log(myAddedVisa);
  const [visaData, setVisaData] = useState(myAddedVisa);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/visa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // ui update/ state update
        const remaningdata = visaData.filter((visa) => visa._id !== id);
        setVisaData(remaningdata);
      });
  };
  return (
    <div>
      <div className="md:grid md:grid-cols-4 ml-3  gap-1 mx-auto space-y-5">
        {visaData.map((visa) => (
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
                <p>Application_method : {visa.Application_method}</p>
                <p>Age_restriction : {visa.Age_restriction}</p>
                
                <h1 className=" text-red-600 font-bold text-xl">
                  Fee :${visa.fee}
                </h1>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <Link
                  to={`/updateAddvisa/${visa._id}`}
                  className="btn btn-success"
                >
                  update
                </Link>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
