/** Snapshots rendering */
import renderer from "react-test-renderer";
/** Component */
import Error from "./Page404";
/** React router */
import { BrowserRouter as Router } from 'react-router-dom';

describe("Error page component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Router><Error/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })
})