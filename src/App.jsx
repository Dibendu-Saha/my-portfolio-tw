import React from "react";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "./App.scss";

const App = () => {
  return (
    // <div className="app-bg mx-auto my-0 min-h-screen bg-gradient-to-r from-[#e6e6e6] to-[#d5c455] px-10 py-10 md:px-20 md:py-20">
    // <div className="app-bg mx-auto my-0 min-h-screen px-10 py-10 md:px-20 md:py-20">
    <div className="mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 p-10 md:p-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-personal" element={<AboutPersonal />} />
          <Route path="/about-professional" element={<AboutProfessional />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Menu />
      </BrowserRouter>
    </div>
  );
};

export default App;
