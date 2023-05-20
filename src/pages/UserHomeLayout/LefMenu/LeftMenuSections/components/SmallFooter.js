import React from "react";
import { Link } from "react-router-dom";

const smallFooterData = [
  {
    id: 1,
    page: "Hakkında . ",
    path: "",
  },
  {
    id: 2,
    page: "Yardım . ",
    path: "",
  },
  {
    id: 3,
    page: "Basın . ",
    path: "",
  },
  {
    id: 4,
    page: "API . ",
    path: "",
  },
  {
    id: 5,
    page: "İş Fırsatları . ",
    path: "",
  },
  {
    id: 6,
    page: "Gizlilik . ",
    path: "",
  },
  {
    id: 7,
    page: "Koşullar . ",
    path: "",
  },
  {
    id: 8,
    page: "Konumlar . ",
    path: "",
  },
  {
    id: 9,
    page: "Dil . ",
    path: "",
  },
  {
    id: 10,
    page: "Meta Verified",
    path: "",
  },
];

const SmallFooter = () => {
  return (
    <>
      <div className="w-[325px] h-[39px]">
        <ul className="flex flex-wrap mb-4">
          {smallFooterData.map((item, index) => (
            <li key={index} className="text-xs text-[#c7c7c7] ml-1">
              <Link to={item.path}>{item.page} </Link>
            </li>
          ))}
        </ul>
        <span className="text-xs text-[#c7c7c7] ml-1">
          © 2023 INSTAGRAM FROM META
        </span>
      </div>
    </>
  );
};

export default SmallFooter;
