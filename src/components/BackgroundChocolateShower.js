import chocolateShower from "../videos/shower.mp4";
import React from "react";

export const BackgroundChocolateShower = () => {
  return (
      <video autoPlay loop muted id="bg-video">
        <source src={chocolateShower} type="video/mp4" />
      </video>
  );
};
