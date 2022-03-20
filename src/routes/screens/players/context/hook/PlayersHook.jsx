import React from "react";
import { usePlayers } from "../provider/PlayersProvider";
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
    handleNewPlayerNameChange,
    submitNewPlayerButtonIsDisabled,
  } = usePlayers();

  return (
    <ErrorTentative isError={isError} message={message}>
      {toChild({
        data,
        isLoading,
        handleDecrementWins,
        handleIncrementWins,
        handleDecrementLosses,
        handleIncrementLosses,
        handleAddNewPlayer,
        handleRemovePlayer,
        newPlayerNameInputValue,
        handleNewPlayerNameChange,
        submitNewPlayerButtonIsDisabled,
      })}
    </ErrorTentative>
  );
};

export default PlayersHook;
