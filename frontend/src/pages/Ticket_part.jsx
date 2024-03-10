import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Ticket_part = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-[100vw] md:m-0 h-[1780px] md:h-[800px]   mt-10 p-2">
      <div className="w-[100%] md:h-[755px] h-[950px] flex flex-col items-center justify-between bg-[#121E2C]">
        <div className="w-[100%] rounded-xl  flex flex-col items-center justify-center gap-4   h-[35%]">
          <div className="md:w-[800px] text-center w-[400px] h-[120px] px-2 mx-2   flex items-center justify-center text-[#13FBD3] md:text-[48px] text-[28px] font-benderregular font-bold">
            Get Yourself Registered for LPU's Biggest Cyber Security Conclave!
          </div>
          <p className="md:w-[674px] mt-8 md:h-[28px] w-[350px] text-center tracking-tighter  flex items-center justify-center text-[16px] md:text-[20px] text-[#F3F6FF] font-benderlight font-normal ">
            Enhance Your Cybersecurity Skills and Stay Ahead of
            Emerging Threats.
          </p>
        </div>
        <div className="w-[100%]  rounded-xl flex items-center justify-center  md:min-h-[450px] ">
          <div className="md:w-[76%] md:h-[95%] h-full w-full rounded-xl flex flex-col md:flex md:flex-row justify-between items-center">
            {/* yeh ak component hoga  */}
            <div className="md:h-[98%] w-[78%]  h-[440px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-[300px] md:w-[312px] h-[200px] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[45%]   ml-7 flex items-center justify-start font-benderregular font-bold text-[28px] text-[#13FBD3]">
                    Basic
                  </div>
                  <div className="h-full w-[25%]  mr-6 flex items-center justify-start font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular font-bold">
                      400
                    </span>
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
            <div className="md:h-[98%] w-[78%]  h-[440px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-[300px] md:w-[312px] h-[200px] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[45%]   ml-7 flex items-center justify-start font-benderregular  font-bold text-[28px] text-[#13FBD3]">
                    Explorer
                  </div>
                  <div className="h-full w-[25%]  mr-6 flex items-center justify-start font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular font-bold">
                      500
                    </span>
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
                    to="/registrationExplorer"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] flex items-center justify-center h-[70%] font-benderregular bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%]  h-[440px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-[300px] md:w-[312px] h-[200px] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[25%]  ml-14 flex items-center justify-center font-benderregular font-bold text-[28px] text-[#13FBD3]">
                    Enthusiast
                  </div>
                  <div className="h-full w-[25%]  mr-6 flex items-center justify-start font-benderregular font-semibold text-[18px] text-white">
                    Price:&nbsp;{" "}
                    <span className="text-[#00B3FF] font-benderregular font-bold">
                      1000
                    </span>
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
                    to="/registrationEnthusiast"
                    className="w-[90%] flex items-center justify-center  h-[55px] hover:cursor-pointer"
                  >
                    <button className="w-[80%] font-benderlight flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
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
