import React from "react";
import TopImageSlider from "./topImageSlider/TopImageSlider";
import FollowSuggestion from "./FollowSuggestion";
import PictureVideoStreaming from "./PictureVideoStreaming";
import loader from '../../../../../static/loader.gif'

const UserHome = () => {
  return (
    <>
      <div className=" mt-4 flex justify-center w-screen lg:ml-20 ">
        <div className="flex flex-col justify-center items-center  ">
          {/* <img src={loader} className="h-[40px] w-[40px]  " alt="" /> */}
          <TopImageSlider />
          <PictureVideoStreaming />
        </div>
        <FollowSuggestion />
      </div>
    </>
  );
};

export default UserHome;
