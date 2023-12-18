import React from "react";

const Hero = () => {
  return (
    <div
      className="pt-10  px-3 font-helvetica text-center
"
    >
      {/* Top */}
      <div
        className="w-full relative pb-4 "
        style={{
          borderRadius: "13px",
          background: " rgba(48, 48, 48, 0.25)",
          backdropFilter: " blur(6.449px)",
        }}
      >
        <div
          className="w-[90%] -mt-2 mx-auto h-[28px]  rounded-md flex justify-center items-center gap-3"
          style={{
            background: "linear-gradient(90deg, #EE4040 0%, #FAA11C 101.62%)",
          }}
        >
          <div className="w-[8px] h-[8px] rounded-md bg-[#fff]"></div>

          <p className="text-[11px] text-[#fff] font-bold">
            Freelancers, Agency Owners & Skilled Individuals
          </p>
        </div>

        <h1 className="text-[#fff] text-[17px]  mt-3 font-bold">
          LEARN HOW TO START ONE PERSON
        </h1>
        <h1 className="text-[#fff] text-[17px] font-bold ">
          AGENCY{" "}
          <span className="text-[#E64B06] ml-1 font-epicene italic">
            WITH ₹0
          </span>
        </h1>

        <img src="/Line 1.svg" alt="logo" className="mx-auto mt-2" />

        <p className="text-[#D4D4D4] text-[13px] mt-3 ">
          Grab your seat before its too late
        </p>
      </div>

      {/* Bottom */}
      <div className="my-8">
        <p className="text-[#BBB] text-[13px]">
          The secret strategies of cold outreach{" "}
        </p>
        <h1 className="text-[#fff] text-[20px]  mt-1 font-bold">
          6-10 clients in the next{" "}
          <span className="text-[#E64B06] ml-1 font-epicene italic">
            30 days
          </span>
        </h1>

        <p className="text-[#D4D4D4] text-[13px] mt-1 w-[90%] mx-auto ">
          without spending tons of money on ads & creating content online.
        </p>
      </div>
    </div>
  );
};

export default Hero;
