import React from "react";
import Layout from "../../layouts/landing";
import IndustriesInsuranceHero from "../../components/industries/Insurance/hero";
import BuildingPartner from "../../components/industries/Insurance/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Insurance/solutionsDeveloped";
import TrustedBy from "../../components/industries/Insurance/trustedBy";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesInsuranceHero />
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
