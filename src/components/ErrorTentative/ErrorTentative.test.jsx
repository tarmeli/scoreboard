import React from "react";
import { mount } from "enzyme";

import ErrorTentative from "./ErrorTentative";

describe("LoadingTentative", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <ErrorTentative isError={false}>Some children</ErrorTentative>
        );
    });

    it("renders", () => {
        expect(component.render()).toMatchSnapshot();
    });

    it("when an error is present, shows error message", () => {
        component = mount(
            <ErrorTentative isError={true} message="some error">
                Some children
            </ErrorTentative>
        );

        expect(component.render()).toMatchSnapshot();
    });
});
