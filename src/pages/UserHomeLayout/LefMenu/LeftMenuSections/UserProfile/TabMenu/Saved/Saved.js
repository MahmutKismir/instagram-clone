import React from "react";

const Saved = ({ tabControl }) => {
  return (
    <>
      <div
        className={
          tabControl === 3 ? "w-full h-screen bg-yellow-400 flex " : "hidden"
        }
      >
        3
      </div>
    </>
  );
};

export default Saved;
