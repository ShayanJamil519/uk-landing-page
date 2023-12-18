import React from "react";

function TimeRunning() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white mt-12 mb-3 uppercase font-helvetica px-4">
        <h2 className="text-[15px] font-[700] text-center">
          Time Is Running Out. Reserve Your Seat Now!
        </h2>
        <h3 className="text-[12px] text-[#BDBDBD] text-center">
          Fee will increase to{" "}
          <span
            style={{
              background:
                "linear-gradient(269deg, #F90 39.23%, #F90 39.23%, #F00 64.28%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rs.2999
          </span>{" "}
          once the Clock hits ZERO
        </h3>
      </div>
    </div>
  );
}

export default TimeRunning;
