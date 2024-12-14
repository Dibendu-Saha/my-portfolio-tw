import { Button, Container, Footer, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import p1 from "../../assets/img/gallery/p-1.jpg";
import p2 from "../../assets/img/gallery/p-2.jpg";
import p3 from "../../assets/img/gallery/p-3.jpg";
import p4 from "../../assets/img/gallery/p-4.jpg";
import p5 from "../../assets/img/gallery/p-5.jpg";
import p6 from "../../assets/img/gallery/p-6.jpg";
import { route } from "../../common/app-constants";
import GalleryImage from "./GalleryImage";

type AboutPersonalComponentProps = {
  images: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
  };
};

const AboutPersonal: React.FC<AboutPersonalComponentProps> = ({ images }) => {
  const { img1, img2, img3, img4, img5, img6 } = images;

  return (
    <Container>
      <Heading>What's up!</Heading>

      <PageContent>
        <LeftPane>
          <p>
            Hi, I'm <strong>Dibendu Saha</strong>. Originally from the northeastern state of Assam, I now call Bangalore home.
          </p>

          <p>
            I'm fluent in four languages &#8212; English, Hindi, Assamese and Bengali, my native tongue. I have a passion for cooking and love experimenting
            with new recipes for my loved ones, believing that nothing touches the soul quite like wholesome food.
          </p>

          <p>
            Traveling is one of my greatest joys (like who doesn't love it?), and I'm an avid photography enthusiast. I also enjoy biking and occasionally
            nowhere to be found on weekends. I'm also part of a professional rider's groups. So, I'm always in for both solo trips and group rides.
          </p>
        </LeftPane>
        <RightPane>
          <div className="grid grid-cols-3 lg:max-xl:mx-12 lg:max-xl:w-80 lg:max-xl:grid-cols-2 2xl:mx-12">
            <GalleryImage earlyImageSrc={img1} src={p1} />
            <GalleryImage earlyImageSrc={img2} src={p2} />
            <GalleryImage earlyImageSrc={img3} src={p3} />
            <GalleryImage earlyImageSrc={img4} src={p4} />
            <GalleryImage earlyImageSrc={img5} src={p5} />
            <GalleryImage earlyImageSrc={img6} src={p6} />
          </div>
        </RightPane>
      </PageContent>

      <Footer>
        <Button link={route.ABOUT_PROFESSIONAL}>Learn more</Button>
      </Footer>
    </Container>
  );
};

export default AboutPersonal;
