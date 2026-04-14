import { useParams, useNavigate } from "react-router-dom";
import "../index.css";

import blackPanther from "../assets/trending-movies/black-panther.jpeg";
import jaws from "../assets/trending-movies/jaws.jpeg";
import meBeforeYou from "../assets/trending-movies/me-before-you.jpeg";
import theNotebook from "../assets/trending-movies/the-notebook.jpeg";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trendingMovies = [
    {
      title: "Black Panther",
      src: blackPanther,
      genre: "action",
      slang: [
        '"What are those??" — humorous reaction to fashion',
        '"Wassup" — casual confident greeting 🔥'
      ],
      context: {
        description: "Informal American expressions among friends",
        formality: "Informal",
        tone: "Confident",
        responses: ["Hey!", "What’s good?", "Yo 👋"]
      }
    },
    {
      title: "Jaws",
      src: jaws,
      genre: "horror",
      slang: ["Tension phrases", "Warning expressions", "Urgent speech 🔥"],
      context: {
        description: "Used in tense or dangerous situations",
        formality: "Neutral",
        tone: "Serious",
        responses: ["Run!", "Be careful", "It’s coming!"]
      }
    },
    {
      title: "Me Before You",
      src: meBeforeYou,
      genre: "romance",
      slang: ["Soft speech", "Emotional phrases 🔥", "Romantic tone"],
      context: {
        description: "Romantic emotional conversations",
        formality: "Informal",
        tone: "Emotional",
        responses: ["I miss you", "Stay with me", "I understand"]
      }
    },
    {
      title: "The Notebook",
      src: theNotebook,
      genre: "romance",
      slang: ["Love quotes", "Deep emotional lines 🔥", "Affectionate speech"],
      context: {
        description: "Deep romantic communication",
        formality: "Informal",
        tone: "Passionate",
        responses: ["I love you", "Forever", "Don’t leave"]
      }
    }
  ];

  const movie = trendingMovies[id];

  if (!movie) {
    return <div className="details-container">Movie not found</div>;
  }

  return (
    <div className="details-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-hero">

        <div className="details-poster">
          <img src={movie.src} alt={movie.title} />
        </div>

        <div className="details-info">
          <h1 className="details-title">{movie.title}</h1>
          <p className="details-sub">{movie.context.description}</p>

          <div className="details-badges">
            <span>{movie.genre}</span>
            <span>{movie.context.formality}</span>
            <span>{movie.context.tone}</span>
          </div>
        </div>
      </div>

      <div className="details-grid">

        <div className="glass-card">
          <h3>Slang List</h3>
          {movie.slang.map((phrase, index) => (
            <div key={index} className="slang-item">
              <span>{phrase}</span>
              <button className="play-btn">▶</button>
            </div>
          ))}
        </div>

        <div className="glass-card">
          <h3>Context</h3>

          <p>{movie.context.description}</p>

          <div className="context-block">
            <strong>Formality:</strong> {movie.context.formality}
          </div>

          <div className="context-block">
            <strong>Tone:</strong> {movie.context.tone}
          </div>

          <h4>Suggested Responses</h4>
          <ul>
            {movie.context.responses.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}