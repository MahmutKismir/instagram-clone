import React from "react";
import CountrySelect from "./CountrySelect";
import { Link } from "react-router-dom";

const footerItems = [
  {
    id: 1,
    title: "Meta",
    link: "#",
  },
  {
    id: 2,
    title: "Hakkında",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "İş Fırsatları",
    link: "#",
  },
  {
    id: 5,
    title: "Yardım",
    link: "#",
  },
  {
    id: 6,
    title: "API",
    link: "#",
  },
  {
    id: 7,
    title: "Gizlilik",
    link: "#",
  },
  {
    id: 8,
    title: "Koşullar",
    link: "#",
  },
  {
    id: 9,
    title: "Başlıca Hesaplar",
    link: "#",
  },
  {
    id: 10,
    title: "Konumlar",
    link: "#",
  },
  {
    id: 11,
    title: "İnstagram Lite",
    link: "#",
  },
  {
    id: 12,
    title: "Kişi Yükleme ve Hesabı Olmayan Kişiler",
    link: "#",
  },
  {
    id: 13,
    title: "Meta Verified",
    link: "#",
  },
];

const FooterItem = () => {
  return (
    <>
      <ul className="flex flex-wrap  items-center justify-center text-gray-500 text-xs">
        {footerItems.map((item) => (
          <li key={item.id} className="mr-3">
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
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
