/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'

import renderer from "react-test-renderer";
import {
  render,
  screen,
} from "@testing-library/react";

import React from "react";
import FooterColumn from './index'

describe("Should Test Footer", () => {
  test("renders Footer correctly", () => {
    const component = render(<FooterColumn />)

    expect(component).toMatchSnapshot();
  });
});
