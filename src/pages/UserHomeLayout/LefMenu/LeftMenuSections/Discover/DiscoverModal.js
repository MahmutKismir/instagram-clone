import React from "react";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { Icon } from "@iconify/react";
import mjdunk from "../../../../../static/mjdunk.mp4";

const DiscoverModal = ({ showModal, onClose }) => {
  if (!showModal) {
    return false;
  }
 
  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)] fixed z-[500]  top-0 bottom-0 left-0 right-0 flex  justify-center item-center "
      >
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2/4 left-5 h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center  "
        >
          <Icon
            className="text-4xl text-gray-600"
            icon="ic:sharp-keyboard-arrow-left"
          />
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2/4 right-5 h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center  "
        >
          <Icon
            className="text-4xl text-gray-600"
            icon="ic:sharp-keyboard-arrow-right"
          />
        </button>
        <div
          onClick={onClose}
          className="absolute text-white z-[999] right-5 top-5"
        >
          <Icon
            className="text-3xl cursor-pointer "
            icon="material-symbols:close-rounded"
          />
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="grid grid-cols-2 h-[94%] w-3/5 absolute top-6"
        >
          <div className="h-full  w-full border-r">
            <video
              controls
              autoPlay
              muted
              className="object-cover h-full w-full"
            >
              <source src={mjdunk} type="video/mp4" />
            </video>
            {/* {item.image && (
                    <img
                      className="h-full w-full object-cover "
                      src={item.image}
                      alt=""
                    />
                  )} */}
            {/* {item.video && (
                    <video
                      controls
                      autoPlay
                      muted
                      className="object-cover h-full w-full"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  )}
                  {item.reels && (
                    <video
                      controls
                      autoPlay
                      muted
                      className="object-cover h-full w-full"
                    >
                      <source src={item.reels} type="video/mp4" />
                    </video>
                  )} */}
          </div>
          <div className="flex flex-col  h-full w-full ">
            <div className="flex w-full h-[60px] bg-white border-b">
              <div className="w-full h-[60px]">
                <div className=" flex w-full h-full justify-between items-center p-3">
                  <div className=" h-[46px] w-[46px] mr-2 flex items-center ">
                    <div className="flex items-center justify-center h-[40px] w-[40px] inst-color  rounded-full cursor-pointer  ">
                      <img
                        className=" h-[38px] w-[38px] rounded-full border-1 p-[1px] bg-white "
                        src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col align-middle w-full ">
                    <div className=" w-full h-[18px] flex items-center">
                      <span className="text-sm text-[#262626] hover:text-[#737373] cursor-pointer ">
                        tmac
                      </span>
                      <MdVerified className="text-colortext h-[12px] " />
                      <button className="text-sm ml-2 font-semibold text-colortext">
                        Takip Et
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[60px] w-[40px] flex  items-center  ">
                <BsThreeDots className="hover:text-[#737373] cursor-pointer h-[24px] text-2xl" />
              </div>
            </div>
            <div className="h-full w-full flex flex-col justify-end align-bottom  ">
              <div className="h-full w-full bg-white"></div>
              <div className="h-[130px] w-full bg-white flex flex-col  p-1 border-t  ">
                <section className="w-full h-[46px] flex justify-between items-center  ">
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
                  </div>
                  <div className="flex items-end justify-end mr-1 ">
                    <button>
                      <Icon
                        icon="ep:collection-tag"
                        className="text-2xl hover:text-[#737373]"
                      />
                    </button>
                  </div>
                </section>
                <span className="text-sm font-medium ml-1">
                  2.425.368 beğenme
                </span>
                <span className="text-[10px] text-[#737373] ml-1 mb-3">
                  NİSAN 9
                </span>
              </div>
              <section className="border-t flex flex-row justify-between align-middle h-[55px] w-full bg-white  ">
                <div className="h-full w-14 flex justify-center items-center cursor-pointer">
                  <Icon icon="ph:smiley-light" className="text-3xl" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="60"
                  placeholder="Yorum ekle..."
                  className="text-[#737373] text-sm mt-4  resize-none border-none outline-none"
                ></textarea>
                <div className="h-full w-14 flex justify-center items-center text-sm text-colortext font-bold mr-3">
                  <button>Paylaş</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverModal;
