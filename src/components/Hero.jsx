import React from "react";
import hero from "../assets/layoutcut.png";

const Hero = () => {
  return (
    <div id="Home" className="sm:w-full sm:h-full sm:relative">
      <img
        className="sm:top-0 sm:left-0 sm:w-full sm:h-full sm:object-cover "
        src={hero}
        alt="/"
      />
      <div className="sm:absolute sm:top-0 sm:w-full sm:mt-28 sm:h-full sm:flex sm:flex-col sm:justify-center mb-32 p-4">
        <div className="sm:left-[50%] sm:max-w-[400px] sm:ml-[212px] sm:absolute sm:pl-2">
          <h1 className="font-bold text-5xl  text-[#EAD4AC] sm:text-2xl drop-shadow-2xl ">
            Drink in the art of scarcity
          </h1>
          <p className="sm:max-w-[600px] text-[#b0885a] sm:drop-shadow-2xl sm:py-2 sm:text-xl">
            Where culture meets art in unique NFT collections. Celebrate and
            preserve cultural heritage with 300 exclusive pixel art pieces on
            the blockchain; join a growing community today.
          </p>
          <a href="#About">
            <button className="mt-4 hidden sm:block">Discover More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
