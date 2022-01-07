import React from "react";
import { shallow } from "enzyme";
import { A, Div, Nav, Table } from "./";
import { Li, Ol, Ul } from "./List/";
import { Tbody, Td, Th, Thead, Tr } from "./Table/";

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
