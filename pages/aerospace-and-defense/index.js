import React from "react";
import Layout from "../../layouts/landing";
import IndustriesAerospaceHero from "../../components/industries/Aerospace/hero";
import BuildingPartner from "../../components/industries/Aerospace/buildingPartner";
import SolutionsDeveloped from "../../components/industries/Aerospace/solutionsDeveloped";
import TrustedBy from "../../components/industries/Aerospace/trustedBy";
// import WhyCloudfift from "../../components/aboutUs/whyCloudfift";
// import Teams from "../../components/aboutUs/teams";

const IndustiesFintech = () => {
  return (
    <>
      <IndustriesAerospaceHero />
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
