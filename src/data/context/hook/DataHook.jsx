import React from "react";
import { useData } from "../provider/DataProvider";
import LoadingTentative from "../../../components/LoadingTentative/LoadingTentative";
import ErrorTentative from "../../../components/ErrorTentative/ErrorTentative";

const DataHook = ({ children: toChild }) => {
  const {
    data,
    isLoading,
    error: { isError, message },
    callApiFor,
  } = useData();

  return (
    <LoadingTentative isLoading={isLoading}>
      <ErrorTentative isError={isError} message={message}>
        {toChild({ data, callApiFor })}
      </ErrorTentative>
    </LoadingTentative>
  );
};

export default DataHook;
