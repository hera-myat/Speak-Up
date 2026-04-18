import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { useRef } from "react";

import jawsTrailer from "../assets/trending-movies/jaws-trailer.mp4";

const movies = [
    {
        title: "Learn Commonly Used Slang",
        video: jawsTrailer,
        slang: [
            { quote: <>"You good? "<span className="flame">🔥</span></>, timestamp: 3 },
            { quote: "You’re hilarious", timestamp: 8 },
            { quote: "I can’t with you", timestamp: 14 },
            { quote: <>"No way! "<span className="flame">🔥</span></>, timestamp: 20 },
            { quote: "That’s wild", timestamp: 27 },
        ],
    },
    {
        title: "Learn Commonly Used Phrases",
        video: jawsTrailer,
        slang: [
            { quote: <>"Nice to meet you "<span className="flame">🔥</span></>, timestamp: 3 },
            { quote: "Where are you from?", timestamp: 8 },
            { quote: "What do you do?", timestamp: 14 },
            { quote: "That’s cool", timestamp: 20 },
            { quote: <>"We should hang out sometime 🔥"<span className="flame">🔥</span></>, timestamp: 27 },
        ],
    },
];

export default function VideoPlayerPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const movie = movies[Number(id)];

    if (!movie) {
        return <div className="text-white p-4">Movie not found</div>;
    }
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    const jumpToTime = (time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            videoRef.current.play();
        }
    };

    return (
        <div
            className="video-player-container"
            style={{
                padding: "20px",
                backgroundColor: "#000",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",

            }}
        >
            <div className="back-button-container" 
            style={{ 
                alignItems: "left",
                padding: "20px" }}>
                <button
                    className="about_btn"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
            </div>

            <div className="video-player" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center" 
            }}>
                <h1 className="text-white mb-4">{movie.title}</h1>
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
                    controls
                    autoPlay
                    style={{ maxWidth: "75%", backgroundColor: "#000" }}
                    onError={() => console.error("Video failed to load")}
                >
                    <source src={movie.video} type="video/mp4" />
                </video>

                <div
                    style={{
                        marginTop: "20px",
                        width: "75%",
                        backgroundColor: "#111",
                        padding: "20px",
                        borderRadius: "10px",
                        color: "white",
                    }}
                >
                    <h4>Slang List</h4>

                    {movie.slang.map((item, index) => (
                        <button
                            key={index}
                            className="btn btn-outline-light w-100 mb-2 text-start"
                            onClick={() => jumpToTime(item.timestamp)}
                        >
                            {item.quote} ({formatTime(item.timestamp)})
                        </button>
                    ))}
                </div>

            </div>

        </div>
    );
}