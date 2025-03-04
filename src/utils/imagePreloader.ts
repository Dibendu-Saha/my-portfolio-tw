import p1 from "../assets/img/gallery/p-1.jpg";
import p2 from "../assets/img/gallery/p-2.jpg";
import p3 from "../assets/img/gallery/p-3.jpg";
import p4 from "../assets/img/gallery/p-4.jpg";
import p5 from "../assets/img/gallery/p-5.jpg";
import p6 from "../assets/img/gallery/p-6.jpg";
import homeImage from "../assets/img/home/home-image.avif";
import reactIcon from "../assets/img/skills/icon-react.svg";
import reduxIcon from "../assets/img/skills/icon-redux.svg";
import jsIcon from "../assets/img/skills/icon-javascript.svg";
import twIcon from "../assets/img/skills/icon-tailwind.svg";
import scssIcon from "../assets/img/skills/icon-scss.svg";
import jqueryIcon from "../assets/img/skills/icon-jquery.svg";
import htmlIcon from "../assets/img/skills/icon-html.svg";
import cssIcon from "../assets/img/skills/icon-css3.svg";
import dotNetIcon from "../assets/img/skills/icon-dotnet-core.svg";
import cSharpIcon from "../assets/img/skills/icon-c-sharp.svg";
import apiIcon from "../assets/img/skills/icon-api.svg";
import dbIcon from "../assets/img/skills/icon-database.svg";

// Export the images so they can be reused
export const siteImages = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  homeImage,
  reactIcon,
  reduxIcon,
  jsIcon,
  twIcon,
  scssIcon,
  jqueryIcon,
  htmlIcon,
  cssIcon,
  dotNetIcon,
  cSharpIcon,
  apiIcon,
  dbIcon,
};

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (): Promise<void[]> => {
  const imagesToPreload = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    homeImage,
    reactIcon,
    reduxIcon,
    jsIcon,
    twIcon,
    scssIcon,
    jqueryIcon,
    htmlIcon,
    cssIcon,
    dotNetIcon,
    cSharpIcon,
    apiIcon,
    dbIcon,
  ];
  return Promise.all(imagesToPreload.map((src) => preloadImage(src)));
};
