import React from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import AboutUs from "../Components/AboutUs";
import LeatestVisa from "../Components/LeatestVisa";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Visa Navigator/Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className="my-5 mt-32 md:mt-20">
        <Banner></Banner>
      </section>
      <LeatestVisa></LeatestVisa>
      <AboutUs></AboutUs>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
