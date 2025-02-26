import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import ExperienceHighlight from "./components/xp/ExperienceHighlight";
import { useEffect } from "react";
import { preloadGalleryImages } from "./utils/imagePreloader";

import img1 from "./assets/img/gallery/p-1.jpg";
import img2 from "./assets/img/gallery/p-2.jpg";
import img3 from "./assets/img/gallery/p-3.jpg";
import img4 from "./assets/img/gallery/p-4.jpg";
import img5 from "./assets/img/gallery/p-5.jpg";
import img6 from "./assets/img/gallery/p-6.jpg";

import { route } from "./common/app-constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  useEffect(() => {
    preloadGalleryImages()
      .then(() => console.log("Gallery images preloaded successfully"))
      .catch((error) => console.error("Error preloading gallery images:", error));
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
