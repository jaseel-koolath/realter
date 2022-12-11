import React from 'react';
import HeroImg from '../assets/landscapeHero.jpg';

function Trends() {
  return (
    <div className='flex flex-col h-[30rem] justify-center relative'>
      <div className='absolute w-full flex'>
        <div className='bg-black/60 w-full h-full absolute z-20' />
        <img
          src={HeroImg}
          className='object-cover h-[30rem] w-full z-10'
          alt='houses'
        />
      </div>
      <div className='w-[80vw] mx-auto z-30 flex flex-col items-center '>
        <p className='text-white text-xl pb-4 '>Trends</p>
        <p className='text-white font-bold text-lg md:text-3xl text-center  '>
          Our Most Popular Home of the Week Is a Bachelor Pad
        </p>
        <p className='text-white font-bold text-center text-lg md:text-3xl'>
          with a Shocking Feature in the Kitchen
        </p>
        <button className='rounded-full outline-none text-white border m-6 px-4 py-2'>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Trends;
