import React from "react";
import Layout from "../../layouts/landing";
import IndustriesIndustrialHero from "../../components/industries/Industrial/hero";
import BuildingPartner from "../../components/industries/Industrial/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Industrial/solutionsDeveloped";
import TrustedBy from "../../components/industries/Industrial/trustedBy";


const IndustiesFintech = () => {
  return (
    <>
      <IndustriesIndustrialHero />
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
