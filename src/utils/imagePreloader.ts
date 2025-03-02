import p1 from "../assets/img/gallery/p-1.jpg";
import p2 from "../assets/img/gallery/p-2.jpg";
import p3 from "../assets/img/gallery/p-3.jpg";
import p4 from "../assets/img/gallery/p-4.jpg";
import p5 from "../assets/img/gallery/p-5.jpg";
import p6 from "../assets/img/gallery/p-6.jpg";
import homeImage from "../assets/img/home/home-image.avif";

// Export the images so they can be reused
export const galleryImages = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  homeImage,
};

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadGalleryImages = (): Promise<void[]> => {
  const imagesToPreload = [p1, p2, p3, p4, p5, p6];
  return Promise.all(imagesToPreload.map((src) => preloadImage(src)));
};
