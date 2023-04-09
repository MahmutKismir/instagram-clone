import React from "react";
import LeftMenu from "./LefMenu";
import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  return (
    <div className="flex w-full">
      <LeftMenu />
      <Outlet />
    </div>
  );
};

export default UserHomeLayout;
