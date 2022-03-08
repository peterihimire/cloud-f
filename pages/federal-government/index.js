import React from "react";
import Layout from "../../layouts/landing";
import PublicServiceHero from "../../components/publicService/hero";
import ServiceInclusiveness from "../../components/publicService/serviceInclusiveness";
import PublicVideo from "../../components/publicService/publicVideo";
import HowWeWork from "../../components/publicService/howWeWork";
import ImageBg from "../../components/publicService/imageBg";
import ProductVision from "../../components/publicService/productVision";
import CaseStudies from "../../components/publicService/caseStudies";
import OurTeam from "../../components/publicService/ourTeam";

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
