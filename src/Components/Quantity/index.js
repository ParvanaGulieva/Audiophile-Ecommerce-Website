import React from "react";
import StyledQuantity from "./style";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const Quantity = ({ quantity, id }) => {
  // console.log(id);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // console.log("Incrementing quantity");
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    // console.log("Decrementing quantity");
    dispatch(decrementQuantity(id));
  };

  return (
    <StyledQuantity>
      <div className="value-button" id="decrease" onClick={handleDecrement}>
        -
      </div>
      <input
        type="number"
        id="number"
        value={quantity}
        // onChange={handleChange}
        readOnly
      />
      <div className="value-button" id="increase" onClick={handleIncrement}>
        +
      </div>
    </StyledQuantity>
  );
};

export default Quantity;
