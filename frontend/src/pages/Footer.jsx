import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import cisco from "../assets/CiscoLogo101.png";

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] h-[70vh] md:h-[50vh] md:flex md:items-center md:gap-2 md:pt-10 md:justify-center bg-gradient-to-b  from-[#09131D] to-[#121E2C]">
        <div className="w-full h-[13%] mx-1 md:hidden block">
          <div className="w-[20%] h-[100%]">
            <img
              src={cisco}
              alt="cisco"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full h-[40%] md:hidden block">
          <div className="text-3xl font-bold mx-3 mb-2 text-[#13FBD3] flex items-center justify-start ">
            Quick Links
          </div>
          <ul className="flex gap-2 mx-2 pl-2 mt-2 tracking-tighter text-sm">
            <div className="flex flex-col gap-3 mx-3">
              <li>Home</li>
              <li>Events</li>
              <li>Workshops</li>
              <li>Blog</li>
            </div>
            <div className="flex flex-col gap-3 mx-3 ">
              <li>Team</li>
              <li>Gallery</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
        <div className="w-full h-[30%]  md:hidden block">
          <div className="text-3xl font-bold mx-3 mb-2 text-[#13FBD3] flex items-center justify-start ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-1 mx-3 pl-2 mt-4 tracking-tighter text-lg items-start justify-center">
            <li className="flex gap-2 justify-center items-center h-5 ">
              <MdOutlineMailOutline className="text-[#13FBD3]  h-4" />
              <span className="flex items-center justify-center  h-4 pb-1">
                {" "}
                example@gmail.com
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-[#13FBD3]  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                12345
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-[#13FBD3] h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                13243434545
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-[17%] mt-3 flex justify-center items-center gap-4  md:hidden">
          <FaDiscord className="w-8 h-8 text-[#13FBD3]" />
          <FaFacebook className="w-8 h-8 text-[#13FBD3]" />
          <FaInstagram className="w-8 h-8 text-[#13FBD3]" />
          <FaLinkedin className="w-8 h-8 text-[#13FBD3]" />
        </div>
        <div className="hidden md:flex h-[90%] w-[40%] p-1  flex-col items-center justify-center gap-2 ">
          <div className="w-[90%] h-[20%] ">
            {" "}
            <div className="w-[20%] h-[100%]">
              <img
                src={cisco}
                alt="cisco"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-[90%] h-[40%]  flex justify-start items-center text-left ">
            {" "}
            The Cisco x LPU iGen Community is an initiative undertaken by the
            tech enthusiasts at Lovely Professional University, with an
            objective to revolutionize the way we approach tech education and
            thus encourage peer-based practical learning
          </div>
          <div className="w-[90%] h-[30%] flex justify-start items-center gap-4 ">
            <FaDiscord className="w-8 h-8 text-[#13FBD3]" />
            <FaFacebook className="w-8 h-8 text-[#13FBD3]" />
            <FaInstagram className="w-8 h-8 text-[#13FBD3]" />
            <FaLinkedin className="w-8 h-8 text-[#13FBD3]" />
          </div>
        </div>
        <div className="hidden md:block h-[90%] w-[25%] ">
          {" "}
          <div className="text-5xl font-bold mx-3 mb-16 text-[#13FBD3] ">
            Quick Links
          </div>
          <ul className="flex gap-16 mx-3 tracking-tighter text-xl mt-4">
            <div className="flex flex-col gap-3 mx-3">
              <li>Home</li>
              <li>Events</li>
              <li>Workshops</li>
              <li>Blog</li>
            </div>
            <div className="flex flex-col gap-3 mx-3 ">
              <li>Team</li>
              <li>Gallery</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
        <div className="h-[90%] w-[25%] hidden md:block ">
          <div className="text-5xl font-bold mx-3 mb-14 text-[#13FBD3] ">
            Contact Us
          </div>
          <ul className="flex flex-col gap-3 mx-3 pl-5 mt-4 tracking-tighter text-xl items-start justify-center">
            <li className="flex gap-2 justify-center items-center h-10 ">
              <MdOutlineMailOutline className="text-[#13FBD3] h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                example@gmail.com
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-[#13FBD3]  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                12345
              </span>
            </li>
            <li className="flex gap-2 justify-center items-center h-10 ">
              <IoCallOutline className="text-[#13FBD3]  h-8" />
              <span className="flex items-center justify-center  h-8 pb-1">
                {" "}
                13243434545
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
