//

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import "./FitnessGif.css";
export const FitnessImg = () => {
  //CardBox

  //Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="mainslide">
      <Slider {...settings}>
        <Box
          className="gifSlider"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
        <Box
          className="gifSlider"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
        <Box
          className="gifSlider"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
        <Box
          className="gifSlider"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
        <Box
          className="gifSlider"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
        <Box
          className="gifSlider"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginTop="1rem"
        >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
        </Box>
      </Slider>
    </div>
  );
};
