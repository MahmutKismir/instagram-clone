import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const SearchSlideMenu = ({ show, notice }) => {
  return (
    <>
      {notice ? (
        <div
          className={
            show
              ? "transform -translate-x-[395px]  h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col"
              : "transform translate-x-[94px] h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col  "
          }
        >
          <div className="m-3 flex flex-col">
            <span className="text-2xl font-bold mb-14">Ara</span>
            <div className="flex w-full mb-2 justify-between">
              <input
                type="text"
                className=" w-full h-10 py-1 px-4 bg-[#efefef] rounded-md relative outline-none border-none "
                placeholder="Ara"
              />
              <RiCloseCircleFill className="absolute mt-3 ml-[310px] text-[#c8c8c8]" />
            </div>
          </div>
          <div className="w-full h-full border-t ">
            <div className="mt-2 mb-3 flex justify-between p-3 ">
              <span className="font-medium">Yakındakiler</span>
              <button className="text-sm text-[#0095F6] font-medium">
                Tümünü Temizle
              </button>
            </div>
            <div className="h-[60px] w-full hover:bg-slate-50">
              <div className=" flex w-full h-full justify-between items-center p-3">
                <div className=" h-[54px] w-[54px] mr-2 flex items-center ">
                  <div className="flex items-center justify-center h-[44px] w-[44px] inst-color  rounded-full cursor-pointer  ">
                    <img
                      className=" h-[40px] w-[40px] rounded-full border-1 p-[1px] bg-white "
                      src="https://media.gettyimages.com/id/51188472/photo/tracy-mcgrady-portraits.jpg?s=1024x1024&w=gi&k=20&c=V6RLb1Q3ZZrFGljovDMhhwJDcR1i_f_uDwqoZJ3x-6M="
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col align-middle w-full ">
                  <div className=" w-full h-[18px] flex items-center">
                    <span className="text-sm text-[#262626] hover:text-[#737373] cursor-pointer ">
                      tmac
                    </span>
                    <MdVerified className="text-colortext h-[12px] " />
                  </div>
                  <span className="text-gray-400 text-xs">
                    Tracy Lamar McGrady . 4,280.000 takipçi
                  </span>
                </div>
                <VscChromeClose className="mt-1 mr-4 text-2xl cursor-pointer text-[#737373]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            show
              ? "transform -translate-x-[395px]  h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col"
              : "transform translate-x-[94px] h-screen fixed  bg-white z-40 top-0 left-0 border-r border-1 rounded-r-2xl transition duration-500 shadow-[10px_0_20px_-10px_2px] shadow-[#bfbcbc] flex flex-col  "
          }
        >
          <div className="m-3 flex flex-col">
            <span className="text-2xl font-bold mb-2">Bildirimler</span>
            <div className="h-[91px] w-full ">
              <span className="font-semibold">Yeni</span>
              <div className="w-full h-[60px] flex items-center mt-3">
                <div className=" w-[44px] h-[44px] ">
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full   ">
                    <img
                      src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2020/06/vc3.jpg.rend.hgtvcom.1280.914.suffix/1593191957820.jpeg"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full absolute ml-3 -mt-6 ">
                    <img
                      src="https://i.guim.co.uk/img/media/86302dbcc55f07d65c45bb3baf8c864e36bd4320/0_155_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df936fc2e7b2b84a58f2e293ecde27de"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-[36px] w-[234px] flex ml-2 ">
                  <div className="flex flex-wrap text-sm">
                    <span className="text-sm font-semibold">mj</span>,<span className="text-sm font-semibold">airCanada</span> <span className="text-sm">
                    ve diğer kişiler hikayeni beğendi. 
                    </span>
                    <span className="text-sm text-gray-500">
                    1s
                    </span>
                  </div>
                </div>
                <div className="h-[44px] w-44px  ">
                    <img src="https://s22928.pcdn.co/wp-content/uploads/2018/11/Kobe-Bryant-Dwight-Howard.jpg" className="object-cover h-full w-[44px] " alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[174px] border-t ">
            <div className="mt-2 flex p-3 ">
              <span className="font-semibold">Bu Hafta</span>             
            </div>
            <div className="w-full h-[60px] flex items-center mt-1 p-3">
                <div className=" w-[44px] h-[44px] ">
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full   ">
                    <img
                      src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2020/06/vc3.jpg.rend.hgtvcom.1280.914.suffix/1593191957820.jpeg"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full absolute ml-3 -mt-6 ">
                    <img
                      src="https://i.guim.co.uk/img/media/86302dbcc55f07d65c45bb3baf8c864e36bd4320/0_155_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df936fc2e7b2b84a58f2e293ecde27de"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-[36px] w-[234px] flex ml-2 ">
                  <div className="flex flex-wrap text-sm">
                    <span className="text-sm font-semibold">mj</span>,<span className="text-sm font-semibold">airCanada</span> <span className="text-sm">
                    ve diğer kişiler hikayeni beğendi. 
                    </span>
                    <span className="text-sm text-gray-500">
                    1s
                    </span>
                  </div>
                </div>
                <div className="h-[44px] w-44px  ">
                    <img src="https://s22928.pcdn.co/wp-content/uploads/2018/11/Kobe-Bryant-Dwight-Howard.jpg" className="object-cover h-full w-[44px] " alt="" />
                </div>
              </div>
          </div>
          <div className="w-full h-full border-t mt-2 ">
            <div className="mt-2 flex p-3 ">
              <span className="font-semibold">Daha Öncekiler</span>             
            </div>
            <div className="w-full h-[60px] flex items-center mt-1 p-3">
                <div className=" w-[44px] h-[44px] ">
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full   ">
                    <img
                      src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2020/06/vc3.jpg.rend.hgtvcom.1280.914.suffix/1593191957820.jpeg"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                  <div className="border-2 border-white h-[36px] w-[36px] rounded-full absolute ml-3 -mt-6 ">
                    <img
                      src="https://i.guim.co.uk/img/media/86302dbcc55f07d65c45bb3baf8c864e36bd4320/0_155_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df936fc2e7b2b84a58f2e293ecde27de"
                      className="h-[32px] w-[32px] object-cover rounded-full  "
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-[36px] w-[234px] flex ml-2 ">
                  <div className="flex flex-wrap text-sm">
                    <span className="text-sm font-semibold">mj</span>,<span className="text-sm font-semibold">airCanada</span> <span className="text-sm">
                    ve diğer kişiler hikayeni beğendi. 
                    </span>
                    <span className="text-sm text-gray-500">
                    1s
                    </span>
                  </div>
                </div>
                <div className="h-[44px] w-44px  ">
                    <img src="https://s22928.pcdn.co/wp-content/uploads/2018/11/Kobe-Bryant-Dwight-Howard.jpg" className="object-cover h-full w-[44px] " alt="" />
                </div>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchSlideMenu;
