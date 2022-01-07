import React, { createContext, useContext, useEffect, useState } from "react";
import callApi from "../../utils/callApi/callApi";
import { dataModel } from "../../model/dataModel";

const DataContext = createContext({
  data: dataModel,
  isLoading: false,
  error: { isError: false, message: "" },
  callApiFor: () => {},
});

export const dependencies = {
  callApi,
};

const DataProvider = ({ route, children }) => {
  const [data, setData] = useState(dataModel);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const callApiFor = async (route, method) => {
    const { callWasSuccessful, data, error } = await dependencies.callApi(
      route,
      method
    );

    if (callWasSuccessful) {
      setData(data);
    } else {
      setError({
        isError: true,
        message: `${route} API call was not successful, because of ${error}`,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    callApiFor(route).then(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error, callApiFor }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
