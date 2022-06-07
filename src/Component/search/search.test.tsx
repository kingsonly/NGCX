/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import React from "react";
import { SearchInput } from ".";
import userEvent from "@testing-library/user-event";

describe("Should Render Search Component", () => {
  test("renders search correctly", () => {
    const component = render(<SearchInput />);
    expect(component).toMatchSnapshot();
  });

  test("test Input values", () => {
    const component = render(<SearchInput />);
    const inputEl = screen.queryByTestId("search-input") as Element;
    userEvent.type(inputEl, "test.com");

    expect(inputEl).toHaveValue("test.com");
  });
});

function inputEl(inputEl: any, arg1: string) {
  throw new Error("Function not implemented.");
}
