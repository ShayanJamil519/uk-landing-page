"use client";
import { IoMdPlay } from "react-icons/io";
import Modal from "./Modal";
import { useState } from "react";

const JoinNow = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const handleOpen = () => setOpenVideoModal(true);
  const handleClose = () => setOpenVideoModal(false);
  return (
    <>
      {openVideoModal && (
        <Modal
          url="https://www.youtube.com/watch?v=krOjUoK7ZD0"
          handleClose={handleClose}
        />
      )}

      <div className=" flex justify-center items-center">
        <div className="join_now_responsiveness w-[80%]   sm:h-auto lg:w-[50%] md:w-[60%] sm:w-[70%] mx-auto   justify-center items-center flex  rounded-[32px] relative">
          <img
            onClick={handleOpen}
            src="/image 5.svg"
            alt="logo"
            className=" w-full     cursor-pointer  "
          />
          {/* <div className="cursor-pointer z-10 bg-[#000] rounded-md py-2 px-4">
          <IoMdPlay className="text-[#fff] text-[20px]" />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default JoinNow;
