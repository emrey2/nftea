import React from "react";
import ethImg from "../assets/Etherium.png";
import roadImg from "../assets/roadmap.png";
import communityImg from "../assets/community.png";
import divider from "../assets/Divider.png";
const Roadmap = () => {
  return (
    <div id="Roadmap" className="max-w-[1140px] mx-auto mt-8">
      <div className="flex justify-between mx-16 items-center">
        <div className="max-w-[65%]">
          <h1 className="text-right drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            A sip of future
          </h1>
          <p className="text-right text-[#b0885a]">
            We are developing utilities such as: ability to integrate the NFTs
            into email footers and a 360-degree model of the postcard with a
            blank back which you can write anything on it.
          </p>
          <p className="my-8 text-right text-[#b0885a]">
            Moreover, we also are designing an another upcoming NFT collection
            in which we will be going more in-depth of tea culture of the globe
          </p>
          <p className="text-right text-[#b0885a]">
            Furthermore, we are planning to build an online tea shop that will
            first be based on our NFTs and thereafter reflect the entire global
            tea culture.
          </p>
          <p className="text-right my-4 text-[#b0885a]">
            To be transparent, we currently lack the funding necessary to
            implement these proposals. We promise to let you know when we act.
          </p>
        </div>
        <div className="w-[340px]">
          <img src={roadImg} alt="" />
        </div>
      </div>
      <div className="flex flex-row-reverse my-12 justify-between mx-16 items-center ">
        <div className="max-w-[65%]">
          <h1 className="text-left drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            Next generation tea party
          </h1>
          <p className="text-left text-[#b0885a]">
            We at NFTEA work hard to create a community who share our enthusiasm
            for NFTs and perhaps tea.
          </p>
          <p className="my-8 text-left text-[#b0885a]">
            Being a part of our community through Discord will grant you access
            to our 50 NFT giveaways of every collection we plan to release;
            giveaways will be taken place at the exact time of public sale date.
          </p>
          <p className="text-left text-[#b0885a]">
            Some advantages of our community include opportunities for learning
            about non-fungible tokens, the blockchain, NFT art, access to a
            network of like-minded collectors and aficionados, and more
          </p>
        </div>
        <div className="w-[340px]">
          <img src={communityImg} alt="" />
        </div>
      </div>
      <div className="flex justify-between mx-16 items-center ">
        <div className="max-w-[65%]">
          <h1 className="text-right drop-shadow-2xl my-4  text-[#EAD4AC] font-bold text-5xl">
            Brewed to perfection, forever.
          </h1>
          <p className="text-right text-[#b0885a]">
            At NFTEA, we mint our collections on the Ethereum blockchain for its
            transparency and security. This ensures that our tokens are unique,
            scarce, temper-proof and most importantly forever lasting.
          </p>
          <p className="my-8 text-right text-[#b0885a]">
            Using Ethereum also enables us to take advantage of the growing
            ecosystem of decentralized applications, use of smart contracts for
            our future references, giving our customers more options for
            storage, transfer and display of their NFTs.
          </p>
          <p className="text-right text-[#b0885a]">
            We believe that minting our NFTs on Ethereum is the best choice for
            our customers and for the long-term growth of our brand.
          </p>
        </div>
        <div className="w-[340px]">
          <img src={ethImg} alt="" />
        </div>
      </div>

      <img src={divider} alt="" className="mt-24 ml-32" />
    </div>
  );
};

export default Roadmap;
