import React from "react";
import { Link } from "react-router-dom";
import FooterItem from "../../components/FooterItem";
import { VscLock } from "react-icons/vsc";
import OrItem from "../../components/OrItem";
import InstagramTextLogo from "../../static/insta.png";
import Button from "../../components/Button";
import Input from "../../components/inputs/Input";

const PasswordReset = () => {
  return (
    <>
      <div className=" h-auto w-auto">
        <div className="border-b border-1 w-full h-16 mb-12 flex justify-center ">
          <div className=" w-3/5 h-full flex">
            <div className="flex items-center w-2/4 ">
              <Link to="/">
                <img src={InstagramTextLogo} className="h-12 " alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full mb-8 ">
          <div className="flex  items-end justify-center w-full h-full">
            <div className="flex  flex-col items-center w-[388px] h-[553px] border-1 rounded-sm">
              <div className="flex justify-center">
                <div className="h-[96px] w-[96px] flex align-middle justify-center items-center border-4 border-gray-700 rounded-full mt-6">
                  <VscLock className="text-6xl text-gray-700" />
                </div>
              </div>
              <div className="flex justify-center mt-4 w-full">
                <span className="text-md font-semibold">
                  Giriş Yaparken Sorun mu Yaşıyorsun?
                </span>
              </div>
              <div className="flex w-3/4">
                <div className="flex text-sm mt-2 text-center text-gray-400">
                  E-posta adresini, telefon numaranı veya kullanıcı adını gir ve
                  hesabına yeniden girebilmen için sana bir bağlantı gönderelim.
                </div>
              </div>
              <div className="mt-4 w-full px-12">
                <Input type='text' placeholder='E Posta, Telefon veya Kullanıcı Adı' />
              </div>
              <div className="mt-2">
                <Button title="Giriş Bağlantısı Gönder" onClick={() => {}} />
              </div>
              <button className="mt-2">
                <span className="text-blue-900 text-xs">
                  <Link to="https://help.instagram.com/374546259294234">
                    Şifreni yenileyemiyor musun?
                  </Link>
                </span>
              </button>
              <div className="mt-3">
                <OrItem />
              </div>
              <div className="mt-3">
                <Link
                  className="font-bold text-gray-900 text-sm"
                  to="/register"
                >
                  Yeni Hesap Oluştur
                </Link>
              </div>
              <div className="h-full w-full flex items-end">
                <div className="w-full h-11 flex justify-center items-center border-t">
                  <Link to="/">
                    <span className="text-sm font-bold text-gray-900 ">
                      Giriş Ekranına Dön
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterItem />
      </div>
    </>
  );
};

export default PasswordReset;
