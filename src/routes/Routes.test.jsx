import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Routes from "./Routes";
import * as routesProviderModule from "./context/provider/RoutesProvider";
import { RoutesContext } from "./context/provider/RoutesProvider";
import routesModel from "./model/routesModel";

describe("Routes", () => {
  let RoutesProviderMock;
  let setStateMock;

  beforeEach(() => {
    RoutesProviderMock = jest.spyOn(routesProviderModule, "default");

    useStateMock.mockImplementation((init) => [init, setStateMock]);
    RoutesProviderMock.mockImplementation(({ children }) => {
      return (
        <RoutesContext.Provider
          value={{
            isLoading: false,
            routes: routesModel,
          }}
        >
          {children}
        </RoutesContext.Provider>
      );
    });
  });

  it("renders default route", () => {
    const component = shallow(
      <RoutesProviderMock>
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      </RoutesProviderMock>
    );

    expect(component.render()).toMatchSnapshot();
  });

  routesModel.forEach(({ name, route }) => {
    it(`renders ${name} screen`, () => {
      const component = shallow(
        <RoutesProviderMock>
          <MemoryRouter initialEntries={[route]}>
            <Routes />
          </MemoryRouter>
        </RoutesProviderMock>
      );

      expect(component.render()).toMatchSnapshot();
    });
  });
});
