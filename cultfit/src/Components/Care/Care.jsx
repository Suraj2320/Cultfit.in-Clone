import React from "react";

import ImageSlider from "./ImageSlider";
// import { SliderData } from "./SliderData";
import Specialities from "./Specialities";
import "./Care.scss";

const Care = () => {
  return (
    <div className="care_page">
      <div className="care-body">
        <div className="storeNav">
          <button>Lab Tests</button>
        </div>
        <ImageSlider />
        <Specialities />
      </div>
    </div>
  );
};

export default Care;
