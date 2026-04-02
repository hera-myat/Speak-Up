import { useNavigate } from "react-router-dom";

export default function Pin({ x, y, label }) {
  const navigate = useNavigate();
  
  return (
    <div
      className="pin"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -100%)",
        cursor: "pointer"
      }}
      onClick={() => navigate(`/pin/${label}`)}
    >
      📍
      <div className="pin-label">{label}</div>
    </div>
  );
}