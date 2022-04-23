import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import SearchForm from './SearchForm';
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("SearchForm page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><SearchForm/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})