import React from "react";
import { mount } from "enzyme";

import Players, { dependencies } from "./Players";

describe("Players", () => {
    let component;
    let usePlayersMock;

    beforeEach(() => {
        usePlayersMock = jest.fn();
        dependencies.usePlayers = usePlayersMock;

        usePlayersMock.mockImplementation(() => ({
            isLoading: false,
            error: { isError: false, message: "" },
            players: [],
        }));

        component = mount(<Players />);
    });

    it("renders", () => {
        expect(component.render()).toMatchSnapshot();
    });

    it("given data is loading, when rendered, shows loading indicator", () => {
        usePlayersMock.mockImplementation(() => ({
            isLoading: true,
            error: { isError: false, message: "" },
            players: [],
        }));

        component = mount(<Players />);

        expect(component.render()).toMatchSnapshot();
    });

    it("given players are loaded, when rendered, shows players and their points", () => {
        usePlayersMock.mockImplementation(() => ({
            players: [
                {
                    name: "Some player",
                    wins: 42,
                    losses: 84,
                },
                {
                    name: "Some other player",
                    wins: 126,
                    losses: 168,
                },
            ],
            isLoading: false,
            error: {
                isError: false,
                message: "",
            },
        }));

        component = mount(<Players />);

        expect(component.render()).toMatchSnapshot();
    });

    it("given an error is provided, when rendered, shows error message", () => {
        usePlayersMock.mockImplementation(() => ({
            players: [],
            isLoading: false,
            error: {
                isError: true,
                message: "Some error message",
            },
        }));

        component = mount(<Players />);

        expect(component.render()).toMatchSnapshot();
    });
});
