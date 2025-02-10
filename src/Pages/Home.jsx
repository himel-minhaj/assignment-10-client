import React from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import AboutUs from "../Components/AboutUs";
import LeatestVisa from "../Components/LeatestVisa";

const Home = () => {
  return (
    <div>
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
