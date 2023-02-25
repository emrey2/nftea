import React, { useState } from "react";
import logoimg from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [color, setColor] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="links mr-8">
        <a href="#Home">Home</a>
        <a href="#About">About Us</a>
        <a href="#Roadmap">Roadmap</a>
        <a href="#Contact">Contact</a>
      </div>

      {/* Mobile menu dropdown */}
    </div>
  );
};

export default Navbar;
