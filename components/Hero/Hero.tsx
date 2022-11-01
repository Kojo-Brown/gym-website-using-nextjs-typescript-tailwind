import Image from "next/image";
import React from "react";
import HeroPicture from "../../assets/hero.png";
import { BsPlayFill } from "react-icons/bs";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="sm:grid grid-cols-1 px-4 lg:grid-cols-2 items-center">
      <div className="">
        <div className="">
          <h1 className="sm:text-6xl">Stay healthy even if you stay at home</h1>
          <h5 className="sm:my-4">
            Stay in shape even at home. Corenergy will help you to stay healthy
            easily wherever and whenever
          </h5>
        </div>
        <div className="sm:text-center md:flex justify-between items-center">
          <button className="sm:bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white text-lg hover:bg-orange-600">
            Get Started
          </button>
          <div className="sm:flex items-center justify-center gap-6 my-6">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              className="bg-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:border-2 border-gray-200"
            >
              <BsPlayFill color="orange" />
            </button>
            <h3>Watch Intro</h3>

            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalCenter"
              tabIndex={-1}
              aria-labelledby="exampleModalCenterTitle"
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalScrollableLabel"
                    >
                      Introduction Video
                    </h5>
                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body relative p-4">
                    <div
                      className="embed-responsive embed-responsive-21by9 relative w-full h-80 overflow-hidden"
                      style={{ paddingTop: "42.857143%" }}
                    >
                      <iframe
                        className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/4-zjQvTDnbw"
                        title="Gym Promo video/Gym commercial/Cinematic fitness film/Gym Motivation/Fitness promo video/Sony a7III"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex flex-col justify-center items-center text-center gap-8 md:flex-row">
          <div className="flex flex-col">
            <span className="text-4xl"><CountUp end={25} duration={1} delay={2} className="text-4xl" />+</span>
            <span className="text-gray-600">Exercise Type</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl"><CountUp end={91} duration={2} delay={3} className="text-4xl" />%</span>
            <span className="text-gray-600">Satisfaction</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl"><CountUp end={144} duration={3} delay={4} className="text-4xl" />+</span>
            <span className="text-gray-600">Loyal Customer</span>
          </div>
        </div>
      </div>

      <div className="">
        <Image src={HeroPicture} alt="" />
      </div>
    </section>
  );
};

export default Hero;
