import React from "react";
import SolutionsDeveloped from "../../industries/Fintech/solutionsDeveloped";
import BuildingPartner from "./buildingPartner";
import Hero from "./hero";
// import SolutionsDeveloped from "./solutionsDeveloped";
import TrustedBy from "./trustedBy";

const IndustriesTemplate = ({ data }) => {
  return (
    <>
      <Hero content={data.template.heroSection} />
      <BuildingPartner
        content={[data.template.sections[0], data.template.sections[1]]}
      />
      {/* <SolutionsDeveloped content={data.template.sections[2]} /> */}
      <SolutionsDeveloped content={data.template.heroSection.contentHeading} />
      <TrustedBy content={data.template.sections[2]} />
    </>
  );
};
export default IndustriesTemplate;
