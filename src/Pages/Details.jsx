import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Details = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const singleVisa = useLoaderData();
  const {
    countryImageUrl,
    countryName,
    fee,
    Processing_time,
    Validity,
    Application_method,
    Description,
    Visa_type,
    requiredDocuments,
    Age_restriction,
  } = singleVisa;

  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Handle form submission
  const handleModulform = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      currentDate,
      countryName,
      countryImageUrl,
      fee,
      Visa_type,
      Processing_time,
      Validity,
      Application_method,
      Description,
    };

    // console.log("Submitted Data:", formData);
    setIsOpen(false); // Close the modal after submission
    fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire(" create Visa success");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Visa Navigator/Details</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="rounded-xl bg-base-100 w-[80%] mx-auto my-5 shadow-2xl relative">
        <figure className="p-4">
          <img
            className="w-full md:h-60 object-fill rounded-2xl"
            src={countryImageUrl}
            alt="Visa Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-3xl text-orange-400">
            Visa Details
          </h2>
          <p>
            {" "}
            <strong>Name:</strong> <strong>{countryName}</strong>
          </p>
          <p>
            <strong>Fee:</strong> <strong>{fee}</strong>
          </p>
          <p>
            <strong>Age_restriction :</strong>{" "}
            <strong>{Age_restriction}</strong>
          </p>
          <div className="text-red-600">
            <p>
              {requiredDocuments?.map((singleReq, idx) => (
                <p key={idx}>{singleReq}</p>
              ))}
            </p>
          </div>
          <p className="absolute top-5 right-6 bg-slate-700 p-3 rounded-md">
            {" "}
            <strong className="text-orange-400">{Visa_type}</strong>
          </p>
          <p>Processing Time: {Processing_time}</p>
          <p>Validity: {Validity}</p>
          <p>Application Method: {Application_method}</p>
          <p>Description: {Description}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="btn bg-orange-400"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Visa Application</h2>
            <form onSubmit={handleModulform}>
              <div className="mb-2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  required
                  value={email}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Fee</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  required
                  value={fee}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">
                  Current Date
                </label>
                <input
                  type="text"
                  value={currentDate}
                  readOnly
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
