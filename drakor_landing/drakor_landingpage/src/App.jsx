import React, { useState } from "react";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import { movies } from "./data/movie";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0); // biar langsung ke atas pas buka detail
  };

  const goBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      {!selectedMovie ? (
        <Home onMovieClick={handleMovieClick} movies={movies} />
      ) : (
        <MovieDetail movie={selectedMovie} goBack={goBack} />
      )}
    </div>
  );
}
