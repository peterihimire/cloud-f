import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Research/hero";
import ApproachProblem from "../../components/services/Research/approachProblem";
import ServiceInsight from "../../components/services/Research/serviceInsight";
import HelpYou from "../../components/services/Research/helpYou";
import KoboTree from "../../components/services/Research/koboTree";


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
