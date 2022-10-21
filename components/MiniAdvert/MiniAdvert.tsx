import React from "react";
import { TbYoga } from "react-icons/tb";
import { MdFitnessCenter } from "react-icons/md";
import { GiStrong } from "react-icons/gi";

const MiniAdvert = () => {
  return (
    <section className="sm:my-10 lg:flex items-center gap-10">
      <h1 className="sm:text-3xl text-center my-6">
        Training <br /> Programs <br /> We Offer For You
      </h1>
      <div className="sm:bg-orange-100 p-6 rounded-lg flex flex-col gap-8 border-2 border-orange-200 lg:flex-row">
        <div className="yoga">
          <div className="flex justify-between items-center pb-2">
            <h2 className="sm:text-xl">Yoga</h2>
            <TbYoga size="2.5rem" color="red" />
          </div>
          <span className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            earum autem pariatur voluptatum quia, error laborum provident!
            Numquam, adipisci possimus?
          </span>
        </div>
        <div className="fitness">
          <div className="flex justify-between items-center pb-2">
            <h2 className="sm:text-xl">Fitness</h2>
            <MdFitnessCenter size="2.5rem" color="orange" />
          </div>
          <span className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            earum autem pariatur voluptatum quia, error laborum provident!
            Numquam, adipisci possimus?
          </span>
        </div>
        <div className="muscles">
          <div className="flex justify-between items-center pb-2">
            <h2 className="sm:text-xl">Muscles</h2>
            <GiStrong size="2.5rem" color="blue" />
          </div>
          <span className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            earum autem pariatur voluptatum quia, error laborum provident!
            Numquam, adipisci possimus?
          </span>
        </div>
      </div>
    </section>
  );
};

export default MiniAdvert;
