import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import Footer from './Footer';
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("Footer page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><Footer/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})