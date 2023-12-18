import React from "react";

function JoinNowCTA() {
  return (
    <div>
      <div
        className="mt-5 pt-3 pb-2 px-1 mx-2 rounded-[13px]  text-white text-center font-helvetica
"
        style={{
          background:
            "linear-gradient(247deg, #F77 1.21%, #D62323 1.22%, #D75931 102%)",
        }}
      >
        <p className="text-[12px]  font-bold">
          JOIN THE ONE PERSON AGENCY WORKSHOP NOW!
        </p>
        <p className="text-[12px]  font-bold text-center italic ">
          (ONLY ₹299)
        </p>
      </div>
      <p className="text-[12px]  text-white my-3 text-center">
        Register before 28th December to unlock bonus worth{" "}
        <span
          className="text-[#f90] italic font-bold font-epicene"
          style={{
            background:
              "linear-gradient(274deg, #F90 -5.59%, #F90 1.88%, #F00 19.64%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ₹17,000
        </span>
      </p>
    </div>
  );
}

export default JoinNowCTA;
