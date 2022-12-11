import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdHomeWork } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';

function Navbar() {
  const navItems = [
    { title: 'Buy' },
    { title: 'Sell' },
    { title: 'Rent' },
    { title: 'Mortgage' },
    { title: 'Find Realtors®️' },
    { title: 'My Home' },
    { title: 'News' },
  ];
  return (
    <div className='flex items-center justify-between p-2 mx-auto whitespace-nowrap max-w-[95vw] lg:max-w-[1280px] '>
      {/* Left Menu */}
      <div className='lg:hidden'>
        <GiHamburgerMenu className='w-8 h-8 bg-red-500 text-white rounded-md p-1' />
      </div>
      {/* Mid Logo */}
      <div className='flex items-center space-x-1 bg-red-500 text-white rounded-full p-2 cursor-pointer lg:py-0'>
        <MdHomeWork />
        <h2 className='font-semibold'>Real Estate</h2>
        <RiBuilding2Fill />
      </div>
      {/*Mid Menu */}
      <div className='hidden lg:flex justify-between px-5 '>
        <div className='flex text-sm'>
          {navItems.map((item, ind) => (
            <button
              key={ind}
              className='border-b-2 border-b-transparent px-2 focus:border-b-red-500 hover:border-b-red-500 '
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      {/* Right Auth */}
      <div>
        <FaRegUserCircle className='bg-red-500 text-white rounded-full w-8 h-8 p-1 lg:hidden' />
        <div className='hidden lg:flex justify-around items-center space-x-3'>
          <div className='space-x-3 flex text-sm'>
            <button className='border border-slate-600 px-2 rounded-lg hover:bg-slate-200'>
              Manage Rentals
            </button>
            <button className='border border-slate-600 slate-600 px-2 rounded-lg hover:bg-slate-200'>
              Advertise
            </button>
          </div>
          <div className='space-x-3 flex text-sm'>
            <button className='rounded-lg font-semibold text-red-500 bg-white px-2 border border-red-500'>
              Log In
            </button>
            <button className='rounded-lg font-semibold bg-red-500 text-white px-2'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
