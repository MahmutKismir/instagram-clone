import React from "react";
import CountrySelect from "./CountrySelect";

const FooterItem = () => {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center text-gray-500 text-xs">
        <li className="mr-3">
          <a href="#">Meta</a>
        </li>
        <li className="mr-3">
          <a href="#">Hakkında</a>
        </li>
        <li className="mr-3">
          <a href="#">Blog</a>
        </li>
        <li className="mr-3">
          <a href="#">İş Fırsatları</a>
        </li>
        <li className="mr-3">
          <a href="#">Yardım</a>
        </li>
        <li className="mr-3">
          <a href="#">API</a>
        </li>
        <li className="mr-3">
          <a href="#">Gizlilik</a>
        </li>
        <li className="mr-3">
          <a href="#">Koşullar</a>
        </li>
        <li className="mr-3">
          <a href="#">Başlıca Hesaplar</a>
        </li>
        <li className="mr-3">
          <a href="#">Konumlar</a>
        </li>
        <li className="mr-3">
          <a href="#">İnstagram Lite</a>
        </li>
        <li className="mr-3">
          <a href="#">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
        </li>
        <li className="mr-3">
          <a href="#">Meta Verified</a>
        </li>
      </ul>
      <ul className="flex justify-center mt-4 text-gray-500 text-xs">
        <li className="mr-5">
          <CountrySelect />
        </li>
        <li>© 2023 Instagram from Meta</li>
      </ul>
    </>
  );
};

export default FooterItem;
