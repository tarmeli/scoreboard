import React from "react";
import Element from "../../Element";

const Thead = ({ className, children, ...props }) => (
    <Element tagName="thead" className={className} {...props}>
        {children}
    </Element>
);

export default Thead;
