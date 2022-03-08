import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Deployment/hero";
import ApproachProblem from "../../components/services/Deployment/approachProblem";
import ServiceInsight from "../../components/services/Deployment/serviceInsight";
import HelpYou from "../../components/services/Deployment/helpYou";
import KoboTree from "../../components/services/Deployment/koboTree";

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
