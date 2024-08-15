import React from "react";
import linkedinIcon from "../../assets/img/contact/icon-linkedin.svg";
import githubIcon from "../../assets/img/contact/icon-github.svg";
import instagramIcon from "../../assets/img/contact/icon-instagram.svg";
import fbIcon from "../../assets/img/contact/icon-facebook.svg";
import {
  Button,
  Container,
  Heading,
  IconCard,
  LeftPane,
  PageContent,
  RightPane,
  TextInput,
} from "../../common/AppComponents";

const Contact = () => {
  return (
    <Container>
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <p className="lg:mb-12">Interested to know more? Send me a 'hi'...</p>

          <div className="grid max-w-[600px] grid-cols-[1fr_2fr] items-center gap-x-2 gap-y-5 md:gap-x-0">
            <label htmlFor="name" className="md:text-base">
              Name
            </label>
            <TextInput name="name" />

            <label htmlFor="email" className="md:text-base">
              Email
            </label>
            <TextInput name="email" />

            <label htmlFor="message" className="md:text-base">
              Message
            </label>
            <TextInput type="textarea" cols="10" rows="6" />

            <Button className="col-start-2 mt-2 text-center">Send</Button>
          </div>
        </LeftPane>

        <RightPane>
          <p className="text-center text-3xl font-extralight">Follow me on...</p>

          <div className="mt-16 flex justify-evenly">
            <a href="">
              <IconCard imgSrc={linkedinIcon} altText="Linkedin icon" />
            </a>
            <a href="">
              <IconCard imgSrc={githubIcon} altText="Github icon" />
            </a>
            <a href="">
              <IconCard imgSrc={instagramIcon} altText="Instagram icon" />
            </a>
            <a href="">
              <IconCard imgSrc={fbIcon} altText="Facebook icon" />
            </a>
          </div>
        </RightPane>
      </PageContent>
    </Container>
  );
};

export default Contact;
