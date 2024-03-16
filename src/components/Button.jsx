import React from "react";

const Button = ({ py, px, text }) => {
  return (
    <>
      <button
        className={`bg-yellow-400 px-${py} py-${px} rounded-full font-medium text-amber-950`}>
        {text}
      </button>
    </>
  );
};

export default Button;
