import React from "react";
import Element from "../../Element";

const Tbody = ({ className, children, ...props }) => (
    <Element tagName="tbody" className={className} {...props}>
        {children}
    </Element>
);

export default Tbody;
