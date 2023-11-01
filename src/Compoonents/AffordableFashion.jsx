import React from "react";
import AccessoriesImage from '../jumiaMedia/affordableFashon/accessories.jpg';
import CrocsImage from '../jumiaMedia/affordableFashon/crocs.jpg';
import FragranceImage from '../jumiaMedia/affordableFashon/fragrance.jpg';
import GownsImage from '../jumiaMedia/affordableFashon/gowns.jpg';
import SneakersImage from '../jumiaMedia/affordableFashon/Sneakers.jpg';
import WigsImage from '../jumiaMedia/affordableFashon/wigs2.jpg';

const products = [
  {
    name: "Accessories",
    img: AccessoriesImage,
  },
  {
    name: "Crocs",
    img: CrocsImage,
  },
  {
    name: "Fragrance",
    img: FragranceImage,
  },
  {
    name: "Gowns",
    img: GownsImage,
  },
  {
    name: "Sneakers",
    img: SneakersImage,
  },
  {
    name: "Wigs",
    img: WigsImage,
  },
];



const AffordableFashon = () => {
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
 
export default AffordableFashon;