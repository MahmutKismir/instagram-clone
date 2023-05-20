import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SwitchModal from "../../components/SwitchModal";
import SmallFooter from "../../components/SmallFooter";

const FollowSuggestion = () => {
  const [switchModal, setSwitchModal] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);

  const suggestionsDataGet = async () => {
    const response = await axios.get("http://localhost:3004/instadata");
    setSuggestionData(response.data[0].followsuggestion);
  };
  useEffect(() => {
    suggestionsDataGet();
  }, []);

  return (
    <>
      <div className="mt-12 ml-5 w-[323px] suggestion-hidden">
        <div className=" flex items-center mb-4">
          <Link to="/userprofile">
            <img
              className=" h-[58px] w-[58px] rounded-full object-cover "
              src="https://cdn1.ntv.com.tr/gorsel/VI4np0LDZkiJP4m8SjqBVA.jpg?width=1000&mode=crop&scale=both"
              alt=""
            />
          </Link>
          <Link to="/userprofile">
            <div className="ml-5 flex flex-col justify-center w-[187px] h-9">
              <span className="text-sm">kobe</span>
              <span className="text-gray-400 text-sm">Kobe Bean Bryant</span>
            </div>
          </Link>
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
            <Link to='/people'>
              <button className="text-xs font-semibold">Tümünü Gör</button>
            </Link>
          </span>
        </div>
        <div className="flex flex-col w-[340px] ml-3 h-[250px] px-1 py-2 mb-5 ">
          <div className="w-[315px] h-[50px] ">
            {suggestionData.map((item, index) => {
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
        <SmallFooter />
      </div>
    </>
  );
};

export default FollowSuggestion;
