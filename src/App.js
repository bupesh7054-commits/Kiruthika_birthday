import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage";
import TeddyPage from "./pages/TeddyPage";
import EnvelopePage from "./pages/EnvelopePage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/teddy" element={<TeddyPage />} />
        <Route path="/envelope" element={<EnvelopePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
