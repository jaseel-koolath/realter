import React from "react";
import HeroImg from "../assets/home.jpg";
import { RiSearchLine } from "react-icons/ri";

function Hero() {
  const buttons = [
    "BUY",
    "RENT",
    "SELL",
    "PRE-APPROVAL",
    "JUST SOLD",
    "HOME VALUE",
  ];
  return (
    <div>
      <div className="flex flex-col h-[30rem]">
        <div className="absolute w-full">
          <div className="bg-black/50 w-full h-full absolute z-20"></div>
          <img
            src={HeroImg}
            className="object-cover h-[30rem] w-full z-10"
            alt="houses"
          />
        </div>
        <div className="w-full text-center pt-12 z-30">
          <p className="text-white font-bold text-4xl sm:text-5xl py-4 ">
            To each their home.®
          </p>
          <p className="text-white font-semibold text-sm sm:text-xl w-full text-center">
            Let’s find a home that’s perfect for you
          </p>
        </div>
        <ul className="justify-center space-x-1 text-white font-semibold text-sm pt-8 flex z-30">
          {buttons.map((button, ind) => (
            <button
              className={`${
                ind > 3 && "hidden sm:flex"
              } border-b-2 border-b-transparent px-2 focus:border-b-red-500 hover:border-b-red-500`}
            >
              {button}
            </button>
          ))}
        </ul>
        <div className="w-[70vw] h-[3.5rem] flex md:w-[35rem] mx-auto justify-center items-center mt-10 z-30 relative">
          <input
            autocomplete="off"
            placeholder="Address, School, City, Zip or Neighborhood"
            type="text"
            spellcheck="false"
            className="rounded-full outline-none w-full h-full pl-6"
          />
          <div className="absolute flex items-center justify-center w-12 h-12 mr-1 bg-red-500 right-0 rounded-full">
            <RiSearchLine className="text-white text-xl " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
