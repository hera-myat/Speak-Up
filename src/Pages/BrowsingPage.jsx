import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function BrowsingPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [level, setLevel] = useState("");
  const [context, setContext] = useState("");
  const navigate = useNavigate();

  const trendingMovies = [
    { src: "/trending-movies/black-panther.jpeg", genre: "action" },
    { src: "/trending-movies/jaws.jpeg", genre: "horror" },
    { src: "/trending-movies/me-before-you.jpeg", genre: "romance" },
    { src: "/trending-movies/the-notebook.jpeg", genre: "romance" },
  ];

  const trendingShows = [
    { src: "/trending-shows/bridgerton.jpeg", genre: "romance" },
    { src: "/trending-shows/the-office.jpg", genre: "comedy" },
    { src: "/trending-shows/you.jpeg", genre: "thriller" },
    { src: "/trending-shows/stranger-things.jpeg", genre: "sci-fi" },
  ];

  const filteredMovies = trendingMovies.filter((movie) => {
  return genre === "" || movie.genre === genre;
  });

  const filteredShows = trendingShows.filter((show) => {
    return genre === "" || show.genre === genre;
  });

  return (
    <div className="browse-container">

      <div className="top-bar">
        <div className="location-label">🇺🇸 United States / English</div>

        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-bar">
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genre</option>
          <option value="action">Action</option>
          <option value="thriller">Thriller</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="romance">Romance</option>
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
        </select>

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select value={context} onChange={(e) => setContext(e.target.value)}>
          <option value="">Context</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="slang">Slang</option>
        </select>
      </div>

      <section className="section">
        <h2>Trending Movies</h2>
        <div className="grid">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="card" onClick={() => navigate(`/details/${index}`)}>
              <img
                src={movie.src}
                alt={`movie-${index}`}
                className="poster"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Trending Shows</h2>
        <div className="grid">
          {filteredShows.map((show, index) => (
            <div key={index} className="card">
              <img
                src={show.src}
                alt={`show-${index}`}
                className="poster"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
