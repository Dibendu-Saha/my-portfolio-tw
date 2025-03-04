import { Button, Container, Footer, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import { route } from "../../common/app-constants";
import GalleryImage from "./GalleryImage";
import { siteImages } from "../../utils/imagePreloader";

const AboutPersonal: React.FC = () => {
  const { p1, p2, p3, p4, p5, p6 } = siteImages;

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
            <GalleryImage src={p1} />
            <GalleryImage src={p2} />
            <GalleryImage src={p3} />
            <GalleryImage src={p4} />
            <GalleryImage src={p5} />
            <GalleryImage src={p6} />
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
