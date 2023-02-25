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
      className="max-w-[1140px] m-auto px-4 grid sm:grid-cols-2 gap-4 "
    >
      {/* Left Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl text-[#EAD4AC] sm:text-6xl font-bold">
          Discover the Blockchain's Tea Wonders
        </h3>
        <p className="text-2xl py-6 text-[#b0885a]">
          The first and only collection of tokenized tea postcards.
        </p>
        <p className="pb-6 text-[#b0885a] ">
          Blockchain’s Tea Wonders is a collection of 300 one-of-a-kind low-cost
          collectible postcards that represent the tea culture around the world
          with proof of ownership stored on the Ethereum blockchain and
          published on the NFT marketplace of OpenSea, all the while building a
          community as the essence.
        </p>
        <div>
          <a href="https://opensea.io/collection/tea-wonders" target="_blank">
            <button>View on OpenSea</button>
          </a>
        </div>
      </div>
      {/* Right Side */}

      <div className="grid grid-cols-2 grid-rows-2 sm:h-[60vh]">
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

      <img
        src={divider}
        alt=""
        className="ml-[310px] mt-8 w-[1080px] hidden sm:block"
      />
    </div>
  );
};

export default AboutUs;
