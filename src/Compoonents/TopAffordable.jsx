import React from "react";
import Image1 from "../jumiaMedia/TopAffordableFashon/1.jpg";
import BlackImage from "../jumiaMedia/TopAffordableFashon/black.jpg";
import PhoneImage from "../jumiaMedia/TopAffordableFashon/phone.jpg";
import RedImage from "../jumiaMedia/TopAffordableFashon/red.jpg";
import ShoeImage from "../jumiaMedia/TopAffordableFashon/shoe.jpg";
import WaterImage from "../jumiaMedia/TopAffordableFashon/water.jpg";
import YellowImage from "../jumiaMedia/TopAffordableFashon/yellow.jpg";

const products = [
  {
    name: "Product 1",
    img: Image1,
    price: "1000",
    discount: "10%",
    oldPrice: "1500",
  },
  {
    name: "Black Product",
    img: BlackImage,
    price: "500",
    discount: "20%",
    oldPrice: "700",
  },
  {
    name: "Phone Product",
    img: PhoneImage,
    price: "8000",
    discount: "15%",
    oldPrice: "9500",
  },
  {
    name: "Red Product",
    img: RedImage,
    price: "1200",
    discount: "5%",
    oldPrice: "1250",
  },
  {
    name: "Shoe Product",
    img: ShoeImage,
    price: "2000",
    discount: "12%",
    oldPrice: "2300",
  },
  {
    name: "Water Product",
    img: WaterImage,
    price: "100",
    discount: "0%",
    oldPrice: "100",
  },
  {
    name: "Yellow Product",
    img: YellowImage,
    price: "300",
    discount: "8%",
    oldPrice: "325",
  },
];

const TopAffordable = () => {
  return (
    <>
       <section>
        <h3 className="title" style={{backgroundColor:"rgb(231,187,194)"}}>Top Affordable Fashon Deals </h3>
    <div className="recommended-sec-con con ">
      {products.map((product, index) => (
        <div className="recommended-sec-item itemes " key={index}>
          <div className="img-span" key={index}>
            <img src={product.img} alt="" />
            <span style={{display: product.oldPrice === product.price && "none"}}>{product.discount}</span>
          </div>

          <p>{product.name}</p>
          <p className="price">{product.price}</p>
          <strike style={{display: product.oldPrice === product.price && "none"}}>{product.oldPrice}</strike>
        </div>
      ))}
      </div>
      </section>
    </>
  );
};

export default TopAffordable;
