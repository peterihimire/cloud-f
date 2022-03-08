import React from "react";
import Layout from "../../layouts/landing";
import IndustriesMarketingHero from "../../components/industries/Marketing/hero";
import BuildingPartner from "../../components/industries/Marketing/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Marketing/solutionsDeveloped";
import TrustedBy from "../../components/industries/Marketing/trustedBy";


const IndustiesFintech = () => {
  return (
    <>
      <IndustriesMarketingHero />
      <BuildingPartner />
      <SolutionsDeveloped />
      <TrustedBy />
    </>
  );
};

export default IndustiesFintech;

IndustiesFintech.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
