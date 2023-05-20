import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllSuggestion = () => {
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
      <div className="flex justify-center w-full h-screen ">
        <div className="w-[600px] ml-[150px] mt-10  h-screen">
          <div className="flex mt-4 mb-3 px-4">
            <span className=""> Önerilenler</span>
          </div>
          <div className=" w-full h-screen pt-2">
          <div className="w-full h-[68px] p-2 ">
            {suggestionData.map((item, index) => {
              return (
                <div key={index} className=" items-center flex p-1">
                  <Link to="">
                    <div className="h-[54px] w-[54px] flex justify-center items-center">
                    <img
                      className=" h-[44px] w-[44px] rounded-full"
                      src={item.image}
                      alt=""
                    />
                    </div>
                  </Link>
                  <div className="ml-3 flex flex-col justify-center w-full h-9">
                    <Link to="">
                      <span className="text-sm">{item.username}</span>
                    </Link>
                    <span className="text-gray-400 text-xs">{item.name}</span>
                  </div>                  
                    <button className="text-xs font-medium bg-colortext text-white w-[100px] rounded-lg px-3 py-2 ">
                      Takip Et
                    </button>                
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSuggestion;
