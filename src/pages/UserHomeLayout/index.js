import React, { useState } from "react";
import LeftMenu from "./LefMenu";
import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (e) => {
    setOpen((prevOpen) => !prevOpen);
    e.stopPropagation();
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div onClick={handleClose} className="flex w-full">
      <LeftMenu
        handleToggle={handleToggle}
        open={open}
        handleClose={handleClose}             
      />
      <Outlet />
    </div>
  );
};

export default UserHomeLayout;
