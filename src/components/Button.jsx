import React from "react";

const Button = ({ py, px, text }) => {
  return (
    <>
      <button
        className={`bg-gradient px-${py} py-${px} md:px-12 md:py-4 lg:px-12 rounded-full text-sm md:text-base font-medium text-amber-950`}>
        {text}
      </button>
    </>
  );
};

export default Button;
