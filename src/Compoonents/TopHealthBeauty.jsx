import React from "react";


import AbsImage from "../jumiaMedia/topHealthBeauty/abs.jpg";
import CeraImage from "../jumiaMedia/topHealthBeauty/cera.jpg";
import ClipperImage from "../jumiaMedia/topHealthBeauty/clipper.jpg";
import DarlImage from "../jumiaMedia/topHealthBeauty/darl.jpg";
import DeoImage from "../jumiaMedia/topHealthBeauty/deo.jpg";
import MizaImage from "../jumiaMedia/topHealthBeauty/miza.jpg";

const products = [
  {
    name: "Abs",
    img: AbsImage,
    price: "2,500",
    discount: "-10%",
    oldPrice: "2,800",
  },
  {
    name: "Cera",
    img: CeraImage,
    price: "4,000",
    discount: "-15%",
    oldPrice: "4,700",
  },
  {
    name: "Clipper",
    img: ClipperImage,
    price: "1,800",
    discount: "-12%",
    oldPrice: "2,050",
  },
  {
    name: "Darl",
    img: DarlImage,
    price: "1,200",
    discount: "-5%",
    oldPrice: "1,260",
  },
  {
    name: "Deo",
    img: DeoImage,
    price: "800",
    discount: "-8%",
    oldPrice: "870",
  },
  {
    name: "Miza",
    img: MizaImage,
    price: "3,500",
    discount: "-10%",
    oldPrice: "3,900",
  },
];

const TopHealth = () => {
  return (
    <>
      <section>
        <h3 className="title" style={{background:"rgb(254,226,204)"}}>Top Health and Beauty</h3>
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

export default TopHealth;
