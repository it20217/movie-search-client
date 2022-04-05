import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from "./Search.module.scss"

function Search() {

  let { searchQuery } = useParams();
  const navigate = useNavigate();
  console.log(searchQuery)
  const { REACT_APP_API_KEY } = process.env;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function handleFind () {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${searchQuery}`)
        const movies = await response.json();
        setMovies(movies?.results)
      } catch (e) {
        console.log(e)
      }
    }
    if (searchQuery?.length > 0) {
      handleFind();
    }
  },[searchQuery, REACT_APP_API_KEY])

  console.log(movies)

  return(
    <div className={`${styles["search-wrapper"]}`}>
      <div className="flex column flex-wrap justify-around">
        {movies?.map((movie, index) => {
          return <div key={index} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img class="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
            <div class="p-5">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
              </div>
              <div className="h-100 bg-yellow-200">
                <p class="mb-3 font-normal text-gray-700 truncate  text-md p-4">{movie.overview}</p>
              </div>
              <div onClick={() => navigate(`/movie/${movie.id}`)} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Search;