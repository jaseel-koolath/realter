import React from 'react';
import { news } from './houseData';
import NewsCard from './NewsCard';

function News() {
  return (
    <div className='max-w-[95vw] lg:max-w-[1280px] mx-auto my-16 bg-[#f5f5f5]'>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide mx-8 my-8'>
        {news.map((n, index) => (
          <NewsCard key={index} {...n} />
        ))}
      </div>
    </div>
  );
}

export default News;
