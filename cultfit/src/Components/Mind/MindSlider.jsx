import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MindSlider.css'
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className="mainslide">
    <Slider {...settings} style={{ overflow: "hidden" }}>
      <div>
        <img
          className="mindslider"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f87f914f-7a53-4a80-b9b6-d85d80fae1cb.png"
          alt="img"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          className="mindslider"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f87f914f-7a53-4a80-b9b6-d85d80fae1cb.png"
          alt="img"
          style={{ width: "100%" }}
        />
      </div>
    </Slider>
  </div>
  );
}

export default SimpleSlider;
