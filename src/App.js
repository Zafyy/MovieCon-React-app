import {useState,useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=6e4f3270';


const App = () => {
    const [movies , setMovies]  = useState([]);
    const [searchTerm, setsearchTerm] = useState('');


    const SearchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);

    }

    useEffect( () => {
        SearchMovies('spiderman');

    }, []);
    return (
        <div className="app">
            <h1>MovieCon</h1>
            <div className="search">
                <input
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img 
                  src={SearchIcon}
                  alt="search"
                  onClick={() => SearchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                 ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                    

                 )
            }

            
        </div>

    );   
}
export default App;