import React from 'react';
/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import ReadMore from './ReadMore';

describe("ReadMore page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ReadMore/>).toJSON();
    expect(component).toMatchSnapshot();
  })
})