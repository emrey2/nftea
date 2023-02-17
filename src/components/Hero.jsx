import React from "react";
import hero from "../assets/layoutcut.png";

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="top-0 left-0 w-full h-full object-cover"
        src={hero}
        alt="/"
      />
      <div className="absolute top-0 w-full mt-28 h-full flex flex-col justify-center text-white">
        <div className="md:left-[50%]  max-w-[400px] ml-[212px] absolute pl-2">
          <h1 className="font-bold text-5xl  text-[#EAD4AC] md:text-2xl drop-shadow-2xl">
            Drink in the art of scarcity
          </h1>
          <p className="max-w-[600px]   text-[#b0885a] drop-shadow-2xl py-2 text-xl">
            Where culture meets art in a unique NFT collection. Celebrate and
            preserve cultural heritage with 300 exclusive pixel art pieces on
            the blockchain.
          </p>
          <button className=" mt-2">View on OpenSea</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
