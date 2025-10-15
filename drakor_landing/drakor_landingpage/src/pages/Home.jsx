import { useState } from "react";
import { movies } from "../data/movie";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import MovieDetail from "../components/MovieDetail";
import "./Home.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  if (selected)
    return (
      <MovieDetail
        movie={{
          ...selected,
          recommendations: movies.filter((m) => m.id !== selected.id).slice(0, 4),
        }}
        goBack={() => setSelected(null)}
        onSelectMovie={setSelected}
      />
    );

  return (
    <div className="home-page">
      <HeroBanner movie={movies[0]} />

      <input
        type="text"
        placeholder="Search drama or movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <MovieRow
        title="K-Drama Collection"
        movies={filtered.filter((m, i) => i < 30)}
        onCardClick={setSelected}
      />
      <MovieRow
        title="Western Hits"
        movies={filtered.filter((m, i) => i >= 30)}
        onCardClick={setSelected}
      />
    </div>
  );
}
