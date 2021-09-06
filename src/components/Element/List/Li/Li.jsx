import React from "react";
import Element from "../../Element";

const Li = ({ className, children, ...props }) => (
    <Element tagName="li" className={className} {...props}>
        {children}
    </Element>
);

export default Li;
