import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { Icon } from "@iconify/react";
import { BsCameraReels } from "react-icons/bs";
import { reelsData } from "../UserHome/topImageSlider/data";
import DiscoverModal from "./DiscoverModal";

const Discover = () => {
  const [data, seData] = useState(reelsData);
  const [showModal, setShowModal] = useState(false);
  const handleClick = (id) => {
    setShowModal(true)    
    console.log(id)
  }
 


  return (
    <>
      <div className="flex justify-center h-screen w-full p-5 md:ml-40 ">
        <div className="w-[970px] h-screen p-3">
          <div className=" grid grid-cols-3 gap-1">
            {data.map((item, index) => {
              return (
                <div
                  onClick={() => handleClick(item.id)}
                  key={index}
                  className={
                    item.reels
                      ? "h-[623px] w-[312px] cursor-pointer relative row-span-2"
                      : "h-[310px] w-[312px] cursor-pointer relative "
                  }
                >
                  <div className="h-full w-full bg-black">
                    {item.image ? (
                      <Icon
                        className="absolute top-1 right-2 text-white text-lg"
                        icon="mdi:image-filter-none"
                      />
                    ) : (
                      <BsCameraReels className="absolute top-1 right-2 text-white text-lg" />
                    )}
                    <div className=" absolute top-36 ml-20 text-white flex justify-between items-center  w-[135px]">
                      <span className=" flex text-white justify-center items-center">
                        <AiFillHeart className="mr-2 text-xl" />
                        1463
                      </span>
                      <span className="flex text-white justify-center items-center">
                        <TbMessageCircle2Filled className="mr-2 text-lg" />
                        293
                      </span>
                    </div>
                    {item.image && (
                      <img
                        className="hover:opacity-70 object-cover h-full w-full"
                        src={item.image}
                        alt=""
                      />
                    )}
                    {item.video && (
                      <video
                        preload="auto"
                        className="object-cover hover:opacity-70 h-full w-full"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    )}
                    {item.reels && (
                      <video
                        preload="auto"
                        className="object-cover hover:opacity-70 h-full w-full"
                      >
                        <source src={item.reels} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </div>
              );
            })}
            <DiscoverModal            
              data={data}
              showModal={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
