import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="Footer" className=" bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Thank you for taking your time.</h3>
          <p> Join, follow, grow. </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center w-auto  px-4 py-2 w-52 mx-2">
              <a
                href="https://discord.gg/MEKDwPkx"
                target="_blank"
                className="hover:text-[#b0885a] duration-300"
              >
                <FaDiscord size={32} />
              </a>
            </div>
            <div className="flex items-center  w-auto  px-4 py-2 w-44 mx-2">
              <a
                href="https://www.instagram.com/nftea_xyz_/"
                target="_blank"
                className="hover:text-[#b0885a] duration-300"
              >
                <AiFillInstagram size={32} />
              </a>
            </div>
            <div className="flex items-center  w-auto  px-4 py-2 w-44 mx-2">
              <a
                href="https://twitter.com/nftea_xyz_"
                target="_blank"
                className="hover:text-[#b0885a] duration-300"
              >
                <FaTwitter size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-28 flex justify-center md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="text-center"> &copy; nftea_xyz, 2023. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
