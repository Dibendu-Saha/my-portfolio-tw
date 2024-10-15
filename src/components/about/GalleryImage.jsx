import React from "react";

const GalleryImage = ({ earlyImageSrc, src }) => {
  return <img src={earlyImageSrc.length ? earlyImageSrc : src} className={`rounded-full p-2 transition-all duration-100 hover:rounded-3xl`} alt="image" />;
};

export default GalleryImage;
