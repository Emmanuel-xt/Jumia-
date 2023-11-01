import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import Items from "./Items";
import jslide from "../jumiaMedia/pageRandomImages/jslide.mp4";
import rside1 from "../jumiaMedia/pageRandomImages/rside1.png";
import rside2 from "../jumiaMedia/pageRandomImages/rside2.png";

const PreSection = () => {
  return (
    <div className="presection-con">
      <div className="presection-sec">
        <div className="side-menu">
          <Items name={"Supermarket"} />
          <Items name={"Health & Office"} />
          <Items name={"Home & Office"} />
          <Items name={"Appliances"} />
          <Items name={"Phones and Tablets"} />
          <Items name={"Computing"} />
          <Items name={"Electronics"} />
          <Items name={"Fashion"} />
          <Items name={"Baby Products"} />
          <Items name={"Gaming"} />
          <Items name={"Sporting Goods"} />
          <Items name={"Other Categories"} />
        </div>
        <div className="mid-menu">
          <video autoPlay loop src={jslide} />
        </div>
        <div className="right-menu">
            <img src={rside1} />
            <img src={rside2} />

        </div>
      </div>
    </div>
  );
};

export default PreSection;
