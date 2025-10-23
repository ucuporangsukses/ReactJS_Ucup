import React from "react";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import { movies } from "../data/movies";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Banner />

      <div className="space-y-10 mt-5">
        <MovieRow title="🔥 Trending Now" data={movies.trending} />
        <MovieRow title="✨ Popular Series" data={movies.series} />
        <MovieRow title="🎬 Top Movies" data={movies.top} />
      </div>
    </div>
  );
}
