import React from "react";
import InstagramText from "../../../src/static/insta.png";
import AppStore from "../../../src/static/appstore.png";
import PlayStore from "../../../src/static/playstore.png";
import FooterItem from "../../components/FooterItem";
import LoginPhoneAndImage from "./partils/LoginPhoneAndImage/index";
import LoginForm from "./partils/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-24">
        <div className="flex tablet justify-end ">
          <LoginPhoneAndImage />
        </div>
        <div className="mt-3 tablet-min">
          <div
            className=" flex flex-col align-middle items-center border-1 border-inherit"
            style={{ width: "370px", height: "405px" }}
          >
            <div className="mt-7 mb-7">
              <img src={InstagramText} alt="" />
            </div>
            <LoginForm />
          </div>
          <div
            style={{ width: "370px", height: "65px" }}
            className="flex justify-center items-center align-middle border-1 border-inherit mt-2"
          >
            <span className="text-gray-800 text-sm">
              Hesabın yok mu?
              <Link className="font-bold text-blue-400 ml-1" to="/register">
                Kaydol
              </Link>
            </span>
          </div>
          <div
            style={{ width: "370px", height: "85px" }}
            className="flex flex-col justify-center items-center align-middle mt-2"
          >
            <span className="text-sm">Uygulamayı indir.</span>
            <div className="flex mt-4">
              <Link
                to="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                target={"_blank"}
              >
                <img
                  className="mr-2 cursor-pointer"
                  style={{ height: "40px" }}
                  src={AppStore}
                  alt=""
                />
              </Link>
              <Link
                to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D18B0ECC6-6587-4DE3-9627-64F0AE163941%26utm_content%3Dlo%26utm_medium%3Dbadge"
                target={"_blank"}
              >
                <img
                  className="cursor-pointer"
                  style={{ height: "40px" }}
                  src={PlayStore}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <FooterItem />
      </div>
    </>
  );
};

export default LoginPage;
