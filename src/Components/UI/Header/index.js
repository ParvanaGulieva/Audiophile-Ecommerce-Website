import React from "react";
import StyledHeader from "./style";
import Navbar from "../../Navbar";

const Header = ({ openCart, setOpenCart, title }) => {
  return (
    <StyledHeader>
      <Navbar openCart={openCart} setOpenCart={setOpenCart} />
      <h2>{title}</h2>
    </StyledHeader>
  );
};

export default Header;
