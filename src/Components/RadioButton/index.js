import React from "react";
import StyledRadioButton from "./style";

const RadioButton = ({ label, id, onChange, checked, name, value }) => {
  return (
    <StyledRadioButton>
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </StyledRadioButton>
  );
};

export default RadioButton;
