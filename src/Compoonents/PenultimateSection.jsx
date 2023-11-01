import React from "react";
import jlogo from "../jumiaMedia/pageRandomImages/jlogo_white.png";
import jstar from "../jumiaMedia/pageRandomImages/jst.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole , faPlay ,faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Penultimate = () => {
  return (
    <>
      <div className="penultimate_sec">

        <img src={jlogo} height="25px" />

        <div className="pen-second" >
          <p ><b>NEW TO JUMIA? </b></p>
          <p className="sus">
            Suscribe to our newsletter to get update on our latest offers
          </p>

          <div className="input">
            <div className="email-box">
            <FontAwesomeIcon icon={faEnvelope} className="env-icon"/>
            <input
              type="text"
              placeholder="Enter E-mail Address"
              className="email"
            />
            </div>
            <div>
              <button className="gender"> MALE</button>
              <button className="gender">FEMALE</button>
            </div>
          </div>
        </div>

        <div className="pen-third">

          <div className="download">
            
              <img src={jstar} height="40px" />
            
            <section>
              <p><b>DOWNLOAD JUMIA FREE APP</b></p>
              <p>Get access to exclusive offers</p>
            </section>
          </div>

          <div className="download-box">

            <button id="l3">
              <FontAwesomeIcon icon={faAppleWhole} className="apple_icon"/>
              <div className="app">
                <div className="get" >DOWNLOAD ON THE</div>
                <div><b> APP STORE</b></div>
              </div>
            </button>

            <button id="l3">
              <FontAwesomeIcon icon={faPlay} className="apple_icon" />
              <div className="app">
                <div className="get">GET IT ON</div>
                <div> <b>PLAY STORE</b></div>
              </div>
            </button>

          </div>
        </div>

      </div>
    </>
  );
};

export default Penultimate;
