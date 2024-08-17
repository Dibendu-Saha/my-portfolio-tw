import React from "react";
import { Container, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import natwestLogo from "../../assets/img/xp/natwest_logo.svg";
import wfLogo from "../../assets/img/xp/wf_logo.svg";
import teksystemsLogo from "../../assets/img/xp/tek_logo.svg";
import downloadCvLogo from "../../assets/img/xp/icon-resume.png";
import SummaryCard from "./SummaryCard";

const ExperienceHighlight = () => {
  return (
    <Container>
      <Heading>
        Experience <span className="hidden md:inline-block">Highlight</span>
      </Heading>

      <PageContent className="gap-4">
        <LeftPane>
          <SummaryCard
            employerLogo={natwestLogo}
            jobTitle="Software Engineer"
            startDate="December 2022"
            endDate="Present"
          >
            <ul className="list-disc space-y-2">
              <li className="ml-4">Delivering new features for the bank's FX trading platform.</li>
              <li className="ml-4">Worked on the bank's internal app store.</li>
            </ul>
          </SummaryCard>

          <SummaryCard
            employerLogo={teksystemsLogo}
            jobTitle="Application Developer"
            startDate="October 2021"
            endDate="November 2022"
            imageScale="1.5"
          >
            <ul className="list-disc">
              <li className="ml-4">
                Built and contributed to replace HPE&#39;s manual workflow for creation and management of statement of
                works.
              </li>
              <li className="ml-4">
                This app proved to be a game-changer for the PMO team by automating the creation and oversight of
                statements of work for client opportunities, encompassing resource allocation, costing and billing
                details.
              </li>
            </ul>
          </SummaryCard>
        </LeftPane>

        <RightPane>
          <SummaryCard
            employerLogo={wfLogo}
            jobTitle="Technology Specialist"
            startDate="April 2018"
            endDate="August 2021"
          >
            <ul className="list-disc">
              <li className="ml-4">
                Revamped the bank&#39;s investment app dealing with money market funds, with a primary focus on
                enhancing the UI/UX.
              </li>
            </ul>
          </SummaryCard>
        </RightPane>
      </PageContent>

      <div className="fixed bottom-20 right-6">
        <a href="">
          <img src={downloadCvLogo} alt="" className="size-14 animate-bounce" />
        </a>
      </div>
    </Container>
  );
};

export default ExperienceHighlight;
