"use client";
import { useTimer } from "react-timer-hook";

const CountDown = () => {
  const sixHoursFromNow = new Date();
  sixHoursFromNow.setHours(sixHoursFromNow.getHours() + 6);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: sixHoursFromNow,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex justify-center gap-5 items-center font-helvetica  text-[#fff]">
      <div
        style={{
          background:
            "linear-gradient(247deg, rgb(255, 119, 119) 1.21%, rgb(214, 35, 35) 1.22%, rgb(215, 89, 49) 102%)",
        }}
        className=" text-center py-2 px-5 rounded-xl"
      >
        <div className="text-4xl font-bold">{hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(247deg, rgb(255, 119, 119) 1.21%, rgb(214, 35, 35) 1.22%, rgb(215, 89, 49) 102%)",
        }}
        className=" text-center py-2 px-3 rounded-xl"
      >
        <div className="text-4xl font-bold">{minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(247deg, rgb(255, 119, 119) 1.21%, rgb(214, 35, 35) 1.22%, rgb(215, 89, 49) 102%)",
        }}
        className=" text-center py-2 px-3 rounded-xl"
      >
        <div className="text-4xl font-bold">{seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default CountDown;
