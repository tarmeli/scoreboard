import React, { createContext, useContext, useEffect, useState } from "react";
import callApi from "../../utils/callApi/callApi";
import { dataConfiguration } from "../../data-configuration";

const DataContext = createContext({
  data: dataConfiguration,
  isLoading: false,
  error: { isError: false, message: "" },
  doApiCall: () => {},
});

export const dependencies = {
  callApi,
};

const DataProvider = ({ route, children }) => {
  const [data, setData] = useState(dataConfiguration);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const doApiCall = async (route, method) => {
    const {
      callWasSuccessful,
      data,
      error: { isError, message },
    } = await dependencies.callApi(route, method);

    if (callWasSuccessful) {
      setData(data);
    } else {
      setError({
        isError,
        message: `${route} API call was not successful, because of ${message}`,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);

    doApiCall(route).then(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error, doApiCall }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
