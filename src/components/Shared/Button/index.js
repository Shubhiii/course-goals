import React from "react";
import "./index.css";

const Button = ({ type, onClick, children, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
