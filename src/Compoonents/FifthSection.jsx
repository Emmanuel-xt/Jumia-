import React from "react";
import Artboard1Copy4Image from '../jumiaMedia/FifthSection/Artboard_1_copy_4.png';
import Artboard1Copy5Image from '../jumiaMedia/FifthSection/Artboard_1_copy_5.png';
import Artboard1Image from '../jumiaMedia/FifthSection/Artboard_1.png';
import JumiaPayImage from '../jumiaMedia/FifthSection/jumiapay_300x300.png';
import MobileTripleBannerImage from '../jumiaMedia/FifthSection/Mobile_Triple_Banner__300x300.jpg';
import OfficialStoresImage from '../jumiaMedia/FifthSection/official-stores_300x300.gif';



const products = [
    {
      name: "Jumai Food",
      img: Artboard1Copy4Image,
    },
    {
      name: "50% Off & Above",
      img: Artboard1Copy5Image,
    },
    {
      name: "Utility SHop",
      img: Artboard1Image,
    },
    {
      name: "Up to 40% off",
      img: JumiaPayImage,
    },
    {
      name: "Deals on Drinks",
      img: MobileTripleBannerImage,
    },
    {
      name: "Official Stores",
      img: OfficialStoresImage,
    },
  ];
  

  

const FifthSection = () => {
    return ( 
        <>
        <div className="first-sec-con con">
        {
            products.map((product , index) => (

        <div className="first-sec-item itemes" key={index}>
          <img src={product.img} alt="" />
          <p>{product.name} </p>
        </div>
            ))
        }
      </div>
        </>
     );
}
 
export default FifthSection;