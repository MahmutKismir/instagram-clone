import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchSlideMenu from "./LeftMenuSections/SearchSlideMenu";
import CreateModal from "./LeftMenuSections/components/CreateModal";
import HomeIcon from "../../../static/home.svg";
// import HomeBlack from "../../../static/homeblack.svg";
import InstagramTextLogo from "../../../static/instatext.svg";
import settinSmall from "../../../static/settinSmall.svg";
import clock from "../../../static/clock.svg";
import savedSmall from "../../../static/savedSmall.svg";
import sun from "../../../static/sunicon.svg";
import erros from "../../../static/errors.svg";
import search from "../../../static/search.svg";
import insta from "../../../static/instaicon.svg";
import discoverİcon from "../../../static/discoverİcon.svg";
import reelsicon from "../../../static/reelsicon.svg";
import messageicon from "../../../static/messageicon.svg";
import hearticon from "../../../static/hearticon.svg";
import createicon from "../../../static/createicon.svg";
import hamburgericon from "../../../static/hamburgericon.svg";

const toggleMenu = [
  {
    id: 1,
    icon: settinSmall,
    text: "Ayarlar",
    // path: "-",
  },
  {
    id: 2,
    icon: clock,
    text: "Hareketlerin",
    // path: "",
  },
  {
    id: 3,
    icon: savedSmall,
    text: "Kaydedilenler",
    path: "userprofile/saved",
  },
  {
    id: 4,
    icon: sun,
    text: "Görünümü değiştir",
    // path: "",
  },
  {
    id: 5,
    icon: erros,
    text: "Bir sorun bildir",
    // path: "",
  },
];

const LeftMenu = ({ ...props }) => {
  const { handleClose, open, handleToggle } = props;
  const [show, setShow] = useState(true);
  const [notice, setNotice] = useState(false);
  const [create, setCreate] = useState(false);

  console.log(props);

  const showEffect = () => {
    setShow((prevShow) => !prevShow);
    setNotice(true);
    handleClose();
  };
  const noticeControl = () => {
    setShow((prevShow) => !prevShow);
    setNotice(false);
    handleClose();
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={
          show
            ? "flex w-[270px] z-50 bg-white  res-width h-screen p-3 border-r border-1 fixed top-0 left-0"
            : "flex w-[75px] z-50 bg-white  h-screen res-width p-3 border-r border-1 fixed top-0 left-0"
        }
      >
        <div className=" flex flex-col justify-center items-center w-full">
          <div className=" w-full  h-24 flex items-center">
            {show ? (
              <Link to="userHome">
                <div className="flex items-center h-full w-full p-3 text-hidden">
                  <img src={InstagramTextLogo} alt="" />
                </div>
              </Link>
            ) : (
              <Link to="userHome">
                <div className=" items-center p-3  ">
                  <img src={insta} alt="" />
                </div>
              </Link>
            )}
            {show ? (
              <Link to="userHome">
                <div className="icon-show items-center hidden h-full ">
                  <img src={insta} alt="" />
                </div>
              </Link>
            ) : (
              <Link to="userHome" className="hidden">
                <div className="icon-show items-center hidden h-full ">
                  <img src={insta} alt="" />
                </div>
              </Link>
            )}
          </div>
          <div className=" w-full h-full">
            <Link to="userHome">
              <div className="flex h-[56px] w-full items-center  hover:bg-slate-100 hover:rounded-xl duration-400 delay-100 cursor-pointer">
                <div className="flex justify-start items-center h-[48px] w-full p-2 ml-1">
                  <img src={HomeIcon} className="" alt="" />
                  {/* <img
                    src={HomeBlack}
                    className="ml-[6px] mr-4 hover:h-[26px]"
                    alt=""
                  /> */}
                  <div
                    className={show ? "text-hidden text-base ml-4  " : "hidden"}
                  >
                    Ana Sayfa
                  </div>
                </div>
              </div>
            </Link>
            <div
              onClick={showEffect}
              className="flex h-[56px] w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer "
              // className={
              //   show
              //     ? "flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer ml-[3px] "
              //     : "border-1 rounded-xl flex   hover:bg-slate-100 cursor-pointer h-14 w-14 "
              // }
            >
              <div className="flex items-center h-full p-2 ml-1">
                <img src={search} alt="" />
                {/* <CiSearch
                  className={
                    show ? "text-3xl mr-5" : "text-black text-3xl ml-1 "
                  }
                /> */}
                <div className={show ? "text-hidden text-base ml-4" : "hidden"}>
                  Ara
                </div>
              </div>
            </div>
            <Link to="discover">
              <div className="flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer">
                <div className="flex justify-start items-center h-full p-2 ml-1">
                  <img src={discoverİcon} alt="" />
                  <div
                    className={show ? "text-hidden text-base ml-4" : "hidden"}
                  >
                    Keşfet
                  </div>
                </div>
              </div>
            </Link>
            <Link to="reels">
              <div className="flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer ">
                <div className="flex justify-start items-center h-full p-2 ml-1">
                  <img src={reelsicon} alt="" />
                  <div
                    className={show ? "text-hidden text-base ml-4" : "hidden"}
                  >
                    Reels
                  </div>
                </div>
              </div>
            </Link>
            <Link to="message">
              <div className="flex h-14 w-full  hover:bg-slate-100  hover:rounded-xl duration-300 delay-100 cursor-pointer">
                <div className="flex justify-start items-center h-full p-2 ml-1">
                  <img src={messageicon} alt="" />
                  <div
                    className={show ? "text-hidden text-base ml-4" : "hidden"}
                  >
                    Mesajlar
                  </div>
                </div>
              </div>
            </Link>
            <div
              onClick={noticeControl}
              className="flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer  "
            >
              <div className="flex justify-start items-center h-full p-2 ml-1">
                <img src={hearticon} alt="" />
                <div className={show ? "text-hidden text-base ml-4" : "hidden"}>
                  Bildirimler
                </div>
              </div>
            </div>
            <div
              onClick={() => setCreate(true)}
              className="flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer "
            >
              <div className="flex justify-start items-center h-full p-2 ml-1">
                <img src={createicon} alt="" />
                <div className={show ? "text-hidden text-base ml-4" : "hidden"}>
                  Oluştur
                </div>
              </div>
            </div>
            <CreateModal create={create} onClose={() => setCreate(false)} />
            <Link to="userprofile">
              <div className="flex h-14 w-full  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer ">
                <div className="flex justify-start items-center h-full p-2 ml-1">
                  <img
                    src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
                    className="bg-red-400 h-7 w-7 rounded-full"
                    alt=""
                  />
                  <div
                    className={show ? "text-hidden text-base ml-4" : "hidden"}
                  >
                    Profil
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div
            onClick={(e) => handleToggle(e)}
            className="w-full  h-14 p-3  hover:bg-slate-100 hover:rounded-xl duration-300 delay-100 cursor-pointer "
          >
            <div className="flex justify-start items-center">
              <img src={hamburgericon} alt="" />
              <div className={show ? "text-hidden ml-3" : "hidden"}>
                Daha fazla
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchSlideMenu show={show} notice={notice} />
      {open && (
        <div className="h-[350px] w-[266px] rounded-2xl bg-white shadow-[1px_1px_20px_0px] shadow-[#bfbcbc] absolute  z-50 bottom-[68px] left-3 p-2  ">
          {toggleMenu.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className="w-[250px] h-[45px] flex items-center flex-coll p-4 hover:bg-slate-100 rounded-xl cursor-pointer transition duration-400 delay-100 ">
                <div className="w-[30px] h-[18px] flex items-center ">
                  <img src={item.icon} alt="" />
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            </Link>
          ))}
          <div className="w-full h-[6px] bg-[#DBDBDB4B] absolute left-0 mt-2"></div>
          <Link>
            <div className="w-[250px] h-[45px] flex items-center flex-coll p-4 hover:bg-slate-100 rounded-xl cursor-pointer mt-5 transition duration-400 delay-100 ">
              <span className="text-sm">Hesap değiştir</span>
            </div>
          </Link>
          <Link>
            <div className="w-[250px] h-[45px] flex items-center flex-coll p-4 hover:bg-slate-100 rounded-xl cursor-pointer transition duration-400 delay-100 ">
              <span className="text-sm">Çıkış yap</span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default LeftMenu;
