import React from "react";
import ReelsSingleData from "../../../../../../../static/mjdunk.mp4";
import MiniPlayIcon from "../../../../../../../static/miniplayicon.svg";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";

const ProfileReels = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-1">
        <div className="h-[361px] w-[232px] relative ">
          <div className=" absolute mt-40 ml-12   text-white flex justify-between items-center  w-[135px]">
            <span className=" flex text-white justify-center items-center">
              <AiFillHeart className="mr-2 text-xl" />
              1463
            </span>
            <span className="flex text-white justify-center items-center">
              <TbMessageCircle2Filled className="mr-2 text-lg" />
              293
            </span>
          </div>
          <div className=" w-[50px] h-[16px] absolute left-2 bottom-2  flex items-center  ">
            <img src={MiniPlayIcon} className="" alt="" />
            <span className="text-white ml-2">245</span>
          </div>
          <video
            preload="auto"
            className="object-cover h-full w-full hover:opacity-70"
          >
            <source src={ReelsSingleData} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default ProfileReels;
