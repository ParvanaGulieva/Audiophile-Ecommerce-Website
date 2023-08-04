import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledConfirmation from "./style";
import Button from "../Button";
import confirm from "../../icon-order-confirmation.svg";

const Confirmation = ({ grandTotal, cart }) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleButton = () => {
    setShowAllItems((prevShowAllItems) => !prevShowAllItems);
  };

  const itemsToShow = showAllItems ? cart : [cart[0]];

  return (
    <StyledConfirmation>
      <div className="content">
        <img src={confirm} alt="confirm" />
        <h3>THANK YOU FOR YOUR ORDER</h3>
        <p>You will receive an email confirmation shortly.</p>
        <div className="order">
          <div className="items">
            {itemsToShow.map((item, index) => (
              <div className="element" key={index}>
                <div className="details">
                  <div className="image">
                    <img src={item.image.mobile} alt="cartproduct" />
                  </div>
                  <div className="text">
                    <p className="title">
                      {item.title.split(" ").slice(0, -1).join(" ")}
                    </p>
                    <p className="price">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="quantity">x {item.quantity}</p>
              </div>
            ))}

            {cart.length >= 2 && (
              <>
                {showAllItems ? (
                  <>
                    <div className="seperator"></div>
                    <div className="showLess" onClick={toggleButton}>
                      Show less
                    </div>
                  </>
                ) : (
                  <>
                    <div className="seperator"></div>
                    <div className="showMore" onClick={toggleButton}>
                      and {cart.length - 1} other item(s)
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="total">
            <p>GRAND TOTAL</p>
            <h6>$ {grandTotal}</h6>
          </div>
        </div>
        <Link to="/">
          <Button
            className="type1"
            text="back to home"
            style={{ width: "100%" }}
          />
        </Link>
      </div>
    </StyledConfirmation>
  );
};

export default Confirmation;
