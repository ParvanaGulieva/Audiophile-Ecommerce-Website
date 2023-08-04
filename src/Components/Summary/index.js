import React, { useState, useEffect } from "react";
import StyledSummary from "./style";
import Button from "../../Components/Button";

const Summary = ({
  getTotalPrice,
  cart,
  grandTotal,
  setShowConfirmation,
  errors,
  touched,
  selectedPayment,
}) => {
  const shipping = 11.55;

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
      setIsButtonDisabled(false);
    }
  }, [errors]);

  const handleSubmit = () => {
    if (Object.keys(errors).length === 0) {
      setShowConfirmation(true);
    }
  };

  return (
    <StyledSummary>
      <h6 className="summary">Summary</h6>
      <div className="summaryElements">
        {cart.map((item, index) => (
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
      </div>
      <div className="prices">
        <div className="price total">
          <p>TOTAL</p>
          <h6>$ {getTotalPrice().toLocaleString()}</h6>
        </div>
        <div className="price shipping">
          <p>SHIPPING</p>
          <h6>$ {shipping.toLocaleString()}</h6>
        </div>
        <div className="price vat">
          <p>VAT (INCLUDED)</p>
          <h6>$ {getTotalPrice().toLocaleString()}</h6>
        </div>
        <div className="price grandTotal">
          <p>GRAND TOTAL</p>
          <h6>$ {grandTotal}</h6>
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isButtonDisabled}
        type="submit"
        className="type1"
        text="Continue&Pay"
        style={{ width: "100%", marginTop: "3.2rem" }}
      />
    </StyledSummary>
  );
};

export default Summary;
