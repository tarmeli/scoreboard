import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DataProvider from "../data/context/provider/DataProvider";
import DataHook from "../data/context/hook/DataHook";
import RoutesHook from "./context/hook/RoutesHook";
import Map from "../components/utils/Map/Map";

const Routes = () => (
  <Switch>
    <RoutesHook>
      {({ routes }) => (
        <Map items={routes}>
          {({ Screen, route }) => (
            <Route exact path={route}>
              <DataProvider route={route}>
                <DataHook>{(props) => <Screen {...props} />}</DataHook>
              </DataProvider>
            </Route>
          )}
        </Map>
      )}
    </RoutesHook>

    <Redirect to="/" />
  </Switch>
);

export default Routes;
