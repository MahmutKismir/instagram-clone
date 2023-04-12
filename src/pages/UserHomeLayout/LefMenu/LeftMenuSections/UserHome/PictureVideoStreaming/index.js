import React from "react";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { Icon } from "@iconify/react";
import { streaminData } from "./dataStr";

const PictureVideoStreaming = () => {
  
  return (
    <>
      <div className="w-[615px] h-screen flex flex-col  items-center  ">
        <div className="w-[460px] h-screen">
          {streaminData.map((item, index) => {
            return (
              <div key={index} className="mb-2">
                <div className=" flex w-[460px] h-[56px] items-center ">
                  <div className=" h-[42px] w-[42px] mr-2 ">
                    <div className="flex items-center justify-center h-[42px] w-[42px] inst-color  rounded-full cursor-pointer  ">
                      <img
                        className=" h-[38px] w-[38px] rounded-full border-1 p-[1px] bg-white "
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" w-[380px] h-[40px] flex items-center ">
                    <span className="text-sm text-[#262626] hover:text-[#737373] cursor-pointer ">
                      {item.username}
                    </span>
                    <MdVerified className="text-colortext h-[12px] " />
                    <span className="text-[#737373] text-sm">. 1g</span>
                  </div>
                  <div className=" h-[40px] w-[40px] flex justify-center items-center  ">
                    <BsThreeDots className="hover:text-[#737373] cursor-pointer h-[24px] ml-4 " />
                  </div>
                </div>
                <div className="h-[460px] w-[460px] ">
                  <img
                  style={{objectFit:'cover',height:'100%'}}  
                    src={item.posterImage}
                    alt=""
                    className="rounded"
                  />
                </div>
                <div className=" w-[460px] max-h-[248px]">
                  <section className="w-[460px] h-[46px] flex items-center  ">
                    <div className="flex">
                      <button>
                        <AiOutlineHeart className="text-2xl mr-3 hover:text-[#737373]" />
                      </button>
                      <button>
                        <FiMessageCircle className="text-2xl mr-3 hover:text-[#737373]" />
                      </button>
                      <button>
                        <Icon
                          className="text-2xl hover:text-[#737373]"
                          icon="eva:paper-plane-fill"
                        />
                      </button>
                      <div className="flex w-[368px] justify-end">
                        <button>
                          <Icon
                            icon="ep:collection-tag"
                            className="text-2xl hover:text-[#737373]"
                          />
                        </button>
                      </div>
                    </div>
                  </section>
                  <span className="cursor-pointer text-sm font-semibold">
                    758.453 beğenme
                  </span>
                  <div className="flex mt-1">
                    <span className="cursor-pointer text-sm font-semibold mr-2">
                      tmac
                    </span>
                    <span className="text-sm">best dunk 😈 </span>
                  </div>
                  <span className="text-sm cursor-pointer text-[#737373]">
                    185.628 yorumun tümünü gör
                  </span>
                  <textarea
                    name=""
                    id=""
                    cols="59"
                    rows="1"
                    className="text-[#737373] text-sm mt-1 mb-3 resize-none border-none outline-none "
                    placeholder="Yorum ekle..."
                  ></textarea>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PictureVideoStreaming;
