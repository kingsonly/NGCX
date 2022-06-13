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
import { SubscriptionInput } from ".";
import userEvent from "@testing-library/user-event";

describe("Test Banner Component", () => {
  test("Renders Subscription Input", () => {
    const component = render(<SubscriptionInput></SubscriptionInput>);
    expect(component).toMatchSnapshot();
    const element = screen.getByTestId('email')
    expect(element).toBeInTheDocument()
  });


//   test('pass valid email to Subscription Input', () => {
//     render(<SubscriptionInput />);
 
//     const inputEl = screen.getByTestId("email");
//     userEvent.type(inputEl, "test@mail.com");
 
//     expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
//   });
});
