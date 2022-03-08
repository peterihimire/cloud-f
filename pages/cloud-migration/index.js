import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Migration/hero";
import ApproachProblem from "../../components/services/Migration/approachProblem";
import ServiceInsight from "../../components/services/Migration/serviceInsight";
import HelpYou from "../../components/services/Migration/helpYou";
import KoboTree from "../../components/services/Migration/koboTree";

const ServicesDesign = () => {
  return (
    <>
      <IndustriesNearshoreHero />
      <ApproachProblem />
      <HelpYou />
      <KoboTree />
      <ServiceInsight />
    </>
  );
};

export default ServicesDesign;

ServicesDesign.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
