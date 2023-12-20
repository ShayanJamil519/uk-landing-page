"use client";
import { useTimer } from "react-timer-hook";

const OfferCountdown = () => {
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
    <div className="px-3 md:px-24 py-4 md:py-6 mt-6 gap-3 flex flex-row justify-between items-center" style={{background: "linear-gradient(89deg, rgba(255, 0, 31, 0.85) -4.53%, #FF5C00 99.62%)"}}>
        <div className="flex-1 md:flex-none">
            <h2 className="text-[28px] md:text-[32px] text-white font-[900] leading-none" style={{fontFamily: 'Montserrat'}}>₹299<sup className="line-through font-[400] text-[18px] md:text-[24px]">₹2999</sup></h2>
            <p className="text-white text-[14px] md:text-[16px]" style={{fontFamily: 'Montserrat'}}>Offer Ends in {hours} hours {minutes} mins {seconds} seconds</p>
        </div>
        <div className="flex-1 md:flex-none">
            <div className="border border-white rounded-md px-2 md:px-8 py-2 md:py-4 md:min-w-[250px] flex items-center justify-center">
                <h2 className="text-white text-center text-[14px] md:text-[16px]" style={{fontFamily: 'Montserrat'}}>Book Your Spot <br /> Now at ₹299/-</h2>
            </div>
        </div>
    </div>
  )
}

export default OfferCountdown