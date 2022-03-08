import React from "react";
import Layout from "../../layouts/landing";
import IndustriesNonProfitHero from "../../components/industries/NonProfit/hero";
import BuildingPartner from "../../components/industries/NonProfit/buildingPartner";
import SolutionsDeveloped from "../../components/industries/NonProfit/solutionsDeveloped";
import TrustedBy from "../../components/industries/NonProfit/trustedBy";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesNonProfitHero />
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
