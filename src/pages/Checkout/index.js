import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import StyledCheckout from "./style";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/UI/Footer";
import CheckoutComponent from "../../Components/Checkout";
import Summary from "../../Components/Summary";
import createCheckoutSchema from "../../Validation/CheckoutValidation";
import Confirmation from "../../Components/Confirmation";

const Checkout = ({ openCart, setOpenCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const cart = useSelector((state) => state.cart);
  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [validationSchema, setValidationSchema] =
    useState(createCheckoutSchema);

  useEffect(() => {
    const updatedValidationSchema = createCheckoutSchema;
    setValidationSchema(updatedValidationSchema);
  }, [selectedPayment]);

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: "",
        address: "",
        zipCode: "",
        emoneyNumber: "",
        emoneyPIN: "",
        selectedPayment: null,
      },

      validationSchema: validationSchema,
      onSubmit,
      enableReinitialize: true,
    });

  console.log(values);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Audiophile | Checkout";
  }, []);

  const shipping = 11.55;

  const grandTotal = (getTotalPrice() + shipping).toLocaleString();

  return (
    <StyledCheckout onSubmit={handleSubmit}>
      <Navbar
        style={{ backgroundColor: "#000" }}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <div className="content">
        <p className="link" onClick={() => navigate(-1)}>
          Go back
        </p>
        <div className="checkout">
          <CheckoutComponent
            values={values}
            handleChange={handleChange}
            errors={errors}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            cart={cart}
            handleBlur={handleBlur}
          />
          <Summary
            handleSubmit={handleSubmit}
            getTotalPrice={getTotalPrice}
            cart={cart}
            grandTotal={grandTotal}
            setShowConfirmation={setShowConfirmation}
            errors={errors}
            touched={touched}
            selectedPayment={selectedPayment}
          />
        </div>
      </div>
      {showConfirmation === true && Object.keys(errors).length === 0 && (
        <Confirmation
          getTotalPrice={getTotalPrice}
          grandTotal={grandTotal}
          cart={cart}
        />
      )}
      <Footer />
    </StyledCheckout>
  );
};

export default Checkout;
