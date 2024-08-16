import React from "react";
import { Container, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import natwestLogo from "../../assets/img/xp/natwest_logo.svg";
import wfLogo from "../../assets/img/xp/wf_logo.svg";
import SummaryCard from "./SummaryCard";

const ExperienceHighlight = () => {
  return (
    <Container>
      <Heading>
        Experience <span className="hidden md:block">Highlight</span>
      </Heading>

      <PageContent>
        <LeftPane>
          <SummaryCard
            employerLogo={natwestLogo}
            jobTitle="Software Engineer"
            startDate="December 2022"
            endDate="Present"
          >
            <ul className="list-disc space-y-2">
              <li className="ml-4">Working on delivering new features for the bank's FX trading platform.</li>
              <li className="ml-4">Worked on the bank's internal app store.</li>
            </ul>
          </SummaryCard>

          <SummaryCard
            employerLogo={wfLogo}
            jobTitle="Technology Specialist"
            startDate="April 2018"
            endDate="August 2021"
          >
            <ul className="list-disc">
              <li className="ml-4">
                Redesigned &amp; revamped the bank&#39;s investment app dealing with money market funds, with a primary
                focus on enhancing the UI/UX.
              </li>
            </ul>
          </SummaryCard>
        </LeftPane>
      </PageContent>
    </Container>
  );
};

export default ExperienceHighlight;
