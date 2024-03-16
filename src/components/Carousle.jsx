import CarousleItems from "./CarousleItems";
import Slider from "react-slick";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] right-7 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] left-7 bg-white text-3xl h-12 w-12 flex justify-center items-center rounded-full border-[1px] border-gray-200 hover:bg-yellow-300 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
}

const Carousle = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item) => {
            return <CarousleItems item={item} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousle;
