import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import Navbar from './Navbar';
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("Navbar page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><Navbar/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})