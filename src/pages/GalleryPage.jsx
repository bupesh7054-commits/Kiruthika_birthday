import { useEffect, useState } from "react";
import "./GalleryPage.css";

// 🔹 Import ALL your images
import firstPhoto from "../assets/First-Photo.jpg";
import childhood from "../assets/childhood.jpg";
import pongal from "../assets/pongal.jpg";
import park1 from "../assets/park1.jpg";
import park2 from "../assets/park2.jpg";
import clg1 from "../assets/clg1.jpg";
import clg2 from "../assets/clg2.jpg";
import Kiruthika1 from "../assets/Kiruthika1.jpg";
import Kiruthika2 from "../assets/Kiruthika2.jpg";
import Kiruthika3 from "../assets/Kiruthika3.jpg";
import Kiruthika4 from "../assets/Kiruthika4.jpg";

export default function GalleryPage() {

  // 🔊 Song toggle state
  const [showSong, setShowSong] = useState(false);

  // ✅ ALL IMAGES IN SLIDER
  const images = [
    firstPhoto,
    childhood,
    pongal,
    park1,
    park2,
    clg1,
    clg2,
    Kiruthika1,
    Kiruthika2,
    Kiruthika3,
    Kiruthika4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Scroll Animation
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className="gallery-container">

      {/* 🎞️ SLIDER */}
      <div className="slider fade-up">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="slider-image"
        />
      </div>

      <h1 className="heading fade-up">Our Memories 💖</h1>

      {/* 🔻 SECTION 1 */}
      <div className="row fade-up">
        <img src={childhood} alt="Childhood" />
        <p>
          Childhood memories 💕 un siripu appovey romba azhaga irukum 😍
        </p>
      </div>

      {/* 🔻 SECTION 2 */}
      <div className="row reverse fade-up">
        <img src={pongal} alt="Pongal" />
        <p>
          Pongal vibes 🌾 namma serndhu celebrate pannina moments romba special ❤️
        </p>
      </div>

      {/* 💌 FINAL LETTER */}
      <div className="final-letter fade-up">
        <h2>Ithu unaku tha Gunduuu💖</h2>

        <p>
          First of all Happy Birthday Gunduuu💖 aparam.. i know anga all going good 
          intha naalukaga tha na romba wait panne because inaki unoda birthday and inaki actually na 
          anga irunthurukanum but... athu enaku kuduthu vaikala soo that intha small gift muliyama 
          na unkitta vanthuruke. nii na enaku rmb aa pudikum enaku ellamavu irunthuruka na epa odanjalu 
          enkuda ninuruka. nii epome happy aa irukanum atha na paakanum... and once again 
          <br /> Happy Birthday Gunduuuu💖 <br />
          Iru porathuku munadi oru paatu unakaga
        </p>

        {/* 🔊 BUTTON */}
        <button 
          className="music-btn"
          onClick={() => setShowSong(!showSong)}
        >
          {showSong ? "⏸ Stop Song" : "▶ Play Song"}
        </button>

        {/* 🎶 YOUTUBE SONG */}
        {showSong && (
          <div className="video-container">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/IYzRzD19R0A?autoplay=1"
              title="song"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}

      </div>

    </div>
  );
}