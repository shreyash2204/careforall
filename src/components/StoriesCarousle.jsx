import React from "react";
import Slider from "react-slick";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Button from "../components/Button.jsx";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] -right-1 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] -left-1 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
}

const StoriesCarousle = ({ stories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="p-2 lg:w-[90%] mx-auto md:p-4">
      <Slider {...settings}>
        {stories.map((story) => {
          return (
            <div className="stories-slide rounded-xl border overflow-hidden">
              <div className="">
                <img
                  src={story.img}
                  alt=""
                  className="w-full h-full aspect-auto object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center items-center gap-4 p-8 text-white lg:p-12 ${story.bgColor}`}>
                <h2 className="text-3xl font-semibold">{story.title}</h2>
                <p className="text-justify text-sm">{story.desc}</p>
                <div className="self-start">
                  <Button text={"Know More"} py={4} px={3} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default StoriesCarousle;
