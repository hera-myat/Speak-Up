

import Intro from "../components/Intro";
import "../index.css";


export default function IntroPage() {
  return (
    <div>
      <h1 className="header-title">Welcome to SpeakUp  </h1>
      <h2 className="header-2">Please select your destination 📍
        and start browsing!
      </h2>

      <Intro />
    </div>
  );
}