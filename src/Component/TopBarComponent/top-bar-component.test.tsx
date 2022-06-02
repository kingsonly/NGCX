/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import renderer from "react-test-renderer";
import {
  render,
  screen,
  fireEvent,
  queryByLabelText,
  queryByTestId,
} from "@testing-library/react";

import React from "react";

import { FiMenu, FiX } from "react-icons/fi";
import TopBarComponent from ".";

describe("Test Top Bar Component", () => {
  test("renders TopBarComponent correctly", () => {
    const component = render(
      <TopBarComponent
        image=".."
        category="test-cat"
        cta={Function}
        account={Function}
        wishlist={Function}
        compare={Function}
      ></TopBarComponent>
    );
    expect(component).toMatchSnapshot();
  });
});
