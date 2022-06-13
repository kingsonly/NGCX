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
import BestSeller from "./BestSeller";
import DayDeal from "./DayDeal";
import Popular from "./Popular";
import TopSelling from "./TopSelling";

describe("Should test input field", () => {
  test("renders Best Seller correctly", () => {
    const component = renderer.create(<BestSeller />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("renders Deal of the day correctly", () => {
    const component = render(<DayDeal />)
    const element = screen.getByTestId("buy-button");
    expect(component).toMatchSnapshot();
    expect(element).toBeTruthy()
  });



  test("renders Popular correctly", () => {
    const component = render(<Popular
      Image={"value.Image"} 
      Subtitle = {"value.Subtitle"}
      Price = {"value.Price"}
      Discount = {"value.Discount"}
      Wishlist = {()=>{alert(12345)}}
      Cta = {()=>{alert(12345)}}
      Badgetext = {"value.Badgetext"}
      Size = {"value.Size"}
      Ratting = {"value.Ratting"}
      Badge = {"value.Badge"}
      Title = {"value.Title"}
      />)
    const element = screen.getByTestId("buy-button");
    expect(component).toMatchSnapshot();
    expect(element).toBeTruthy()
  });

  test("renders TopSelling correctly", () => {
    const component = render(<TopSelling />)
    expect(component).toMatchSnapshot();
  });
});
