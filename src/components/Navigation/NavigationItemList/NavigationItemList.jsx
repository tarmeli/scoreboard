import React from "react";
import NavigationItem from "./NavigationItem";
import Ul from "../../Element/List/Ul/Ul";
import Map from "../../utils/Map/Map";
import RoutesHook from "../../../routes/context/hook/RoutesHook";

const NavigationItemList = () => (
  <Ul>
    <RoutesHook>
      {({ routes }) => (
        <Map items={routes}>
          {({ name, route, description }) => (
            <NavigationItem
              name={name}
              href={route}
              description={description}
            />
          )}
        </Map>
      )}
    </RoutesHook>
  </Ul>
);

export default NavigationItemList;
