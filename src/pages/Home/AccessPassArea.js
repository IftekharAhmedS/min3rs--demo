import React from "react";
import accessPass from '../../assets/images/accessPass.png'

const AccessPassArea = () => {
  return (
    <div className="hero min-h-screen mx-auto w-10/12">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={accessPass}
          className="max-w-sm rounded-lg shadow-2xl mr-44"
          alt="access pass"
        />
        <div className="tracking-[1.5px]">
          <h1 className="text-[32px] font-[700] text-white w-[510px]">Merging the metaspace with real world technologies</h1>
          <p className="py-6 access-para text-[#BDBDBD] leading-[34px] text-[16px] w-[467px] ">
            999 access passes that will act as the genesis collection for the MIN3RS ecosystem - granting access and benefits to all future developments.999 access passes that will act as the genesis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessPassArea;
