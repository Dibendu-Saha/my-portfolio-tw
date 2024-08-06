import React from "react";
import { Header } from "../common/AppComponents";
import { component_type } from "../common/component-type";

const Home = () => {
  return (
    <div className="grid h-full grid-cols-2 justify-items-center border border-black">
      <div>
        <Header>Hey there!</Header>
        <Header headerType={component_type.header_light} className="mt-6">
          I'm Dibendu
        </Header>
      </div>

      <div className="col-start-2 row-start-2 flex flex-col items-center gap-1">
        <p className="text-xl font-light tracking-[0.25em]">Developer</p>
        <p className="text-xl font-light tracking-[0.25em]">&amp;</p>
        {/* <p className="hidden text-xl font-light tracking-[0.25em] lg:block">Design Enthusiast</p> */}

        <div className="flex flex-col items-center lg:flex lg:flex-row lg:gap-[10px]">
          <p className="text-xl font-light tracking-[0.25em]">Design</p>
          <p className="text-xl font-light tracking-[0.25em]">Enthusiast</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
