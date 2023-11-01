import React from "react";
import NestleImage from "../jumiaMedia/officialStores/260x144-Nestle.png";
import AdidasImage from "../jumiaMedia/officialStores/adidas_260x144_V2.png";
import BacardiImage from "../jumiaMedia/officialStores/bacardi_260x144.png";
import CocaColaImage from "../jumiaMedia/officialStores/coca-cola_260x144.png";
import DefactoImage from "../jumiaMedia/officialStores/Defacto.jpg";
import DiageoImage from "../jumiaMedia/officialStores/diageo_260x144.png";
import EdifierImage from "../jumiaMedia/officialStores/edifier_260x144.png";
import HaierThermocoolImage from "../jumiaMedia/officialStores/haier-thermocool_260x144.png";
import InfinixImage from "../jumiaMedia/officialStores/infinix_260x144v2.png";
import NiveaImage from "../jumiaMedia/officialStores/nivea_260x144v2.png";
import OraimoImage from "../jumiaMedia/officialStores/oraimo_260x144.png";
import PernodRicardImage from "../jumiaMedia/officialStores/Pernod_ricard.png";
import PhilipsImage from "../jumiaMedia/officialStores/philips_260x144.png";
import SamsungImage from "../jumiaMedia/officialStores/samsung_260x144.png";
import TCLImage from "../jumiaMedia/officialStores/tcl_260x144.png";
import TecnoImage from "../jumiaMedia/officialStores/tecno_260x144.png";
import WeyonImage from "../jumiaMedia/officialStores/weyon_260x144.png";
import XiaomiImage from "../jumiaMedia/officialStores/xiaomi_260x144.png";

const products = [
  { name: "Nestle Store", img: NestleImage },
  { name: "Adidas Store", img: AdidasImage },
  { name: "Bacardi Store", img: BacardiImage },
  { name: "Coca-Cola Store", img: CocaColaImage },
  { name: "Defacto Store", img: DefactoImage },
  { name: "Diageo Store", img: DiageoImage },
  { name: "Edifier Store", img: EdifierImage },
  { name: "Haier Thermocool Store", img: HaierThermocoolImage },
  { name: "Infinix Store", img: InfinixImage },
  { name: "Nivea Store", img: NiveaImage },
  { name: "Oraimo Store", img: OraimoImage },
  { name: "Pernod Ricard Store", img: PernodRicardImage },
  { name: "Philips Store", img: PhilipsImage },
  { name: "Samsung Store", img: SamsungImage },
  { name: "TCL Store", img: TCLImage },
  { name: "Tecno Store", img: TecnoImage },
  { name: "Weyon Store", img: WeyonImage },
  { name: "Xiaomi Store", img: XiaomiImage },
];

const OfficialStoreChild = () => {
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

export default OfficialStoreChild;
