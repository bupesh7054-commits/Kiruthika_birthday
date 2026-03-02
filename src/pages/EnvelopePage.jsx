import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import envelopeImg from "../assets/envelope.png";
import moonBg from "../assets/moon.jpeg";
import TypingText from "../components/TypingText";
import "./EnvelopePage.css";

export default function EnvelopePage() {
  const [open, setOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowLetter(true), 700);
    }
  }, [open]);

  return (
    <div
  className="envelope-container"
  style={{
    backgroundImage: `url(${moonBg})`,
  }}
>
  <div className="overlay"></div>

  {/* TEXT ABOVE */}
  <h1 className="env-title">Nammaloda ithana varusam memories </h1>
  <p className="env-subtitle">open pannu ulla oru surprise iruku porumaiya paaruuuu</p>

  {!showLetter && (
    <div className="envelope" onClick={() => setOpen(true)}>
      <img src={envelopeImg} alt="Envelope" />
    </div>
  )}

  {showLetter && (
    <div className="letter">
      <TypingText text="Every moment with you feels like something I never want to end." />

      <button onClick={() => navigate("/gallery")}>
        Life Journey
      </button>
    </div>
  )}
</div>

  );
}
