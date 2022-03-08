import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Design/hero";
import ApproachProblem from "../../components/services/Design/approachProblem";
import ServiceInsight from "../../components/services/Design/serviceInsight";
import HelpYou from "../../components/services/Design/helpYou";
import KoboTree from "../../components/services/Design/koboTree";

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
