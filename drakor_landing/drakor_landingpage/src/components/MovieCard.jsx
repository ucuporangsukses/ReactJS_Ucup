export default function MovieCard({ movie }) {
  return (
    <div className="w-40 md:w-48 lg:w-52 cursor-pointer transform hover:scale-110 transition duration-300">
      <img
        src={movie.poster}
        alt={movie.title}
        className="rounded-md w-full h-full object-cover"
      />
    </div>
  );
}
