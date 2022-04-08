import { useState, useEffect } from 'react'
import axios from 'axios'

function ReadMore(){
    const [wiki, setWiki] = useState([])
    const [omdb, setOmdb] = useState([])
    const [query, setQuery] = useState("")
    const apiKey = "43b6fe3f";
      

    function handleQuery(e){
        e.preventDefault()
        setQuery(e.target.value)
    }
    async function searchWiki(e){
        e.preventDefault()
        var responce = await axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/'+query)
        setWiki(responce.data.extract)
    }
    //console.log(wiki);
    async function searchRapid(e){
        e.preventDefault()
        var responce1 = await axios.get('http://www.omdbapi.com/?t='+query+'&apikey='+apiKey)
        console.log(responce1)
        //setOmdb(responce1)
    }
    console.log(omdb);
    return(
        <div>
            <div>
                <p>Search more information on Wikipedia</p>
                <input value={query} onChange={handleQuery} placeholder="Spiderman"/>
                <button className="button" onClick={searchWiki}>Search</button>
                <p>
                    {wiki}
                </p>
                <p>Search more information on Rapid</p>
                <input value={query} onChange={handleQuery} placeholder="Spiderman"/>
                <button className="button" onClick={searchRapid}>Search</button>
                <p>
                    {wiki}
                </p>
                <p>
                    {/*rapid*/}
                </p>
            </div>
        </div>
    )
}

export default ReadMore;