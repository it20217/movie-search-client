import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
import ContactUs from './ContactUs';

describe("ContactUs page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ContactUs/>).toJSON();
    expect(component).toMatchSnapshot();
  })
})