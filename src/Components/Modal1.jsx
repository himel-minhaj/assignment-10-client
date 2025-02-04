import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Ensure you have imported CSS

const Modal1 = ({ fee }) => {
  const { user } = useContext(AuthContext);
  const [date] = useState(new Date()); // No need to update the date
  const email = user?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Fname = form.Fname.value;
    const Lname = form.Lname.value;
    const dateFormatted = date.toLocaleDateString("en-CA");

    console.log(email, Fname, Lname, dateFormatted);
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Apply for the Visa</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First name</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered"
                name="Fname"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last name</span>
              </label>
              <input
                type="text"
                name="Lname"
                placeholder="Last name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                defaultValue={email}
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control lg:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Date</span>
              </label>
              <DatePicker
                selected={date}
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                type="text"
                name="fee"
                defaultValue={fee}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="modal-action">
              <f method="dialog">
                <button className="btn">Close</button>
                <button type="submit" className="btn btn-success mt-4">
                  Apply
                </button>
              </f>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal1;
