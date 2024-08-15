import React from "react";
import { Button, Container, Heading, LeftPane, PageContent, RightPane, TextInput } from "../../common/AppComponents";

const Contact = () => {
  return (
    <Container>
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <div className="grid max-w-[600px] grid-cols-[1fr_2fr] items-center gap-x-2 gap-y-5 md:gap-x-0">
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <TextInput name="name" />

            <label htmlFor="email" className="text-base">
              Email
            </label>
            <TextInput name="email" />

            <label htmlFor="message" className="text-base">
              Message
            </label>
            <TextInput type="textarea" cols="10" rows="6" />

            <Button className="col-start-2 mt-2 text-center">Send</Button>
          </div>
        </LeftPane>

        <RightPane className="h-48"></RightPane>
      </PageContent>
    </Container>
  );
};

export default Contact;
