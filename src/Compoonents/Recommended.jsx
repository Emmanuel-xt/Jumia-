import React from "react";
import BagImage from "../jumiaMedia/Recommended/bag.jpg";
import BootImage from "../jumiaMedia/Recommended/boot.jpg";
import CroptopImage from "../jumiaMedia/Recommended/croptop.jpg";
import EarphoneImage from "../jumiaMedia/Recommended/earphone.jpg";
import FtimberImage from "../jumiaMedia/Recommended/ftimber.jpg";
import WomenShoeImage from "../jumiaMedia/Recommended/womenShoe.jpg";

const products = [
  {
    name: "Bag",
    img: BagImage,
    price: "10,000",
    discount: "-10%",
    oldPrice: "19,000",
  },
  {
    name: "Boot",
    img: BootImage,
    price: "15,000",
    discount: "-15%",
    oldPrice: "25,000",
  },
  {
    name: "Croptop",
    img: CroptopImage,
    price: "5,000",
    discount: "-20%",
    oldPrice: "8,000",
  },
  {
    name: "Earphone",
    img: EarphoneImage,
    price: "2,500",
    discount: "-5%",
    oldPrice: "2,800",
  },
  {
    name: "Timber",
    img: FtimberImage,
    price: "7,000",
    discount: "-10%",
    oldPrice: "12,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Women Shoe",
    img: WomenShoeImage,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
];

const Recommended = () => {
  return (
    <>
      <section>
        <h3 className="title">Recommended For you </h3>
        <div className="recommended-sec-con con ">
          {products.map((product, index) => (
            <div className="recommended-sec-item itemes " key={index}>
              <div className="img-span">
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

export default Recommended;
