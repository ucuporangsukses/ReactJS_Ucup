import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  const rowRef = useRef();

  const scroll = (offset) => {
    rowRef.current.scrollLeft += offset;
  };

  return (
    <section className="mb-10 px-6">
      <h3 className="text-xl text-white font-bold mb-3">{title}</h3>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 z-10 hover:bg-black transition"
        >
          ‹
        </button>

        {/* Movie List */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-none scroll-smooth"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 z-10 hover:bg-black transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
