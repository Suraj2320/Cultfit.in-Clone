import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Fitness.css";
import  {FitnessSlider } from "./FitnessSlider";
import  {FitnessSlider2}  from "./FitnessSlider2";
import { Navbar2 } from "./Navbar2";



export const Fitness = () => {
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
    <div>
      <Navbar path="/fitness" />
      <div className="fitness-body" style={{ paddingTop: "60px" }}>
        {/* Start coding from here */}
        <Navbar2/>
        <div className="pagemain" style={{ paddingTop: "60px" }}>
          <div className="Fitnesshome" style={{ paddingTop: "680px" }}>
            <button className="btn">TRY FOR FREE</button>
            <div className="Offers">
              <div className="box">
                <p className="line1">cultpass</p>
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_95,ar_3.59,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                  className="line2 eli"
                />
                <p className="line3">Starting at₹1143 / month</p>
              </div>
              <div className="box">
                <p className="line1">cultpass</p>
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_70,ar_2.63,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                  className="line2 pro"
                />
                <p className="line3">Starting at₹678 / month</p>
              </div>
              <div className="box">
                <p className="line1">cultpass</p>
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,ar_2.86,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                  className="line2 liv"
                />
                <p className="line3">Starting at₹115 / month</p>
              </div>
            </div>
            <div style={{ width: "85%", margin: "auto" }}>
            {/* <SimpleSlider /> */}<FitnessSlider/>
              {/* <SimpleSlider /> */}
            </div>
            <div className="secondhalf">
              <p className="para">What you get with cultpass</p>
              <img
                className="map"
                style={{ width: "80%" }}
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1100,q_auto:eco,dpr_1,f_auto,fl_progressive/v1/cult-media/v2web/centers/3_Cult_HSR_PRODUCT_BNR_2018-08-10T12:18:41.704Z.png"
                alt="map"
              />
              <h2 className="At">AT-CENTER</h2>
              <h1 className="Trainer">Trainer-led group classes</h1>
              <div className="sd2">
                {/* <SimpleSlider2 /> */}<FitnessSlider2/>
              </div>
              <div>
                <h2 className="At">AT-HOME</h2>
                <p className="para">
                  Live group workouts with calorie tracking
                </p>
              </div>
              <div className="at-home">
                <div className="BCimg">
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/diy/40b46505-0b48-431f-ae76-64f6021e2efd"
                    alt="img"
                  />
                </div>
                <div id="content">
                  <h3 style={{ color: "#8f9193" }}>Simran N</h3>
                  <h2 style={{ color: "white" }}>Dance Fitness Special:B...</h2>
                  <h3 style={{ color: "#8f9193" }}>
                    Dance.INTERMEDIATE .50Min N
                  </h3>
                  <button
                    style={{
                      color: "white",
                      marginTop: "20px",
                      background: "grey",
                      width: "120px",
                      fontWeight: "700",
                    }}
                  >
                    JOIN
                  </button>
                </div>
              </div>
              <div className="Choose">
                <p className="para">Choose your cultpass</p>
                <h2
                  style={{
                    color: "#8f9193",
                    marginBottom: "50px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  3 flexible plans to suit your fitness needs
                </h2>
              </div>
              <div id="table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>ELITE</th>
                      <th>PRO</th>
                      <th>LIVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        ELite Gyms & At
                        <br /> Center Group Classes
                      </td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>04Sessions/month</td>
                      <td>✖</td>
                    </tr>
                    <br />
                    <tr>
                      <td>PRO GYMS</td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>✖</td>
                    </tr>
                    <br />
                    <tr>
                      <td>SMART WORKOUT PLANS</td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>✖</td>
                    </tr>
                    <br />
                    <tr>
                      <td>AT HOME WORKOUTS</td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                      <td>
                        ✓<br />
                        Unlimited
                      </td>
                    </tr>

                    <br />
                    <tr>
                      <td></td>
                      <td>
                        Starting at ₹1269/
                        <br />
                        month
                        <br />
                        <button className="tablebutton">Buy now</button>
                      </td>
                      <td>
                        Starting at ₹769/
                        <br />
                        month
                        <br />
                        <button className="tablebutton">Buy now</button>
                      </td>
                      <td>
                        Starting at ₹115/
                        <br />
                        month
                        <br />
                        <button className="tablebutton">Buy now</button>
                      </td>
                    </tr>
                    <br />
                  </tbody>
                </table>
              </div>
              <div style={{ width: "80%", margin: "auto" }} className="Elite">
                <div className="EliteContent">
                  <div className="marginleft">
                    <img
                      className="cp1"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_6.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png"
                      alt="img"
                    />
                    <p className="unlim">
                      Unlimted access to <br />
                      everything in your city{" "}
                    </p>
                    <p className="cp">Unlimted access to</p>
                    <p className="cp">✓ All ELITE & PRO GYMS</p>
                    <p className="cp">✓ At-home live workouts</p>
                    <p className="cp">Starting at ₹1269/month</p>
                    <button className="btn-try">TRY FOR FREE</button>
                    <button className="btn-buy">BUY NOW</button>
                  </div>
                </div>
                <div className="Eliteimg">
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
                    alt="img"
                  />
                </div>
              </div>

              <div className="PRO">
                <div className="PROimg">
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
                    alt="img"
                  />
                </div>
                <div className="PROContent">
                  <div className="marginleft1">
                    <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_5.84,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png"
                      alt="img"
                      className="cp1"
                    />
                    <p className="unlim1">
                      Unlimted access to <br />
                      PRO gyms in your city{" "}
                    </p>
                    <p className="cp1">Unlimted access to</p>
                    <p className="cp1">✓ All PRO gyms</p>
                    <p className="cp1">✓ At home live workouts</p>
                    <p className="cp1">Starting at ₹769/month</p>
                    <button className="btn-try1">TRY FOR FREE</button>
                    <button className="btn-buy1">BUY NOW</button>
                  </div>
                </div>
              </div>

              <div className="culttransform">
                <img
                  style={{ width: "100%" }}
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_750,ar_1738:763/dpr_2/image/vm/c93e221a-607f-4dda-87c5-5b7b4a8662b0.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
