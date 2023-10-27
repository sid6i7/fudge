import React from "react";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { About } from "../components/About";

export const HomePage = () => {
  return (
    <div id="home-container">
      <Banner/>
      <Categories/>
      <About/>
    </div>
  );
};