import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieCard({ title, movies = [], onSelect }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const amount = dir === "left" ? -500 : 500;
    rowRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // auto-scroll
  useEffect(() => {
    const ref = rowRef.current;
    if (!ref) return;
    const interval = setInterval(() => {
      if (!ref) return;
      const next = ref.scrollLeft + 260;
      if (next + ref.clientWidth >= ref.scrollWidth - 10) {
        ref.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        ref.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="scroll-btn left" onClick={() => scroll("left")}>❮</div>
      <div className="scroll-btn right" onClick={() => scroll("right")}>❯</div>

      <div className="row-container" ref={rowRef}>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
}
