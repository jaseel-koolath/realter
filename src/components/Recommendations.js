import React from 'react';
import RecCard from './RecCard';
import { Recomms } from './houseData';

function Recommendations() {
  return (
    <div className='max-w-[95vw] lg:max-w-[1280px] mx-auto bg-[#f5f5f5]'>
      <div className='mx-8 mt-10'>
        <p className='font-medium text-[18.5px]'>Recommended neighborhoods</p>
        <p className='text-slate-500 text-[15px] '>
          Based on your previous search
        </p>
      </div>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide mx-8 my-8'>
        {Recomms.map((rec) => (
          <RecCard key={rec.price} {...rec} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
