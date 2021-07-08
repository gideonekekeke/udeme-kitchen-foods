import React from "react";

import DoMore from "./DoMore/DoMore";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import DeliveryImage from "./Slider/DeliveryImage";
import Slider from "./Slider/Slider";

const HomeScreen = () => {
  return (
    <div>
      <Slider />
      <DeliveryImage />
      <FeaturedCard />
      <DoMore />
    </div>
  );
};

export default HomeScreen;
