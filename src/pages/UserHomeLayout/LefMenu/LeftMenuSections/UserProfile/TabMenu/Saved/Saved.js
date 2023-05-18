import React from "react";


const Saved = () => {
  return (
    <>
      <div className="w-full h-auto ">
        <div className="w-full h-[64px] flex items-center  ">
          <div className="w-full text-xs text-[#737373]">
            Kaydettiklerini sadece sen görebilirsin
          </div>
          <div className="w-[135px] h-full flex items-center ">
            <div className="text-sm w-full font-semibold cursor-pointer text-[#0095F6] hover:text-[#0e4c75]">
              + Yeni Koleksiyon
            </div>
          </div>
        </div>
        <div className="w-[900px] grid grid-cols-3 gap-1">
          <div className="h-[298px] w-[297px] grid grid-cols-2 gap-1 rounded hover:opacity-90 relative " >
            {[...Array(4)].map((item, index) => (
              <div className="w-[147px] h-[147px] rounded cursor-pointer">
                <img src='https://i.insider.com/565ddbb48430761f008b67b4?width=1136&format=jpeg'  className="object-cover h-full w-full" alt="" />
              </div>
            ))}
            <span className="font-semibold text-white text-xl absolute bottom-2 left-2">Tüm Gönderiler</span>
          </div>
          <div className="h-[298px] w-[298px]  rounded "></div>
          <div className="h-[298px] w-[298px]  rounded "></div>
        </div>
      </div>
    </>
  );
};

export default Saved;
