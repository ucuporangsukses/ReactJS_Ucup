import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-8 py-4 flex items-center justify-between">
      <h1 className="text-red-600 text-3xl font-bold tracking-wide">
        NETFLIX
      </h1>

      <ul className="flex gap-6 text-white font-medium">
        <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
        <li><Link to="/my-list" className="hover:text-red-500 transition">My List</Link></li>
        <li><Link to="/search" className="hover:text-red-500 transition">Search</Link></li>
      </ul>
    </nav>
  );
}
