import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


import { Helmet } from "react-helmet";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setError({});
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "name must be more then 5 charecter" });
      return;
    }
    const password = e.target.password.value;
    if (password.length < 6) {
      setError({ ...error, password: "password need at least 6 Letter" });
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError({
        ...error,
        password: "password need at least one lower Case Letter",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError({
        ...error,
        password: "password need at least one Upper Case Letter",
      });
      return;
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    // console.log(name, email, password, photo);
    createNewUser(email, password)
      .then((Result) => {
        // console.log(Result.user);
        setUser(Result.user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((error) => {
        setError({ ...error, Error: error.message });
      });
    // e.target.reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-10 ">
      <Helmet>
        <title>Visa Navigator/Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="card bg-blue-500 w-full max-w-lg p-10 rounded-none shrink-0 shadow-4xl">
        <h2 className="font-bold text-center text-3xl">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          {error.name && (
            <label className="label text-sm text-black">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          {error.password && (
            <label className="label text-black">{error.password}</label>
          )}
          {error.Error && (
            <label className="label text-sm text-black">{error.Error}</label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-white">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
