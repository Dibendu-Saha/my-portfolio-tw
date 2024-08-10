import React from "react";
import Home from "./components/home/Home";
import "./App.scss";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mx-auto my-0 h-screen bg-gradient-to-r from-gray-200 to-yellow-300 px-10 py-20 md:px-20">
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
