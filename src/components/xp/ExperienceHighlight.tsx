import { Button, Container, Footer, Heading, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import natwestLogo from "../../assets/img/xp/natwest_logo.svg";
import wfLogo from "../../assets/img/xp/wf_logo.svg";
import teksystemsLogo from "../../assets/img/xp/tek_logo.svg";
import downloadCvLogo from "../../assets/img/xp/icon-resume.png";
import SummaryCard from "./SummaryCard";
import { route } from "../../common/app-constants";
import { ENDPOINT } from "../../services/endpoints";

const ExperienceHighlight = () => {
  return (
    <Container>
      <Heading>
        Experience <span className="hidden md:inline-block">Highlight</span>
      </Heading>

      <PageContent className="gap-4 lg:gap-10">
        <LeftPane>
          <SummaryCard employerLogo={natwestLogo} jobTitle="Software Engineer" startDate="December 2022" endDate="Present">
            <ul className="list-disc space-y-2">
              <li className="ml-4">Delivering new features for the bank's FX trading platform.</li>
              <li className="ml-4">Worked on the bank's internal app store.</li>
            </ul>
          </SummaryCard>

          <SummaryCard employerLogo={teksystemsLogo} jobTitle="Application Developer" startDate="October 2021" endDate="November 2022" imageScale="1.5">
            <ul className="list-disc">
              <li className="ml-4">Built and contributed to replace HPE&#39;s manual workflow for creation and management of statement of works.</li>
              <li className="ml-4">
                This app proved to be a game-changer for the PMO team by automating the creation and oversight of statements of work for client opportunities,
                encompassing resource allocation, costing and billing details.
              </li>
            </ul>
          </SummaryCard>
        </LeftPane>

        <RightPane className="mt-2">
          <SummaryCard employerLogo={wfLogo} jobTitle="Technology Specialist" startDate="April 2018" endDate="August 2021">
            <ul className="list-disc">
              <li className="ml-4">Revamped the bank&#39;s investment app dealing with money market funds, with a primary focus on enhancing the UI/UX.</li>
            </ul>
          </SummaryCard>

          <a href={ENDPOINT.DOWNLOAD_CV} target="_blank" rel="noreferrer">
            <SummaryCard employerLogo={downloadCvLogo} jobTitle="Download CV" className="mt-6 hidden md:flex lg:mt-8" logoClassName="animate-swing" actionable>
              <p>Download my CV to know more...</p>
            </SummaryCard>
          </a>
        </RightPane>
      </PageContent>

      <Footer>
        <Button link={route.CONTACT}>Let's talk?</Button>
      </Footer>

      <div className="fixed bottom-20 right-6 md:hidden">
        <a href={ENDPOINT.DOWNLOAD_CV}>
          <img src={downloadCvLogo} alt="" className="size-14 animate-swing" />
        </a>
      </div>
    </Container>
  );
};

export default ExperienceHighlight;
