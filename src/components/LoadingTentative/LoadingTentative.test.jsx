import React from "react";
import { mount } from "enzyme";

import LoadingTentative from "./LoadingTentative";

describe("LoadingTentative", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <LoadingTentative isLoading={false}>Some children</LoadingTentative>
        );
    });

    it("renders", () => {
        expect(component.render()).toMatchSnapshot();
    });

    it("when loading, shows loading indicator", () => {
        component = mount(
            <LoadingTentative isLoading={true}>Some children</LoadingTentative>
        );

        expect(component.render()).toMatchSnapshot();
    });
});
