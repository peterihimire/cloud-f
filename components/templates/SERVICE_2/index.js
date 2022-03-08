import React from "react";
import Believe from "./believe";
import Commitment from "./commitment";
import Hero from "./hero";

const Services_2Template = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <Believe content={data.template.sections} />
      <Commitment content={data.template.sections[2]} />
    </>
  );
};

export default Services_2Template;
