import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchModal from "../../components/SwitchModal";

const suggestion = [
  {
    id: 1,
    username: "alenIverson",
    name: "Allen Iverson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Allen_Iverson_headshot.jpg",
  },
  {
    id: 2,
    username: "airCanada",
    name: "Vince Carter",
    image:
      "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2020/06/vc3.jpg.rend.hgtvcom.1280.914.suffix/1593191957820.jpeg",
  },
  {
    id: 3,
    username: "tmac",
    name: "Tracy Lamar McGrady",
    image:
      "https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M=",
  },
  {
    id: 4,
    username: "Mj",
    name: "Michael Jordan",
    image:
      "https://i.guim.co.uk/img/media/86302dbcc55f07d65c45bb3baf8c864e36bd4320/0_155_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df936fc2e7b2b84a58f2e293ecde27de",
  },
  {
    id: 5,
    username: "shaq",
    name: "Shaquille O'Neal",
    image:
      "https://i.discogs.com/t9FELUtAHyppVdYIkWQNUX5k35nD5LwNXfYMqwdMbA4/rs:fit/g:sm/q:90/h:742/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY2MTUz/LTE2MjkxNTExMzMt/NjM5MS5qcGVn.jpeg",
  },
];

const FollowSuggestion = () => {
  const [switchModal, setSwitchModal] = useState(false);
  return (
    <>
      <div className="mt-12 ml-5 w-[323px] suggestion-hidden">
        <div className=" flex items-center mb-4">
          <Link to="">
            <img
              className=" h-[58px] w-[s58px] rounded-full  object-cover"
              src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
              alt=""
            />
          </Link>
          <div className="ml-5 flex flex-col justify-center w-[187px] h-9">
            <Link to="">
              <span className="text-sm">kobe</span>
            </Link>
            <span className="text-gray-400 text-sm">Kobe Bean Bryant</span>
          </div>
          <div>
            <button
              onClick={() => setSwitchModal(true)}
              className="text-xs font-medium text-colortext"
            >
              Geçiş Yap
            </button>
            <SwitchModal
              switchModal={switchModal}
              onClose={() => setSwitchModal(false)}
            />
          </div>
        </div>
        <div className="w-[323px] h-[19px] flex items-center mb-2">
          <span className="text-sm text-[#737373] font-semibold w-[251px]">
            Senin için öneriler
          </span>
          <span>
            <button className="text-xs font-semibold">Tümünü Gör</button>
          </span>
        </div>
        <div className="flex flex-col w-[340px] ml-3 h-[250px] px-1 py-2 mb-5 ">
          <div className="w-[315px] h-[50px] ">
            {suggestion.map((item, index) => {
              return (
                <div key={index} className=" flex items-center mb-3">
                  <Link to="">
                    <img
                      className=" h-[35px] w-[35px] rounded-full"
                      src={item.image}
                      alt=""
                    />
                  </Link>
                  <div className="ml-3 flex flex-col justify-center w-[195px] h-9">
                    <Link to="">
                      <span className="text-sm">{item.username}</span>
                    </Link>
                    <span className="text-gray-400 text-xs">{item.name}</span>
                  </div>
                  <div>
                    <button className="text-xs ml-5 font-medium text-colortext">
                      Takip Et
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[325px] h-[39px]">
          <ul className="flex flex-wrap mb-4">
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Hakkında . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Yardım . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Basın . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>API . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>İş Fırsatları . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Gizlilik . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Koşullar . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Konumlar . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7] ml-1">
              <Link>Dil . </Link>
            </li>
            <li className="text-xs text-[#c7c7c7]">
              <Link>Meta Verified</Link>
            </li>
          </ul>
          <span className="text-xs text-[#c7c7c7] ml-1">
            © 2023 INSTAGRAM FROM META
          </span>
        </div>
      </div>
    </>
  );
};

export default FollowSuggestion;
