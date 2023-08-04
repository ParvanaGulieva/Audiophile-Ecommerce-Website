import React from "react";
import StyleFooter from "./style";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="linkContainer">
        <img src="/assets/logo.svg" alt="logo" />
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/headphones">HEADPHONES</NavLink>
          </li>
          <li>
            <NavLink to="/speakers">SPEAKERS</NavLink>
          </li>
          <li>
            <NavLink to="/earphones">EARPHONES</NavLink>
          </li>
        </ul>
      </div>
      <div className="footerGrid">
        <div className="desc">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="socialMedia">
          <a href="https://www.facebook.com/">
            <img src="/assets/facebook.svg" alt="facebook" />
          </a>

          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F">
            <img src="/assets/twitter.svg" alt="twitter" />
          </a>

          <a href="https://www.instagram.com/">
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="copyright">
          <p style={{ fontWeight: 700 }}>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;
