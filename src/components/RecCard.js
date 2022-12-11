import React from 'react';

function RecCard({ place, price, listings, imgURL }) {
  return (
    <div>
      <div className='w-[300px] min-w-[280px]  hover:shadow-2xl  flex flex-col rounded-md '>
        <img
          className='w-[300px] h-[150px] object-cover rounded-t-md hover:scale-105 ease-in duration-500 '
          src={imgURL}
          alt=''
        />
        <div className='flex flex-col px-3 py-3'>
          <h3 className='text-lg font-bold'>{place}</h3>
          <div className='flex'>
            <p className='font-bold mr-1'>{listings}</p>
            <p className='mr-1'>listings for sale</p>
          </div>
          <div className='flex'>
            <p className='text-sm mr-1'>Median Listing Home Price</p>
            <p className='font-bold text-sm'>
              ${price.toLocaleString('en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecCard;
