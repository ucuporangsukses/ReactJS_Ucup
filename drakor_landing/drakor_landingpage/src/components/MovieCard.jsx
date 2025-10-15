<div
  className="movie-card"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  onClick={() => onClick(movie)}
>
  <div className="trailer-preview">
    {hovered && !isMobile && (
      <iframe
        src={`${movie.trailer}?autoplay=1&mute=1`}
        title={movie.title}
        allow="autoplay; fullscreen"
      />
    )}
  </div>

  <img
    src={movie.poster_thumb || movie.poster}
    alt={movie.title}
    className="movie-poster"
  />

  <div className="movie-overlay">
    <h3>{movie.title}</h3>
    <p className="movie-genre">{movie.genre}</p>
    <div className="movie-meta">
      <span className="rating">⭐ {movie.rating}</span>
      <span className="episodes hidden-mobile">
        {movie.episodes > 1 ? `${movie.episodes} eps` : "Movie"}
      </span>
    </div>
  </div>
</div>
