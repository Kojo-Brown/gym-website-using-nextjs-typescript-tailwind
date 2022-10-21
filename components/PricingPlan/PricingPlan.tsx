import React from "react";
import { MdCheckCircle } from 'react-icons/md'

const PricingPlan = () => {
  return (
    <section className="mt-10 bg-orange-50 py-5 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-orange-500 text-lg">Pricing Plan</h2>
        <h3 className="text-2xl">Member Pricing Plan</h3>
        <p className="text-center">
          We provide pricing plans for new members, you can join the program
          after selecting the price plan option
        </p>
      </div>

      <div className="mx-4 my-10 sm:flex flex-col gap-8 lg:flex-row w-full items-center justify-center h-full">
        <div className="bg-white p-6 flex flex-col items-center gap-5 shadow-md">
            <h4 className="text-xl">Daily Plan</h4>
            <p className="text-lg font-bold">$250</p>
            <div className="w-32 h-1 bg-orange-300"></div>
            <ul>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> Consultation with Coach</li>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> 3 hours of practice</li>
            </ul>
            <button className='bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white hover:bg-orange-600 w-fit'>Get Started</button>
        </div>

        <div className="bg-orange-500 text-white p-6 flex flex-col items-center gap-5 shadow-md">
            <h4 className="text-xl">Weekly Plan</h4>
            <p className="text-lg font-bold">$320</p>
            <div className="w-32 h-1 bg-orange-300"></div>
            <ul>
                <li className="flex items-center gap-2"> <MdCheckCircle /> free Consumption</li>
                <li className="flex items-center gap-2"> <MdCheckCircle /> Consultation with Coach</li>
                <li className="flex items-center gap-2"> <MdCheckCircle /> 5 hours of practice</li>
            </ul>
            <button className='bg-white px-6 py-2 my-4 rounded-lg shadow-md text-orange-500 hover:bg-gray-50 w-fit'>Get Started</button>
        </div>

        <div className="bg-white p-6 flex flex-col items-center gap-5 shadow-md">
            <h4 className="text-xl">Monthly Plan</h4>
            <p className="text-lg font-bold">$450</p>
            <div className="w-32 h-1 bg-orange-300"></div>
            <ul>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> free Consumption</li>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> Consultation with Coach</li>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> 8 hours of practice</li>
                <li className="flex items-center gap-2"> <MdCheckCircle color="orange" /> Free fitness shirt</li>
            </ul>
            <button className='bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white hover:bg-orange-600 w-fit'>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
