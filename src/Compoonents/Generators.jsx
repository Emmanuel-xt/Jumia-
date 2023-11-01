import React from "react";
import ApplianceImage from "../jumiaMedia/generators/appliance_300x300.jpg";
import BluetetiImage from "../jumiaMedia/generators/powerbank.jpg";
import GeneratorImage from "../jumiaMedia/generators/generator_300x300.jpg";
import LaptopGradeImage from "../jumiaMedia/generators/laptopgrade_300x300.jpg";
import BruhmImage from "../jumiaMedia/generators/bruhm.jpg";
import StarterKitImage from "../jumiaMedia/generators/starter_kit_300x300.jpg";
import BatteriesImage from "../jumiaMedia/generators/batteries_300x300.jpg";

const products = [
  {
    name: "Appliance",
    img: ApplianceImage,
    price: "12,000",
    discount: "-10%",
    oldPrice: "15,000",
  },
  {
      name: "Generator",
      img: GeneratorImage,
      price: "20,000",
      discount: "-5%",
      oldPrice: "21,000",
    },
    {
        name: "Laptop Grade",
        img: LaptopGradeImage,
        price: "15,500",
        discount: "-12%",
        oldPrice: "18,000",
    },
    {
        name: "Starter Kit",
        img: StarterKitImage,
        price: "3,000",
        discount: "-10%",
        oldPrice: "3,330",
    },
    {
        name: "Batteries",
        img: BatteriesImage,
        price: "1,500",
        discount: "-5%",
        oldPrice: "1,580",
    },
    {
        name: "Blueteti",
      img: BluetetiImage,
      price: "8,500",
      discount: "-15%",
      oldPrice: "10,000",
    },
    {
        name: "Bruhm",
        img: BruhmImage,
        price: "7,800",
        discount: "-20%",
        oldPrice: "9,750",
    },
];

const Generators = () => {
    return (
    <>
      <section>
        <h3 className="title" style={{backgroundColor:"skyblue"}}>Generators| Inverters </h3>
        <div className="recommended-sec-con con ">
          {products.map((product, index) => (
            <div className="recommended-sec-item itemes ">
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

export default Generators;
