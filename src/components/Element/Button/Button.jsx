import React from "react";
import Element from "../Element";

const Button = ({ className, children, ...props }) => (
    <Element tagName="button" className={className} {...props}>
        {children}
    </Element>
);

export default Button;
