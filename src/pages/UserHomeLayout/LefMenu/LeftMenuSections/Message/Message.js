import React from "react";
import Direct from "../../../../../static/direct.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MessageModal from "./MessageModal";
import SwitchModal from "../components/SwitchModal";

const Message = () => {
  const [show, setShow] = useState(false);
  const [switchModal,setSwitchModal] = useState(false)

  return (
    <div className="flex justify-end h-screen w-screen lg:ml-40 px-4 py-5">
      <div className="h-full w-full flex justify-center">
        <div className="h-full w-[850px] flex border-1 rounded">
          <div className="h-full w-[320px] border-r">
            <div className="w-full h-[60px] border-b flex justify-center ">
              <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center h-full w-full">
                  <span className="font-medium">kobe</span>
                  <Icon
                   onClick={() => setSwitchModal(true)}
                    icon="material-symbols:keyboard-arrow-down"
                    className="text-[20px] ml-1 cursor-pointer"
                  />
                  <SwitchModal switchModal={switchModal} onClose={() => setSwitchModal(false)}   />
                </div>
                <div className="h-[60px] w-[60px] flex items-center ">
                  <Icon
                    onClick={() => setShow(true)}
                    icon="material-symbols:edit-square-outline-rounded"
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="h-[660px] w-full overflow-y-scroll overflow-x-hidden ">
              <div className="p-3">
                {[...Array(20)].map((_, index) => {
                  return (
                    <div className="w-[310px] h-[50px] flex items-center justify-center mb-4">
                      <div className=" w-full flex items-center">
                        <Link to="">
                          <img
                            className=" h-[50px] w-[50px] rounded-full"
                            src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                            alt=""
                          />
                        </Link>
                        <div className="ml-3 flex flex-col justify-center w-[195px] h-9">
                          <Link to="">
                            <span className="text-sm">tmac</span>
                          </Link>
                          <span className="text-gray-400 text-xs">
                            1 s önce aktifti
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full w-full">
              <img src={Direct} alt="" />
              <span className=" text-xl mt-4 ">Mesajların</span>
              <span className="text-sm text-[#737373] mt-1">
                Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.
              </span>
              <button
                onClick={() => setShow(true)}
                className="h-[35px] w-[125px] bg-[#0095F6] outline-none text-white rounded-md font-medium mt-7 "
              >
                Mesaj Gönder
              </button>
              <MessageModal onClose={() => setShow(false)} show={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
