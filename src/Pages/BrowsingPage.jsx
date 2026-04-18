import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../components/Speakup.png";

import blackPanther from "../assets/trending-movies/black-panther.jpeg";
import jaws from "../assets/trending-movies/jaws.jpeg";
import meBeforeYou from "../assets/trending-movies/me-before-you.jpeg";
import theNotebook from "../assets/trending-movies/the-notebook.jpeg";
import avatar from "../assets/trending-movies/avatar.jpeg";
import backrooms from "../assets/trending-movies/backrooms.jpeg";
import fall from "../assets/trending-movies/fall.jpeg";
import jumanji from "../assets/trending-movies/jumanji.jpg";
import regretting from "../assets/trending-movies/regretting.jpg";
import zootopia from "../assets/trending-movies/zootopia.jpg";

import bridgerton from "../assets/trending-shows/bridgerton.jpeg";
import theOffice from "../assets/trending-shows/the-office.jpg";
import you from "../assets/trending-shows/you.jpeg";
import strangerThings from "../assets/trending-shows/stranger-things.jpeg";
import arcane from "../assets/trending-shows/arcane.jpg";
import emily from "../assets/trending-shows/emily.jpeg";
import squid from "../assets/trending-shows/squid.jpeg";
import wednesday from "../assets/trending-shows/wednesday.jpeg";
import boots from "../assets/trending-shows/boots.jpg";
import bad from "../assets/trending-shows/bad.jpeg";

import barbie from "../assets/beginner-choice/barbie.jpeg";
import meangirls from "../assets/beginner-choice/meangirls.jpg";
import friends from "../assets/beginner-choice/friends.jpeg";
import prada from "../assets/beginner-choice/prada.jpg";
import titanic from "../assets/beginner-choice/titanic.jpeg";
import castaway from "../assets/beginner-choice/castaway.jpg";
import bean from "../assets/beginner-choice/bean.jpeg";
import fallguy from "../assets/beginner-choice/fallguy.jpeg";
import gump from "../assets/beginner-choice/gump.webp";
import nemo from "../assets/beginner-choice/nemo.jpeg";

export default function BrowsingPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [level, setLevel] = useState("");
  const [context, setContext] = useState("");
  const navigate = useNavigate();

  const trendingMovies = [
    { src: blackPanther, genre: "action", level: "intermediate", context: "formal", title: "Black Panther" },
    { src: jaws, genre: "horror", level: "intermediate", context: "casual", title: "Jaws" },
    { src: meBeforeYou, genre: "romance", level: "beginner", context: "casual", title: "Me Before You" },
    { src: theNotebook, genre: "romance", level: "intermediate", context: "formal", title: "The Notebook" },
    { src: avatar, genre: "sci-fi", level: "advanced", context: "formal", title: "Avatar" },
    { src: backrooms, genre: "horror", level: "advanced", context: "slang", title: "Backrooms" },
    { src: fall, genre: "thriller", level: "intermediate", context: "formal", title: "Fall" },
    { src: jumanji, genre: "comedy", level: "beginner", context: "casual", title: "Jumanji" },
    { src: regretting, genre: "romance", level: "beginner", context: "casual", title: "Regretting" },
    { src: zootopia, genre: "comedy", level: "beginner", context: "casual", title: "Zootopia" },
  ];

  const trendingShows = [
    { src: bridgerton, genre: "romance", level: "intermediate", context: "formal", title: "Bridgerton" },
    { src: theOffice, genre: "comedy", level: "beginner", context: "casual", title: "The Office" },
    { src: you, genre: "thriller", level: "advanced", context: "slang", title: "You" },
    { src: strangerThings, genre: "sci-fi", level: "intermediate", context: "casual", title: "Stranger Things" },
    { src: arcane, genre: "fantasy", level: "advanced", context: "formal", title: "Arcane" },
    { src: emily, genre: "comedy", level: "beginner", context: "formal", title: "Emily in Paris" },
    { src: squid, genre: "thriller", level: "intermediate", context: "casual", title: "Squid Game" },
    { src: wednesday, genre: "horror", level: "intermediate", context: "formal", title: "Wednesday" },
    { src: boots, genre: "comedy", level: "beginner", context: "slang", title: "Boots" },
    { src: bad, genre: "horror", level: "advanced", context: "casual", title: "Breaking Bad" },
  ];

  const mustWatch = [
    { src: bad, genre: "horror", level: "advanced", context: "casual", title: "Breaking Bad" },
    { src: arcane, genre: "fantasy", level: "advanced", context: "formal", title: "Arcane" },
    { src: emily, genre: "comedy", level: "beginner", context: "formal", title: "Emily in Paris" },
    { src: wednesday, genre: "horror", level: "intermediate", context: "formal", title: "Wednesday" },
    { src: theNotebook, genre: "romance", level: "intermediate", context: "formal", title: "The Notebook" },
    { src: squid, genre: "thriller", level: "intermediate", context: "casual", title: "Squid Game" },
    { src: jumanji, genre: "comedy", level: "beginner", context: "casual", title: "Jumanji" },
    { src: fall, genre: "thriller", level: "intermediate", context: "formal", title: "Fall" },
    { src: blackPanther, genre: "action", level: "intermediate", context: "formal", title: "Black Panther" },
    { src: strangerThings, genre: "sci-fi", level: "advanced", context: "casual", title: "Stranger Things" },
  ];

  const beginnersChoices = [
    { src: barbie, genre: "comedy", level: "beginner", context: "casual", title: "Barbie" },
    { src: meangirls, genre: "comedy", level: "beginner", context: "casual", title: "Mean Girls" },
    { src: friends, genre: "comedy", level: "beginner", context: "casual", title: "Friends" },
    { src: prada, genre: "comedy", level: "beginner", context: "formal", title: "The Devil Wears Prada" },
    { src: titanic, genre: "romance", level: "beginner", context: "formal", title: "Titanic" },
    { src: castaway, genre: "drama", level: "beginner", context: "formal", title: "Cast Away" },
    { src: bean, genre: "comedy", level: "beginner", context: "casual", title: "Mr. Bean" },
    { src: fallguy, genre: "action", level: "beginner", context: "casual", title: "Fall Guy" },
    { src: gump, genre: "drama", level: "beginner", context: "formal", title: "Forrest Gump" },
    { src: nemo, genre: "family", level: "beginner", context: "casual", title: "Finding Nemo" },
  ];

  const filteredMovies = trendingMovies.filter(
    (movie) => (genre === "" || movie.genre === genre) && (level === "" || movie.level === level) && (context === "" || movie.context === context) && (search === "" || movie.title.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredShows = trendingShows.filter(
    (show) => (genre === "" || show.genre === genre) && (level === "" || show.level === level) && (context === "" || show.context === context) && (search === "" || show.title.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredMustWatch = mustWatch.filter(
    (item) => (genre === "" || item.genre === genre) && (level === "" || item.level === level) && (context === "" || item.context === context) && (search === "" || item.title.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredBeginners = beginnersChoices.filter(
    (item) => (genre === "" || item.genre === genre) && (level === "" || item.level === level) && (context === "" || item.context === context) && (search === "" || item.title.toLowerCase().includes(search.toLowerCase()))
  );
  const hasResults = filteredMovies.length > 0 || filteredShows.length > 0 || filteredMustWatch.length > 0 || filteredBeginners.length > 0;

  return (
    <div className="browse-container">

      <div className="top-bar">
        <div className="location-pill">
          <button
            className="home_btn"
            onClick={() => navigate(-1)}
          >
            Home
          </button>
          <span className="flag">🇺🇸</span>
          <span className="text">United States</span>
          <span className="dot">•</span>
          <span className="text">English</span>
          
        </div>
        <img
          src={logo}
          alt="SpeakUp logo"
          className="logo"
          style={{ width: "200px", marginTop: "2px", marginBottom: "2px", cursor: "pointer"}}
          onClick={() => navigate(-1)}
        />
        
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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

      {!hasResults && (
        <div className="no-matches">
          <h3>No matches found</h3>
          <p>Try adjusting your filters or reviewing your search terms</p>
        </div>
      )}

      {filteredMovies.length > 0 && (
        <section className="section">
          <h2>Trending Movies</h2>
          <div className="scroll-row">
            {filteredMovies.map((movie, index) => (
              <div
                key={index}
                className="card"
                onClick={() => navigate(`/details/${index}`)}
              >
                <img src={movie.src} alt={`movie-${index}`} className="poster" />
              </div>
            ))}
          </div>
        </section>
      )}

      {filteredShows.length > 0 && (
        <section className="section">
          <h2>Trending Shows</h2>
          <div className="scroll-row">
            {filteredShows.map((show, index) => (
              <div key={index} className="card">
                <img src={show.src} alt={`show-${index}`} className="poster" />
              </div>
            ))}
          </div>
        </section>
      )}

      {filteredMustWatch.length > 0 && (
        <section className="section">
          <h2>Must Watch</h2>
          <div className="scroll-row">
            {filteredMustWatch.map((item, index) => (
              <div key={index} className="card">
                <img src={item.src} alt={`must-${index}`} className="poster" />
              </div>
            ))}
          </div>
        </section>
      )}

      {filteredBeginners.length > 0 && (
        <section className="section">
          <h2>Beginner's Choices</h2>
          <div className="scroll-row">
            {filteredBeginners.map((item, index) => (
              <div key={index} className="card">
                <img src={item.src} alt={`beginner-${index}`} className="poster" />
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}