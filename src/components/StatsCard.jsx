import React from "react";
import images from "../assets/images";

const StatsCard = ({ stat }) => {
  // console.log(stat);
  return (
    <div className="w-[320px] h-[max-content] sm:h-[245px] rounded-md shadow-[rgba(0,0,0,0.24)_0px_3px_8px] relative ">
      <div className="stat-pic w-[80px] h-[80px] absolute -top-10 left-1/2 ">
        <img src={images.issue1} className="h-full overflow-hidden w-full object-cover" alt="" />
      </div>
      <div className="grid grid-cols-1 place-items-center mt-8 p-8 gap-1">
        <div className="text-2xl font-bold">{stat.numbers}</div>
        <div className="font-semibold text-sm text-center">{stat.desc}</div>
        <div className="text-[10px] text-center">{stat.subDesc}</div>
      </div>
    </div>
  );
};

export default StatsCard;
