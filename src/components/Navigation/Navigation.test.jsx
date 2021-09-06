import React from "react";
import { mount } from "enzyme";

import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
    });

    it("renders", () => {
        expect(component.render()).toMatchSnapshot();
    });
});
