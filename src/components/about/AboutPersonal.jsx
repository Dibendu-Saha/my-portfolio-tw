import React from "react";
import { Button, Container, Footer, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";

const AboutPersonal = () => {
  return (
    <Container>
      <Heading headerType="" className="lg:text-7xl">
        What's up!
      </Heading>

      <PageContent>
        <LeftPane>
          <p>
            Hi, I'm <strong>Dibendu Saha</strong>. I'm from the northeast Indian state of Assam and currently based in
            Bangalore.
          </p>

          <p>
            I speak four languages &#8212; English, Hindi, Assamese and Bengali being my native-tongue. Enjoy cooking
            and trying out recipes for my loved ones, as I believe nothing else can touch a soul more than wholesome
            foods.
          </p>

          <p>
            I love travelling (...I mean who doesn't), am a photography enthusiast and into biking and occasionally
            nowhere to be found on weekends. I'm also part of a professional rider's groups. So, I'm always in for both
            solo trips and group rides.
          </p>
        </LeftPane>
        <RightPane></RightPane>
      </PageContent>

      <Footer>
        <Button link="/about-professional">Learn more</Button>
      </Footer>
    </Container>
  );
};

export default AboutPersonal;
