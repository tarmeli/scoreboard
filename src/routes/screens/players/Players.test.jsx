import React, { useState as useStateMock } from "react";
import { mount } from "enzyme";

import Players from "./Players";

describe("Players", () => {
  let component;
  let setStateMock;

  beforeEach(() => {
    setStateMock = jest.fn();
    useStateMock.mockImplementation((init) => [init, setStateMock]);

    component = mount(
      <Players
        data={{
          players: [
            {
              name: "Some player",
              wins: 42,
              losses: 84,
              _id: "some-player-id",
            },
            {
              name: "Some other player",
              wins: 126,
              losses: 168,
              _id: "some-other-player-id",
            },
          ],
        }}
      />
    );
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });
});
