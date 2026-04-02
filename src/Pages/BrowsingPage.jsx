import { useParams } from "react-router-dom";

export default function PinPage() {
  const { label } = useParams();
  return <h1>{label}</h1>;
  
}