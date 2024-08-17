import React from "react";
import { Button, Container, Footer, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import { route } from "../../common/app-constants";

const AboutPersonal = () => {
  return (
    <Container>
      <Heading className="animate-typing">What's up!</Heading>

      <PageContent>
        <LeftPane>
          <p>
            Hi, I'm <strong>Dibendu Saha</strong>. Originally from the northeastern state of Assam, I now call Bangalore
            home.
          </p>

          <p>
            I'm fluent in four languages &#8212; English, Hindi, Assamese and Bengali, my native tongue. I have a
            passion for cooking and love experimenting with new recipes for my loved ones, believing that nothing
            touches the soul quite like wholesome food.
          </p>

          <p>
            Traveling is one of my greatest joys (like who doesn't love it?), and I'm an avid photography enthusiast. I
            also enjoy biking and occasionally nowhere to be found on weekends. I'm also part of a professional rider's
            groups. So, I'm always in for both solo trips and group rides.
          </p>
        </LeftPane>
        <RightPane></RightPane>
      </PageContent>

      <Footer>
        <Button link={route.ABOUT_PROFESSIONAL}>Learn more</Button>
      </Footer>
    </Container>
  );
};

export default AboutPersonal;
