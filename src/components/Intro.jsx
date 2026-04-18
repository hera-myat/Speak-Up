import Pin from "./pin";
import mapDarkmode from "../assets/map-darkmode.webp";

export default function Intro() {
  const pins = [
    { id: 1, x: 20, y: 30, label: "US/ENG" },
    { id: 2, x: 15, y: 40, label: "MX/ESP" },
    { id: 3, x: 14, y: 20, label: "CA/ENG" },
    { id: 5, x: 85, y: 73, label: "AU/ENG" },
    { id: 6, x: 45, y: 21, label: "UK/ENG" },
    { id: 7, x: 28, y: 77, label: "AR/ESP" },
    { id: 8, x: 44, y: 30, label: "ES/ESP" },
    { id: 9, x: 95, y: 82, label: "NZ/ENG" },
  ];

  return (
    <div className="map-container" style={{ position: "relative" }}>
      <img src={mapDarkmode} alt="Map" className="map-image" style={{ width: "100%" }} />

      {pins.map((pin) => (
        <Pin key={pin.id} {...pin} />
      ))}
    </div>
  );
}