import React from "react";
import { Link } from "react-router-dom";
import StyledBanner from "./style";
import Button from "../Button";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="ZX9-speaker">
        <div className="content">
          <picture>
            <source
              media="(max-width:1080px)"
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
            />
            <source
              media="(max-width:480px"
              srcSet="/assets/home/mobile/image-speaker-zx9.png"
            />
            <img
              className="speaker"
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker"
            />
          </picture>
          <div className="content-text">
            <h1 style={{ color: "#fff" }}>ZX9 SPEAKER</h1>
            <p style={{ color: "#fff", opacity: "0.75" }}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/product/6">
              <Button className="type4" text="See product" />
            </Link>
          </div>
        </div>
      </div>
      <div className="ZX7-speaker">
        <h4 style={{ marginBottom: "3.2rem" }}>ZX7 SPEAKER</h4>
        <Link to="/product/5">
          <Button className="type2" text="See product" />
        </Link>
      </div>
      <div className="image">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <source
            media="(max-width:480px"
            srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
          />
          <img
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphone"
          />
        </picture>
      </div>
      <div className="YX1-earphone">
        <h4 style={{ marginBottom: "3.2rem" }}>YX1 EARPHONES</h4>
        <Link to="/product/1">
          <Button className="type2" text="See product" />
        </Link>
      </div>
    </StyledBanner>
  );
};

export default Banner;
