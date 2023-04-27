import React from "react";
import Close from "../../../../../static/whiteclose.svg";
import CreateIcon from "../../../../../static/createModalicon.svg";

const CreateModal = ({ create, onClose }) => {
  if (!create) {
    return false;
  }
  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)]  fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
      >
        <img
          onClick={onClose}
          src={Close}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[420px] h-[450px] bg-white rounded-2xl  "
        >
          <div className="flex w-full h-[42px] justify-center items-center border-b">
            <span className="font-semibold">Yeni Gönderi Oluştur</span>
          </div>
          <div className="h-full w-full p-3 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <img src={CreateIcon} className="h-[77px] w-[96px] " alt="" />
              <span className="mt-4 text-xl">
                Fotoğrafları ve videoları buraya sürükle
              </span>
              <button className="h-[35px] w-[150px] bg-[#0095F6] outline-none text-white rounded-md font-medium mt-5 ">
                Bilgisayardan seç
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
