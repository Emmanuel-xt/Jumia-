import React from "react";

import FragrancesImage from "../jumiaMedia/HealthandBeauty/fragrances_300x400.png";
import HairClippersImage from "../jumiaMedia/HealthandBeauty/hair-clippers_300x400.png";
import MakeupImage from "../jumiaMedia/HealthandBeauty/makeup_300x400.png";
import OralCareImage from "../jumiaMedia/HealthandBeauty/oral-care_300x400.png";
import SkinCareImage from "../jumiaMedia/HealthandBeauty/skin-care_300x400.png";
import WigsImage from "../jumiaMedia/HealthandBeauty/wigs_300x400.png";

const products = [
  {
    name: "Fragrances",
    img: FragrancesImage,
    price: "10,000",
    discount: "-10%",
    oldPrice: "19,000",
  },
  {
    name: "Hair Clippers",
    img: HairClippersImage,
    price: "15,000",
    discount: "-15%",
    oldPrice: "25,000",
  },
  {
    name: "Makeup",
    img: MakeupImage,
    price: "5,000",
    discount: "-20%",
    oldPrice: "8,000",
  },
  {
    name: "Oral Care",
    img: OralCareImage,
    price: "2,500",
    discount: "-5%",
    oldPrice: "2,800",
  },
  {
    name: "Skin Care",
    img: SkinCareImage,
    price: "7,000",
    discount: "-10%",
    oldPrice: "12,000",
  },
  {
    name: "Wigs",
    img: WigsImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
];




const Health = () => {
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
 
export default Health;