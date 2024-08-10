import React from "react";
import { Button, Container, Footer, Header, LeftPane, PageContent, RightPane } from "../../common/AppComponents";
import iconNewWindow from "../../assets/img/icon-new-window.png";
import SkillIcons from "./skill-icons/SkillIcons";

const AboutProfessional = () => {
  return (
    <Container>
      <Header headerType="" className="lg:text-7xl">
        What I do?
      </Header>

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
          <SkillIcons />
        </RightPane>
      </PageContent>

      <Footer>
        <Button>See Work History</Button>
      </Footer>
    </Container>
  );
};

export default AboutProfessional;
