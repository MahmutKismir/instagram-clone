import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import AllİmageBlack from "../../../../../../static/allimageicon.svg";
import Allİmage from "../../../../../../static/allimagesoft.svg";
import Reelsİcon from "../../../../../../static/smallreelsicon.svg";
import ReelsİconBlack from "../../../../../../static/reelsicondark.svg";
import Savedİcon from "../../../../../../static/savedicon.svg";
import SavedİconBlack from "../../../../../../static/savedicondark.svg";
import Taggedİcon from "../../../../../../static/taggedicon.svg";
import TaggedİconBlack from "../../../../../../static/taggedicondark.svg";


const tabs = [
  {
    title: "GÖNDERİLER",
    path: "",
    icon: {
      active: AllİmageBlack,
      pasive: Allİmage,
    },
  },
  {
    title: "REELS",
    path: "reels",
    icon: {
      active: ReelsİconBlack,
      pasive: Reelsİcon,
    },
  },
  {
    title: "KAYDEDİLENLER",
    path: "saved",
    icon: {
      active: SavedİconBlack,
      pasive: Savedİcon,
    },
  },
  {
    title: "ETİKETLENENLER",
    path: "taged",
    icon: {
      active: TaggedİconBlack,
      pasive: Taggedİcon,
    },
  },
];

const TabMenu = () => {
  const { pathname } = useLocation();
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
  console.log(matchPath);
  console.log(match)

  return (
    <>
      <div className="w-full h-[53px] border-t flex justify-center ">
        {tabs.map((item, index) => (
          <Link
            key={index}
            to={item.path}           
            className={
              pathname === `/userprofile/${item.path}`
                ? "h-[51px] flex items-center mr-[60px] border-t border-black  "
                : "h-[52px] flex items-center mr-[60px] "
            }
          >
            {pathname === `/userprofile/${item.path}` ? (
              <img src={item.icon.active} alt="" />
            ) : (
              <img src={item.icon.pasive} alt="" />
            )}

            <span
              className={
                pathname === `/userprofile/${item.path}` 
                  ? "text-xs ml-[6px] text-black font-semibold"
                  : "text-xs ml-[6px] text-[#737373] font-semibold"
              }
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>          
    </>
    
  );
};

export default TabMenu;
