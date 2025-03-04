import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutPersonal from "./components/about/AboutPersonal";
import AboutProfessional from "./components/about/AboutProfessional";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import ExperienceHighlight from "./components/xp/ExperienceHighlight";
import { useEffect } from "react";
import { preloadImages } from "./utils/imagePreloader";
import { route } from "./common/app-constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  useEffect(() => {
    preloadImages()
      .then(() => console.log("Images preload success"))
      .catch((error) => console.error("Error preloading gallery images:", error));
  }, []);

  return (
    <div className="mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 p-10 md:from-0% md:from-50% md:to-[#d5c455] md:to-100% md:to-50% md:p-20">
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

      <ToastContainer />
    </div>
  );
};

export default App;
