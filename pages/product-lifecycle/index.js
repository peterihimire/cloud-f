import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Lifecycle/hero";
import ApproachProblem from "../../components/services/Lifecycle/approachProblem";
import ServiceInsight from "../../components/services/Lifecycle/serviceInsight";
import HelpYou from "../../components/services/Lifecycle/helpYou";
import KoboTree from "../../components/services/Lifecycle/koboTree";


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
