import React from "react";
import BlackImage from "../jumiaMedia/DiageoOfficial/black.jpg";
import GuniesImage from "../jumiaMedia/DiageoOfficial/gunies.jpg";
import IceImage from "../jumiaMedia/DiageoOfficial/ice.jpg";
import JonieImage from "../jumiaMedia/DiageoOfficial/jonie.jpg";
import MaltImage from "../jumiaMedia/DiageoOfficial/malt.jpg";
import OrijonImage from "../jumiaMedia/DiageoOfficial/orijon.jpg";
import WalkerImage from "../jumiaMedia/DiageoOfficial/walker.jpg";

const products = [
  {
    name: "Black Label Whisky",
    img: BlackImage,
    price: "50,000",
    oldPrice: "65,000",
  },
  {
    name: "Gunies Beer",
    img: GuniesImage,
    price: "2,500",
    oldPrice: "3,000",
  },
  {
    name: "Ice Vodka",
    img: IceImage,
    price: "8,000",
    oldPrice: "10,000",
  },
  {
    name: "Jonie Walker Whisky",
    img: JonieImage,
    price: "45,000",
    oldPrice: "55,000",
  },
  {
    name: "Malt Drink",
    img: MaltImage,
    price: "1,500",
    oldPrice: "2,000",
  },
  {
    name: "Orijon Gin",
    img: OrijonImage,
    price: "4,500",
    oldPrice: "6,000",
  },
  {
    name: "Walker Scotch",
    img: WalkerImage,
    price: "60,000",
    oldPrice: "75,000",
  },
];

const Diageo = () => {
  return (
    <>
      <section>
        <h3 className="title" style={{backgroundColor:"skyblue"}}>Diageo Officcial Store </h3>
        <div className="recommended-sec-con con ">
          {products.map((product, index) => (
            <div className="recommended-sec-item itemes " key={index}>
              <div className="img-span" key={index}>
                <img src={product.img} />
                <span>{product.discount}</span>
              </div>
              <p>{product.name}</p>
              <p className="price">&#8358; {product.price}</p>
              <strike>&#8358;{product.oldPrice}</strike>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Diageo;
