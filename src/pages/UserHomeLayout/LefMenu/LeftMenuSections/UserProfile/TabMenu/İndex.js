import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllİmageBlack from "../../../../../../static/allimageicon.svg";
import Allİmage from "../../../../../../static/allimagesoft.svg";
import Reelsİcon from "../../../../../../static/smallreelsicon.svg";
import ReelsİconBlack from "../../../../../../static/reelsicondark.svg";
import Savedİcon from "../../../../../../static/savedicon.svg";
import SavedİconBlack from "../../../../../../static/savedicondark.svg";
import Taggedİcon from "../../../../../../static/taggedicon.svg";
import AllPosts from "./AllPosts/AllPosts";
import Reels from "./Reels/Reels";
import Saved from "./Saved/Saved";
import Tagged from "./Tagged/Tagged";


const TabMenu = () => {
  const [tabControl, setTabControl] = useState(1);

  return (
    <>
      <div className="w-full h-[53px] border-t flex justify-center items-end ">
        <Link
          onClick={() => setTabControl(1)}
          className={
            tabControl === 1
              ? "w-[95px] h-[52px] flex items-center mr-[60px] border-t border-black"
              : "w-[95px] h-[52px] flex items-center mr-[60px]"
          }
        >
          {tabControl === 1 ? (
            <img src={AllİmageBlack} alt="" />
          ) : (
            <img src={Allİmage} alt="" />
          )}
          <span
            className={
              tabControl === 1
                ? "text-xs ml-[6px]  text-black font-medium"
                : "text-xs ml-[6px]  text-[#737373]"
            }
          >
            GÖNDERİLER
          </span>
        </Link>
        <Link
          onClick={() => setTabControl(2)}
          className={
            tabControl === 2
              ? "w-[56px] h-[52px] flex items-center mr-[60px] border-t border-black"
              : "w-[56px] h-[52px] flex items-center mr-[60px]"
          }
        >
         {tabControl === 2 ? (
            <img src={ReelsİconBlack} alt="" />
          ) : (
            <img src={Reelsİcon} alt="" />
          )}
          <span
            className={
              tabControl === 2
                ? "text-xs ml-[6px]  text-black font-medium"
                : "text-xs ml-[6px]  text-[#737373]"
            }
          >
            REELS
          </span>
        </Link>
        <Link
          onClick={() => setTabControl(3)}
          className={
            tabControl === 3
              ? "w-[115px] h-[52px] flex items-center mr-[60px] border-t border-black"
              : "w-[115px] h-[52px] flex items-center mr-[60px]"
          }
        >
          {tabControl === 3 ? (
            <img src={SavedİconBlack} alt="" />
          ) : (
            <img src={Savedİcon} alt="" />
          )}
          <span
            className={
              tabControl === 3
                ? "text-xs ml-[6px]  text-black font-medium"
                : "text-xs ml-[6px]  text-[#737373]"
            }
          >
            KAYDEDİLENLER
          </span>
        </Link>
        <Link
          onClick={() => setTabControl(4)}
          className={
            tabControl === 4
              ? "w-[121px] h-[52px] flex items-center border-t border-black"
              : "w-[121px] h-[52px] flex items-center "
          }
        >
          <img src={Taggedİcon} alt="" />
          <span
            className={
              tabControl === 4
                ? "text-xs ml-[6px]  text-black font-medium"
                : "text-xs ml-[6px]  text-[#737373]"
            }
          >
            ETİKETLENENLER
          </span>
        </Link>
      </div>
        <AllPosts tabControl={tabControl} />
        <Reels tabControl={tabControl} />
        <Saved tabControl={tabControl} />
        <Tagged tabControl={tabControl} />
    </>
  );
};

export default TabMenu;
