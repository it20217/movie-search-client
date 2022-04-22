import React from 'react';
import { render, screen } from '@testing-library/react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
import App from './App';


describe("App page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<App/>).toJSON();
    expect(component).toMatchSnapshot();
  })
})
