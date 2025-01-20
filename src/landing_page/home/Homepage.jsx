import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import TopNav from "../TopNav";
import Footer from "../Footer";

function Homepage() {
  return (
    <div>
      <TopNav></TopNav>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Education></Education>
      <OpenAccount></OpenAccount>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
