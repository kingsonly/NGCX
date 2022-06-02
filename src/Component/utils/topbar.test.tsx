/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'

import renderer from "react-test-renderer";
import {
  render,
  screen,
  fireEvent,
  queryByLabelText,
  queryByTestId,
} from "@testing-library/react";

import React from "react";
import DropDownMenu from './DropDownMenu';
import Iconbutton from './Iconbutton';
import { FiMenu, FiX } from 'react-icons/fi';
import Linkbutton from './Linkbutton';
import ProgressBar from './ProgressBar';
import SectionHeading from './SectionHeading';


describe("Test Utils for top bar component", () => {
  test("renders Iconbutton correctly", () => {
    const component = render(<Iconbutton  onToggle={Function}  isOpen={true} ></Iconbutton>)
    expect(component).toMatchSnapshot();
  });

  test("renders LinkButton correctly", () => {
    const component = render(<Linkbutton text='Test'></Linkbutton>)
    expect(component).toMatchSnapshot();
  });

  test("renders Progress correctly", () => {
    const component = render(<ProgressBar  ></ProgressBar>)
    expect(component).toMatchSnapshot();
  });

  test("renders Best Seller correctly", () => {
    const component = render(<SectionHeading text='Test' ></SectionHeading>)
    expect(component).toMatchSnapshot();
  });

});
