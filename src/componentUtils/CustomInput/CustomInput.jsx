import React from "react";

const CustomInput = ({ placeholder, callback, className, onKeyDown }) => {
  return (
    <>
      <input
        className={className && className.map((style) => style)}
        onChange={callback}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
