import React from "react";
import { Button, Div, Input, Table } from "../../../components/Element/";
import { Tbody, Td, Th, Thead, Tr } from "../../../components/Element/Table/";
import Map from "../../../components/utils/Map/Map";
import PlayersProvider from "./context/provider/PlayersProvider";
import PlayersHook from "./context/hook/PlayersHook";

const Players = ({ data: { players } }) => {
  return (
    <PlayersProvider>
      <PlayersHook>
        {({
          handleDecrementWins,
          handleIncrementWins,
          handleDecrementLosses,
          handleIncrementLosses,
          handleAddNewPlayer,
          handleRemovePlayer,
          newPlayerNameInputValue,
          setNewPlayerNameInputValue,
        }) => (
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
                  {({ name, wins, losses, _id: id }) => {
                    return (
                      <Tr>
                        <Td>{name}</Td>

                        <Td>
                          <Button onClick={() => handleDecrementWins(id)}>
                            -
                          </Button>
                        </Td>

                        <Td>{wins}</Td>

                        <Td>
                          <Button onClick={() => handleIncrementWins(id)}>
                            +
                          </Button>
                        </Td>

                        <Td />

                        <Td>
                          <Button onClick={() => handleDecrementLosses(id)}>
                            -
                          </Button>
                        </Td>

                        <Td>{losses}</Td>

                        <Td>
                          <Button onClick={() => handleIncrementLosses(id)}>
                            +
                          </Button>
                        </Td>

                        <Td>
                          <Button
                            onClick={async () => await handleRemovePlayer(id)}
                          >
                            Remove Player
                          </Button>
                        </Td>
                      </Tr>
                    );
                  }}
                </Map>
              </Tbody>
            </Table>

            <Div>
              <Input
                value={newPlayerNameInputValue}
                onChange={(event) =>
                  setNewPlayerNameInputValue(event.target.value)
                }
              />

              <Button
                onClick={() => handleAddNewPlayer()}
                disabled={newPlayerNameInputValue.length === 0}
              >
                Add Player
              </Button>
            </Div>
          </Div>
        )}
      </PlayersHook>
    </PlayersProvider>
  );
};

export default Players;
