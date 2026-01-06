import React from "react";

import IndustryImage from "./IndustryImage";

import miningImg from "./assets/mining.jpg";
import farmingImg from "./assets/farming.jpg";
import trucksImg from "./assets/trucks.jpg";

const HovePics: React.FC = () => {
  return (
    <div className="industry-wrapper">
      <IndustryImage
        src={miningImg}
        alt="Mining Industry"
        description="We supply top-quality diesel for mining machinery."
      />

      <IndustryImage
        src={farmingImg}
        alt="Agriculture"
        description="Reliable diesel supply for farming equipment."
      />

      <IndustryImage
        src={trucksImg}
        alt="Transport"
        description="Fuel solutions for logistics and truck fleets."
      />
    </div>
  );
};

export default HovePics;
