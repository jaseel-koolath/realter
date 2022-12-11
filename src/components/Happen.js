import React from 'react';

function Happen() {
  return (
    <div className='max-w-[95vw] lg:max-w-[1280px] mx-auto mb-8 bg-[#f5f5f5]'>
      <p className='font-medium text-[18.5px] m-8'>
        What's happening in Wichita, KS
      </p>
      <div className='flex justify-around flex-col md:flex-row '>
        <div className='flex flex-col justify-center items-center pb-4'>
          <p className='text-blue-500 text-3xl hover:underline hover:text-blue-700 hover:cursor-pointer'>
            1,232
          </p>
          <p>Home for Sale</p>
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
          <p className='text-blue-500 text-3xl hover:underline hover:text-blue-700 hover:cursor-pointer'>
            65
          </p>
          <p>Open houses</p>
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
          <p className='text-blue-500 text-3xl hover:underline hover:text-blue-700 hover:cursor-pointer'>
            2,677
          </p>
          <p>Recently sold</p>
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
          <p className='text-blue-500 text-3xl hover:underline hover:text-blue-700 hover:cursor-pointer'>
            148
          </p>
          <p>Price reduced</p>
        </div>
      </div>
    </div>
  );
}

export default Happen;
