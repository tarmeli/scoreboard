import React from "react";
import Map from "../../Utility/Map/Map";
import availableRoutes from "../../../routes/availableRoutes";
import NavigationItem from "./NavigationItem";
import Ul from "../../Element/List/Ul/Ul";

const NavigationItemList = () => (
    <Ul>
        <Map items={availableRoutes}>
            {({ name, route, description }) => (
                <NavigationItem
                    name={name}
                    href={route}
                    description={description}
                />
            )}
        </Map>
    </Ul>
);

export default NavigationItemList;
