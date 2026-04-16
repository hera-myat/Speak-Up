import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import BrowsingPage from "./Pages/BrowsingPage"; 
import DetailsPage from "./Pages/DetailsPage";
import VideoPlayerPage from "./Pages/VideoPlayerPage";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router basename="/Speak-Up/">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/pin/US/ENG" element={<BrowsingPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/video-player/:id" element={<VideoPlayerPage />} />
      </Routes>
    </Router>
  );
}