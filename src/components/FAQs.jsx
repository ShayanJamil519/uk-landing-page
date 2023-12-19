"use client";

import clsx from "clsx";
import React, { useState } from "react";

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
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return { ...item, isOpen: false };
      })
    );
  };

  return (
    <div className=" relative  rounded-[26px] font-helvetica pb-4 my-4 w-[93%] mx-auto">
      <h3 className="text-center text-[19px]  lg:text-[40px] md:text-[32px] sm:text-[24px]  text-[#fff] font-bold uppercase font-helvetica">
        Frequently Asked Questions
      </h3>
      <p className="uppercase text-[11px]  lg:text-[23px] md:text-[20px] sm:text-[16px] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto text-[#fff] text-center font-[400] font-helvetica mt-3">
        I have answered all common questions below that you might have about the{" "}
        <span
          className="italic md:not-italic font-bold"
          style={{
            background:
              "linear-gradient(274deg, #F90 13.09%, #F90 27.49%, #F00 52.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          workshop
        </span>
        .
      </p>

      <div className="flex flex-col space-y-4 mt-5 w-full sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto items-center  ">
        {Questions.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[26px]  w-full "
            style={{
              border: "1px solid #F14C4C",

              background: "rgba(16, 16, 16, 0.64)",

              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className={`rounded-[26px] pt-16 sm:pt-7 md:pt-16 lg:pt-16 pb-5  ${
                item.isOpen ? "block bg-[#000] " : "hidden"
              }`}
            >
              <p className="text-[#fff] text-[13px] md:text-[16px] px-5">
                {item.answer}
              </p>
            </div>
            <div
              onClick={() => handleClick(index)}
              className={clsx(
                "top-0 left-0  w-full  ",
                `${item.isOpen ? "absolute" : "relative"}`
              )}
            >
              <div
                className={clsx(
                  "px-4 md:px-6  min-h-[50px] py-2 flex   w-full rounded-[26px]  items-center justify-between ",
                  `${
                    item.isOpen
                      ? "bg-[#000] text-black"
                      : "bg-black text-[#ffff]"
                  }`
                )}
              >
                <div className="flex justify-start items-start pl-5 pr-3 w-[95%] ml-0 mr-auto">
                  <p className="font-normal text-[13px] font-montserrat text-[#EFEFEF] md:text-[20px] uppercase">
                    {item.question}
                  </p>
                </div>

                <button>
                  {item.isOpen ? (
                    <img
                      src="/down__arrow__faq.svg"
                      style={{ transform: "rotate(180deg)" }}
                      alt="logo"
                    />
                  ) : (
                    <img src="/down__arrow__faq.svg" alt="logo" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
