import { Link } from "react-router-dom";
import cisco from "../assets/CiscoLogo101.png";
import { useState } from "react";
// import { slide as Menu } from "react-burger-menu";
// import Sidebar from "../home/Sidebar/Sidebar";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="w-[100vw] h-[8vh] px-5 z-10 flex bg-gradient-to-b  from-[#09131D] to-[#121E2C] items-center justify-between md:h-[15vh] ">
        <div className="w-[20%] md:w-[10%] overflow-hidden h-[80%] flex items-center justify-center ml-3  rounded-lg">
          <img
            src={cisco}
            alt="cisco"
            className="w-[100%] h-[100%] md:w-[70%] md:h-[70%] object-cover object-center"
          />
        </div>
        <div className="hidden md:flex justify-between items-center w-[50%] h-[80%]  rounded-lg">
          <Link to="https://ciscoxlpuigen.co.in/" className="w-[23%]">
            <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex text-white justify-center items-center font-bold text-xl  h-[100%] rounded-b-none    rounded-2xl ">
              HOME
            </div>
          </Link>
          <Link
            to="https://ciscoxlpuigen.netlify.app/About"
            className="w-[25%]"
          >
            <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]   rounded-b-none  rounded-2xl ">
              ABOUT US
            </div>
          </Link>
          <Link
            to="https://ciscoxlpuigen.netlify.app/Blogs"
            className="w-[23%]"
          >
            <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]  rounded-b-none   rounded-2xl ">
              BLOGS
            </div>
          </Link>
          <Link
            to="https://ciscoxlpuigen.netlify.app/cybersec"
            className="w-[23%]"
          >
            <div className="w-[100%] font-benderregular  hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none   rounded-2xl ">
              EVENTS
            </div>
          </Link>
          <Link to="/" className="w-[23%]">
            <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none    rounded-2xl ">
              REGISTER
            </div>
          </Link>
        </div>
        <div className="w-[45%] md:w-[10%] h-[80%] flex items-center justify-end md:justify-center  rounded-lg">
          {/* <button class="relative w-[150px] mt-2 md:mt-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[37px] group bg-gradient-to-br from-[#00B3FF] to-[#2CE1C0]  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative w-[150px] px-5 py-2.5 transition-all ease-in duration-75 text-[12px] md:text-[20px] font-semibold bg-white dark:bg-gray-900 rounded-[37px] text-[#13FBD3] hover:bg-[#13FBD3] hover:text-black">
              Join Us
            </span>
          </button> */}
          <div
            onClick={() => setshow(!show)}
            className="w-[35%]  p-1 md:hidden flex flex-col gap-1 justify-center items-center   h-[90%] "
          >
            <div className="h-[10%] w-[60%] bg-black"></div>
            <div className="h-[10%] w-[60%] bg-black"></div>
            <div className="h-[10%] w-[60%] bg-black"></div>
            {show && (
              <div className="bg-gray-900 opacity-85 p-4 md:hidden absolute flex items-center justify-center top-8 rounded-xl z-[10000] right-5 h-[300px] w-[200px]">
                <div className="w-[80%] h-[80%]  flex flex-col  justify-between rounded-lg">
                  <Link to="https://ciscoxlpuigen.co.in/" className="w-[100%]">
                    <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex text-white justify-center items-center font-bold text-xl  h-[100%] rounded-b-none    rounded-2xl ">
                      HOME
                    </div>
                  </Link>
                  <Link
                    to="https://ciscoxlpuigen.netlify.app/About"
                    className="w-[100%] "
                  >
                    <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]   rounded-b-none  rounded-2xl ">
                      ABOUT US
                    </div>
                  </Link>
                  <Link
                    to="https://ciscoxlpuigen.netlify.app/Blogs"
                    className="w-[100%]"
                  >
                    <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%]  rounded-b-none   rounded-2xl ">
                      BLOGS
                    </div>
                  </Link>
                  <Link
                    to="https://ciscoxlpuigen.netlify.app/cybersec"
                    className="w-[100%]"
                  >
                    <div className="w-[100%] font-benderregular  hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none   rounded-2xl ">
                      EVENTS
                    </div>
                  </Link>
                  <Link to="/" className="w-[100%]">
                    <div className="w-[100%] font-benderregular hover:border-b-2 hover:cursor-pointer hover:border-b-green-500 transition ease-in duration-100 flex justify-center items-center font-bold text-xl text-white h-[100%] rounded-b-none    rounded-2xl ">
                      REGISTER
                    </div>
                  </Link>
                </div>
              </div>
            )}
            {/* <div className="w-[95vw] h-[90vh] absolute top-0  mx-auto bg-black opacity-50"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
