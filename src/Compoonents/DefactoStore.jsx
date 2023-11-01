import React from "react";
import BagImage from '../jumiaMedia/defacto/c1.jpg';
import C2Image from '../jumiaMedia/defacto/c2.jpg';
import C3Image from '../jumiaMedia/defacto/c3.jpg';
import C4Image from '../jumiaMedia/defacto/c4.jpg';
import C5Image from '../jumiaMedia/defacto/c5.jpg';
import C6Image from '../jumiaMedia/defacto/c6.jpg';
import C7Image from '../jumiaMedia/defacto/c7.jpg';

const products = [
  {
    name: "Bag",
    img: BagImage,
    price: "10,000",
    discount: "-10%",
    oldPrice: "19,000",
  },
  {
    name: "Product 2",
    img: C2Image,
    price: "8,500",
    discount: "-15%",
    oldPrice: "10,000",
  },
  {
    name: "Product 3",
    img: C3Image,
    price: "7,200",
    discount: "-20%",
    oldPrice: "9,000",
  },
  {
    name: "Product 4",
    img: C4Image,
    price: "5,500",
    discount: "-12%",
    oldPrice: "6,300",
  },
  {
    name: "Product 5",
    img: C5Image,
    price: "6,800",
    discount: "-18%",
    oldPrice: "8,300",
  },
  {
    name: "Product 6",
    img: C6Image,
    price: "9,500",
    discount: "-22%",
    oldPrice: "12,200",
  },
  {
    name: "Product 7",
    img: C7Image,
    price: "7,900",
    discount: "-25%",
    oldPrice: "10,500",
  },
];


const DefactoStore = () => {
    return ( 
        <>
         <section>
        <h3 className="title">Defacto for Sales</h3>
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
 
export default DefactoStore;