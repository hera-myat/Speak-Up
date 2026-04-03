import { useState } from "react";
import "../index.css";

export default function BrowsingPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [level, setLevel] = useState("");
  const [context, setContext] = useState("");

  const trendingMovies = [
    "/trending-movies/black-panther.jpeg",
    "/trending-movies/jaws.jpeg",
    "/trending-movies/me-before-you.jpeg",
    "/trending-movies/the-notebook.jpeg",
  ];

  const trendingShows = [
    "/trending-shows/bridgerton.jpeg",
    "/trending-shows/the-office.jpg",
    "/trending-shows/you.jpeg",
    "/trending-shows/stranger-things.jpeg",
  ];

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
          {trendingMovies.map((movie, index) => (
            <div key={index} className="card">
              <img
                src={movie}
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
          {trendingShows.map((show, index) => (
            <div key={index} className="card">
              <img
                src={show}
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
