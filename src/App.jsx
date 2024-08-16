import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import ExperienceHighlight from "./components/xp/ExperienceHighlight";
import { route } from "./common/app-constants";
import "./App.scss";

const App = () => {
  return (
    // <div className="app-bg mx-auto my-0 min-h-screen bg-gradient-to-r from-[#e6e6e6] to-[#d5c455] px-10 py-10 md:px-20 md:py-20">
    // <div className="app-bg mx-auto my-0 min-h-screen px-10 py-10 md:px-20 md:py-20">
    <div className="mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 p-10 md:p-20">
      <BrowserRouter>
        <Routes>
          <Route path={route.HOME} element={<Home />} />
          <Route path={route.ABOUT_PERSONAL} element={<AboutPersonal />} />
          <Route path={route.ABOUT_PROFESSIONAL} element={<AboutProfessional />} />
          <Route path={route.XP} element={<ExperienceHighlight />} />
          <Route path={route.CONTACT} element={<Contact />} />
        </Routes>

        <Menu />
      </BrowserRouter>
    </div>
  );
};

export default App;
