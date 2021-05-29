
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieLIst from './components/MovieLIst';
import TopBar from './components/TopBar';

function App() {

  const[fetchurl,seturl]=useState({})

  function handleChildClick(movie) {
    console.log("child click handled",movie)
        seturl(movie)
  }
  return (
    <div className="container"> 
      <TopBar/>
      <MovieLIst
      onchildClick={handleChildClick}
      />
      <MovieCard 
      fetchdataurl={fetchurl.url}
      />
    </div>
  );
}

export default App;
