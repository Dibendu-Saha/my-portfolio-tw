import React from "react";
import { Header } from "../common/AppComponents";
import { component_type } from "../common/component-type";

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 justify-items-center">
      <div>
        <Header type={component_type.header}>Hey there!</Header>
        <Header type={component_type.header} headerType={component_type.header_light} className="mt-6">
          I'm Dibendu
        </Header>
      </div>

      <div className="col-start-2 row-start-2 flex flex-col items-center">
        <p className="text-xl font-light tracking-[0.25em]">Developer</p>
        <p className="text-xl font-light tracking-[0.25em]">&amp;</p>
        <p className="text-xl font-light tracking-[0.25em]">Design Enthusiast</p>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
