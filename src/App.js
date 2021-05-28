import './App.css';
import MovieCard from './components/MovieCard';
import MovieLIst from './components/MovieLIst';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="container"> 
      <TopBar/>
      <MovieLIst/>
      <MovieCard/>
    </div>
  );
}

export default App;
