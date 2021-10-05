import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import availableRoutes from "./availableRoutes";

import Routes from "./Routes";

describe("Routes", () => {
    it("renders default route", () => {
        const component = shallow(
            <MemoryRouter initialEntries={["/"]}>
                <Routes />
            </MemoryRouter>
        );

        expect(component.render()).toMatchSnapshot();
    });

    availableRoutes.forEach(({ name, route }) => {
        it(`renders ${name} screen`, () => {
            const component = shallow(
                <MemoryRouter initialEntries={[route]}>
                    <Routes />
                </MemoryRouter>
            );

            expect(component.render()).toMatchSnapshot();
        });
    });
});
