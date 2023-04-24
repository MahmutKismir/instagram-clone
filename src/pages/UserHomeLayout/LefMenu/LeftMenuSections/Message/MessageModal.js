import React from "react";
import { Link } from "react-router-dom";
import Close from "../../../../../static/messageModal.svg";

const MessageModal = ({ show, onClose }) => {
  if (!show) {
    return false;
  }
  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
      >
        <div className="flex justify-center py-8 h-[600px] w-full  ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[400px] bg-white border-none rounded-xl"
          >
            <div className="w-full h-[42px] rounded-t-xl flex border-b">
              <div className="w-[52px] h-[42px] flex justify-center items-center">
                <img
                  onClick={onClose}
                  className="cursor-pointer"
                  src={Close}
                  alt=""
                />
              </div>
              <div className="h-[42px] w-full flex justify-center items-center font-semibold  ">
                Yeni Mesaj
              </div>
              <div className="h-[42px] w-[75px] flex justify-center items-center text-blue-400 ">
                İleri
              </div>
            </div>
            <div className="w-[400px] h-[83px] border-b overflow-y-scroll overflow-x-hidden  ">
              <div className="px-3 py-1">
                <h4 className="font-semibold ">Kime:</h4>
              </div>
              <input
                type="text"
                placeholder="Ara..."
                className="w-[305px] h-[38px] border-none outline-none px-4 py-1 text-sm"
              />
            </div>
            <div className="h-[410px] w-[400px] overflow-y-scroll overflow-x-hidden">
              <div className="h-[60px] w-[385px] flex items-center px-4  ">
                <span className="text-sm font-semibold">Önerilenler</span>
              </div>
              {[...Array(15)].map((_, index) => {
                return (
                  <div key={index} className="w-[385px] h-[60px] flex items-center justify-center px-4">
                    <div className=" w-full flex items-center">
                      <Link to="">
                        <img
                          className=" h-[44px] w-[44px] rounded-full"
                          src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                          alt=""
                        />
                      </Link>
                      <div className="ml-3 flex flex-col justify-center w-[250px]">
                        <Link to="">
                          <span className="text-xs font-semibold">tmac</span>
                        </Link>
                        <span className="text-gray-400 text-xs">
                          Tracy Lamar McGrady
                        </span>
                      </div>

                      <div className="h-[44px] w-[45px] flex justify-center items-center">
                        <input
                          type="checkbox"
                          className="h-[22px] w-[22px]  "
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageModal;
