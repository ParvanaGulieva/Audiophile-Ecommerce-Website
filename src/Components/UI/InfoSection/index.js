import React from "react";
import StyleInfoSection from "./style";

const InfoSection = () => {
  return (
    <StyleInfoSection>
      <div className="text">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="image">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <source
            media="(max-width:480px"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
          />
          <img src="/assets/shared/desktop/image-best-gear.jpg" alt="info" />
        </picture>
      </div>
    </StyleInfoSection>
  );
};

export default InfoSection;
