import Image from "next/image";
import React from "react";
import TimeRunning from "./TimeRunning";
import JoinNowCTA from "./JoinNowCTA";
import "./Style.css";

let bonuses = [
  {
    icon: "/bonus1.png",
    price: "3,000",
    desc: "outreach script",
  },
  {
    icon: "/bonus2.png",
    price: "8,000",
    desc: "OPA Blueprint",
  },
  {
    icon: "/bonus3.png",
    price: "2,000",
    desc: "Email Script",
  },
  {
    icon: "/bonus4.png",
    price: "4,000",
    desc: "AI promts & tools",
  },
];

function Bonus() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-center text-[24px] md:text-[30px] lg:text-[42px] font-[700] font-helvetica">
        Unlock Bonuses Worth{" "}
        <span
          className="font-epicene"
          style={{
            background:
              "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ₹17,000
        </span>
      </h2>

      <div className="w-[88%] md:w-[60%]  sm:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {bonuses.map((i, index) => (
          <div
            className="col-span-1  mx-2  text-center my-6 py-3 rounded-xl border-2 border-[#f90]"
            style={{
              background: "url(/noisy-gradients.png) lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            key={i}
          >
            <Image
              src={i.icon}
              width={100}
              height={100}
              alt="logo"
              className="mx-auto"
            />
            <p
              className="font-hanson"
              // className="text-[48px] font-hanson font-[700] text-[#f90] leading-none"
              style={{
                background:
                  "linear-gradient(270deg, #F90 -44.3%, #F90 10.82%, #F00 141.75%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              <span className="text-[24px]">₹</span>
              {i.price}
            </p>
            <h2 className="text-[20px] font-hanson font-[700] text-white uppercase leading-none mt-[-px]">
              {i.desc}
            </h2>
          </div>
        ))}
      </div>

      <div
        className="text-white text-center py-10 px-4 w-[80%] mx-auto mt-5 sm:mt-10 rounded-[19px] my-8 relative"
        style={{
          background:
            "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
          boxShadow: "-2px -2px 3px 0px #FF7A00",

          backdropFilter: "blur(2.70px)",
        }}
      >
        <span className="w-[10px] h-[10px] rounded-full bg-[#fff] left-5 top-5 absolute"></span>
        <div className="flex flex-col items-center justify-center  ">
          <p className="text-[13px] lg:text-[32px] md:text-[24px] font-helvetica">
            Total Value of{" "}
            <span
              className="bold italic"
              style={{
                background:
                  "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bonuses
            </span>
          </p>
          <h1 className="text-[48px] md:text-[62px] lg:text-[96px] font-[700] mt-2 font-hanson leading-none ">
            <span className="text-[28px] lg:text-[48px]">₹</span>17,000
          </h1>

          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-4" />
        </div>
      </div>

      <div className="text-white mt-3 text-center">
        <p className="text-[14px] lg:text-[30px] md:text-[24px] font-[400] font-helvetica">
          Normal Workshop Ticket Price:
          <span className="custom-strike">₹2999</span>
        </p>

        <p
          className="text-[16px] lg:text-[25px] md:text-[20px] font-bold font-helvetica"
          style={{
            background:
              "linear-gradient(276deg, #F90 16.68%, #F90 55.97%, #F00 149.3%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Join Today At Just
        </p>
        <h1
          className="font-hanson font-bold"
          style={{
            fontSize: "96px",
            background:
              "linear-gradient(291deg, #F90 6.63%, #F90 6.63%, #F00 111.45%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span style={{ fontSize: "48px" }}>₹</span>299
        </h1>
      </div>

      <TimeRunning />
      <JoinNowCTA />

      <div className="border border-dotted border-[#f90] px-2 py-2  rounded-[15px] my-8 font-helvetica w-[95%] md:w-[50%] lg:w-[45%]">
        <p className="text-center text-white  text-[13px] lg:text-[28px] md:text-[21px]">
          This Workshop Is
        </p>
        <p className="text-center text-white text-[13px] lg:text-[28px] md:text-[21px]">
          {" "}
          A Complete Mentorship You Need To Understand
        </p>
        <p
          className="text-center font-bold text-[16px] lg:text-[28px] md:text-[21px]"
          style={{
            background:
              "linear-gradient(272deg, #F90 37.08%, #F90 37.09%, #F00 94.15%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Ins and Outs Of An Agency Business!
        </p>
      </div>
    </div>
  );
}

export default Bonus;
