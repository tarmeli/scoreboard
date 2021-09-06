import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import availableRoutes from "./availableRoutes";

import Routes from "./Routes";

describe("Routes", () => {
    availableRoutes.forEach(({ name, route }) => {
        it(`renders ${name} screen`, () => {
            const component = mount(
                <MemoryRouter initialEntries={[route]}>
                    <Routes />
                </MemoryRouter>
            );

            expect(component.render()).toMatchSnapshot();
        });
    });
});
