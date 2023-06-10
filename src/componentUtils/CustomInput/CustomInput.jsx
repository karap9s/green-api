import React from "react";
import styles from "./customInput.module.css";

const CustomInput = ({ placeholder, callback, className, onKeyDown }) => {
  return (
    <>
      <input
        className={`${styles.input} ${
          className && className.map((style) => style)
        }`}
        onChange={callback}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
