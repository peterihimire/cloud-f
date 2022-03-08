import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Cloud/hero";
import ApproachProblem from "../../components/services/Cloud/approachProblem";
import ServiceInsight from "../../components/services/Cloud/serviceInsight";
import HelpYou from "../../components/services/Cloud/helpYou";
import KoboTree from "../../components/services/Cloud/koboTree";



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
