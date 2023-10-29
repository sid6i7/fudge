import React from 'react'
import { BackgroundChocolateShower } from "../components/BackgroundChocolateShower";
import { Link } from 'react-router-dom';
export const Banner = () => {
  return (
    <>
    <BackgroundChocolateShower />
      <div id="banner-info">
        <h1 id="banner-info--greet">
          Make More Moments <br/>
          of Goodness
          </h1>
        <span id="banner-info--details">
          Indulge in a heaven of chocolates and cakes to satisfy your cravings with our collections!
          <br/>
          Our collections range from a wide variety of chocolates,  fudges, muffins and much more.
        </span>
        <button id="banner-btn">
          <Link to="/shop" style={{textDecoration: "none", color: "white"}}>
          Shop now -&gt;
          </Link>
        </button>
      </div>
      </>
  )
}
