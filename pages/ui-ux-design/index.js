import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/UIdesign/hero";
import ApproachProblem from "../../components/services/UIdesign/approachProblem";
import ServiceInsight from "../../components/services/UIdesign/serviceInsight";
import HelpYou from "../../components/services/UIdesign/helpYou";
import KoboTree from "../../components/services/UIdesign/koboTree";

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
