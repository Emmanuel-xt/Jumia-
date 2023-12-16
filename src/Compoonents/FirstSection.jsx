import React from "react";
import ClearanceImage from "../jumiaMedia/FirstSection/Clearance.gif";
import EarphonesImage from "../jumiaMedia/FirstSection/earphones.png";
import FashImage from "../jumiaMedia/FirstSection/fash.jpg";
import FashionImage from "../jumiaMedia/FirstSection/fashion_300x240.png";
import GeneratorImage from "../jumiaMedia/FirstSection/generator.gif";
import GenericImage from "../jumiaMedia/FirstSection/generic_300x240.jpg";
import GroceriesImage from "../jumiaMedia/FirstSection/groceries_300x240v2.png";
import PhonesTabletsImage from "../jumiaMedia/FirstSection/phones-tablets_300x240.png";
import RefrigeratorsImage from "../jumiaMedia/FirstSection/refrigerators_300x240.png";
import TelevisionsImage from "../jumiaMedia/FirstSection/televisions_300x240.png";
import WatchesImage from "../jumiaMedia/FirstSection/watches_300x240.png";

const products = [
  {
    name: "Clearance",
    img: ClearanceImage,
  },
  {
    name: "Earphones",
    img: EarphonesImage,
  },
  {
    name: "Fash",
    img: FashImage,
  },
  {
    name: "Fashion",
    img: FashionImage,
  },
  {
    name: "Generator",
    img: GeneratorImage,
  },
  {
    name: "Generic",
    img: GenericImage,
  },
  {
    name: "Groceries",
    img: GroceriesImage,
  },
  {
    name: "Phones",
    img: PhonesTabletsImage,
  },
  {
    name: "Refrigerators",
    img: RefrigeratorsImage,
  },
  {
    name: "Groceries",
    img: GroceriesImage,
  },
  {
    name: "Televisions",
    img: TelevisionsImage,
  },
  {
    name: "Watches ",
    img: WatchesImage,
  },
];

const FirstSection = () => {
  return (
    <>
      <div className="first-sec-con con">
        {products.map((product, index) => (
          <div className="first-sec-item itemes" key={index}>
            <img src={product.img} alt="" />
            <p>{product.name} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FirstSection;
