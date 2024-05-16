import React, { useState } from "react";
import WeDoCard from "../components/WeDoCard";
import YellowStrip from "../assets/crayon-strip-bottom.webp";
import WeDoCarousle from "../components/WeDoCarousle";

const WhatWeDo = () => {
  const whatWeDo = [
    {
      border: "pink",
      title: "Education",
      description: "We provide",
    },
    {
      border: "teal",
      title: "Health",
      description: "We provide",
    },
    {
      border: "purple",
      title: "Shelter",
      description: "We provide",
    },
    {
      border: "orange",
      title: "Nutrition",
      description: "We provide",
    },
  ];


  return (
    <div>
      <div className="relative">
        <div className="w-full h-[200px] absolute bg-[#fdd831] z-[1]"></div>
        <div className="w-full absolute  ">
          <img src={YellowStrip} alt="" className="w-full" />
        </div>
        <div className="what-we-do w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[150px] bg-[#fdd831] absolute left-1/2 -top-20 flex justify-center text-3xl text-amber-950 font-semibold p-12 rounded-lg z-[2]">
          <h2>What We Do</h2>
        </div>
          <WeDoCarousle whatWeDo={whatWeDo} />
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-8 p-4">
        <div className="flex-1 w-full h-full flex flex-row justify-center items-center ">
          <div className="flex w-full flex-col gap-8 items-center justify-center ">
            <h2 className="text-3xl font-semibold text-center leading-tight tracking-wider">
              Our approach is modeled around <br /> bringing change{" "}
              <span className="gloria-font text-yellow-400">at all levels</span>
            </h2>
            <div className="leading-relaxed w-full text-justify md:w-[500px] text-gray-700 text-base">
              <p>
                With your support, we address children’s critical needs by
                working with parents, teachers, Anganwadi workers, communities,
                district and state level governments as well as the children
                themselves.
              </p>
              <br />
              <p>
                We focus on changing behaviours and practices at the grassroots
                level and influencing public policy at a systemic level –
                thereby creating an ecosystem where children are made the
                nation’s priority.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center">
          <div className="rotate w-[320px] md:w-[450px] h-[320px] md:h-[450px] rounded-full border-[3px] border-dashed border-gray-300 "></div>
          <div className="w-[250px] md:w-[350px] h-[250px] md:h-[350px] border-2 border-red-500 absolute">
            <div className="w-[90px] md:w-[140px] h-[90px] md:h-[140px] border-2 border-red-500 rounded-full absolute -left-9 sm:-left-14 -top-9 sm:-top-14"></div>
            <div className="w-[90px] md:w-[140px] h-[90px] md:h-[140px] border-2 border-red-500 rounded-full absolute -right-9 sm:-right-14 -top-9 sm:-top-14"></div>
            <div className="weDo-rotate-center w-[220px] h-[220px] border-2 border-red-500 rounded-full absolute left-1/2 top-1/2 "></div>
            <div className="w-[90px] md:w-[140px] h-[90px] md:h-[140px] border-2 border-red-500 rounded-full absolute -left-9 sm:-left-14 -bottom-9 sm:-bottom-14"></div>
            <div className="w-[90px] md:w-[140px] h-[90px] md:h-[140px] border-2 border-red-500 rounded-full absolute -right-9 sm:-right-14 -bottom-9 sm:-bottom-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
