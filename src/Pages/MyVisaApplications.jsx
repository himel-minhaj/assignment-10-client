import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const MyVisaApplications = () => {
  // const visaData = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  const [myVisaApplications, setMyVisaApplications] = useState(null);
  const [search, setSearch] = useState("");


  useEffect(() => {
    if (search) {
      fetch(
        `http://localhost:5000/apply?searchParams=${search}&email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMyVisaApplications(data);
        });
    }
    else {
      fetch(`http://localhost:5000/apply/myvisaApplication/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyVisaApplications(data));
    }
    //
  }, [search, user.email]);
  // useEffect(() => {
  //   fetch(
  //     `http://localhost:5000/apply?searchParams=${search}&email=${user.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //        console.log(data);
  //       setMyVisaApplications(data);
  //     });
  // }, [search, user.email]);

  const handleCancelApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/apply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              // ui update/ state update
              const remaningdata = myVisaApplications.filter(
                (visa) => visa._id !== id
              );
              setMyVisaApplications(remaningdata);
            }
          });
      }
    });
  };
  return (
    <div className="dark:text-white">
      <Helmet>
        <title>Visa Navigator/My Visa Applications</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1 className="md:text-5xl text-center my-3 font-bold">
        My Visa Applications
      </h1>
      <div className="md:w-[400px] mx-auto my-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search by country"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="md:grid md:grid-cols-4 ml-3  gap-1 mx-auto my-4">
        {myVisaApplications?.map((singleApplication) => (
          <div
            key={singleApplication._id}
            className="flex justify-center items-center  bg-gray-100 rounded-lg p-4"
          >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm">
              <div className="relative w-full h-40">
                <img
                  src={singleApplication.countryImageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {singleApplication.countryName}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Visa Type:</strong> {singleApplication.Visa_type}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Processing Time:</strong>{" "}
                  {singleApplication.Processing_time}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Fee:</strong> ${singleApplication.fee}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Validity:</strong> {singleApplication.Validity}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Application Method:</strong>{" "}
                  {singleApplication.Application_method}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Applied Date:</strong> {singleApplication.currentDate}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Applicant: {singleApplication.firstName} </strong>
                  <strong>{singleApplication.lastName}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {singleApplication.email}
                </p>
              </div>
              <button
                onClick={() => handleCancelApplication(singleApplication._id)}
                className="w-full bg-orange-400 text-white py-2 text-center text-sm font-semibold rounded-b-2xl hover:bg-red-600 transition-all"
              >
                Cancel Application
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
