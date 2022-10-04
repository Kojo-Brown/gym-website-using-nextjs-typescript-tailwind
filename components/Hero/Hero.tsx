import Image from "next/image";
import React from "react";
import HeroPicture from "../../assets/hero.png";
import { BsPlayFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Hero = () => {
  return (
    <section className="sm:grid grid-cols-1 px-4 lg:grid-cols-2 items-center">
      <div className="border-2 border-red-600">
        <div className="">
          <h1 className="sm:text-6xl">Stay healthy even if you stay at home</h1>
          <h5 className="sm:my-4">Stay in shape even at home. Corenergy will help you to stay healthy easily wherever and whenever</h5>
        </div>
        <div className="sm:text-center md:flex justify-between items-center">
          <button className="sm:bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white text-lg hover:bg-orange-600">Get Started</button>
          <div className="sm:flex items-center justify-center gap-6 my-6">
            <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:border-2 border-gray-200"><BsPlayFill color="orange" /></div>
            <h3>Watch Intro</h3>
          </div>
        </div>
        <div className="sm:flex flex-col justify-center items-center text-center gap-8 md:flex-row">
          <div className="flex flex-col">
            <span className="text-4xl">25+</span>
            <span className="text-gray-600">Exercise Type</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl">91%</span>
            <span className="text-gray-600">Satisfaction</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl">144+</span>
            <span className="text-gray-600">Loyal Customer</span>
          </div>
        </div>
      </div>

      <div className="border-2 border-blue-600">
        <Image src={HeroPicture} alt="" />
      </div>
    </section>
  );
};

export default Hero;
