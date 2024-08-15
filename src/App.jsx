import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Artikel from "./Page/Artikel";
import Pahlawan from "./Page/Pahlawan";
import Game from "./Page/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Susunkata from "./Page/GameList/Susunkata";
import MemoryCard from "./Page/GameList/MemoryCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daftarpahlawan" element={<Pahlawan />} />
          <Route path="/daftarpahlawan/:namapahlawan" element={<Artikel />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/susun-kata" element={<Susunkata />} />
          <Route path="/game/memory" element={<MemoryCard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
