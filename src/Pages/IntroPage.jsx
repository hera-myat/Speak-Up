import Intro from "../components/Intro";
import "../index.css";
import logo from "../components/Speakup.png";


export default function IntroPage() {
  return (
    <div className="intro-page">

      <div className="top-bar_homepage">
        <div className="about-wrapper">
          <button className="about_btn">About</button>

          <div className="about-tooltip">
            SpeakUp helps users explore destinations and browse recommendations easily.
          </div>
        </div>
      </div>

      <div className="content">
        <img
          src={logo}
          alt="SpeakUp logo"
          className="logo"
          style={{ width: "500px", marginTop: "2px", marginBottom: "2px", }}
        />

        <h2 className="header-2 typewriter">
          Please select your destination 📍
          and start browsing!
        </h2>

        <Intro />
      </div>

    </div>
  );
}