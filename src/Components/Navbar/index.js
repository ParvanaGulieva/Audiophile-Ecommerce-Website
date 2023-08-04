import React, { useState, useEffect, useRef } from "react";
import StyleNavbar from "./style";
import { NavLink } from "react-router-dom";
import Popup from "../CartPopup/Popup";
import Categories from "../Categories";
import { useSelector } from "react-redux";

const Navbar = ({ style, setOpenCart, openCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total.toLocaleString();
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // Click occurred outside the menu, so close the menu
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <StyleNavbar
        style={style}
        className={isMenuOpen ? "openMenu" : ""}
        ref={menuRef}
      >
        <img
          className="menu"
          src="/assets/menu.svg"
          alt="menu"
          onClick={handleMenuToggle}
        />
        <img className="logo" src="/assets/logo.svg" alt="logo" />
        <div className="linkContainer">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/headphones"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/speakers"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/earphones"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="cart-container"
          onClick={() => {
            setOpenCart(!openCart);
          }}
        >
          {cart.length !== 0 && (
            <div className="cartQuantity">{getTotalQuantity()}</div>
          )}
          <img src="/assets/cart.svg" alt="cart" className="cart" />
        </div>
      </StyleNavbar>
      <div
        className="border"
        style={{
          height: "0.08rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      ></div>
      {openCart && <Popup setOpenCart={setOpenCart} />}
      {isMenuOpen && (
        <div className="menuCategory">
          <Categories style={{ marginTop: "-9rem", marginBottom: "-18rem" }} />
        </div>
      )}
    </>
  );
};

export default Navbar;
