import React from "react";
import Layout from "../../layouts/landing";
import IndustriesRetailHero from "../../components/industries/Retail/hero";
import BuildingPartner from "../../components/industries/Retail/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Retail/solutionsDeveloped";
import TrustedBy from "../../components/industries/Retail/trustedBy";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesRetailHero />
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
