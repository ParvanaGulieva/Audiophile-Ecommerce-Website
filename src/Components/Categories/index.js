import React from "react";
import StyleRecommended from "./style";
import Button from "../Button";
import { Link } from "react-router-dom";
import btnIcon from "../../btn-icon.svg";

const Categories = ({ style }) => {
  return (
    <StyleRecommended style={style}>
      <div className="categoryCard">
        <div className="product">
          <div className="image">
            <picture>
              <source
                media="(max-width:1080px)"
                srcSet="/assets/home/tablet/headphone-preview(41).svg"
              />
              <source
                media="(max-width:480px)"
                srcSet="/assets/home/mobile/headphone-preview(41).svg"
              />
              <img
                className="headphone"
                src="/assets/home/desktop/headphone-preview(41).svg"
                alt="headphone"
              />
            </picture>
          </div>
          <div className="shadow"></div>
        </div>
        <h6 style={{ textAlign: "center" }}>HEADPHONES</h6>
        <Link to="/headphones">
          <Button text="Shop" className="type3">
            <img src={btnIcon} alt="" />
          </Button>
        </Link>
      </div>
      <div className="categoryCard">
        <div className="product">
          <div className="image">
            <picture>
              <source
                media="(max-width:1080px)"
                srcSet="/assets/home/tablet/speaker-preview(38).svg"
              />
              <source
                media="(max-width:480px)"
                srcSet="/assets/home/mobile/speaker-preview(38).svg"
              />
              <img
                className="headphone"
                src="/assets/home/desktop/speaker-preview(38).svg"
                alt="headphone"
              />
            </picture>
          </div>
          <div className="shadow"></div>
        </div>
        <h6 style={{ textAlign: "center" }}>SPEAKERS</h6>
        <Link to="/speakers">
          <Button text="Shop" className="type3">
            <img src={btnIcon} alt="" />
          </Button>
        </Link>
      </div>
      <div className="categoryCard">
        <div className="product earphone">
          <div className="image">
            <picture>
              <source
                media="(max-width:1080px)"
                srcSet="/assets/home/tablet/earphone-preview.svg"
              />
              <source
                media="(max-width:480px)"
                srcSet="/assets/home/mobile/earphone-preview.svg"
              />
              <img
                className="headphone"
                src="/assets/home/desktop/earphone-preview.svg"
                alt="headphone"
              />
            </picture>
          </div>
          <div className="shadow"></div>
        </div>
        <h6 style={{ textAlign: "center" }}>EARPHONES</h6>
        <Link to="/earphones">
          <Button text="Shop" className="type3">
            <img src={btnIcon} alt="" />
          </Button>
        </Link>
      </div>
    </StyleRecommended>
  );
};

export default Categories;
