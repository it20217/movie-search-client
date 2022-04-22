import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./Movie.module.scss"


function Movie() {

  //useParams returns an object of URL parameters
  let { movieId } = useParams();
  
  //Refer to .env for API key
  const { REACT_APP_API_KEY } = process.env;

  const [movie, setMovie] = useState([]);
  
  // useNavigate hook let to navigate programmatically 
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/read-more');
  }

  useEffect(() => {
    async function handleFind () {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=en-US&external_source=imdb_id`)
        const movie = await response.json();
        setMovie(movie)
      } catch (e) {
        console.log(e)
      }
    }
    if (movieId?.length > 0) {
      handleFind();
    }
  },[movieId, REACT_APP_API_KEY])

   const getYear = (y) => {
    return y.slice(0, 4)
   };


  return(
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="flex-col p-3 col-start-1 row-start-1 flex rounded-lg sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-2xl font-semibold sm:text-slate-900 md:text-2xl ">{movie.original_title}</h1>
          <div className="mt-2 text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">{movie.release_date}</div>
          <div className=" mt-4 text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">
            {movie?.genres?.map((genre, index) => {
              return(<span key={index} className="mr-4">{genre.name}</span>)
            })}
          </div>
        </div>
        {typeof movie?.backdrop_path == "string" &&
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2   lg:row-end-6 lg:row-span-6 lg:mb-0">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className=" h-60 object-fit rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
            </div> 
        }
      

        <div className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
        
          <div className="sr-only">Reviews</div>
          <div className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{movie.vote_average} <span className="text-slate-400 font-normal">(128)</span></span>
          </div>
          <div className="sr-only">Location</div>
        </div>
        <div className="mt-4 col-start-1 row-start-5 self-center sm:mt-0 sm:col-start-2 sm:row-start-5 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-5 lg:row-end-6">
          <button 
            type="button" 
            className={`bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg ${styles.button}`}
            onClick={handleReadMore}
          >
            Read more
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          {movie.overview}
        </p>
     </div>
    </div>

  )
}

export default Movie;