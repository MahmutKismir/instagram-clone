import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { reelsData } from "./reelsData.js";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Reels = () => {
  const [sound, setSound] = useState(true);
  const [play, setPlay] = useState(true);

  const soundControl = () => {
    sound ? setSound(false) : setSound(true);
  };
  const playControl = () => {
    play ? setPlay(false) : setPlay(true);
  };
  return (
    <>
      <div className="h-full w-[86%] flex flex-col mt-10 ">
        {reelsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center h-screen w-full lg:ml-44 mb-10 "
            >
              <div className="flex  h-full w-[430px]  ">
                <div className="h-[90%] w-[360px] rounded-md  ">
                  <div className="w-[357px] h-[50px] absolute mt-1 flex justify-end z-50  ">
                    <div
                      onClick={soundControl}
                      className="h-[35px] w-[35px] bg-gray-200 opacity-30 absolute top-2 right-3   flex justify-center items-center rounded-full cursor-pointer  "
                    >
                      {!sound ? (
                        <Icon
                          icon="teenyicons:sound-on-solid"
                          className="text-xl"
                        />
                      ) : (
                        <Icon
                          icon="teenyicons:sound-off-solid"
                          className="text-xl"
                        />
                      )}
                      {!play && (
                        <div className=" bg-[rgba(0,0,0,9.9)] flex justify-center items-center rounded-full absolute top-[250px] right-[135px] h-[70px] w-[70px]  ">
                          <Icon
                            icon="material-symbols:play-arrow-rounded"
                            className="text-4xl text-white "
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <video
                    onClick={playControl}
                    muted={sound ? true : false}
                    autoPlay
                    controls
                    preload="auto"
                    className="object-cover h-full w-full rounded-md  "
                  >
                    <source src={item.reels} type="video/mp4" />
                  </video>
                </div>
                <div className="h-[90%] w-[65px] ml-2  ">
                  <section className="w-[65px] h-full flex justify-center items-center ">
                    <div className="flex flex-col w-full h-full justify-end items-center ">
                      <button className="h-[44px] w-[44px] flex flex-col  justify-center items-center mb-4  hover:text-[#737373] ">
                        <AiOutlineHeart className="text-2xl " />
                        <span className="text-xs">
                            1.68 M
                        </span>
                      </button>
                      <button className="h-[44px] w-[44px] flex flex-col  justify-center items-center mb-4 hover:text-[#737373]">
                        <FiMessageCircle className="text-2xl hover:text-[#737373]" />
                        <span className="text-xs">
                            35.6 B
                        </span>
                      </button>
                      <button className="h-[44px] w-[44px] flex  justify-center mb-2">
                        <Icon
                          className="text-2xl hover:text-[#737373]"
                          icon="eva:paper-plane-fill"
                        />
                      </button>
                      <button className="h-[44px] w-[44px] flex  justify-center">
                        <Icon
                          icon="ep:collection-tag"
                          className="text-2xl hover:text-[#737373]"
                        />
                      </button>
                      <button className="h-[44px] w-[44px] flex  justify-center">
                      <BsThreeDots className="hover:text-[#737373]  h-[24px] " />
                      </button>
                      <button className="h-[30px] w-[44px] flex items-end justify-center">
                        <img src={item.image} className="object-cover h-[24px] w-[24px] rounded-md" alt="" />
                    </button>
                    </div>                    
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reels;
