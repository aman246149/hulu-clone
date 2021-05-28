import React, { useEffect,useState } from 'react'
import './MovieCard.css'
import Row from './Row'
import Axios from './Axios'
import Request from './Requests'

function MovieCard(props) {

    const[movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchData(){
            const request=await Axios.get(Request.fetchTrending);
            setMovies(request.data.results);
            return request;
        }
        console.log(movies);
        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
       <div className="moviecard">
        {
        movies.map((movie)=>{
         return <Row
         key={movie.id}
         image={`${base_url}${movie.backdrop_path}`}

         />

        })
      }
        
           
          
       </div>
       
    )
}


export default MovieCard
