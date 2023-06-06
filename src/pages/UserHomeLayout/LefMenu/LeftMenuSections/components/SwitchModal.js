import React, { useState } from "react";
import { Link } from "react-router-dom";
import Close from "../../../../../static/messageModal.svg";
import InstagramText from "../../../../../static/insta.png";


const SwitchModal = ({ switchModal, onClose }) => {
  const [loginModal, setLoginModal] = useState(true);
  if (!switchModal) {
    return false;
  }

  const onCloseModal = () => {
    onClose()
    setLoginModal(true)
  }

  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
      >
        {loginModal ? (
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
                      className=" h-[56px] w-[56px] rounded-full object-cover ml-2"
                      src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
                      alt=""
                    />
                  </Link>
                  <div className="ml-3 flex flex-col justify-center w-[270px] h-9">
                    <Link to="">
                      <span className="text-sm">kobe</span>
                    </Link>
                  </div>
                  <div className="h-[44px] w-[44px] flex justify-end items-center">
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
                <button onClick={() => setLoginModal(false)}>
                  Mevcut Bir Hesaba Giriş Yap
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[400px] w-[400px] bg-white rounded-2xl  "
          >
            <div className=" flex flex-col align-middle items-center">
              <div className="flex justify-end items-center w-full h-[30px] mt-3">
                <img
                  onClick={onCloseModal}
                  className="cursor-pointer mr-4"
                  src={Close}
                  alt=""
                />
              </div>
              <div className="mt-2 mb-7">
                <img src={InstagramText} alt="" />
              </div>
            </div>
            <form
              className="flex flex-col align-middle items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                className="border border-border-color focus:text-[10px] focus:placeholder:-translate-y-2 focus:placeholder:duration-500 w-72 h-10 pl-2 mb-1 text-[13px] font-normal outline-1 outline-gray-200 bg-gray-50 rounded"
              />
              <div className="flex">
                <input
                  type="password"
                  placeholder="Şifre"
                  className="border-1 focus:text-[10px] focus:placeholder:-translate-y-2 focus:placeholder:duration-500 w-72 h-10 pl-2 mb-4 text-[13px] font-normal outline-1 outline-gray-200 bg-gray-50 rounded"
                />
              </div>
              <div className="flex w-[285px] mb-5 mt-1">
                  <input type="checkbox" />
                  <span className="text-xs ml-2">Giriş bilgilerini kaydet</span>
              </div>
              <Link to=" ">
                
              </Link>              
              <button className="mt-3">
                <span className="text-blue-900 text-xs">
                  <Link to="/passwordreset">Şifreni mi unuttun?</Link>
                </span>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default SwitchModal;
