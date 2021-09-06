import React from "react";
import Element from "../Element";

const A = ({ className, children, ...props }) => (
    <Element tagName="a" className={className} {...props}>
        {children}
    </Element>
);

export default A;
