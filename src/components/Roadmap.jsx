import React from "react";
import ethImg from "../assets/Etherium.png";
import roadImg from "../assets/roadmap.png";
import communityImg from "../assets/community.png";
import divider from "../assets/Divider.png";
const Roadmap = () => {
  return (
    <div id="Roadmap" className="max-w-[1140px] mx-auto mt-20">
      <div className="flex justify-between mx-16 items-center">
        <div className="max-w-[65%]">
          <h1 className="text-right drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            Our Future
          </h1>
          <p className="text-right text-[#b0885a]">
            The "NFTEA" collection is now available on OpenSea, featuring a
            curated selection of NFTs with a focus on value and scarcity.
          </p>
          <p className="my-2 text-right text-[#b0885a]">
            We are actively developing an additional drop which will contain
            maximum of 300 unique pieces to keep our scarcity promise.
          </p>
          <p className="text-right text-[#b0885a]">
            Our website and social media channels are updated on a regular basis
            to keep our community informed about upcoming drops, partnerships
            and other relevant news.
          </p>
        </div>
        <div className="w-[300px]">
          <img src={roadImg} alt="" />
        </div>
      </div>
      <div className="flex flex-row-reverse my-12 justify-between mx-16 items-center ">
        <div className="max-w-[65%]">
          <h1 className="text-left drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            Our People
          </h1>
          <p className="text-left text-[#b0885a]">
            At NFTEA we strive to build a community of like-minded individuals
            who are passionate about NFTS.
          </p>
          <p className="my-2 text-left text-[#b0885a]">
            Holding an NFT from our curated collection is not ony an investment,
            but also a way to join our community and connect with others who
            share your interests.
          </p>
          <p className="text-left text-[#b0885a]">
            We are dedicated to providing a professional and helpful experience
            for our customers, and we look forward to building connections
            within the NFT community.
          </p>
        </div>
        <div className="w-[300px]">
          <img src={communityImg} alt="" />
        </div>
      </div>
      <div className="flex justify-between mx-16 items-center ">
        <div className="max-w-[65%]">
          <h1 className="text-right drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            Our System
          </h1>
          <p className="text-right text-[#b0885a]">
            At NFTEA, we mint our NFTs on the Etherium blockchain for it's
            transparency and security. This ensures that our NFTs are unique,
            scarce and temper-proof.
          </p>
          <p className="my-2 text-right text-[#b0885a]">
            Using Etherium also enables us to take advantage of the growing
            ecosystem of decentralized applications, giving our customers more
            options for storage, transfer and display of their NFTs.
          </p>
          <p className="text-right text-[#b0885a]">
            We believe that minting our NFTs on Etherium is the best choice for
            our customers and for the long-term growth of our brand.
          </p>
        </div>
        <div className="w-[300px]">
          <img src={ethImg} alt="" />
        </div>
      </div>

      <img src={divider} alt="" className="mt-24 ml-32" />
    </div>
  );
};

export default Roadmap;
