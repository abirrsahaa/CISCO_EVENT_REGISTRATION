import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

import basic from "../assets/1.png";
import explorer from "../assets/2.png";
import enthusiast from "../assets/3.png";
import starter from "../assets/starter.png";

const Ticket_part = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // bg-[#121E2C]
    <div className="w-[100vw]  md:m-0 h-[2050px]  md:h-[900px]    ">
      <div className="w-[100%] md:h-full   h-[1700px] flex flex-col items-center justify-between md:justify-center ">
        <div className="w-[100%] rounded-xl   flex flex-col items-center justify-center gap-4   h-[35%]">
          <div className="md:w-[800px] text-center w-[400px] h-[120px] px-2 mx-2   flex items-center justify-center text-[#13FBD3] md:text-[48px] text-[28px] font-benderregular font-bold">
            Get Yourself Registered for LPU's Biggest Cyber Security Conclave!
          </div>
          <p className="md:w-[674px] mt-8 md:h-[28px] w-[350px] text-center   flex items-center justify-center text-[16px] md:text-[20px] text-[#F3F6FF] font-benderlight font-normal ">
            Enhance Your Cybersecurity Skills and Stay Ahead of
            Emerging Threats.
          </p>
          {/* <p className="md:w-[674px] text-yellow-500  mt-8 md:h-[28px] w-[350px] text-center tracking-tighter  flex items-center justify-center text-[16px] md:text-[20px]  font-benderlight font-normal ">
            This Holi colour yourself with the shades of Cybersecurity. Prices
            dropped for a limited time.!!
          </p> */}
        </div>
        <div className="w-[100%]   rounded-xl  flex items-center justify-center  md:min-h-[450px] ">
          <div className="md:w-[96%] md:h-[95%]   h-full w-full rounded-xl flex flex-col md:flex md:flex-row justify-between items-center">
            {/* yeh ak component hoga  */}
            <div className="md:h-[98%] w-[78%]    h-[440px] m-2  rounded-2xl md:w-[24%] overflow-hidden">
              <div className="w-[300px] md:w-full h-[200px] bg-gray-100 ">
                <img
                  src={basic}
                  alt="basic"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between items-center">
                  <div className="h-full w-[35%]   ml-2 flex items-center justify-start font-benderregular font-bold text-[28px] text-[#13FBD3]">
                    Basic
                  </div>
                  <div className="h-full  w-[55%]  mr-2 flex items-center justify-end pr-1 font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular font-bold ">
                      &nbsp;399&nbsp;
                    </span>
                    {/* <span className="text-[#00B3FF] font-benderregular font-bold ">
                      &nbsp;&nbsp;249
                    </span> */}
                  </div>
                </div>
                <div className="w-full h-[50%]  p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-10 flex items-center justify-start mt-2 font-benderregular font-bold text-[20px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-1 text-left font-benderlight font-normal text-[14px] text-white">
                    <span className="text-[#13FBD3]"> &#10004; &nbsp;</span>
                    check out perks you will{" "}
                    <span className="text-[#13FBD3]">crave</span> for<br></br>
                    <span className="text-[#13FBD3]"> &#10004; &nbsp;</span>
                    click on
                    <span className="text-[#13FBD3]"> Register</span>
                    <br></br>
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <Link
                    to="/registrationBasic"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] flex font-benderregular items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%] opacity-20  h-[440px] m-2  rounded-2xl md:w-[24%] overflow-hidden">
              <div className="w-[300px] md:w-full h-[200px] bg-gray-100 ">
                {" "}
                <img
                  src={explorer}
                  alt="explorer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full  h-[20%]  flex justify-between ">
                  <div className="h-full w-[35%]    ml-2 flex items-center justify-start font-benderregular  font-bold text-[28px] text-[#13FBD3]">
                    Explorer
                  </div>
                  <div className="h-full w-[45%]   mr-2 flex items-center justify-end pr-1 font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular font-bold ">
                      &nbsp;499&nbsp;
                    </span>
                    {/* <span className="text-[#00B3FF] font-benderregular font-bold ">
                      &nbsp;&nbsp;349
                    </span> */}
                  </div>
                </div>
                <div className="w-full h-[50%]  p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-10 flex items-center justify-start mt-2 font-benderregular font-bold text-[20px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-1 text-left font-benderlight font-normal text-[14px] text-white">
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    check out perks you will{" "}
                    <span className="text-[#13FBD3] font-benderlight">
                      crave
                    </span>{" "}
                    for<br></br>
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    click on
                    <span className="text-[#13FBD3] font-benderregular">
                      {" "}
                      Register
                    </span>
                    <br></br>
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <Link
                    to="#"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] flex items-center justify-center h-[70%] font-benderregular bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                      Sold Out!!!!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%] opacity-20    h-[440px] m-2  rounded-2xl md:w-[24%] overflow-hidden">
              <div className="w-[300px] md:w-full h-[200px] bg-gray-100 ">
                <img
                  src={enthusiast}
                  alt="enthusiast"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-[55%]  p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full  w-[35%]  ml-5 flex items-center justify-center font-benderregular font-bold text-[28px] text-[#13FBD3]">
                    Enthusiast
                  </div>
                  <div className="h-full w-[50%]   flex items-center justify-end pr-1 font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular  font-bold">
                      &nbsp;999&nbsp;
                    </span>
                    {/* <span className="text-[#00B3FF] font-benderregular font-bold  ">
                      &nbsp;&nbsp;649
                    </span> */}
                  </div>
                </div>
                <div className="w-full h-[50%]  p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-10 flex items-center justify-start mt-2 font-benderregular font-bold text-[20px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-1 text-left font-benderlight font-normal text-[14px] text-white">
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    check out perks you will{" "}
                    <span className="text-[#13FBD3] font-benderlight">
                      crave
                    </span>{" "}
                    for<br></br>
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    click on
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      Register
                    </span>
                    <br></br>
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <Link
                    to="#"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] font-benderlight font-bold flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                      Sold Out!!!!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%]   h-[440px] m-2  rounded-2xl md:w-[24%] overflow-hidden">
              <div className="w-[300px] md:w-full h-[200px] bg-gray-100 ">
                <img
                  src={starter}
                  alt="enthusiast"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full  w-[35%]  ml-5 flex items-center justify-center font-benderregular font-bold text-[28px] text-[#13FBD3]">
                    Starter
                  </div>
                  <div className="h-full w-[50%]   flex items-center justify-end pr-1 font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular  font-bold">
                      &nbsp;179&nbsp;
                    </span>
                    {/* <span className="text-[#00B3FF] font-benderregular font-bold  ">
                      &nbsp;&nbsp;649
                    </span> */}
                  </div>
                </div>
                <div className="w-full h-[50%]  p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-10 flex items-center justify-start mt-2 font-benderregular font-bold text-[20px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-1 text-left font-benderlight font-normal text-[14px] text-white">
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    check out perks you will{" "}
                    <span className="text-[#13FBD3] font-benderlight">
                      crave
                    </span>{" "}
                    for<br></br>
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      &#10004; &nbsp;
                    </span>
                    click on
                    <span className="text-[#13FBD3] font-benderlight">
                      {" "}
                      Register
                    </span>
                    <br></br>
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <Link
                    to="/registrationStarter"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] font-bold font-benderlight flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Modal /> */}
        </div>
      </div>
    </div>
  );
};

export default Ticket_part;
