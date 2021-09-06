import React from "react";
import Element from "../Element";

const Div = ({ className, children, ...props }) => (
    <Element tagName="div" className={className} {...props}>
        {children}
    </Element>
);

export default Div;
