import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import img1 from "../assets/1000_F_245684006_e55tOria5okQtKmiLLbY30NgEHTIB0Og.jpg";
import img2 from "../assets/240_F_254763087_qAqKHN1286EPaCTqfG8lWjIJ6CT2SAM8.jpg";
import img3 from "../assets/240_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      style={{ height: "400px" }}
    >
      <SwiperSlide>
        <div className="hero bg-blue-400 md:min-h-96 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={img1}
              className="object-cover md:h-56"
              alt=""
              // style={{ width: "100%", hight: "200px" }}
            />
            <div className="md:w-3/6">
              <h1 className="md:text-5xl font-bold text-white">
                {" "}
                How to pack lightly for a long trip
              </h1>
              <p className="py-6 text-white">
                To pack lightly for a long trip, prioritize versatile,
                lightweight, quick-drying clothes that can be layered, use
                packing cubes to maximize space, limit the number of shoes you
                bring, wear your bulkiest items on the plane, and only pack
                essentials by making a detailed list and eliminating.
              </p>
              <Link to={"/Allvisas"} className="btn bg-orange-400">
                All visas
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-blue-400 md:min-h-96 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={img2}
              className="object-cover md:h-56"
              alt=""
              // style={{ width: "100%", hight: "200px" }}
            />
            <div className="md:w-3/6">
              <h1 className="md:text-5xl font-bold text-white">
                The best way to explore an off-beat destination
              </h1>
              <p className="py-6 text-white">
                To explore an offbeat destination effectively, the best approach
                is to do thorough research, engage with locals, prioritize
                immersive experiences, be flexible with your plans, respect the
                culture, and consider sustainable travel practices
              </p>
              <Link to={"/Allvisas"} className="btn bg-orange-400">
                All visas
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-blue-400 md:min-h-96">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={img3}
              className="object-cover md:h-56"
              alt=""
              // style={{ width: "100%", hight: "200px" }}
            />
            <div className="md:w-3/6">
              <h1 className="md:text-5xl font-bold text-white">
                Link to travel related products and services offered by the
                company
              </h1>
              <p className="py-6 text-white">
                A reliable travel management platform should offer in-built
                travel policies and approvals. This feature ensures compliance
                and prevents rogue bookings that exceed the allocated budget
              </p>
              <Link to={"/Allvisas"} className="btn bg-orange-400">
                All visa
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
