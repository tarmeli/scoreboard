import React from "react";
import Element from "../../Element";

const Th = ({ className, children, ...props }) => (
    <Element tagName="th" className={className} {...props}>
        {children}
    </Element>
);

export default Th;
