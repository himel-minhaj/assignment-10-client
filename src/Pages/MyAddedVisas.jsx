import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  // const myAddedVisa = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user.email);
  // console.log(myAddedVisa);
  const [visaData, setVisaData] = useState(null);
  console.log(visaData);
  // if (user?.email == myAddedVisa?.email) {
  //   setVisaData(myAddedVisa);
  // }
  useEffect(() => {
    fetch(`http://localhost:5000/visa/MyAddedVisas/${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisaData(data));
    // 
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/visa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success",
          });
          // ui update/ state update
          const remaningdata = visaData.filter((visa) => visa._id !== id);
          setVisaData(remaningdata);
        }
      });
  };
  return (
    <div>
      <div className="md:grid md:grid-cols-3 ml-3 p-2  gap-1 mx-auto relative ">
        {visaData?.map((visa) => (
          <div
            key={visa._id}
            className="card bg-base-100 md:w-96 shadow-2xl my-4"
          >
            <figure className="  border p-2 ">
              <img
                className=" object-fill md:h-60 rounded-md"
                src={visa.countryImageUrl}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {visa.countryName}
                
              </h2>
              <div>
                <p>Processing_time :{visa.Processing_time} </p>
                <p>Validity : {visa.Processing_time}</p>
                <p>Application_method : {visa.Application_method}</p>
                <p>Age_restriction : {visa.Age_restriction}</p>
                <p className="absolute top-5 right-7 bg-slate-500 p-2 rounded-md">
                  {" "}
                  {visa.Visa_type}
                </p>

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
