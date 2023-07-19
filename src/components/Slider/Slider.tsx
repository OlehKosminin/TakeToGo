import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContainerSlider } from "./Slider.styled";

interface SliderProps {
  slides: Array<string>;
}

const CustomSlider: React.FC<SliderProps> = ({ slides }) => {
  const settings = {
    pauseOnHover: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    style: {
      position: "relative",
      top: "-30px",
      zIndex: "0",
    },
  };

  return (
    <ContainerSlider>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt={`${index + 1}`} />
          </div>
        ))}
      </Slider>
    </ContainerSlider>
  );
};

export default CustomSlider;
