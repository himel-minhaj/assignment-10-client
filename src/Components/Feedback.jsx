import React from "react";
import img1 from "../assets/images (1).jpeg";
import img2 from "../assets/images (2).jpeg";
import img3 from "../assets/images (3).jpeg";

const Feedback = () => {
  return (
    <div>
      <h1 className="md:text-5xl font-bold text-center">User Reviews</h1>
      <div className="md:grid md:grid-cols-3 gap-4 my-6">
        {/* user 1 */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="p-6">
            <div className="flex items-center justify-center gap-2">
              <img src={img1} className="w-12 h-12 rounded-full" alt="" />
              <h2>robart</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            {/* <h2 className="card-title">{name}</h2> */}
            <p>
              VisaHub made my visa process smooth and hassle-free. Highly
              recommend their services!
            </p>
            <div className="card-actions  justify-end">
              <div className="rating *:bg-orange-500">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              {/* <button className="btn">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* user 2 */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="p-6">
            <div className="flex items-center justify-center gap-2">
              <img src={img2} className="w-12 h-12 rounded-full" alt="" />
              <h2>robart</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            {/* <h2 className="card-title">{name}</h2> */}
            <p>
              VisaHub made my visa process smooth and hassle-free. Highly
              recommend their services!
            </p>
            <div className="card-actions  justify-end">
              <div className="rating *:bg-orange-500">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              {/* <button className="btn">Buy Now</button> */}
            </div>
          </div>
        </div>
        {/* user 3 */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="p-6">
            <div className="flex items-center justify-center gap-2">
              <img src={img3} className="w-12 h-12 rounded-full" alt="" />
              <h2>robart</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            {/* <h2 className="card-title">{name}</h2> */}
            <p>
              VisaHub made my visa process smooth and hassle-free. Highly
              recommend their services!
            </p>
            <div className="card-actions  justify-end">
              <div className="rating *:bg-orange-500">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              {/* <button className="btn">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
