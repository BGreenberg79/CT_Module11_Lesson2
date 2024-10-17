// Task 1 Initializing and Displaying a List 

import { useState } from "react"
import './styles.css';

const MoviesList = (props) =>{
    const [movies, setMovies] = useState([{title:"2001: A Space Odyssey",year: 1968, showYears:false, genre:"Sci-Fi"}, {title:"Rashomon", year:1950,showYears:false,genre:"Drama"}, {title:"Bicycle Thieves" ,year: 1948,showYears:false,genre:"Drama"}, {title:"It's a Wonderful Life",year:1946,showYears:false,genre:"Drama"}, {title:"The Godfather",year:1972,showYears:false, genre:"Gangster"}, {title:"Mary Poppins",year:1964,showYears:false, genre:"Musical"}]);;

    // Task 2 Buttons that allow for display of a moie detail
    const toggleYears = (indexA) => {
        const updateMovies = movies.map((movie, indexB) => indexA === indexB ? {...movie, showYears: !movie.showYears} : movie);
        setMovies(updateMovies)};

    // Task 3 Ability to remove each movie individually 
    const popMovie = (indexA) => {
        const poppedMovie = movies.map((movie, indexC) => indexA === indexC ? {...movies.pop(movie)} : movie);
        setMovies(poppedMovie);
    }
    // Task 4 Button outside list that allows you to filter genre

    const dramaOnly = () => {
        const dramaArray = movies.filter((movie) => movie.genre === "Drama");
        setMovies(dramaArray);
    }

    return (
        <div>
            <h3>Some Favorite Movies:</h3>
            <ul>
                {movies.map((movie, indexA) => (
                    <li key={indexA} >{movie.title} {movie.showYears  ? movie.year  : <button onClick={() => toggleYears(indexA)}>Reveal Release Year</button>} <button onClick={()=> popMovie(indexA)}>Remove Movie</button></li>
                ))}
            </ul>
            <button onClick={dramaOnly}>Show Dramas Only</button>
        </div>
    )}


export default MoviesList;