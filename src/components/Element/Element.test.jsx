import React from "react";
import { shallow } from "enzyme";

import Div from "./Div/Div";
import A from "./A/A";
import Nav from "./Nav/Nav";
import Ol from "./List/Ol/Ol";
import Li from "./List/Li/Li";
import Ul from "./List/Ul/Ul";

const availableElements = [A, Div, Nav, Ol, Li, Ul];

describe("Element", () => {
    let component;

    availableElements.forEach((Tag) => {
        it(`can render "${Tag.name}"`, () => {
            component = shallow(<Tag />);

            expect(component.render()).toMatchSnapshot();
        });
    });
});
