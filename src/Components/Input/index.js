import React from "react";
import StyledInput from "./style";

const Input = ({
  placeholder,
  type,
  label,
  className,
  name,
  onChange,
  value,
  message,
  onBlur,
}) => {
  return (
    <StyledInput className={className}>
      <div className="labelError">
        <label htmlFor={type}>{label}</label>
        {className && <p className="message">{message}</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledInput>
  );
};

export default Input;
