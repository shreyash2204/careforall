import React from "react";
import videoPatch from "../assets/video-patch.png";
import hero2 from "../assets/hero-2.webp";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="mt-[80px] overflow-hidden">
      <div className="flex flex-col relative aspect-video">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="w-full text-center mt-0 ">
            <p className="text-2xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight tracking-wider">
              Let’s ensure
              <span className="gloria-font text-[#f47445]"> happy</span> <br />
              <span className="gloria-font text-[#f47445]">childhoods </span>
              for <br /> India’s children
            </p>
          </div>
          <div className="">
            <Button py={4} px={3} text={"Yes! I want to Help!"} />
          </div>
        </div>
        {/* <div className="w-full relative md:h-screen">
          <img
            src={videoPatch}
            alt=""
            className="w-full "
          />
        </div> */}
        <video
          src="/public/assets/3.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full z-[-1]"
        />
      </div>
      <div className="w-full">
        <img src={hero2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
