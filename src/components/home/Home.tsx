import { Button, Container, Footer, Heading } from "../../common/AppComponents";
import { heading_type, route } from "../../common/app-constants";
import { siteImages } from "../../utils/imagePreloader";

const Home = () => {
  return (
    <Container>
      <div className="md:gap-y-30 mt-20 flex flex-col items-center justify-center gap-40 md:grid md:grid-cols-2 md:justify-items-center md:gap-x-0">
        <div>
          <Heading className="animate-fade-down md:animate-fade-right" type={heading_type.bold}>
            Hey there!
          </Heading>
          <Heading className="animate-type-fast lg:mt-6">I'm Dibendu</Heading>
        </div>

        <div className="col-start-2 row-start-2 flex animate-fade-up flex-col items-center gap-1 md:animate-fade-left">
          <p className="text-xl font-light tracking-[0.25em]">Developer</p>
          <p className="text-xl font-light tracking-[0.25em]">&amp;</p>
          {/* <p className="hidden text-xl font-light tracking-[0.25em] lg:block">Design Enthusiast</p> */}

          <div className="flex gap-[10px] lg:flex lg:flex-row lg:gap-[10px]">
            <p className="text-xl font-light tracking-[0.25em]">Design</p>
            <p className="text-xl font-light tracking-[0.25em]">Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[345px] -translate-x-1/2 -translate-y-1/2 md:top-[400px] lg:top-[430px]">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={siteImages.homeImage}
          className="size-36 animate-swing rounded-full border-4 border-gray-200 lg:size-48"
          alt=""
        />
      </div>
      <Footer>
        <Button link={route.ABOUT_PERSONAL}>Let's Explore</Button>
      </Footer>
    </Container>
  );
};

export default Home;
