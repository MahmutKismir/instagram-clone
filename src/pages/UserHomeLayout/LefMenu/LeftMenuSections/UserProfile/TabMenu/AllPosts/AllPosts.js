import React from "react";

const AllPosts = ({ tabControl }) => {
  return (
    <>
      <div
        className={
          tabControl === 1 ? "w-full h-screen bg-red-400 flex " : "hidden"
        }
      >
        1
      </div>
    </>
  );
};

export default AllPosts;
