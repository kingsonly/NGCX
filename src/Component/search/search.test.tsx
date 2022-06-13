/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor, } from "@testing-library/react";

import React from "react";
import { SearchInput } from ".";
import userEvent from "@testing-library/user-event";


function inputEl(inputEl: any, arg1: string) {
  throw new Error("Function not implemented.");
}

describe("Should Render Search Component", () => {
  test("renders search correctly", () => {
    const component = render(<SearchInput />);
    expect(component).toMatchSnapshot();
  });

  test("test Input values", async () => {
    render(<SearchInput />);

    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "test@mail.com");
 
    expect(screen.getByTestId("search-input")).toHaveValue("test@mail.com");

  });
});


