import Image from "next/image";
import React from "react";
import Jenny from "../../assets/woman.webp"

const OurTrainers = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center gap-5 px-2">
        <h3 className="text-orange-500 uppercase font-bold">Our Trainers</h3>
        <h3 className="font-bold text-2xl">Learn From Experts</h3>
        <span className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
          voluptatibus odit tempora fugiat corporis id.
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-16">
        <div className="relative">
          <Image src={Jenny} width={300} height={350} className='rounded-lg relative' alt='' />
          <div className="relative bottom-24 left-10 text-white">
            <h4 className="text-2xl">Jenny Jones</h4>
            <p className="text-lg">Yoga Trainer</p>
          </div>
        </div>
        <div className="relative">
          <Image src={Jenny} width={300} height={350} className='rounded-lg relative' alt='' />
          <div className="relative bottom-24 left-10 text-white">
            <h4 className="text-2xl">Jenny Jones</h4>
            <p className="text-lg">Yoga Trainer</p>
          </div>
        </div>
        <div className="relative">
          <Image src={Jenny} width={300} height={350} className='rounded-lg relative' alt='' />
          <div className="relative bottom-24 left-10 text-white">
            <h4 className="text-2xl">Jenny Jones</h4>
            <p className="text-lg">Yoga Trainer</p>
          </div>
        </div>
        <div className="relative">
          <Image src={Jenny} width={300} height={350} className='rounded-lg relative' alt='' />
          <div className="relative bottom-24 left-10 text-white">
            <h4 className="text-2xl">Jenny Jones</h4>
            <p className="text-lg">Yoga Trainer</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTrainers;
