import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Devops/hero";
import ApproachProblem from "../../components/services/Devops/approachProblem";
import ServiceInsight from "../../components/services/Devops/serviceInsight";
import HelpYou from "../../components/services/Devops/helpYou";
import KoboTree from "../../components/services/Devops/koboTree";

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
