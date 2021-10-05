import React from "react";
import { mount } from "enzyme";

import Home from "./Home";

describe("Home", () => {
    let component;

    beforeEach(() => {
        component = mount(<Home />);
    });

    it("renders", () => {
        expect(component).toMatchSnapshot();
    });
});
