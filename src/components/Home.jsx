import React from "react";
import AboutUs from "./AboutUs";
import Allabout from "./Allabout";
import BestSeller from "./BestSeller";
import Gallery from "./Gallery";
import Hero from "./Hero";
import WhatPeopleSay from "./WhatPeopleSay";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Allabout />
      <BestSeller />
      <WhatPeopleSay />
      <Gallery />
    </div>
  );
};

export default Home;
