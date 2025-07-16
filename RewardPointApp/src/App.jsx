// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HistoryComp from "./components/HistoryComp";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import bgImage from "./assets/chess.webp"
function App() {
  return (
    <div className="min-h-screen bg-center bg-cover    p-4" style={{
        backgroundImage:`url(${bgImage})`,
      }} >
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<HistoryComp />} />
    </Routes>
    </div>
  );
}

export default App;
