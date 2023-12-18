"use client";

import React, { useState } from "react";
import clsx from "clsx";

const FAQS = () => {
  const [Questions, setQuestions] = useState([
    {
      question: "When and where is the workshop and how long would it be?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Is the workshop live or pre-recorded?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "For whom is this workshop?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "What should I be prepared with before the workshop starts?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Will I get a recording of the Workshops ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
  ]);

  const handleClick = (index) => {
    const newArr = [...Questions];
    newArr[index].isOpen = !newArr[index].isOpen;
    setQuestions(newArr);
  };
  return (
    <div className=" relative w-full text-[#fff] bg-black pb-4 my-4">
      <div className="flex flex-col space-y-2 lg:space-y-4 font-BalsamiqSans items-center w-[90%] sm:w-[80%] md:w-[70%] mx-auto h-auto">
        <h3 className="text-center text-[20px] sm:text-4xl md:text-[45px] font-[900] uppercase font-helvetica">
          Frequently Asked Questions
        </h3>
        <p className="uppercase text-[11px] text-center font-[400] font-helvetica mb-2">I have answered all common questions below that you might have about the workshop. </p>

        <div className="flex flex-col space-y-4 w-full items-center  ">
          {Questions.map((item, index) => (
            <div key={index} className="relative  w-full ">
              <div
                className={clsx(
                  "rounded-xl pt-2 sm:pt-7 md:pt-16  p-6",
                  `${item.isOpen ? "block bg-[#FFF] " : "hidden"}`
                )}
              >
                <p className="text-[#171717] text-[10px] md:text-base pl-2 sm:pl-5 md:pl-7 lg:pl-10">
                  {item.answer}
                </p>
              </div>
              <div
                className={clsx(
                  "top-0 left-0  w-full ",
                  `${item.isOpen ? "absolute" : "relative"}`
                )}
              >
                <div
                  className={clsx(
                    "px-2 md:px-6 py-2.5 flex   w-full rounded-xl  items-center justify-between border-[1px] border-[#fff]",
                    `${
                      item.isOpen
                        ? "bg-[#fff] text-black"
                        : "bg-black text-[#ffff]"
                    }`
                  )}
                >
                  <div className="flex justify-center items-start gap-2 sm:gap-5">
                    <p className="font-semibold text-[11px] font-montserrat text-[#ACACAC] md:text-[20px] uppercase">
                      {item.question}
                    </p>
                  </div>

                  <button
                    onClick={() => handleClick(index)}
                    // className={clsx(
                    //   " py-3 px-2 rounded-full ",
                    //   `${item.isOpen ? "bg-[#F1F6FF]" : "bg-black "}`
                    // )}
                  >
                    {item.isOpen ? (
                      <img
                        src="/faqs_uparrow.png"
                        className="sm:w-fit sm:h-fit  w-[10px] h-[10px]"
                        alt="logo"
                      />
                    ) : (
                      <img
                        src="/faqs_downarrow.png"
                        className="sm:w-fit sm:h-fit  w-[10px] h-[10px] "
                        alt="logo"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
