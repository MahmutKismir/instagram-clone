import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { reelsData } from "./data";

const TopImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = reelsData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide - 1);
  };

  console.log(currentSlide);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <>
      <div className=" w-[588px] flex h-28 mt-4 pt-4 pl-2 items-center overflow-x-hidden relative overflow-y-hidden mb-8">
        <button className="h-[45px] w-[45px] flex justify-center items-center z-50 absolute left-0">
          <Icon
            onClick={prevSlide}
            className="text-4xl text-white opacity-0.5"
            icon="mdi:chevron-left-circle"
          />
        </button>

        {reelsData.map((item, index) => {
          return (
            <ul
              key={index}
              className={
                currentSlide
                  ? "flex  h-full items-center transition delay-100 duration-200 transform -translate-x-[300px] "
                  : "flex  h-full items-center transition delay-100 duration-200 transform translate-x-[300px] "
              }
            >
              <li
                key={index}
                className="h-[122px] w-[65px] flex mt-2 flex-col justify-center items-center mr-2 "
              >
                <div className="flex items-center justify-center h-[65px] w-[65px] inst-color  rounded-full  ">
                  <img
                    className=" h-[59px] w-[59px] rounded-full p-[1px] bg-white "
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className=" h-[16px] w-[74px] flex justify-center align-bottom  ">
                  <div className="text-xs text-[rgba(38,38,38)] max-w-[74px] ">
                    {item.username}
                  </div>
                </div>
              </li>
            </ul>
          );
        })}

        <button
          onClick={nextSlide}
          className="h-[85px] w-10  flex items-center absolute right-0 "
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
