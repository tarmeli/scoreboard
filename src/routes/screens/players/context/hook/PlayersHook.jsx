import React from "react";
import { usePlayers } from "../provider/PlayersProvider";
import LoadingTentative from "../../../../../components/LoadingTentative/LoadingTentative";
import ErrorTentative from "../../../../../components/ErrorTentative/ErrorTentative";

const PlayersHook = ({ children: toChild }) => {
  const {
    data,
    isLoading,
    error: { isError, message },
    handleDecrementWins,
    handleIncrementWins,
    handleDecrementLosses,
    handleIncrementLosses,
    handleAddNewPlayer,
    handleRemovePlayer,
    newPlayerNameInputValue,
    setNewPlayerNameInputValue,
  } = usePlayers();

  return (
    <LoadingTentative isLoading={isLoading}>
      <ErrorTentative isError={isError} message={message}>
        {toChild({
          data,
          handleDecrementWins,
          handleIncrementWins,
          handleDecrementLosses,
          handleIncrementLosses,
          handleAddNewPlayer,
          handleRemovePlayer,
          newPlayerNameInputValue,
          setNewPlayerNameInputValue,
        })}
      </ErrorTentative>
    </LoadingTentative>
  );
};

export default PlayersHook;
