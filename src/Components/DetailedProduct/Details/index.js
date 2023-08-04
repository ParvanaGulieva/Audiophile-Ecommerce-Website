import React, { useState } from "react";
import StyledDetails from "./style";
import Button from "../../../Components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const Details = ({ selectedProduct }) => {
  const [num, setNum] = useState(1);
  const formattedPrice = (selectedProduct.price * num).toLocaleString();

  const [isClicked, setIsClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: selectedProduct.id,
        title: selectedProduct.name,
        image: selectedProduct.image,
        price: selectedProduct.price,
        quantity: num,
      })
    );

    setIsClicked(true);
    setButtonText("Added");

    setTimeout(() => {
      setIsClicked(false);
      setButtonText("Add to cart");
    }, 2500);
  };

  return (
    <StyledDetails>
      <div className="image">
        <picture>
          <source
            media="(max-width:1080px)"
            srcSet={selectedProduct.image.tablet.slice(1)}
          />
          <source
            media="(max-width:720px"
            srcSet={selectedProduct.image.mobile.slice(1)}
          />
          <img
            className="product"
            src={selectedProduct.image.desktop.slice(1)}
            alt="product"
          />
        </picture>
      </div>
      <div className="details">
        {selectedProduct.new && <p className="overline">NEW PRODUCT</p>}
        <h2 style={{ marginBottom: "1.6rem" }}>{selectedProduct.name}</h2>
        <p className="text">{selectedProduct.description}</p>
        <h6>$ {formattedPrice}</h6>
        <div className="btn-container">
          <div className="quantity-container">
            <div
              className="value-button"
              id="decrease"
              onClick={() => setNum((prevNum) => Math.max(prevNum - 1, 1))}
            >
              -
            </div>
            <input type="number" id="number" value={num} readOnly />
            <div
              className="value-button"
              id="increase"
              onClick={() => setNum((prevNum) => prevNum + 1)}
            >
              +
            </div>
          </div>
          <Button
            className={isClicked ? "type1 success" : "type1"}
            text={buttonText}
            onClick={handleAddToCart}
            isClicked={isClicked}
          />
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
