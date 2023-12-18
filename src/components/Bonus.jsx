import Image from "next/image";
import React from "react";
import TimeRunning from "./TimeRunning";
import JoinNowCTA from "./JoinNowCTA";

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
      <h2 className="text-white text-[24px] font-[700] font-helvetica">
        Unlock Bonuses Worth{" "}
        <span
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

      <div className="w-full">
        {bonuses.map((i, index) => (
          <div
            className="flex items-center justify-center flex-col mx-12 my-6 py-3 rounded-xl border-2 border-[#f90]"
            style={{
              background: "url(/noisy-gradients.png) lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            key={i}
          >
            <Image src={i.icon} width={100} height={100} alt="logo" />
            <p
              className="font-hanson"
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
              <span style={{ fontSize: "24px" }}>₹</span>
              {i.price}
            </p>

            <h2 className="text-[20px] font-hanson font-[700] text-white uppercase leading-none mt-[-10px]">
              {i.desc}
            </h2>
          </div>
        ))}
      </div>

      <div
        className="text-white text-center py-10 px-4 w-[85%] rounded-[19px] my-8"
        style={{
          background:
            "linear-gradient(139deg, rgba(6, 6, 6, 0.30) 5.43%, rgba(177, 174, 174, 0.15) 48.89%, rgba(217, 217, 217, 0.00) 94.14%)",
          boxShadow: "-2px -2px 3px 0px #FF7A00",

          backdropFilter: "blur(2.70px)",
        }}
      >
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[13px] font-helvetica">
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
          <h1 className="text-[48px] font-[700] mt-2 font-hanson leading-none ">
            ₹17,000
          </h1>

          <img src="/Line 1.svg" alt="logo" className="mx-auto mt-4" />
        </div>
      </div>

      <div className="text-white mt-3 text-center">
        <p className="text-[14px] font-[400] font-helvetica">
          Normal Workshop Ticket Price:{" "}
          <span
            style={{
              textDecorationLine: " strikethrough",

              background:
                "linear-gradient(274deg, #F90 -8.38%, #F90 -8.38%, #F00 39.33%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            ₹2999
          </span>
        </p>
        <p
          className="text-[16px] font-bold font-helvetica"
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
          className="text-[96px] font-hanson font-bold]"
          style={{
            background:
              "linear-gradient(291deg, #F90 6.63%, #F90 6.63%, #F00 111.45%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ₹299
        </h1>
      </div>

      <TimeRunning />
      <JoinNowCTA />

      <div className="border border-dotted border-[#f90] text-[13px] px-2 py-2  rounded-[15px] my-8 font-helvetica">
        <p className="text-center text-white">This Workshop Is</p>
        <p className="text-center text-white">
          {" "}
          A Complete Mentorship You Need To Understand
        </p>
        <p
          className="text-center font-bold text-[16px]"
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
