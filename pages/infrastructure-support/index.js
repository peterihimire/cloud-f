import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNearshoreHero from "../../components/services/Support/hero";
import ApproachProblem from "../../components/services/Support/approachProblem";
import ServiceInsight from "../../components/services/Support/serviceInsight";
import HelpYou from "../../components/services/Support/helpYou";
import KoboTree from "../../components/services/Support/koboTree";

const InfrastructureSupport = () => {
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

export default InfrastructureSupport;

InfrastructureSupport.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
