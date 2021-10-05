import React from "react";
import Element from "../Element";

const Table = ({ className, children, ...props }) => (
    <Element tagName="table" className={className} {...props}>
        {children}
    </Element>
);

export default Table;
