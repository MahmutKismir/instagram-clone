import React from "react";
import Header from "./Header";
import Highlights from "./Highlights";
import TabMenu from "./TabMenu/İndex";
import { Outlet } from "react-router-dom";
import FooterItem from "../../../../../components/FooterItem";

const UserProfile = () => {
  return (
    <div className="flex w-screen flex-col justify-center lg:ml-[250px] py-7">
      <div className="flex w-full justify-center">
        <div className="w-[940px] mb-5">
          <Header />
          <Highlights />
          <TabMenu />
          <Outlet />
        </div>
      </div>
      <FooterItem />
    </div>
  );
};

export default UserProfile;
