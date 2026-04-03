import Pin from "./pin";


export default function Map() {
  const pins = [
    { id: 1, x: 20, y: 30, label: "US/ENG" },
    { id: 2, x: 15, y: 40, label: "MX/ESP" },
    { id: 3, x: 14, y: 20, label: "CA/ENG" },
    // { id: 4, x: 78, y: 35, label: "CN/CHN" },
    { id: 5, x: 85, y: 73, label: "AU/ENG" },
    { id: 6, x: 45, y: 21, label: "UK/ENG" },
    { id: 7, x: 28, y: 77, label: "AR/ESP" },
    { id: 8, x: 44, y: 30, label: "ES/ESP" },
    { id: 9, x: 95, y: 82, label: "NZ/ENG" },


  ];

  return (
    <div className="map-container">
      <img src="/map-darkmode.webp" alt="Map" className="map-image" />

      {pins.map(pin => (
        <Pin key={pin.id} {...pin} />
      ))}
    </div>
  );
}