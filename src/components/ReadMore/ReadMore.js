import { useState } from 'react'
import axios from 'axios'
import styles from './ReadMore.module.scss'

function ReadMore(){
    const [wiki, setWiki] = useState("")
    const [omdb, setOmdb] = useState("")
    const [query, setQuery] = useState("")
    const [title, setTitle] = useState("")
    const [plot, setPlot] = useState("")
    const [year, setYear] = useState("")
    const [director, setDirector] = useState("")
    const [actors, setActors] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")
    const apiKey = "43b6fe3f";  

    function handleQuery(e){
        e.preventDefault()
        setQuery(e.target.value)
    }
    async function searchWiki(e){
        e.preventDefault()
        var responce = await axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/'+title)
        setWiki(responce.data.extract)
    }


    console.log(wiki);
    async function searchOmdb(e){
        setWiki("")
        setQuery("")
        e.preventDefault()
        var responce = await axios.get('http://www.omdbapi.com/?t='+query+'&apikey='+apiKey)
        setOmdb(responce.data.Poster)
        setTitle(responce.data.Title)
        setYear(responce.data.Year)
        setGenre(responce.data.Genre)
        setPlot(responce.data.Plot)
        setDirector(responce.data.Director)
        setActors(responce.data.Actors)
        setRating(responce.data.imdbRating)
        // console.log(responce.data)
    }
    if(omdb.length){
        return(
            <div >
                {/*<div>
                    <p>Read more about your Favourite movie</p>
                    <input value={query} onChange={handleQuery} placeholder="Spiderman"/>
                    <button className="button" onClick={searchOmdb}>Search</button>
                    <div className={styles.container}>
                        <div>
                            <img src={omdb} alt="Movie poster" />
                        </div>
                        <div>
                            Plot: {plot}
                            Year: {year}
                            Genre: {genre}
                            Director: {director}
                            Actors: {actors}
                        
                            <button className="button" onClick={searchWiki}>Read more</button>

                            <p>
                                {wiki}
                            </p>
                        </div>
                    </div>
        </div>*/}
                <div className="divide-y divide-slate-100 ">
                    
                <div className="flex items-start space-x-6 p-6 min-w-0 relative flex-auto">
                        <h2 className="font-semibold text-slate-900 truncate pr-20">
                            <p>Read more about your Favourite movie</p>
                            <input value={query} onChange={handleQuery} placeholder="Movie title"/>
                            <button
                            onClick={searchOmdb}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm"
                        >
                            Search
                        </button></h2>
                </div>


                  <div className="flex items-start space-x-6 p-6">
                    <img src={omdb} alt="Movie Poster" width="300" className="flex rounded-md bg-slate-100" />
                    <div className="min-w-0 relative flex-auto">
                        <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>
                      <div className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                            <div className="text-sky-500">
                                <span className="sr-only">Star rating</span>
                                <svg width="16" height="20" fill="currentColor">
                                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                </svg>
                            </div>
                            <div>{rating}</div>
                        </div>
                        {/*<div>
                            <div className="sr-only">Rating</div>
                            <div className="px-1.5 ring-1 ring-slate-200 rounded">{"PG12"}</div>
                        </div>*/}
                        <div className="ml-2">
                            <dt className="sr-only">Year</dt>
                            <div>{year}</div>
                        </div>
                        <div>
                            <div className="sr-only">Genre</div>
                            <div className="flex items-center">
                            <svg width="4" height="4" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {genre}
                            </div>
                        </div>
                      </div>
                        <div className="flex w-1/2 mt-8 font-normal min-h-400">
                        <div>Director:&nbsp;</div>
                        <div className="text-slate-400">{director}</div>
                        </div>
                        <div className="flex w-1/2 mt-8 font-normal min-h-400">
                        <div>Actors:&nbsp;</div>
                        <div className="text-slate-400">{actors}</div>
                        </div>
                        <div className="flex w-1/2 mt-8 font-normal min-h-400">
                        <div className="sr-only">Plot</div>
                        <div className="text-slate-400">{plot}</div>
                        </div>
                        <div className="flex mt-8 font-normal">
                        <button
                            onClick={searchWiki}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm"
                        >
                            More details
                        </button>
                        </div>
                            <div className="flex w-1/2 mt-8 font-normal min-h-400 details">
                            <div className="sr-only">Movie details</div>
                            <div className="text-slate-400">{wiki}</div>
                        </div>
                    </div>
                  </div>   
                </div>
            </div> 
        )}
    else{
        return (
            <div>
            <h3>Read more about your Favourite movie</h3>
            <input value={query} onChange={handleQuery} placeholder="Movie Title"/>
            <button onClick={searchOmdb}>Search</button>
            <p>
                {wiki}
            </p>
        </div>
        )
    }
}

export default ReadMore;