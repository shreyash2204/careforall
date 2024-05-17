import React, { useState } from "react";
import YellowStrip from "../assets/crayon-strip-bottom.webp";
import WeDoCarousle from "../components/WeDoCarousle";
import { whatWeDo } from "../data";

const WhatWeDo = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[200px] absolute bg-gradient z-[1]"></div>
        <div className="w-full absolute  ">
          <img src={YellowStrip} alt="" className="w-full" />
        </div>
        <div className="what-we-do w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[150px] bg-gradient absolute left-1/2 -top-20 flex justify-center text-3xl text-amber-950 font-semibold p-12 rounded-lg z-[2]">
          <h2>What We Do</h2>
        </div>
        <WeDoCarousle whatWeDo={whatWeDo} />
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-12 lg:gap-8 p-4 sm:p-8">
        <div className="flex-1 w-full h-full flex flex-row justify-center items-center ">
          <div className="flex w-full flex-col gap-8 items-center justify-center ">
            <h2 className="text-3xl font-semibold text-center md:text-justify leading-tight tracking-wider">
              Our approach is modeled around <br /> bringing change{" "}
              <span className="gloria-font text-[#f47445]">at all levels</span>
            </h2>
            <div className="leading-relaxed w-full text-center lg:text-justify md:max-w-[550px] text-gray-700 text-base">
              <p>
                At CFA, our commitment to change knows no bounds. We believe in
                a comprehensive approach that addresses challenges at every
                level. From grassroots projects that directly impact communities
                to advocacy efforts aimed at influencing policies, we're
                dedicated to creating a ripple effect of positive
                transformation.
              </p>
              <br />
              <p>
                By focusing on children, women, and animals, we're not just
                tackling issues—we're building a better future for generations
                to come. Join us on this journey as we strive to bring about
                change that resonates at every level of society.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center">
          <div className="rotate w-[320px] md:w-[400px] h-[320px] md:h-[400px] rounded-full border-[3px] border-dashed border-gray-300 "></div>
          <div className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] absolute">
            <div className="w-[90px] md:w-[100px] h-[90px] md:h-[100px] border-[5px] border-amber-500 rounded-full absolute -left-9 sm:-left-12 -top-9 sm:-top-12 grid place-content-center overflow-hidden bg-white">
              <img
                src="/src/assets/approach-family.jpg"
                className="w-14 md:w-16 "
                alt=""
              />
            </div>
            <div className="w-[90px] md:w-[100px] h-[90px] md:h-[100px] border-[5px] border-amber-500 rounded-full absolute -right-9 sm:-right-12 -top-9 sm:-top-12 grid place-content-center overflow-hidden bg-white">
              <img
                src="/src/assets/approach-community.jpg"
                className="w-14 md:w-16 "
                alt=""
              />
            </div>
            <div className="weDo-rotate-center w-[180px] md:w-[210px] h-[180px] md:h-[210px] overflow-hidden rounded-full border-[5px] border-amber-500 p-[6px] md:p-[8px] absolute left-1/2 top-1/2 ">
              <div className="h-full w-full rounded-full overflow-hidden">
                <img
                  src="/src/assets/card-2.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] border-[5px] border-amber-500 rounded-full absolute -left-9 sm:-left-12 -bottom-9 sm:-bottom-12 grid place-content-center overflow-hidden bg-white">
              <img
                src="/src/assets/approach-public.jpg"
                className="w-14 md:w-16 "
                alt=""
              />
            </div>
            <div className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] overflow-hidden border-[5px] border-amber-500 rounded-full absolute -right-9 sm:-right-12 -bottom-9 sm:-bottom-12 grid place-content-center bg-white">
              <img
                src="/src/assets/approach-govt.jpg"
                className="w-14 md:w-16 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
