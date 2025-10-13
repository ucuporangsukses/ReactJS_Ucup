import { Link } from "react-router-dom";

export default function DramaCard({ drama }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <Link to={`/detail/${drama.id}`}>
        <img
          src={drama.image}
          alt={drama.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4 text-white">
          <h2 className="text-lg font-semibold">{drama.title}</h2>
          <p className="text-sm text-gray-400 mt-1">
            ⭐ {drama.rating} | {drama.genre.join(", ")}
          </p>
        </div>
      </Link>
    </div>
  );
}
