import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { reelsData } from "./data";




const TopImageSlider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideLength = reelsData.length;

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  // };

  // console.log(currentSlide);

  // useEffect(() => {
  //   setCurrentSlide(0);
  // }, []);

  return (
    <>
      <div className=" w-[588px] flex h-28 mt-4 pt-4 pl-2 items-center overflow-hidden mr-8 mb-8">
        <button className="h-[85px] w-10 flex justify-center items-center absolute">
          <Icon
            className="text-4xl text-white opacity-0.5"
            icon="mdi:chevron-left-circle"
          />
        </button>
        <div className="flex w-[570px] h-[85px] ">
          <div className="flex w-[570px]">
            <div className="w-[570px] h-[122px] mr-3 mt-2 ml-3">
              <div className="flex w-[570px] h-[122px] ">
                {reelsData.map((item, index) => {
                  return (
                    <button key={index} className=" w-[64px] h-[84px] mr-2  ">
                      <div className="flex items-center justify-center h-[65px] w-[65px] inst-color  rounded-full  ">
                        <img
                          className=" h-[59px] w-[59px] rounded-full border-1 p-[1px] bg-white "
                          src={item.image}
                          alt=""
                        />
                      </div>

                      <div className=" h-[16px] w-[74px] flex justify-center align-bottom  ">
                        <div className="text-xs text-[rgba(38,38,38)] max-w-[74px] ">
                          {item.username}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <button          
          className="h-[85px] w-10  flex items-center absolute ml-[548px]"
        >
          <Icon
            className=" text-4xl  text-white opacity-0.5"
            icon="mdi:chevron-right-circle"
          />
        </button>
      </div>
    </>
  );
};

export default TopImageSlider;
