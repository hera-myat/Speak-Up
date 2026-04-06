import { useParams, useNavigate } from "react-router-dom";
import "../index.css";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trendingMovies = [
    {
      title: "Black Panther",
      src: "/trending-movies/black-panther.jpeg",
      genre: "action",
      slang: [
        '"What are those??" : Used as a humorous reaction to modern clothing.',
        '"Wassup" : A casual greeting showing confidence and confrontation. 🔥'
      ],
  
      context: {
        description:
          "Common informal American expressions used among friends",
        formality: "Informal",
        tone: "Confident",
        responses: [
          "Response 1",
          "Response 2",
          "Response 3"
        ]
      }
    },
  
    {
      title: "Jaws",
      src: "/trending-movies/jaws.jpeg",
      genre: "horror",
      slang: ["Slang 1 🔥", "Slang 2", "Slang 3"],
  
      context: {
        description:
          "Expressions used in tense or urgent situations.",
        formality: "Neutral",
        tone: "Serious & Alarmed",
        responses: [
          "Response 1",
          "Response 2",
          "Response 3"
        ]
      }
    },
  
    {
      title: "Me Before You",
      src: "/trending-movies/me-before-you.jpeg",
      genre: "romance",
      slang: ["Slang 1", "Slang 2", "Slang 3"],
  
      context: {
        description:
          "Romantic and emotionally expressive conversations.",
        formality: "Informal",
        tone: "Emotional",
        responses: [
          "Response 1",
          "Response 2",
          "Response 3"
        ]
      }
    },
  
    {
      title: "The Notebook",
      src: "/trending-movies/the-notebook.jpeg",
      genre: "romance",
      slang: ["Slang 1", "Slang 2 🔥", "Slang 3"],
  
      context: {
        description:
          "Deep emotional dialogue focused on love and relationships.",
        formality: "Informal",
        tone: "Passionate & Sentimental",
        responses: [
          "Response 1",
          "Response 2",
          "Response 3"
        ]
      }
    }
  ];

  const movie = trendingMovies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="details-title">{movie.title}</h1>

      <div className="details-video">
      <img src={movie.src} alt={movie.title} />
      </div>

      <div className="details-learning">

{/* Slang List */}
        <div className="slang-box">
          <h3>Slang List</h3>

          {movie.slang.map((phrase, index) => (
            <div key={index} className="slang-item">
              <span>{phrase}</span>
              <button className="timestamp">▶</button>
            </div>
          ))}
        </div>

        

{/* Context */}
        <div className="context-box">
          <h3>Context</h3>
          <p>{movie.context.description}</p>

          <h4>Formality</h4>
          <p>{movie.context.formality}</p>

          <h4>Tone</h4>
          <p>{movie.context.tone}</p>

          <h4>Suggested Response</h4>
          <ul>
            {movie.context.responses.map((response, index) => (
              <li key={index}>{response}</li>
            ))}
          </ul>
        </div>

      </div>
    
    
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>

      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}
