import React from "react";
import statBanner from "../assets/approach-banner.jpg";
import {stories} from "../data.js";
import StoriesCarousle from "../components/StoriesCarousle.jsx";
import YellowStrip from "../assets/crayon-strip-bottom.webp";

const StoreisAndUpdate = () => {
  return (
    <div className="">
      <div className="my-8 relative">
        <img src={statBanner} alt="" className="w-[100%]" />
        <img
          src={YellowStrip}
          alt=""
          className="w-[100%] absolute z-[2]"
        />
      </div>
      <div className="relative z-10 mb-10">
        <div className="text-4xl font-semibold leading-relaxed tracking-wider flex justify-center mt-20 sm:mt-28 lg:mt-56">
          <h2 className="text-center">
            Stories <span className="gloria-font text-yellow-400">and</span>{" "}
            Updates
          </h2>
        </div>
        <StoriesCarousle stories={stories} />
      </div>
    </div>
  );
};

export default StoreisAndUpdate;
