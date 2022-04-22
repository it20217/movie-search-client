import React from 'react'
// Snapshots rendering
import renderer from "react-test-renderer"
// Component
import Movie from './Movie'
// React router
import { BrowserRouter as Router } from 'react-router-dom'
// Mock movie JSON
import { movieListMock } from "./Movie.mock"
//Refer to .env for API key
const { REACT_APP_API_KEY } = process.env;
// Fetch Mock for testing
import { TestFetch } from "../../App.mock";

describe("Movie page component", () => {

  // Snapshot testing
  it("renders correctly", () => {
    const component = renderer.create(<Router><Movie/></Router>).toJSON();
    expect(component).toMatchSnapshot();
  })

  // Testing asynchronous code
  it("returns an error object in case of 500", () => {
    // Test 500 error case
    global.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
      ok: false,
      json: () => new Promise((resolve) =>  {
        resolve(movieListMock)
      })
    }))
    expect(TestFetch("/movie/45"))
    .resolves.toEqual({ error: { code: 500, message: "This operation is currently not possible. Please try again later" }})
  })

  // Testing asynchronous code
  it("returns a movie object if status code is 200", () => {
    // Test successfull response 
    global.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () => new Promise((resolve) =>  {
        resolve(movieListMock)
      })
    }))
    expect(TestFetch("/movie/634649")).resolves.toEqual({
      "genres": [
        {"id": 28, "name": 'Action'},
        {"id": 12, "name": 'Adventure'},
        {"id": 878, "name": 'Science Fiction'}
      ],
      "homepage": "https://www.spidermannowayhome.movie",
      "id": 634649,
      "imdb_id": "tt10872600",
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. ",
      "release_date": "2021-12-15",
      "tagline": "The Multiverse unleashed.",
      "title": "Spider-Man: No Way Home",
    })
  })
})

