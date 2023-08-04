import React, { useState } from "react";
import "react-phone-number-input/style.css";
import StyledCheckout from "./style";
import Input from "../Input";
import RadioButton from "../RadioButton";

const Checkout = ({
  values,
  handleChange,
  errors,
  selectedPayment,
  setSelectedPayment,
  handleBlur,
}) => {
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
    handleChange(event);
  };

  return (
    <StyledCheckout>
      <h3>CHECKOUT</h3>
      <div className="billing">
        <p className="subtitle">billing details</p>
        <div className="inputs">
          <Input
            type="text"
            placeholder="Insert your name"
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
            message={errors.name}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="alexei@mail.com"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            message={errors.email}
            onBlur={handleBlur}
          />

          <Input
            type="number"
            placeholder="050 987 54 23"
            label="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? "error" : ""}
            message={errors.phoneNumber}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="shipping">
        <p className="subtitle">shipping info</p>
        <div className="inputs">
          <Input
            type="text"
            placeholder="1137 Williams Avenue"
            label="Your Address"
            name="address"
            value={values.address}
            onChange={handleChange}
            className={errors.address ? "error" : ""}
            message={errors.address}
            onBlur={handleBlur}
          />
          <Input
            type="number"
            placeholder="10001"
            label="ZIP Code"
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            className={errors.zipCode ? "error" : ""}
            message={errors.zipCode}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="New York"
            label="City"
            name="city"
            value={values.city}
            onChange={handleChange}
            className={errors.city ? "error" : ""}
            message={errors.city}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="United States"
            label="Country"
            name="country"
            value={values.country}
            onChange={handleChange}
            className={errors.country ? "error" : ""}
            message={errors.country}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div className="payment">
        <p className="subtitle">shipping info</p>
        <div className="shipping-selection">
          <label>Payment Method</label>
          <div className="radio-container">
            <RadioButton
              label="E-Money"
              id="e-money"
              onChange={handlePaymentChange}
              checked={selectedPayment === "e-money"}
              name="selectedPayment"
              value="e-money"
            />
            <RadioButton
              label="Cash on Delivery"
              id="cash"
              onChange={handlePaymentChange}
              checked={selectedPayment === "cash"}
              name="selectedPayment"
              value="cash"
            />
          </div>
        </div>
        {selectedPayment === "e-money" && (
          <div className="e-money">
            <Input
              type="number"
              placeholder="238521993"
              label="e-Money Number"
              name="emoneyNumber"
              value={values.emoneyNumber}
              onChange={handleChange}
              className={errors.emoneyNumber ? "error" : ""}
              message={errors.emoneyNumber}
              onBlur={handleBlur}
            />
            <Input
              type="number"
              placeholder="3532"
              label="e-Money PIN"
              name="emoneyPIN"
              value={values.emoneyPIN}
              onChange={handleChange}
              className={errors.emoneyPIN ? "error" : ""}
              message={errors.emoneyPIN}
              onBlur={handleBlur}
            />
          </div>
        )}

        {selectedPayment === "cash" && (
          <div className="delivery">
            <img
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="onDelivery"
            />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </StyledCheckout>
  );
};

export default Checkout;
