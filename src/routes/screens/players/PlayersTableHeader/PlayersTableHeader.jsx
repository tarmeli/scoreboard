import React from "react";
import { Th, Thead, Tr } from "../../../../components/Element/Table/index";

const PlayersTableHeader = () => (
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
);
export default PlayersTableHeader;
