import React from "react";

import BatteriesImage from "../jumiaMedia/PowerUp/batteries.jpg";
import GeneratorsImage from "../jumiaMedia/PowerUp/generators.jpg";
import InvertersImage from "../jumiaMedia/PowerUp/inverters.jpg";
import PhoneGradeImage from "../jumiaMedia/PowerUp/phone-grade.jpg";
import PowerPacksImage from "../jumiaMedia/PowerUp/powerpacks.jpg";
import RechargeablePowerSupplyImage from "../jumiaMedia/PowerUp/rechargeable-power-supply.jpg";
import BruhmGeneratorsImage from "../jumiaMedia/generators/bruhm.jpg";

const products = [
  {
    name: "Batteries",
    img: BatteriesImage,
    price: "4,000",
    discount: "-10%",
    oldPrice: "4,500",
  },
  {
    name: "Generators",
    img: GeneratorsImage,
    price: "38,000",
    discount: "-15%",
    oldPrice: "45,000",
  },
  {
      name: "Phone Grade",
    img: PhoneGradeImage,
    price: "8,000",
    discount: "-5%",
    oldPrice: "8,500",
},
{
  name: "Inverters",
  img: InvertersImage,
  price: "25,000",
  discount: "-12%",
  oldPrice: "28,500",
},
{
    name: "Power Packs",
    img: PowerPacksImage,
    price: "12,000",
    discount: "-8%",
    oldPrice: "13,000",
  },
  {
    name: "Rechargeable Power Supply",
    img: RechargeablePowerSupplyImage,
    price: "6,500",
    discount: "-10%",
    oldPrice: "7,200",
  },
  {
    name: "Bruhm Generators",
    img: BruhmGeneratorsImage,
    price: "32,000",
    discount: "-10%",
    oldPrice: "35,500",
  },
];

const Powerup = () => {
  return (
    <>
      <section>
        <h3 className="title" style={{background:"rgb(222,241,253)"}}>Power Up Deals</h3>
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

export default Powerup;
