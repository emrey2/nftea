import React from "react";
import england from "../assets/england.png";
import japan from "../assets/japan.png";
import india from "../assets/india.png";
import turkey from "../assets/turkey.png";
import divider from "../assets/Divider.png";

const AboutUs = () => {
  return (
    <div
      id="About"
      className="max-w-[1140px] m-auto px-4 grid lg:grid-cols-2 gap-4"
    >
      {/* Left Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl text-[#EAD4AC] md:text-6xl font-bold">
          Lorem ipsum dolor sit
        </h3>
        <p className="text-2xl py-6 text-[#b0885a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className="pb-6 text-[#b0885a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button>View on opensea</button>
        </div>
      </div>
      {/* Right Side */}

      <div className="grid grid-cols-2 grid-rows-2 h-[60vh]">
        <img
          className=" object-contain w-full  h-full p-2 hover:scale-105 duration-300"
          src={india}
          alt="/"
        />
        <img
          className=" object-contain w-full h-full p-2 hover:scale-105 duration-300"
          src={japan}
          alt="/"
        />
        <img
          className="object-contain w-full h-full p-2 hover:scale-105 duration-300"
          src={turkey}
          alt="/"
        />
        <img
          className=" object-contain w-full h-full p-2 hover:scale-105 duration-300"
          src={england}
          alt="/"
        />
      </div>

      <img src={divider} alt="" className="ml-[310px] mt-8 w-[1080px]" />
    </div>
  );
};

export default AboutUs;
