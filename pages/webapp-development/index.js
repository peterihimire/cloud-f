import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Webapp/hero";
import ApproachProblem from "../../components/services/Webapp/approachProblem";
import ServiceInsight from "../../components/services/Webapp/serviceInsight";
import HelpYou from "../../components/services/Webapp/helpYou";
import KoboTree from "../../components/services/Webapp/koboTree";

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
