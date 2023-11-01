import React from "react";

import EarPeiceImage from "../jumiaMedia/flashSales/earpeice.jpg";
import HomeTearImage from "../jumiaMedia/flashSales/hometear.jpg";
import MouseImage from "../jumiaMedia/flashSales/mouse.jpg";
import PoloImage from "../jumiaMedia/flashSales/polo.jpg";
import ShoeImage from "../jumiaMedia/flashSales/shoe.jpg";
import StuckinsImage from "../jumiaMedia/flashSales/stuckins.jpg";
import UsbImage from "../jumiaMedia/flashSales/usb.jpg";

const products = [
  {
    name: "Ear Peice",
    img: EarPeiceImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
    rate: "50",
  },
  {
    name: "Home Tear",
    img: HomeTearImage,
    price: "12,000",
    discount: "-20%",
    oldPrice: "15,000",
    rate: "20",
  },
  {
    name: "Mouse",
    img: MouseImage,
    price: "1,800",
    discount: "-10%",
    oldPrice: "2,000",
    rate: "60",
},
{
    name: "Polo",
    img: PoloImage,
    price: "5,500",
    discount: "-18%",
    oldPrice: "6,700",
    rate: "90",
  },
  {
    name: "Shoe",
    img: ShoeImage,
    price: "9,200",
    discount: "-12%",
    oldPrice: "10,500",
     rate: "50",
  },
  {
    name: "Stuckins",
    img: StuckinsImage,
    price: "3,300",
    discount: "-8%",
    oldPrice: "3,600",
     rate: "10",
  },
  {
    name: "USB Drive",
    img: UsbImage,
    price: "700",
    discount: "-5%",
    oldPrice: "750",
     rate: "20",
  },
  {
    name: "USB Drive",
    img: UsbImage,
    price: "750",
    discount: "-5%",
    oldPrice: "800",
     rate: "20",
  },
];

// Rest of your code...

const FlashSales = () => {
  return (
    <>
      <section>
        <h3
          className="title"
          style={{ backgroundColor: "red", zIndex: "3", color: "white" }}
        >
          Flash Sales{" "}
        </h3>
        <div className="recommended-sec-con con">
          {products.map((product, index) => (
            <div className="recommended-sec-item itemes">
              <div className="img-span" key={index}>
                <img src={product.img} />
                <span>{product.discount}</span>
              </div>
              <p>{product.name}</p>
              <p className="price">&#8358; {product.price}</p>
              <strike>&#8358;{product.oldPrice}</strike>
              <div className="rating" >
                <div className="rating__before"  style={{width: `${product.rate}%` ,
                     backgroundColor: product.rate < 21 ? "red" : "orange" }} >
                </div></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FlashSales;
