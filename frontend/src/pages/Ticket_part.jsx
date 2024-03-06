import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Ticket_part = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-[100vw] min-h-screen   m-0">
      <div className="w-[100%] md:h-[700px] h-[600px] flex flex-col items-center justify-between bg-[#121E2C]">
        <div className="w-[100%] rounded-xl flex flex-col items-center justify-center gap-4   h-[35%]">
          <div className="md:w-[800px] text-center w-[400px] h-[68px]   flex items-center justify-center text-[#13FBD3] md:text-[48px] text-[30px] font-bold">
            Register for Our Cyber Workshop
          </div>
          <p className="md:w-[674px] md:h-[28px] w-[350px] text-center tracking-tighter  flex items-center justify-center text-[16px] md:text-[20px] text-[#F3F6FF] font-normal ">
            Enhance Your Cybersecurity Skills and Stay Ahead of Emerging Threats
          </p>
        </div>
        <div className="w-[100%] rounded-xl flex items-center justify-center  md:min-h-[450px] min-h-[900px]">
          <div className="md:w-[76%] md:h-[95%] h-full w-full rounded-xl flex flex-col md:flex md:flex-row justify-between items-center">
            {/* yeh ak component hoga  */}
            <div className="md:h-[98%] w-[78%] h-[500px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-full h-[45%] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-center font-bold text-[24px] text-[#13FBD3]">
                    Basic
                  </div>
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-start font-normal text-[18px] text-white">
                    Price:&nbsp; <span className="text-[#00B3FF]">xxx</span>
                  </div>
                </div>
                <div className="w-full h-[50%] p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-3 flex items-center justify-start font-bold text-[17px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-3 flex items-center justify-center font-normal text-[13px] text-white">
                    <span className="text-[#13FBD3]"> &#10004; &nbsp;</span>Get
                    Access to workshop of Day-1 or Day-2
                  </div>
                </div>

                <div className="w-full h-[30%]  flex items-center justify-center">
                  <button
                    onClick={() => {
                      console.log("i got clicked");
                      setModalOpen(true);
                    }}
                    className="w-[80%] flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black"
                  >
                    <Link to="/registrationBasic">Register</Link>
                  </button>

                  {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%] h-[500px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-full h-[45%] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-center font-bold text-[24px] text-[#13FBD3]">
                    Basic
                  </div>
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-start font-normal text-[18px] text-white">
                    Price:&nbsp; <span className="text-[#00B3FF]">xxx</span>
                  </div>
                </div>
                <div className="w-full h-[50%] p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-3 flex items-center justify-start font-bold text-[17px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-3 flex items-center justify-center font-normal text-[13px] text-white">
                    <span className="text-[#13FBD3]"> &#10004; &nbsp;</span>Get
                    Access to workshop of Day-1 or Day-2
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <button className="w-[80%] flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                    <Link to="/registrationExplorer">Register</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:h-[98%] w-[78%] h-[500px] m-2  rounded-2xl md:w-[28%] overflow-hidden">
              <div className="w-full h-[45%] bg-gray-100 "></div>
              <div className="w-full h-[55%] p-2 bg-[#09131D] flex flex-col  roundedlg">
                <div className="w-full h-[20%]  flex justify-between ">
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-center font-bold text-[24px] text-[#13FBD3]">
                    Basic
                  </div>
                  <div className="h-full w-[25%]  ml-1 flex items-center justify-start font-normal text-[18px] text-white">
                    Price:&nbsp; <span className="text-[#00B3FF]">xxx</span>
                  </div>
                </div>
                <div className="w-full h-[50%] p-2 flex flex-col items-center justify-between  ">
                  <div className="w-full h-[25%]  ml-3 flex items-center justify-start font-bold text-[17px] text-[white] ">
                    Workshop Offerings:
                  </div>
                  <div className="w-full h-[55%]  ml-3 flex items-center justify-center font-normal text-[13px] text-white">
                    <span className="text-[#13FBD3]"> &#10004; &nbsp;</span>Get
                    Access to workshop of Day-1 or Day-2
                  </div>
                </div>
                <div className="w-full h-[30%]  flex items-center justify-center">
                  <button className="w-[80%] flex items-center justify-center h-[70%] bg-gradient-to-r  from-[#00B3FF] to-[#2CE1C0] rounded-3xl text-black">
                    <Link to="/registrationEnthusiast">Register</Link>
                  </button>
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
