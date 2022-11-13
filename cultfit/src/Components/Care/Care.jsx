import React from "react";
import ImageSlider from "./ImageSlider";
import Specialities from "./Specialities";
import "./Care.scss";

const Care = () => {
  return (
    <div className="care_page" style={{marginBottom:"10rem"}}>
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
