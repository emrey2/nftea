import React, { useState } from "react";
import logoimg from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex flex-row-reverse w-full absolute justify-between items-center  h-14 px-4 top-0 z-10 text-white">
      <div className="links">
        <a href="/">Home</a>
        <a href="#About">About Us</a>
        <a href="#Roadmap">Roadmap</a>
        <a href="#Contact">Contact</a>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="border-b">Home</li>
          <li className="border-b">About Us</li>
          <li className="border-b">Roadmap</li>
          <li className="border-b">Contact</li>
          <div className="flex flex-col">
            <button className="my-6">View On Opensea</button>
          </div>
          <div className="flex justify-between my-6">
            <FaTwitter className="icon" />

            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
