import React from "react";
import Element from "../Element";

const Input = ({ className, onChange, children, ...props }) => {
  const onNativeChange = ({ target: { value } }) => onChange(value);

  return (
    <Element
      tagName="input"
      onChange={onNativeChange}
      className={className}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Input;
