import moonBg from "../assets/moon.jpeg";
import { useNavigate } from "react-router-dom";
import "./mainpage.css";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${moonBg})`,
      }}
    >
      <div className="overlay"></div>

      <h1 className="title">Oii Gunduuu</h1>
      <p className="subtitle">Happy Birthday Gunduuuuu ❤️ </p>

      {/* LETTER BOX */}
      <div className="letterbox">
        <div className="letter-card">
          
          <p className="letter-text">
            Letter aa open panni paaru 
          </p>

          <button
            className="letter-btn"
            onClick={() => navigate("/envelope")}
          >
            Open Letter
          </button>

        </div>
      </div>
    </div>
  );
}
