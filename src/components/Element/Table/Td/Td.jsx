import React from "react";
import Element from "../../Element";

const Td = ({ className, children, ...props }) => (
    <Element tagName="td" className={className} {...props}>
        {children}
    </Element>
);

export default Td;
