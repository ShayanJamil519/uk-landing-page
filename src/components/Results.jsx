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
        className="mt-7 relative flex justify-center items-center md:h-screen"
      >
        <img
          src="/results__layer.svg"
          alt="logo"
          className="absolute left-0 top-[30%] z-2"
        />

        <div className="mx-auto">
          <img
            src="/results__1.svg"
            alt="logo"
            className="mb-4 z-10 relative"
          />
          <img src="/results__2.svg" alt="logo" className="z-10 relative" />
        </div>
      </div>

      <TimeRunning />

      <JoinNowCTA />

      <div className="mt-8 md:mt-12 w-[90%] sm:w-[70%] lg:w-[55%] mx-auto">
        <h2 className="text-white font-bold text-[18px] lg:text-[28px] md:text-[24px] sm:text-[22px]">
          KNOW THE MAN BEHIND THE{" "}
          <span
            className="font-bold "
            style={{
              background:
                "linear-gradient(275deg, #F90 -18.67%, #F90 -1.55%, #F00 32.81%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MAGIC
          </span>
        </h2>
        <div
          className="rounded-2xl mt-5 px-2 py-4 md:pt-7"
          style={{
            borderRadius: "19px",
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
          <div className="flex justify-center gap-2 sm:gap-5 md:gap-6 items-center ">
            <div className="">
              <img
                src="/men.svg"
                alt="logo"
                className="w-[120px] md:w-[160px]"
              />
            </div>
            <div className="flex  flex-col">
              <h2
                className="text-[27px] md:text-[40px] lg:text-[60px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  // fontFamily: "Test Epicene Text",
                  fontWeight: "400",
                  // lineHeight: "normal",
                  textAlign: "justify",
                }}
              >
                Sahil Kasana
              </h2>
              <h4 className="text-left -mt-2 font-bold italic text-[14px] text-white">
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
          <h2 className="mt-7 mb-3 mx-1 text-[15px] text-center text-white font-helvetica">
            Worked with over 300 clients and generated{" "}
            <span
              style={{
                background:
                  "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Helvetica",

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
