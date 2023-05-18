import React, { useState } from "react";
import CloseDark from "../../../../../../static/messageModal.svg";
import LeftArrow from "../../../../../../static/leftarrow.svg";

const NewHighlightsModal = ({ highlightsModal, onClose }) => {
  const [newValue, setNewValue] = useState("");
  const [galery, setGalery] = useState(false);

  const handleClick = () => {
    if (newValue === "") {
      return false;
    } else {
      setGalery(true);
    }
  };
  const handleClose = () => {
    setGalery(false);
    onClose();
    setNewValue("");
  };

  if (!highlightsModal) {
    return false;
  }

  return (
    <div
      onClick={handleClose}
      className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
    >
      {!galery ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white h-[171px] w-[400px] rounded-xl flex flex-col items-center "
        >
          <div className="w-full h-[42px] flex justify-end border-b">
            <div className="w-[300px] h-[42px] flex justify-center items-center  ">
              <h1 className="font-semibold">Yeni Öne Çıkarma</h1>
            </div>
            <div className="w-[50px] h-[42px] flex justify-center items-center cursor-pointer ">
              <img onClick={handleClose} src={CloseDark} alt="" />
            </div>
          </div>
          <div className="h-[100px] w-full flex justify-center items-center border-b">
            <input
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              type="text"
              className="w-[360px] h-[40px] rounded-md border-1 px-3 py-1 bg-[#F5F5F5]  "
              placeholder="Öne Çıkan Ad"
            />
          </div>
          <button
            onClick={handleClick}
            className={
              newValue === ""
                ? "w-full h-[48px] px-2 py-1 text-sm font-semibold text-[#737373]"
                : "w-full h-[48px] px-2 py-1 text-sm font-semibold text-[#0095F6] "
            }
          >
            İleri
          </button>
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white h-[600px] w-[445px] rounded-xl flex flex-col items-center "
        >
          <div className="w-full h-[42px] flex border-b">
            <div className="w-[50px] h-[42px] flex justify-center items-center cursor-pointer ">
              <img onClick={() => setGalery(false)} src={LeftArrow} alt="" />
            </div>
            <div className="w-[345px] h-[42px] flex justify-center items-center  ">
              <h1 className="font-semibold">Hikayeler</h1>
            </div>
            <div className="w-[50px] h-[42px] flex justify-center items-center cursor-pointer ">
              <img onClick={handleClose} src={CloseDark} alt="" />
            </div>
          </div>
          <div className="h-full w-full border-b grid grid-cols-3 gap-1 overflow-scroll overflow-x-hidden  ">
            {[...Array(25)].map((_, index) => (
              <div
                key={index}
                className="w-[142px] h-[254px] bg-blue-400 relative cursor-pointer"
              >
                <img src="https://img.bleacherreport.net/img/images/photos/003/573/355/hi-res-c7eaf071a0bb9491e40c25ac35ec026d_crop_north.jpg?1455136310&w=3072&h=2048" className="object-cover w-full h-full" alt="" />
                <input type="checkbox" className="absolute right-1 bottom-1 border-none cursor-pointer h-5 w-5 "  />
              </div>
            ))}
          </div>
          <button
            className="w-full h-[48px] px-2 py-1 text-sm font-semibold text-[#737373]"
            // onClick={handleClick}
            // className={
            //   newValue === ""
            //     ? "w-full h-[48px] px-2 py-1 text-sm font-semibold text-[#737373]"
            //     : "w-full h-[48px] px-2 py-1 text-sm font-semibold text-[#0095F6] "
            // }
          >
            İleri
          </button>
        </div>
      )}
    </div>
  );
};

export default NewHighlightsModal;
