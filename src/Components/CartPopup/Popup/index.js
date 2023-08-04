import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StyledPopup from "./style";
import CartPopupElement from "../CartElement";
import Button from "../../Button";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/CartSlice";

const Popup = ({ setOpenCart }) => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const popupRef = useRef();
  const dispatch = useDispatch();

  const handleCloseModal = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      handleCloseModal(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckout = () => {
    setOpenCart(false);
  };

  const handleClearCart = (event) => {
    event.preventDefault();
    dispatch(clearCart());
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total.toLocaleString();
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString();
  };

  return (
    <StyledPopup>
      <div className="popup" ref={popupRef}>
        {cart.length === 0 ? (
          <div className="emptyContent">
            <img src="/assets/cart.svg" alt="" />
            <h6>Your cart is currently empty</h6>
            <p>
              Before proceed to checkout, you must add some products to your
              cart. You will find a lot of interesting products on our pages.
            </p>
            <Link onClick={handleCheckout}>
              <Button
                className="type1"
                text="Return to shop"
                style={{ width: "100%" }}
              />
            </Link>
          </div>
        ) : (
          <>
            <div className="top">
              <h6>cart ({getTotalQuantity()})</h6>

              <a className="remove" href="" onClick={handleClearCart}>
                Remove all
              </a>
            </div>
            <div className="inner-content">
              {cart.map((item, index) => (
                // console.log(item.quantity)
                <CartPopupElement
                  id={item.id}
                  key={index}
                  name={item.title}
                  price={item.price}
                  picture={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="total">
              <p>TOTAL</p>
              <h6>$ {getTotalPrice()}</h6>
            </div>
            <Link to="/checkout" onClick={handleCheckout}>
              <Button
                className="type1"
                text="Checkout"
                style={{ width: "100%" }}
              />
            </Link>
          </>
        )}
      </div>
    </StyledPopup>
  );
};

export default Popup;
