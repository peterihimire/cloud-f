import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Fixing/hero";
import ApproachProblem from "../../components/services/Fixing/approachProblem";
import ServiceInsight from "../../components/services/Fixing/serviceInsight";
import HelpYou from "../../components/services/Fixing/helpYou";
import KoboTree from "../../components/services/Fixing/koboTree";

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
