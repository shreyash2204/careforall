import React from "react";
import WeDoCard from "./WeDoCard";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] lg:hidden -right-2 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] lg:hidden -left-2 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
}

const WeDoCarousle = ({ whatWeDo }) => {
  // console.log(whatWeDo);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swiptoSlide: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };

  return (
    <div
      className="relative z-[2] w-[80%] md:w-[100%] xl:w-[80%]"
      style={{ left: "50%", transform: "translateX(-50%)" }}>
      <div className="p-4 md:p-8">
        <Slider {...settings}>
          {whatWeDo.map((weDo) => {
            return (
              <div
                className={`h-[320px] w-[270px] bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-md border-b-[6.5px] ${weDo.border} wedo-card `}>
                <div className="w-[150px] ">
                  <img src={weDo.img} />
                </div>
                <div>
                  <h3 className=" text-sm">
                    {weDo.title}
                    <div className="border-b-[2.5px] w-10 mx-auto mt-4 border-[#f47445]">
                    </div>
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default WeDoCarousle;
