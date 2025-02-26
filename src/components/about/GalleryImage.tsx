type GalleryImageComponentProps = {
  earlyImageSrc: string;
  src: string;
};

const GalleryImage: React.FC<GalleryImageComponentProps> = ({ earlyImageSrc, src }) => {
  return <img fetchPriority="high" src={earlyImageSrc ?? src} className={`rounded-full p-2 transition-all duration-100 hover:rounded-3xl`} alt="image" />;
};

export default GalleryImage;
