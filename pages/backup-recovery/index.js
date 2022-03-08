import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Backup/hero";
import ApproachProblem from "../../components/services/Backup/approachProblem";
import ServiceInsight from "../../components/services/Backup/serviceInsight";
import HelpYou from "../../components/services/Backup/helpYou";
import KoboTree from "../../components/services/Backup/koboTree";

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
