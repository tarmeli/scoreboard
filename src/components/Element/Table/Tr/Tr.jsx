import React from "react";
import Element from "../../Element";

const Tr = ({ className, children, ...props }) => (
    <Element tagName="tr" className={className} {...props}>
        {children}
    </Element>
);

export default Tr;
