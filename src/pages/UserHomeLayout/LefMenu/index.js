import React from "react";
import { Icon } from "@iconify/react";
import InstagramHomeIcon from "../../../static/home.png";
import ReelsIcon from "../../../static/reels.png";
import InstagramTextLogo from "../../../static/insta.png";
import { Link } from "react-router-dom";
import InstagramMessageIcon from "../../../static/message.png";
import { AiOutlineHeart } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useRef, useState } from "react";
import SearchSlideMenu from "./LeftMenuSections/SearchSlideMenu";


const LeftMenu = () => {
  const [show, setShow] = useState(true);

  const lefmenuRef = useRef();

  const showEffect = () => {
    show ? setShow(false) : setShow(true);
    show
      ? lefmenuRef.current.classList.add("width-size")
      : lefmenuRef.current.classList.remove("width-size");
  };

  return (
    <>
      <div
        ref={lefmenuRef}
        className="flex w-[270px] z-50 bg-white res-width h-screen p-3 border-r border-1 fixed top-0 left-0 "
      >
        <div className=" flex flex-col items-center w-full">
          <div className="ml-4 w-full  h-28">
            {show ? (
              <Link to="userHome">
                <div className="flex justify-start items-center h-full p-3 text-hidden">
                  <img src={InstagramTextLogo} className="h-12 " alt="" />
                </div>
              </Link>
            ) : (
              <Link to="userHome">
                <div className="icon-show  justify-start items-center  h-full p-3 mt-4 mb-1 ml-[2px]">
                  <Icon className="text-[28px]" icon="bi:instagram" />
                </div>
              </Link>
            )}
            {show ? (
              <Link to="userHome">
                <div className="icon-show  justify-start items-center ml-[2px] hidden h-full p-3 ">
                  <Icon className="text-[28px]" icon="bi:instagram" />
                </div>
              </Link>
            ) : (
              <Link to="userHome" className="hidden">
                <div className="icon-show  justify-start hidden h-full p-3 ">
                  <Icon className="text-[28px]" icon="bi:instagram" />
                </div>
              </Link>
            )}
          </div>
          <div className=" w-full h-full p-2">
            <Link to="userHome">
              <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-400 delay-100 cursor-pointer ml-[5px]">
                <div className="flex justify-start items-center h-full p-2">
                  <img src={InstagramHomeIcon} className="h-7 mr-4" alt="" />
                  <div className={show ? "text-hidden text-base  " : "hidden"}>
                    Ana Sayfa
                  </div>
                </div>
              </div>
            </Link>
            <div
              onClick={showEffect}
              className={
                show
                  ? "flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-[3px] "
                  : "border-1 rounded-full flex   hover:bg-slate-50 cursor-pointer h-14 w-14 "
              }
            >
              <div className="flex items-center h-full p-2">
                <CiSearch
                  className={
                    show ? "text-3xl mr-5" : "text-black text-3xl ml-1 "
                  }
                />
                <div className={show ? "text-hidden text-base" : "hidden"}>
                  Ara
                </div>
              </div>
            </div>
            <Link to="discover">
              <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-[4px] ">
                <div className="flex justify-start items-center h-full p-2">
                  <Icon className="text-3xl mr-4" icon="ph:compass-thin" />
                  <div className={show ? "text-hidden text-base" : "hidden"}>
                    Keşfet
                  </div>
                </div>
              </div>
            </Link>
            <Link to="reels">
              <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-[5px]">
                <div className="flex justify-start items-center h-full p-2">
                  <img src={ReelsIcon} className="h-7 mr-4" alt="" />
                  <div className={show ? "text-hidden text-base" : "hidden"}>
                    Reels
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex h-14 w-full  hover:bg-slate-50  hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-[7px]">
              <div className="flex justify-start items-center h-full p-2">
                <img src={InstagramMessageIcon} className="h-6 mr-4" alt="" />
                <div className={show ? "text-hidden text-base" : "hidden"}>
                  Mesajlar
                </div>
              </div>
            </div>
            <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-[6px] ">
              <div className="flex justify-start items-center h-full p-2">
                <AiOutlineHeart className="text-2xl mr-4" />
                <div className={show ? "text-hidden text-base" : "hidden"}>
                  Bildirimler
                </div>
              </div>
            </div>
            <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-2">
              <div className="flex justify-start items-center h-full p-2">
                <VscDiffAdded className="text-2xl mr-4" />
                <div className={show ? "text-hidden text-base" : "hidden"}>
                  Oluştur
                </div>
              </div>
            </div>
            <Link to="userprofile">
              <div className="flex h-14 w-full  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ml-2">
                <div className="flex justify-start items-center h-full p-2">
                  <img
                    src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
                    className="bg-red-400 h-7 w-7 rounded-full mr-4"
                    alt=""
                  />
                  <div className={show ? "text-hidden text-base" : "hidden"}>
                    Profil
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full ml-5 h-14 p-3  hover:bg-slate-50 hover:rounded-3xl duration-300 delay-100 cursor-pointer ">
            <div className="flex justify-start items-center">
              <RxHamburgerMenu className="mr-4 text-2xl" />
              <div className={show ? "text-hidden" : "hidden"}>Daha fazla</div>
            </div>
          </div>
        </div>        
      </div>
      <SearchSlideMenu show={show} />      
    </>
  );
};

export default LeftMenu;
