import React from "react";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    // <div className="app-bg mx-auto my-0 min-h-screen bg-gradient-to-r from-[#e6e6e6] to-[#d5c455] px-10 py-10 md:px-20 md:py-20">
    <div className="app-bg mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 px-10 py-10 md:px-20 md:py-20">
      {/* <div className="app-bg mx-auto my-0 min-h-screen px-10 py-10 md:px-20 md:py-20"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-personal" element={<AboutPersonal />} />
          <Route path="/about-professional" element={<AboutProfessional />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
