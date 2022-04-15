import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import genres from '../../genres'
import styles from "./Search.module.scss"


function Search() {

  let { searchQuery } = useParams();
  const navigate = useNavigate();
  const { REACT_APP_API_KEY } = process.env;
  const [movies, setMovies] = useState([]);

  console.log(movies)

  const getGenre = (y) => {
    console.log("y:", y);
   return genres.find(x => x.id === y )
  };
  const getYear = (y) => {
   return y.slice(0, 4)
  };

  
  

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

 
  return(
      <div className="divide-y-8 divide-slate-100 ">
      {movies?.map((movie, index) => {
            return (
              <div key={index} className="divide-y divide-slate-100 ">
                <div className="flex items-start space-x-6 p-6">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width="300" className="flex rounded-md bg-slate-100" />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{movie.original_title}</h2>
                    <div className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                      <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <div className="text-sky-500">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </div>
                        <div>
                          {movie.vote_average}
                        </div>
                      </div>
                      <div>
                        <div className="sr-only">Rating</div>
                        <div className="px-1.5 ring-1 ring-slate-200 rounded">{"PG12"}</div>
                      </div>
                      <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <div>{getYear(movie.release_date)}</div>
                      </div>
                      <div>
                        <div className="sr-only">Genre</div>
                        <div className="flex items-center">
                          <svg width="4" height="4" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          {getGenre(movie.genre_ids[0])?.name}
                        </div>
                      </div>
                    </div>
                    <div className="flex w-1/2 mt-8 font-normal min-h-400">
                      <div className="sr-only">Cast</div>
                      <div className="text-slate-400">{movie.overview}</div>
                    </div>
                    <div className="flex mt-8 font-normal">
                      <button
                        //onClick={console.log('click')}
                        onClick={() => {navigate(`/movie/${movie.id}`)}}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm"
                      >
                        Movie details
                      </button>
                    </div>
                  </div>
                </div>   
              </div>
            )  
            })}
      </div>
  )
}

export default Search;