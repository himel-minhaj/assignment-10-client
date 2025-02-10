import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const AllVisa = () => {
  const visaData = useLoaderData();
  // console.log(allVisa);
  const [allVisa, setAllVisa] = useState(visaData);
  const [visa, setVisa] = useState();
  console.log("value", visa);
  useEffect(() => {
    if (visa == undefined) {
      fetch("http://localhost:5000/visa")
        .then((res) => res.json())
        .then((data) => setAllVisa(data));
    } else if (visa == "All") {
      fetch("http://localhost:5000/visa")
        .then((res) => res.json())
        .then((data) => setAllVisa(data));
    } else {
      fetch(`http://localhost:5000/visa/findVisa/${visa}`)
        .then((res) => res.json())
        .then((data) => setAllVisa(data));
    }

    //
  }, [visa]);
  // const { text } = useTypewriter({
  //   words: [
  //     "destinations worldwide",
  //     "explore World Wide",
  //     "Adventure Trails,",
  //     "Hop-on",
  //     "The Royal Route",
  //   ],
  //   loop: {},
  // });
  return (
    <div>
      <h1 className="md:text-4xl font-bold text-center mt-3">
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
      <p className="text-lg text-center my-2 w-9/12 mx-auto">
        The Visa Navigator helps you to quickly and easily find the visa
        you,tailored for your travel, study, or work needs. Learn about visa
        categories, fees, processing times, and more in one seamless platform
        need
      </p>
      <div className="flex justify-center items-center space-x-2">
        <h1 className="font-bold">Filter By Visa Type</h1>
        <select
          onChange={(e) => setVisa(e.target.value)}
          className="select select-info w-full max-w-xs"
        >
          <option disabled selected>
            Filter Visa
          </option>
          <option value="All">All</option>
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
      <div className="md:grid md:grid-cols-4 p-2   mx-auto ">
        {allVisa.map((visa) => (
          <div
            key={visa._id}
            className="card bg-base-100 my-3 md:w-80 shadow-2xl"
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
