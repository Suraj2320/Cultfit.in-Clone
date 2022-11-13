import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
import "./Home.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Slide from "./Slide";

const Home = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 1000);

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
    <div className="homePage">
      {/* <Navbar path="home" /> */}
      {/* HOMEPAGE FIRST VEDIO POSTER STARTS */}
      <>
        <div className="homePage__video-poster-one">
          <video
            autoPlay
            loop
            playsInline
            poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          >
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1278,ar_1.77,q_auto:eco,dpr_1.0700000524520874,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="homePage__text-poster-one">
          <div className="homePage__text-poster-one_img-one">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              alt="we-are-cult-img"
              loading="lazy"
            />
          </div>
          {/* <div className="homePage__text-poster-one_svg-one">
          <svg
            width="906"
            height="569"
            viewBox="0 0 906 569"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path 3"
              opacity="0.815929"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.541494 567.256C0.541494 567.256 288.184 599.186 412 357.019C535.815 114.851 905.7 128.198 905.7 128.198L853.178 0.542129C853.178 0.542129 460.098 56.1967 363 327.202C265.902 598.207 2.44773 564.478 2.44773 564.478L0.541494 567.256Z"
              fill="url(#paint0_linear_6391_14875)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_6391_14875"
                x1="896.553"
                y1="577.97"
                x2="66.1909"
                y2="486.524"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#111D27" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#EC4ED1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="homePage__text-poster-one_svg-two">
          <svg
            width="1027"
            height="281"
            viewBox="0 0 1027 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path 4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.499904 107.489C0.499904 107.489 79.4999 216.344 436 89.0315C792.5 -38.2805 965.255 280.41 965.255 280.41L1026.54 215.707C1026.54 215.707 708 -124.891 397 51.6425C85.9999 228.176 47.9999 89.0315 47.9999 89.0315L0.499904 107.489Z"
              fill="url(#paint0_linear_6391_14872)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_6391_14872"
                x1="604.206"
                y1="548.044"
                x2="260.146"
                y2="17.1812"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#111D27" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FBD94C"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="homePage__text-poster-one_svg-three">
          <svg
            width="998"
            height="399"
            viewBox="0 0 998 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path 5"
              opacity="0.658748"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M998 398.116C998 398.116 901.882 207.384 619.882 240.987C337.882 274.59 85.3818 0.0878906 85.3818 0.0878906L0.881775 111.308C0.881775 111.308 312.882 361.673 605.882 291.154C898.882 220.636 993.5 398.116 993.5 398.116H998Z"
              fill="url(#paint0_linear_6391_14873)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_6391_14873"
                x1="76.9999"
                y1="123.5"
                x2="418.867"
                y2="699.423"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#62B1F2" stop-opacity="0"></stop>
                <stop
                  offset="0.582702"
                  stop-color="#2BF2FF"
                  stop-opacity="0.74"
                ></stop>
                <stop offset="1" stop-color="#A9F7D1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="homePage__text-poster-one_svg-four">
          <svg
            width="1033"
            height="256"
            viewBox="0 0 1033 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path 6"
              opacity="0.658748"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1032.26 105.178C1032.26 105.178 831.789 -99.4979 605.32 63.0676C378.851 225.633 15.1793 107.411 15.1793 107.411L0.750166 243.722C0.750166 243.722 403.2 312.882 619.696 113.14C836.191 -86.6017 1029.23 106.835 1029.23 106.835L1032.26 105.178Z"
              fill="url(#paint0_linear_6391_14874)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_6391_14874"
                x1="-27"
                y1="140"
                x2="768.964"
                y2="587.997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#111D27" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FBD94C"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div> */}

          <div className="homePage__text-poster-one_text">
            <h4>A fitness movemet that is worth breaking a sweat for </h4>
            <div className="homePage__text-poster-one_text_btn">
              <button>EXPLORE CULTPASS</button>
            </div>
          </div>
        </div>
      </>

      {/* HOMEPAGE FIRST VEDIO POSTER ENDS */}

      {/* IMAGES SECTION STARTS */}
      <div className="homePage__images-container">
        <div className="homePage__images-container_box">
          <div className="homePage__images-container_box_row1">
            <div data-aos="zoom-in-left">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.404,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
                alt=""
              />
            </div>
          </div>

          <div className="homePage__images-container_box_row2">
            <div data-aos="zoom-in-left">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.29,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-out">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.123,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="homePage__images-container_txt" data-aos="fade-in">
          <p>cultpass</p>
          <h4>One membership for all your fitness needs</h4>
        </div>
      </div>

      {/* IMAGES SECTION ENDS */}

      {/* IMAGES SECTION STARTS */}
      <div className="homePage__images-container">
        <div className="homePage__images-container_box">
          <div className="homePage__images-container_box_row2">
            <div data-aos="zoom-in-left">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
                alt=""
              />
            </div>
          </div>

          <div className="homePage__images-container_box_row2">
            <div data-aos="zoom-in-left">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-out">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="homePage__images-container_txt_new" data-aos="fade-in">
          <p>Fun, trainer led group classes</p>
        </div>
      </div>

      {/* IMAGES SECTION ENDS */}

      {/* CULTPASS SECTION START */}

      <div className="homePage__cultpass">
        <div className="homePage__cultpass-background">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
            alt="pink"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"
            alt="blue"
          />
        </div>
        <div className="homePage__cultpass-title">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_259,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            alt="cultpass-img"
          />
          <p>One membership for all your fitness needs</p>
          <p>LEARN MORE</p>
        </div>

        <div className="homePage__cultpass-type">
          <div className="homePage__cultpass-type-one">
            <div className="homePage__cultpass-type-one_imgBox">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
                alt="elite-pass"
                className="homePage__cultpass-poster"
              />
              <div className="homePage__cultpass-type-one_imgBox-miniContainer">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass-small-logo"
                />
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                  alt="elite-logo"
                />
              </div>
            </div>

            <div className="homePage__cultpass-type-one_textBox">
              <div className="homePage__cultpass-type-one_textBox-title">
                <p>Unlimited access to</p>
                <ul>
                  <li>At-center group classes</li>
                  <li>All ELITE & PRO gyms</li>
                  <li>At-home live workout</li>
                </ul>
              </div>
            </div>

            <div className="homePage__cultpass-type-one_btnBox">
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className="homePage__cultpass-type-one">
            <div className="homePage__cultpass-type-one_imgBox">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
                alt="elite-pass"
                className="homePage__cultpass-poster"
              />
              <div className="homePage__cultpass-type-one_imgBox-miniContainer">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass-small-logo"
                />
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                  alt="pro-logo"
                />
              </div>
            </div>

            <div className="homePage__cultpass-type-one_textBox">
              <div className="homePage__cultpass-type-one_textBox-title">
                <p>Unlimited access to</p>
                <ul>
                  <li>At-center group classes</li>
                  <li>All ELITE & PRO gyms</li>
                  <li>At-home live workout</li>
                </ul>
              </div>
            </div>

            <div className="homePage__cultpass-type-one_btnBox">
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className="homePage__cultpass-type-one">
            <div className="homePage__cultpass-type-one_imgBox">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
                alt="live-pass"
                className="homePage__cultpass-poster"
              />
              <div className="homePage__cultpass-type-one_imgBox-miniContainer">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass-small-logo"
                />
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                  alt="live-logo"
                />
              </div>
            </div>

            <div className="homePage__cultpass-type-one_textBox">
              <div className="homePage__cultpass-type-one_textBox-title">
                <p>Unlimited access to</p>
                <ul>
                  <li>At-center group classes</li>
                  <li>All ELITE & PRO gyms</li>
                  <li>At-home live workout</li>
                </ul>
              </div>
            </div>

            <div className="homePage__cultpass-type-one_btnBox">
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* CULTPASS SECTION ENDS */}

      {/* POSTER CARDS STARTS */}
      <div className="homepage__poster-container">
        <div className="homepage__poster-bg-img">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,ar_1,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
            alt=""
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,ar_1,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
            alt=""
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,ar_1,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
            alt=""
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
            alt=""
          />
        </div>
        <div className="homePage__posters">
          {/* CARD 1 */}
          <div className="homePage__posters-card">
            <div className="homePage__posters-card_text">
              <a href="/transform">
                <div className="homePage__posters-card_text-titleText">
                  <h3>cult transform</h3>
                  <div className="homePage__posters-card_text-titleText-icon">
                    <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className="homePage__poster-card_text-subText">
                  Get coached to lose weight for good
                </div>
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="homePage__posters-card2">
            <div className="homePage__posters-card2_text">
              <a href="/transform">
                <div className="homePage__posters-card2_text-titleText">
                  <h3>Workout Gear</h3>
                  <div className="homePage__posters-card2_text-titleText-icon">
                    <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className="homePage__poster-card2_text-subText">
                  Everything you need for your workout
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="homePage__posters">
          {/* CARD 3 */}
          <div
            className="homePage__posters-card"
            style={{
              backgroundImage: `url(
              "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_350,ar_1.164,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/four-square-card/glass-blog-multi-color.png"
            )`,
            }}
          >
            <div className="homePage__posters-card_text">
              <a href="/transform">
                <div className="homePage__posters-card_text-titleText">
                  <h3>The .fit way</h3>
                  <div className="homePage__posters-card_text-titleText-icon">
                    <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className="homePage__poster-card_text-subText">
                  Making health easy, one day at a time
                </div>
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="homePage__posters-card2"
            style={{
              backgroundImage: `url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_350,ar_1.164,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/four-square-card/glass-blue-trainers-2.png")`,
            }}
          >
            <div className="homePage__posters-card2_text">
              <a href="/transform">
                <div className="homePage__posters-card2_text-titleText">
                  <h3>Personal Trainer</h3>
                  <div className="homePage__posters-card2_text-titleText-icon">
                    <img
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className="homePage__poster-card2_text-subText">
                  At-Home personalized workouts with the best of cult trainers
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* POSTER CARDS ENDS */}

      {/* WELLNESS HUB STARTS */}

      <div className="homePage__wellnesshub-container">
        <Slide />

        {/* <div className="homePage__wellnesshub-container_text-box">
          <div className="homePage__wellnesshub-container_text-box_title">
            <h4>Wellness Hub</h4>
            <p>One place for all your well-being needs</p>
          </div>
          <div className="homePage__wellnesshub-container_text-box_options">
            <div>WORKOUT GEAR</div>
            <div>CONSULT ONLINE</div>
            <div>LABS</div>
            <div>THERAPY</div>
          </div>
        </div>

        <div className="homePage__wellnesshub-container_img-box"></div> */}
      </div>

      {/* WELLNESS HUB ENDS */}

      {/* DOWNLOAD APP STARTS */}
      <div className="download_container-ks">
        <div className="homePage__download-container">
          <div className="homePage__download-container-title">
            <h3>Download the most loved fitness app</h3>
            <p>Start your fitness journey with us. Join the Cult!</p>
          </div>

          <div className="homePage__download-container-img">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_2.98,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
              alt=""
            />
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_3.31,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* DOWNLOAD APP ENDS */}
      
    </div>
  );
};

// AOS.init({ offset: 300, duration: 2000 });
export default Home;
