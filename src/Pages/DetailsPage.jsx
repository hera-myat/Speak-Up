import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import blackPanther from "../assets/trending-movies/black-panther.jpeg";
import jaws from "../assets/trending-movies/jaws.jpeg";
import meBeforeYou from "../assets/trending-movies/me-before-you.jpeg";
import theNotebook from "../assets/trending-movies/the-notebook.jpeg";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSlang, setSelectedSlang] = useState(null);
  const [completed, setCompleted] = useState([]);
  const trendingMovies = [
    {
      title: "Learn Commonly Used Slang",
      src: blackPanther,
      genre: "Friendly Conversation",
      slang: [
        {
          phrase: "You good? 🔥",
          meaning: "Are you okay / everything alright?",
          tone: "Friendly",
          formality: "Informal",
          situation: "Checking in on a friend",
          responses: ["Yeah I’m good", "All good", "I’m chilling"],
          timestamp: "0:00"
        },
        {
          phrase: "You’re hilarious",
          meaning: "You’re really funny",
          tone: "Humorous",
          formality: "Informal",
          situation: "Reacting to a joke",
          responses: ["I know 😂", "Thanks!", "I try"],
          timestamp: "0:00"
        },
        {
          phrase: "I can’t with you",
          meaning: "You’re too funny / I’m overwhelmed laughing",
          tone: "Playful",
          formality: "Slang",
          situation: "Laughing with friends",
          responses: ["😂 same", "You started it", "Stoppp"],
          timestamp: "0:00"
        },
        {
          phrase: "No way! 🔥",
          meaning: "Expression of surprise",
          tone: "Excited",
          formality: "Informal",
          situation: "Reacting to surprising news",
          responses: ["Yes way!", "I swear!", "Crazy right?"],
          timestamp: "0:00"
        },
        {
          phrase: "That’s wild",
          meaning: "That’s crazy / unbelievable",
          tone: "Casual",
          formality: "Informal",
          situation: "Reacting to stories or events",
          responses: ["I know!", "Right?!", "Insane"],
          timestamp: "0:00"
        }
      ]
    },
    {
      title: "Learn Commonly Used Phrases",
      src: jaws,
      genre: "Meeting New People",
      slang: [
        {
          phrase: "Nice to meet you 🔥",
          meaning: "Polite greeting when meeting someone new",
          tone: "Polite",
          formality: "Formal",
          situation: "First introduction",
          responses: ["Nice to meet you too", "Likewise", "Good to meet you"],
          timestamp: "0:00"
        },
        {
          phrase: "Where are you from?",
          meaning: "Asking about someone’s origin",
          tone: "Curious",
          formality: "Neutral",
          situation: "Getting to know someone",
          responses: ["I’m from…", "I live in…", "Originally…"],
          timestamp: "0:00"
        },
        {
          phrase: "What do you do?",
          meaning: "Asking about job or studies",
          tone: "Friendly",
          formality: "Neutral",
          situation: "Conversation starter",
          responses: ["I study…", "I work as…", "I’m in school"],
          timestamp: "0:00"
        },
        {
          phrase: "That’s cool",
          meaning: "Polite reaction showing interest",
          tone: "Friendly",
          formality: "Informal",
          situation: "Responding in conversation",
          responses: ["Yeah!", "I like it", "Same here"],
          timestamp: "0:00"
        },
        {
          phrase: "We should hang out sometime 🔥",
          meaning: "Suggesting meeting again",
          tone: "Friendly",
          formality: "Informal",
          situation: "Ending a good conversation",
          responses: ["Sure!", "Definitely", "Sounds good"],
          timestamp: "0:00"
        }
      ]
    },
    {
      title: "Me Before You",
      src: meBeforeYou,
      genre: "Romance",
      slang: Array(5).fill({
        phrase: "Slang",
        meaning: "Meaning not available yet",
        tone: "Neutral",
        formality: "Informal",
        situation: "Not Available",
        responses: ["Response 1", "Response 2"],
        timestamp: "0:00"
      })
    },
    {
      title: "The Notebook",
      src: theNotebook,
      genre: "Romance",
      slang: Array(5).fill({
        phrase: "Slang",
        meaning: "Meaning not available yet",
        tone: "Neutral",
        formality: "Informal",
        situation: "Not available",
        responses: ["Response 1", "Response 2"],
        timestamp: "0:00"
      })
    }
  ];

  const movie = trendingMovies[Number(id)];
  if (!movie) {
    return <div className="details-container">Movie not found</div>;
  }
  return (
    <div className="details-container container mt-4">
      <button
        className="btn btn-outline-light mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <img
            src={movie.src}
            alt={movie.title}
            className="details-poster"
          />
        </div>
        <div className="col-md-8">
          <h1 className="details-title">{movie.title}</h1>
          <span className="genre-badge">{movie.genre}</span>
          <div>
            <button className="watch-movie-btn" onClick={() => navigate(`/video-player/${id}`)}>
              ▶ Play Movie
            </button>
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-md-6 mb-3">
          <div className="speakup-card">

            <div className="speakup-label">SLANG BREAKDOWN</div>
            <div className="mb-2">
          <div className="hint-text">
            Progress: {completed.length} / {movie.slang.length}
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${(completed.length / movie.slang.length) * 100}%`,
                backgroundColor: "#4fa5d8"
              }}
            />
          </div>
        </div>
            {movie.slang.map((item, index) => (
              <div
                key={index}
                className={`slang-item ${
                  selectedSlang?.phrase === item.phrase ? "active" : ""
                }`}
              >
                <span>{item.phrase}</span>
                <button
                  className="speakup-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlang(item);
                  
                    if (!completed.includes(item.phrase)) {
                      setCompleted([...completed, item.phrase]);
                    }
                  }}
                >
                  ▶
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="speakup-card">
            <div className="speakup-label">CONTEXT</div>
            {!selectedSlang ? (
              <p className="hint-text">
                Click ▶ to explore meaning and usage
              </p>
            ) : (
              <>
                <h4>{selectedSlang.phrase}</h4>

                <p><strong>Meaning:</strong> {selectedSlang.meaning}</p>
                <p><strong>When to use:</strong> {selectedSlang.situation}</p>
                <div className="d-flex gap-2 mb-2">
                  <span className="badge bg-secondary">
                    {selectedSlang.formality}
                  </span>
                  <span className="badge bg-info text-dark">
                    {selectedSlang.tone}
                  </span>
                </div>
                <p><strong>Timestamp:</strong> {selectedSlang.timestamp}</p>
                <h6>Try responding:</h6>
                <ul>
                  {selectedSlang.responses.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}