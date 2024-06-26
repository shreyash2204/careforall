import React from "react";

const CarousleItems = ({ item }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_4px_12px]  hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-all ease-in duration-300">
      <div>
        <img src={item.img} alt="" className="w-full object-cover" />
      </div>
      <div className="h-[max-content] flex flex-col justify-center items-center gap-3  p-4">
        <div className="font-semibold text-[#f47445] text-lg capitalize ">
          <h2>{item.title}</h2>
        </div>
        <div className="font-medium mb-10 ">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CarousleItems;
