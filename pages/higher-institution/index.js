import React from "react";
import Layout from "../../layouts/landing";
import PublicServiceHero from "../../components/higherInstitute/hero";
import ServiceInclusiveness from "../../components/higherInstitute/serviceInclusiveness";
import PublicVideo from "../../components/higherInstitute/publicVideo";
import HowWeWork from "../../components/higherInstitute/howWeWork";
import ImageBg from "../../components/higherInstitute/imageBg";
import ProductVision from "../../components/higherInstitute/productVision";
import CaseStudies from "../../components/higherInstitute/caseStudies";
import OurTeam from "../../components/higherInstitute/ourTeam";

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
