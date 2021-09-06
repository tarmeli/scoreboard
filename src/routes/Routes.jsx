import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import availableRoutes from "./availableRoutes";
import Map from "../components/Utility/Map/Map";

const Routes = () => (
    <Switch>
        <Map items={availableRoutes}>
            {({ screenComponent, screen: Screen = screenComponent, route }) => (
                <Route exact path={route}>
                    <Screen route={route} />
                </Route>
            )}
        </Map>

        <Redirect to="/" />
    </Switch>
);

export default Routes;
