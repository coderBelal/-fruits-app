import { useState } from "react";
import Orange from "../assets/Orangebg.png";
import Navbar from "./Navbar";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
const Hero = () => {
  const [slideBar, setSlideBar] = useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* navbar section */}
          <Navbar slideBar={slideBar} setSlideBar={setSlideBar} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h[650px]">
            {/* text section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 data-aos="fade-up" className="text-3xl pl-6 md:pl-14">
                01______
              </h1>
              <h1
                data-aos="fade-up"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A Healthy Fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                eveniet quidem cumque optio libero.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="300"
                data-delay-offset="0"
                className="primary-btn"
              >
                Shop Now
              </button>
            </div>
            {/* img section */}
            <div data-aos="zoom-in">
              <img
                src={Orange}
                alt="not found"
                className="relative z-10 w-[400px] img-shadow img"
              />
            </div>
            {/* blank Section*/}
            <div className="md:hidden"></div>
          </div>
        </div>
        {/* background Large Text */}
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="2200"
          className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow"
        >
          Orange
        </h1>
        {/* slider section */}
        {slideBar && (
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-start gap-6">
                <div className="w-[1px] h-[70] bg white"></div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                >
                  <CiFacebook className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <RiTwitterXFill className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
