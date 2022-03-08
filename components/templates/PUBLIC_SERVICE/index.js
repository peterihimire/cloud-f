import React from "react";
import PublicServiceHero from "./hero";
import ServiceInclusiveness from "./serviceInclusiveness";
import PublicVideo from "./publicVideo";
import ImageBg from "./imageBg";
import HowWeWork from "./howWeWork";
import ProductVision from "./productVision";
import CaseStudies from "./caseStudies";
import OurTeam from "./ourTeam";

const PublicServiceTemplate = ({ data }) => {
  console.log(data);
  return (
    <>
      <PublicServiceHero content={data.template.heroSection} />
      <ServiceInclusiveness content={data.template.sections[0]} />
      <PublicVideo content={data.template.sections[1]} />
      <ImageBg content={data.template.sections[2]} />
      <HowWeWork content={data.template.sections[2]} />
      <ProductVision content={data.template.sections[3]} />
      <CaseStudies content={data.template.sections[4]} />
      <OurTeam content={data.template.sections[5]} />
    </>
  );
};

export default PublicServiceTemplate;
