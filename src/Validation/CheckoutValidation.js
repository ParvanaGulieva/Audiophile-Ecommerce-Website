import * as yup from "yup";

const createCheckoutSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .number()
    .required("Number is required")
    .max(1111111111, "Maximum 10 character"),
  address: yup.string().required("Address is required"),
  zipCode: yup.number().required("Zip Code is required"),
  city: yup.string(),
  country: yup.string(),
  selectedPayment: yup.string().required("Please select a payment method"),
  emoneyNumber: yup.string().when("selectedPayment", {
    is: "e-money",
    then: () => yup.string().required("Number is required"),
  }),
  emoneyPIN: yup.string().when("selectedPayment", {
    is: "e-money",
    then: () => yup.string().required("PIN is required"),
  }),
});

export default createCheckoutSchema;
