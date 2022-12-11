import React from 'react';
import info1 from '../assets/info1.jpg';
import info2 from '../assets/info2.jpg';
import { RiSearchLine } from 'react-icons/ri';

function Info() {
  return (
    <div>
      <div className='flex h-[30rem] '>
        <img src={info1} alt='info1' className='w-[50%] object-cover' />
        <div className='my-auto mx-2 md:mx-8'>
          <p className='text-xl md:text-3xl font-bold'>
            Need a home loan?{' '}
            <span className='hidden md:inline'>Get pre-approved</span>
          </p>
          <p className='text-sm md:text-lg text-gray-700'>
            Find a lender who can{' '}
            <span className='hidden lg:inline'>
              offer competitive mortgage rates <br />
              {' and '}
            </span>
            help you with pre-approval.
          </p>
          <button className='mt-10 bg-red-500 py-2 px-3 rounded-full text-white font-semibold'>
            Get pre-approved now
          </button>
        </div>
      </div>
      <div className='flex h-[30rem] space-x-8 justify-between'>
        <div className='flex flex-col w-full md:w-[45%] px-10 justify-center'>
          <p className='text-xl md:text-3xl font-bold'>Get Local Info</p>
          <p className='text-gray-700 text-sm md:text-lg'>
            Does it have pet-friendly rentals? How are the schools?
            <br /> Get important local information on the area you're most
            interested in.
          </p>
          <div className='h-[3.5rem] flex max-w-md justify-center relative items-center mt-10 '>
            <input
              autoComplete='off'
              placeholder='Address, School, City or Zip'
              type='text'
              spellCheck='false'
              className='rounded-full outline-none w-full h-full pl-6'
            />
            <div className='absolute flex items-center justify-center w-12 h-12 mr-1 bg-red-500 right-0 rounded-full'>
              <RiSearchLine className='text-white text-xl ' />
            </div>
          </div>
        </div>
        <img
          src={info2}
          alt='info1'
          className='hidden md:block w-[50%] object-cover'
        />
      </div>
    </div>
  );
}

export default Info;
