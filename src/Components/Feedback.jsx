import React from "react";
import img1 from "../assets/images (1).jpeg";
import img2 from "../assets/images (2).jpeg";
import img3 from "../assets/images (3).jpeg";
import { Slide } from "react-awesome-reveal";

const Feedback = () => {
  return (
    <div className="dark:text-black mb-5">
      <h1 className="md:text-5xl font-bold text-center dark:text-white">
        User Reviews
      </h1>
      <Slide direction="left">
        <div className="md:grid md:grid-cols-3  gap-2 px-2 mt-5 ">
          {/* user 1 */}
          <div className="card bg-base-100 shadow-2xl mb-5">
            <div className="p-4">
              <div className="flex items-center justify-center gap-2">
                <img src={img1} className="w-12 h-12 rounded-full" alt="" />
                <h2>robart</h2>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              {/* <h2 className="card-title">{name}</h2> */}
              <p>
                VisaHub made my visa process smooth and hassle-free. Highly
                recommend their services!The user interface is simple, and I
                love the real-time tracking feature. Highly recommended!
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
          <div className="card bg-base-100 shadow-2xl mb-5">
            <div className="p-4">
              <div className="flex items-center justify-center gap-2">
                <img src={img2} className="w-12 h-12 rounded-full" alt="" />
                <h2>robart</h2>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              {/* <h2 className="card-title">{name}</h2> */}
              <p>
                Great platform for checking visa requirements and submitting
                applications! The Bangla language support was very helpful for
                me. However, I would love to see more real-time updates on
                application progress. Overall, a fantastic tool!
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
          <div className="card bg-base-100 shadow-2xl mb-5">
            <div className="p-4">
              <div className="flex items-center justify-center gap-2">
                <img src={img3} className="w-12 h-12 rounded-full" alt="" />
                <h2>robart</h2>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              {/* <h2 className="card-title">{name}</h2> */}
              <p>
                Visa Navigator made my visa application process so much easier!
                I used to spend hours searching for visa requirements, but this
                portal provided all the details in one place. The user interface
                is simple, and I love the real-time tracking feature. Highly
                recommended!
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
      </Slide>
    </div>
  );
};

export default Feedback;
