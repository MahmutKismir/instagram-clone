import React from "react";

const Reels = ({ tabControl }) => {
  return (
    <>
      <div
        className={
          tabControl === 2 ? "w-full h-screen bg-blue-400 flex " : "hidden"
        }
      >
        2
      </div>
    </>
  );
};

export default Reels;
