import React from "react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaMaxcdn } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
const LastSection = () => {
  return (
    <>
      <div className="ultimate">
        <div className="sub_ultimate">
          <div id="u1">
            <p className="p1">LET US HELP</p>
            <p className="p2">Help Center</p>
            <p className="p2"> Contact Us</p>
            <p className="p2"> How to shop on Jumia?</p>
            <p className="p2"> Delivery options and timelines</p>
            <p className="p2"> How to return a product on Jumia?</p>
            <p className="p2">Corporate and bulk purchases</p>
            <p className="p2"> Report a Product</p>
            <p className="p2"> Ship your package anywhere in Nigeria</p>
            <p className="p2"> Dispute Resolution Policy</p>
            <p className="p2">Returns and Refunds Policy</p>
          </div>
          <div id="u1">
            <p className="p1">ABOUT JUMIA</p>
            <p>About us</p>
            <p className="p2">Jumia Express</p>
            <p className="p2">Terms and Conditions</p>
            <p className="p2">Privacy Notice</p>
            <p className="p2">Cookie Notice</p>
            <p className="p2">Jumia Global</p>
            <p className="p2">Official Stores</p>
            <p className="p2">Flash Sales</p>
            <p className="p2">Tech Week 2023</p>
          </div>
          <div id="u1">
            <p className="p1">MAKE MONEY WITH JUMIA</p>
            <p className="p2">Sell on Jumia</p>
            <p className="p2">Become a Sales Consultant</p>
            <p className="p2">Become a Logistics Service Partner</p>
            <p className="p2">Join the Jumia DA Academy</p>
            <p className="p2">Join the Jumia KOL Program</p>
          </div>
          <div id="u1">
            <p className="p1">JUMIA INTERNATIONAL</p>
            <p className="p2">Algeria</p>
            <p className="p2">Egypt</p>
            <p className="p2">Ghana</p>
            <p className="p2">Ivory Coast</p>
            <p className="p2">Kenya</p>
          </div>
        </div>
        <div className="ultimate2">
          <div className="u2">
            <p className="p1">JOIN US ON</p>
            <section>
              <i className="fa-brands fa-facebook-f sec1" />
              <i className="fa-brands fa-youtube sec1" />
              <i className="fa-brands fa-instagram sec1" />
              <i className="fa-brands fa-twitter sec1" />
            </section>
          </div>
          <div className="u2">
            <p className="p1">PAYMENT METHODS &amp; DELIVERY PARTNERS</p>
            <section>
              <FaRegCreditCard /> <FaCcMastercard />
              <LiaCcVisa />              <i
                className="fa-brands fa-dhl fa-2xl"
                style={{ color: "#f0f2f5" }}
              />
              <FaMaxcdn />
              
            </section>
          </div>
        </div>
        <hr className="a1" />
        <div className="footer">
          <div className="services">
            <FaCcAmazonPay /> <p>PAY</p>
          </div>
          <div className="services">
            <PiBowlFoodBold />
            <p>Celebrations</p>{" "}
          </div>
          <div className="services">
            <LuPartyPopper /> <p>PARTY</p>
          </div>
          <div className="services">
            <FaPersonWalkingLuggage /> <p>LOGISTICS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastSection;
