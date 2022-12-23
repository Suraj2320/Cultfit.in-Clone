import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Fitness1.css";
import { FitnessGif } from "./FitnessGif";
import { FitnessSlider } from "./FitnessSlider";
// import { Navbar2 } from "./Navbar2";

const Fitness1 = () => {
  return (
    <Box>
      <Box>
        <Box h={14} className="navBox">
          <Link className="nav-link">CultpassELITE</Link>
          <Link className="nav-link">CultpassPRO</Link>
          <Link className="nav-link">CultpassLIVE</Link>
          <Link className="nav-link">CultpassTransform</Link>
        </Box>
        <Box className="bannerBox"></Box>
      </Box>
      <Box h={230} className="onBannerBox">
        <Button colorScheme="blue">Button</Button>

        <Box className="pass1">
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
          />
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_95,ar_3.59,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
          />
          <Text as={"h2"} fontSize="md">
            Starting at 1443
          </Text>
        </Box>
        <Box className="pass1">
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
          />
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_95,ar_3.59,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
          />
          <Text as={"h2"} fontSize="md">
            Starting at 1443
          </Text>
        </Box>
        <Box className="pass1">
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
          />
          <Image
            style={{ margin: "auto", padding: ".7rem" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_95,ar_3.59,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
          />
          <Text as={"h2"} fontSize="md">
            Starting at 1443
          </Text>
        </Box>
      </Box>
      <Box h={130} className="slider1">
        <FitnessSlider />
      </Box>
      <Box style={{margin:'1rem'}}>
        <FitnessGif />
      </Box>

      <Box>
        <Box>
            <Text style={{textAlign:'center'}} as='h1' >AT-CENTER</Text>
            <Heading style={{textAlign:'center'}}>TRAINER-led group classes</Heading>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Fitness1;
