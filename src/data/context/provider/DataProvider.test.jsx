import React, { useState as useStateMock } from "react";
import { mount } from "enzyme";
import asyncFn from "@async-fn/jest";

import DataProvider, { dependencies } from "./DataProvider";
import DataHook from "../hook/DataHook";
import { Div } from "../../../components/Element/";

const Consumer = ({ data: { content } }) => <Div>{content}</Div>;

describe("DataProvider", () => {
  let component;
  let setStateMock;
  let callApiMock;

  beforeEach(() => {
    setStateMock = jest.fn();
    callApiMock = asyncFn();

    dependencies.callApi = callApiMock;
    useStateMock.mockImplementation((init) => [init, setStateMock]);

    component = mount(
      <DataProvider route="some-route">
        <DataHook>{({ data }) => <Consumer data={data} />}</DataHook>
      </DataProvider>
    );
  });

  it("when api call resolves with some content, renders", async () => {
    await callApiMock.resolve({
      callWasSuccessful: true,
      data: { content: "Some content" },
      error: { isError: false, message: "" },
    });

    expect(component).toMatchSnapshot();
  });

  it("when api call returns data, sets correct data", async () => {
    await callApiMock.resolve({
      callWasSuccessful: true,
      error: { isError: false, message: "" },
      data: { content: "Some content" },
    });

    expect(setStateMock).toHaveBeenCalledWith({
      content: "Some content",
    });
  });

  it("when api call fails, sets correct error", async () => {
    await callApiMock.resolve({
      callWasSuccessful: false,
      error: { isError: true, message: "some error" },
    });

    expect(setStateMock).toHaveBeenCalledWith({
      isError: true,
      message: "some-route API call was not successful, because of some error",
    });
  });
});
