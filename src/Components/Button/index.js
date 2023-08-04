import React from "react";

const Button = ({
  className,
  style,
  text,
  onClick,
  isClicked,
  children,
  type,
  disabled,
}) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className={isClicked ? "btn-text" : ""}>{text}</div>
      {children}
    </button>
  );
};

export default Button;
