import React from "react";
import "./button.css";

const Button = ({ disabled, children }) => {
  // Kalau props tidak di destructure di parameter, tidak akan
  // muncul suggestion props ketika component dipanggil

  return (
    <div className={`myBtn ${disabled ? "disabledBtn" : null}`}>{children}</div>
  );
};

export default Button;
