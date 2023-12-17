import React from "react";

const JoinWorkshop = () => {
  return (
    <div className="w-full mt-7 mb-5 font-helvetica text-center">
      {/* Top */}
      <div
        className="w-[90%] mx-auto rounded-[13px] text-[11px] text-[#fff] font-bold py-2 px-1"
        style={{
          background:
            "linear-gradient(247deg, #F77 1.21%, #D62323 1.22%, #D75931 102%)",
        }}
      >
        <p className="m-0">JOIN THE ONE PERSON AGENCY WORKSHOP NOW!</p>
        <p className="m-0">(ONLY ₹299)</p>
      </div>
      {/* Bottom */}
      <div className="mt-10 relative px-4 grid grid-cols-2 gap-5">
        <div
          className="py-4 px-3 relative text-[#D9D6D6] text-[11px] font-helvetica col-span-1"
          style={{
            borderRadius: "19px",
            boxShadow: "-2px -2px 3px 0px #FF7A00",
            // border: "3px solid #FF7A00",
            background:
              "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
            backdropFilter: "blur(2.7000px)",
          }}
        >
          <span className="w-[8px] h-[8px] rounded-md bg-[#fff] absolute top-4 left-4"></span>

          <img
            src="/workshop__icon__1.png"
            alt="logo"
            className="mx-auto mb-1"
          />
          <p>Launch Your</p>
          <p>
            High Ticket <span className="font-bold ml-1 italic">Agency</span>
          </p>
          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-2" />
        </div>
        <div
          className="py-4 px-3 relative text-[#D9D6D6] text-[11px] font-helvetica col-span-1"
          style={{
            borderRadius: "19px",
            boxShadow: "-2px -2px 3px 0px #FF7A00",
            // border: "3px solid #FF7A00",
            background:
              "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
            backdropFilter: "blur(2.7000px)",
          }}
        >
          <span className="w-[8px] h-[8px] rounded-md bg-[#fff] absolute top-4 left-4"></span>

          <img
            src="/workshop__icon__2.png"
            alt="logo"
            className="mx-auto mb-1"
          />
          <p>Step By Step</p>
          <p>
            Practical System
            <span className="font-bold ml-1 italic">Building</span>
          </p>
          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-2" />
        </div>
        <div
          className="py-4 px-3 relative text-[#D9D6D6] text-[12px] font-helvetica col-span-1"
          style={{
            borderRadius: "19px",
            boxShadow: "-2px -2px 3px 0px #FF7A00",
            // border: "3px solid #FF7A00",
            background:
              "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
            backdropFilter: "blur(2.7000px)",
          }}
        >
          <span className="w-[8px] h-[8px] rounded-md bg-[#fff] absolute top-4 left-4"></span>

          <img
            src="/workshop__icon__3.png"
            alt="logo"
            className="mx-auto mb-1"
          />
          <p>Proven Cold</p>
          <p>
            Outreach
            <span className="font-bold ml-1 italic">Tactics</span>
          </p>
          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-2" />
        </div>
        <div
          className="py-4 px-3 relative text-[#D9D6D6] text-[12px] font-helvetica col-span-1 "
          style={{
            borderRadius: "19px",
            boxShadow: "-2px -2px 3px 0px #FF7A00",
            // border: "3px solid #FF7A00",
            background:
              "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
            backdropFilter: "blur(2.7000px)",
          }}
        >
          <span className="w-[8px] h-[8px] rounded-md bg-[#fff] absolute top-4 left-4"></span>

          <img
            src="/workshop__icon__4.png"
            alt="logo"
            className="mx-auto mb-1"
          />
          <p>Client Acquisition </p>
          <p>
            <span className="font-bold ml-1 italic">Mastery</span>
          </p>
          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
};

export default JoinWorkshop;
