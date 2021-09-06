import React from "react";
import Element from "../Element";

const Nav = ({ className, children, ...props }) => (
    <Element tagName="nav" className={className} {...props}>
        {children}
    </Element>
);

export default Nav;
