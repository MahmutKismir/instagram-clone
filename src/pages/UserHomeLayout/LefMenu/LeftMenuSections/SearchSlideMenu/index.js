import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import {VscChromeClose} from 'react-icons/vsc'

const SearchSlideMenu = ({ show }) => {
  return (
    <>
      <div
        className={
          show
            ? "transform -translate-x-[395px]  h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col"
            : "transform translate-x-[94px] h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col  "
        }
      >
        <div className="m-3 flex flex-col">
          <span className="text-2xl font-bold mb-14">Ara</span>
          <div className="flex w-full mb-2 justify-between">
            <input
              type="text"
              className=" w-full h-10 py-1 px-4 bg-[#efefef] rounded-md relative outline-none border-none "
              placeholder="Ara"
            />
            <RiCloseCircleFill className="absolute mt-3 ml-[310px] text-[#c8c8c8]" />
          </div>
        </div>
        <div className="w-full h-full border-t ">
          <div className="mt-2 mb-3 flex justify-between p-3 ">
            <span className="font-medium">Yakındakiler</span>
            <button className="text-sm text-[#0095F6] font-medium">
              Tümünü Temizle
            </button>
          </div>
          <div className="h-[60px] w-full hover:bg-slate-50">
            <div className=" flex w-full h-full justify-between items-center p-3">
              <div className=" h-[54px] w-[54px] mr-2 flex items-center ">
                <div className="flex items-center justify-center h-[44px] w-[44px] inst-color  rounded-full cursor-pointer  ">
                  <img
                    className=" h-[40px] w-[40px] rounded-full border-1 p-[1px] bg-white "
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
                </div>
                <span className="text-gray-400 text-xs">
                    Tracy Lamar McGrady . 4,280.000 takipçi
                </span>                
              </div>
              <VscChromeClose className="mt-1 mr-4 text-2xl cursor-pointer text-[#737373]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSlideMenu;
