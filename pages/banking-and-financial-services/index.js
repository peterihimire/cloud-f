import React from "react";
import Layout from "../../layouts/landing";
import IndustriesBankingHero from "../../components/industries/Banking/hero";
import BuildingPartner from "../../components/industries/Banking/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Banking/solutionsDeveloped";
import TrustedBy from "../../components/industries/Banking/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesBankingHero />
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
