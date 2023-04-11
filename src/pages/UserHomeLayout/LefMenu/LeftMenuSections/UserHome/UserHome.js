import React from "react";
import TopImageSlider from "./topImageSlider/TopImageSlider";
import FollowSuggestion from "./FollowSuggestion";
import PictureVideoStreaming from "./PictureVideoStreaming";

const UserHome = () => {
  return (
    <>
      <div className=" mt-4 flex justify-center w-screen  ">
        <div className="flex flex-col justify-center items-center sm:justify-start  ">
          <TopImageSlider />
          <PictureVideoStreaming />
        </div>
        <FollowSuggestion />
      </div>
    </>
  );
};

export default UserHome;
