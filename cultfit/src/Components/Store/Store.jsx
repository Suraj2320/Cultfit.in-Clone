import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Slider from "react-slick";
// import Faq from "react-faq-component";

import "./Store.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Store = () => {
  const [loading__Status, setLoading__Status] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const navigate=useNavigate()
  // console.log(productsData);
  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  //fetch data from server
  useEffect(() => {
    fetch("https://cultfit-backend.herokuapp.com/products/")
      .then((res) => res.json())
      .then((res) => setProductsData(res.data))
      .catch((err) => console.log("SERVER ERROR"));

    return () => {};
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const data = {
    title: "",
    rows: [
      {
        title: " What is cultsport and what does it offer?",
        content:
          "cultsport is a premium workout wear brand from the house of cure.fit. cultsport offers a variety of premium workout and sports gear that helps fitness enthusiasts and everyday athletes up their daily fitness game and look good while they are at it. With a goal to bring top notch products with a foot forward in fashion, longevity and functionality, cultsport attempts at bringing the best performing apparel, footgear and accessories ideal for all workout formats. Read here to know in detail how cultsport is designed to enhance your workout here.",
      },
      {
        title: "What makes cultsport special?",
        content:
          "cultsport is a carefully crafted array of apparel and accessories which aims to ensure that you wear fabric exactly suited to the activity you wish to engage in. Be it fly-dry fabrics to ensure superior sweat absorption and drying, stretchable fabrics to help your workout movement range, breathable ones to aid your running experience and design elements that ensure minimal chafing and odour resistance (anti-microbial elements). We've got them all! Read here to know in detail how cultsport is designed to enhance your workout.",
      },
      {
        title: "How do I track my cultsport order?",
        content:
          "We know you're eager to get your order :) You can easily track your cultsport order by following the below steps: 1. Log into the cure.fit app and tap on the profile section.  2. Go to 'Orders' 3. Tap the order you wish to track  4. It will open up an 'Order Detail' page with the items you've ordered listed in it  5. Click on the item wish to track to see the delivery status of that item on the 'Track Shipment' screen",
      },
      {
        title: "How do I cancel my cultsport Order?",
        content:
          "You can cancel your cultsport order by following the steps below:  Steps:  1. Please check the delivery status of your order. To know how, click HERE.  2A If your cultsport order is in 'Order Confirmed'/'Ready'/'Shipped' status, you can cancel your order from the cure.fit app by following the steps listed below (How to cancel your order via app)  2B If your order is in 'Packed' state, you would need to wait until it is 'Shipped' to cancel it via app.  2C If your order is 'Out for Delivery', you would need to reject the order when our delivery executive reaches out to you.  How to cancel your order via app:  1. Log into the cure.fit app and tap on the profile section.  2. Go to orders  3. Tap the order you wish to cancel  4. It will open up an 'Order Detail' page with the items you've ordered listed in it  5. Click on the 'Cancel' button on the tiles of the item(s) you wish to cancel  To know how refunds are processed in the event of a successful cancellation, click HERE",
      },
      {
        title:
          "I am not satisfied with my cultsport product. Can I return or exchange it?",
        content:
          "Yes you surely can. cultsport provides its customers a hassle-free 30 day, No-Questions-Asked Return and Exchange policy. This allows you to return or exchange a product you don't like within 30 days from order delivery.  How to decide whether you should return OR exchange: 1. If you wish to change the size of the product you've received, please choose to Exchange the product. Exchanges are subject to stock availability 2. If you wish to change the product itself OR request for a different color, please choose to Return the product. (You would need to purchase the preferred product separately) NOTE: In case of return, once the product is picked up, the amount paid towards it will be credited into the same payment mode. Further, any voucher used during purchase will be reactivated back on your account on product pickup (as long as it has not expired). However, in case of orders with more than 1 item, the voucher will be reactivated in full only once all the items in the order have been picked up.  ",
      },
      {
        title: "How can I pay for my cultsport order?",
        content:
          "We support the following payment modes:  1. Cash On Delivery (available in selected pin codes)  2. Credit Card  3. Debit Card  4. Net banking  5. Fitcash (cure.fit's own currency)  6. Wallet  NOTE: Fitcash can be used simultaneously with any other payment mode.",
      },
      {
        title: "How can I contact the delivery guy?",
        content:
          "All orders placed on cultsport are dispatched through our courier partners such as Blue Dart, Delhivery etc. Since the delivery assignment is handled at their end, we will not be able to share the delivery person’s contact details. However, the delivery team will reach out to you on the day of delivery.",
      },
    ],
  };

  const styles = {
    bgColor: "#F2F4F8",
    titleTextColor: "grey",
    rowTitleColor: "#A8896A",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

const catogory= (cat)=>{
  console.log(cat)
  navigate(`/${cat}`)

}

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

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
      <Navbar path="store" />
      <div className="store-body">
        {/* //Second navbar */}
        <div className="storeNav">
          {" "}
          <p onClick={()=>catogory("sport")}>SPORTS</p>
          <p onClick={()=>catogory("men")}>MEN</p>
          {/* <a href="./womens">Suraj</a> */}
        <p onClick={()=>catogory("women")}>WOMEN</p>
          <p onClick={()=>catogory("sport")}>CYCLING</p>
        </div>

        {/* slider start */}
        <div className="store__sliderContainer">
        <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/579d7e71-35c5-4950-a9de-bc141ad53909.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/d28446fd-0a68-4c3c-9fcc-0fd114c17e1e.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/1eb5f679-eab1-43ff-a7d2-018210a00067.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          />
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          {/* <Slider {...settings} style={{ overflow: "hidden" }}>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/60a8058c-647f-4768-b5aa-235311d16e81.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/7dcc257a-2f4c-4caf-92d2-a08471f71a33.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
          </Slider> */}
        </div>

        {/* slider ends */}

        {/* shop by category starts */}

        
        <div className="store__shop-category">
          <div className="store__shop-category_box">
            <div className="store__shop-category_box-title">
            <p class="bestheadd">Shop By Category <span class="title">Seamless Collection</span></p>
            </div>
            <div className="store__shop-category_box_row">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7bc7142d-f87e-43ab-8396-3fcc71a6bee6.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b7ce6f01-ba33-4c57-b6e5-918dd06b8633.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1ab48e88-474e-4cad-9040-a23d138360ef.png"
                alt=""
              />
            </div>
            <div className="store__shop-category_box_row">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7597af64-463f-41f7-a0ac-b5f45f5f7747.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/ec2f8bda-b841-4a81-bbdc-8e90114f1637.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/12fca99c-8bbe-4069-99bb-1599be03ba68.png"
                alt=""
              />
            </div>
            <div className="store__shop-category_box_row">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7a42b018-6783-4494-96b7-4395c3c5af11.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/41274bec-349b-467a-9f5f-6edffd96d10d.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1eea0631-5bb8-4dcc-86c0-567a92260e67.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* shop by category ends */}

        {/* shop by workout starts */}

        <div className="store__shop-workout">
          <div className="store__shop-workout-box">
          <p class="bestheadd">Shop By Category <span class="title">Seamless Collection</span></p>

            <div className="store__shop-workout-box_img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* shop by workout ends */}

        {/* slider start */}
        <div className="store__sliderContainer" style={{ overflow: "hidden" }}>
          {/* <h2>Shop by Collection</h2> */}
          {/* <Slider {...settings} style={{ overflow: "hidden" }}>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/50791be6-3fe4-4c3c-89fd-79aefa2813a1.png"
                alt=""
                style={{ width: "99vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/c44cb069-a7fd-46f6-8cdd-18434513bba7.png"
                alt=""
                style={{ width: "99vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/9d0fca00-f5bc-4476-8a93-d9e72eb4d0a4.png"
                alt=""
                style={{ width: "99vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/ba25796f-60c3-4011-8574-ee68a270e4b9.png"
                alt=""
                style={{ width: "99vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/95def045-a089-4723-b647-58f640a37fdf.png"
                alt=""
                style={{ width: "99vw" }}
              />
            </div>
          </Slider> */}
        </div>

        {/* slider ends */}

        {/* spotlight div starts */}
        <div className="store__spotlight-container">
          <div className="store__spotlight-container_box">
          <p class="bestheadd">Spotlight<span class="title">Collection</span></p>
            <div className="store__spotlight-container_box-img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png"
                alt=""
              />
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* spotlight div ends */}

        {/* Bestsellers section starts */}
        {/* <p class="besthead">Bestsellers  <span class="title">Loved by Cult Members</span></p>
<div class="bestsellers">
    
  <div class="bestdiv">
    <div>
      <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/5Uyc3CSc7rwLwhgdwMckvYUE" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/GMVBXWAUSALTEbuL6NLQCNen" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/TjyMpyactJQ3CCupaar7e23a" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/Dxnu7UWa9fGvTkyVfZMH8yX7" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/mVqqZY8Eq9RuRf1Aj5mRcsXZ" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  
</div>



<p class="besthead">Just Launched <span class="title">Seamless Collection</span></p>
<div class="bestsellers">
  
  
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/B2zK13fNk5YwD6mBhky5dpVL" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/SiG27L1Ezj8W3tpWRXy7f5UQ" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/vXcXZqdyw7FfusoD96upd2tc" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  <div class="bestdiv">
    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/JWTDMuvRXtmCbS6FkQPb4SHH" alt="Cinque Terre" width="200" height="300"/></div>
  <div class="bestdiv1">CULTSPORT</div>
  <div class="bestdiv2">AbsoluteFit Neon Pop leg...</div>
  <div><span class="span1">₹ 1499 &nbsp;</span><span class="span2" >₹1200 &nbsp;</span><span class="span3">40% Off</span></div></div>
  
</div> */}

        
      </div>
      
    </div>
  );
};

// export default Store;
