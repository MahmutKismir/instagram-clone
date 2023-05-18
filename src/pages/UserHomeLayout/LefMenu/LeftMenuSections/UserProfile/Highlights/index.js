import React, { useState } from "react";
import Plusicon from "../../../../../../static/plusicon.svg";
import { Link } from "react-router-dom";
import NewHighlightsModal from "./NewHighlightsModal";

const Highlights = () => {
  const [highlightsModal, setHighlightsModal] = useState(false);
  return (
    <>
      <div className="w-[940px] h-[130px] flex items-center px-8 mb-10">
        {[...Array(6)].map((_, index) => {
          return (
            <Link key={index}>
              <ul className="flex flex-col items-center  w-[130px] h-[128px] ">
                <li className="w-[125px] h-[128px] flex items-center justify-center  ">
                  <div className="h-[87px] w-[87px] flex items-center justify-center bg-white border-2 border-gray-300 rounded-full  ">
                    <img
                      className="h-[77px] w-[77px] rounded-full object-cover "
                      src="https://lakers.newssurge.com/gallery/d/289824-1/Kobe+Bryant+two+hand+slam+dunk+in+Portland.JPG"
                      alt=""
                    />
                  </div>
                </li>
                <div className="h-[32px] w-[85px] pt-1 flex justify-center  ">
                  <span className="text-xs font-semibold">Öne Çıkanlar</span>
                </div>
              </ul>
            </Link>
          );
        })}
        <Link>
          <div
            onClick={() => setHighlightsModal(true)}
            className="w-[125px] h-[128px] flex items-center flex-col"
          >
            <div className="w-[125px] h-[128px] flex items-center justify-center">
              <div className="h-[87px] w-[87px] flex items-center justify-center bg-white border-2 border-gray-300 rounded-full">
                <img className=" rounded-full" src={Plusicon} alt="" />
              </div>
            </div>
            <div className="h-[32px] w-[85px] pt-1 flex justify-center  ">
              <span className="text-xs font-semibold">Yeni</span>
            </div>
          </div>
        </Link>
      </div>
      <NewHighlightsModal
        highlightsModal={highlightsModal}
        onClose={() => setHighlightsModal(false)}
      />
    </>
  );
};

export default Highlights;
