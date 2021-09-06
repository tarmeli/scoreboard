import React from "react";
import Element from "../../Element";

const Ol = ({ className, children, ...props }) => (
    <Element tagName="ol" className={className} {...props}>
        {children}
    </Element>
);

export default Ol;
