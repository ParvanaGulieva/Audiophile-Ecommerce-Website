import React from "react";
import StyledGallery from "./style";

const Gallery = ({ selectedProduct }) => {
  return (
    <StyledGallery>
      <div className="img1">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet={selectedProduct.gallery.first.tablet.slice(1)}
          />
          <source
            media="(max-width:480px"
            srcSet={selectedProduct.gallery.first.mobile.slice(1)}
          />
          <img
            className="product"
            src={selectedProduct.gallery.first.desktop.slice(1)}
            alt="product"
          />
        </picture>
      </div>
      <div className="img2">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet={selectedProduct.gallery.second.tablet.slice(1)}
          />
          <source
            media="(max-width:480px"
            srcSet={selectedProduct.gallery.second.mobile.slice(1)}
          />
          <img
            className="product"
            src={selectedProduct.gallery.second.desktop.slice(1)}
            alt="product"
          />
        </picture>
      </div>
      <div className="img3">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet={selectedProduct.gallery.third.tablet.slice(1)}
          />
          <source
            media="(max-width:480px"
            srcSet={selectedProduct.gallery.third.mobile.slice(1)}
          />
          <img
            className="product"
            src={selectedProduct.gallery.third.desktop.slice(1)}
            alt="product"
          />
        </picture>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
