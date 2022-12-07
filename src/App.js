import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUsPages from "./pages/AboutUsPages";
import GalleryPage from "./pages/GalleryPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div className="App">
      <Navbar className="fixed" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPages />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
