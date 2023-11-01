import React from "react";

import AudioSetImage from "../jumiaMedia/weyon/audio_set.jpg";
import BluetoothImage from "../jumiaMedia/weyon/bluetoot.jpg";
import CtvImage from "../jumiaMedia/weyon/ctv.jpg";
import FtvImage from "../jumiaMedia/weyon/ftv.jpg";
import LeedImage from "../jumiaMedia/weyon/leed.jpg";
import SmartImage from "../jumiaMedia/weyon/smart.jpg";

const products = [
  {
    name: "CTV",
    img: CtvImage,
    price: "18,000",
    discount: "-20%",
    oldPrice: "22,500",
  },
  {
    name: "FTV",
    img: FtvImage,
    price: "22,500",
    discount: "-10%",
    oldPrice: "25,000",
  },
  {
    name: "LEED",
    img: LeedImage,
    price: "12,000",
    discount: "-5%",
    oldPrice: "12,800",
  },
  {
    name: "Audio Set",
    img: AudioSetImage,
    price: "25,000",
    discount: "-10%",
    oldPrice: "30,000",
  },
  {
    name: "Bluetooth",
    img: BluetoothImage,
    price: "10,500",
    discount: "-15%",
    oldPrice: "12,000",
  },
  {
    name: "Smart Device",
    img: SmartImage,
    price: "28,000",
    discount: "-8%",
    oldPrice: "30,500",
  },
  {
    name: "CTV",
    img: CtvImage,
    price: "18,000",
    discount: "-20%",
    oldPrice: "22,500",
  },
];

const WeyonStore = () => {
  return (
    <>
      <section>
        <h3 className="title" style={{backgroundColor:"skyblue"}}>Weyon Official Store</h3>
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

export default WeyonStore;
