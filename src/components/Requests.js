
const api_key="b31306c5250b5339b1c6eddcc64c0be8"

const requests={
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
}

export default requests;


// https://api.themoviedb.org/3/dicover/tv/movie?api_key=b31306c5250b5339b1c6eddcc64c0be8&with_genres=28

//  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,