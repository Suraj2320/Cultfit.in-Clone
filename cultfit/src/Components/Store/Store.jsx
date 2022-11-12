import React, { useEffect, useState } from "react";
import "./Store.css";

export const Store = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <div>
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
      <div className="my-3">
        <h1 className="text-center my-3">Shop By Categories</h1>
        <div id="container">
          <div onClick={() => setCategory("electronics")} className="card">
            <div className="front">
              <h2>Electronics</h2>
              <img
                style={{ width: "15rem", height: "15rem", marginTop: "2rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoLvVBPrjuiVsZh7HI3yUGZaqfz7xFvjWUA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="right">
              <img
                className="wrapimg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoLvVBPrjuiVsZh7HI3yUGZaqfz7xFvjWUA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div onClick={() => setCategory("jewelery")} className="card">
            <div className="front">
              <h2>Jewelery</h2>
              <img
                style={{ width: "15rem", height: "15rem", marginTop: "2rem" }}
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="right">
              <img
                className="wrapimg"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
          <div onClick={() => setCategory("men's clothing")} className="card">
            <div className="front">
              <h2>Men's clothing</h2>
              <img
                style={{ width: "15rem", height: "15rem", marginTop: "2rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-s2Re-xKkbvQycNxxfj2Go7tgIALjXTEGvw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="right">
              <img
                className="wrapimg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-s2Re-xKkbvQycNxxfj2Go7tgIALjXTEGvw&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div onClick={() => setCategory("women's clothing")} className="card">
            <div className="front">
              <h2>Women's clothing</h2>
              <img
                style={{ width: "15rem", height: "15rem", marginTop: "2rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEv3T7J9oYafsVkuHg3o482TmyEWErhETSvg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="right">
              <img
                className="wrapimg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEv3T7J9oYafsVkuHg3o482TmyEWErhETSvg&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner my-5">
          <h1 className="text-center my-1">All Products</h1>
          <div className="wrapper2">
            {product.map((ele) => (
              <div key={ele.id} className="card">
                <div className="front">
                  <h2>{ele.title}</h2>
                  <p>
                    {ele.category}
                    <span>Rating : {ele.rating.rate}</span>
                  </p>

                  <p className="price">Price : ${ele.price}</p>
                </div>
                <div className="right">
                  <img className="wrapimg" src={ele.image} alt="" />
                  <button>Add to cart, yo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
