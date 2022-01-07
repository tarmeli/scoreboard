import React, { createContext, useContext, useState } from "react";
import { useData } from "../../../../../data/context/provider/DataProvider";

const PlayersContext = createContext({
  handleDecrementWins: () => {},
  handleIncrementWins: () => {},
  handleDecrementLosses: () => {},
  handleIncrementLosses: () => {},
  handleAddNewPlayer: () => {},
  handleRemovePlayer: () => {},
  isLoading: false,
  error: {
    isError: false,
    message: "",
  },
  newPlayerNameInputValue: "",
  setNewPlayerNameInputValue: () => {},
});

const PlayersProvider = ({ children }) => {
  const [newPlayerNameInputValue, setNewPlayerNameInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const { callApiFor } = useData();

  const doApiCall = async (apiCall, method) => {
    setIsLoading(true);

    try {
      await callApiFor(apiCall, method);
    } catch (error) {
      setError({
        isError: true,
        message: `${apiCall} failed because of ${error}`,
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrementWins = async (id) => {
    await doApiCall(`/player/${id}/decrement-wins`, "post");
  };

  const handleIncrementWins = async (id) => {
    await doApiCall(`/player/${id}/increment-wins`, "post");
  };

  const handleDecrementLosses = async (id) => {
    await doApiCall(`/player/${id}/decrement-losses`, "post");
  };

  const handleIncrementLosses = async (id) => {
    await doApiCall(`/player/${id}/increment-losses`, "post");
  };

  const handleAddNewPlayer = async () => {
    await doApiCall(`/players/add/${newPlayerNameInputValue}`, "post");

    setNewPlayerNameInputValue("");
  };

  const handleRemovePlayer = async (id) => {
    await doApiCall(`/player/${id}/remove`, "delete");
  };

  return (
    <PlayersContext.Provider
      value={{
        handleDecrementWins,
        handleIncrementWins,
        handleDecrementLosses,
        handleIncrementLosses,
        handleAddNewPlayer,
        handleRemovePlayer,
        isLoading,
        error,
        newPlayerNameInputValue,
        setNewPlayerNameInputValue,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => useContext(PlayersContext);

export default PlayersProvider;
