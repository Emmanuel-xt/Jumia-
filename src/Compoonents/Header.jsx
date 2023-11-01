import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShieldHalved ,faSuitcaseRolling , faMartiniGlassEmpty ,faGift, } from '@fortawesome/free-solid-svg-icons'
import jheader from '../jumiaMedia/pageRandomImages/jheader.gif'
import jslogo from '../jumiaMedia/pageRandomImages/jslogo.png'
import jlogo from '../jumiaMedia/pageRandomImages/jlogo.png'

const Header = () => {
    return ( 
        <>
        <div className="header-img">
            <img src={jheader} alt="" />
        </div>
        <div className="header-menu-bar">
            <div className="sell">
            <img src={jslogo} alt="" />
            <p>Sell on Jumia</p>
            </div>

            <div className="menus">
            <img src={jlogo} alt="" className="jlogo" />

            <FontAwesomeIcon icon={faShieldHalved} className="menus-icons" />OPAY
            <FontAwesomeIcon icon={faSuitcaseRolling}  className="menus-icons"/>LOGISTICS
            <FontAwesomeIcon icon={faMartiniGlassEmpty}  className="menus-icons"/>PARTY
            <FontAwesomeIcon icon={faGift}  className="menus-icons"/>FOOD
            </div>
        </div>
        </>
     );
}
 
export default Header;