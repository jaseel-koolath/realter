import React from 'react';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from 'react-icons/bs';
import apple from '../assets/apple.png';
import google from '../assets/google.png';

function Footer() {
  const buttons = [
    'About Us',
    'Careers',
    'Policy',
    'Terms',
    'Feedback',
    'Privacy',
  ];
  return (
    <div className='bg-black text-white'>
      <div className='max-w-[95vw] lg:max-w-[1280px] mx-auto py-8 '>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex space-x-6 my-2'>
            <BsFacebook className='w-[35px] h-[35px]' />
            <BsInstagram className='w-[35px] h-[35px]' />
            <BsTwitter className='w-[35px] h-[35px]' />
            <BsLinkedin className='w-[35px] h-[35px]' />
            <BsPinterest className='w-[35px] h-[35px]' />
            <BsYoutube className='w-[35px] h-[35px]' />
          </div>
          <div className='flex space-x-2 justify-center items-center my-2 '>
            <img src={apple} alt='' className='h-[50px] p-1' />
            <img src={google} alt='' className='h-[55px]' />
          </div>
        </div>
        <div>
          <ul className='justify-start space-x-1 text-white font-semibold text-sm pt-8 flex z-30'>
            {buttons.map((button, ind) => (
              <button
                key={ind}
                className={`${
                  ind > 4 && 'hidden sm:flex'
                } border-b-2 border-b-transparent px-2 focus:border-b-red-500 hover:border-b-red-500`}
              >
                {button}
              </button>
            ))}
          </ul>
        </div>
        <p className=' my-2 text-center text-xs'>
          © 1995-2022 All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
