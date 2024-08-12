import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Artikel from "./Page/Artikel";
import Pahlawan from "./Page/Pahlawan";
import About from "./Page/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daftarpahlawan" element={<Pahlawan />} />
          <Route path="/daftarpahlawan/:namapahlawan" element={<Artikel />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
