const GalleryImage: React.FC<{ src: string }> = ({ src }) => {
  return <img fetchPriority="high" src={src} className={`rounded-full p-2 transition-all duration-100 hover:rounded-3xl`} alt="image" />;
};

export default GalleryImage;
