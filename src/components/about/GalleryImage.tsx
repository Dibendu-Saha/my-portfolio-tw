const GalleryImage: React.FC<{ src: string }> = ({ src }) => {
  return <img fetchPriority="high" src={src} className={`rounded-full p-2 transition-all duration-100`} alt="image" />;
};

export default GalleryImage;
