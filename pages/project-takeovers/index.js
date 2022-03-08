import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Takeovers/hero";
import ApproachProblem from "../../components/services/Takeovers/approachProblem";
import ServiceInsight from "../../components/services/Takeovers/serviceInsight";
import HelpYou from "../../components/services/Takeovers/helpYou";
import KoboTree from "../../components/services/Takeovers/koboTree";

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
