import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value;
    const countryImageUrl = form.countryImageUrl.value;
    const Visa_type = form.Visa_type.value;
    const Processing_time = form.Processing_time.value;
    // const Documents = form.Documents.value;
    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const Description = form.Description.value;
    const Age_restriction = form.Age_restriction.value;
    const fee = form.fee.value;
    const Validity = form.Validity.value;
    const Application_method = form.Application_method.value;
    console.log(
      countryName,
      countryImageUrl,
      Visa_type,
      Processing_time,
      requiredDocuments,
      Description,
      Age_restriction,
      fee,
      Validity,
      Application_method
    );
    const visaData = {
      countryName,
      countryImageUrl,
      Visa_type,
      Processing_time,
      requiredDocuments,
      Description,
      Age_restriction,
      fee,
      Validity,
      Application_method,
      email,
    };
    console.log(visaData);
    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("data create success");
        }
      });
  };
  return (
    <div className="p-24">
      <h1 className="text-center font-bold text-4xl">Add visa</h1>
      <form onSubmit={handleSubmit}>
        {/* Country name & Country image */}
        <div className="md:flex  gap-2 p-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Country name</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Country name"
                type="text"
                name="countryName"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Country image Url</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Country image Url"
                type="text"
                name="countryImageUrl"
              />
            </label>
          </div>
        </div>
        {/* Visa_type & Processing_time*/}
        <div className="md:flex  gap-2 p-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Visa_type</span>
            </label>
            <select
              className="select input input-bordered w-full"
              name="Visa_type"
              id="Visa_type"
            >
              <option disabled selected>
                Pick your Visa
              </option>
              <option value="Student visa">Student visa</option>
              <option value="Medical visa">Medical visa</option>
              <option value="Journalist visa">Journalist visa</option>
              <option value=">Tourist">Tourist visa</option>
              <option value="Employment visa">Employment visa</option>
              <option value="Business visa">Business visa</option>
              <option value="Companion Visa">Companion Visa</option>
              <option value="Transit visa">Transit visa</option>
              <option value="Entry visa">Entry visa</option>
              <option value="Religious Worker">Religious Worker visa</option>
            </select>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Processing_time</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Processing_time"
                type="text"
                name="Processing_time"
              />
            </label>
          </div>
        </div>
        {/* Required Documents*/}
        <div className="md:flex md:w-[480px] lg:w-[980px] mx-auto border rounded-md  gap-1 p-1">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text md:text-2xl font-bold">
                Required Documents
              </span>
            </label>
            {/* <label className="input-group"> */}
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Valid passport"
              />{" "}
              Valid passport
            </label>
            {/* </label> */}
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Visa application form"
              />{" "}
              Visa application form
            </label>
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Recent passport-sized photograph"
              />{" "}
              Recent passport-sized photograph
            </label>
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Proof of acceptance from a recognized educational institution"
              />{" "}
              Proof of acceptance from a recognized educational institution
            </label>
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Proof of financial support"
              />{" "}
              Proof of financial support
            </label>
            <label>
              <input
                type="checkbox"
                name="requiredDocuments"
                value="English proficiency test results (e.g., IELTS)"
              />{" "}
              English proficiency test results (e.g., IELTS)
            </label>
          </div>
        </div>
        {/* Description & Age_restriction */}
        <div className="md:flex mb-2  gap-2 p-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Description"
                type="text"
                name="Description"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Age_restriction</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Age_restriction"
                type="number"
                name="Age_restriction"
              />
            </label>
          </div>
        </div>
        {/* fee and Validity */}
        <div className="md:flex mb-2  gap-2 p-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Fee</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Fee"
                type="number"
                name="fee"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Validity</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Validity"
                type="text"
                name="Validity"
              />
            </label>
          </div>
        </div>
        {/* Application_method*/}
        <div className="md:flex  gap-2 p-3">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-bold">Application_method</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered  w-full"
                placeholder="Application_method"
                type="text"
                name="Application_method"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block bg-blue-700 text-white"
          type="submit"
          value={"Add Visa"}
        />
      </form>
    </div>
  );
};

export default AddVisa;
