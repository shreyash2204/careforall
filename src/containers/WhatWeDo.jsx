import React from "react";
import WeDoCard from "../components/WeDoCard";
import YellowStrip from "../assets/crayon-strip-bottom.webp";

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
        <div className="w-full absolute bottom-[45px]">
          <img src={YellowStrip} alt="" className="w-full" />
        </div>
        <div className="what-we-do w-[60vw] h-[150px] bg-[#fdd831] absolute left-1/2 -top-20 flex justify-center text-3xl text-amber-950 font-semibold p-12 rounded-lg z-[2]">
          <h2>What We Do</h2>
        </div>
        <div className="flex justify-center gap-4 p-12 relative z-[3] ">
          {whatWeDo.map((weDo) => {
            // console.log(weDo);
            return <WeDoCard weDo={weDo} color={weDo.border} />;
          })}
        </div>
      </div>
      <div className="h-[90vh] flex">
        <div className="w-1/2 h-full flex justify-center items-center ">
          <div className="flex flex-col gap-8 ">
            <h2 className="text-3xl font-semibold leading-tight tracking-wider">
              Our approach is modeled around <br /> bringing change{" "}
              <span className="gloria-font text-yellow-400">at all levels</span>
            </h2>
            <div className="leading-relaxed w-[500px] text-gray-700 text-base">
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
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="rotate w-[450px] h-[450px] rounded-full border-[3px] border-dashed border-gray-300 "></div>
          <div className="w-[350px] h-[350px] border-2 border-red-500 absolute">
            <div className="w-[140px] h-[140px] border-2 border-red-500 rounded-full absolute -left-14 -top-14"></div>
            <div className="w-[140px] h-[140px] border-2 border-red-500 rounded-full absolute -right-14 -top-14"></div>
            <div className="weDo-rotate-center w-[220px] h-[220px] border-2 border-red-500 rounded-full absolute left-1/2 top-1/2 "></div>
            <div className="w-[140px] h-[140px] border-2 border-red-500 rounded-full absolute -left-14 -bottom-14"></div>
            <div className="w-[140px] h-[140px] border-2 border-red-500 rounded-full absolute -right-14 -bottom-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
