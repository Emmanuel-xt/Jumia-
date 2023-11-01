import React from "react";
import ComputingImage from '../jumiaMedia/MoreCollections/computing-deals_300x400.jpg';
import FitnessImage from '../jumiaMedia/MoreCollections/fitness-deals_300x400v3.png';
import GamingImage from '../jumiaMedia/MoreCollections/gaming-deals_300x400.png';
import MobileAccessoriesImage from '../jumiaMedia/MoreCollections/mobile-accessories_300x400.png';
import KidsCornerImage from '../jumiaMedia/MoreCollections/kids-corner_300x400v2.png';
import PowerDealsImage from '../jumiaMedia/MoreCollections/power-deals_300x400.png';

const products = [
  {
    name: "Computing Deals",
    img: ComputingImage,
  },
  {
    name: "Fitness Deals",
    img: FitnessImage,
  },
  {
    name: "Gaming Deals",
    img: GamingImage,
  },
  {
    name: "Mobile Accessories",
    img: MobileAccessoriesImage,
  },
  {
    name: "Kids Corner",
    img: KidsCornerImage,
  },
  {
    name: "Power Deals",
    img: PowerDealsImage,
  },
];

const MoreCollections = () => {
    return ( 
        <>
         <div className="first-sec-con con">
        {
            products.map((product , index) => (

        <div className="first-sec-item itemes" key={index}>
          <img src={product.img} alt="" />
          {/* <p>{product.name} </p> */}
        </div>
            ))
        }
      </div>
        </>
     );
}
 
export default MoreCollections;