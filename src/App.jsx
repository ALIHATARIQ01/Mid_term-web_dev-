
import React, { useState, useEffect } from 'react';

function App() {
  const apiKey = 'c197a043';
  const movieId = 'tt3896198';
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId, apiKey]);

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>Year: {movie.Year}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Released: {movie.Released}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default Movie;