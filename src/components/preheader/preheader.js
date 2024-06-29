import React from "react";
import "./preheader.css";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#FFFCEA] px-6 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Blue_Minimalist_Drone.png"
            className="logo"
            alt=""
          />
          <p className="font-semibold text-[#486D28] text-xs sm:text-sm ml-1">
            Trikon 1.0 Hackthon Project
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
