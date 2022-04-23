import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import Header from './Header';
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("Header page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><Header/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})