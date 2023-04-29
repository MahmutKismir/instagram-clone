import React from "react";

const Tagged = ({ tabControl }) => {
  return (
    <>
      <div
        className={
          tabControl === 4 ? "w-full h-screen bg-green-400 flex " : "hidden"
        }
      >
        4
      </div>
    </>
  );
};

export default Tagged;
