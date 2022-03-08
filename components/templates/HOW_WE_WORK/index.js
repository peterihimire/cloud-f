import React from "react";
import Client from "../../howWeWork/client";
// import Client from "./client";
import Cooperate from "./cooperate";
import Hero from "./hero";
import WhatWeDo from "./whatWeDo";
import WhatYouGet from "./whatYouGet";

const HowWeWorkTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <WhatYouGet content={data.template.sections[0]} />
      {/* <Client content={data.template.sections[2]} /> */}
      <Client />
      <Cooperate content={data.template.sections[3]} />
      <WhatWeDo content={data.template.sections[4]} />
    </>
  );
};

export default HowWeWorkTemplate;
