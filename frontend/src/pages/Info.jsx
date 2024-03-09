import React from "react";
import time from "../assets/time table.png";

const Info = () => {
  // bg-[#09131D]
  return (
    <div className="w-[100vw]    m-0">
      <div className="flex flex-col md:flex md:flex-row   justify-center h-[800px]  items-center md:w-[100%] md:h-[444px]  ">
        {" "}
        <div className="md:w-[60%] md:h-full w-[100%]  h-[60%]  rounded-lg flex gap-2 items-start justify-center  ">
          <div className="w-[430px] md:w-[850px]   flex flex-col items-center justify-center gap-2 mt-10">
            <div className="text-left md:w-[430px] md:h-[58px] h-[70px] flex items-center md:justify-center justify-center  text-[#13FBD3] md:text-[48px] text-[35px] font-benderregular font-bold ">
              Workshop Pattern
            </div>
            <div className="font-benderlight  md:mb-5 md:text-left text-center md:w-[full] md:h-[340px]  leading-7  flex items-center justify-center  text-white md:text-[20px] font-normal ">
              <img
                src={time}
                className="w-full h-full object-cover md:mb-12 "
              />
            </div>
          </div>
        </div>
        <div className="font-benderlight relative  md:w-[40%] h-[40%] w-[100%] md:h-full  rounded-lg flex flex-row md:gap-2 justify-between md:justify-start">
          <div className="h-[86%] flex flex-col p-2 items-center justify-center gap-4  w-[45%]  rounded-xl absolute bottom-3 left-2">
            <div className="h-[47%]  w-[90%] bg-[#121E2C] border-2 border-solid flex flex-col items-center justify-center gap-3 border-[#2CE1C0]   rounded-2xl">
              <div className="w-[45px] text-white h-[18px]  flex items-center justify-center font-normal font-benderlight text-[15px]">
                Day 1
              </div>
              <div className="md:w-[198.67px]  leading-none h-[65px] text-center  flex items-center justify-center text-[#13FBD3] text-[12px] w-[160px]  md:text-[16px] p-1 font-benderregular font-bold">
                Introduction to Cybersecurity and Bug Bounty
              </div>
              <div className="w-[122.8px] h-[17.21px] rounded-2xl  text-white flex items-center justify-center text-[11px]">
                <span></span>10:00 am - 04:00pm
              </div>
            </div>
            <div className="h-[47%] w-[99%]  md:w-[90%] bg-[#121E2C] border-2 border-solid flex flex-col items-center justify-center gap-3 border-[#2CE1C0]   rounded-2xl">
              {" "}
              <div className="w-[45px] text-white h-[18px]  flex items-center justify-center font-benderlight font-normal text-[15px]">
                Day 1
              </div>
              <div className="md:w-[198.67px]  leading-none h-[65px] text-center  flex items-center justify-center text-[#13FBD3] text-[12px] w-[160px]  md:text-[16px] p-1 font-benderregular font-bold">
                Understanding Malware and Basic Malware Analysis
              </div>
              <div className="w-[122.8px] h-[17.21px] rounded-2xl  text-white flex items-center justify-center text-[11px]">
                <span></span>10:00 am - 04:00pm
              </div>
            </div>
          </div>
          <div className="h-[86%] flex flex-col p-2 items-center justify-center gap-4  w-[45%]  rounded-xl absolute top-3 right-4 md:right-10">
            <div className="h-[47%]  w-full md:w-[90%] bg-[#121E2C] border-2 border-solid flex flex-col items-center justify-center gap-3 border-[#2CE1C0]   rounded-2xl">
              {" "}
              <div className="w-[45px] text-white h-[18px]  flex items-center justify-center font-normal text-[15px]">
                Day 2
              </div>
              <div className="md:w-[198.67px]  leading-none h-[65px] text-center  flex items-center justify-center text-[#13FBD3] text-[12px] w-[160px]  md:text-[16px] p-1 font-benderregular font-bold">
                Introduction to Pentesting and Android App Pentest
              </div>
              <div className="w-[122.8px] h-[17.21px] rounded-2xl  text-white flex items-center justify-center text-[11px]">
                <span></span>10:00 am - 04:00pm
              </div>
            </div>
            <div className="h-[47%]  w-full md:w-[90%] bg-[#121E2C] border-2 border-solid flex flex-col items-center justify-center gap-3 border-[#2CE1C0]   rounded-2xl">
              {" "}
              <div className="w-[45px] text-white h-[18px]  flex items-center justify-center font-benderlight font-normal text-[15px]">
                Day 2
              </div>
              <div className="md:w-[198.67px]  leading-none h-[65px] text-center  flex items-center justify-center text-[#13FBD3] text-[12px] w-[160px]  md:text-[16px] p-1 font-benderregular font-bold">
                Introduction to Blockchain and Threat Intelligence
              </div>
              <div className="w-[122.8px] h-[17.21px] rounded-2xl  text-white flex items-center justify-center text-[11px]">
                <span></span>10:00 am - 04:00pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
