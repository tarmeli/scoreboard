import React from "react";
import { Button, Div, Form, Input, Table } from "../../../components/Element/";
import { Tbody, Td, Tr } from "../../../components/Element/Table/";
import Map from "../../../components/utils/Map/Map";
import PlayersProvider from "./context/provider/PlayersProvider";
import PlayersHook from "./context/hook/PlayersHook";
import PlayersTableHeader from "./PlayersTableHeader/PlayersTableHeader";
import LoadingTentative from "../../../components/LoadingTentative/LoadingTentative";

const Players = ({ data: { players } }) => {
  return (
    <PlayersProvider>
      <PlayersHook>
        {({
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
        }) => (
          <Div flexContainer flexColumn>
            <Table flexItem>
              <PlayersTableHeader />

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
                            fullWidth
                            onClick={async () => await handleRemovePlayer(id)}
                          >
                            <LoadingTentative isLoading={isLoading}>
                              Remove Player
                            </LoadingTentative>
                          </Button>
                        </Td>
                      </Tr>
                    );
                  }}
                </Map>
              </Tbody>
            </Table>

            <Form
              flexItem
              fullWidth
              onSubmit={async () => await handleAddNewPlayer()}
            >
              <Div flexContainer>
                <Input
                  flexItem
                  fullWidth
                  value={newPlayerNameInputValue}
                  onChange={handleNewPlayerNameChange}
                />

                <Button
                  flexItem
                  fullWidth
                  type="submit"
                  disabled={submitNewPlayerButtonIsDisabled || isLoading}
                >
                  <LoadingTentative isLoading={isLoading}>
                    Add Player
                  </LoadingTentative>
                </Button>
              </Div>
            </Form>
          </Div>
        )}
      </PlayersHook>
    </PlayersProvider>
  );
};

export default Players;
