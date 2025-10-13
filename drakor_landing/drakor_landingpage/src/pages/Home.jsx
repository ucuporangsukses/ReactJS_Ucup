import dramas from "../data/drama";
import DramaCard from "../components/DramaCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = dramas.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">
      <h1 className="text-4xl font-bold mb-8 text-red-500 text-center">
        🎬 Korean Drama Collection
      </h1>

      <input
        type="text"
        placeholder="Search drama..."
        className="w-full md:w-1/2 mx-auto block p-3 rounded-lg text-black mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filtered.map((drama) => (
          <DramaCard key={drama.id} drama={drama} />
        ))}
      </div>
    </div>
  );
}
