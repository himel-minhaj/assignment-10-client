import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet";
import googleIcon from "../assets/google.png";
import toast from "react-hot-toast";


const Login = () => {
  const { LogInUser, setUser, signInGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const EmailRef = useRef();
  // console.log(location);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    LogInUser(email, password)
      .then((Result) => {
        setUser(Result.user);
        navigate(location?.state ? location.state : "/"); //location.pathname=state
        toast.success(" Login successful.");
      })
      .catch((err) => {
        // alert(err.code);
        setError({ ...error, login: err.code });
      });
  };
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((Result) => {
        setUser(Result.user);
        toast.success(" Login successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  const handleForgetPassword = () => {
    // console.log("forget password", EmailRef.current.value);
    const Email = EmailRef.current.value;
    if (!Email) {
      alert("provide valid email pass");
      return;
    } else {
      sendPasswordResetEmail(auth, Email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          setError({ ...error, ResetPassError: error.message });
        });
    }
  };
  return (
    <div className="min-h-screen md:flex items-center justify-center py-10">
      {/* <Helmet>
        <title>Lingo Bingo/Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet> */}
      <div className="card  w-full max-w-lg p-10 rounded-none shrink-0 shadow-4xl bg-blue-500">
        <h2 className="font-bold text-center text-3xl">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              ref={EmailRef}
              type="email"
              placeholder="email"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered bg-slate-100"
              required
            />
            {/* show pass eye  */}
            <button
              onClick={() => setShowPass(!showPass)}
              className="btn btn-xs absolute right-4 top-12 "
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {/* show pass eye  */}
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            {error.ResetPassError && (
              <label className="label text-sm text-red-600">
                {error.ResetPassError}
              </label>
            )}
            <label className="label">
              <a
                href="#"
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-neutral rounded-md">Login</button>
          </div>
        </form>
        <div className="divider my-2">OR</div>

        <div className="flex items-center justify-center mt-5 w-10/12 mx-auto ">
          <button onClick={handleSignInGoogle} className="btn btn-block mb-3  ">
            <img src={googleIcon} className="w-4" alt="" />
            SignIn Google
          </button>
        </div>
        <p className="text-center">
          Dont’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-teal-100">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
