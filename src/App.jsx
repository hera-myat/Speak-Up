import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import BrowsingPage from "./Pages/BrowsingPage"; 
import DetailsPage from "./Pages/DetailsPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/pin/US/ENG" element={<BrowsingPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}