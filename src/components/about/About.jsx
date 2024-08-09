import React from "react";
import { Container, Header } from "../../common/AppComponents";

const About = () => {
  return (
    <Container>
      <Header headerType="" className="lg:text-7xl">
        What's up!
      </Header>

      <div className="mt-20 flex">
        <div className="w-full space-y-8 text-justify text-base font-light leading-relaxed tracking-wide">
          <p>
            Hi, I'm <strong>Dibendu Saha</strong>. I'm from the northeast Indian state of Assam and currently based in Bangalore.
          </p>

          <p>
            I speak four languages &#8212; English, Hindi, Assamese and Bengali being my native-tongue. Enjoy cooking and trying out recipes for my loved ones,
            as I believe nothing else can touch a soul more than wholesome foods.
          </p>

          <p>
            I love travelling <i>(...I mean who doesn't)</i>, am a photography enthusiast and into biking and occasionally nowhere to be found on weekends. I'm
            also part of a professional rider's groups. So, I go for both solo trips and group rides.
          </p>
        </div>
        <div className="h-20 w-full border border-black"></div>
      </div>
    </Container>
  );
};

export default About;
