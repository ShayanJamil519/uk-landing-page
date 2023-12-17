import React from "react";

const Reserve1 = () => {
  return (
    <div className="mt-5 px-6">
      <div
        style={{
          borderRadius: "3px",
          background:
            "linear-gradient(90deg, #151515 -2.24%, #2B2A2A 48.81%, #000 99.86%)",
          // background: "yellow",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="flex flex-row  gap-4 py-4 ml-[-5px] w-[85%]">
          <div className="flex justify-center items-center relative ">
            {" "}
            <div
              className="w-[45px] h-[22px]"
              style={{
                background: "linear-gradient(247deg, #FF5C00 1.21%, #F00 102%)",
              }}
            ></div>
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-normal font-helvetica">
              01
            </p>
          </div>
          {/* Middle */}
          <p className="text-[#FFF] text-[13px] font-normal font-helvetica">
            3 steps of professional profile{" "}
            <span
              style={{
                background:
                  "linear-gradient(276deg, #F90 16.68%, #F90 55.97%, #F00 149.3%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Helvetica",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              optimization
            </span>
          </p>
        </div>
        {/* Right */}
        <div>
          <img src="./Reserve/reserve1.png" />
        </div>
      </div>
    </div>
  );
};

const Reserve2 = () => {
  return (
    <div className="mt-5 px-6">
      <div
        style={{
          borderRadius: "3px",
          background:
            "linear-gradient(90deg, #151515 -2.24%, #2B2A2A 48.81%, #000 99.86%)",
          // background: "yellow",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="flex flex-row gap-4 py-4 ml-[-5px] w-[85%]">
          <div className="flex justify-center items-center relative ">
            {" "}
            <div
              className="w-[45px] h-[22px]"
              style={{
                background: "linear-gradient(247deg, #FF5C00 1.21%, #F00 102%)",
              }}
            ></div>
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-normal font-helvetica">
              02
            </p>
          </div>

          {/* Middle */}
          <p className="text-[#FFF] text-[13px] font-normal  font-helvetica">
            Secret sauce to create a high converting{" "}
            <span
              style={{
                background:
                  "linear-gradient(276deg, #F90 9.2%, #F90 9.21%, #F00 119.3%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Helvetica",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              landing page
            </span>
          </p>
        </div>
        {/* Right */}
        <div className="">
          <img src="./Reserve/reserve1.png" />
        </div>
      </div>
    </div>
  );
};

const Reserve = () => {
  return (
    <div>
      {/* Heading */}
      <div className="mt-7 mb-2">
        <h2 className="text-[#EFEFEF] text-[20px] font-bold  px-10 text-center font-helvetica">
          HERE'S WHAT YOU'RE GOING TO
          <span className="text-[#FF4D00] italic font-helveticatext-[20px] font-bold mx-2">
            LEARN
          </span>
        </h2>
      </div>

      {/* Cards */}
      {/* Single Card */}

      <Reserve1 />

      {/* Second */}

      <Reserve2 />
    </div>
  );
};

export default Reserve;
