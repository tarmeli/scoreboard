import React from "react";
import { Button, Div, Form, Input, Table } from "../../../components/Element/";
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
                          <Button
                            onClick={async () => await handleDecrementWins(id)}
                          >
                            -
                          </Button>
                        </Td>

                        <Td>{wins}</Td>

                        <Td>
                          <Button
                            onClick={async () => await handleIncrementWins(id)}
                          >
                            +
                          </Button>
                        </Td>

                        <Td />

                        <Td>
                          <Button
                            onClick={async () =>
                              await handleDecrementLosses(id)
                            }
                          >
                            -
                          </Button>
                        </Td>

                        <Td>{losses}</Td>

                        <Td>
                          <Button
                            onClick={async () =>
                              await handleIncrementLosses(id)
                            }
                          >
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

            <Form onSubmit={async () => await handleAddNewPlayer()}>
              <Input
                value={newPlayerNameInputValue}
                onChange={(event) =>
                  setNewPlayerNameInputValue(event.target.value)
                }
              />

              <Button
                type="submit"
                disabled={newPlayerNameInputValue.length === 0}
              >
                Add Player
              </Button>
            </Form>
          </Div>
        )}
      </PlayersHook>
    </PlayersProvider>
  );
};

export default Players;
