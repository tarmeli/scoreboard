import React from "react";

import Div from "../../components/Element/Div/Div";
import Map from "../../components/Utility/Map/Map";
import Table from "../../components/Element/Table/Table";
import Tr from "../../components/Element/Table/Tr/Tr";
import Td from "../../components/Element/Table/Td/Td";
import Th from "../../components/Element/Table/Th/Th";
import Tbody from "../../components/Element/Table/Tbody/Tbody";
import Thead from "../../components/Element/Table/Thead/Thead";
import Button from "../../components/Element/Button/Button";
import { usePlayers } from "../../data/context/players/PlayersProvider";
import LoadingTentative from "../../components/LoadingTentative/LoadingTentative";
import ErrorTentative from "../../components/ErrorTentative/ErrorTentative";

export const dependencies = {
    usePlayers,
};

const Players = () => {
    const { isLoading, players, error } = dependencies.usePlayers();

    const handleDecrementWins = (player) => {
        console.log(player);
    };

    const handleIncrementWins = (player) => {
        console.log(player);
    };

    const handleIncrementLosses = (player) => {
        console.log(player);
    };

    const handleDecrementLosses = (player) => {
        console.log(player);
    };

    return (
        <LoadingTentative isLoading={isLoading}>
            <ErrorTentative isError={error.isError} message={error.message}>
                <Div>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Player name</Th>

                                <Th />

                                <Th>Wins</Th>

                                <Th />
                                <Th />
                                <Th />

                                <Th>Losses</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Map items={players}>
                                {({ name, wins, losses }) => (
                                    <Tr>
                                        <Td>{name}</Td>

                                        <Td>
                                            <Button
                                                onClick={() =>
                                                    handleDecrementWins(name)
                                                }
                                            >
                                                -
                                            </Button>
                                        </Td>

                                        <Td>{wins}</Td>

                                        <Td>
                                            <Button
                                                onClick={() =>
                                                    handleIncrementWins(name)
                                                }
                                            >
                                                +
                                            </Button>
                                        </Td>

                                        <Td />

                                        <Td>
                                            <Button
                                                onClick={() =>
                                                    handleDecrementLosses(name)
                                                }
                                            >
                                                -
                                            </Button>
                                        </Td>

                                        <Td>{losses}</Td>

                                        <Td>
                                            <Button
                                                onClick={() =>
                                                    handleIncrementLosses(name)
                                                }
                                            >
                                                +
                                            </Button>
                                        </Td>
                                    </Tr>
                                )}
                            </Map>
                        </Tbody>
                    </Table>
                </Div>
            </ErrorTentative>
        </LoadingTentative>
    );
};

export default Players;
