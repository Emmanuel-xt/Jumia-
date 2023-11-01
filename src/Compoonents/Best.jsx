import React from "react";
import BagImage from '../jumiaMedia/BestPrice/bag.jpg';
import BeedImage from '../jumiaMedia/BestPrice/Beed.jpg';
import OutdoorImage from '../jumiaMedia/BestPrice/outdoor.jpg';
import PowerbankImage from '../jumiaMedia/BestPrice/powerbank.jpg';
import ShirtsImage from '../jumiaMedia/BestPrice/shirts.jpg';
import ShoeImage from '../jumiaMedia/BestPrice/shoe.jpg';
import SlippersImage from '../jumiaMedia/BestPrice/slippers.jpg';

const products = [
    {
      name: "Slippers Product",
      img: SlippersImage,
      price: "750",
      discount: "-5%",
      oldPrice: "790",
    },
    {
    name: "Bag Product",
    img: BagImage,
    price: "1200",
    discount: "-10%",
    oldPrice: "1350",
  },
  {
    name: "Bee Product",
    img: BeedImage,
    price: "2500",
    discount: "-15%",
    oldPrice: "2900",
  },
  {
    name: "Outdoor Product",
    img: OutdoorImage,
    price: "1800",
    discount: "-20%",
    oldPrice: "2250",
  },
  {
    name: "Powerbank Product",
    img: PowerbankImage,
    price: "900",
    discount: "-8%",
    oldPrice: "980",
  },
  {
    name: "Shirts Product",
    img: ShirtsImage,
    price: "2800",
    discount: "-10%",
    oldPrice: "3100",
  },
  {
    name: "Shoe Product",
    img: ShoeImage,
    price: "3500",
    discount: "-12%",
    oldPrice: "4000",
  },
];


const BestPrice = () => {
  return (
    <>
      <section>
        <h3 className="title" style={{backgroundColor:"rgb(222,241,253)"}}>Best Prices</h3>
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

export default BestPrice;
