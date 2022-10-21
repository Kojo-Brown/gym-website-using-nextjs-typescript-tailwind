import Image from "next/image";
import React from "react";
import LadyRunning from "../../assets/lady-run.png";
import LadyStanding from '../../assets/lady-standing.jpg'

const FitYourBody = () => {
  return (
    // <section className='sm:flex flex-col gap-20 lg:flex-row w-full items-center'>
    //     <div className="sm:left bg-stone-200 rounded-3xl lg:w-1/2 shadow-md">
    //         <Image src={LadyRunning} alt="" />
    //     </div>

    //     <div className="sm:right flex flex-col gap-8 lg:w-1/2">
    //         <h3 className='text-orange-500 uppercase'>Fit your body</h3>
    //         <h2 className='text-4xl'>Ready to make a change?</h2>
    //         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim tenetur nulla, accusantium voluptates culpa cum, aliquam quas ratione autem nemo? Dolorum temporibus minima assumenda omnis totam tempora et aspernatur labore quibusdam rem, quod suscipit repudiandae eaque dolore commodi recusandae!</span>
    //         <button className='bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white hover:bg-orange-600 w-fit'>Train at home</button>
    //     </div>
    // </section>
    <>
      <section className="sm:flex flex-col gap-20 lg:flex-row w-full items-center">

        <div className="sm:left lg:w-1/2">
          <Image src={LadyStanding} alt="" />
        </div>
        <div className="sm:right flex flex-col gap-8 lg:w-1/2">
          <h3 className="text-orange-500 uppercase">Fit your body</h3>
          <h2 className="text-4xl">Ready to make a change?</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim
            tenetur nulla, accusantium voluptates culpa cum, aliquam quas
            ratione autem nemo? Dolorum temporibus minima assumenda omnis totam
            tempora et aspernatur labore quibusdam rem, quod suscipit
            repudiandae eaque dolore commodi recusandae!
          </span>
          <button className="bg-orange-500 px-6 py-2 my-4 rounded-lg shadow-md text-white hover:bg-orange-600 w-fit">
            Train at home
          </button>
        </div>
      </section>
    </>
  );
};

export default FitYourBody;
