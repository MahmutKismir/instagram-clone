import React from "react";
import InstagramText from "../../../src/static/insta.png";
import { Link } from "react-router-dom";
import OrItem from "../../components/OrItem";
import { Icon } from "@iconify/react";
import AppStore from "../../../src/static/appstore.png";
import PlayStore from "../../../src/static/playstore.png";
import FooterItem from "../../components/FooterItem";
import Button from "../../components/Button";
import Input from "../../components/inputs/Input";

const Register = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-4 mb-10 w-full">
        <div
          className=" flex flex-col align-middle items-center border-1 border-inherit"
          style={{ width: "350px", height: "650px" }}
        >
          <div className="mt-7 mb-2">
            <img src={InstagramText} alt="" />
          </div>

          <h2 className="mr-5 ml-5 mb-5 text-center text-xl text-gray-400 font-semibold">
            Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
          </h2>
          <button className=" bg-[#0095f6] w-72 outline-none  text-white rounded-lg font-bold text-sm h-8 flex justify-center items-center">
            <Icon className="mr-1 text-xl" icon="carbon:logo-facebook" />
            <Link
              to="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252218r7pc6662rs57iyfhhxpa77j2xgpq1q4o8qr1ugzuoys2wrzu%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dtr_TR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D297b8724-65f9-46f7-ad96-41c32adb0a4a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252218r7pc6662rs57iyfhhxpa77j2xgpq1q4o8qr1ugzuoys2wrzu%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=tr_TR&pl_dbl=0"
              target={"_blank"}
            >
              Facebook ile Giriş Yap
            </Link>
          </button>

          <div className="mb-5">
            <OrItem />
          </div>
          <form
            className="flex flex-col align-middle items-center px-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type={"text" | "email"}
              placeholder="Cep Telefonu Numarası veya E-posta"
            />
            <Input type="text" placeholder="Adı Soyadı" />
            <Input type="text" placeholder="Kullanıcı adı" />
            <div className="flex relative w-full">
              <Input type="password" placeholder="Şifre" />
              <div className="absolute right-2 top-2">
                <button className="font-bold text-gray-500">Göster</button>
              </div>
            </div>
            <span className="text-center text-xs w-3/4 text-[#8E8E8E] mb-4">
              Hizmetimizi kullanan kişiler senin iletişim bilgilerini
              Instagram'a yüklemiş olabilir.{" "}
              <Link
                className="text-colorface"
                to="https://www.facebook.com/help/instagram/261704639352628"
                target="_blank"
              >
                Daha Fazla Bilgi Al
              </Link>
            </span>
            <span className="text-center text-xs w-3/4 text-[#8E8E8E] mb-4">
              Kaydolarak,{" "}
              <Link
                className="text-colorface"
                to="https://help.instagram.com/581066165581870/?locale=tr_TR"
                target="_blank"
              >
                Koşullarımızı
              </Link>
              ,{" "}
              <Link
                className="text-colorface"
                to="https://www.facebook.com/privacy/policy"
                target="_blank"
              >
                Gizlilik İlkemizi
              </Link>{" "}
              ve{" "}
              <Link
                className="text-colorface"
                to="https://help.instagram.com/1896641480634370/"
                target="_blank"
              >
                Çerezler İlkemizi
              </Link>{" "}
              kabul etmiş olursun.
            </span>
            <Button title="Kaydol" />
          </form>
        </div>
        <div
          style={{ width: "350px", height: "70px" }}
          className="flex justify-center items-center align-middle border-1 border-inherit mt-2"
        >
          <span className="text-gray-800 text-sm">
            Hesabın var mı?
            <Link className="font-bold text-blue-400 ml-1" to="/">
              Giriş yap
            </Link>
          </span>
        </div>
        <div
          style={{ width: "350px", height: "85px" }}
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
      <div className="mb-12">
        <FooterItem />
      </div>
    </>
  );
};

export default Register;
