import React from "react";
import Hero from "./hero";
import Projects from "./projects";
import Responsibility from "./responsibility";
import WhatWeDo from "./whatWeDo";

const CSRTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <Responsibility content={data.template.sections[0]} />
      <WhatWeDo content={data.template.sections[1]} />
      <Projects content={data.template.sections[2]} />
    </>
  );
};

export default CSRTemplate;
