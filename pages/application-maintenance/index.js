import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Maintenance/hero";
import ApproachProblem from "../../components/services/Maintenance/approachProblem";
import ServiceInsight from "../../components/services/Maintenance/serviceInsight";
import HelpYou from "../../components/services/Maintenance/helpYou";
import KoboTree from "../../components/services/Maintenance/koboTree";

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
