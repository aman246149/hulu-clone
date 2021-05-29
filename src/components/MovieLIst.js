import React, { useState } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import Request from './Requests'

function MovieLIst(props) {



    const [MovieList,setMovieList]=useState([
        {
            name:"Trending",
            url:Request.fetchTrending
        },
        {
            name:"TopRated",
            url:Request.fetchTopRated
        },
        {
            name:"Action",
            url:Request.fetchActionMovies
        },
        {
            name:"Comedy",
            url:Request.fetchComedyMovies
        },
        {
            name:"Horror",
            url:Request.fetchHorrorMovies
        },
        {
            name:"Romance",
            url:Request.fetchRomanceMovies
        },
        {
            name:"Mystery",
            url:Request.fetchDocumentaries
        },
    ])

   const sendData=(movie)=>{
       console.log("from movie list",movie.url);
        props.onchildClick(movie)
    }

    return (
        <div className="movielist">
             <div className="movie-list">
                  {
                      MovieList.map((movie)=>{
                         return <h5 onClick={()=>sendData(movie)}>{movie.name}</h5>
                      })
                  }
                </div>
        </div>
    )
}

export default MovieLIst
