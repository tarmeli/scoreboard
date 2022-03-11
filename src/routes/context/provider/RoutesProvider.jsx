import React, { createContext, useContext, useEffect, useState } from "react";
import { availableRoutes } from "../../routes-configuration";

export const RoutesContext = createContext({ routes: [] });

export const dependencies = {
  routesModel: availableRoutes,
};

const RoutesProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(dependencies.routesModel);
  });

  return (
    <RoutesContext.Provider value={{ routes }}>
      {children}
    </RoutesContext.Provider>
  );
};

export const useRoutes = () => useContext(RoutesContext);

export default RoutesProvider;
