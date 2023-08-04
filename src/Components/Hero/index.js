import React from "react";
import { Link } from "react-router-dom";
import StyleHero from "./style";
import Navbar from "../Navbar";
import Button from "../Button";

const Hero = ({ openCart, setOpenCart }) => {
  return (
    <StyleHero>
      <div className="nav">
        <Navbar openCart={openCart} setOpenCart={setOpenCart} />
      </div>
      <div className="content">
        <p className="overline">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/product/4">
          <Button
            className="type1"
            text="See product"
            style={{ marginTop: "1.6rem" }}
          />
        </Link>
      </div>
    </StyleHero>
  );
};

export default Hero;
