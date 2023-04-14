import React, { useEffect, useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { Icon } from "@iconify/react";
import { BsCameraReels } from "react-icons/bs";
import { reelsData } from "../UserHome/topImageSlider/data";

const Discover = () => {
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.classList.add("hidden");
  }, []);

  const handleOpen = () => {
    modalRef.current.classList.add("flex");
    modalRef.current.classList.remove("hidden");
  };

  const handleClose = () => {
    modalRef.current.classList.add("hidden");
  };
  

  // const dataId = reelsData.map((item) => item.id)
  // console.log(dataId)


  return (
    <>
      <div className="flex justify-center h-screen w-full p-5 md:ml-40 overflow-auto">
        <div className="w-[970px] h-screen p-3">
          <div className=" grid grid-cols-3 gap-1">
            {reelsData.map((item, index) => {
              return (
                <>
                  {item.image && (
                    <div
                      onClick={handleOpen}
                      key={index}
                      className="h-[310px] w-[312px] cursor-pointer relative   "
                    >
                      <div className="h-full w-full bg-black">
                        <Icon
                          className="absolute top-1 right-2 text-white text-lg"
                          icon="mdi:image-filter-none"
                        />
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
                        <img
                          className="hover:opacity-70 object-cover h-full w-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                  {item.video && (
                    <div
                      onClick={handleOpen}
                      key={index}
                      className="h-[310px] w-[312px] cursor-pointer relative "
                    >
                      <div className="h-full w-full bg-black">
                        <div className=" absolute  top-36 ml-20 flex justify-between items-center  w-[135px]">
                          <span className=" flex text-white justify-center items-center">
                            <AiFillHeart className="mr-2 text-xl" />
                            1463
                          </span>
                          <span className="flex text-white justify-center items-center">
                            <TbMessageCircle2Filled className="mr-2 text-lg" />
                            293
                          </span>
                        </div>
                        <BsCameraReels className="absolute top-1 right-2 text-white text-lg" />
                        <video
                          preload="auto"
                          className="object-cover hover:opacity-70 h-full w-full"
                        >
                          <source src={item.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                  {item.reels && (
                    <div
                      onClick={handleOpen}
                      key={index}
                      className="h-[623px] w-[312px] cursor-pointer relative row-span-2"
                    >
                      <div className="h-full w-full bg-black">
                        <div className=" absolute  top-36 ml-20 flex justify-between items-center  w-[135px]">
                          <span className=" flex text-white justify-center items-center">
                            <AiFillHeart className="mr-2 text-xl" />
                            1463
                          </span>
                          <span className="flex text-white justify-center items-center">
                            <TbMessageCircle2Filled className="mr-2 text-lg" />
                            293
                          </span>
                        </div>
                        <BsCameraReels className="absolute top-1 right-2 text-white text-lg" />
                        <video
                          preload="auto"
                          className="object-cover hover:opacity-70 h-full w-full"
                        >
                          <source src={item.reels} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>

     {
       //SECTION -  Modal section start
     }
      <div
        ref={modalRef}
        className="bg-[rgba(0,0,0,0.4)] fixed z-[500]  top-0 bottom-0 left-0 right-0 justify-center "
      >
        <button className="absolute top-1/3 left-5 h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center  ">
          <Icon
            className="text-4xl text-gray-600"
            icon="ic:sharp-keyboard-arrow-left"
          />
        </button>
        <button className="absolute top-1/3 right-5 h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center  ">
          <Icon
            className="text-4xl text-gray-600"
            icon="ic:sharp-keyboard-arrow-right"
          />
        </button>
        <div
          onClick={handleClose}
          className="absolute text-white z-[999] right-5 top-5"
        >
          <Icon
            className="text-3xl cursor-pointer "
            icon="material-symbols:close-rounded"
          />
        </div>

        <div className="grid grid-cols-2 h-[94%] w-3/5 mt-7 ">
          <div>
           {
            
           }

            <video
              controls
              autoPlay
              muted
              className="object-cover h-full w-full"
            >
              {reelsData.map((video, index) => {
                return <source src={video.reels} type="video/mp4" />;
              })}
            </video>
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
                <div className="h-full w-14 flex justify-center items-center text-sm text-colortext font-bold">
                  <button>Paylaş</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {
        //!SECTION  Modal section and
      }
      
    </>
  );
};

export default Discover;
