import React from "react";
import Li from "../../Element/List/Li/Li";
import { Link } from "react-router-dom";

const NavigationItem = ({ href, description, name }) => (
    <Li>
        <Link to={href} alt={description}>
            {name}
        </Link>
    </Li>
);

export default NavigationItem;
