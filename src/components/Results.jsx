import React from "react";

const Results = () => {
  return (
    <div className="mt-10 text-center font-helvetica">
      <h1 className="text-[20px] font-bold text-[#fff] ">
        {`Don't Just Sleep On It! You Can Expect These Type Of`}{" "}
        <span className="italic text-[#ff9900]">RESULTS</span>
      </h1>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 17, 17, 0.29) 14.06%, rgba(252, 60, 0, 0.29) 48.44%, rgba(11, 11, 11, 0.29) 88.54%)",
        }}
        className="mt-7 relative"
      >
        <img
          src="/results__layer.svg"
          alt="logo"
          className="absolute left-0 top-[30%] z-2"
        />

        <img src="/results__1.svg" alt="logo" className="mb-4 z-10 relative" />
        <img src="/results__2.svg" alt="logo" className="z-10 relative" />
      </div>
    </div>
  );
};

export default Results;
