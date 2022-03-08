import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Upgrade/hero";
import ApproachProblem from "../../components/services/Upgrade/approachProblem";
import ServiceInsight from "../../components/services/Upgrade/serviceInsight";
import HelpYou from "../../components/services/Upgrade/helpYou";
import KoboTree from "../../components/services/Upgrade/koboTree";

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
