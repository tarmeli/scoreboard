import React from "react";
import Element from "../../Element";

const Ul = ({ className, children, ...props }) => (
    <Element tagName="ul" className={className} {...props}>
        {children}
    </Element>
);

export default Ul;
