import React from "react";
import Analysis from "./analysis";
import Delivery from "./delivery";
import Features from "./features";
import Hero from "./hero";
import Trial from "./trial";

const HireEmployees = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <Delivery content={data.template.sections[0]} />
      <Features content={data.template.sections[1]} />
      <Analysis />
      <Trial content={data.template.sections[2]} />
    </>
  );
};

export default HireEmployees;
