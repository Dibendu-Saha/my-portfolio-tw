import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import ExperienceHighlight from "./components/xp/ExperienceHighlight";

import p1 from "./assets/img/gallery/p-1.jpg";
import p2 from "./assets/img/gallery/p-2.jpg";
import p3 from "./assets/img/gallery/p-3.jpg";
import p4 from "./assets/img/gallery/p-4.jpg";
import p5 from "./assets/img/gallery/p-5.jpg";
import p6 from "./assets/img/gallery/p-6.jpg";

import { route } from "./common/app-constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  let img1: HTMLImageElement = new Image(),
    img2: HTMLImageElement = new Image(),
    img3: HTMLImageElement = new Image(),
    img4: HTMLImageElement = new Image(),
    img5: HTMLImageElement = new Image(),
    img6: HTMLImageElement = new Image();

  useEffect(() => {
    img1.src = p1;
    img2.src = p2;
    img3.src = p3;
    img4.src = p4;
    img5.src = p5;
    img6.src = p6;
  }, []);

  return (
    <div className="mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 p-10 md:from-0% md:from-50% md:to-[#d5c455] md:to-100% md:to-50% md:p-20">
      <BrowserRouter>
        <Routes>
          <Route path={route.HOME} element={<Home />} />
          <Route path={route.ABOUT_PERSONAL} element={<AboutPersonal images={{ img1, img2, img3, img4, img5, img6 }} />} />
          <Route path={route.ABOUT_PROFESSIONAL} element={<AboutProfessional />} />
          <Route path={route.XP} element={<ExperienceHighlight />} />
          <Route path={route.CONTACT} element={<Contact />} />
        </Routes>

        <Menu />
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
};

export default App;
