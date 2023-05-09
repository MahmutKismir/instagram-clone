import React from "react";
import { TabsData } from "../tabsdata";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import videoIcon from "../../../../../../../static/reelsvideoicon.svg";


const AllPosts = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-1">
        {TabsData.map((data, index) => {
          return (
            <div
              key={index}
              className=" flex h-[309px] w-[309px] cursor-pointer  "
            >
              <div className="h-full w-full  bg-black">
                {data.video ? (
                  <div className="w-full flex justify-end">
                    <img
                      src={videoIcon}
                      className="absolute mt-2 mr-2"
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className=" absolute mt-32 ml-20 text-white flex justify-between items-center  w-[135px]">
                  <span className=" flex text-white justify-center items-center">
                    <AiFillHeart className="mr-2 text-xl" />
                    1463
                  </span>
                  <span className="flex text-white justify-center items-center">
                    <TbMessageCircle2Filled className="mr-2 text-lg" />
                    293
                  </span>
                </div>

                {data.image && (
                  <img
                    src={data.image}
                    className="h-full w-full object-cover hover:opacity-70"
                    alt=""
                  />
                )}
                {data.video && (
                  <video
                    preload="auto"
                    className="object-cover h-full w-full hover:opacity-70"
                  >
                    <source src={data.video} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPosts;
