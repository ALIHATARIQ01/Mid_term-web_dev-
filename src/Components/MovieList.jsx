

import React from 'react';
import MovieItem from './MovieItem';
import './Movielist.css';

const MovieList = ({ movie }) => {
  return (
    
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;