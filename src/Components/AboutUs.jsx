import React from "react";
import OurGoals from "./OurGoals";
import { AttentionSeeker, Bounce, Slide } from "react-awesome-reveal";


// import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="my-10">
      {/* <Helmet>
        <title>Lingo Bingo/AboutUs</title>
        <meta name="description" content="Helmet application" />
      </Helmet> */}
      <div className="bg-blue-400  mx-auto p-5 rounded-lg text-white ">
        <AttentionSeeker effect="rubberBand">
          <h1 className="text-2xl text-center text-orange-500 md:text-4xl font-bold mb-3 ">
            {" "}
            About-us
          </h1>
        </AttentionSeeker>
        <Slide direction="left" delay={1000}>
          {" "}
          <h2 className="text-center md:text-3xl font-bold mb-3 text-orange-400">
            {" "}
            Explore impressive Demos to Start with Us, visa navigator
          </h2>
        </Slide>
        <Bounce>
          <p className="text-center text-base font-bold mb-3">
            A "Visa Navigator" website is an online tool that helps users
            determine which type of visa they need to travel to a specific
            country by asking them questions about their travel purpose,
            duration, and citizenship, providing tailored information about the
            application process, required documents, and where to apply based on
            their individual circumstances; essentially acting as a guide to
            navigate the visa application process for a particular country.
          </p>
        </Bounce>
      </div>
      <OurGoals></OurGoals>
    </div>
  );
};

export default AboutUs;
