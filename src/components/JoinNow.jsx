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
        <div className="w-[90%] min-h-[224px] lg:w-[30%] mx-auto   justify-center items-center flex  rounded-[32px] relative">
          <img
            onClick={handleOpen}
            src="/image 5.svg"
            alt="logo"
            className="absolute right-0 top-0 bottom-0  left-0 w-full  cursor-pointer  "
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
