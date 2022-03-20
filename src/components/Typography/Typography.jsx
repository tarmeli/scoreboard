import React from "react";
import styles from "./Typography.module.scss";
import { Div } from "../Element/";

const Typography = ({ children, ...props }) => {
  const classNames = [styles.typography];

  return (
    <Div className={classNames} {...props}>
      {children}
    </Div>
  );
};

export default Typography;
