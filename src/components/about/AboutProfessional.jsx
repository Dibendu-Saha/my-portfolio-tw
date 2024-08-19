import React from "react";
import { Button, Container, Footer, Heading, IconCard, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import { route } from "../../common/app-constants";
import iconNewWindow from "../../assets/img/skills/icon-new-window.png";
import reactIcon from "../../assets/img/skills/icon-react.svg";
import reduxIcon from "../../assets/img/skills/icon-redux.svg";
import jsIcon from "../../assets/img/skills/icon-javascript.svg";
import jqueryIcon from "../../assets/img/skills/icon-jquery.svg";
import htmlIcon from "../../assets/img/skills/icon-html.svg";
import cssIcon from "../../assets/img/skills/icon-css3.svg";
import dotNetIcon from "../../assets/img/skills/icon-dotnet-core.svg";
import cSharpIcon from "../../assets/img/skills/icon-c-sharp.svg";
import apiIcon from "../../assets/img/skills/icon-api.svg";
import dbIcon from "../../assets/img/skills/icon-database.svg";

const AboutProfessional = () => {
  return (
    <Container>
      <Heading>What I do?</Heading>

      <PageContent>
        <LeftPane>
          <p>
            I'm a <strong>full-stack developer</strong> by profession. I design web user interfaces and hook them up with backend API's to build complete
            data-driven solutions for end-clients.
          </p>

          <p>
            I was mainly into backend programming developing Web API's in C# and ASP.NET other than the usual jQuery but since I'm passionate about web design,
            graphics and design in general, I managed to get my hands dirty into the world of UI and UX &#8212; working exclusively on the frontend tech stack
            &#8212; HTML5, CSS3, JavaScript and React.
          </p>

          <p>
            I also hold a certification in{" "}
            <a href="https://www.credly.com/badges/3c6991e8-43ec-4dc5-8006-d19ec9a456e6" target="_blank" rel="noreferrer" className="hover:text-blue-900">
              <span className="border-b border-black hover:border-blue-900">Azure Fundamentals</span>
              <span>
                <img src={iconNewWindow} alt="Open in new window icon" className="mb-2 ml-1 mr-2 inline-block size-4" />
              </span>
            </a>
            from Microsoft.
          </p>

          <p>
            At present, I'm a <strong>Sr. Software Engineer</strong> at <strong>NatWest Group</strong>, where I primarily work on the frontend, developing user
            interface components with <strong>React</strong> and <strong>SCSS</strong> and connect it via the Web API using <strong>C#, ASP.NET Core</strong>{" "}
            and <strong>SQL Server</strong>.
          </p>
        </LeftPane>

        <RightPane>
          <div className="grid grid-cols-4 lg:gap-y-6">
            {/* animate-[reveal-icons-left_1s_ease-out_1s] TO BE INVESTIGATED LATER */}
            <IconCard imgSrc={reactIcon} altText="react icon" title="React" />
            <IconCard className="animate-delay-[0.2s]" imgSrc={reduxIcon} altText="redux icon" title="Redux" />
            <IconCard className="animate-delay-[0.4s]" imgSrc={jsIcon} altText="javascript icon" title="JavaScipt" />
            <IconCard className="animate-delay-[0.6s]" imgSrc={jqueryIcon} altText="jquery icon" title="jQuery" />

            <IconCard className="animate-delay-[0.8s]" imgSrc={htmlIcon} altText="html icon" title="HTML" />
            <IconCard className="animate-delay-[1s]" imgSrc={cssIcon} altText="css icon" title="CSS" />
            <IconCard className="animate-delay-[1.2s]" imgSrc={dotNetIcon} altText="dot net core icon" title=".NET Core" />
            <IconCard className="animate-delay-[1.4s]" imgSrc={cSharpIcon} altText="c sharp icon" title="C#" />

            <IconCard className="animate-delay-[1.6s] col-start-2" imgSrc={apiIcon} altText="api icon" title="Web API" />
            <IconCard className="animate-delay-[1.8s] col-start-3" imgSrc={dbIcon} altText="database icon" title="SQL Server" />
          </div>
        </RightPane>
      </PageContent>

      <Footer>
        <Button link={route.XP}>See Work History</Button>
      </Footer>
    </Container>
  );
};

export default AboutProfessional;
