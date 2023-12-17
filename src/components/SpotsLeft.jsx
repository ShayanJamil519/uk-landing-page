import React from "react";

const SpotsLeft = () => {
  return (
    <div className="relative font-helvetica pt-16">
      <img src="/mic.svg" alt="logo" className="absolute top-0 left-0" />
      {/* Top */}
      <div
        className="relative z-10 px-4 py-3 rounded-[40px] bg-[#fff] text-center font-bold"
        // style={{
        //   fill: "#FFF",
        //   backdropFilter: "blur(3.40px)",
        // }}
      >
        <img
          src="/mic__small.svg"
          alt="logo"
          className="absolute top-2 right-2"
        />

        <div className="mr-5">
          <h1 className="text-[16px] -mb-[1px]">
            Workshop is on 28th December
          </h1>
          <h1 className="text-[20px]">
            LAST FEW{" "}
            <span
              className=""
              style={{
                background: "linear-gradient(180deg, #FF7A00 0%, #BD2200 100%)",
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              SPOTS
            </span>{" "}
            LEFT!!
          </h1>
        </div>
      </div>
      {/* Middle */}
      <div className="px-5 pt-7 pb-10">
        <div className="flex flex-col gap-5 mt-7 justify-center items-center">
          <div
            style={{
              border: "1px solid #F14C4C",
              background: "rgba(16, 16, 16, 0.64)",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.png" alt="logo" />
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
            className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.png" alt="logo" />
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
            className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.png" alt="logo" />
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
            className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.png" alt="logo" />
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
            className="rounded-[26px] py-2 pl-5 pr-6 flex justify-start items-center gap-4 text-[#fff] text-[13px] "
          >
            <img src="/star.png" alt="logo" />
            <p className="leading-[18px]">
              Using
              <span className="text-[#FF4D00] italic font-bold mx-1">
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
        className=" px-4 py-3 rounded-[15px] text-center w-[95%]  mx-auto"
        style={{
          border: "0.5px dashed #FF7A00",
        }}
      >
        <h1 className="text-[16px] -mb-[1px] text-[#fff] font-normal">
          Your competitors will hate you for attending{" "}
        </h1>
        <h1
          style={{
            background:
              "linear-gradient(247deg, #FF5C00 1.21%, #FF1D0F 73.63%)",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
          className="text-[16px] font-normal"
        >
          “The One Person Agency Workshop”
        </h1>
      </div>
    </div>
  );
};

export default SpotsLeft;
