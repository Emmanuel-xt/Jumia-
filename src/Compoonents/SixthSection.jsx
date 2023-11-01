import React from "react";
import AppliancesDealsImage from "../jumiaMedia/shopfromCollection/appliances-deals_300x400.png";
import BeautyDealsImage from "../jumiaMedia/shopfromCollection/beauty-deals_300x400v2.png";
import ElectronicsDealsImage from "../jumiaMedia/shopfromCollection/electronics-deals_300x400.png";
import FashionDealsImage from "../jumiaMedia/shopfromCollection/fashion-deals_300x400.png";
import PhoneDealsImage from "../jumiaMedia/shopfromCollection/phone-deals_300x400.png";
import SupermarketDealsImage from "../jumiaMedia/shopfromCollection/supermarket-deals_300x400.jpg";

const products = [
  {
    name: "Appliances Deals",
    img: AppliancesDealsImage,
  },
  {
    name: "Beauty Deals",
    img: BeautyDealsImage,
  },
  {
    name: "Electronics Deals",
    img: ElectronicsDealsImage,
  },
  {
    name: "Fashion Deals",
    img: FashionDealsImage,
  },
  {
    name: "Phone Deals",
    img: PhoneDealsImage,
  },
  {
    name: "Supermarket Deals",
    img: SupermarketDealsImage,
  },
];

const ShopfromCollections = () => {
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

export default ShopfromCollections;
