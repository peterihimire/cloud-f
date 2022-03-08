import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Concept/hero";
import ApproachProblem from "../../components/services/Concept/approachProblem";
import ServiceInsight from "../../components/services/Concept/serviceInsight";
import HelpYou from "../../components/services/Concept/helpYou";
import KoboTree from "../../components/services/Concept/koboTree";


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
