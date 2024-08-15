import React from "react";
import { Button, Container, Heading, LeftPane, PageContent, RightPane, TextInput } from "../../common/AppComponents";

const Contact = () => {
  return (
    <Container className="x-border-red">
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <div className="grid max-w-[600px] grid-cols-[1fr_2fr] items-center gap-y-5">
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
          </div>

          <Button className="mt-2">Send</Button>
        </LeftPane>

        <RightPane className="x-border-red h-48"></RightPane>
      </PageContent>
    </Container>
  );
};

export default Contact;
