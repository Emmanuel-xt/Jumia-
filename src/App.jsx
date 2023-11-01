import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import Header from "./Compoonents/Header";
import ProfileMenu from "./Compoonents/ProfileMenu";
import PreSection from "./Compoonents/PreSection";
import FirstSection from "./Compoonents/FirstSection";
import Recommended from "./Compoonents/Recommended";
import FlashSales from "./Compoonents/FLashSales";
import LimitedStock from "./Compoonents/LimitedStock";
import FifthSection from "./Compoonents/FifthSection";
import DefactoStore from "./Compoonents/DefactoStore";
import ShopfromCollections from "./Compoonents/SixthSection";
import Generators from "./Compoonents/Generators";
import AffordableFashon from "./Compoonents/AffordableFashion";
import TopAffordable from "./Compoonents/TopAffordable";
import MoreCollections from "./Compoonents/MoreCollections";
import Phones from "./Compoonents/Phones";
import BestPrice from "./Compoonents/Best";
import OffcialStore from "./Compoonents/OfficialStore";
import OfficialStoreChild from "./Compoonents/OfficialStoreChild";
import Diageo from "./Compoonents/Diaegeo";
import WeyonStore from "./Compoonents/WeyonStore";
import Powerup from "./Compoonents/PowerUp";
import TopHealth from "./Compoonents/TopHealthBeauty";
import Health from "./Compoonents/Health";
import WriteUp from "./Compoonents/WriteUp";
import Penultimate from "./Compoonents/PenultimateSection";
import LastSection from "./Compoonents/LastSection";

const App = () => {
  return (
    <body>
      <Header />
      <div className="profile-menu-sec">
        <ProfileMenu />
      </div>
      <div className="presection-sec">
        <PreSection />
      </div>
      <div className="firstsection-sec">

      <FirstSection/>
      </div>
      <div className="recommended-sec sec">
      <Recommended/>
      </div>
      <div className="flash-sales-sec sec">
        <FlashSales/>
      </div>
      <div className="limited-sales-sec sec">
        <LimitedStock/>
      </div>
      <div className="fifth-sec sec">
        <FifthSection/>
      </div>
      <div className="defacto-sec sec">
        <DefactoStore/>
      </div>
      <div className="sixth-sec sec">
        <ShopfromCollections/>
      </div>
      <div className="generator-sec sec">
        <Generators/>
      </div>
      <div className="affordable-sec sec">
        <AffordableFashon/>
      </div>
      <div className="top-affordable-sec sec">
        <TopAffordable/>
      </div>
      <div className="more-collections-sec sec">
        <MoreCollections/>
      </div>
      <div className="best-price-sec sec">
        <BestPrice/>
      </div>
      <div className="phones-sec sec">
        <Phones/>
      </div>
      <div className="officialstore-sec sec">
        <OffcialStore/>
      </div>
      <div className="officialstore-child-sec sec">
        <OfficialStoreChild/>
      </div>
      <div className="diageo-sec sec">
        <Diageo/>
      </div>
      <div className="weyonStore-sec sec">
        <WeyonStore/>
      </div>
      <div className="powerup-sec sec">
        <Powerup/>
      </div>
      <div className="health-sec sec">
        <Health/>
      </div>
      <div className="tophealth-sec sec">
        <TopHealth/>
      </div>
      <div className="writeup-sec sec">
        <WriteUp/>
      </div>
      <div className="penutltimate-sec">
        <Penultimate/>
      </div>
      <LastSection/>
    </body>
  );
};

export default App;
