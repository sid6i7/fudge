import React from "react";
import banner from "../images/shop_banner.jpg";
import { ShopCategory } from "../components/ShopCategory";
import {chocolateBars} from '../data/shopChocolateBars';
import {truffles} from '../data/shopTruffles';

export const FeaturedPage = () => {
  return (
    <div id="featured-container">
      <img src={banner} id="shop--banner" />
      <div id="shop--banner-container">
        <h1 id="banner--info-title">
        Chocolates Crafted With Superior Sourced Ingredients
        </h1>
        <p id="banner--info-content">
          Shop all chocolate collections including our signature & bestselling
          Exotic Truffle Collections, Chocolate Comfort Food Cravings, Chocolate
          Bars, Gift Sets, and our Newest Collections.{" "}
        </p>
      </div>
      <ShopCategory category={chocolateBars}/>
      <ShopCategory category={truffles}/>
    </div>
  );
};
