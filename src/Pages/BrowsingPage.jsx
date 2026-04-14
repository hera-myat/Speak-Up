import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

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
    { src: blackPanther, genre: "action" },
    { src: jaws, genre: "horror" },
    { src: meBeforeYou, genre: "romance" },
    { src: theNotebook, genre: "romance" },
    { src: avatar, genre: "sci-fi" },
    { src: backrooms, genre: "horror" },
    { src: fall, genre: "thriller" },
    { src: jumanji, genre: "comedy" },
    { src: regretting, genre: "romance" },
    { src: zootopia, genre: "comedy" },
  ];

  const trendingShows = [
    { src: bridgerton, genre: "romance" },
    { src: theOffice, genre: "comedy" },
    { src: you, genre: "thriller" },
    { src: strangerThings, genre: "sci-fi" },
    { src: arcane, genre: "fantasy" },
    { src: emily, genre: "comedy" },
    { src: squid, genre: "thriller" },
    { src: wednesday, genre: "horror" },
    { src: boots, genre: "comedy" },
    { src: bad, genre: "horror" },
  ];

  const mustWatch = [
    { src: bad, genre: "horror" },
    { src: arcane, genre: "fantasy" },
    { src: emily, genre: "comedy" },
    { src: wednesday, genre: "horror" },
    { src: theNotebook, genre: "romance" },
    { src: squid, genre: "thriller" },
    { src: jumanji, genre: "comedy" },
    { src: fall, genre: "thriller" },
    { src: blackPanther, genre: "action" },
    { src: strangerThings, genre: "sci-fi" },
  ];

  const beginnersChoices = [
    { src: barbie, genre: "comedy" },
    { src: meangirls, genre: "comedy" },
    { src: friends, genre: "comedy" },
    { src: prada, genre: "comedy" },
    { src: titanic, genre: "romance" },
    { src: castaway, genre: "drama" },
    { src: bean, genre: "comedy" },
    { src: fallguy, genre: "action" },
    { src: gump, genre: "drama" },
    { src: nemo, genre: "family" },
  ];

  const filteredMovies = trendingMovies.filter(
    (movie) => genre === "" || movie.genre === genre
  );

  const filteredShows = trendingShows.filter(
    (show) => genre === "" || show.genre === genre
  );

  const filteredMustWatch = mustWatch.filter(
    (item) => genre === "" || item.genre === genre
  );

  const filteredBeginners = beginnersChoices.filter(
    (item) => genre === "" || item.genre === genre
  );

  return (
    <div className="browse-container">

      <div className="top-bar">
        <div className="location-pill">
          <span className="flag">🇺🇸</span>
          <span className="text">United States</span>
          <span className="dot">•</span>
          <span className="text">English</span>
        </div>

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

    </div>
  );
}