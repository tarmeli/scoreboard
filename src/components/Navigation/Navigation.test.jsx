import React, { useState as useStateMock } from "react";
import { mount } from "enzyme";

import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";
import RoutesProvider, {
  dependencies,
} from "../../routes/context/provider/RoutesProvider";

const SomeScreen = (children) => children;

describe("Navigation", () => {
  let component;
  let setStateMock;
  let routesModelMock;

  beforeEach(() => {
    setStateMock = jest.fn();
    routesModelMock = [
      {
        name: "Some Route",
        route: "/some-route",
        Screen: SomeScreen,
        description: "Some description",
      },
    ];

    useStateMock.mockImplementation((init) => [init, setStateMock]);
    dependencies.routesModel = routesModelMock;

    component = mount(
      <RoutesProvider>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </RoutesProvider>
    );
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });
});
