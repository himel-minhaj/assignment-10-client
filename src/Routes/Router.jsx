import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllVisa from "../Pages/AllVisa";
import AddVisa from "../Pages/AddVisa";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplications from "../Pages/MyVisaApplications";

import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Components/Error";
import Details from "../Pages/Details";
import UpdateAddvisa from "../Components/UpdateAddvisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Allvisas",
        element: <AllVisa></AllVisa>,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "AddVisa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "MyAddedVisas",
        element: <MyAddedVisas></MyAddedVisas>,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "MyVisaApplications",
        element: <MyVisaApplications></MyVisaApplications>,
      },
      {
        path: "Details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`),
      },
      {
        path: "updateAddvisa/:id",
        element: <UpdateAddvisa></UpdateAddvisa>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
