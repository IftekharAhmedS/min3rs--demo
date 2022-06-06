import React from "react";
import discordIcon from "../../assets/icons/discord-icon.png";

const HeroSection = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content text-center hero-section p-[2rem]">
        <div className="tracking-[1.5px]">
          <h1 className="text-[36px] max-w-[623px]  font-[700] text-white">
            Deploying ASICS and Acquiring Nodes to Provide Rewards
          </h1>
          <p className="py-6 text-[#E0E0E0] hero-section-desc max-w-[568px] mx-auto">
            999 access passes that will act as the genesis collection for the
            MIN3RS ecosystem - granting access and benefits to all future
            developments.
          </p>
          <div className="hero-buttons-area flex justify-center">
            <button className="btn btn-lg hero-btn gap-2 capitalize mr-8 text-white bg-[#5865F2]">
                <img src={discordIcon} alt="" />
              Join Discord
            </button>
            <button className="btn btn-lg hero-btn capitalize text-white bg-[#333333]">Whitepaper</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
