import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import basic from "../assets/basic-min.png";
import basicmobile from "../assets/mobile basic.png";

import { useNavigate } from "react-router-dom";

import { buyCourse } from "../components/service";

const Registration1 = () => {
  const [dberror, setdberror] = useState(null);
  // const [zoderror, setzoderror] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [phoneError, setPhoneNumberError] = useState(null);
  const [registrationError, setRegistrationNumberError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [eventError, setEventError] = useState(null);

  // const [techtalkError, setTechtalkError] = useState(null);

  const navigate = useNavigate();
  // const registration = "http://localhost:3000/register";
  const options = [
    {
      content: "Day-2 (Introduction to blockchain and Threat intelligence)",
    },
  ];
  const [fullname, setfullname] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [RegistrationNumber, setRegistrationNumber] = useState("");
  const [Email, setEmail] = useState("");

  const [Referral, setReferral] = useState("");

  const [university, setuniversity] = useState("");
  const [gender, setgender] = useState("");
  const [year, setyear] = useState("");
  const [course, setcourse] = useState("");

  const [selected, setselected] = useState(null);
  const [availed, setavailed] = useState(false);
  useEffect(() => {
    console.log("the selected option is ", options[selected]);
    console.log("the availed option is ", availed);
  }, [selected, availed]);

  useEffect(() => {
    const getting = async () => {
      console.log("inside getting");
      const response = await fetch(
        "https://cisco-payments.sabal.in/countBasic"
      );
      const data = await response.json();
      console.log("the data is ", data);
      console.log("the number of basic ticket bought is --> ", data.message);
    };
    getting();
  }, []);

  const checking_api = "https://cisco-payments.sabal.in/checking";
  // const checking_api = "http://localhost:3000/checking";

  return (
    <div className="w-[100vw] h-[1000px] md:h-[800px] md:[100vh] flex flex-col md:flex md:flex-row items-center justify-center overflow-hidden rounded-3xl">
      <div className="md:h-[90%] h-[1000px] overflow-hidden flex flex-col md:flex md:flex-row justify-center items-center w-[80%] md:w-[70%]  rounded-3xl overflow-hiddden  shadow-3xl  shadow-2xl">
        <div className="h-[250px] w-[305px] overflow-hidden md:w-[420px] md:h-[720px] ">
          <img
            src={basic}
            alt="img"
            className="h-[100%] w-[100%] object-cover hidden object-center md:block"
          />
          <img
            src={basicmobile}
            alt="img"
            className="h-[100%] w-[100%] object-cover  object-top md:hidden"
          />
        </div>
        <div className="h-[75%] w-full md:w-[60%] md:h-full relative  bg-white flex flex-col items-center gap-5">
          <div className="md:w-[390px] font-benderregular md:h-[71px] text-black  md:text-[32px] font-bold text-left">
            Register For Basic Membership
          </div>
          <div className="md:w-[416.89px] md:h-[400px] ">
            <div className="w-full h-[50%]   flex justify-center items-center">
              <div className="w-[50%] h-full mt-0 md:mt-3  flex flex-col items-center justify-between">
                <div className="w-full h-[25%] mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={fullname}
                    placeholder="Full name*"
                    onChange={(e) => setfullname(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] mb-1  flex flex-col gap-1 items-center justify-center ">
                  <input
                    type="text"
                    value={PhoneNumber}
                    placeholder="Phone Number*"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] mb-1  flex flex-col gap-1 items-center justify-center ">
                  <input
                    type="text"
                    value={gender}
                    placeholder="Gender*"
                    onChange={(e) => setgender(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] mb-1  flex flex-col gap-1 items-center justify-center ">
                  <input
                    type="text"
                    value={university}
                    placeholder="College/Company*"
                    onChange={(e) => setuniversity(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
              </div>
              <div className="w-[50%] h-full mt-0 md:mt-3  flex flex-col items-center justify-center">
                <div className="w-full h-[25%] mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={RegistrationNumber}
                    placeholder="LPU regno./uuid*"
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2  border-black text-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] bg-white mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={Email}
                    placeholder="Email*"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] bg-white mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={year}
                    placeholder="Year*"
                    onChange={(e) => setyear(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[25%] bg-white mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={course}
                    placeholder="Course/Position*"
                    onChange={(e) => setcourse(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 w-full h-[45%] ">
              <div className="text-[18px]  font-benderregular md:text-[16px] flex flex-col gap-2 justify-center items-center text-center md:text-left font-bold px-4 md:pl-2 text-black">
                <div className="w-full h-[5%] mb-1  flex flex-col gap-1 items-center justify-center">
                  <input
                    type="text"
                    value={Referral}
                    placeholder="Referral"
                    onChange={(e) => setReferral(e.target.value)}
                    className="w-[95%] font-benderregular h-[40px] bg-white border-b-2  border-black text-black  p-2"
                  />
                </div>
                Choose Workshop for day 1 and day 2 :
              </div>
              <div className="flex font-benderregular flex-col justify-center items-start">
                {options.map((element, index) => {
                  return (
                    <div key={index} className="mt-4">
                      <input
                        type="radio"
                        value={index}
                        checked={selected === index}
                        onChange={() => {
                          setselected(index);
                        }}
                        className="bg-white font-benderregular text-white ml-1"
                      />
                      <label className="ml-2 font-benderregular text-black">
                        {element.content}
                      </label>
                    </div>
                  );
                })}
              </div>
              {/* <div className="mt-3 flex justify-start items-center ">
                <input
                  type="checkbox"
                  className="bg-white font-benderregular text-white ml-1"
                  onChange={() => setavailed(!availed)}
                />
                <label className="ml-3 font-benderregular text-black ">
                  Get access to all the tech talks
                </label>
              </div> */}
              {dberror && (
                <p className="text-red-500 font-benderregular">{dberror}</p>
              )}
              {eventError && (
                <p className="text-red-500 text-sm font-benderregular">
                  {eventError}
                </p>
              )}
              {registrationError && (
                <p className="text-red-500 text-sm leading-none font-benderregular">
                  {registrationError}
                </p>
              )}
              {phoneError && (
                <p className="text-red-500 text-sm font-benderregular">
                  {phoneError}
                </p>
              )}
              {usernameError && (
                <p className="text-red-500 text-sm font-benderregular">
                  {usernameError}
                </p>
              )}
              {emailError && (
                <p className="text-red-500 text-sm font-benderregular">
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <div className="w-[90%] flex px-0 md:px-3 justify-between  items-center h-[10%] md:h-[15%] absolute -bottom-3 md:-bottom-5 ">
            <div className="flex justify-center items-center gap-1">
              <span className=" text-[16px] font-benderregular font-semibold md:text-[28px] text-black ">
                Price -
              </span>
              <span className="text-black font-benderregular text-[16px] md:text-[32px] mb-1  font-bold">
                &nbsp;Rs.399
              </span>
            </div>
            <button
              onClick={async () => {
                setUsernameError(null);
                setPhoneNumberError(null);
                setRegistrationNumberError(null);
                setEmailError(null);
                setEventError(null);
                // setTechtalkError(null);
                setdberror(null);

                // appply zod validation here and only after that send the details to the backend
                const userSchema = z.object({
                  // Define the same schema as on the server side
                  fullname: z.string().min(2).max(40),
                  phone: z
                    .string()
                    .min(10, {
                      message: "phone must contain only 10 character(s)",
                    })
                    .max(10),

                  registration: z.string(),
                  email: z.string().email(),

                  course: z.string().optional(),
                  year: z.string().optional(),
                  university: z.string().min(2),
                  gender: z.string().min(1),

                  event: z.string().optional(),
                  event1: z.string().optional(),
                  event2: z.string().optional(),
                  // techtalk: z.boolean(),
                });

                // first here db call to check whether same username or email already exists or not or even registration number ??
                // i dont want my backend to crash at this moment
                // need to hit a url which will let me know success or false !
                // const existing = await User.findOne({
                //   $or: [{ username }, { email }],
                // });

                if (selected == null) {
                  setEventError("Please select an event");
                  return;
                }

                const dbPresent = async () => {
                  console.log("inside dbPresent");
                  const status = await fetch(checking_api, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      fullname: fullname,
                      email: Email,
                      phone: PhoneNumber,
                      registration: RegistrationNumber,
                      event: options[selected].content,
                      // techtalk: availed,
                    }),
                  });
                  const response = await status.json();
                  console.log("the response is ", response);
                  if (response.success === false) {
                    setdberror(
                      "the details you provided  already exists please change the details and try again"
                    );
                    console.log(
                      "the details you provided  already exists please change the details and try again"
                    );
                    // set the error message here
                    return false;
                  }
                  return true;
                };

                const isPresent = await dbPresent();
                if (!isPresent) {
                  console.log("the user already exists");
                  return;
                }

                const mybody = {
                  fullname: fullname,
                  email: Email,
                  phone: PhoneNumber,
                  registration: RegistrationNumber,
                  course: course,
                  year: year,
                  university: university,
                  gender: gender,
                  event: options[selected].content,
                  // techtalk: availed,
                  // amount: 500,
                };
                let finalBody;
                try {
                  let parsedInput = userSchema.safeParse(mybody);
                  if (!parsedInput.success) {
                    // return res.status(411).json({ Zod_error: parsedInput.error });
                    // set error to display the error message
                    console.log("zod error", parsedInput.error);
                    console.log(
                      "the error message is ",
                      parsedInput.error.errors
                    );

                    for (let i in parsedInput.error.errors) {
                      // console.log(i);
                      console.log(
                        "the error message is ",
                        parsedInput.error.errors[i].message
                      );
                      console.log(
                        "the error path is ",
                        parsedInput.error.errors[i].path[0]
                      );
                      if (parsedInput.error.errors[i].path[0] === "fullname") {
                        setUsernameError(parsedInput.error.errors[i].message);
                      }
                      if (parsedInput.error.errors[i].path[0] === "phone") {
                        setPhoneNumberError(
                          parsedInput.error.errors[i].message
                        );
                      }
                      if (
                        parsedInput.error.errors[i].path[0] === "registration"
                      ) {
                        setRegistrationNumberError(
                          parsedInput.error.errors[i].message
                        );
                      }
                      if (parsedInput.error.errors[i].path[0] === "email") {
                        setEmailError(parsedInput.error.errors[i].message);
                      }

                      // if (parsedInput.error.errors[i].path[0] === "techtalk") {
                      //   setTechtalkError(parsedInput.error.errors[i].message);
                      // }
                    }
                    // for (let i in parsedInput.error.ZodError[0].path) {
                    //   console.log(i);
                    // }
                    // console.log("the error message is ", parsedInput.error[0]);
                    return;
                  }
                  console.log("parsedInput", parsedInput);
                  const amount = 399;
                  const {
                    fullname,
                    phone,
                    registration,
                    university,
                    course,
                    year,
                    gender,
                    email,
                    event,
                    // techtalk,
                  } = parsedInput.data;
                  finalBody = {
                    fullname,
                    phone,
                    registration,
                    university,
                    course,
                    year,
                    gender,
                    email,
                    event,
                    Referral: Referral,
                    // techtalk,
                    level: "Basic",
                    amount: amount,
                    option: 1,
                  };
                } catch (err) {
                  console.log("zod error received in catch ", err);
                  return;
                }
                buyCourse(finalBody);
              }}
              className="bg-black font-benderregular hover:cursor-pointer rounded-3xl w-[40%] h-[50%] text-white flex items-center justify-center font-bold text-[12px] md:text-[18px]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration1;
