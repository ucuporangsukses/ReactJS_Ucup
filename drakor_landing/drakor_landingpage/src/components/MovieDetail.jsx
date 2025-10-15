import React, { useState } from "react";
import { movies } from "../data/movie";
import MovieCard from "./MovieCard";
import "./MovieDetail.css";

export default function MovieDetail({ movie, goBack }) {
  const [currentEp, setCurrentEp] = useState(1);
  const [comments, setComments] = useState([
    { user: "Guest1", text: "Gila keren banget!" },
    { user: "Guest2", text: "Ratingnya beneran sesuai!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (!newComment) return;
    setComments([...comments, { user: "Guest", text: newComment }]);
    setNewComment("");
  };

  // 4 rekomendasi lain selain film ini
  const recommendations = movies.filter((m) => m.id !== movie.id).slice(0, 4);

  return (
    <div className="movie-detail fade-in">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>

      <div className="movie-detail-content">
        <h1>{movie.title}</h1>
        <p className="rating">⭐ {movie.rating}</p>
        <p className="genre">{movie.genre}</p>
        <p className="plot">{movie.plot}</p>

        <div className="episodes">
          {[...Array(movie.episodes).keys()].map((i) => (
            <button
              key={i}
              className={currentEp === i + 1 ? "active" : ""}
              onClick={() => setCurrentEp(i + 1)}
            >
              Ep {i + 1}
            </button>
          ))}
        </div>

        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
        ></iframe>

        {/* ===== REKOMENDASI ===== */}
        <h2>Other Movies You Might Like</h2>
        <div className="recommendations">
          {recommendations.map((m) => (
            <MovieCard key={m.id} movie={m} onClick={() => window.location.reload()} />
          ))}
        </div>

        {/* ===== KOMENTAR ===== */}
        <h2>User Comments</h2>
        <div className="comments">
          {comments.map((c, idx) => (
            <p key={idx}><strong>{c.user}:</strong> {c.text}</p>
          ))}
          <div className="add-comment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addComment}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
