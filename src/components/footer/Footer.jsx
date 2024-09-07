/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      {/* sticky bottom-0  */}
      <div
        id="explore-contact"
        className="text-black z-10 w-full rounded-lg bg-[#f0f0f0] flex flex-col items-center p-[3rem] md:px-[6rem] mt-[3rem]"
      >
        <div className="w-[100%] grid md:grid-cols-3 gap-[3rem] md:gap-[8rem]">
          <div className="flex flex-col items-start gap-5">
            <p className="text-black font-bold text-[1.7rem]">
              <span className="text-[#5F5E61]">ETL</span>
              <span className="text-[#8C6BF9]">HIVE</span>
            </p>
            <p className="w-[10rem]">Discover engaging blogs with ETLHIVE.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-black text-[1.7rem] font-semibold">Company</p>
            <ul>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">
                Home
              </li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">
                About Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-black text-[1.7rem] font-semibold">
              GET IN TOUCH
            </p>
            <ul>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">
                +1-222-555-9878
              </li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">
                contact@etlhive.com
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[1px] w-[100%] my-4 bg-gray-500 border-0 " />
        <p className="mb-[-2rem]">
          Copyright 2024 @ ETLHIVE.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
