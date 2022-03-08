import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Planning/hero";
import ApproachProblem from "../../components/services/Planning/approachProblem";
import ServiceInsight from "../../components/services/Planning/serviceInsight";
import HelpYou from "../../components/services/Planning/helpYou";
import KoboTree from "../../components/services/Planning/koboTree";



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
