import React from "react";
import { Button, Container, Footer, Header } from "../../common/AppComponents";
import { header_type } from "../../common/component-type";

const Home = () => {
  return (
    <Container>
      <div className="md:gap-y-30 mt-20 flex flex-col items-center justify-center gap-20 md:grid md:grid-cols-2 md:justify-items-center md:gap-x-0">
        <div>
          <Header className="lg:text-7xl" headerType={header_type.bold}>
            Hey there!
          </Header>
          <Header className="mt-6 lg:text-7xl">I'm Dibendu</Header>
        </div>

        <div className="col-start-2 row-start-2 flex flex-col items-center gap-1">
          <p className="text-xl font-light tracking-[0.25em]">Developer</p>
          <p className="text-xl font-light tracking-[0.25em]">&amp;</p>
          {/* <p className="hidden text-xl font-light tracking-[0.25em] lg:block">Design Enthusiast</p> */}

          <div className="flex gap-[10px] lg:flex lg:flex-row lg:gap-[10px]">
            <p className="text-xl font-light tracking-[0.25em]">Design</p>
            <p className="text-xl font-light tracking-[0.25em]">Enthusiast</p>
          </div>
        </div>
      </div>

      <Footer>
        <Button>Let's Explore</Button>
      </Footer>
    </Container>
  );
};

export default Home;
