import React from 'react';
import PropertyCard from './PropertyCard';
import { Houses } from './houseData';

function NewListings() {
  return (
    <div className='max-w-[95vw] lg:max-w-[1280px] mx-auto bg-[#f5f5f5]'>
      <div className='mx-8 mt-10'>
        <p className='font-medium text-[18.5px]'>New Listings in Wichita, KS</p>
        <p className='text-blue-500 text-[15px] hover:underline hover:cursor-pointer'>
          View All 106 New Listings
        </p>
      </div>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide mx-8 my-8'>
        {Houses.map((house) => (
          <PropertyCard key={house.imgURL} {...house} />
        ))}
      </div>
    </div>
  );
}

export default NewListings;
