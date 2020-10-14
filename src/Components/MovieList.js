import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ movielist, search, rate}) => {
  return (
    <div className="movie-list">
      {movielist
        .filter(
          (movie) => ((movie.title.toLowerCase().includes(search.toLowerCase())) && (rate<=movie.rate))
        )
        .map((movie) => (
          <MovieCard movie={movie}  />
        ))}
    </div>
    
  );
};
export default MovieList;
