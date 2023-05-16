import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseDark from "../../../../../../static/messageModal.svg";

const Following = ({ following, onClose }) => {
  const [tabIndex, setTabIndex] = useState(1);
  console.log(tabIndex);
  if (!following) {
    return false;
  }
  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white h-[400px] w-[400px] rounded-xl flex flex-col justify-end "
        >
          <div className="w-full h-[42px] flex justify-end border-b">
            <div className="w-[300px] h-[42px] flex justify-center items-center  ">
              <h1 className="font-semibold">Takip Ettikleri</h1>
            </div>
            <div className="w-[50px] h-[42px] flex justify-center items-center cursor-pointer ">
              <img onClick={onClose} src={CloseDark} alt="" />
            </div>
          </div>
          <div className="w-full h-[42px] flex border-b">
            <div
              onClick={() => setTabIndex(1)}
              className={
                tabIndex === 1
                  ? "w-[200px] h-[42px] flex justify-center items-center cursor-pointer border-b border-gray-600 font-semibold  "
                  : "w-[200px] h-[41px] flex justify-center items-center cursor-pointer font-semibold opacity-40  "
              }
            >
              <span className="text-sm text-[#00376B]">Kişiler</span>
            </div>
            <div
              onClick={() => setTabIndex(2)}
              className={
                tabIndex === 2
                  ? "w-[200px] h-[42px] flex justify-center items-center cursor-pointer border-b border-gray-600 font-semibold  "
                  : "w-[200px] h-[41px] flex justify-center items-center cursor-pointer font-semibold opacity-40  "
              }
            >
              <span className="text-sm text-[#00376B]">Konu Etiketleri</span>
            </div>
          </div>
          <div className="h-full w-full overflow-x-hidden overflow-y-scroll">
            {tabIndex === 1
              ? [...Array(20)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[385px] h-[60px] flex items-center justify-center px-4"
                  >
                    <div className=" w-full flex items-center">
                      <Link to="">
                        <img
                          className=" h-[44px] w-[44px] rounded-full"
                          src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                          alt=""
                        />
                      </Link>
                      <div className="ml-3 flex flex-col justify-center w-[200px]">
                        <Link to="">
                          <span className="text-xs font-semibold">tmac</span>
                        </Link>
                        <span className="text-gray-400 text-xs">
                          Tracy Lamar McGrady
                        </span>
                      </div>
                      <button className=" px-4 h-[32px] bg-[#EFEFEF] rounded-lg  font-semibold hover:bg-slate-200 text-sm">
                        Takiptesin
                      </button>
                    </div>
                  </div>
                ))
              : [...Array(1)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[385px] h-[60px] flex items-center justify-center px-4"
                  >
                    <div className=" w-full flex items-center">
                      <Link to="">
                        <img
                          className=" h-[44px] w-[44px] rounded-full"
                          src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                          alt=""
                        />
                      </Link>
                      <div className="ml-3 flex flex-col justify-center w-[200px]">
                        <Link to="">
                          <span className="text-xs font-semibold">#tmac</span>
                        </Link>
                        <span className="text-gray-400 text-xs">
                          14b gönderi
                        </span>
                      </div>
                      <button className="px-4 h-[32px] bg-[#EFEFEF] rounded-lg  font-semibold hover:bg-slate-200 text-sm">
                        Takiptesin
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Following;
