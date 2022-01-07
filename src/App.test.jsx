import React, { useState as useStateMock } from "react";
import { mount } from "enzyme";

import App from "./App";

describe("App", () => {
  let setStateMock;
  let component;

  beforeEach(() => {
    setStateMock = jest.fn();
    useStateMock.mockImplementation((init) => [init, setStateMock]);

    component = mount(<App />);
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });
});
