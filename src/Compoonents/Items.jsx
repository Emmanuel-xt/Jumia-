import React from "react";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { SiCoinmarketcap } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { GrGamepad } from "react-icons/gr";
import { FaShopify } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa";
import { MdOutlineWatch } from "react-icons/md";

const itemsList = [
  {
    name: "Supermarket",
    icon: SiCoinmarketcap,
  },
  {
    name: "Health & Office",
    icon: MdHealthAndSafety,
  },
  {
    name: "Home & Office",
    icon: PiTelevisionDuotone,
  },
  {
    name: "Appliances",
    icon: ImHeadphones,
  },
  {
    name: "Phones and Tablets",
    icon: IoPhonePortrait,
  },
//   {
//     name: "Computing",
//     icon: faAppleWhole,
//   },
  {
    name: "Electronics",
    icon: MdOutlineWatch,
  },
  {
    name: "Fashion",
    icon: FaShopify,
  },
  {
    name: "Baby Products",
    icon: FaBabyCarriage,
  },
  {
    name: "Gaming",
    icon: GrGamepad,
  },
  {
    name: "Sporting Goods",
    icon: MdOutlineSportsTennis,
  },
  {
    name: "Other Categories",
    icon: FaCarSide,
  },
];
const Items = () => {
  return (
    <>
      {itemsList.map((item) => (
        <div className="item" key={item.name}>
          {<item.icon />} 
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Items;
