import React from "react";
import BagRiceImage from '../jumiaMedia/LimitedDeals/bagRice.jpg';
import ClippersImage from '../jumiaMedia/LimitedDeals/clippers.jpg';
import LaptopImage from '../jumiaMedia/LimitedDeals/laptop.jpg';
import RedmiPhoneImage from '../jumiaMedia/LimitedDeals/redmiphone.jpg';
import TvImage from '../jumiaMedia/LimitedDeals/tv.jpg';
import WashingMachineImage from '../jumiaMedia/LimitedDeals/washingMachine.jpg';
import WomanTrackImage from '../jumiaMedia/LimitedDeals/womanTrack.jpg';

const products = [
  {
    name: "Bag of Rice",
    img: BagRiceImage,
    price: "15,000",
    discount: "-10%",
    oldPrice: "17,000",
  },
  {
    name: "Clippers",
    img: ClippersImage,
    price: "5,500",
    discount: "-15%",
    oldPrice: "6,500",
  },
  {
    name: "Laptop",
    img: LaptopImage,
    price: "55,000",
    discount: "-20%",
    oldPrice: "68,000",
  },
  {
    name: "Redmi Phone",
    img: RedmiPhoneImage,
    price: "12,000",
    discount: "-5%",
    oldPrice: "12,500",
  },
  {
    name: "TV",
    img: TvImage,
    price: "22,000",
    discount: "-10%",
    oldPrice: "24,500",
  },
  {
    name: "Washing Machine",
    img: WashingMachineImage,
    price: "18,000",
    discount: "-15%",
    oldPrice: "21,000",
  },
  {
    name: "Woman Track",
    img: WomanTrackImage,
    price: "3,500",
    discount: "-10%",
    oldPrice: "3,900",
  },
];


const LimitedStock = () => {
    return ( 
        <>
             <section>
        <h3 className="title" style={{backgroundColor:"pink"}}>Recommended For you </h3>
    <div className="recommended-sec-con con ">
        
           { products.map((product , index) => (
               <div className="recommended-sec-item itemes ">
                    <div className="img-span" key={index}>
                      <img src={product.img}  />
                      <span>{product.discount}</span>
                    </div>
                    <p>{product.name}</p>
                    <p className="price">&#8358; {product.price}</p>
                    <strike>&#8358;{product.oldPrice}</strike>
                    </div>
                    
                )
            )}
        

    </div>
    </section>
        </>
     );
}
 
export default LimitedStock;