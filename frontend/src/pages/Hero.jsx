import React from "react";

const Hero = () => {
  return (
    <div className="w-[100vw]   m-0">
      <div className="flex flex-col text-white justify-center h-[300px] md:gap-8 items-center md:w-[100%] md:h-[593px] bg-gradient-to-b  from-[#09131D] to-[#121E2C] ">
        <div className="flex items-center justify-center  md:w-[785px] md:h-[76px] w-[650px]  font-bold text-[32px] md:text-[70px] leading-10  ">
          Register For&nbsp;<span className="text-[#13FBD3]"> Workshops</span>
        </div>
        <p className="flex font-bender text-white items-center justify-center  md:w-[606px] md:h-[56px] font-normal  p-5 md:p-0 tracking-tighter md:tracking-normal text-center text-[15px] md:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Hero;
