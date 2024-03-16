import React from "react";
import statBanner from "../assets/approach-banner.jpg";
import items from "../data.js";
import StoriesCarousle from "../components/StoriesCarousle.jsx";
import YellowStrip from "../assets/crayon-strip-bottom.webp";

const StoreisAndUpdate = () => {
  return (
    <div>
      <div className="my-8 relative">
        <img src={statBanner} alt="" className="w-[100%] " />
        <img
          src={YellowStrip}
          alt=""
          className="w-[100%] absolute -bottom-[9.5rem] z-[2]"
        />
      </div>
      <div className="relative z-10">
        <div className="text-4xl font-semibold leading-relaxed tracking-wider flex justify-center mt-40">
          <h2>
            Stories <span className="gloria-font text-yellow-400">and</span>{" "}
            Updates
          </h2>
        </div>
        <StoriesCarousle items={items} />
      </div>
    </div>
  );
};

export default StoreisAndUpdate;
