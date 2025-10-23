import movies from "../data/movies";

export default function Banner() {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <header
      className="w-full h-[70vh] bg-cover bg-center flex items-end p-10"
      style={{ backgroundImage: `url(${randomMovie.banner})` }}
    >
      <div className="text-white max-w-xl">
        <h2 className="text-4xl font-bold mb-4">{randomMovie.title}</h2>
        <p className="text-sm text-gray-200 mb-6 line-clamp-3">
          {randomMovie.description}
        </p>

        <button className="bg-red-600 px-6 py-2 rounded font-semibold hover:bg-red-500 transition">
          Play
        </button>
      </div>
    </header>
  );
}
