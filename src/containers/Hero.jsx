import React from "react";
import videoPatch from "../assets/video-patch.png";
import hero2 from "../assets/hero-2.webp";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="min-h-screen max-w-screen overflow-hidden">
      <div className="flex justify-between h-full">
        <div className="w-[40%] flex flex-col justify-center items-center gap-12">
          <div className="w-[400px]">
            <p className="text-4xl font-semibold leading-tight tracking-wider">
              Let’s ensure
              <span className="gloria-font text-yellow-400"> happy</span> <br />
              <span className="gloria-font text-yellow-400">childhoods </span>
              for <br /> India’s children
            </p>
          </div>
          <div className="w-[400px]">
            {/* <button className="bg-yellow-400 px-12 py-4 rounded-full font-medium text-gray-800">
              Yes! I want to Help!
            </button> */}

            <Button py={12} px={4} text={"Yes! I want to Help!"} />
          </div>
        </div>
        <div className="w-[60%] relative h-screen">
          <img
            src={videoPatch}
            alt=""
            className="w-full absolute -right-16 -bottom-10"
          />
        </div>
      </div>
      <div>
        <img src={hero2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
