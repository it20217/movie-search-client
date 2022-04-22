import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import Search from './Search';
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("Search page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><Search/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})