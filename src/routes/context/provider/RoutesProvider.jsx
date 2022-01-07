import React, { createContext, useContext, useEffect, useState } from "react";
import routesModel from "../../model/routesModel";

export const RoutesContext = createContext({ routes: [] });

export const dependencies = {
  routesModel,
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
