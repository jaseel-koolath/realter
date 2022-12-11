import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

function PropertyCard({
  uploadtime,
  type,
  price,
  bed,
  bath,
  sqft,
  imgURL,
  addressLine1,
  addressLine2,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className='w-[300px] min-w-[280px] h-[330px] hover:shadow-2xl  flex flex-col rounded-md '>
      <div className='relative'>
        <img
          className='w-[300px] h-[200px] object-cover rounded-t-md '
          src={imgURL}
          alt=''
        />
        <div className='absolute bottom-2 right-2 w-8 h-8'>
          <AiFillHeart
            onClick={handleClick}
            className={`w-full h-full hover:scale-125 ease-in duration-200 ${
              click ? 'text-red-600' : 'text-white'
            }`}
          />
        </div>
        <div className='absolute top-2 rounded-sm left-2 bg-blue-600'>
          <p className='text-white font-semibold text-xs p-1'>
            {uploadtime} HOURS AGO
          </p>
        </div>
      </div>
      <div className='flex flex-col px-3 py-2'>
        <p className='text-sm'>🟩{type}</p>
        <h3 className='text-xl font-bold'>${price.toLocaleString('en-US')}</h3>
        <div className='flex'>
          <p className='font-bold mr-1'>{bed}</p>
          <p className='mr-1'>bed</p>
          <p className='font-bold mr-1'>{bath}</p>
          <p className='mr-1'>bath</p>
          <p className='font-bold mr-1'>{sqft}</p>
          <p>sqft</p>
        </div>
        <p className='text-sm'>{addressLine1}</p>
        <p className='text-sm'>{addressLine2}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
