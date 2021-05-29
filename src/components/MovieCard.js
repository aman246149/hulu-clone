import React, { useEffect,useState } from 'react'
import './MovieCard.css'
import Row from './Row'
import Axios from './Axios'
import Request from './Requests'

function MovieCard(props) {

    const[movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/"
    console.log("movies card",props.fetchdataurl)
    useEffect(()=>{
        async function fetchData(){
            let fetch;
            console.log(props.fetchdataurl)
            if (props.fetchdataurl===undefined) {
                fetch=Request.fetchTrending
            }else{
                fetch=props.fetchdataurl
            }
            const request=await Axios.get(fetch);
            setMovies(request.data.results);
            console.log(fetch)
            return request;
        }
        console.log(movies);
        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.fetchdataurl]);

    return (
        
       <div className="moviecard">
        {
        movies.map((movie)=>{
         return <Row
         key={movie.id}
         image={`${base_url}${movie.backdrop_path}`}
        title={movie.title}
         />

        })
      }
        
           
          
       </div>
       
    )
}


export default MovieCard
