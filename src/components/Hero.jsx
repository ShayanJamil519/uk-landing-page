import React from "react";

const Hero = () => {
  return (
    <div
      className="pt-10 md:pt-16  px-3 lg:px-0  sm:w-[90%] lg:w-[85%] mx-auto font-helvetica text-center
"
    >
      {/* Top */}
      <div
        className="w-full relative pb-4 lg:pb-8 "
        style={{
          borderRadius: "13px",
          background: " rgba(48, 48, 48, 0.25)",
          backdropFilter: " blur(6.449px)",
        }}
      >
        <div
          className="w-[90%] -mt-2 mx-auto py-3 lg:py-2  rounded-md flex justify-center items-center gap-3 lg:gap-10"
          style={{
            background: "linear-gradient(90deg, #EE4040 0%, #FAA11C 101.62%)",
          }}
        >
          <div className="w-[8px] h-[8px] sm:w-[15px] sm:h-[15px]  rounded-md bg-[#fff]"></div>

          <p className="text-[11px] lg:text-[32px] md:text-[24px] sm:text-[20px] text-[#fff] font-bold">
            Freelancers, Agency Owners & Skilled Individuals
          </p>
        </div>

        <h1 className="text-[#fff] text-[17px] lg:text-[32px] md:text-[24px] sm:text-[20px]  mt-3 lg:mt-8 font-bold">
          LEARN HOW TO START ONE PERSON
        </h1>
        <h1 className="text-[#fff] text-[17px] lg:text-[32px] md:text-[24px] sm:text-[20px] font-bold ">
          AGENCY{" "}
          <span className="text-[#E64B06] ml-1 font-epicene italic">
            WITH ₹0
          </span>
        </h1>

        <img
          src="/Line 1.svg"
          alt="logo"
          className="mx-auto mt-2 sm:hidden block"
        />
        <img
          src="/line__large.svg"
          alt="logo"
          className="mx-auto mt-2 sm:block hidden"
        />

        <p className="text-[#D4D4D4] text-[13px] mt-3 lg:mt-6 lg:text-[28px] md:text-[24px] sm:text-[20px] font-normal">
          Grab your seat before its too late
        </p>
      </div>

      {/* Bottom */}
      <div className="my-8 lg:my-12 sm:my-10">
        <p className="text-[#BBB] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px]">
          The secret strategies of cold outreach{" "}
        </p>
        <h1 className="text-[#fff] text-[20px]  mt-1 sm:-mt-1 font-bold lg:text-[40px] md:text-[32px] sm:text-[25px]">
          6-10 clients in the next{" "}
          <span className="text-[#E64B06] ml-1 font-epicene italic">
            30 days
          </span>
        </h1>

        <p className="text-[#D4D4D4] text-[13px] md:w-[50%] sm:leading-[30px]  lg:text-[25px] md:text-[22px] sm:text-[20px] mt-1 w-[90%] mx-auto ">
          without spending tons of money on ads & creating content online.
        </p>
      </div>
    </div>
  );
};

export default Hero;
