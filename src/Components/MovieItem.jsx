import React, { useEffect, useState } from 'react';
import './MovieItem.css';

const MovieItem = ({ movieId }) => {
    const apiKey = 'c197a043';
    
    const [movie, setMovie] = useState(null); 

    useEffect(() => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c197a043')
       // fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error));
    }, [movieId, apiKey]);

    return (
        <div className="movie-item">
            <h2>{movie.Title}</h2>
            <p>Release Date: {movie.Released}</p>
            <p>Year: {movie.Year}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
            <p>Rating: {movie.imdbRating}</p>
        </div>
    );
};

export default MovieItem;