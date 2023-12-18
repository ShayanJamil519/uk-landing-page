import React from "react";
import JoinNowCTA from "./JoinNowCTA";
import Image from "next/image";
import TimeRunning from "./TimeRunning";

const Results = () => {
  return (
    <div className="mt-10 text-center font-helvetica pb-16">
      <h1 className="text-[20px] font-bold text-[#fff] font-epicene ">
        {`Don't Just Sleep On It! You Can Expect These Type Of`}{" "}
        <span
          className="ml-1 text-[#ff9900]"
          style={{
            background:
              "linear-gradient(274deg, #F90 -6.13%, #F90 8.8%, #F00 44.25%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RESULTS
        </span>
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

      <div className="mx-4 mt-8">
        <h2 className="text-white font-bold text-[18px]">
          KNOW THE MAN BEHIND THE <span className="text-[#f90]">MAGIC</span>
        </h2>
        <div
          className="rounded-2xl my-3 px-2 py-4"
          style={{
            // background:
            //   "linear-gradient(132deg, #FFF 1.42%, #CDCDCD 1.43%, #515151 49.94%, #000 101.59%)",
            borderRadius: "19px",
            // opacity: "0.2",
            background:
              "linear-gradient(132deg, #FFF 1.42%, #CDCDCD 1.43%, #515151 49.94%, #000 101.59%)",
            boxShadow: "hsl(11deg 100% 44.08%) 2px 2px 11px 2px",

            background: "url(/behind-man.png)",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* c:\Users\RB Tech\Downloads\Rectangle 11.png */}
          <div className="flex justify-between items-center">
            <div className="w-[45%]">
              <img src="/men.svg" alt="logo" />
            </div>
            <div className="flex w-1/2 flex-col">
              <h2
                style={{
                  background:
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  // fontFamily: "Test Epicene Text",
                  fontSize: "26px",
                  fontWeight: "400",
                  // lineHeight: "normal",
                  textAlign: "justify",
                }}
              >
                Sahil Kasana
              </h2>
              <h4 className="text-left text-[14px] text-white">
                The{" "}
                <span
                  className=" font-epicene"
                  style={{
                    background:
                      "linear-gradient(278deg, #F90 13.27%, #F90 13.27%, #F00 64.94%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",

                    fontSize: "14px",
                    fontStyle: "italic",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  Cold Outreach
                </span>{" "}
                King
              </h4>
            </div>
          </div>
          <h2 className="mt-7 mb-3 mx-7 text-center text-white font-helvetica">
            Worked with over 300 clients and generated{" "}
            <span
              style={{
                background:
                  "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Helvetica",
                fontSize: "15px",
                fontStyle: "italic",
                fontWeight: "700",
                lineHeight: "normal",
                marginTop: "-1px",
              }}
            >
              5 crore + revenue
            </span>{" "}
            just with cold outreach.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Results;
