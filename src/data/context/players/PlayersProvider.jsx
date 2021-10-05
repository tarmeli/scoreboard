import React, { createContext, useContext, useEffect, useState } from "react";
import callApi from "../../utils/callApi/callApi";

const PlayersContext = createContext({
    players: [],
    isLoading: false,
    error: { isError: false, message: "" },
});

export const dependencies = {
    callApi,
};

const PlayersProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        isError: false,
        message: "",
    });

    useEffect(() => {
        setIsLoading(true);

        dependencies.callApi("/players").then(({ callWasSuccessful, data }) => {
            if (callWasSuccessful) {
                setPlayers(data.players);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setError({
                    isError: true,
                    message: "API call was not successful.",
                });
            }
        });
    }, []);

    return (
        <PlayersContext.Provider value={{ players, isLoading, error }}>
            {children}
        </PlayersContext.Provider>
    );
};

export const usePlayers = () => useContext(PlayersContext);

export default PlayersProvider;
