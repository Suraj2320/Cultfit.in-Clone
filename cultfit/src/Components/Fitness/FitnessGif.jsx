import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import "./FitnessGif.css";
export const FitnessGif = () => {
  //CardBox

  //Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="mainslide">
      <Slider {...settings}>
        <Box bg="#0a1017" className="gifSlider" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://thumbs.gfycat.com/ReadyEasyCicada-size_restricted.gif" />

          <Box p="6">
            <Flex>
              <Box bg="#0a1017" display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  bg="#0a1017"
                >
                  <Heading as="h2">FEAUZERA</Heading>
                </Box>
              </Box>
              <Box>
              <Text
                  style={{
                    marginLeft: "6.5rem",
                  
                    border: "1px solid orange",
                    padding: ".8rem",
                    borderRadius: ".5rem",
                    cursor: "pointer",
                    textAlign:'center'
                    ,color:'#ffffff'

                  }}
                  as="h2"
                >
                  TRY FREE
                </Text>
              </Box>
            </Flex>
            <Box >
              <Text>
                <u>Unlimited access starting at 580/mo</u>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box bg="#0a1017" className="gifSlider" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://thumbs.gfycat.com/PleasedTangibleColt-size_restricted.gif" />

          <Box p="6">
            <Flex>
              <Box bg="#0a1017" display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Heading as="h2">FEAUZERA</Heading>
                </Box>
              </Box>
              <Box>
              <Text
                  style={{
                    marginLeft: "6.5rem",
                    
                    border: "1px solid orange",
                    padding: ".8rem",
                    borderRadius: ".5rem",
                    cursor: "pointer",
                    textAlign:'center'
                    ,color:'#ffffff'
                  }}
                  as="h2"
                >
                  TRY FREE
                </Text>
              </Box>
            </Flex>
            <Box >
              <Text>
                <u>Unlimited access starting at 580/mo</u>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box bg="#0a1017" className="gifSlider" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://thumbs.gfycat.com/ClassicQuarrelsomeBighornedsheep-size_restricted.gif" />

          <Box p="6">
            <Flex>
              <Box bg="#0a1017" display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Heading as="h2">FEAUZERA</Heading>
                </Box>
              </Box>
              <Box>
                <Text
                  style={{
                    marginLeft: "6.5rem",
                   
                    border: "1px solid orange",
                    padding: ".8rem",
                    borderRadius: ".5rem",
                    cursor: "pointer",
                    textAlign:'center'
                    ,color:'#ffffff'
                  }}
                  as="h2"
                >
                  TRY FREE
                </Text>
              </Box>
            </Flex>
            <Box >
              <Text>
                <u>Unlimited access starting at 580/mo</u>
              </Text>
            </Box>
          </Box>
        </Box>
      </Slider>
    </div>
  );
};
