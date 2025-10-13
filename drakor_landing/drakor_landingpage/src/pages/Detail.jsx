import { useParams, Link } from "react-router-dom";
import dramas from "../data/drama";

export default function Detail() {
  const { id } = useParams();
  const drama = dramas.find((d) => d.id === parseInt(id));

  if (!drama) {
    return (
      <div className="text-center text-white mt-20">
        <h1>Drama not found 😢</h1>
        <Link to="/" className="text-red-400 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Link
        to="/"
        className="text-red-400 underline text-sm mb-4 inline-block hover:text-red-600"
      >
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row items-start gap-10">
        <img
          src={drama.image}
          alt={drama.title}
          className="w-full md:w-1/3 rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            {drama.title}
          </h1>
          <p className="text-gray-400 mb-2">
            ⭐ {drama.rating} | {drama.genre.join(", ")} | {drama.duration}
          </p>
          <p className="mb-4">{drama.description}</p>
          <h3 className="text-lg font-semibold mb-2">Actors:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {drama.actors.map((actor, idx) => (
              <li key={idx}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
