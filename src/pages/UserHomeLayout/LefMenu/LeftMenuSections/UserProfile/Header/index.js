import React, { useState } from "react";
import { Link } from "react-router-dom";
import Settingİcon from "../../../../../../static/settingicon.svg";
import SettingModal from "./SettingModal";
import Followers from "./Followers";
import Following from "./Following";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <>
      <header className="w-[940px] h-[150px] mb-9 flex ">
        <div className="w-[292px] h-[150px] flex justify-center items-center mr-[34px] ">
          <img
            src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
            className="h-[150px] w-[150px] object-cover rounded-full  "
            alt=""
          />
        </div>
        <section className="w-[613px] h-[150px] flex flex-col">
          <div className="w-full h-[40px] flex items-center ">
            <h2 className="text-xl w-auto mr-2 ">kobe</h2>
            <div className="w-[150px] flex justify-end mr-2 ">
              <Link className="w-[128px] h-8 flex items-center justify-center bg-[#EFEFEF] hover:bg-slate-300 rounded-md font-semibold text-sm  ">
                Profili düzenle
              </Link>
            </div>
            <button
              onClick={() => setModal(true)}
              className="h-[40px] w-[40px] p-2  "
            >
              <img src={Settingİcon} alt="" />
            </button>
          </div>
          <div className="w-full h-[45px] flex item mt-1   ">
            <div className="w-[120px] h-[38px] flex items-center  ">
              <span className="font-semibold mr-1">198</span> gönderi
            </div>
            <Link to="followers">
              <div
                onClick={() => setFollowers(true)}
                className="w-[120px] h-[38px] flex items-center mr-4  "
              >
                <span className="font-semibold mr-1">2.32 m</span> takipçi
              </div>
            </Link>
            <Link to='following'>
              <div onClick={() => setFollowing(true)} className="w-[120px] h-[38px] flex items-center  ">
                <span className="font-semibold mr-1">2.68 b</span> takip
              </div>
            </Link>
          </div>
          <div>
            <span className="text-sm font-semibold">Kobe Bean Bryant</span>
          </div>
        </section>
      </header>
      <SettingModal modal={modal} onClose={() => setModal(false)} />
      <Followers followers={followers} onClose={() => setFollowers(false)} />
      <Following following={following} onClose={() => setFollowing(false)} />
    </>
  );
};

export default Header;
