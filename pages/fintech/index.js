import React from "react";
import Layout from "../../layouts/landing";
import IndustriesFinTechHero from "../../components/industries/Fintech/hero";
import BuildingPartner from "../../components/industries/Fintech/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Fintech/solutionsDeveloped";
import TrustedBy from "../../components/industries/Fintech/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesFinTechHero />
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
