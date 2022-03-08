import React from "react";
import Layout from "../../layouts/landing";
import PublicServiceHero from "../../components/stateGovernment/hero";
import ServiceInclusiveness from "../../components/stateGovernment/serviceInclusiveness";
import PublicVideo from "../../components/stateGovernment/publicVideo";
import HowWeWork from "../../components/stateGovernment/howWeWork";
import ImageBg from "../../components/stateGovernment/imageBg";
import ProductVision from "../../components/stateGovernment/productVision";
import CaseStudies from "../../components/stateGovernment/caseStudies";
import OurTeam from "../../components/stateGovernment/ourTeam";

const ServicesDesign = () => {
  return (
    <>
      <PublicServiceHero />
      <ServiceInclusiveness />
      <PublicVideo />
      <ImageBg />

      <HowWeWork />
      <ProductVision />
      <CaseStudies />
      <OurTeam />
    </>
  );
};

export default ServicesDesign;

ServicesDesign.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
