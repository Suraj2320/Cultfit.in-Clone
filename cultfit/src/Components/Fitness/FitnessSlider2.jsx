import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "./FitnessSlider2.css";
export const FitnessSlider2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className="mainslide1">
    <Slider {...settings}>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/bff19df0-2aed-4d27-a5d0-8e8bb7504847.png" alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png" alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png"alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png"alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/d09df6e6-5718-4acb-a3dd-7e842e3dc58f.png"alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png"alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/bff19df0-2aed-4d27-a5d0-8e8bb7504847.png"alt="img"/>
    </div>
    <div className="imgslide">
   <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png"alt="img"/>
    </div>
  </Slider>
</div>
  )
}
