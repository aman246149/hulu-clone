import { useEffect, useState } from 'react';
import Axios from './components/Axios'
import Request from './components/Requests'
import './App.css';
import MovieCard from './components/MovieCard';
import MovieLIst from './components/MovieLIst';
import TopBar from './components/TopBar';

function App() {

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
    <div className="container"> 
      <TopBar/>
      <MovieLIst/>
      {/* {
        movies.map((movie)=>{
         return <MovieCard
         key={movie.id}
         image={`${base_url}${movie.backdrop_path}`}

         />

        })
      } */}
      <MovieCard />
    </div>
  );
}

export default App;
