import React from "react";
import AndroidPhonesImage from '../jumiaMedia/phones/android-phones_300x400.png';
import AndroidTabletsImage from '../jumiaMedia/phones/android-tablets_300x400v2.png';
import NotePhonesImage from '../jumiaMedia/phones/note-phones_300x400.png';
import FoldPhonesImage from '../jumiaMedia/phones/fold-phones_300x400.png';
import IPadsImage from '../jumiaMedia/phones/ipads_300x400.png';
import IPhonesImage from '../jumiaMedia/phones/iphones_300x400.png';

const products = [
  {
    name: "Android Phones",
    img: AndroidPhonesImage,
  },
  {
    name: "Android Tablets",
    img: AndroidTabletsImage,
  },
  {
    name: "Note Phones",
    img: NotePhonesImage,
  },
  {
    name: "Fold Phones",
    img: FoldPhonesImage,
  },
  {
    name: "iPads",
    img: IPadsImage,
  },
  {
    name: "iPhones",
    img: IPhonesImage,
  },
];



const Phones = () => {
    return ( 
        <>
         <div className="first-sec-con con">
        {
            products.map((product , index) => (

        <div className="first-sec-item itemes" key={index}>
          <img src={product.img} alt="" />
          {/* <p>{product.name} </p> */}
        </div>
            ))
        }
      </div>
        </>
     );
}
 
export default Phones;