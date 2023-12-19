import React from "react";

function JoinNowCTA() {
  return (
    <div className="w-full">
      <div
        className="mt-5 lg:mt-12 pt-3 pb-2 px-1 rounded-[13px]  text-white text-center font-helvetica w-[95%] md:w-[50%] lg:w-[55%] mx-auto
"
        style={{
          background:
            "linear-gradient(247deg, #F77 1.21%, #D62323 1.22%, #D75931 102%)",
        }}
      >
        <p className="text-[12px] md:text-[16px] lg:text-[20px]   font-bold">
          JOIN THE ONE PERSON AGENCY WORKSHOP NOW!
        </p>
        <p className="text-[12px] md:text-[16px] lg:text-[20px]  font-bold text-center italic ">
          (ONLY ₹299)
        </p>
      </div>
      <p className="text-[12px] md:text-[16px] lg:text-[20px]  text-white my-3 text-center">
        Register before 28th December to unlock bonus worth{" "}
        <span
          className="text-[#f90]  font-bold font-epicene"
          style={{
            background:
              "linear-gradient(274deg, #F90 -5.59%, #F90 1.88%, #F00 19.64%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: 13,
          }}
        >
          ₹17,000
        </span>
      </p>
    </div>
  );
}

export default JoinNowCTA;
