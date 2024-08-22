import React from "react";
import linkedinIcon from "../../assets/img/contact/icon-linkedin.svg";
import githubIcon from "../../assets/img/contact/icon-github.svg";
import instagramIcon from "../../assets/img/contact/icon-instagram.svg";
import fbIcon from "../../assets/img/contact/icon-facebook.svg";
import { Button, Container, Heading, IconCard, LeftPane, PageContent, RightPane, TextInput } from "../../common/AppComponents";

const Contact = () => {
  return (
    <Container>
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <p className="-mb-6 lg:-mb-7">Interested to know more?</p>
          <p className="lg:mb-12">Send me a 'hi'...</p>

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

            <Button className="col-start-2 mt-2 animate-fade-up text-center">Send</Button>
          </div>
        </LeftPane>

        <RightPane>
          <p className="text-center text-3xl font-extralight">Follow me on...</p>

          <div className="mt-5 flex justify-evenly lg:mt-16">
            <a href="https://www.linkedin.com/in/dibendu-saha/" target="_blank" rel="noreferrer">
              <IconCard imgSrc={linkedinIcon} altText="Linkedin icon" />
            </a>
            <a href="https://github.com/Dibendu-Saha" target="_blank" rel="noreferrer" className="animate-delay-[0.4s]">
              <IconCard imgSrc={githubIcon} altText="Github icon" />
            </a>
            <a href="https://www.instagram.com/dibendu.s/" target="_blank" rel="noreferrer" className="animate-delay-[0.8s]">
              <IconCard imgSrc={instagramIcon} altText="Instagram icon" />
            </a>
            <a href="https://www.facebook.com/dibendu03" target="_blank" rel="noreferrer" className="animate-delay-[1.2s]">
              <IconCard imgSrc={fbIcon} altText="Facebook icon" />
            </a>
          </div>
        </RightPane>
      </PageContent>

      <div className="absolute bottom-3 right-3 animate-fade-up text-xs animate-delay-1000">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Contact;
