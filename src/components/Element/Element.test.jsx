import React from "react";
import { shallow } from "enzyme";

import Div from "./Div/Div";
import A from "./A/A";
import Nav from "./Nav/Nav";
import Ol from "./List/Ol/Ol";
import Li from "./List/Li/Li";
import Ul from "./List/Ul/Ul";
import Table from "./Table/Table";
import Td from "./Table/Td/Td";
import Tr from "./Table/Tr/Tr";
import Th from "./Table/Th/Th";
import Tbody from "./Table/Tbody/Tbody";
import Thead from "./Table/Thead/Thead";

const availableTags = [
    A,
    Div,
    Nav,
    Ol,
    Li,
    Ul,
    Table,
    Td,
    Tr,
    Th,
    Tbody,
    Thead,
];

describe("Element", () => {
    let component;

    availableTags.forEach((Tag) => {
        it(`can render "${Tag.name}"`, () => {
            component = shallow(<Tag />);

            expect(component.render()).toMatchSnapshot();
        });
    });
});
