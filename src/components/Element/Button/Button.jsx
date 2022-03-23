import React from "react";
import Element from "../Element";

import styles from "./Button.module.scss";

const Button = ({ className, children, ...props }) => {
  const classNames = [styles.button, className];

  return (
    <Element tagName="button" className={classNames} {...props}>
      {children}
    </Element>
  );
};

export default Button;
