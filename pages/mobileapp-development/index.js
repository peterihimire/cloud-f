import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Mobileapp/hero";
import ApproachProblem from "../../components/services/Mobileapp/approachProblem";
import ServiceInsight from "../../components/services/Mobileapp/serviceInsight";
import HelpYou from "../../components/services/Mobileapp/helpYou";
import KoboTree from "../../components/services/Mobileapp/koboTree";

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
