import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div >
            <img width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/1eb5f679-eab1-43ff-a7d2-018210a00067.jpg"></img>
          </div>
          <div>
          <img width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/579d7e71-35c5-4950-a9de-bc141ad53909.jpg"></img>
          </div>
          <div>
          <img width="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/d28446fd-0a68-4c3c-9fcc-0fd114c17e1e.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}