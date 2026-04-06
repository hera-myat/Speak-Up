import { useParams } from "react-router-dom";
import "../index.css";

export default function DetailsPage() {
  const { id } = useParams();

  const trendingMovies = [
    { src: "/trending-movies/black-panther.jpeg", genre: "action" },
    { src: "/trending-movies/jaws.jpeg", genre: "horror" },
    { src: "/trending-movies/me-before-you.jpeg", genre: "romance" },
    { src: "/trending-movies/the-notebook.jpeg", genre: "romance" },
  ];

  const movie = trendingMovies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="details-container">
    
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}
