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
          <Items/>
        </div>


        <div className="mid-menu">
          <video autoPlay loop src={jslide} className="mid-img"/>
        </div>


        <div className="right-menu">
            <img src={rside1} className="right-img"/>
            <img src={rside2} className="right-img"/>

        </div>
      </div>
    </div>
  );
};

export default PreSection;
