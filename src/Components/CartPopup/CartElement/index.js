import React, { useState, useEffect } from "react";
import StyledCartPopupElement from "./style";
import Quantity from "../../Quantity";

const CartPopupElement = ({ id, name, price, picture, quantity }) => {
  const [formattedPrice, setFormattedPrice] = useState(
    (price * quantity).toLocaleString()
  );

  useEffect(() => {
    setFormattedPrice((price * quantity).toLocaleString());
  }, [price, quantity]);

  return (
    <StyledCartPopupElement>
      <div className="details">
        <div className="image">
          <img src={picture.desktop.slice(1)} alt={name} />
        </div>
        <div className="text">
          <p className="title">{name.split(" ").slice(0, -1).join(" ")}</p>
          <p className="price">$ {formattedPrice}</p>
        </div>
      </div>
      <div className="quantity">
        <Quantity quantity={quantity} id={id} />
      </div>
    </StyledCartPopupElement>
  );
};

export default CartPopupElement;
