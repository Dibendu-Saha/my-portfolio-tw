import React from "react";
import { Container, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";

const Contact = () => {
  return (
    <Container>
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <div className="grid max-w-[600px] grid-cols-[1fr_2fr] items-center gap-y-5">
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <input type="text" name="name" className="h-8" />

            <label htmlFor="email" className="text-base">
              Email
            </label>
            <input type="text" name="email" className="h-8" />

            <label htmlFor="message" className="text-base">
              Message
            </label>
            <textarea cols="10" rows="6" name="message" className="resize-none" />
          </div>
        </LeftPane>

        <RightPane className="x-border-red h-48"></RightPane>
      </PageContent>
    </Container>
  );
};

export default Contact;
