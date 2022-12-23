import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FitnessSlider.css";
export const FitnessSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mainslide">
      <Slider {...settings}>
        <div className="slide1">
          <h1>FREE 1.5MONTHS EXTENSION</h1>
          <h2>on cultpass ELITE|Ends In</h2>
        </div>
        <div className="slide2">
          <h1>FREE 1.5MONTHS EXTENSION</h1>
          <h2>on cultpass PRO|Ends In</h2>
        </div>
        <div className="slide3">
          <h1>UPTO 4MONTHS EXTENSION FREE</h1>
          <h2>on cultpass LIVE|Ends In</h2>
        </div>
      </Slider>
    </div>
  );
};
