import React from "react";
import CloseDark from "../../../../../../static/messageModal.svg";

const NewHighlightsModal = ({ highlightsModal, onClose }) => {
  if (!highlightsModal) {
    return false;
  }
  return (
    <div
      onClick={onClose}
      className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white h-[171px] w-[400px] rounded-xl flex flex-col items-center "
      >
        <div className="w-full h-[42px] flex justify-end border-b">
          <div className="w-[300px] h-[42px] flex justify-center items-center  ">
            <h1 className="font-semibold">Yeni Öne Çıkarma</h1>
          </div>
          <div className="w-[50px] h-[42px] flex justify-center items-center cursor-pointer ">
            <img onClick={onClose} src={CloseDark} alt="" />
          </div>
        </div>
        <div className="h-[100px] w-full flex justify-center items-center border-b">
          <input
            type="text"
            className="w-[360px] h-[40px] rounded-md border-1 px-3 py-1 bg-[#F5F5F5]  "
            placeholder="Öne Çıkan Ad"
          />
        </div>
        <button className="w-full h-[48px] px-2 py-1">ileri</button>
      </div>
    </div>
  );
};

export default NewHighlightsModal;
