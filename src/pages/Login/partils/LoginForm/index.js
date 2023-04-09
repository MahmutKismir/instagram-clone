import React from "react";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";
import LoginButton from "../../../../components/LoginButton";
import OrItem from "../../../../components/OrItem";

const LoginForm = () => {
  return (
    <>
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
          <div className="absolute ml-56 mt-2">
            <button className="font-bold text-gray-500">Göster</button>
          </div>
        </div>
        <Link to="/user-home-layout">
          <LoginButton />
        </Link>
        <OrItem />
        <button className="flex justify-center align-middle items-center mt-6">
          <GrFacebook className="mr-2 text-colorface" />
          <span className="text-colorface font-semibold text-sm">
            <Link
              to="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252218r7pc6662rs57iyfhhxpa77j2xgpq1q4o8qr1ugzuoys2wrzu%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dtr_TR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D297b8724-65f9-46f7-ad96-41c32adb0a4a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252218r7pc6662rs57iyfhhxpa77j2xgpq1q4o8qr1ugzuoys2wrzu%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=tr_TR&pl_dbl=0"
              target={"_blank"}
            >
              Facebook ile Giriş Yap
            </Link>
          </span>
        </button>
        <button className="mt-3">
          <span className="text-blue-900 text-xs">
            <Link to="/passwordreset">Şifreni mi unuttun?</Link>
          </span>
        </button>
      </form>
    </>
  );
};

export default LoginForm;
