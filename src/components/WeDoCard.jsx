import React from "react";

const WeDoCard = ({ weDo, color }) => {
  // console.log(weDo);
  return (
    <div
      className={`h-[320px] w-[270px] bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-md border-b-[6.5px] border-${weDo.border}-500 `}></div>
  );
};

export default WeDoCard;
