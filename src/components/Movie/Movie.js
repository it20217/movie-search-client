import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Movie.module.scss"

function Movie() {

  let { movieId } = useParams();
  console.log(movieId)
  const { REACT_APP_API_KEY } = process.env;
  const [movie, setMovie] = useState([]);

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

  console.log(movie)

  return(
    <div className={`${styles["search-wrapper"]}`}>
      {movie?.original_title}
    </div>
  )
}

export default Movie;