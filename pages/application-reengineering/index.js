import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Reengineering/hero";
import ApproachProblem from "../../components/services/Reengineering/approachProblem";
import ServiceInsight from "../../components/services/Reengineering/serviceInsight";
import HelpYou from "../../components/services/Reengineering/helpYou";
import KoboTree from "../../components/services/Reengineering/koboTree";

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
