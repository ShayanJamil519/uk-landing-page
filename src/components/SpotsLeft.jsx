import React from "react";

const SpotsLeft = () => {
  return (
    <div className="relative font-helvetica pt-16">
      <img
        src="/spots__layer__large.svg"
        alt="logo"
        className="absolute top-0 right-0 md:block hidden lg:w-[20%] md:w-[25%]"
      />

      <img
        src="/mic.svg"
        alt="logo"
        className="absolute top-0 left-0 sm:hidden block"
      />
      {/* Top */}
      <div className="relative z-10 px-4 lg:w-[50%] md:w-[65%] sm:w-[85%] mx-auto py-3 rounded-[40px] md:rounded-[80px] bg-[#fff] text-center font-bold">
        <img
          src="/mic__large.svg"
          alt="logo"
          className="absolute -top-10 -left-10 z-2 sm:block hidden lg:w-[230px] md:w-[180px] sm:w-[140px]"
        />

        <img
          src="/mic__small.svg"
          alt="logo"
          className="absolute top-2 right-2 md:top-5 md:right-5 md:w-[70px]"
        />

        <div className="mr-5 ">
          <h1 className="text-[16px] lg:text-[25px] md:text-[22px] sm:text-[18] -mb-[1px]">
            Workshop is on 28th December
          </h1>
          <h1 className="text-[20px]  lg:text-[32px] md:text-[27px] sm:text-[24]">
            LAST FEW{" "}
            <span
              className=""
              style={{
                background:
                  "linear-gradient(180deg, #FF7A00 0%, #BD2200 100%) ",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SPOTS
            </span>{" "}
            LEFT!!
          </h1>
        </div>
      </div>
      {/* Middle */}
      <div className="px-5 pt-7 lg:pt-20 md:pt-16 sm:pt-12 pb-10">
        {/* Small Devices */}
        <div className="md:hidden flex flex-col gap-5 mt-7 justify-center items-center">
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] w-full py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.svg" alt="logo" />
            <p className="leading-[18px]">
              Having The Skill To Deliver But{" "}
              <span className="text-[#FF4D00] italic font-bold">Not Able</span>{" "}
              To Get High Ticket Clients.{" "}
            </p>
          </div>
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] w-full py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.svg" alt="logo" />
            <p className="leading-[18px]">
              <span className="text-[#FF4D00] italic font-bold mr-1">
                WASTED Tons Of Money
              </span>{" "}
              On Ads But Not Able To Build A Bulletproof Agency.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] w-full py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.svg" alt="logo" />
            <p className="leading-[18px]">
              <span className="text-[#FF4D00] italic font-bold mr-1">
                Not Having A Strong Foundation
              </span>{" "}
              Of Your Agency Making It Hard To Get Clients
            </p>
          </div>
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] w-full py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.svg" alt="logo" />
            <p className="leading-[18px]">
              Continuously Posting Content
              <span className="text-[#FF4D00] italic font-bold mx-1">
                But Still Lagging
              </span>{" "}
              Behind Your Competition
            </p>
          </div>
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] w-full py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.svg" alt="logo" />
            <p className="leading-[18px]">
              Using
              <span className="text-[#FF4D00] italic font-bold mx-1">
                Outdated Cold Outreach
              </span>{" "}
              Techniques
            </p>
          </div>
        </div>
        {/* Large Devices */}
        <div
          className="rounded-[30px] md:block hidden lg:w-[80%] md:w-[85%] mx-auto py-10 px-6"
          style={{
            border: "2px solid #FF0F00",
            background:
              "linear-gradient(110deg, rgba(0, 0, 0, 0.56) -11.62%, rgba(69, 69, 69, 0.29) 49.09%, rgba(0, 0, 0, 0.00) 117.57%)",
            backdropFilter: "blur(3.400px)",
          }}
        >
          <div className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px] ">
            <img src="/star.svg" alt="logo" className="md:w-[28px]" />
            <p className="">
              Having The Skill To Deliver But{" "}
              <span className="text-[#FF4D00] italic font-bold">Not Able</span>{" "}
              To Get High Ticket Clients.{" "}
            </p>
          </div>

          <div className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px] ">
            <img src="/star.svg" alt="logo" className="md:w-[28px]" />
            <p className="">
              <span className="text-[#FF4D00] italic font-bold">
                {" "}
                WASTED Tons Of Money
              </span>{" "}
              On Ads But Not Able To Build A Bulletproof Agency.
            </p>
          </div>

          <div className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px] ">
            <img src="/star.svg" alt="logo" className="md:w-[28px]" />
            <p className="">
              <span className="text-[#FF4D00] italic font-bold">
                {" "}
                Not Having A Strong Foundation
              </span>{" "}
              Of Your Agency Making It Hard To Get Clients
            </p>
          </div>

          <div className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px] ">
            <img src="/star.svg" alt="logo" className="md:w-[28px]" />
            <p className="">
              Continuously Posting Content
              <span className="text-[#FF4D00] italic font-bold">
                But Still Lagging
              </span>{" "}
              Behind Your Competition
            </p>
          </div>

          <div className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] lg:text-[25px] md:text-[22px] sm:text-[20px] ">
            <img src="/star.svg" alt="logo" className="md:w-[28px]" />
            <p className="">
              Using
              <span className="text-[#FF4D00] italic font-bold">
                Outdated Cold Outreach
              </span>{" "}
              Techniques
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      {/* Top */}
      <div
        className=" px-4 py-3 rounded-[15px] text-center w-[95%] md:w-[50%]  mx-auto"
        style={{
          border: "0.5px dashed #FF7A00",
        }}
      >
        <h1 className="text-[16px] md:text-[24px] lg:text-[32px] -mb-[1px] text-[#fff] font-normal">
          Your competitors will hate you for attending{" "}
        </h1>
        <h1
          style={{
            background:
              "linear-gradient(247deg, #FF5C00 1.21%, #FF1D0F 73.63%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[16px] md:text-[24px] lg:text-[32px] font-normal"
        >
          “The One Person Agency Workshop”
        </h1>
      </div>
    </div>
  );
};

export default SpotsLeft;
