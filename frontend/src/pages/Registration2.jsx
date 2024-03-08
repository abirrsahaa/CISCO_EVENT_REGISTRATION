import React, { useEffect, useState } from "react";
import { buyCourse } from "../components/service";
import { z } from "zod";

const Registration2 = () => {
  const [dberror, setdberror] = useState(null);
  // const [zoderror, setzoderror] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [phoneError, setPhoneNumberError] = useState(null);
  const [registrationError, setRegistrationNumberError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [event1Error, setEvent1Error] = useState(null);
  const [event2Error, setEvent2Error] = useState(null);
  const [techtalkError, setTechtalkError] = useState(null);
  const options1 = [
    {
      content: "Day-1 (Introduction to Cybersecurity and Bug bounty)",
    },
    {
      content: "Day-1 (Understanding malware, and basic malware analysis)",
    },
  ];
  const options2 = [
    {
      content: "Day-2 (Introduction to Pentesting and Android App pentest)",
    },
    {
      content: "Day-2 (Introduction to blockchain and Threat intelligence)",
    },
  ];
  const [Username, setUsername] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [RegistrationNumber, setRegistrationNumber] = useState("");
  const [Email, setEmail] = useState("");

  const [selected1, setselected1] = useState(null);
  const [selected2, setselected2] = useState(null);
  const [availed, setavailed] = useState(false);
  useEffect(() => {
    console.log("the selected option for day 1  is ", options1[selected1]);
    console.log("the selected option for day 2  is ", options2[selected2]);
    console.log("the availed option is ", availed);
  }, [selected1, selected2, availed]);
  const submithandler = () => {
    const user = {
      Username,
      PhoneNumber,
      RegistrationNumber,
      Email,
      event_day_1: options1[selected1],
      event_day_2: options2[selected2],
      techtalk: availed,
    };
    console.log("the details of registered user is ", user);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="h-[90%] flex justify-center items-center w-[70%] rounded-2xl bg-red-500 shadow-2xl">
        <div className="w-[40%] h-full bg-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/1927/49c3/2c1544379dd4f287d9ec779ed4b91325?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=btFsko1Hx05daQrTkxb-k7tPPg1cSgLbno~m97WAkGHPndH4jUUmxq9~hHtF2BP6FubXDfPUfDbCrCLF8OAISwpCU1NdulmkPdWcEARyTHCLkOxpg1EsTXKjyM4hHLMp8f587t7vvH4iEPitr06efBPDuDY12juShvh7DqxodkZ7Ort0pFBtwelX7pbYKZ3-ArpYOkrIZOcU~agoa0GPLACWLuy66uhpidRlRweW6JQXUwsB6NGkitpgItm1lO3BgwuqtFcvS6JtVBLmfVOEMR5tKXsWHQRtWusIhpyn0cz-aEOwIA1zX0IaZmpCVGqZFyBcMYignvUCxI2-PKcU~g__"
            alt="img"
            className="h-[100%] w-[100%] object-cover object-center"
          />
        </div>
        <div className="w-[60%] relative h-full bg-white flex flex-col items-center gap-5">
          <div className="md:w-[390px] md:h-[71px] text-black  md:text-[32px] font-bold text-left">
            Register For Explorer Membership
          </div>
          <div className="md:w-[416.89px] md:h-[315.23px] ">
            <div className="w-full h-[40%]  flex justify-center items-center">
              <div className="w-[50%] h-full  flex flex-col items-center justify-center">
                <div className="w-full h-[50%]  flex items-center justify-center">
                  <input
                    type="text"
                    value={Username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-[95%] h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
                <div className="w-full h-[50%]  flex items-center justify-center ">
                  <input
                    type="text"
                    value={PhoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-[95%] h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
              </div>
              <div className="w-[50%] h-full  flex flex-col items-center justify-center">
                <div className="w-full h-[50%]  flex items-center justify-center">
                  <input
                    type="text"
                    value={RegistrationNumber}
                    placeholder="Registration Number"
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className="w-[95%] h-[40px] bg-white border-b-2  border-black text-black  p-2"
                  />
                </div>
                <div className="w-full h-[50%] bg-white  flex items-center justify-center">
                  <input
                    type="text"
                    value={Email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[95%] h-[40px] bg-white border-b-2 text-black  border-black  p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 w-full h-[60%]">
              <div className="text-[16px] text-left font-bold pl-2 text-black">
                Choose Workshop for day 1 :
              </div>
              <div className="flex flex-col justify-center items-start">
                {options1.map((element, index) => {
                  return (
                    <div key={index} className="mt-4">
                      <input
                        type="radio"
                        value={index}
                        checked={selected1 === index}
                        onChange={() => {
                          setselected1(index);
                        }}
                        className="bg-white text-white"
                      />
                      <label className="ml-3 text-black">
                        {element.content}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="text-[16px] mt-3 text-left font-bold pl-2 text-black">
                Choose Workshop for day 2 :
              </div>
              <div className="flex flex-col justify-center items-start">
                {options2.map((element, index) => {
                  return (
                    <div key={index} className="mt-4">
                      <input
                        type="radio"
                        value={index}
                        checked={selected2 === index}
                        onChange={() => {
                          setselected2(index);
                        }}
                        className="bg-white text-white"
                      />
                      <label className="ml-3 text-black">
                        {element.content}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  className="bg-white text-white"
                  onChange={() => setavailed(!availed)}
                />
                <label className="ml-3 text-black ">
                  Get access to all the tech talks
                </label>
              </div>
              {dberror && <p className="text-red-500">{dberror}</p>}
              {event1Error && (
                <p className="text-red-500 text-sm">{event1Error}</p>
              )}
              {event2Error && (
                <p className="text-red-500 text-sm">{event2Error}</p>
              )}
              {registrationError && (
                <p className="text-red-500 text-sm leading-none">
                  {registrationError}
                </p>
              )}
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
              {usernameError && (
                <p className="text-red-500 text-sm">{usernameError}</p>
              )}
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
          </div>
          <div className="w-[90%] flex px-3 justify-between items-center h-[15%] absolute bottom-3 ">
            <div className="flex justify-center items-center">
              <span className="text-[28px] text-black ">Price - </span>
              <span className="text-black text-[32px] font-bold">$xxx</span>
            </div>
            <button
              onClick={async () => {
                setUsernameError(null);
                setPhoneNumberError(null);
                setRegistrationNumberError(null);
                setEmailError(null);
                setEvent1Error(null);
                setEvent2Error(null);
                setTechtalkError(null);
                setdberror(null);

                // appply zod validation here and only after that send the details to the backend
                const userSchema = z.object({
                  // Define the same schema as on the server side
                  username: z.string().min(2).max(40),
                  phone: z
                    .string()
                    .min(10, {
                      message: "phone must contain only 10 character(s)",
                    })
                    .max(10),

                  registration: z
                    .string()
                    .min(8, {
                      message: "registration must contain only 8 character(s)",
                    })
                    .max(8),
                  email: z.string().email(),
                  event: z.string().optional(),
                  event1: z.string().optional(),
                  event2: z.string().optional(),
                  techtalk: z.boolean(),
                });

                // first here db call to check whether same username or email already exists or not or even registration number ??
                // i dont want my backend to crash at this moment
                // need to hit a url which will let me know success or false !
                // const existing = await User.findOne({
                //   $or: [{ username }, { email }],
                // });

                if (selected1 == null) {
                  setEvent1Error("Please select an event from day 1");
                  return;
                }

                if (selected2 == null) {
                  setEvent1Error("Please select an event from day 2");
                  return;
                }

                const dbPresent = async () => {
                  console.log("inside dbPresent");
                  const status = await fetch("http://localhost:3000/checking", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      username: Username,
                      email: Email,
                      phone: PhoneNumber,
                      registration: RegistrationNumber,
                      event1: options1[selected1].content,
                      event2: options2[selected2].content,
                      techtalk: availed,
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
                  username: Username,
                  email: Email,
                  phone: PhoneNumber,
                  registration: RegistrationNumber,
                  event1: options1[selected1].content,
                  event2: options2[selected2].content,
                  techtalk: availed,
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
                      if (parsedInput.error.errors[i].path[0] === "username") {
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

                      if (parsedInput.error.errors[i].path[0] === "techtalk") {
                        setTechtalkError(parsedInput.error.errors[i].message);
                      }
                    }
                    // for (let i in parsedInput.error.ZodError[0].path) {
                    //   console.log(i);
                    // }
                    // console.log("the error message is ", parsedInput.error[0]);
                    return;
                  }
                  console.log("parsedInput", parsedInput);
                  const {
                    username,
                    phone,
                    registration,
                    email,
                    event1,
                    event2,
                    techtalk,
                  } = parsedInput.data;
                  finalBody = {
                    username,
                    phone,
                    registration,
                    email,
                    event1,
                    event2,
                    techtalk,
                    amount: 500,
                  };
                } catch (err) {
                  console.log("zod error received in catch ", err);
                  return;
                }
                buyCourse(finalBody);
              }}
              className="bg-black rounded-3xl w-[40%] h-[50%] text-white flex items-center justify-center font-bold text-[18px]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
