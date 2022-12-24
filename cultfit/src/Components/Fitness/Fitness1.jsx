import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Table,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Fitness1.css";
import { FitnessElite } from "./FitnessElite";
import { FitnessGif } from "./FitnessGif";
import { FitnessImg } from "./FitnessImg";
import { FitnessSlider } from "./FitnessSlider";
// import { Navbar2 } from "./Navbar2";

const Fitness1 = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return loading__Status ? (
    <div className="loading__Screen">
      {" "}
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <Box bg="#0a1017">
      
      <Box style={{marginTop:'3rem'}}>
        <Box h={14} className="navBox">
          <Link className="nav-link">CultpassELITE</Link>
          <Link className="nav-link">CultpassPRO</Link>
          <Link className="nav-link">CultpassLIVE</Link>
          <Link className="nav-link">CultpassTransform</Link>
        </Box>
        <Box className="bannerBox"></Box>
      </Box>
      <Box bg="#0a1017" h={230} className="onBannerBox">
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
      <Box bg="#0a1017" h={130} className="slider1">
        <FitnessSlider />
      </Box>
      <Box bg="#0a1017">
        <FitnessGif />
      </Box>

      <Box>
        <Box bg="#0a1017" style={{ width: "1484px" }}>
          <Text
            bg="#0a1017"
            style={{ textAlign: "center", color: "#ffffff" }}
            as="h1"
          >
            AT-CENTER
          </Text>
          <Heading
            bg="#0a1017"
            style={{ textAlign: "center", color: "#ffffff" }}
          >
            TRAINER-led group classes
          </Heading>
        </Box>
        <Box bg="#0a1017">
          <FitnessImg />
        </Box>
        <Box bg="#0a1017">
          <Box bg="#0a1017" style={{ width: "1484px" }}>
            <Heading
              bg="#0a1017"
              style={{ textAlign: "center", color: "#ffffff" }}
            >
              Choose your cultpass
            </Heading>
            <Text
              bg="#0a1017"
              style={{ textAlign: "center", color: "#ffffff" }}
              as="h1"
            >
              3 flexiable plans to suit your need
            </Text>
          </Box>
          <Box style={{ width: "1484px" }} bg="#0a1017">
            <Table
              bg="#0a1017"
              className="table"
              style={{ width: "70%", margin: "auto" }}
            >
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th style={{ fontSize: "2rem" }}>ELITE</Th>
                  <Th style={{ fontSize: "2rem" }}>PRO</Th>
                  <Th style={{ fontSize: "2rem" }}>LIVE</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    ELite Gyms & At
                    <br /> Center Group Classes
                  </Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>04Sessions/month</Td>
                  <Td>✖</Td>
                </Tr>
                <br />
                <Tr>
                  <Td>PRO GYMS</Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>✖</Td>
                </Tr>
                <br />
                <Tr>
                  <Td>SMART WORKOUT PLANS</Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>✖</Td>
                </Tr>
                <br />
                <Tr>
                  <Td>AT HOME WORKOUTS</Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                  <Td>
                    ✓<br />
                    Unlimited
                  </Td>
                </Tr>

                <br />
                <Tr>
                  <Td></Td>
                  <Td>
                    Starting at ₹1269/
                    <br />
                    month
                    <br />
                    <Box className="tablebutton">Buy now</Box>
                  </Td>
                  <Td>
                    Starting at ₹769/
                    <br />
                    month
                    <br />
                    <Box className="tablebutton">Buy now</Box>
                  </Td>
                  <Td>
                    Starting at ₹115/
                    <br />
                    month
                    <br />
                    <Box className="tablebutton">Buy now</Box>
                  </Td>
                </Tr>
                <br />
              </Tbody>
            </Table>
          </Box>
        </Box>
        <Box
          bg="#0a1017"
          style={{ width: "1484px", margin: "auto" }}
          className="Elite"
        >
          <Box className="EliteContent">
            <Box className="marginleft">
              <Image
                className="cp1"
                bg="#0a1017"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_6.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png"
                alt="img"
              />
              <Text bg="#0a1017" className="unlim">
                Unlimted access to <br />
                everything in your city{" "}
              </Text>
              <Text className="cp">Unlimted access to</Text>
              <Text className="cp">✓ All ELITE & PRO GYMS</Text>
              <Text className="cp">✓ At-home live workouts</Text>
              <Text className="cp">Starting at ₹1269/month</Text>
              <button className="btn-try">TRY FOR FREE</button>
              <button className="btn-buy">BUY NOW</button>
            </Box>
          </Box>
          <Box bg="#0a1017" className="Eliteimg">
            <Image
              style={{ width: "100%" }}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
              alt="img"
            />
          </Box>
        </Box>

        <Box bg="#0a1017" className="PRO">
          <Box className="PROimg">
            <Image
              style={{ width: "100%" }}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
              alt="img"
            />
          </Box>
          <Box bg="#0a1017" className="PROContent">
            <Box bg="#0a1017" className="marginleft1">
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_5.84,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png"
                alt="img"
                className="cp1"
              />
              <Text bg="#0a1017" className="unlim1">
                Unlimted access to <br />
                PRO gyms in your city{" "}
              </Text>
              <Text className="cp1">Unlimted access to</Text>
              <Text className="cp1">✓ All PRO gyms</Text>
              <Text className="cp1">✓ At home live workouts</Text>
              <Text className="cp1">Starting at ₹769/month</Text>
              <Box className="btn-try1">TRY FOR FREE</Box>
              <Box className="btn-buy1">BUY NOW</Box>
            </Box>
          </Box>
        </Box>

        <Box className="culttransform">
          <Image
            style={{ width: "100%" }}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_750,ar_1738:763/dpr_2/image/vm/c93e221a-607f-4dda-87c5-5b7b4a8662b0.png"
            alt="img"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Fitness1;
