import React,{useState} from "react";
import { Link } from "react-router-dom";
import Close from "../../../../../static/messageModal.svg";

const SwitchModal = ({ switchModal, onClose }) => {
    const [loginModal,setLoginModal] = useState(false)
  if (!switchModal) {
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
          className="w-[400px] h-[250px] bg-white rounded-2xl  "
        >
          <div className="w-[400px] h-[42px] border-b flex justify-end items-center ">
            <div className="h-[42px]  w-[300px] flex justify-center items-center">
              <h1 className="font-semibold">Hesap Değiştir</h1>
            </div>
            <div className="h-[42px] w-[52px] flex justify-center items-center ">
              <img
                onClick={onClose}
                className="cursor-pointer"
                src={Close}
                alt=""
              />
            </div>
          </div>
          <div className="h-[158px] w-full border-b px-2 py-4">
            <div className="w-[368px] h-[56px] flex items-center justify-center mb-4">
              <div className=" w-full flex items-center">
                <Link to="">
                  <img
                    className=" h-[56px] w-[56px] rounded-full object-cover"
                    src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
                    alt=""
                  />
                </Link>
                <div className="ml-3 flex flex-col justify-center w-[265px] h-9">
                  <Link to="">
                    <span className="text-sm">kobe</span>
                  </Link>
                </div>
                <div className="h-[44px] w-[45px] flex justify-center items-center">
                  <input
                    type="checkbox"
                    checked
                    className="h-[22px] w-[22px]  "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[50px] rounded-b-2xl flex justify-center items-center">
            <div className="text-sm font-semibold text-[#0095F6] hover:text-blue-900">
              <button>Mevcut Bir Hesaba Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwitchModal;
