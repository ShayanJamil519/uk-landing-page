import React from "react";
import JoinNowCTA from "./JoinNowCTA";
import Image from "next/image";
import TimeRunning from "./TimeRunning";

const Results = () => {
  return (
    <div className="mt-10 text-center font-helvetica pb-16">
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

      <TimeRunning />
      
      <JoinNowCTA />
      
      <div className="mx-4">
        <h2 className="text-white font-[700] font-[18px]">KNOW THE MAN BEHIND THE <span className="text-[#f90]">MAGIC</span></h2>
        <div
          className="rounded-2xl my-3 p-2"
          style={{background: "linear-gradient(132deg, #FFF 1.42%, #CDCDCD 1.43%, #515151 49.94%, #000 101.59%)"}}
        >
          <div className="flex items-center">
            <div className="w-1/2">
              <Image src="/men.png" alt="" width={150} height={150} />
            </div>
            <div className="flex w-1/2 flex-col"> 
              <h2 className="text-left text-[26px] text-[#acacac] font-helvetica font-[400]">Sahil Kasana</h2>
              <h4 className="text-left text-[14px] text-white">The <span style={{background: "linear-gradient(269deg, #F90 39.23%, #F90 39.23%, #F00 64.28%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Cold Outreach</span> King</h4>
            </div>
          </div>
          <h2 className="mt-3 mx-1 text-center text-white font-helvetica">
            Worked with over 300 clients and generated <span style={{background: "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>5 crore + revenue</span> just with cold outreach.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Results;
