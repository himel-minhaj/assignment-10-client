import React from 'react';
import Banner from '../Components/Banner';
import OurGoals from '../Components/OurGoals';
import Feedback from '../Components/Feedback';
import AboutUs from '../Components/AboutUs';

const Home = () => {
  return (
    <div>
      <section className='my-5 mt-32 md:mt-3'>
        <Banner></Banner>
      </section>
      <AboutUs></AboutUs>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;