import React from "react";
import Header from "./Header";
import Highlights from "./Highlights";
import TabMenu from "./TabMenu/İndex";


const UserProfile = () => {
  return (
    <>
      <div className="flex h-screen w-screen justify-center lg:ml-[250px] py-7">
        <div className="w-[940px] h-screen">
          <Header />
          <Highlights />
          <TabMenu />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
