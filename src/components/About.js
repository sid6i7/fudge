import React from "react";
import aboutFudge from "../images/chocolate_vertical.jpg";

export const About = () => {
  return (
    <div id="container-about">
      <img src={aboutFudge} id="about-img" />
      <div id="container-about--info">
        <h1 id="container-about--info-title">About Us</h1>
        <hr style={{ borderColor: "black" }} />
        <div id="container-about--info--content">
          At Fudge, we are passionate about the art of chocolate-making.
          <br />
          <br />
          Our journey began with a simple belief - that every sweet moment
          should be celebrated with the finest chocolates. With a legacy of
          crafting delectable treats that spans decades, we've perfected the art
          of creating pure indulgence.
        </div>
      </div>
    </div>
  );
};
