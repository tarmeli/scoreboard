import React from "react";
import { mount } from "enzyme";

import Map from "./Map";

describe("Map", () => {
    const itemsStub = [
        { itemProperty: "some-item-property" },
        { itemProperty: "some-item-property" },
    ];

    it("renders", () => {
        const component = mount(
            <Map items={itemsStub}>
                {({ itemProperty }) => <div>{itemProperty}</div>}
            </Map>
        );

        expect(component).toMatchSnapshot();
    });
});
