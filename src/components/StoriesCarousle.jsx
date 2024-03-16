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

const StoriesCarousle = ({ items }) => {
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
    <div className="p-12">
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <div className="stories-slide rounded-xl border-2 overflow-hidden">
                <div className="w-2/3">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full aspect-auto object-cover"
                  />
                </div>
                <div className="w-2/5 flex flex-col justify-center items-center gap-4 ">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Button text={"Know More"} px={4} py={12} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default StoriesCarousle;
