import React from "react";
import jlogo from "../jumiaMedia/pageRandomImages/jlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMenu } from "react-icons/io5"
import { faMagnifyingGlass , faUser, faCaretDown , faCircleQuestion ,faCartShopping} from "@fortawesome/free-solid-svg-icons";

const ProfileMenu = () => {
  return (
    <>
      <div className="profile-menu">
        <img src={jlogo} alt="" className="profile-menu-img" />

        <div className="search">
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <input
                type="text"
                placeholder="Search products, brands and Categories"
                className="input-box"
              />
          </div>
          <div className="button">SEARCH</div>
        </div>
        <div className="">

        <IoMenu />
        </div>

        <div className="navs">
            <div className="account">
            <FontAwesomeIcon icon={faUser} className="account-icon"/>
            <p>Account</p>
            <FontAwesomeIcon icon={faCaretDown} className="account-icon"/>
            </div>

            <div className="account">
            <FontAwesomeIcon icon={faCircleQuestion} className="account-icon"/>      
            <p>Help</p>
            <FontAwesomeIcon icon={faCaretDown} className="account-icon"/>
            </div>
            <div className="account">
            <FontAwesomeIcon icon={faCartShopping} className="account-icon" />            <p>Cart</p>
            </div>
            
            
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
