import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Study/hero";
import ApproachProblem from "../../components/services/Study/approachProblem";
import ServiceInsight from "../../components/services/Study/serviceInsight";
import HelpYou from "../../components/services/Study/helpYou";
import KoboTree from "../../components/services/Study/koboTree";


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
