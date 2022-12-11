import React from 'react';

function NewsCard({ title, body, imgURL }) {
  return (
    <div className='w-[300px] min-w-[280px] flex flex-col rounded-md '>
      <div className='relative'>
        <img
          className='w-[300px] h-[200px] object-cover rounded-t-md '
          src={imgURL}
          alt=''
        />
        <div className='absolute top-2 rounded-sm left-2 bg-blue-600'>
          <p className='text-white font-semibold text-xs p-1 uppercase'>
            {title}
          </p>
        </div>
      </div>
      <div className='flex flex-col px-3 py-3'>
        <p className='text-md'>{body}</p>
      </div>
    </div>
  );
}

export default NewsCard;
