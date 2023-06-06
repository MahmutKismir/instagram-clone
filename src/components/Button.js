import React from "react";

const Button = ({ title, type, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className=" bg-colorins w-72 outline-none  text-white rounded-lg font-bold text-sm h-8"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
